/**
 * 🎯 MASTER SEO SYSTEM - SINGLE SOURCE OF TRUTH
 *
 * Version: 5.2 - INTERCONNECTIVITY AND CONSISTENCY REFINEMENT
 *
 * IMPORTANT:
 * Business identity data in this file must stay consistent with:
 * - Google Business Profile
 * - Website footer/contact page
 * - Organization schema
 * - LocalBusiness schema
 *
 * Primary Location:
 * Vijay Nagar, Indore, Madhya Pradesh 452010
 */

import { useLocation } from 'react-router';
import { useMemo } from 'react';
import { COMPLETE_SEO_DATA } from './seo-database-complete';

// ============================================================================
// SITE-WIDE CONSTANTS
// ============================================================================

export const SITE_CONFIG = {
  /**
   * Short public-facing brand name.
   * Google currently recognizes the entity as "Inchtomilez".
   */
  name: 'Inchtomilez',

  /**
   * Full business/agency name.
   */
  fullName:
    'Inchtomilez Digital Marketing And Advertising Agency | Indore',

  url: 'https://www.inchtomilez.com',

  logo: 'https://www.inchtomilez.com/logo.png',

  ogImage: 'https://www.inchtomilez.com/og-image.jpg',

  /**
   * Primary GBP phone number.
   */
  phone: '+91-9009970709',
  phones: ['+919009970709', '+919669988666', '+919009979600'],

  /**
   * Primary website contact email.
   */
  email: 'inchtomilez@gmail.com',

  /**
   * GBP states that Inchtomilez was founded in 2017.
   */
  foundingDate: '2017',

  /**
   * Exact business address aligned with Google Business Profile.
   */
  address: {
    street:
      '7th Floor Block A, Metro Tower, Sch No 54, Vijay Nagar, Scheme 54 PU4',
    city: 'Indore',
    state: 'Madhya Pradesh',
    postal: '452010',
    country: 'India',
    countryCode: 'IN'
  },

  /**
   * Keep only real official social profiles here.
   * We can verify these individually in a later SEO step.
   */
  social: {
    facebook: 'https://facebook.com/inchtomilez',
    twitter: 'https://twitter.com/inchtomilez',
    linkedin: 'https://linkedin.com/company/inchtomilez',
    instagram: 'https://instagram.com/inchtomilez'
  }
} as const;

// ============================================================================
// WEBSITE / SITELINKS SCHEMA
// ============================================================================

/**
 * Existing export name is intentionally preserved so other files importing
 * SITELINKS_SEARCH_BOX do not break.
 */
export const SITELINKS_SEARCH_BOX = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.fullName,
  url: SITE_CONFIG.url,

  /**
   * NOTE:
   * We are intentionally NOT adding a SearchAction here until we verify that
   * https://www.inchtomilez.com/search?q= actually works as a public search
   * results page.
   */
  publisher: {
    '@id': `${SITE_CONFIG.url}/#organization`
  }
};

// ============================================================================
// ORGANIZATION SCHEMA
// ============================================================================

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,

  name: SITE_CONFIG.name,

  legalName: SITE_CONFIG.fullName,

  alternateName: [
    'Inchtomilez',
    'Inchtomilez Digital Marketing And Advertising Agency',
    'Inchtomilez Digital Marketing Agency Indore'
  ],

  url: SITE_CONFIG.url,

  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_CONFIG.url}/#logo`,
    url: SITE_CONFIG.logo,
    contentUrl: SITE_CONFIG.logo
  },

  image: SITE_CONFIG.ogImage,

  description:
    'Inchtomilez is a digital marketing and advertising agency in Indore, Madhya Pradesh, providing SEO, Google Ads, social media marketing, branding, website development, advertising and performance marketing services.',

  foundingDate: SITE_CONFIG.foundingDate,

  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postal,
    addressCountry: SITE_CONFIG.address.countryCode
  },

  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919669988666',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+919009979600',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }
  ],

  areaServed: [
    {
      '@type': 'City',
      name: 'Indore'
    },
    {
      '@type': 'City',
      name: 'Pune'
    },
    {
      '@type': 'State',
      name: 'Madhya Pradesh'
    },
    {
      '@type': 'Country',
      name: 'India'
    }
  ],

  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.linkedin,
    SITE_CONFIG.social.instagram
  ]
};

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

/**
 * This is especially important for the Indore SEO strategy.
 *
 * We intentionally omit:
 * - geo coordinates until exact office coordinates are verified
 * - openingHoursSpecification until full GBP hours are verified
 * - priceRange because it is not needed unless we have a real value
 */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_CONFIG.url}/#localbusiness`,

  name: SITE_CONFIG.fullName,

  alternateName: SITE_CONFIG.name,

  url: SITE_CONFIG.url,

  telephone: SITE_CONFIG.phones,

  email: SITE_CONFIG.email,

  logo: SITE_CONFIG.logo,

  image: SITE_CONFIG.ogImage,

  description:
    'Inchtomilez Digital Marketing And Advertising Agency in Indore helps businesses grow through SEO, Google Ads, social media marketing, branding, website development, advertising and digital strategy.',

  foundingDate: SITE_CONFIG.foundingDate,

  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postal,
    addressCountry: SITE_CONFIG.address.countryCode
  },

  areaServed: {
    '@type': 'City',
    name: 'Indore'
  },

  parentOrganization: {
    '@id': `${SITE_CONFIG.url}/#organization`
  },

  // INCHTOMILEZ_LOCAL_SEO_V2: primary office identity only; no fake reviews or geo.
  branchOf: { '@id': `${SITE_CONFIG.url}/#organization` },

  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.linkedin,
    SITE_CONFIG.social.instagram
  ]
};


// Published on the homepage only. We omit unverified street addresses and coordinates.
export const OFFICE_BRANCH_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#office-indore-rajendra-nagar`,
    name: `${SITE_CONFIG.name} — Rajendra Nagar`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phones,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN'
    },
    parentOrganization: { '@id': `${SITE_CONFIG.url}/#organization` },
    branchOf: { '@id': `${SITE_CONFIG.url}/#organization` }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#office-pune-nashik-phata`,
    name: `${SITE_CONFIG.name} — Pune`,
    url: SITE_CONFIG.url,
    telephone: '+919009979600',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "855, Gera's Imperium Gateway, Nashik Phata",
      addressLocality: 'Pimpri-Chinchwad',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    parentOrganization: { '@id': `${SITE_CONFIG.url}/#organization` },
    branchOf: { '@id': `${SITE_CONFIG.url}/#organization` }
  }
];

// ============================================================================
// CANONICAL ROUTE NORMALIZATION
// ============================================================================

export function normalizeSEOPath(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/';
  const withLeadingSlash = withoutQuery.startsWith('/')
    ? withoutQuery
    : `/${withoutQuery}`;
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/');
  return collapsed === '/' ? '/' : collapsed.replace(/\/+$/, '');
}

export const BLOG_CATEGORY_PATHS = new Set([
  '/blogs/seo',
  '/blogs/ppc',
  '/blogs/social-media',
  '/blogs/content-marketing',
  '/blogs/web-design',
  '/blogs/branding',
  '/blogs/email-marketing',
  '/blogs/video-production',
  '/blogs/analytics',
  '/blogs/ecommerce'
]);

// ============================================================================
// BREADCRUMB GENERATOR
// ============================================================================

function decodeURIComponentSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function generateBreadcrumbs(path: string) {
  const normalizedPath = normalizeSEOPath(path);
  const segments = normalizedPath.split('/').filter(Boolean);

  const items: Array<{ '@type': string; position: number; name: string; item: string }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url
    }
  ];

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    const name = decodeURIComponentSafe(segment)
      .split('-')
      .map(
        word =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(' ');

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: `${SITE_CONFIG.url}${currentPath}`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_CONFIG.url}${normalizedPath === '/' ? '/' : normalizedPath}#breadcrumb`,
    itemListElement: items
  };
}

// ============================================================================
// SEO DATA
// ============================================================================

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
  schema?: string | Record<string, unknown>;
  noindex?: boolean;
  schemaType?:
    | 'website'
    | 'article'
    | 'service'
    | 'faq'
    | 'organization';
  author?: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
}

export const SEO_DATABASE: Record<string, SEOData> =
  COMPLETE_SEO_DATA;

// ============================================================================
// ARTICLE SCHEMA
// ============================================================================

export function generateArticleSchema(
  seoData: SEOData,
  path: string
) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_CONFIG.url}${normalizeSEOPath(path)}#article`,
    url: `${SITE_CONFIG.url}${normalizeSEOPath(path)}`,

    headline: seoData.h1,

    description: seoData.description,

    image:
      seoData.ogImage ||
      SITE_CONFIG.ogImage,

    author: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },

    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo
      }
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}${normalizeSEOPath(path)}`
    }
  };

  /**
   * Do not fabricate publication dates.
   * Only output dates when real dates exist in SEO data.
   */
  if (seoData.datePublished) {
    schema.datePublished =
      seoData.datePublished;
  }

  if (seoData.dateModified) {
    schema.dateModified =
      seoData.dateModified;
  }

  return schema;
}

// ============================================================================
// SERVICE SCHEMA
// ============================================================================

export function generateServiceSchema(
  seoData: SEOData,
  path: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',

    '@id':
      `${SITE_CONFIG.url}${normalizeSEOPath(path)}#service`,

    name: seoData.h1,

    description: seoData.description,

    url: `${SITE_CONFIG.url}${normalizeSEOPath(path)}`,

    provider: {
      '@id': `${SITE_CONFIG.url}/#organization`
    },

    areaServed: [
      {
        '@type': 'City',
        name: 'Indore'
      },
      {
        '@type': 'City',
        name: 'Pune'
      },
      {
        '@type': 'State',
        name: 'Madhya Pradesh'
      },
      {
        '@type': 'Country',
        name: 'India'
      }
    ],

    serviceType:
      seoData.category ||
      'Digital Marketing'
  };
}

// ============================================================================
// MASTER SEO HOOK
// ============================================================================

/**
 * Resolve canonical URL without allowing unrelated hosts or unsafe schemes.
 * Existing same-origin absolute canonicals are respected.
 */
export function resolveSEOCanonical(path: string, canonical?: string): string {
  const normalizedPath = normalizeSEOPath(path);
  const fallback = `${SITE_CONFIG.url}${normalizedPath}`;
  if (!canonical || !canonical.trim()) return fallback;
  try {
    const parsed = new URL(canonical.trim(), `${SITE_CONFIG.url}/`);
    if (parsed.protocol !== 'https:' || parsed.hostname !== new URL(SITE_CONFIG.url).hostname) {
      return fallback;
    }
    return `${SITE_CONFIG.url}${normalizeSEOPath(parsed.pathname)}`;
  } catch {
    return fallback;
  }
}

/**
 * Pure resolver used by the React hook. Keeps the original hook return shape.
 * Unknown URLs retain the legacy metadata fallback until router-level 404
 * handling is implemented, but do not receive fabricated service/article data.
 */
export function resolveSEOForPath(pathname: string) {
  const path = normalizeSEOPath(pathname);
  const matchedSEO = Object.prototype.hasOwnProperty.call(SEO_DATABASE, path)
    ? SEO_DATABASE[path]
    : undefined;
  const seoData = matchedSEO || SEO_DATABASE['/'];
  const canonicalUrl = resolveSEOCanonical(path, matchedSEO?.canonical);
  const breadcrumbs = generateBreadcrumbs(path);
  const structuredData: Array<Record<string, unknown>> = [];

  if (path === '/') {
    structuredData.push(
      SITELINKS_SEARCH_BOX,
      ORGANIZATION_SCHEMA,
      LOCAL_BUSINESS_SCHEMA,
      ...OFFICE_BRANCH_SCHEMAS
    );
  } else if (matchedSEO) {
    structuredData.push(breadcrumbs);
    if (matchedSEO.schemaType === 'article' && !BLOG_CATEGORY_PATHS.has(path)) {
      structuredData.push(generateArticleSchema(matchedSEO, path));
    } else if (matchedSEO.schemaType === 'service') {
      structuredData.push(generateServiceSchema(matchedSEO, path));
    } else if (matchedSEO.schemaType === 'organization') {
      structuredData.push(ORGANIZATION_SCHEMA);
    }
  }

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(', '),
    h1: seoData.h1,
    canonicalUrl,
    ogImage: seoData.ogImage || SITE_CONFIG.ogImage,
    ogType: seoData.ogType === 'article' ? 'article' : 'website',
    structuredData,
    breadcrumbs
  };
}

export function useSEO() {
  const location = useLocation();
  const path = normalizeSEOPath(location.pathname);
  return useMemo(() => resolveSEOForPath(path), [path]);
}

// ============================================================================
// OPTIONAL ROUTE COVERAGE HELPERS
// ============================================================================

/**
 * Read-only route lookup. This does not change useSEO's legacy fallback shape.
 * Router/404 logic can use hasStaticSEOEntry without misclassifying dynamic
 * blog posts as missing pages.
 */
export function hasStaticSEOEntry(pathname: string): boolean {
  return Object.prototype.hasOwnProperty.call(
    SEO_DATABASE,
    normalizeSEOPath(pathname)
  );
}

/**
 * Returns an exact static entry, not the homepage fallback.
 * Dynamic article SEO remains owned by BlogDetailPage.
 */
export function getStaticSEOEntry(pathname: string): SEOData | undefined {
  const path = normalizeSEOPath(pathname);
  return hasStaticSEOEntry(path) ? SEO_DATABASE[path] : undefined;
}
