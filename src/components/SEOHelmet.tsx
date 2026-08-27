import { Helmet } from '@dr.pogodin/react-helmet';
import React from 'react';
import { SEOMetadata, getHelmetConfig } from '@/lib/seo-metadata';

interface SEOHelmetProps {
  metadata: SEOMetadata;
  children?: React.ReactNode;
}

/**
 * Reusable SEO Helmet component
 * Simplifies adding SEO metadata to pages
 *
 * Usage:
 * ```tsx
 * import { SEOHelmet } from '@/components/SEOHelmet';
 * import { seoMetadata } from '@/lib/seo-metadata';
 *
 * export default function MyPage() {
 *   return (
 *     <>
 *       <SEOHelmet metadata={seoMetadata.home} />
 *       <!-- page content -->
 *     </>
 *   );
 * }
 * ```
 */
export function SEOHelmet({ metadata, children }: SEOHelmetProps) {
  const config = getHelmetConfig(metadata);

  return (
    <Helmet>
      <title>{config.title}</title>
      {config.meta?.map((metaTag, index) => (
        <meta key={index} {...metaTag} />
      ))}
      {config.link?.map((linkTag, index) => (
        <link key={index} {...linkTag} />
      ))}
      {metadata.structuredData && (
        <script type="application/ld+json">{JSON.stringify(metadata.structuredData)}</script>
      )}
      {children}
    </Helmet>
  );
}
