import { appendToAppsScript } from "../_lib/apps-script.js";
import contactFormConfig from "../../src/lib/contact-form.config.json" with { type: "json" };

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

function resolveInboxHost(): string {
  const configuredBase = process.env.GODADDY_API_BASE_URL || "";
  if (configuredBase.includes("dev-godaddy.com")) return "reamaze.dev-godaddy.com";
  if (configuredBase.includes("test-godaddy.com")) return "reamaze.test-godaddy.com";
  return "reamaze.godaddy.com";
}

async function forwardToInbox(
  formName: string,
  body: SubmissionBody,
  message: string,
  fields: Record<string, unknown>,
  visitorIp: string,
): Promise<void> {
  const config = contactFormConfig.forms[formName as keyof typeof contactFormConfig.forms];
  if (!config) throw new Error(`Inbox form configuration missing for ${formName}`);

  const payload = {
    conversation: {
      message: { body: message },
      category_id: config.categoryId,
      user: body.user,
      data: {
        __gd_contact_form_title: formName,
        ...fields,
        __gd_type: "contact",
        ...(config.overrideEmail && { __gd_override_email: config.overrideEmail }),
      },
    },
  };

  const url = `https://${config.brandId}.${resolveInboxHost()}/api/v2/contact`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Airo-Contact-Form": "true",
      "X-Forwarded-For": visitorIp,
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const responseText = await response.text().catch(() => "");
    throw new Error(`Inbox backend returned ${response.status}: ${responseText.slice(0, 500)}`);
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const queryFormName = req.query?.formName;
  const pathFormName = req.url
    ? new URL(req.url, "https://vercel.local").pathname.match(/^\/api\/contact\/([^/]+)\/?$/)?.[1]
    : undefined;
  const formName = Array.isArray(queryFormName) ? queryFormName[0] : queryFormName ?? pathFormName;
  if (typeof formName !== "string" || !ALLOWED_FORMS.has(formName)) {
    res.status(404).json({ success: false, error: "Unknown enquiry form" });
    return;
  }
  console.info("[enquiries] Contact submission received", { formName });

  const body = (req.body && typeof req.body === "object" ? req.body : {}) as SubmissionBody;
  if (body._gotcha) {
    res.status(200).json({ success: true });
    return;
  }

  const user = body.user ?? {};
  const forwardedFor = req.headers?.["x-forwarded-for"];
  const visitorIp = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)
    ?.split(",")[0]
    ?.trim() || "unknown";
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

  if (!message) {
    res.status(400).json({ success: false, error: "An enquiry message is required" });
    return;
  }

  const sheetRow: Record<string, string> = {
    "Enquiry Type": formName,
    Name: name,
    Email: email,
    Phone: phone,
    Message: message,
  };
  for (const [key, value] of Object.entries(fields)) sheetRow[key] = asText(value, 1000);

  // The Inbox remains the primary destination; archive through Apps Script
  // when available so spreadsheet issues never discard a lead.
  try {
    await appendToAppsScript(sheetRow);
    console.info("[enquiries] Apps Script archive confirmed", { formName });
  } catch (error) {
    console.error("[enquiries] Could not archive submission through Apps Script", error);
  }

  try {
    await forwardToInbox(formName, body, message, fields, visitorIp);
    console.info("[enquiries] GoDaddy Inbox delivery confirmed", { formName });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("[enquiries] Could not deliver submission to GoDaddy Inbox", error);
    res.status(502).json({ success: false, error: "Could not deliver enquiry to the Inbox; please try again" });
  }
}
