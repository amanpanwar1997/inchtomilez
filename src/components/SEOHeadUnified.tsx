/**
 * ============================================================================
 * INCHTOMILEZ — UNIFIED SEO HEAD
 * ============================================================================
 *
 * This is the single rendering layer for page-level SEO metadata.
 *
 * SEOHead.tsx and SEOHeadSSG.tsx are backwards-compatible wrappers around
 * this component, so fixing this file improves both legacy and newer pages.
 *
 * Responsibilities:
 * - Title and meta description
 * - Self-referencing canonical URL
 * - Robots directives
 * - Open Graph metadata
 * - Twitter / X metadata
 * - Optional article metadata
 * - JSON-LD structured data
 *
 * Canonical host:
 * https://www.inchtomilez.com
 * ============================================================================
 */

import { Helmet } from 'react-helmet-async';
import { APPROVED_PHASE1_METADATA } from '../utils/seo-approved-phase1';
import {
  useSEO,
  SITE_CONFIG,
} from '../utils/seo-master';


// ============================================================================
// TYPES
// ============================================================================

export interface SEOHeadUnifiedProps {
  title?: string;

  description?: string;

  /**
   * Kept for backwards compatibility with existing pages.
   *
   * Google does not use the meta keywords tag for web ranking, so this
   * component accepts keywords but intentionally does not output
   * <meta name="keywords">.
   */
  keywords?: string | string[];

  /**
   * Both names are supported because older pages use canonicalUrl while
   * newer pages may use canonical.
   */
  canonical?: string;
  canonicalUrl?: string;

  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;

  /**
   * May be one schema object or an array of schema objects.
   */
  structuredData?: unknown | unknown[];

  /**
   * Search-engine indexing controls.
   */
  noindex?: boolean;
  nofollow?: boolean;

  /**
   * Optional article metadata.
   */
  author?: string;
  datePublished?: string;
  dateModified?: string;
}


// ============================================================================
// CONSTANTS
// ============================================================================

const CANONICAL_HOST = new URL(SITE_CONFIG.url).hostname;

const DEFAULT_IMAGE_ALT =
  'Inchtomilez Digital Marketing And Advertising Agency';


// ============================================================================
// HELPERS
// ============================================================================

/**
 * Convert old Inchtomilez hosts to the current canonical host.
 */
function migrateLegacyHost(url: string): string {
  return url
    .replace(
      /^https?:\/\/(?:www\.)?inchtomilez\.in(?=\/|$)/i,
      SITE_CONFIG.url
    )
    .replace(
      /^http:\/\/(?:www\.)?inchtomilez\.com(?=\/|$)/i,
      SITE_CONFIG.url
    )
    .replace(
      /^https:\/\/inchtomilez\.com(?=\/|$)/i,
      SITE_CONFIG.url
    );
}


/**
 * Build one clean canonical URL.
 *
 * Rules:
 * - Relative paths become absolute on www.inchtomilez.com
 * - Old .in URLs migrate to .com
 * - non-www .com migrates to www
 * - HTTP migrates to HTTPS
 * - query strings and hashes are removed
 * - trailing slash is removed except for the conceptual homepage
 * - an accidental third-party canonical falls back to the current page
 */
function normalizeCanonical(
  requestedUrl: string | undefined,
  fallbackUrl: string
): string {
  const rawRequested =
    requestedUrl?.trim() ||
    fallbackUrl.trim() ||
    SITE_CONFIG.url;

  let candidate = migrateLegacyHost(rawRequested);

  if (
    !candidate.startsWith('https://') &&
    !candidate.startsWith('http://')
  ) {
    const path =
      candidate.startsWith('/')
        ? candidate
        : `/${candidate}`;

    candidate = `${SITE_CONFIG.url}${path}`;
  }

  try {
    const parsed = new URL(candidate);

    /**
     * Canonical tags on this website must never accidentally point to an
     * unrelated host.
     */
    if (parsed.hostname !== CANONICAL_HOST) {
      const safeFallback = new URL(
        migrateLegacyHost(fallbackUrl),
        SITE_CONFIG.url
      );

      safeFallback.protocol = 'https:';
      safeFallback.hostname = CANONICAL_HOST;
      safeFallback.port = '';
      safeFallback.search = '';
      safeFallback.hash = '';

      const safePath =
        safeFallback.pathname === '/'
          ? ''
          : safeFallback.pathname.replace(/\/+$/, '');

      return `${SITE_CONFIG.url}${safePath}`;
    }

    parsed.protocol = 'https:';
    parsed.hostname = CANONICAL_HOST;
    parsed.port = '';

    /**
     * Canonical URLs should represent the core document URL rather than
     * tracking/query/hash variants.
     */
    parsed.search = '';
    parsed.hash = '';

    let pathname = parsed.pathname || '/';

    if (pathname !== '/') {
      pathname = pathname.replace(/\/+$/, '');
    }

    return pathname === '/'
      ? SITE_CONFIG.url
      : `${SITE_CONFIG.url}${pathname}`;
  } catch {
    return normalizeCanonical(
      undefined,
      fallbackUrl || SITE_CONFIG.url
    );
  }
}


/**
 * Make social images absolute and keep them on HTTPS.
 */
function normalizeImageUrl(
  image: string | undefined
): string {
  const requested =
    image?.trim() ||
    SITE_CONFIG.ogImage;

  try {
    const absolute = new URL(
      requested,
      SITE_CONFIG.url
    );

    if (
      absolute.hostname === 'inchtomilez.com' ||
      absolute.hostname === 'inchtomilez.in' ||
      absolute.hostname === 'www.inchtomilez.in'
    ) {
      absolute.protocol = 'https:';
      absolute.hostname = CANONICAL_HOST;
      absolute.port = '';
    }

    return absolute.toString();
  } catch {
    return SITE_CONFIG.ogImage;
  }
}


/**
 * Remove malformed or empty schema objects before rendering JSON-LD.
 */
function cleanStructuredData(
  input: unknown | unknown[]
): Record<string, unknown>[] {
  const schemas =
    Array.isArray(input)
      ? input
      : input
        ? [input]
        : [];

  return schemas.filter(
    (
      schema
    ): schema is Record<string, unknown> => {
      if (
        !schema ||
        typeof schema !== 'object' ||
        Array.isArray(schema)
      ) {
        return false;
      }

      const record =
        schema as Record<string, unknown>;

      return Boolean(
        record['@context'] &&
        record['@type']
      );
    }
  );
}


// ============================================================================
// COMPONENT
// ============================================================================

export function SEOHeadUnified(
  props: SEOHeadUnifiedProps = {}
) {
  /**
   * seo-master provides route-aware fallback metadata.
   * Page-specific props override it when supplied.
   */
  const seo = useSEO();


  // ==========================================================================
  // TITLE
  // ==========================================================================

  const title =
    props.title?.trim() ||
    seo.title;

  // INCHTOMILEZ_SYNC_TITLE_BEGIN
  // Preserve explicitly relevant titles and leave deep-route SEO untouched.
  // Only six top-level pages can replace a known generic homepage title.
  const syncPath = typeof window !== 'undefined' ? (window.location.pathname.replace(/\/+$/, '') || '/') : '';
  const syncPageTitles: Record<string,string> = {
    "/about": "About Inchtomilez | Digital Marketing Agency in Indore",
    "/blogs": "Digital Marketing Blog | SEO, Google Ads & Growth | Inchtomilez",
    "/contact": "Contact Inchtomilez | Digital Marketing Agency in Indore",
    "/faqs": "Digital Marketing FAQs | SEO, Ads & Services | Inchtomilez",
    "/industries": "Industry-Focused Digital Marketing Solutions | Inchtomilez",
    "/services": "Marketing & Advertising Services in Indore | Inchtomilez"
};
  const originalSyncedTitle = syncPageTitles[syncPath] && title === "Inchtomilez | Digital Marketing Agency in Indore"
    ? syncPageTitles[syncPath]
    : title;
  // PHASE1_58_APPROVED: exact-route metadata wins over page props/fallback.
  const approvedPhase1 = APPROVED_PHASE1_METADATA[syncPath];
  const syncedTitle = approvedPhase1?.title ?? originalSyncedTitle;
  // INCHTOMILEZ_SYNC_TITLE_END


  // ==========================================================================
  // DESCRIPTION
  // ==========================================================================

  const description =
    approvedPhase1?.description ?? (props.description?.trim() || seo.description);


  // ==========================================================================
  // CANONICAL
  // ==========================================================================

  const requestedCanonical =
    props.canonicalUrl ||
    props.canonical;

  // INCHTOMILEZ_B2_ROUTE_CANONICAL_FIX
  // Fix only six confirmed top-level pages whose SEO fallback points to home.
  // Keep explicit canonicals and deep-route aliases unchanged.
  const topLevelCanonicalPaths = new Set([
    '/about', '/blogs', '/contact', '/faqs', '/industries', '/services'
  ]);
  const activePath = typeof window === 'undefined' ? '' : window.location.pathname.replace(/\/+$/, '') || '/';
  const fallbackIsHome = normalizeCanonical(undefined, seo.canonicalUrl) === SITE_CONFIG.url;
  // INCHTOMILEZ_B2_FOLLOWUP_HOME_CANONICAL_FIX
  // The page's {...seo.meta} can explicitly pass the homepage canonical.
  // Override it ONLY on these six top-level pages; all other aliases stay intact.
  const requestedIsHome = requestedCanonical
    ? normalizeCanonical(requestedCanonical, seo.canonicalUrl) === SITE_CONFIG.url
    : false;
  const safeCanonical = topLevelCanonicalPaths.has(activePath) && (requestedIsHome || (!requestedCanonical && fallbackIsHome))
    ? activePath
    : requestedCanonical;
  // INCHTOMILEZ_CANONICAL_11_ROUTE_FIX
  // The listed paths are concrete pages rendered by App.tsx; older abbreviated
  // paths are NOT the destination, so these pages need self canonicals.
  const validatedServiceSubpagePaths = new Set([
      "/services/search-engine-optimization-seo/local-seo",
      "/services/search-engine-optimization-seo/technical-seo",
      "/services/ppc-google-ads/google-shopping",
      "/services/ppc-google-ads/display-ads",
      "/services/social-media-marketing/instagram",
      "/services/social-media-marketing/facebook",
      "/services/social-media-marketing/influencer-marketing",
      "/services/content-marketing/copywriting",
      "/services/content-marketing/blog-writing",
      "/services/web-design-development/ecommerce",
      "/services/web-design-development/wordpress"
  ]);
  const canonicalUrl = normalizeCanonical(
    validatedServiceSubpagePaths.has(activePath) ? activePath : safeCanonical,
    seo.canonicalUrl
  );


  // ==========================================================================
  // OPEN GRAPH
  // ==========================================================================

  const ogType =
    props.ogType ||
    seo.ogType ||
    'website';

  const ogImage =
    normalizeImageUrl(
      props.ogImage ||
      seo.ogImage
    );

  const ogImageAlt =
    props.ogImageAlt?.trim() ||
    DEFAULT_IMAGE_ALT;


  // ==========================================================================
  // AUTHOR
  // ==========================================================================

  const author =
    props.author?.trim() ||
    SITE_CONFIG.fullName;


  // ==========================================================================
  // STRUCTURED DATA
  // ==========================================================================

  const structuredData =
    cleanStructuredData(
      props.structuredData ??
      seo.structuredData ??
      []
    );


  // ==========================================================================
  // ROBOTS
  // ==========================================================================

  const robotsDirectives: string[] = [
    props.noindex
      ? 'noindex'
      : 'index',

    props.nofollow
      ? 'nofollow'
      : 'follow',
  ];

  if (!props.noindex) {
    robotsDirectives.push(
      'max-image-preview:large',
      'max-snippet:-1',
      'max-video-preview:-1'
    );
  }

  const robotsContent =
    robotsDirectives.join(', ');


  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <Helmet>
      {/* --------------------------------------------------------------
          DOCUMENT LANGUAGE
      -------------------------------------------------------------- */}

      <html lang="en-IN" />


      {/* --------------------------------------------------------------
          PRIMARY SEO
      -------------------------------------------------------------- */}

      <title>{syncedTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content={author}
      />


      {/* --------------------------------------------------------------
          CANONICAL

          One canonical URL only.
          Open Graph and Twitter use the same normalized URL.
      -------------------------------------------------------------- */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />


      {/* --------------------------------------------------------------
          ROBOTS
      -------------------------------------------------------------- */}

      <meta
        name="robots"
        content={robotsContent}
      />

      <meta
        name="googlebot"
        content={robotsContent}
      />


      {/* --------------------------------------------------------------
          OPEN GRAPH
      -------------------------------------------------------------- */}

      <meta
        property="og:type"
        content={ogType}
      />

      <meta
        property="og:title"
        content={syncedTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={ogImage}
      />

      <meta
        property="og:image:alt"
        content={ogImageAlt}
      />

      <meta
        property="og:site_name"
        content={SITE_CONFIG.name}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />


      {/* --------------------------------------------------------------
          TWITTER / X
      -------------------------------------------------------------- */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={syncedTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={ogImage}
      />

      <meta
        name="twitter:image:alt"
        content={ogImageAlt}
      />

      <meta
        name="twitter:url"
        content={canonicalUrl}
      />

      <meta
        name="twitter:site"
        content="@inchtomilez"
      />


      {/* --------------------------------------------------------------
          ARTICLE METADATA
      -------------------------------------------------------------- */}

      {props.datePublished && (
        <meta
          property="article:published_time"
          content={props.datePublished}
        />
      )}

      {props.dateModified && (
        <meta
          property="article:modified_time"
          content={props.dateModified}
        />
      )}

      {ogType === 'article' && author && (
        <meta
          property="article:author"
          content={author}
        />
      )}


      {/* --------------------------------------------------------------
          MOBILE / PWA SUPPORT
      -------------------------------------------------------------- */}

      <meta
        name="mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />


      {/* --------------------------------------------------------------
          STRUCTURED DATA
      -------------------------------------------------------------- */}

      {structuredData.map(
        (schema, index) => (
          <script
            key={`seo-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                JSON.stringify(schema),
            }}
          />
        )
      )}
    </Helmet>
  );
}


// ============================================================================
// EXPORT
// ============================================================================

export default SEOHeadUnified;
