import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  id: string;
  rating: number;
  text: string;
  author: string;
  authorPhoto: string | null;
  authorUri: string | null;
  relativeTime: string;
  publishTime: string;
};

const PLACE_ID = "ChIJ1Y7NpCmQCUcRHzAsci1xVHI";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const MIN_RATING = 4.5;

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ reviews: GoogleReview[]; error: string | null }> => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      return { reviews: [], error: "Google Maps connector not configured" };
    }

    try {
      const res = await fetch(
        `${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=cs`,
        {
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAPS_API_KEY,
            "X-Goog-FieldMask": "reviews",
          },
        },
      );
      if (!res.ok) {
        return {
          reviews: [],
          error: `Places API ${res.status}`,
        };
      }
      const data = (await res.json()) as {
        reviews?: Array<{
          name: string;
          rating: number;
          publishTime: string;
          relativePublishTimeDescription: string;
          text?: { text: string };
          originalText?: { text: string };
          authorAttribution?: {
            displayName?: string;
            photoUri?: string;
            uri?: string;
          };
        }>;
      };

      const cutoff = Date.now() - ONE_YEAR_MS;
      const reviews: GoogleReview[] = (data.reviews ?? [])
        .filter((r) => r.rating >= MIN_RATING)
        .filter((r) => new Date(r.publishTime).getTime() >= cutoff)
        .filter((r) => (r.text?.text ?? r.originalText?.text ?? "").trim().length > 0)
        .sort(
          (a, b) =>
            new Date(b.publishTime).getTime() -
            new Date(a.publishTime).getTime(),
        )
        .map((r) => ({
          id: r.name,
          rating: r.rating,
          text: r.text?.text ?? r.originalText?.text ?? "",
          author: r.authorAttribution?.displayName ?? "Host Google",
          authorPhoto: r.authorAttribution?.photoUri ?? null,
          authorUri: r.authorAttribution?.uri ?? null,
          relativeTime: r.relativePublishTimeDescription,
          publishTime: r.publishTime,
        }));

      return { reviews, error: null };
    } catch (err) {
      console.error("getGoogleReviews failed:", err);
      return { reviews: [], error: "Nepodařilo se načíst recenze" };
    }
  },
);