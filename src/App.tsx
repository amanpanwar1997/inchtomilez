import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Bot } from 'lucide-react';

import { ROUTES, ROUTE_PATTERNS } from './config/routes';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedCursor } from './components/AnimatedCursor';
import { PageTransition } from './components/ui/PageTransition';
import { PWAInstallPrompt, IOSInstallInstructions } from './components/ui/PWAInstallPrompt';
import { LenisScroll } from './components/ui/LenisScroll';
import { CursorSpotlight } from './components/ui/CursorSpotlight';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CodeProtection } from './components/ui/CodeProtection';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { RouteAnnouncer } from './components/ui/RouteAnnouncer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { initRoutePreloader } from './utils/routePreloader';
import { registerServiceWorker } from './utils/pwaInstaller';
import { AdminAuthProvider, AdminProtectedRoute } from './utils/adminAuth';

// ============================================================
// PUBLIC PAGES — lazy loaded for smaller initial bundles
// ============================================================
const HomePage = lazy(() => import('./components/pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./components/pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./components/pages/IndustriesPage').then((module) => ({ default: module.IndustriesPage })));
const IndustryDetailPage = lazy(() => import('./components/pages/IndustryDetailPage').then((module) => ({ default: module.IndustryDetailPage })));
const BlogsPage = lazy(() => import('./components/pages/BlogsPage').then((module) => ({ default: module.BlogsPage })));
const BlogCategoryPage = lazy(() => import('./components/pages/BlogCategoryPage').then((module) => ({ default: module.BlogCategoryPage })));
const BlogDetailPage = lazy(() => import('./components/pages/BlogDetailPage').then((module) => ({ default: module.BlogDetailPage })));
const FAQsPage = lazy(() => import('./components/pages/FAQsPage').then((module) => ({ default: module.FAQsPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const AIChatbot = lazy(() => import('./components/AIChatbot').then((module) => ({ default: module.AIChatbot })));

// ============================================================
// LEGAL PAGES
// ============================================================
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/pages/TermsOfServicePage').then((module) => ({ default: module.TermsOfServicePage })));
const CookiePolicyPage = lazy(() => import('./components/pages/CookiePolicyPage').then((module) => ({ default: module.CookiePolicyPage })));
const DisclaimerPage = lazy(() => import('./components/pages/DisclaimerPage').then((module) => ({ default: module.DisclaimerPage })));
const RefundPolicyPage = lazy(() => import('./components/pages/RefundPolicyPage').then((module) => ({ default: module.RefundPolicyPage })));

// ============================================================
// COMPANY PAGES
// ============================================================
const CareersPage = lazy(() => import('./components/pages/CareersPage').then((module) => ({ default: module.CareersPage })));
const TeamPage = lazy(() => import('./components/pages/TeamPage').then((module) => ({ default: module.TeamPage })));
const TestimonialsPage = lazy(() => import('./components/pages/TestimonialsPage').then((module) => ({ default: module.TestimonialsPage })));
const CaseStudiesPage = lazy(() => import('./components/pages/CaseStudiesPage').then((module) => ({ default: module.CaseStudiesPage })));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage').then((module) => ({ default: module.PortfolioPage })));
const PressPage = lazy(() => import('./components/pages/PressPage').then((module) => ({ default: module.PressPage })));
const PartnersPage = lazy(() => import('./components/pages/PartnersPage').then((module) => ({ default: module.PartnersPage })));
const AwardsPage = lazy(() => import('./components/pages/AwardsPage').then((module) => ({ default: module.AwardsPage })));

// ============================================================
// RESOURCE PAGES
// ============================================================
const ResourcesPage = lazy(() => import('./components/pages/ResourcesPage').then((module) => ({ default: module.ResourcesPage })));
const DownloadsPage = lazy(() => import('./components/pages/DownloadsPage').then((module) => ({ default: module.DownloadsPage })));
const EbooksPage = lazy(() => import('./components/pages/EbooksPage').then((module) => ({ default: module.EbooksPage })));
const WebinarsPage = lazy(() => import('./components/pages/WebinarsPage').then((module) => ({ default: module.WebinarsPage })));
const ToolsPage = lazy(() => import('./components/pages/ToolsPage').then((module) => ({ default: module.ToolsPage })));
const GlossaryPage = lazy(() => import('./components/pages/GlossaryPage').then((module) => ({ default: module.GlossaryPage })));
const SitemapHTMLPage = lazy(() => import('./components/pages/SitemapHTMLPage').then((module) => ({ default: module.SitemapHTMLPage })));

// ============================================================
// DEDICATED SERVICE SUB-PAGES
// ============================================================
const LocalSEOPage = lazy(() => import('./components/pages/LocalSEOPage').then((module) => ({ default: module.LocalSEOPage })));
const TechnicalSEOPage = lazy(() => import('./components/pages/TechnicalSEOPage').then((module) => ({ default: module.TechnicalSEOPage })));
const GoogleShoppingAdsPage = lazy(() => import('./components/pages/GoogleShoppingAdsPage').then((module) => ({ default: module.GoogleShoppingAdsPage })));
const DisplayAdsPage = lazy(() => import('./components/pages/DisplayAdsPage').then((module) => ({ default: module.DisplayAdsPage })));
const InstagramMarketingPage = lazy(() => import('./components/pages/InstagramMarketingPage').then((module) => ({ default: module.InstagramMarketingPage })));
const FacebookMarketingPage = lazy(() => import('./components/pages/FacebookMarketingPage').then((module) => ({ default: module.FacebookMarketingPage })));
const InfluencerMarketingPage = lazy(() => import('./components/pages/InfluencerMarketingPage').then((module) => ({ default: module.InfluencerMarketingPage })));
const CopywritingPage = lazy(() => import('./components/pages/CopywritingPage').then((module) => ({ default: module.CopywritingPage })));
const BlogWritingPage = lazy(() => import('./components/pages/BlogWritingPage').then((module) => ({ default: module.BlogWritingPage })));
const EcommerceDevelopmentPage = lazy(() => import('./components/pages/EcommerceDevelopmentPage').then((module) => ({ default: module.EcommerceDevelopmentPage })));
const WordPressDevelopmentPage = lazy(() => import('./components/pages/WordPressDevelopmentPage').then((module) => ({ default: module.WordPressDevelopmentPage })));

// ============================================================
// ADMIN PAGES
// ============================================================
const AdminLoginPage = lazy(() => import('./components/admin/AdminLoginPage').then((module) => ({ default: module.AdminLoginPage })));
const AdminForgotPasswordPage = lazy(() => import('./components/admin/AdminForgotPasswordPage').then((module) => ({ default: module.AdminForgotPasswordPage })));
const AdminDashboardPage = lazy(() => import('./components/admin/AdminDashboardPage').then((module) => ({ default: module.AdminDashboardPage })));
const AdminCMSPage = lazy(() => import('./components/admin/AdminCMSPage').then((module) => ({ default: module.AdminCMSPage })));
const AdminPagesListPage = lazy(() => import('./components/admin/AdminPagesListPageV3').then((module) => ({ default: module.AdminPagesListPageV3 })));
const AdminPageEditorPageV2 = lazy(() => import('./components/admin/AdminPageEditorPageV2').then((module) => ({ default: module.AdminPageEditorPageV2 })));
const AdminMediaLibraryPage = lazy(() => import('./components/admin/AdminMediaLibraryPage').then((module) => ({ default: module.AdminMediaLibraryPage })));
const AdminLeadsPage = lazy(() => import('./components/admin/AdminLeadsPage').then((module) => ({ default: module.AdminLeadsPage })));
const AdminUsersPage = lazy(() => import('./components/admin/AdminUsersPage').then((module) => ({ default: module.AdminUsersPage })));
const AdminSEOPage = lazy(() => import('./components/admin/AdminSEOPageV3').then((module) => ({ default: module.AdminSEOPageV3 })));
const AdminSettingsPage = lazy(() => import('./components/admin/AdminSettingsPage').then((module) => ({ default: module.AdminSettingsPage })));
const AdminCodeEditorPage = lazy(() => import('./components/admin/AdminCodeEditorPage').then((module) => ({ default: module.AdminCodeEditorPage })));
const AdminDebugPage = lazy(() => import('./components/admin/AdminDebugPage').then((module) => ({ default: module.AdminDebugPage })));

// ============================================================
// PAGE LOADER
//
// Uses Tailwind's built-in animate-spin instead of injecting a
// <style> tag through document at module load. This keeps App.tsx
// safe to import during future prerender/server rendering work.
// ============================================================
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white/60 text-sm">Loading...</p>
      </div>
    </div>
  );
}

// ============================================================
// CENTRALIZED APPLICATION ROUTES
// ============================================================
function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        {/* Main public pages */}
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.preview} element={<Navigate to={ROUTES.home} replace />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.services} element={<ServicesPage />} />

        {/* Dedicated SEO sub-services */}
        <Route path={ROUTES.serviceSubpages.localSEO} element={<LocalSEOPage />} />
        <Route path={ROUTES.serviceSubpages.technicalSEO} element={<TechnicalSEOPage />} />

        {/* Dedicated PPC / Google Ads sub-services */}
        <Route path={ROUTES.serviceSubpages.googleShopping} element={<GoogleShoppingAdsPage />} />
        <Route path={ROUTES.serviceSubpages.displayAds} element={<DisplayAdsPage />} />

        {/* Dedicated Social Media sub-services */}
        <Route path={ROUTES.serviceSubpages.instagramMarketing} element={<InstagramMarketingPage />} />
        <Route path={ROUTES.serviceSubpages.facebookMarketing} element={<FacebookMarketingPage />} />
        <Route path={ROUTES.serviceSubpages.influencerMarketing} element={<InfluencerMarketingPage />} />

        {/* Dedicated Content Marketing sub-services */}
        <Route path={ROUTES.serviceSubpages.copywriting} element={<CopywritingPage />} />
        <Route path={ROUTES.serviceSubpages.blogWriting} element={<BlogWritingPage />} />

        {/* Dedicated Web Development sub-services */}
        <Route path={ROUTES.serviceSubpages.ecommerceDevelopment} element={<EcommerceDevelopmentPage />} />
        <Route path={ROUTES.serviceSubpages.wordpressDevelopment} element={<WordPressDevelopmentPage />} />

        {/* Dynamic main service route. Keep after dedicated sub-service routes. */}
        <Route path={ROUTE_PATTERNS.serviceDetail} element={<ServiceDetailPage />} />

        {/* Industries */}
        <Route path={ROUTES.industries} element={<IndustriesPage />} />
        <Route path={ROUTE_PATTERNS.industryDetail} element={<IndustryDetailPage />} />

        {/* Blogs */}
        <Route path={ROUTES.blogs} element={<BlogsPage />} />
        <Route path={ROUTE_PATTERNS.blogCategory} element={<BlogCategoryPage />} />
        <Route path={ROUTE_PATTERNS.blogDetail} element={<BlogDetailPage />} />

        {/* Other main pages */}
        <Route path={ROUTES.faqs} element={<FAQsPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />

        {/* Legal pages */}
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicyPage />} />
        <Route path={ROUTES.termsOfService} element={<TermsOfServicePage />} />
        <Route path={ROUTES.cookiePolicy} element={<CookiePolicyPage />} />
        <Route path={ROUTES.disclaimer} element={<DisclaimerPage />} />
        <Route path={ROUTES.refundPolicy} element={<RefundPolicyPage />} />

        {/* Company pages */}
        <Route path={ROUTES.careers} element={<CareersPage />} />
        <Route path={ROUTES.team} element={<TeamPage />} />
        <Route path={ROUTES.testimonials} element={<TestimonialsPage />} />
        <Route path={ROUTES.caseStudies} element={<CaseStudiesPage />} />
        <Route path={ROUTES.portfolio} element={<PortfolioPage />} />
        <Route path={ROUTES.press} element={<PressPage />} />
        <Route path={ROUTES.partners} element={<PartnersPage />} />
        <Route path={ROUTES.awards} element={<AwardsPage />} />

        {/* Resource pages */}
        <Route path={ROUTES.resources} element={<ResourcesPage />} />
        <Route path={ROUTES.downloads} element={<DownloadsPage />} />
        <Route path={ROUTES.ebooks} element={<EbooksPage />} />
        <Route path={ROUTES.webinars} element={<WebinarsPage />} />
        <Route path={ROUTES.tools} element={<ToolsPage />} />
        <Route path={ROUTES.glossary} element={<GlossaryPage />} />
        <Route path={ROUTES.sitemapPage} element={<SitemapHTMLPage />} />

        {/* Admin routes — these remain outside the public SEO sitemap */}
        <Route path={ROUTES.admin.login} element={<AdminLoginPage />} />
        <Route path={ROUTES.admin.forgotPassword} element={<AdminForgotPasswordPage />} />
        <Route
          path={ROUTES.admin.root}
          element={
            <AdminProtectedRoute>
              <AdminDashboardPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.cms}
          element={
            <AdminProtectedRoute requiredRole="viewer">
              <AdminCMSPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.pages}
          element={
            <AdminProtectedRoute requiredRole="viewer">
              <AdminPagesListPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.newPage}
          element={
            <AdminProtectedRoute requiredRole="editor">
              <AdminPageEditorPageV2 />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTE_PATTERNS.adminEditPage}
          element={
            <AdminProtectedRoute requiredRole="editor">
              <AdminPageEditorPageV2 />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.media}
          element={
            <AdminProtectedRoute requiredRole="viewer">
              <AdminMediaLibraryPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.leads}
          element={
            <AdminProtectedRoute requiredRole="viewer">
              <AdminLeadsPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.users}
          element={
            <AdminProtectedRoute requiredRole="admin">
              <AdminUsersPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.seo}
          element={
            <AdminProtectedRoute requiredRole="editor">
              <AdminSEOPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.settings}
          element={
            <AdminProtectedRoute requiredRole="admin">
              <AdminSettingsPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.codeEditor}
          element={
            <AdminProtectedRoute requiredRole="admin">
              <AdminCodeEditorPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path={ROUTES.admin.debug}
          element={
            <AdminProtectedRoute requiredRole="admin">
              <AdminDebugPage />
            </AdminProtectedRoute>
          }
        />

        {/* Client-side fallback. Real HTTP 404 handling comes in the rendering/Vercel step. */}
        <Route path={ROUTE_PATTERNS.notFound} element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Route preloading runs only after the app mounts in the browser.
  // We intentionally do NOT preload every lazy route after startup.
  // initRoutePreloader() can selectively preload routes when the user
  // is likely to navigate to them, preserving the benefit of code splitting.
  useEffect(() => {
    const cleanup = initRoutePreloader();

    return cleanup;
  }, []);

  // Register the service worker only in an actual Vite production build.
  useEffect(() => {
    if (import.meta.env.PROD) {
      registerServiceWorker();
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AdminAuthProvider>
          <ScrollToTop />
          <RouteAnnouncer />

          <LenisScroll>
            <div className="min-h-screen text-white flex flex-col select-none">
              {/* Browser keyboard and context menu remain usable. */}
              <AnimatedCursor />
              <CursorSpotlight />
              <ScrollProgress />

              <Navigation />

              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <AppRoutes />
                </Suspense>
              </main>

              <Footer />

              {chatbotOpen && (
                <Suspense fallback={null}>
                  <AIChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
                </Suspense>
              )}

              <PWAInstallPrompt />
              <IOSInstallInstructions />
              <WhatsAppButton />

              {!chatbotOpen && (
                <button
                  onClick={() => setChatbotOpen(true)}
                  className="fixed bottom-6 right-6 z-[9000] bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                  aria-label="Open AI Chatbot"
                  style={{
                    boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)',
                  }}
                >
                  <Bot className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />

                  <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                      Chat with us! 💬
                      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </LenisScroll>
        </AdminAuthProvider>
      </Router>
    </HelmetProvider>
  );
}
