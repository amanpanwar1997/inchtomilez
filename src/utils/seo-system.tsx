/**
 * ============================================================================
 * CONSOLIDATED SEO SYSTEM v5.7 - INCHTOMILEZ (NON-DESTRUCTIVE)
 * ============================================================================
 *
 * This file consolidates SEO functionality into one place:
 * - SEO Configuration
 * - SEO Validation
 * - Structured Data
 * - Dynamic Blog Meta
 * - Backend SEO loading
 * - Static SEO fallback
 *
 * Business identity has been aligned with:
 * Inchtomilez Digital Marketing And Advertising Agency | Indore
 *
 * ============================================================================
 */

import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { projectId, publicAnonKey } from "./supabase/info";
import { getSEOConfig } from "./seoConfig";
import { normalizeSEOPath } from "./seo-master";


// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface PageSEOConfig {
  // Meta Tags
  title: string;
  description: string;
  keywords: string[];

  // H1 Tag
  h1: string;

  // Open Graph
  ogType?: "website" | "article" | "service" | "product";
  ogImage?: string;

  // Schema
  schema?:
    | "organization"
    | "localBusiness"
    | "website"
    | "article"
    | "service"
    | Record<string, any>;

  // Additional Meta
  author?: string;
  canonical?: string;
  noindex?: boolean;
}


export interface ValidationError {
  field: string;
  message: string;
  severity: "error" | "critical";
}


export interface ValidationWarning {
  field: string;
  message: string;
  severity: "warning" | "info";
}


export interface ValidationResult {
  isValid: boolean;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  errors: ValidationError[];
  warnings: ValidationWarning[];
  successes: string[];
}


export interface SEOFormData {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  canonical: string;
  ogType: string;
  ogImage: string;
  schema: string;
  noindex: boolean;
}


export interface SchemaData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}


// ============================================================================
// SITE / BUSINESS CONSTANTS
// ============================================================================

const SITE_URL = "https://www.inchtomilez.com";

const BUSINESS_NAME = "Inchtomilez";

const BUSINESS_FULL_NAME =
  "Inchtomilez Digital Marketing And Advertising Agency | Indore";

const BUSINESS_FOUNDING_DATE = "2017";

const BUSINESS_PHONE = "+91-9009970709";

const BUSINESS_ADDRESS = {
  street:
    "7th Floor Block A, Metro Tower, Sch No 54, Vijay Nagar, Scheme 54 PU4",
  city: "Indore",
  state: "Madhya Pradesh",
  postalCode: "452010",
  country: "India",
  countryCode: "IN",
} as const;


// ============================================================================
// STRUCTURED DATA - ORGANIZATION
// ============================================================================

export const organizationSchema: SchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: BUSINESS_NAME,

  legalName: BUSINESS_FULL_NAME,

  alternateName: [
    "Inchtomilez Digital Marketing And Advertising Agency",
    "Inchtomilez Digital Marketing Agency Indore",
    "Inchtomilez Advertising Agency Indore",
  ],

  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/logo.png`,
    contentUrl: `${SITE_URL}/logo.png`,
  },

  image: `${SITE_URL}/og-image.jpg`,

  description:
    "Inchtomilez is a digital marketing and advertising agency in Indore, Madhya Pradesh, helping businesses grow through SEO, Google Ads, social media marketing, branding, website development, advertising and performance marketing.",

  foundingDate: BUSINESS_FOUNDING_DATE,

  address: {
    "@type": "PostalAddress",

    streetAddress: BUSINESS_ADDRESS.street,

    addressLocality: BUSINESS_ADDRESS.city,

    addressRegion: BUSINESS_ADDRESS.state,

    postalCode: BUSINESS_ADDRESS.postalCode,

    addressCountry: BUSINESS_ADDRESS.countryCode,
  },

  contactPoint: {
    "@type": "ContactPoint",

    telephone: BUSINESS_PHONE,

    contactType: "customer service",

    areaServed: "IN",

    availableLanguage: ["English", "Hindi"],
  },

  areaServed: [
    {
      "@type": "City",
      name: "Indore",
    },
    {
      "@type": "State",
      name: "Madhya Pradesh",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],

  sameAs: [
    "https://www.facebook.com/inchtomilez",
    "https://www.instagram.com/inchtomilez",
    "https://www.linkedin.com/company/inchtomilez",
    "https://twitter.com/inchtomilez",
  ],
};


// ============================================================================
// STRUCTURED DATA - LOCAL BUSINESS
// ============================================================================

export const localBusinessSchema: SchemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#localbusiness`,

  name: BUSINESS_NAME,

  legalName: BUSINESS_FULL_NAME,

  alternateName:
    "Inchtomilez Digital Marketing And Advertising Agency",

  description:
    "Inchtomilez Digital Marketing And Advertising Agency in Indore provides SEO, Google Ads, social media marketing, website development, branding, advertising and performance marketing services.",

  url: SITE_URL,

  image: `${SITE_URL}/og-image.jpg`,

  logo: `${SITE_URL}/logo.png`,

  telephone: BUSINESS_PHONE,

  foundingDate: BUSINESS_FOUNDING_DATE,

  address: {
    "@type": "PostalAddress",

    streetAddress: BUSINESS_ADDRESS.street,

    addressLocality: BUSINESS_ADDRESS.city,

    addressRegion: BUSINESS_ADDRESS.state,

    postalCode: BUSINESS_ADDRESS.postalCode,

    addressCountry: BUSINESS_ADDRESS.countryCode,
  },

  areaServed: [
    {
      "@type": "City",
      name: "Indore",
    },
    {
      "@type": "State",
      name: "Madhya Pradesh",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],

  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },

  sameAs: [
    "https://www.facebook.com/inchtomilez",
    "https://www.instagram.com/inchtomilez",
    "https://www.linkedin.com/company/inchtomilez",
    "https://twitter.com/inchtomilez",
  ],
};


// ============================================================================
// STRUCTURED DATA - WEBSITE
// ============================================================================

export const websiteSchema: SchemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: BUSINESS_NAME,

  alternateName: BUSINESS_FULL_NAME,

  url: SITE_URL,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};


// ============================================================================
// WEBPAGE SCHEMA GENERATOR
// ============================================================================

export function getWebPageSchema(
  titleOrConfig:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        path?: string;
      },
  description?: string,
  path?: string,
  _breadcrumbs?: unknown
): SchemaData {
  let title: string;
  let finalDescription: string;
  let rawPath: string;

  if (typeof titleOrConfig === "object") {
    title = titleOrConfig.title;
    finalDescription = titleOrConfig.description;
    rawPath = titleOrConfig.path ?? titleOrConfig.slug ?? "/";
  } else {
    title = titleOrConfig;
    finalDescription = description ?? "";
    rawPath = path ?? "/";
  }

  const finalPath =
    rawPath === "/"
      ? "/"
      : rawPath.startsWith("/")
        ? rawPath
        : `/${rawPath}`;

  const pageUrl =
    finalPath === "/"
      ? SITE_URL
      : `${SITE_URL}${finalPath}`;

  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    name: title,

    description: finalDescription,

    url: pageUrl,

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}


// ============================================================================
// BREADCRUMB SCHEMA GENERATOR
// ============================================================================

export function getBreadcrumbSchema(
  breadcrumbs: Array<{
    label?: string;
    name?: string;
    path: string;
  }>
): SchemaData {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: breadcrumbs.map(
      (crumb, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name:
          crumb.label ??
          crumb.name ??
          "",

        item:
          crumb.path === "/"
            ? SITE_URL
            : `${SITE_URL}${
                crumb.path.startsWith("/")
                  ? crumb.path
                  : `/${crumb.path}`
              }`,
      })
    ),
  };
}


// ============================================================================
// ARTICLE SCHEMA GENERATOR
// ============================================================================

export function getArticleSchema(
  title: string,
  description: string,
  path: string,
  author: string = "Inchtomilez Team",
  publishedDate?: string,
  image?: string
): SchemaData {
  const schema: SchemaData = {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id": `${SITE_URL}${path}#article`,

    headline: title,

    description,

    image:
      image ||
      `${SITE_URL}/og-image.jpg`,

    author: {
      "@type": "Organization",

      name: author,

      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",

      "@id": `${SITE_URL}/#organization`,

      name: BUSINESS_NAME,

      logo: {
        "@type": "ImageObject",

        url: `${SITE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": `${SITE_URL}${path}`,
    },

    url: `${SITE_URL}${path}`,
  };

  /**
   * Never generate fake "today" dates.
   *
   * A date is added only when the actual article
   * has a publication date.
   */
  if (publishedDate) {
    schema.datePublished =
      publishedDate;

    schema.dateModified =
      publishedDate;
  }

  return schema;
}


// ============================================================================
// FAQ SCHEMA GENERATOR
// ============================================================================

export function getFAQSchema(
  faqs: {
    question: string;
    answer: string;
  }[]
): SchemaData {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}


// ============================================================================
// STRUCTURED DATA COMPONENT
// ============================================================================

export function StructuredData({
  data,
}: {
  data: SchemaData | SchemaData[];
}) {
  const schemas =
    Array.isArray(data)
      ? data
      : [data];

  return (
    <>
      {schemas.map(
        (schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                JSON.stringify(
                  schema,
                  null,
                  2
                ).replace(/</g, "\\u003c"),
            }}
          />
        )
      )}
    </>
  );
}


// ============================================================================
// SEO VALIDATION
// ============================================================================

/**
 * Validate SEO form data
 */

export function validateSEOData(
  data: SEOFormData
): ValidationResult {
  let score = 100;

  const errors: ValidationError[] =
    [];

  const warnings: ValidationWarning[] =
    [];

  const successes: string[] = [];


  // ==========================================================================
  // TITLE VALIDATION
  // ==========================================================================

  if (
    !data.title ||
    data.title.trim().length === 0
  ) {
    errors.push({
      field: "title",

      message:
        "Title is required - Google needs this for search results",

      severity: "critical",
    });

    score -= 20;
  } else {
    const titleLength =
      data.title.length;

    if (titleLength < 30) {
      warnings.push({
        field: "title",

        message: `Title is short (${titleLength} chars). Recommended: 30-60`,

        severity: "warning",
      });

      score -= 5;
    } else if (
      titleLength > 60
    ) {
      errors.push({
        field: "title",

        message: `Title is too long (${titleLength} chars). Google will truncate after 60`,

        severity: "error",
      });

      score -= 10;
    } else {
      successes.push(
        `✓ Title length optimal (${titleLength} characters)`
      );
    }


    if (
      !data.title
        .toLowerCase()
        .includes("inchtomilez")
    ) {
      warnings.push({
        field: "title",

        message:
          'Consider adding "Inchtomilez" for brand recognition',

        severity: "info",
      });

      score -= 2;
    } else {
      successes.push(
        "✓ Brand name included in title"
      );
    }
  }


  // ==========================================================================
  // DESCRIPTION VALIDATION
  // ==========================================================================

  if (
    !data.description ||
    data.description
      .trim()
      .length === 0
  ) {
    errors.push({
      field: "description",

      message:
        "Meta description is required - impacts click-through rate",

      severity: "critical",
    });

    score -= 15;
  } else {
    const descLength =
      data.description.length;

    if (descLength < 120) {
      warnings.push({
        field: "description",

        message: `Description is short (${descLength} chars). Recommended: 120-160`,

        severity: "warning",
      });

      score -= 5;
    } else if (
      descLength > 160
    ) {
      warnings.push({
        field: "description",

        message: `Description exceeds 160 chars (${descLength}). Google may truncate`,

        severity: "warning",
      });

      score -= 5;
    } else {
      successes.push(
        `✓ Description length optimal (${descLength} characters)`
      );
    }
  }


  // ==========================================================================
  // KEYWORDS VALIDATION
  // ==========================================================================

  if (
    !data.keywords ||
    data.keywords
      .trim()
      .length === 0
  ) {
    warnings.push({
      field: "keywords",

      message:
        "No keywords defined - add 5-10 relevant keywords",

      severity: "warning",
    });

    score -= 5;
  } else {
    const keywordArray =
      data.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(
          (k) => k.length > 0
        );

    if (
      keywordArray.length < 3
    ) {
      warnings.push({
        field: "keywords",

        message: `Only ${keywordArray.length} keyword${
          keywordArray.length > 1
            ? "s"
            : ""
        }. Add more (recommended: 5-10)`,

        severity: "warning",
      });

      score -= 3;
    } else {
      successes.push(
        `✓ ${keywordArray.length} keywords defined`
      );
    }
  }


  // ==========================================================================
  // H1 VALIDATION
  // ==========================================================================

  if (
    !data.h1 ||
    data.h1.trim().length === 0
  ) {
    errors.push({
      field: "h1",

      message:
        "H1 heading is required - critical for SEO structure",

      severity: "critical",
    });

    score -= 10;
  } else {
    successes.push(
      "✓ H1 heading defined"
    );
  }


  // ==========================================================================
  // CANONICAL URL VALIDATION
  // ==========================================================================

  if (
    !data.canonical ||
    data.canonical
      .trim()
      .length === 0
  ) {
    warnings.push({
      field: "canonical",

      message:
        "No canonical URL - important for preventing duplicate content",

      severity: "warning",
    });

    score -= 5;
  } else if (
    !data.canonical.startsWith(
      "http://"
    ) &&
    !data.canonical.startsWith(
      "https://"
    )
  ) {
    errors.push({
      field: "canonical",

      message:
        "Canonical URL must start with http:// or https://",

      severity: "error",
    });

    score -= 8;
  } else {
    successes.push(
      "✓ Canonical URL properly formatted"
    );
  }


  // ==========================================================================
  // SCHEMA VALIDATION
  // ==========================================================================

  if (!data.schema) {
    warnings.push({
      field: "schema",

      message:
        "No structured data type - helps search engines understand content",

      severity: "warning",
    });

    score -= 10;
  } else {
    successes.push(
      "✓ Structured data (Schema.org) defined"
    );
  }


  // ==========================================================================
  // FINAL SCORE
  // ==========================================================================

  score = Math.max(
    0,
    score
  );

  let grade:
    | "A"
    | "B"
    | "C"
    | "D"
    | "F";

  if (score >= 90) {
    grade = "A";
  } else if (
    score >= 80
  ) {
    grade = "B";
  } else if (
    score >= 70
  ) {
    grade = "C";
  } else if (
    score >= 60
  ) {
    grade = "D";
  } else {
    grade = "F";
  }


  return {
    isValid:
      errors.length === 0,

    score,

    grade,

    errors,

    warnings,

    successes,
  };
}


/**
 * Get color class for SEO score
 */

export function getSEOScoreColor(
  score: number
): string {
  if (score >= 90) {
    return "text-green-500 bg-green-500/20";
  }

  if (score >= 80) {
    return "text-blue-500 bg-blue-500/20";
  }

  if (score >= 70) {
    return "text-yellow-500 bg-yellow-500/20";
  }

  if (score >= 60) {
    return "text-orange-500 bg-orange-500/20";
  }

  return "text-red-500 bg-red-500/20";
}


/**
 * Get grade color class
 */

export function getGradeColor(
  grade:
    | "A"
    | "B"
    | "C"
    | "D"
    | "F"
): string {
  switch (grade) {
    case "A":
      return "text-green-500 bg-green-500/20";

    case "B":
      return "text-blue-500 bg-blue-500/20";

    case "C":
      return "text-yellow-500 bg-yellow-500/20";

    case "D":
      return "text-orange-500 bg-orange-500/20";

    case "F":
      return "text-red-500 bg-red-500/20";
  }
}


// ============================================================================
// DYNAMIC BLOG META GENERATION
// ============================================================================

/**
 * Convert slug to human-readable title
 */

export function slugToTitle(
  slug: string
): string {
  if (!slug) return "";

  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // Preserve malformed percent-encoded slugs rather than throwing.
  }

  const words =
    decoded
      .replace(/[-_]/g, " ")
      .trim();

  let wordArray =
    words.split(/\s+/);

  const acronyms =
    new Set([
      "SEO",
      "PPC",
      "ROI",
      "API",
      "HTML",
      "CSS",
      "JS",
      "URL",
      "CTA",
      "CMS",
      "SEM",
      "SMM",
      "GMB",
      "UX",
      "UI",
      "B2B",
      "B2C",
      "KPI",
      "AI",
      "ML",
    ]);


  wordArray =
    wordArray.map(
      (word) => {
        const upperWord =
          word.toUpperCase();

        if (
          acronyms.has(
            upperWord
          )
        ) {
          return upperWord;
        }

        return (
          word
            .charAt(0)
            .toUpperCase() +
          word
            .slice(1)
            .toLowerCase()
        );
      }
    );


  return wordArray.join(
    " "
  );
}


/**
 * Generate SEO-friendly description from title
 */

export function generateDescription(
  title: string,
  category?: string
): string {
  const categoryText =
    category
      ? ` in ${category}`
      : "";

  return `Discover expert insights about ${title}${categoryText}. Learn best practices, strategies, and tips from Inchtomilez Digital Marketing Agency.`;
}


/**
 * Generate keywords from title and category
 */

export function generateKeywords(
  title: string,
  category?: string
): string[] {
  const words =
    title
      .toLowerCase()
      .split(" ");

  const keywords = [
    ...words,
  ];

  if (category) {
    keywords.push(
      category.toLowerCase()
    );
  }

  keywords.push(
    "digital marketing",
    "inchtomilez",
    "marketing tips"
  );

  return keywords.slice(
    0,
    10
  );
}


// ============================================================================
// SEO CONFIG HOOK
// BACKEND-FIRST WITH STATIC FALLBACK
// ============================================================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType: string;
  ogImage?: string;
  structuredData?: SchemaData[];
}


export interface SEOHookResult {
  h1: string;
  meta: SEOMetadata;
  loading: boolean;
}


/**
 * Main SEO hook — BACKEND FIRST, STATIC FALLBACK.
 *
 * Existing behavior is deliberately preserved:
 * 1. Initial render uses local SEO so SSR/prerender has deterministic metadata.
 * 2. Browser fetches the existing Supabase SEO endpoint.
 * 3. Valid backend page metadata takes precedence after hydration.
 * 4. Backend errors or missing entries fall back to static metadata.
 * 5. Organization and WebPage schema remain in EVERY hook result.
 *
 * Improvements: cancellation on route changes/unmount, normalized path,
 * safe backend parsing, partial-field fallback, keyword array/string support,
 * canonical host validation, and consistent route-specific initial values.
 *
 * Note: backend-first hydration can still change prerendered metadata.
 * This is intentional to retain the original production behavior.
 */

function toKeywords(value: unknown, fallback: string[]): string[] {
  if (Array.isArray(value)) {
    return value.filter((v): v is string => typeof v === "string")
      .map(v => v.trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    return value.split(",").map(v => v.trim()).filter(Boolean);
  }
  return fallback;
}

function nonempty(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function canonicalForPage(value: unknown, pathname: string): string {
  const fallback = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
  if (typeof value !== "string" || !value.trim()) return fallback;
  try {
    const url = new URL(value.trim(), SITE_URL);
    // Never permit an accidental external canonical from CMS input.
    if (!["www.inchtomilez.com", "inchtomilez.com", "www.inchtomilez.in", "inchtomilez.in"].includes(url.hostname.toLowerCase())) {
      return fallback;
    }
    const cleanPath = normalizeSEOPath(url.pathname);
    return cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath}`;
  } catch {
    return fallback;
  }
}

function buildSEOResult(
  pathname: string,
  backendPage?: Record<string, unknown>
): SEOHookResult {
  const staticConfig = getSEOConfig(pathname);
  const title = nonempty(backendPage?.title, staticConfig.title);
  const description = nonempty(backendPage?.description, staticConfig.description);
  const h1 = nonempty(backendPage?.h1, staticConfig.h1 || title);
  const keywords = toKeywords(backendPage?.keywords, staticConfig.keywords);
  const canonical = canonicalForPage(
    backendPage?.canonical ?? staticConfig.canonical,
    pathname
  );
  const ogType = nonempty(backendPage?.ogType, staticConfig.ogType || "website");
  const ogImage = nonempty(backendPage?.ogImage, staticConfig.ogImage || "");

  return {
    h1,
    meta: {
      title,
      description,
      keywords,
      canonical,
      ogType,
      ogImage: ogImage || undefined,
      // Preserve the original Organization + WebPage schema contract.
      structuredData: [
        organizationSchema,
        getWebPageSchema(title, description, pathname),
      ],
    },
    loading: false,
  };
}

export function useSEO(): SEOHookResult {
  const location = useLocation();
  const pathname = normalizeSEOPath(location.pathname);

  const [seoState, setSeoState] = useState<{
    path: string;
    data: SEOHookResult;
  }>(() => ({ path: pathname, data: buildSEOResult(pathname) }));

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const loadSEO = async () => {
      // Retain Supabase GET functionality and existing Edge Function route.
      try {
        const url = `https://${projectId}.supabase.co/functions/v1/make-server-9c8e64e4/seo-system/page/get?slug=${encodeURIComponent(pathname)}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
          signal: controller.signal,
        });

        if (response.ok) {
          const result: unknown = await response.json();
          if (result && typeof result === "object" && !Array.isArray(result)) {
            const payload = result as Record<string, unknown>;
            if (payload.success === true && payload.page &&
                typeof payload.page === "object" && !Array.isArray(payload.page)) {
              if (!cancelled) {
                setSeoState({
                  path: pathname,
                  data: buildSEOResult(pathname, payload.page as Record<string, unknown>),
                });
              }
              return;
            }
          }
        }
      } catch {
        // Preserve original silent backend-error handling and static fallback.
      }

      if (!cancelled) {
        setSeoState({ path: pathname, data: buildSEOResult(pathname) });
      }
    };

    void loadSEO();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [pathname]);

  // Avoid rendering the previous route's metadata for one render after navigation.
  return seoState.path === pathname ? seoState.data : buildSEOResult(pathname);
}


// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Hooks
  useSEO,

  // Validation
  validateSEOData,
  getSEOScoreColor,
  getGradeColor,

  // Structured Data
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getArticleSchema,
  getFAQSchema,
  StructuredData,

  // Dynamic Meta
  slugToTitle,
  generateDescription,
  generateKeywords,
