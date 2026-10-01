// API client for communicating with vite-plugin-api endpoints

const GOOGLE_SHEETS_ENDPOINT =
  import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT;

export async function submitEnquiry(
  enquiryType: string,
  data: Record<string, unknown>
) {
  if (!GOOGLE_SHEETS_ENDPOINT) {
    throw new Error('Google Sheets endpoint is not configured');
  }

  const response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      enquiryType,
      ...data,
    }),
  });

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status}`);
  }

  return { success: true };
}