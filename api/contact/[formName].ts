import { ensureSheetTab, getGoogleSheetsClient, GOOGLE_SHEETS_HEADERS } from "../_lib/google-sheets";

interface ApiRequest {
  method?: string;
  query: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(payload: Record<string, unknown>): void;
}

interface SubmissionBody {
  _gotcha?: unknown;
  user?: { email?: unknown; name?: unknown };
  conversation?: {
    messages_attributes?: Array<{ body?: unknown }>;
    data?: Record<string, unknown>;
  };
}

const ALLOWED_FORMS = new Set([
  "student-enquiry",
  "corporate-enquiry",
  "schools-colleges",
  "general-enquiry",
]);

function asText(value: unknown, maxLength = 1000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function asFormData(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

async function appendSubmission(row: string[]): Promise<void> {
  const { spreadsheetId, sheets } = getGoogleSheetsClient();
  await ensureSheetTab(sheets, spreadsheetId, "Enquiries", GOOGLE_SHEETS_HEADERS.enquiries);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Enquiries!A:W",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const formName = req.query.formName;
  if (typeof formName !== "string" || !ALLOWED_FORMS.has(formName)) {
    res.status(404).json({ success: false, error: "Unknown enquiry form" });
    return;
  }

  const body = (req.body && typeof req.body === "object" ? req.body : {}) as SubmissionBody;
  if (body._gotcha) {
    res.status(200).json({ success: true });
    return;
  }

  const user = body.user ?? {};
  const email = asText(user.email, 254).toLowerCase();
  const name = asText(user.name, 200);
  const conversation = body.conversation ?? {};
  const fields = asFormData(conversation.data);
  const message = asText(conversation.messages_attributes?.[0]?.body, 5000);
  const phone = asText(fields.Phone ?? fields.Mobile, 80);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ success: false, error: "A valid name and email are required" });
    return;
  }

  const row = [
    new Date().toISOString(),
    formName,
    name,
    email,
    phone,
    message,
    asText(fields["Company Name"]),
    asText(fields["Institution Name"]),
    asText(fields.Designation),
    asText(fields["Role / Designation"]),
    asText(fields.City),
    asText(fields.Qualification),
    asText(fields["Current Status"]),
    asText(fields["Interested Course"]),
    asText(fields["Learning Mode"]),
    asText(fields["Joining Month"]),
    asText(fields["Training Requirement"]),
    asText(fields["Number of Employees"]),
    asText(fields["Preferred Mode"]),
    asText(fields["Program Type"]),
    asText(fields["Number of Students"]),
    asText(fields.Subject),
    JSON.stringify(fields).slice(0, 5000),
  ];

  try {
    await appendSubmission(row);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("[enquiries] Could not save submission", error);
    res.status(503).json({ success: false, error: "Enquiry storage is not configured or is temporarily unavailable" });
  }
}
