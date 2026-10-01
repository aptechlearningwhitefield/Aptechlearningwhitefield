import { google } from "googleapis";

export const GOOGLE_SHEETS_HEADERS = {
  enquiries: [
    "Submitted At",
    "Enquiry Type",
    "Name",
    "Email",
    "Phone",
    "Message",
    "Company Name",
    "Institution Name",
    "Designation",
    "Role / Designation",
    "City",
    "Qualification",
    "Current Status",
    "Interested Course",
    "Learning Mode",
    "Joining Month",
    "Training Requirement",
    "Number of Employees",
    "Preferred Mode",
    "Program Type",
    "Number of Students",
    "Subject",
    "Additional Details (JSON)",
  ],
  reviews: ["Source", "Review ID", "Name", "Email", "Rating", "Review", "Submitted At", "Status"],
} as const;

export function getGoogleSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!spreadsheetId || !credentialsJson) {
    throw new Error("Google Sheets environment variables are not configured");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentialsJson),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return { spreadsheetId, sheets: google.sheets({ version: "v4", auth }) };
}

export async function ensureSheetTab(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
  title: string,
  headers: readonly string[],
): Promise<void> {
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.title",
  });
  const exists = metadata.data.sheets?.some((sheet) => sheet.properties?.title === title);

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title } } }] },
    });
  }

  const lastColumn = String.fromCharCode(64 + headers.length);
  const headerRange = `${title}!A1:${lastColumn}1`;
  const current = await sheets.spreadsheets.values.get({ spreadsheetId, range: headerRange });
  if (!current.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: headerRange,
      valueInputOption: "RAW",
      requestBody: { values: [[...headers]] },
    });
  }
}
