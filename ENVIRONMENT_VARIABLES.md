# Environment variable reference

The project is a Vite and React frontend with Vercel Node functions in `api/`. There is no database or ORM configuration in the deployed application. The Vercel contact and review functions use Google Sheets as their persistent store. A separate Express server in `src/server/entry.ts` has a GoDaddy Inbox contact integration for non-Vercel deployments.

## Variables used by application code

| Variable | Purpose and code location | Scope | Required in Vercel? | Where to get it |
| --- | --- | --- | --- | --- |
| `GOOGLE_SHEETS_ENDPOINT` | Google Apps Script Web App URL used by `api/_lib/apps-script.ts` to write enquiry and review rows. | Server only | **Yes**, unless using the `VITE_GOOGLE_SHEETS_ENDPOINT` setting already configured in Vercel | Deploy the Apps Script as a Web App and copy its `/exec` URL. |
| `VITE_GOOGLE_SHEETS_ENDPOINT` | Existing endpoint setting; accepted as a fallback by `api/_lib/apps-script.ts` and used by the legacy browser helper in `src/lib/api-client.ts`. | Browser visible; endpoint URL only | Yes if not setting `GOOGLE_SHEETS_ENDPOINT` | Apps Script Web App deployment URL. |
| `GOOGLE_MAPS_API_KEY` | Server-only key used by `api/google-reviews.ts` to fetch Google Places details, reviews, and reviewer photo URLs. Restrict the key to the Places API (New). | Server only | Yes for live Google reviews | Google Cloud Console with Places API (New) enabled and billing configured. |
| `GOOGLE_PLACE_ID` | Google Places ID for the Aptech Learning Whitefield listing used by `api/google-reviews.ts`. | Server only | Yes for live Google reviews | Get the listing's Place ID from Google Maps Platform Place ID Finder. |
| `VITE_GA_MEASUREMENT_ID` | Optional override for GA4 in `src/lib/google-analytics.ts`. The provided measurement ID is the built-in default, so this variable can be omitted. | Browser visible; not a secret | No; add only to override the built-in ID | Google Analytics Admin â†’ Data streams â†’ Web stream. |
| GTM container | The public container ID is configured in `src/lib/google-analytics.ts`; the GTM script is loaded after analytics consent. It is not a secret or environment variable. | Browser visible | No | Google Tag Manager account/container. |
| `VITE_SOCIAL_FACEBOOK_URL` | Optional Facebook profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_INSTAGRAM_URL` | Optional Instagram profile override, validated in `src/lib/social-links.ts`. The configured official profile is the built-in default. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_LINKEDIN_URL` | Optional LinkedIn profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `VITE_SOCIAL_YOUTUBE_URL` | Optional YouTube profile link, validated in `src/lib/social-links.ts`. | Browser visible | No | Use the organization's official profile URL, if one exists. |
| `GODADDY_API_BASE_URL` | Selects development/test/production GoDaddy Inbox host for `api/contact/[formName].ts` and the separate Express handler. The brand-specific Inbox endpoint is configured in `src/lib/contact-form.config.json`. | Server only | Optional for production; set it only when using the matching test or development Inbox environment | Obtain the correct environment host from the existing GoDaddy/Airo deployment configuration. Do not guess it. |
| `VITE_GODADDY_API_HOST` | Server-side fallback used by `src/server/entry.ts` to derive `GODADDY_API_BASE_URL`. Despite its prefix, current references are server-side only. | Server runtime | No for Vercel | Obtain the matching host from the existing GoDaddy/Airo deployment configuration. |
| `FRONTEND_DOMAIN` | Adds a host to the Vite dev server's allowed-host and CORS lists in `vite.config.ts`. | Development/server only | No | Local development configuration. |
| `ALLOWED_ORIGINS` | Comma-separated origins for the Vite dev server's CORS/allowed-host configuration in `vite.config.ts`. | Development/server only | No | Local development configuration. |
| `VITE_PARENT_ORIGIN` | Adds a parent origin to Vite dev server host/CORS configuration in `vite.config.ts`. | Development/server only | No | Local builder/preview origin, if applicable. |
| `HOST` | Bind address for Vite or the standalone Express server. | Server runtime | No for Vercel functions | Set by the runtime or local deployment. |
| `PORT` | Port for Vite or the standalone Express server. | Server runtime | No for Vercel functions | Set by the runtime or local deployment. |

Vite's built-in `MODE`, `DEV`, and `PROD` flags are compile-time values, not deployment variables to configure. `NODE_ENV` is managed by the runtime/build tooling. `VITE_APP_NAME`, `VITE_PUBLIC_URL`, `VITE_API_URL`, `VITE_ENABLE_SOURCE_MAPPING`, `VITE_ENABLE_SSR`, and `VITE_SHOW_DEV_TOOLS` appeared in the old example or type declarations but are not read by the current app code, so they are not listed as active configuration.

## Vercel setup for enquiries and review submissions

Contact enquiries are forwarded to GoDaddy Inbox and archived through Google Apps Script. Website review submissions are also written through Apps Script. Set `GOOGLE_SHEETS_ENDPOINT` in Vercel, or keep the existing `VITE_GOOGLE_SHEETS_ENDPOINT` variable. The script must accept a flat JSON object and return `{ "success": true }`; its current implementation appends rows to the `Sheet1` tab. No service-account key is needed. Redeploy after changing the endpoint.

The GA4 identifier is public configuration and is already set as the application default. No GA environment variable is needed for the current measurement ID.

The homepage Google Reviews section requests the current review data from the Places API when it loads. Google Places returns up to five reviews for a place; reviewer photos are shown when Google provides a photo URL. Set `GOOGLE_MAPS_API_KEY` and `GOOGLE_PLACE_ID` in Vercel, then redeploy. The API response is cached for 15 minutes.

The GTM container and direct GA4 tag share the page's `dataLayer`. Make sure the GTM container is not also configured to send the same GA4 page-view and conversion events, or reports may double-count them. The GTM `<noscript>` iframe is intentionally omitted because it would load tags without the site's analytics consent flow.
