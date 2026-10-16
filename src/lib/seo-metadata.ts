import { SITE_URL } from "./site-url";
import { socialProfileList } from "./social-links";

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

export const courseListingSeoKeywords =
  "software training institute in whitefield, short term computer courses with job placement, aptech course fees, aptech whitefield fees, aptech course fees and duration, computer courses with emi or education loan, computer course for beginners, it for beginners course, it courses, computer courses, software courses, it courses in whitefield, it courses in bangalore, best it courses in bangalore, it courses near itpl, it courses near me, it courses fees in bangalore, it courses with placement in whitefield, computer courses in whitefield, computer courses in bangalore, software courses in whitefield, software courses bangalore, it courses in marathahalli, it courses in kr puram";

export const blogListingSeoKeywords =
  "which course has more job opportunities in bangalore, aptech vs online courses which is better, online vs offline computer classes which is better, it career guide, it jobs, tech career tips, it career guide in whitefield, it career guide in bangalore, it career guide near itpl, it jobs in bangalore, it jobs in marathahalli, it jobs in whitefield, tech career tips in kr puram, tech career tips for freshers in bangalore, tech career tips in whitefield, it career guide guide for beginners";

export const courseSeoKeywords: Record<string, string> = {
  "ai-machine-learning":
    "ai ml course in whitefield, machine learning training bangalore, artificial intelligence course in bangalore, ai ml course, artificial intelligence course, machine learning course, ai ml course near itpl, ai ml course in bangalore, best ai ml course in bangalore, ai ml course near me, ai ml course fees in bangalore, ai ml course with placement in whitefield, artificial intelligence course in whitefield, artificial intelligence course in marathahalli, machine learning course in whitefield, machine learning course bangalore, ai ml course in marathahalli, ai ml course in kr puram",
  "generative-ai":
    "artificial intelligence course in bangalore, ai ml course in whitefield, generative ai course, genai course, llm course, generative ai course in whitefield, generative ai course in bangalore, best generative ai course in bangalore, generative ai course near itpl, generative ai course near me, generative ai course fees in bangalore, generative ai course with placement in whitefield, genai course in whitefield, genai course in bangalore, llm course in whitefield, llm course bangalore, generative ai course in marathahalli, generative ai course in kr puram",
  "genai-accelerator":
    "weekend it course in whitefield for working professionals, artificial intelligence course in bangalore, genai accelerator, generative ai course for professionals, weekend ai course, genai accelerator in whitefield, genai accelerator in bangalore, best genai accelerator in bangalore, genai accelerator near itpl, genai accelerator near me, genai accelerator fees in bangalore, genai accelerator with placement in whitefield, generative ai course for professionals in whitefield, generative ai course for professionals in bangalore, weekend ai course in whitefield, weekend ai course bangalore, genai accelerator in marathahalli, genai accelerator in kr puram",
  "prompt-engineering":
    "prompt engineering course in bangalore, prompt engineering course in whitefield, artificial intelligence course in bangalore, is ai ml hard for beginners, prompt engineering course, chatgpt course, ai tools course, prompt engineering course near itpl, best prompt engineering course in bangalore, prompt engineering course near me, prompt engineering course fees in bangalore, prompt engineering course with placement in whitefield, chatgpt course in whitefield, chatgpt course in bangalore, ai tools course in whitefield, ai tools course bangalore, prompt engineering course in marathahalli, prompt engineering course in kr puram",
  "innovate-generative-ai":
    "generative ai course for beginners, ai course for beginners in whitefield, artificial intelligence course in bangalore, computer course for beginners, generative ai for beginners, ai course for beginners, no code ai course, generative ai for beginners in whitefield, generative ai for beginners in bangalore, best generative ai for beginners in bangalore, generative ai for beginners near itpl, generative ai for beginners near me, generative ai for beginners fees in bangalore, generative ai for beginners with placement in whitefield, ai course for beginners in bangalore, no code ai course in whitefield, no code ai course bangalore, generative ai for beginners in marathahalli, generative ai for beginners in kr puram",
  "rapid-app-development":
    "rapid app development course in whitefield, app development course in bangalore, web development course in bangalore, software training institute in whitefield, app development course, low code development course, rapid application development course, app development course in whitefield, best app development course in bangalore, app development course near itpl, app development course near me, app development course fees in bangalore, app development course with placement in whitefield, low code development course in whitefield, low code development course in bangalore, rapid application development course in whitefield, rapid application development course bangalore, app development course in marathahalli, app development course in kr puram",
  "data-science":
    "data science course in whitefield, data science course in bangalore with placement, smart pro data science aptech, data science course, data science training, data science certification, data science course near itpl, data science course in bangalore, best data science course in bangalore, data science course near me, data science course fees in bangalore, data science course with placement in whitefield, data science training in whitefield, data science training in bangalore, data science certification in whitefield, data science certification bangalore, data science course in marathahalli, data science course in kr puram",
  "data-science-essentials":
    "can non it graduate learn data science, data science course in whitefield, data science for beginners, data science course for non it, data science basics course, data science for beginners in whitefield, data science for beginners in bangalore, best data science for beginners in bangalore, data science for beginners near itpl, data science for beginners near me, data science for beginners fees in bangalore, data science for beginners with placement in whitefield, data science course for non it in whitefield, data science course for non it in bangalore, data science basics course in whitefield, data science basics course bangalore, data science for beginners in marathahalli, data science for beginners in kr puram",
  "data-analytics-power-bi":
    "data analyst jobs in whitefield, mis course in bangalore, best it course after bcom, data analytics course, power bi course, data analyst course, data analytics course in whitefield, data analytics course in bangalore, best data analytics course in bangalore, data analytics course near itpl, data analytics course near me, data analytics course fees in bangalore, data analytics course with placement in whitefield, power bi course in whitefield, power bi course in bangalore, data analyst course in whitefield, data analyst course bangalore, data analytics course in marathahalli, data analytics course in kr puram",
  "data-visualization-power-bi":
    "advanced excel course in whitefield, excel training for jobs, tally vs advanced excel for accounting jobs, mis course in bangalore, advanced excel course, power bi training, data visualization course, advanced excel course near itpl, advanced excel course in bangalore, best advanced excel course in bangalore, advanced excel course near me, advanced excel course fees in bangalore, advanced excel course with placement in whitefield, power bi training in whitefield, power bi training in bangalore, data visualization course in whitefield, data visualization course bangalore, advanced excel course in marathahalli, advanced excel course in kr puram",
  python:
    "python course in whitefield, python training in bangalore, aptech certified python developer, python course fees in bangalore, what is the fee for python course at aptech, python course, python training, python certification, python course near itpl, python course in bangalore, best python course in bangalore, python course near me, python course fees in marathahalli, python course with placement in whitefield, python training in whitefield, python training in kr puram, python certification in whitefield, python certification bangalore, python course in marathahalli, python course in kr puram",
  "foundation-ai-ml":
    "is ai ml hard for beginners, ai ml course in whitefield, ai ml for beginners, foundation ai course, basic machine learning course, ai ml for beginners in whitefield, ai ml for beginners in bangalore, best ai ml for beginners in bangalore, ai ml for beginners near itpl, ai ml for beginners near me, ai ml for beginners fees in bangalore, ai ml for beginners with placement in whitefield, foundation ai course in whitefield, foundation ai course in bangalore, basic machine learning course in whitefield, basic machine learning course bangalore, ai ml for beginners in marathahalli, ai ml for beginners in kr puram",
  "advanced-ai-ml":
    "machine learning training bangalore, artificial intelligence course in bangalore, advanced machine learning course, deep learning course, advanced ai course, advanced machine learning course in whitefield, advanced machine learning course in bangalore, best advanced machine learning course in bangalore, advanced machine learning course near itpl, advanced machine learning course near me, advanced machine learning course fees in bangalore, advanced machine learning course with placement in whitefield, deep learning course in whitefield, deep learning course in bangalore, advanced ai course in whitefield, advanced ai course bangalore, advanced machine learning course in marathahalli, advanced machine learning course in kr puram",
  cybersecurity:
    "cyber security course in whitefield, cyber security course in bangalore, software training institute in whitefield, skills needed to get it job in bangalore, cyber security course, ethical hacking course, network security course, cyber security course near itpl, best cyber security course in bangalore, cyber security course near me, cyber security course fees in bangalore, cyber security course with placement in whitefield, ethical hacking course in whitefield, ethical hacking course in bangalore, network security course in whitefield, network security course bangalore, cyber security course in marathahalli, cyber security course in kr puram",
  "full-stack":
    "full stack developer course in whitefield, java full stack course in whitefield, java training institute in bangalore, spring boot course bangalore, aptech smart pro java, web development course in bangalore, mern stack course bangalore, full stack developer course, java full stack course, mern stack course, full stack developer course near itpl, full stack developer course in bangalore, best full stack developer course in bangalore, full stack developer course near me, full stack developer course fees in bangalore, full stack developer course with placement in whitefield, java full stack course in bangalore, mern stack course in whitefield, full stack developer course in marathahalli, full stack developer course in kr puram",
  "cloud-computing":
    "cloud computing course in whitefield, aws course in bangalore, software training institute in whitefield, best it course after bsc, cloud computing course, aws course, azure course, cloud computing course near itpl, cloud computing course in bangalore, best cloud computing course in bangalore, cloud computing course near me, cloud computing course fees in bangalore, cloud computing course with placement in whitefield, aws course in whitefield, aws course in marathahalli, azure course in whitefield, azure course bangalore, cloud computing course in marathahalli, cloud computing course in kr puram",
  "microsoft-technologies":
    ".net course in whitefield, asp.net training in bangalore, .net course, asp.net course, c# course, .net course near itpl, .net course in bangalore, best .net course in bangalore, .net course near me, .net course fees in bangalore, .net course with placement in whitefield, asp.net course in whitefield, asp.net course in bangalore, c# course in whitefield, c# course bangalore, .net course in marathahalli, .net course in kr puram",
  "digital-marketing":
    "digital marketing course in whitefield, digital marketing institute in bangalore, digital marketing course, seo course, google ads course, digital marketing course near itpl, digital marketing course in bangalore, best digital marketing course in bangalore, digital marketing course near me, digital marketing course fees in bangalore, digital marketing course with placement in whitefield, seo course in whitefield, seo course in bangalore, google ads course in whitefield, google ads course bangalore, digital marketing course in marathahalli, digital marketing course in kr puram",
};

export const blogSeoKeywords: Record<string, string> = {
  "ai-machine-learning-career-2026":
    "best course for career switch to it, which course has more job opportunities in bangalore, ai ml career, ai jobs, machine learning jobs, ai ml career in whitefield, ai ml career in bangalore, ai ml career near itpl, ai jobs in bangalore, ai jobs in marathahalli, ai jobs in whitefield, machine learning jobs in kr puram, machine learning jobs for freshers in bangalore, machine learning jobs in whitefield, ai ml career guide for beginners",
  "data-science-vs-data-analytics":
    "data science vs full stack development, can non it graduate learn data science, data analyst jobs in whitefield, data science vs data analytics, data science career, data analyst career, data science vs data analytics in whitefield, data science vs data analytics in bangalore, data science vs data analytics near itpl, data science career in bangalore, data science career in marathahalli, data science career in whitefield, data analyst career in kr puram, data analyst career for freshers in bangalore, data analyst career in whitefield, data science vs data analytics guide for beginners",
  "python-for-beginners-whitefield":
    "python vs java which to learn first, python developer salary in bangalore for freshers, python for beginners, learn python, python jobs, python for beginners in whitefield, python for beginners in bangalore, python for beginners near itpl, learn python in bangalore, learn python in marathahalli, learn python in whitefield, python jobs in kr puram, python jobs for freshers in bangalore, python jobs in whitefield, python for beginners guide for beginners",
  "cybersecurity-career-bangalore":
    "skills needed to get it job in bangalore, which course has more job opportunities in bangalore, cyber security career, cyber security jobs, ethical hacking career, cyber security career in whitefield, cyber security career in bangalore, cyber security career near itpl, cyber security jobs in bangalore, cyber security jobs in marathahalli, cyber security jobs in whitefield, ethical hacking career in kr puram, ethical hacking career for freshers in bangalore, ethical hacking career in whitefield, cyber security career guide for beginners",
  "generative-ai-workplace-productivity":
    "weekend computer classes for working professionals whitefield, artificial intelligence course in bangalore, generative ai at work, ai productivity tools, ai skills for professionals, generative ai at work in whitefield, generative ai at work in bangalore, generative ai at work near itpl, ai productivity tools in bangalore, ai productivity tools in marathahalli, ai productivity tools in whitefield, ai skills for professionals in kr puram, ai skills for professionals for freshers in bangalore, ai skills for professionals in whitefield, generative ai at work guide for beginners",
  "cloud-computing-aws-azure-guide":
    "best it course after bsc, which course has more job opportunities in bangalore, aws vs azure, cloud computing career, cloud certification, aws vs azure in whitefield, aws vs azure in bangalore, aws vs azure near itpl, cloud computing career in bangalore, cloud computing career in marathahalli, cloud computing career in whitefield, cloud certification in kr puram, cloud certification for freshers in bangalore, cloud certification in whitefield, aws vs azure guide for beginners",
};

export function getCourseSeoKeywords(courseId: string): string | undefined {
  return courseSeoKeywords[courseId];
}

export function getBlogSeoKeywords(slug: string): string | undefined {
  return blogSeoKeywords[slug];
}

const ORG_NAME = 'Aptech Learning Whitefield';

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'Best IT Training Institute in Whitefield Bangalore | Aptech Learning',
    description:
      'Industry-ready IT training courses in AI, Data Science, Python, Full Stack Development and more at Aptech Learning Whitefield. AICTE approved. Book free counselling today.',
    keywords:
      'computer institute in whitefield, aptech whitefield, aptech whitefield bangalore, computer training institute in whitefield bangalore, computer classes in whitefield, aptech near me, computer course near me, aptech bangalore, computer institute, it training institute, computer training centre, best computer institute in whitefield, computer institute near itpl, it training institute in bangalore, it training institute near itpl whitefield, computer training centre in whitefield, best computer institute in bangalore, computer institute near marathahalli, computer institute in mahadevapura, top it training institute in whitefield',
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
        streetAddress: 'Near Kadugodi Tree Park Metro',
        addressLocality: 'Whitefield',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9846999,
        longitude: 77.7465325,
      },
      telephone: '+91-74113-33500',
      email: 'aptechlearningwhitefield@gmail.com',
      openingHours: 'Mo-Sa 09:00-18:00',
      sameAs: socialProfileList,
    },
  },

  about: {
    title: 'About Aptech Learning Whitefield | AICTE Approved IT Training Center',
    description:
      'Learn about Aptech Learning Whitefield - AICTE approved training center offering industry-ready IT courses since 2024. Expert instructors, 100% placement assistance.',
    keywords:
      'aptech learning whitefield, aptech computer education whitefield, is aptech worth it, aptech certificate value, is aptech certificate valid for jobs, is aptech recognised by government of india, aptech whitefield reviews, aptech learning, aptech computer education, aptech institute, aptech learning bangalore, aptech computer education bangalore, aptech institute whitefield, aptech institute bangalore, aptech learning near itpl, aptech computer education near itpl, aptech institute near me, aptech computer education near me, aptech learning centre whitefield',
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
      'aptech whitefield contact number, aptech whitefield address, aptech whitefield timings, free demo class computer course whitefield, computer institute in marathahalli, computer classes in kadugodi, computer institute near hoodi, computer institute near brookefield, computer course in kr puram, computer course in mahadevapura, computer classes in varthur, computer classes near hope farm, computer classes in kundalahalli, computer institute near hoskote, aptech whitefield, aptech centre, computer institute, aptech whitefield location, aptech whitefield phone number, aptech whitefield near itpl, aptech whitefield directions, aptech centre near me, aptech centre in whitefield, computer institute near itpl whitefield, computer institute near me, aptech whitefield enquiry, aptech whitefield working hours',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Us - Aptech Learning Whitefield',
    ogDescription: 'Get in touch with us for course information and free career counselling.',
  },

  placements: {
    title: 'Placements | 100% Job Placement Assistance at Aptech Learning',
    description:
      'Aptech Learning Whitefield provides 100% placement assistance with internship opportunities and industry connections. View our placement statistics and success stories.',
    keywords:
      'aptech whitefield placement, aptech placement record, companies hiring freshers near itpl, it placement training, job oriented courses, it jobs for freshers, it placement training in whitefield, it placement training in bangalore, job oriented courses in whitefield, job oriented courses in bangalore, it jobs for freshers in whitefield, it jobs for freshers near itpl, it jobs near itpl, placement assistance courses bangalore, courses with job guarantee in whitefield, campus placement training bangalore',
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
      'it training institute near itpl, corporate it training, employee upskilling, corporate ai training, corporate it training in bangalore, corporate it training in whitefield, corporate it training near itpl, employee upskilling programs in bangalore, employee upskilling whitefield, corporate ai training for companies in bangalore, corporate ai training near itpl, corporate training companies in whitefield, corporate python training bangalore, corporate power bi training bangalore, corporate data science training whitefield',
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
      'which computer course is best after 12th, best it course after ba, software engineering diploma after 12th, computer courses after 12th, it courses for students, college it training, computer courses after 12th in whitefield, computer courses after 12th in bangalore, it courses for students in whitefield, it courses for students in bangalore, college it training programs bangalore, college it training in whitefield, computer courses after bcom in bangalore, it courses after graduation bangalore, school coding classes whitefield, industry training for college students bangalore',
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
