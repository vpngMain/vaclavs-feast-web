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
const PLACES_API_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const MIN_RATING = 4.5;
const REVIEW_LIMIT = 4;

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
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return { reviews: [], error: "GOOGLE_MAPS_API_KEY not configured" };
    }

    try {
      const url = new URL(PLACES_API_URL);
      url.searchParams.set("place_id", PLACE_ID);
      url.searchParams.set("language", "cs");
      url.searchParams.set("fields", "reviews");
      url.searchParams.set("reviews_sort", "newest");
      url.searchParams.set("key", apiKey);

      const res = await fetch(url.toString());
      if (!res.ok) {
        return { reviews: [], error: `Places API ${res.status}` };
      }

      const data = (await res.json()) as {
        status?: string;
        error_message?: string;
        result?: { reviews?: LegacyPlacesReview[] };
      };

      if (data.status !== "OK") {
        return {
          reviews: [],
          error: data.error_message ?? `Places API status: ${data.status}`,
        };
      }

      const reviews = filterAndLimitReviews(
        (data.result?.reviews ?? []).map((r) => ({
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
    } catch (err) {
      console.error("getGoogleReviews failed:", err);
      return { reviews: [], error: "Nepodařilo se načíst recenze" };
    }
  },
);
