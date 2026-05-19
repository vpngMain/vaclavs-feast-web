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
const REVIEW_LIMIT = 4;

type NewPlacesReview = {
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
};

type LegacyPlacesReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text?: string;
  time: number;
};

function filterAndLimitReviews(reviews: GoogleReview[]) {
  const cutoff = Date.now() - ONE_YEAR_MS;

  return reviews
    .filter((r) => r.rating >= MIN_RATING)
    .filter((r) => new Date(r.publishTime).getTime() >= cutoff)
    .filter((r) => r.text.trim().length > 0)
    .sort(
      (a, b) =>
        new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime(),
    )
    .slice(0, REVIEW_LIMIT);
}

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ reviews: GoogleReview[]; error: string | null }> => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      return { reviews: [], error: "Google Maps connector not configured" };
    }

    try {
      const legacyRes = await fetch(
        `${GATEWAY_URL}/maps/api/place/details/json?place_id=${PLACE_ID}&language=cs&fields=reviews&reviews_sort=newest`,
        {
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAPS_API_KEY,
          },
        },
      );
      if (legacyRes.ok) {
        const legacyData = (await legacyRes.json()) as {
          status?: string;
          error_message?: string;
          result?: { reviews?: LegacyPlacesReview[] };
        };

        if (legacyData.status === "OK") {
          const reviews = filterAndLimitReviews(
            (legacyData.result?.reviews ?? []).map((r) => ({
              id: `${r.author_name ?? "google"}-${r.time}`,
              rating: r.rating,
              text: r.text ?? "",
              author: r.author_name ?? "Host Google",
              authorPhoto: r.profile_photo_url ?? null,
              authorUri: r.author_url ?? null,
              relativeTime: r.relative_time_description ?? "",
              publishTime: new Date(r.time * 1000).toISOString(),
            })),
          );

          return { reviews, error: null };
        }
      }

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
        reviews?: NewPlacesReview[];
      };

      const reviews = filterAndLimitReviews(
        (data.reviews ?? []).map((r) => ({
          id: r.name,
          rating: r.rating,
          text: r.text?.text ?? r.originalText?.text ?? "",
          author: r.authorAttribution?.displayName ?? "Host Google",
          authorPhoto: r.authorAttribution?.photoUri ?? null,
          authorUri: r.authorAttribution?.uri ?? null,
          relativeTime: r.relativePublishTimeDescription,
          publishTime: r.publishTime,
        })),
      );

      return { reviews, error: null };
    } catch (err) {
      console.error("getGoogleReviews failed:", err);
      return { reviews: [], error: "Nepodařilo se načíst recenze" };
    }
  },
);