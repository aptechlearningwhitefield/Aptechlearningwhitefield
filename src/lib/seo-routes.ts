/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/courses", changefreq: "monthly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/corporate-training", changefreq: "monthly", priority: 0.8 },
  { path: "/schools-colleges", changefreq: "monthly", priority: 0.8 },
  { path: "/placements", changefreq: "monthly", priority: 0.8 },
  { path: "/blogs", changefreq: "monthly", priority: 0.8 },
  { path: "/courses/ai-machine-learning", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/generative-ai", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/genai-accelerator", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/prompt-engineering", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/innovate-generative-ai", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/rapid-app-development", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/data-science", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/data-analytics-power-bi", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/python", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/data-science-essentials", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/data-visualization-power-bi", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/foundation-ai-ml", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/advanced-ai-ml", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/cybersecurity", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/full-stack", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/cloud-computing", changefreq: "monthly", priority: 0.7 },
  { path: "/courses/microsoft-technologies", changefreq: "monthly", priority: 0.6 },
  { path: "/courses/digital-marketing", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/ai-machine-learning-career-2026", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/data-science-vs-data-analytics", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/python-for-beginners-whitefield", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/cybersecurity-career-bangalore", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/generative-ai-workplace-productivity", changefreq: "monthly", priority: 0.6 },
  { path: "/blogs/cloud-computing-aws-azure-guide", changefreq: "monthly", priority: 0.6 },
];
