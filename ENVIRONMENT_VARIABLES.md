# Environment variable reference

The project is a Vite and React frontend with Vercel Node functions in `api/`. There is no database or ORM configuration in the deployed application. The Vercel contact and review functions use Google Sheets as their persistent store. A separate Express server in `src/server/entry.ts` has a GoDaddy Inbox contact integration for non-Vercel deployments.

## Variables used by application code

| Variable | Purpose and code location | Scope | Required in Vercel? | Where to get it |
| --- | --- | --- | --- | --- |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Selects the private sheet used by `api/contact/[formName].ts`, `api/reviews.ts`, and `api/_lib/google-sheets.ts`. | Server only | **Yes**, for enquiry and review persistence | Create/select the Google Sheet and copy its ID from its URL. |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Authenticates the Google Sheets API client in `api/_lib/google-sheets.ts`. Contains private service account credentials. | Server only; secret | **Yes**, for enquiry and review persistence | Google Cloud Console: create a service account, enable Google Sheets API, create a JSON key, then share the target sheet with its `client_email` as Editor. |
| `VITE_GA_MEASUREMENT_ID` | Optional override for GA4 in `src/lib/google-analytics.ts`. The provided measurement ID is the built-in default, so this variable can be omitted. | Browser visible; not a secret | No; add only to override the built-in ID | Google Analytics Admin → Data streams → Web stream. |
| GTM container | The public container ID is configured in `src/lib/google-analytics.ts`; the GTM script is loaded after analytics consent. It is not a secret or environment variable. | Browser visible | No | Google Tag Manager account/container. |
| `VITE_SOCIAL_FACEBOOK_URL` | Optional Facebook profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_INSTAGRAM_URL` | Optional Instagram profile override, validated in `src/lib/social-links.ts`. The configured official profile is the built-in default. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_LINKEDIN_URL` | Optional LinkedIn profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_YOUTUBE_URL` | Optional YouTube profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `GODADDY_API_BASE_URL` | Selects development/test/production Inbox host for the separate Express handler in `src/server/api/contact/[formName]/POST.ts`. The handler sends to a configured brand-specific Inbox endpoint. | Server only | No for the current Vercel API implementation; needed only if deploying the Express server to a matching GoDaddy environment | Obtain the correct environment host from the existing GoDaddy/Airo deployment configuration. Do not guess it. |
| `VITE_GODADDY_API_HOST` | Server-side fallback used by `src/server/entry.ts` to derive `GODADDY_API_BASE_URL`. Despite its prefix, current references are server-side only. | Server runtime | No for Vercel | Obtain the matching host from the existing GoDaddy/Airo deployment configuration. |
| `FRONTEND_DOMAIN` | Adds a host to the Vite dev server's allowed-host and CORS lists in `vite.config.ts`. | Development/server only | No | Local development configuration. |
| `ALLOWED_ORIGINS` | Comma-separated origins for the Vite dev server's CORS/allowed-host configuration in `vite.config.ts`. | Development/server only | No | Local development configuration. |
| `VITE_PARENT_ORIGIN` | Adds a parent origin to Vite dev server host/CORS configuration in `vite.config.ts`. | Development/server only | No | Local builder/preview origin, if applicable. |
| `HOST` | Bind address for Vite or the standalone Express server. | Server runtime | No for Vercel functions | Set by the runtime or local deployment. |
| `PORT` | Port for Vite or the standalone Express server. | Server runtime | No for Vercel functions | Set by the runtime or local deployment. |

Vite's built-in `MODE`, `DEV`, and `PROD` flags are compile-time values, not deployment variables to configure. `NODE_ENV` is managed by the runtime/build tooling. `VITE_APP_NAME`, `VITE_PUBLIC_URL`, `VITE_API_URL`, `VITE_ENABLE_SOURCE_MAPPING`, `VITE_ENABLE_SSR`, and `VITE_SHOW_DEV_TOOLS` appeared in the old example or type declarations but are not read by the current app code, so they are not listed as active configuration.

## Vercel setup for data persistence

Add `GOOGLE_SHEETS_SPREADSHEET_ID` and `GOOGLE_SERVICE_ACCOUNT_JSON` under Vercel Project → Settings → Environment Variables for Production (and Preview if previews should save data). Keep both server-only; never prefix either with `VITE_`. Redeploy after setting them. Until configured and authorized, contact and review writes return a safe service error; they do not silently claim the data was saved.

The GA4 identifier is public configuration and is already set as the application default. No GA environment variable is needed for the current measurement ID.

The GTM container and direct GA4 tag share the page's `dataLayer`. Make sure the GTM container is not also configured to send the same GA4 page-view and conversion events, or reports may double-count them. The GTM `<noscript>` iframe is intentionally omitted because it would load tags without the site's analytics consent flow.
