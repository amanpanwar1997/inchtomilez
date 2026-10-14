/**
 * Route Preloader Utility
 *
 * Selectively preloads lazy page bundles when the user shows navigation intent.
 * This preserves Vite/React code-splitting while making navigation feel faster.
 *
 * Important:
 * - Does NOT preload every page on startup.
 * - Correctly separates blog categories from blog articles.
 * - Correctly handles service/industry detail pages.
 * - Handles dedicated service sub-pages before generic service detail routes.
 * - Avoids repeatedly loading the same component bundle.
 * - Safe for future prerender/SSR because browser globals are guarded.
 */

import { ROUTES } from '../config/routes';

type RouteLoader = {
  key: string;
  load: () => Promise<unknown>;
};

/**
 * Component loaders.
 *
 * The cache works by component key instead of full URL.
 * Example:
 * /services/digital-marketing
 * /services/advertising
 *
 * both use ServiceDetailPage, so its JS chunk only needs to be preloaded once.
 */
const loaders = {
  home: {
    key: 'home',
    load: () => import('../components/pages/HomePage'),
  },

  about: {
    key: 'about',
    load: () => import('../components/pages/AboutPage'),
  },

  services: {
    key: 'services',
    load: () => import('../components/pages/ServicesPage'),
  },

  serviceDetail: {
    key: 'service-detail',
    load: () => import('../components/pages/ServiceDetailPage'),
  },

  industries: {
    key: 'industries',
    load: () => import('../components/pages/IndustriesPage'),
  },

  industryDetail: {
    key: 'industry-detail',
    load: () => import('../components/pages/IndustryDetailPage'),
  },

  blogs: {
    key: 'blogs',
    load: () => import('../components/pages/BlogsPage'),
  },

  blogCategory: {
    key: 'blog-category',
    load: () => import('../components/pages/BlogCategoryPage'),
  },

  blogDetail: {
    key: 'blog-detail',
    load: () => import('../components/pages/BlogDetailPage'),
  },

  faqs: {
    key: 'faqs',
    load: () => import('../components/pages/FAQsPage'),
  },

  contact: {
    key: 'contact',
    load: () => import('../components/pages/ContactPage'),
  },

  privacyPolicy: {
    key: 'privacy-policy',
    load: () => import('../components/pages/PrivacyPolicyPage'),
  },

  termsOfService: {
    key: 'terms-of-service',
    load: () => import('../components/pages/TermsOfServicePage'),
  },

  cookiePolicy: {
    key: 'cookie-policy',
    load: () => import('../components/pages/CookiePolicyPage'),
  },

  disclaimer: {
    key: 'disclaimer',
    load: () => import('../components/pages/DisclaimerPage'),
  },

  refundPolicy: {
    key: 'refund-policy',
    load: () => import('../components/pages/RefundPolicyPage'),
  },

  careers: {
    key: 'careers',
    load: () => import('../components/pages/CareersPage'),
  },

  team: {
    key: 'team',
    load: () => import('../components/pages/TeamPage'),
  },

  testimonials: {
    key: 'testimonials',
    load: () => import('../components/pages/TestimonialsPage'),
  },

  caseStudies: {
    key: 'case-studies',
    load: () => import('../components/pages/CaseStudiesPage'),
  },

  portfolio: {
    key: 'portfolio',
    load: () => import('../components/pages/PortfolioPage'),
  },

  press: {
    key: 'press',
    load: () => import('../components/pages/PressPage'),
  },

  partners: {
    key: 'partners',
    load: () => import('../components/pages/PartnersPage'),
  },

  awards: {
    key: 'awards',
    load: () => import('../components/pages/AwardsPage'),
  },

  resources: {
    key: 'resources',
    load: () => import('../components/pages/ResourcesPage'),
  },

  downloads: {
    key: 'downloads',
    load: () => import('../components/pages/DownloadsPage'),
  },

  ebooks: {
    key: 'ebooks',
    load: () => import('../components/pages/EbooksPage'),
  },

  webinars: {
    key: 'webinars',
    load: () => import('../components/pages/WebinarsPage'),
  },

  tools: {
    key: 'tools',
    load: () => import('../components/pages/ToolsPage'),
  },

  glossary: {
    key: 'glossary',
    load: () => import('../components/pages/GlossaryPage'),
  },

  sitemapPage: {
    key: 'sitemap-page',
    load: () => import('../components/pages/SitemapHTMLPage'),
  },

  // Dedicated service sub-pages
  localSEO: {
    key: 'local-seo',
    load: () => import('../components/pages/LocalSEOPage'),
  },

  technicalSEO: {
    key: 'technical-seo',
    load: () => import('../components/pages/TechnicalSEOPage'),
  },

  googleShopping: {
    key: 'google-shopping',
    load: () => import('../components/pages/GoogleShoppingAdsPage'),
  },

  displayAds: {
    key: 'display-ads',
    load: () => import('../components/pages/DisplayAdsPage'),
  },

  instagramMarketing: {
    key: 'instagram-marketing',
    load: () => import('../components/pages/InstagramMarketingPage'),
  },

  facebookMarketing: {
    key: 'facebook-marketing',
    load: () => import('../components/pages/FacebookMarketingPage'),
  },

  influencerMarketing: {
    key: 'influencer-marketing',
    load: () => import('../components/pages/InfluencerMarketingPage'),
  },

  copywriting: {
    key: 'copywriting',
    load: () => import('../components/pages/CopywritingPage'),
  },

  blogWriting: {
    key: 'blog-writing',
    load: () => import('../components/pages/BlogWritingPage'),
  },

  ecommerceDevelopment: {
    key: 'ecommerce-development',
    load: () => import('../components/pages/EcommerceDevelopmentPage'),
  },

  wordpressDevelopment: {
    key: 'wordpress-development',
    load: () => import('../components/pages/WordPressDevelopmentPage'),
  },
} satisfies Record<string, RouteLoader>;


/**
 * Component-level preload caches.
 */
const preloadedComponents = new Set<string>();
const preloadingComponents = new Map<string, Promise<unknown>>();


/**
 * Normalize URLs before matching.
 */
function normalizePath(rawPath: string): string {
  if (!rawPath) {
    return ROUTES.home;
  }

  let path = rawPath;

  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      path = new URL(path).pathname;
    } catch {
      return ROUTES.home;
    }
  }

  path = path.split('?')[0].split('#')[0] || ROUTES.home;

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  if (path.length > 1) {
    path = path.replace(/\/+$/, '');
  }

  return path;
}


/**
 * Resolve the correct lazy component for a given URL.
 */
function resolveRouteLoader(rawPath: string): RouteLoader | undefined {
  const path = normalizePath(rawPath);

  /**
   * Exact routes first.
   * This is especially important for dedicated service sub-pages.
   */
  const exactRoutes = new Map<string, RouteLoader>([
    [ROUTES.home, loaders.home],
    [ROUTES.preview, loaders.home],

    [ROUTES.about, loaders.about],
    [ROUTES.services, loaders.services],
    [ROUTES.industries, loaders.industries],
    [ROUTES.blogs, loaders.blogs],
    [ROUTES.faqs, loaders.faqs],
    [ROUTES.contact, loaders.contact],

    [ROUTES.privacyPolicy, loaders.privacyPolicy],
    [ROUTES.termsOfService, loaders.termsOfService],
    [ROUTES.cookiePolicy, loaders.cookiePolicy],
    [ROUTES.disclaimer, loaders.disclaimer],
    [ROUTES.refundPolicy, loaders.refundPolicy],

    [ROUTES.careers, loaders.careers],
    [ROUTES.team, loaders.team],
    [ROUTES.testimonials, loaders.testimonials],
    [ROUTES.caseStudies, loaders.caseStudies],
    [ROUTES.portfolio, loaders.portfolio],
    [ROUTES.press, loaders.press],
    [ROUTES.partners, loaders.partners],
    [ROUTES.awards, loaders.awards],

    [ROUTES.resources, loaders.resources],
    [ROUTES.downloads, loaders.downloads],
    [ROUTES.ebooks, loaders.ebooks],
    [ROUTES.webinars, loaders.webinars],
    [ROUTES.tools, loaders.tools],
    [ROUTES.glossary, loaders.glossary],
    [ROUTES.sitemapPage, loaders.sitemapPage],

    [ROUTES.serviceSubpages.localSEO, loaders.localSEO],
    [ROUTES.serviceSubpages.technicalSEO, loaders.technicalSEO],
    [ROUTES.serviceSubpages.googleShopping, loaders.googleShopping],
    [ROUTES.serviceSubpages.displayAds, loaders.displayAds],
    [ROUTES.serviceSubpages.instagramMarketing, loaders.instagramMarketing],
    [ROUTES.serviceSubpages.facebookMarketing, loaders.facebookMarketing],
    [ROUTES.serviceSubpages.influencerMarketing, loaders.influencerMarketing],
    [ROUTES.serviceSubpages.copywriting, loaders.copywriting],
    [ROUTES.serviceSubpages.blogWriting, loaders.blogWriting],
    [ROUTES.serviceSubpages.ecommerceDevelopment, loaders.ecommerceDevelopment],
    [ROUTES.serviceSubpages.wordpressDevelopment, loaders.wordpressDevelopment],
  ]);

  const exactLoader = exactRoutes.get(path);

  if (exactLoader) {
    return exactLoader;
  }

  const segments = path.split('/').filter(Boolean);

  /**
   * /services/:slug
   */
  if (
    segments.length === 2 &&
    segments[0] === 'services'
  ) {
    return loaders.serviceDetail;
  }

  /**
   * /industries/:slug
   */
  if (
    segments.length === 2 &&
    segments[0] === 'industries'
  ) {
    return loaders.industryDetail;
  }

  /**
   * /blogs/:category
   */
  if (
    segments.length === 2 &&
    segments[0] === 'blogs'
  ) {
    return loaders.blogCategory;
  }

  /**
   * /blogs/:category/:slug
   */
  if (
    segments.length === 3 &&
    segments[0] === 'blogs'
  ) {
    return loaders.blogDetail;
  }

  return undefined;
}


/**
 * Preload a route's component chunk.
 */
export function preloadRoute(path: string): void {
  const loader = resolveRouteLoader(path);

  if (!loader) {
    return;
  }

  if (
    preloadedComponents.has(loader.key) ||
    preloadingComponents.has(loader.key)
  ) {
    return;
  }

  const promise = loader
    .load()
    .then((module) => {
      preloadedComponents.add(loader.key);
      preloadingComponents.delete(loader.key);

      if (import.meta.env.DEV) {
        console.debug(`[route-preloader] Preloaded: ${loader.key}`);
      }

      return module;
    })
    .catch((error) => {
      preloadingComponents.delete(loader.key);

      if (import.meta.env.DEV) {
        console.warn(
          `[route-preloader] Failed to preload ${loader.key}`,
          error
        );
      }

      /**
       * A failed speculative preload must never break navigation.
       */
      return undefined;
    });

  preloadingComponents.set(loader.key, promise);
}


/**
 * Preload a selected list of routes.
 *
 * App.tsx should NOT call this for every route on startup.
 */
export function preloadRoutes(paths: string[]): void {
  paths.forEach(preloadRoute);
}


/**
 * Extract the pathname from an internal anchor element.
 */
function getInternalLinkPath(
  target: EventTarget | null
): string | undefined {
  if (
    typeof window === 'undefined' ||
    !(target instanceof Element)
  ) {
    return undefined;
  }

  const link = target.closest('a[href]') as HTMLAnchorElement | null;

  if (!link) {
    return undefined;
  }

  const href = link.getAttribute('href');

  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  ) {
    return undefined;
  }

  try {
    const url = new URL(link.href, window.location.href);

    /**
     * Ignore external websites.
     */
    if (url.origin !== window.location.origin) {
      return undefined;
    }

    return normalizePath(url.pathname);
  } catch {
    return undefined;
  }
}


/**
 * Initialize intent-based preloading.
 *
 * Desktop:
 * - pointer hover
 * - keyboard focus
 *
 * Mobile:
 * - touch start
 */
export function initRoutePreloader(): () => void {
  if (
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return () => undefined;
  }

  const handlePointerOver = (event: PointerEvent) => {
    const path = getInternalLinkPath(event.target);

    if (path) {
      preloadRoute(path);
    }
  };

  const handleFocusIn = (event: FocusEvent) => {
    const path = getInternalLinkPath(event.target);

    if (path) {
      preloadRoute(path);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    const path = getInternalLinkPath(event.target);

    if (path) {
      preloadRoute(path);
    }
  };

  document.addEventListener(
    'pointerover',
    handlePointerOver,
    {
      capture: true,
      passive: true,
    }
  );

  document.addEventListener(
    'focusin',
    handleFocusIn,
    true
  );

  document.addEventListener(
    'touchstart',
    handleTouchStart,
    {
      capture: true,
      passive: true,
    }
  );

  return () => {
    document.removeEventListener(
      'pointerover',
      handlePointerOver,
      true
    );

    document.removeEventListener(
      'focusin',
      handleFocusIn,
      true
    );

    document.removeEventListener(
      'touchstart',
      handleTouchStart,
      true
    );
  };
}


/**
 * Development helper.
 *
 * Example:
 * getPreloadRouteKey('/blogs/seo')
 * -> "blog-category"
 */
export function getPreloadRouteKey(
  path: string
): string | undefined {
  return resolveRouteLoader(path)?.key;
}

