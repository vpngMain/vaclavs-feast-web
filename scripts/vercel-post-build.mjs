/**
 * Post-build script: reorganizes Vite output into Vercel Build Output API format.
 *
 * Input:  dist/client/  (static assets)
 *         dist/server/server.js  (SSR handler, Web Fetch API)
 *
 * Output: .vercel/output/
 *   config.json                          routing rules
 *   static/                              static assets (served by Vercel CDN)
 *   functions/ssr.func/.vc-config.json  Node.js function config
 *   functions/ssr.func/index.js         CJS entry (adapter + bundled handler)
 */

import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import { build } from "esbuild";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const OUT = resolve(root, ".vercel/output");
const STATIC = resolve(OUT, "static");
const FUNC = resolve(OUT, "functions/ssr.func");

async function run() {
  // 1. Clean and recreate output dirs
  await rm(OUT, { recursive: true, force: true });
  await mkdir(STATIC, { recursive: true });
  await mkdir(FUNC, { recursive: true });

  // 2. Copy static client assets
  await cp(resolve(root, "dist/client"), STATIC, { recursive: true });
  console.log("✓ copied dist/client → .vercel/output/static");

  // 3. Bundle everything into a single CJS file.
  //    CJS format avoids ESM/CJS interop issues with packages that use
  //    dynamic require() internally (use-sync-external-store, react, etc).
  //    The Node.js adapter is inlined via stdin so esbuild handles it all.
  const adapterSrc = `
import { createRequire } from 'node:module';
import { Readable } from 'node:stream';

const require = createRequire(import.meta.url);
const handler = require('./_handler.cjs');
const fetchFn = handler.default?.fetch ?? handler.fetch ?? handler.default;

export default async function(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost';
  const url = new URL(req.url, protocol + '://' + host);

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v != null) headers.set(k, Array.isArray(v) ? v.join(', ') : v);
  }

  let body = undefined;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    body = Readable.toWeb(req);
  }

  const webReq = new Request(url.toString(), {
    method: req.method,
    headers,
    body,
    duplex: 'half',
  });

  const webRes = await fetchFn(webReq, {}, { waitUntil: () => {} });

  res.statusCode = webRes.status;
  webRes.headers.forEach((v, k) => res.setHeader(k, v));

  const buf = await webRes.arrayBuffer();
  res.end(Buffer.from(buf));
}
`.trim();

  // 3a. Bundle the TanStack Start server handler as CJS
  await build({
    entryPoints: [resolve(root, "dist/server/server.js")],
    bundle: true,
    format: "cjs",
    platform: "node",
    target: "node20",
    outfile: resolve(FUNC, "_handler.cjs"),
    minify: false,
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  });
  console.log("✓ bundled server.js → _handler.cjs");

  // 3b. Write the CJS adapter entry
  await writeFile(resolve(FUNC, "index.js"), adapterSrc);
  console.log("✓ wrote Node.js CJS adapter → index.js");

  // 4. Node.js function config
  await writeFile(
    resolve(FUNC, ".vc-config.json"),
    JSON.stringify(
      { runtime: "nodejs20.x", handler: "index.js", launcherType: "Nodejs" },
      null,
      2,
    ),
  );
  console.log("✓ wrote .vc-config.json");

  // 5. Vercel routing config
  const config = {
    version: 3,
    routes: [
      {
        src: "/assets/(.+)",
        headers: { "cache-control": "public, max-age=31536000, immutable" },
        continue: true,
      },
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/ssr" },
    ],
  };
  await writeFile(resolve(OUT, "config.json"), JSON.stringify(config, null, 2));
  console.log("✓ wrote config.json");

  console.log("\n✅ Vercel Build Output ready at .vercel/output/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
