/**
 * ============================================================
 * INCHTOMILEZ — CENTRAL ROUTE CONFIGURATION
 * ============================================================
 *
 * This file is the SINGLE SOURCE OF TRUTH for website URLs.
 *
 * Future systems will use this file for:
 * - React Router
 * - Navigation
 * - Footer
 * - Breadcrumbs
 * - Canonical URLs
 * - Sitemap
 * - Prerendering
 * - Redirects
 * - Structured data
 *
 * IMPORTANT:
 * Do not use window or document in this file.
 * This file must remain safe for browser, SSR and prerendering.
 */

export const SITE_URL = 'https://www.inchtomilez.com';


/**
 * ============================================================
 * STATIC ROUTES
 * ============================================================
 */

export const ROUTES = {
  // ----------------------------------------------------------
  // Main Website Pages
  // ----------------------------------------------------------

  home: '/',
  about: '/about',
  services: '/services',
  industries: '/industries',
  blogs: '/blogs',
  faqs: '/faqs',
  contact: '/contact',

  // ----------------------------------------------------------
  // Dedicated Service Sub-Pages
  // ----------------------------------------------------------

  serviceSubpages: {
    // SEO
    localSEO:
      '/services/search-engine-optimization-seo/local-seo',

    technicalSEO:
      '/services/search-engine-optimization-seo/technical-seo',

    // PPC / Google Ads
    googleShopping:
      '/services/ppc-google-ads/google-shopping',

    displayAds:
      '/services/ppc-google-ads/display-ads',

    // Social Media
    instagramMarketing:
      '/services/social-media-marketing/instagram',

    facebookMarketing:
      '/services/social-media-marketing/facebook',

    influencerMarketing:
      '/services/social-media-marketing/influencer-marketing',

    // Content Marketing
    copywriting:
      '/services/content-marketing/copywriting',

    blogWriting:
      '/services/content-marketing/blog-writing',

    // Web Development
    ecommerceDevelopment:
      '/services/web-design-development/ecommerce',

    wordpressDevelopment:
      '/services/web-design-development/wordpress',
  },

  // ----------------------------------------------------------
  // Legal Pages
  // ----------------------------------------------------------

  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  cookiePolicy: '/cookie-policy',
  disclaimer: '/disclaimer',
  refundPolicy: '/refund-policy',

  // ----------------------------------------------------------
  // Company Pages
  // ----------------------------------------------------------

  careers: '/careers',
  team: '/team',
  testimonials: '/testimonials',
  caseStudies: '/case-studies',
  portfolio: '/portfolio',
  press: '/press',
  partners: '/partners',
  awards: '/awards',

  // ----------------------------------------------------------
  // Resource Pages
  // ----------------------------------------------------------

  resources: '/resources',
  downloads: '/downloads',
  ebooks: '/ebooks',
  webinars: '/webinars',
  tools: '/tools',
  glossary: '/glossary',
  sitemapPage: '/sitemap-page',

  // ----------------------------------------------------------
  // Admin Pages
  //
  // These routes exist in the application but must NEVER be
  // added to the public SEO sitemap.
  // ----------------------------------------------------------

  admin: {
    root: '/admin',
    login: '/admin/login',
    forgotPassword: '/admin/forgot-password',

    cms: '/admin/cms',

    pages: '/admin/pages',
    newPage: '/admin/pages/new',

    media: '/admin/media',
    leads: '/admin/leads',
    users: '/admin/users',
    seo: '/admin/seo',
    settings: '/admin/settings',
    codeEditor: '/admin/code-editor',
    debug: '/admin/debug',
  },

  // ----------------------------------------------------------
  // Special / Legacy Application Page
  // ----------------------------------------------------------

  preview: '/preview_page.html',
} as const;


/**
 * ============================================================
 * MAIN SERVICE SLUGS
 * ============================================================
 *
 * These are taken from the REAL service content currently
 * present inside ServiceDetailPage.tsx.
 */

export const SERVICE_SLUGS = [
  'digital-marketing',
  'advertising',
  'branding-identity',
  'web-design-development',
  'software-development',
  'graphic-design',
  'video-media-production',
  'public-relations',
  'political-campaigns',
  'ooh-advertising',
  'radio-newspapers',
  'product-marketing',
  'btl-activations',
  'creative-campaigns',
  'search-engine-optimization-seo',
  'ppc-google-ads',
  'social-media-marketing',
  'content-marketing',
  'email-marketing',
  'ecommerce-marketing',
  'analytics-reporting',
] as const;


export type ServiceSlug =
  typeof SERVICE_SLUGS[number];


/**
 * ============================================================
 * REAL INDUSTRY SLUGS
 * ============================================================
 *
 * These correspond to actual content currently present inside
 * IndustryDetailPage.tsx.
 */

export const INDUSTRY_SLUGS = [
  'healthcare',
  'education',
  'real-estate',
  'technology',
  'finance',
  'hospitality',
  'automotive',
  'fashion',
  'legal',
  'manufacturing',
  'agriculture',
  'logistics',
  'construction',
  'retail',
  'energy',
  'non-profit',
  'sports',
] as const;


export type IndustrySlug =
  typeof INDUSTRY_SLUGS[number];


/**
 * ============================================================
 * DYNAMIC ROUTE BUILDERS
 * ============================================================
 *
 * Use these instead of manually creating URLs such as:
 *
 * `/services/${slug}`
 *
 * throughout the website.
 */

export const routeTo = {
  service: (slug: string) =>
    `/services/${slug}`,

  industry: (slug: string) =>
    `/industries/${slug}`,

  blogCategory: (category: string) =>
    `/blogs/${category}`,

  blogPost: (category: string, slug: string) =>
    `/blogs/${category}/${slug}`,

  adminEditPage: (id: string) =>
    `/admin/pages/edit/${id}`,
} as const;


/**
 * ============================================================
 * REACT ROUTER DYNAMIC PATTERNS
 * ============================================================
 *
 * IMPORTANT:
 *
 * These are route MATCHING patterns.
 *
 * They must NEVER be placed directly into sitemap.xml.
 *
 * Example:
 *
 * WRONG:
 * /blogs/:category/:slug
 *
 * Sitemap must contain the real final blog URL instead.
 */

export const ROUTE_PATTERNS = {
  serviceDetail: '/services/:slug',

  industryDetail: '/industries/:slug',

  blogCategory: '/blogs/:category',

  blogDetail:
    '/blogs/:category/:slug',

  adminEditPage:
    '/admin/pages/edit/:id',

  notFound: '*',
} as const;


/**
 * ============================================================
 * VALID ROUTE CHECKS
 * ============================================================
 *
 * Later we will use these to prevent:
 *
 * /services/random-fake-service
 *
 * /industries/random-fake-industry
 *
 * from being treated as legitimate Google-indexable pages.
 */

export const isValidServiceSlug = (
  slug?: string
): slug is ServiceSlug => {
  if (!slug) {
    return false;
  }

  return (
    SERVICE_SLUGS as readonly string[]
  ).includes(slug);
};


export const isValidIndustrySlug = (
  slug?: string
): slug is IndustrySlug => {
  if (!slug) {
    return false;
  }

  return (
    INDUSTRY_SLUGS as readonly string[]
  ).includes(slug);
};


/**
 * ============================================================
 * MAIN SERVICE URLS
 * ============================================================
 *
 * Useful later for:
 * - sitemap generation
 * - prerendering
 * - SEO validation
 */

export const MAIN_SERVICE_ROUTES =
  SERVICE_SLUGS.map(
    (slug) => routeTo.service(slug)
  );


/**
 * ============================================================
 * INDUSTRY URLS
 * ============================================================
 */

export const INDUSTRY_ROUTES =
  INDUSTRY_SLUGS.map(
    (slug) => routeTo.industry(slug)
  );


/**
 * ============================================================
 * SERVICE SUB-PAGE URLS
 * ============================================================
 */

export const SERVICE_SUBPAGE_ROUTES =
  Object.values(
    ROUTES.serviceSubpages
  );


/**
 * ============================================================
 * KNOWN LEGACY / INCORRECT URLS
 * ============================================================
 *
 * IMPORTANT:
 *
 * We are NOT activating these redirects yet.
 *
 * Later these will become 301/308 redirects so old links,
 * bookmarks and Google URLs transfer to the correct URL.
 */

export const LEGACY_ROUTE_REDIRECTS = {
  // --------------------------------------------
  // Older service names
  // --------------------------------------------

  '/services/branding':
    '/services/branding-identity',

  '/services/website-development':
    '/services/web-design-development',

  '/services/graphic-designing':
    '/services/graphic-design',

  '/services/media-production':
    '/services/video-media-production',

  '/services/ecommerce':
    '/services/ecommerce-marketing',

  '/services/influencer-marketing':
    ROUTES.serviceSubpages.influencerMarketing,

  // --------------------------------------------
  // Older SEO sub-service structures
  // --------------------------------------------

  '/services/seo/local-seo':
    ROUTES.serviceSubpages.localSEO,

  '/services/seo/technical-seo':
    ROUTES.serviceSubpages.technicalSEO,

  // --------------------------------------------
  // Older PPC structure
  // --------------------------------------------

  '/services/ppc/google-shopping':
    ROUTES.serviceSubpages.googleShopping,

  '/services/ppc/display-ads':
    ROUTES.serviceSubpages.displayAds,

  // --------------------------------------------
  // Older Social Media structure
  // --------------------------------------------

  '/services/social-media/instagram':
    ROUTES.serviceSubpages.instagramMarketing,

  '/services/social-media/facebook':
    ROUTES.serviceSubpages.facebookMarketing,

  // --------------------------------------------
  // Older Content Marketing structure
  // --------------------------------------------

  '/services/content/copywriting':
    ROUTES.serviceSubpages.copywriting,

  '/services/content/blog-writing':
    ROUTES.serviceSubpages.blogWriting,

  // --------------------------------------------
  // Older Web Development structure
  // --------------------------------------------

  '/services/web-design/ecommerce':
    ROUTES.serviceSubpages.ecommerceDevelopment,

  '/services/web-design/wordpress':
    ROUTES.serviceSubpages.wordpressDevelopment,

  // --------------------------------------------
  // Old legal URL
  // --------------------------------------------

  '/terms-conditions':
    ROUTES.termsOfService,
} as const;