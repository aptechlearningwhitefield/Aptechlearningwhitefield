type AppsScriptRow = Record<string, string | number | boolean>;

/** Append a flat record through the deployed Google Apps Script web app. */
export async function appendToAppsScript(row: AppsScriptRow): Promise<void> {
  const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT || process.env.VITE_GOOGLE_SHEETS_ENDPOINT;
  if (!endpoint) throw new Error("Google Apps Script endpoint is not configured");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(row),
    signal: AbortSignal.timeout(15_000),
  });
  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`Google Apps Script returned HTTP ${response.status}: ${responseText.slice(0, 300)}`);
  }

  let result: { success?: boolean; error?: string };
  try {
    result = JSON.parse(responseText) as { success?: boolean; error?: string };
  } catch {
    throw new Error(
      `Google Apps Script returned a non-JSON response (HTTP ${response.status}); check that the Web App is deployed for public access and returns JSON`,
    );
  }
  if (result.success !== true) {
    throw new Error(result.error || "Google Apps Script did not confirm that the row was saved");
  }
}
