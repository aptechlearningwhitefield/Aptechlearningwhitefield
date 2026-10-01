interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(payload: Record<string, unknown>): void;
}

/** Vercel serverless equivalent of the health route in the Express server. */
export default function handler(req: ApiRequest, res: ApiResponse): void {
  if (req.method !== "GET") {
    res.status(405).json({ status: "error", message: "Method not allowed" });
    return;
  }

  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Hello World!",
  });
}
