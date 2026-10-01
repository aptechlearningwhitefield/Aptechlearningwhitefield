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
  if (!response.ok) throw new Error(`Google Apps Script returned HTTP ${response.status}`);

  const result = await response.json() as { success?: boolean };
  if (result.success !== true) throw new Error("Google Apps Script did not confirm that the row was saved");
}
