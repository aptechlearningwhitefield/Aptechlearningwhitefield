interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(payload: Record<string, unknown>): void;
}

const STAR_RATING = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE"] as const;

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== "GET") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    res.status(503).json({ success: false, error: "Google reviews are not configured" });
    return;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,googleMapsUri,reviews.googleMapsUri,reviews.name,reviews.rating,reviews.publishTime,reviews.updateTime,reviews.text,reviews.authorAttribution",
      },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      const details = await response.text().catch(() => "");
      throw new Error(`Google Places API returned ${response.status}: ${details.slice(0, 300)}`);
    }

    const place = await response.json() as {
      displayName?: { text?: string };
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: Array<{
        name?: string;
        rating?: number;
        publishTime?: string;
        updateTime?: string;
        googleMapsUri?: string;
        text?: { text?: string };
        authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
      }>;
    };

    res.setHeader("Cache-Control", "public, s-maxage=900, stale-while-revalidate=3600");
    res.status(200).json({
      success: true,
      business: {
        name: place.displayName?.text ?? "Aptech Learning Whitefield",
        rating: place.rating ?? null,
        userRatingCount: place.userRatingCount ?? 0,
        googleMapsUri: place.googleMapsUri ?? "https://maps.google.com/?q=Aptech+Learning+Whitefield+Bangalore",
      },
      reviews: (place.reviews ?? []).map((review, index) => {
        const rating = Math.max(1, Math.min(5, Math.round(review.rating ?? 5)));
        return {
          reviewId: review.name ?? `${review.authorAttribution?.displayName ?? "review"}-${index}`,
          reviewer: {
            displayName: review.authorAttribution?.displayName ?? "Google user",
            profilePhotoUrl: review.authorAttribution?.photoUri,
            profileUrl: review.authorAttribution?.uri,
          },
          starRating: STAR_RATING[rating],
          comment: review.text?.text ?? "",
          createTime: review.publishTime ?? review.updateTime ?? new Date().toISOString(),
          updateTime: review.updateTime ?? review.publishTime ?? new Date().toISOString(),
          googleMapsUri: review.googleMapsUri,
        };
      }),
    });
  } catch (error) {
    console.error("[google-reviews] Could not load Google Places reviews", error);
    res.status(502).json({ success: false, error: "Google reviews are temporarily unavailable" });
  }
}
