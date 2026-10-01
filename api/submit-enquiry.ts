import contactHandler from "./contact/[formName].js";

interface ApiRequest {
  method?: string;
  url?: string;
  query?: Record<string, string | string[] | undefined>;
  headers?: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(payload: Record<string, unknown>): void;
}

/** Stable, non-dynamic endpoint for all website enquiry forms on Vercel. */
export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body as Record<string, unknown>
    : {};
  const formName = body.formName;

  if (typeof formName !== "string") {
    res.status(400).json({ success: false, error: "Enquiry form type is required" });
    return;
  }

  await contactHandler({
    method: req.method?.toUpperCase(),
    url: req.url,
    query: { ...req.query, formName },
    headers: req.headers,
    body: req.body,
  }, res);
}
