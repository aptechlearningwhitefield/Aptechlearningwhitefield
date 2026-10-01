import { randomUUID } from "node:crypto";
import { appendToAppsScript } from "./_lib/apps-script.js";

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

  if (req.method === "GET") {
    // Loading the review form must not require a spreadsheet write.
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

  try {
    await appendToAppsScript({
      "Submission Type": "Website Review",
      "Review ID": randomUUID(),
      Name: name,
      Email: email,
      Rating: rating,
      Review: review,
      Status: "Pending review",
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("[reviews] Could not save submission through Apps Script", error);
    res.status(503).json({ success: false, error: "Review storage is not configured or is temporarily unavailable" });
  }
}
