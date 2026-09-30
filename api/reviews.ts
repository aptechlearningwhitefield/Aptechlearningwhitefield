import { randomUUID } from "node:crypto";
import { ensureSheetTab, getGoogleSheetsClient, GOOGLE_SHEETS_HEADERS } from "./_lib/google-sheets";
import { googleReviews } from "../src/lib/google-reviews-data";

interface ApiRequest {
  method?: string;
  body?: unknown;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(payload: Record<string, unknown>): void;
}

interface ReviewSubmission {
  _gotcha?: unknown;
  name?: unknown;
  email?: unknown;
  rating?: unknown;
  review?: unknown;
}

function text(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function syncDisplayedGoogleReviews(
  sheets: ReturnType<typeof getGoogleSheetsClient>["sheets"],
  spreadsheetId: string,
): Promise<void> {
  await ensureSheetTab(sheets, spreadsheetId, "Reviews", GOOGLE_SHEETS_HEADERS.reviews);
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Reviews!B2:B",
  });
  const knownIds = new Set((existing.data.values ?? []).map((row) => String(row[0] ?? "")));
  const starValues: Record<string, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
  const rows = googleReviews
    .filter((review) => !knownIds.has(review.reviewId))
    .map((review) => [
      "Google",
      review.reviewId,
      review.reviewer.displayName,
      "",
      String(starValues[review.starRating] ?? 5),
      review.comment ?? "",
      review.createTime,
      "Published",
    ]);

  if (rows.length) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Reviews!A:H",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: rows },
    });
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== "GET" && req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const body = (req.body && typeof req.body === "object" ? req.body : {}) as ReviewSubmission;
  if (req.method === "POST" && body._gotcha) {
    res.status(200).json({ success: true });
    return;
  }

  try {
    const { sheets, spreadsheetId } = getGoogleSheetsClient();
    await syncDisplayedGoogleReviews(sheets, spreadsheetId);

    if (req.method === "GET") {
      res.status(200).json({ success: true });
      return;
    }

    const name = text(body.name, 120);
    const email = text(body.email, 254).toLowerCase();
    const review = text(body.review, 3000);
    const rating = Number(body.rating);

    if (!name || !review || review.length < 10 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      res.status(400).json({ success: false, error: "Please provide your name, a review, and a 1–5 star rating" });
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ success: false, error: "Please provide a valid email address" });
      return;
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Reviews!A:H",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [["Website", randomUUID(), name, email, String(rating), review, new Date().toISOString(), "Pending review"]],
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("[reviews] Could not save or sync reviews", error);
    res.status(503).json({ success: false, error: "Review storage is not configured or is temporarily unavailable" });
  }
}
