/**
 * SEO Metadata Configuration for Aptech Learning Whitefield
 * Centralized management of title, description, keywords, and structured data
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

const SITE_URL = 'https://www.aptechlearning-whitefield.com';
const ORG_NAME = 'Aptech Learning Whitefield';
const LOCATION = 'Whitefield, Bangalore';

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'Best IT Training Institute in Whitefield Bangalore | Aptech Learning',
    description:
      'Industry-ready IT training courses in AI, Data Science, Python, Full Stack Development and more at Aptech Learning Whitefield. AICTE approved. Book free counselling today.',
    keywords:
      'best IT training in Whitefield, programming courses Bangalore, AI ML training, Full Stack Development course, Python training, affordable IT courses',
    canonical: `${SITE_URL}/`,
    ogTitle: 'Aptech Learning Whitefield | Professional IT Training Institute',
    ogDescription:
      'Master AI, Data Science, and Full Stack Development with 100% placement support at Aptech Learning.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: ORG_NAME,
      description:
        'Leading IT training institute offering industry-ready courses in AI, Data Science, Python, and Full Stack Development',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: LOCATION,
        addressCountry: 'IN',
      },
      sameAs: ['https://www.linkedin.com/company/aptech-learning'],
    },
  },

  about: {
    title: 'About Aptech Learning Whitefield | AICTE Approved IT Training Center',
    description:
      'Learn about Aptech Learning Whitefield - AICTE approved training center offering industry-ready IT courses since 2024. Expert instructors, 100% placement assistance.',
    keywords:
      'about Aptech Learning, AICTE approved training center, IT training institute Whitefield, professional IT courses',
    canonical: `${SITE_URL}/about`,
    ogTitle: 'About Aptech Learning Whitefield',
    ogDescription:
      'Discover our mission to provide industry-ready IT training with expert mentors and 100% placement support.',
  },

  contact: {
    title: 'Contact Aptech Learning Whitefield | Get Free Career Counselling',
    description:
      'Contact Aptech Learning Whitefield for course information, admissions, and free career counselling. Visit us at Whitefield, Bangalore or call for details.',
    keywords:
      'contact Aptech Learning, admission Whitefield, career counselling, IT training contact',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Us - Aptech Learning Whitefield',
    ogDescription: 'Get in touch with us for course information and free career counselling.',
  },

  placements: {
    title: 'Placements | 100% Job Placement Assistance at Aptech Learning',
    description:
      'Aptech Learning Whitefield provides 100% placement assistance with internship opportunities and industry connections. View our placement statistics and success stories.',
    keywords:
      'IT job placement Whitefield, placement assistance, internship opportunities, job guarantee, career placement',
    canonical: `${SITE_URL}/placements`,
    ogTitle: 'Placements & Career Support - Aptech Learning',
    ogDescription: '100% placement assistance with connections to leading IT companies.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Thing',
      name: 'Placement Assistance Program',
      description: '100% job placement assistance for IT professionals',
    },
  },

  corporateTraining: {
    title: 'Corporate Training Programs | Customized IT Solutions for Enterprises',
    description:
      'Aptech Learning offers corporate training in AI, Data Science, Cloud, and Full Stack Development. Customized programs for enterprise skill development with certification.',
    keywords:
      'corporate training programs, enterprise IT training, team upskilling, cloud training, AI training for businesses',
    canonical: `${SITE_URL}/corporate-training`,
    ogTitle: 'Corporate Training Solutions - Aptech Learning',
    ogDescription: 'Tailored IT training programs designed for enterprise skill development.',
  },

  schoolsColleges: {
    title:
      'Training for Schools & Colleges | Curriculum Integration & Student Programs',
    description:
      'Aptech Learning partners with schools and colleges to offer IT curriculum integration, student training programs, and career guidance workshops.',
    keywords:
      'school IT training, college partnership programs, student training, skill development for students, career guidance',
    canonical: `${SITE_URL}/schools-colleges`,
    ogTitle: 'Educational Partnerships - Aptech Learning',
    ogDescription: 'Partnering with schools and colleges for comprehensive IT training.',
  },

  notFound: {
    title: 'Page Not Found | Aptech Learning Whitefield',
    description:
      'The page you are looking for could not be found. Return to Aptech Learning Whitefield homepage to explore our IT training courses.',
    canonical: `${SITE_URL}/404`,
  },

  // Course-specific metadata (generic template)
  courseTemplate: {
    title: '{courseName} Course | Aptech Learning Whitefield - Industry-Ready Training',
    description:
      'Master {courseName} with hands-on projects and industry expertise. 100% placement assistance. Enroll at Aptech Learning Whitefield.',
    keywords: '{courseName}, {courseName} course, {courseName} training, learn {courseName}, certification',
  },

  // Blog post template
  blogTemplate: {
    title: '{postTitle} | Aptech Learning Blog',
    description:
      'Read insights on {postTitle} from Aptech Learning experts. Industry trends, tips, and best practices for IT professionals.',
    keywords: '{postTitle}, IT training, professional development, industry insights',
  },
};

/**
 * Get SEO metadata for a page
 * Falls back to home metadata if page not found
 */
export function getSEOMetadata(pageName: string): SEOMetadata {
  return seoMetadata[pageName] || seoMetadata.home;
}

/**
 * Generate Helmet configuration from metadata
 * Useful for consistent SEO implementation across pages
 */
export function getHelmetConfig(metadata: SEOMetadata) {
  return {
    title: metadata.title,
    meta: [
      {
        name: 'description',
        content: metadata.description,
      },
      ...(metadata.keywords
        ? [
            {
              name: 'keywords',
              content: metadata.keywords,
            },
          ]
        : []),
      ...(metadata.ogTitle
        ? [
            {
              property: 'og:title',
              content: metadata.ogTitle,
            },
          ]
        : []),
      ...(metadata.ogDescription
        ? [
            {
              property: 'og:description',
              content: metadata.ogDescription,
            },
          ]
        : []),
      ...(metadata.ogImage
        ? [
            {
              property: 'og:image',
              content: metadata.ogImage,
            },
          ]
        : []),
      {
        property: 'og:url',
        content: metadata.canonical || SITE_URL,
      },
      {
        name: 'twitter:title',
        content: metadata.ogTitle || metadata.title,
      },
      {
        name: 'twitter:description',
        content: metadata.ogDescription || metadata.description,
      },
    ],
    ...(metadata.canonical && {
      link: [
        {
          rel: 'canonical',
          href: metadata.canonical,
        },
      ],
    }),
  };
}
