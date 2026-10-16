import { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { SEOHeadSSG } from '../SEOHeadSSG';
import {
  StructuredData,
  organizationSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getArticleSchema,
} from '../../utils/seo-system';
import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, Clock, Calendar, Tag, TrendingUp, Share2, Bookmark, ChevronRight, ArrowUp } from 'lucide-react';
import {
  getAllBlogTopics,
  getRelatedBlogs,
  getBlogUrl,
} from '../data/blogData';
import { getCategorySlug } from '../../utils/blogSlugGenerator';
import { ROUTES, SITE_URL, routeTo } from '../../config/routes';

export function BlogDetailPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    // Check if running in browser
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  /**
   * Resolve only real articles from blogData.
   *
   * Unknown slugs must NOT generate synthetic/fallback articles because
   * Google should only index URLs backed by real content in our dataset.
   */
  const allBlogs = getAllBlogTopics();

  const blog =
    slug
      ? allBlogs.find((topic) => topic.slug === slug)
      : undefined;

  if (!slug || !category || !blog) {
    return (
      <>
        <SEOHeadSSG
          title="Article Not Found | Inchtomilez"
          description="The requested blog article could not be found."
          canonical={`${SITE_URL}${ROUTES.blogs}`}
          noindex
          nofollow
        />

        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-[30px] font-medium mb-4">
              Article Not Found
            </h1>

            <p className="text-gray-400 mb-6">
              The blog article you requested does not exist or may have moved.
            </p>

            <Link
              to={ROUTES.blogs}
              className="text-yellow-500 hover:text-yellow-400"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </>
    );
  }

  /**
   * Every real article has one canonical category path.
   * If the slug is real but the category segment is wrong, redirect the
   * visitor to the canonical article URL.
   */
  const expectedCategorySlug = getCategorySlug(blog.category);
  const canonicalPath = getBlogUrl(blog);

  if (category !== expectedCategorySlug) {
    return (
      <Navigate
        to={canonicalPath}
        replace
      />
    );
  }

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const categoryPath = routeTo.blogCategory(expectedCategorySlug);

  const pageTitle = blog.title;
  const pageDescription = blog.metaDescription;
  const pageKeywords = blog.metaKeywords;
  const categoryName = blog.category;

  const relatedBlogs = getRelatedBlogs(blog.id);
  const Icon = blog.icon;

  // Share functionality
  const handleShare = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = canonicalUrl;
    const title = blog.title;

    if (
      typeof navigator !== 'undefined' &&
      navigator.share
    ) {
      navigator
        .share({
          title,
          url,
        })
        .catch(() => {
          copyToClipboard(url);
        });
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard
    ) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch(() => {
          alert('Failed to copy link');
        });
    } else {
      alert('Clipboard not available');
    }
  };

  // Save for later functionality
  const handleSaveForLater = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedArticles = JSON.parse(
      localStorage.getItem('savedArticles') || '[]'
    );

    if (savedArticles.includes(blog.id)) {
      const updated = savedArticles.filter(
        (id: number) => id !== blog.id
      );

      localStorage.setItem(
        'savedArticles',
        JSON.stringify(updated)
      );

      alert('Removed from saved articles');
    } else {
      savedArticles.push(blog.id);

      localStorage.setItem(
        'savedArticles',
        JSON.stringify(savedArticles)
      );

      alert('Article saved for later!');
    }
  };

  const breadcrumbs = [
    {
      label: 'Home',
      path: ROUTES.home,
    },
    {
      label: 'Blog',
      path: ROUTES.blogs,
    },
    {
      label: categoryName,
      path: categoryPath,
    },
    {
      label: pageTitle,
      path: canonicalPath,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <SEOHeadSSG
        title={`${blog.title} | Inchtomilez Marketing Blog`}
        description={blog.metaDescription}
        keywords={blog.metaKeywords}
        canonical={canonicalUrl}
        ogType="article"
      />

      {/* Structured Data */}
      <StructuredData
        data={[
          organizationSchema,
          getWebPageSchema(
            `${pageTitle} | Inchtomilez Marketing Blog`,
            pageDescription,
            canonicalPath
          ),
          getBreadcrumbSchema(breadcrumbs),
          getArticleSchema(
            blog.title,
            blog.metaDescription,
            canonicalPath,
            'Inchtomilez Team'
          ),
        ]}
      />

      {/* Breadcrumb */}
      <section className="pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-[0.8125rem] text-white/60">
            <Link to={ROUTES.home} className="hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="icon-xs" />
            <Link to={ROUTES.blogs} className="hover:text-yellow-500 transition-colors">
              Blogs
            </Link>
            <ChevronRight className="icon-xs" />
            <Link
              to={categoryPath}
              className="text-white hover:text-yellow-500 transition-colors"
            >
              {blog.category}
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to={ROUTES.blogs}
            className="inline-flex items-center gap-2 text-[0.8125rem] text-white/60 hover:text-yellow-500 transition-colors mb-8"
          >
            <ArrowLeft className="icon-xs" />
            Back to all articles
          </Link>

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <Icon className="text-white icon-md" />
            <span className="text-[0.8125rem] text-yellow-500 uppercase tracking-wide">
              {categoryName}
            </span>
          </div>

          {/* Title - Dynamic from metadata */}
          <h1 className="text-[26px] md:text-[30px] font-medium tracking-tight mb-6">
            {pageTitle}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8">
            <div className="flex items-center gap-2 text-[0.8125rem] text-white/60">
              <Calendar className="icon-xs" />
              <span>Published Nov 2, 2025</span>
            </div>
            {blog && (
              <>
                <div className="flex items-center gap-2 text-[0.8125rem] text-white/60">
                  <Clock className="icon-xs" />
                  <span>{blog.readTime} read</span>
                </div>
                <Badge variant="outline" className="text-[0.8125rem]">
                  {blog.difficulty}
                </Badge>
                {blog.featured && (
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30 text-[0.8125rem]">
                    Featured
                  </Badge>
                )}
                {blog.trending && (
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30 text-[0.8125rem]">
                    Trending
                  </Badge>
                )}
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={handleShare}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Share2 className="icon-xs" />
              Share Article
            </button>
            <button 
              onClick={handleSaveForLater}
              className="px-6 py-3 bg-black border border-white/20 hover:border-white/30 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <Bookmark className="icon-xs" />
              Save for Later
            </button>
          </div>

          {/* Introduction */}
          {blog && blog.introduction && (
            <div className="glass p-8 rounded-2xl mb-12">
              <p className="text-[0.9375rem] leading-relaxed text-white/80">
                {blog.introduction}
              </p>
            </div>
          )}

          {/* Table of Contents */}
          {blog && blog.sections && blog.sections.length > 0 && (
            <div className="glass p-8 rounded-2xl mb-12">
              <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-6">Table of Contents</h2>
              <nav className="space-y-3">
                {blog.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-[0.9375rem] text-white/70 hover:text-yellow-500 transition-colors pl-4 py-1"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      {blog && blog.sections && blog.sections.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            {blog.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                id={`section-${sectionIndex}`}
                className="mb-16 scroll-mt-24"
              >
                <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-6">{section.heading}</h2>
                
                <div className="space-y-6">
                  <p className="text-[0.9375rem] leading-relaxed text-white/70">
                    {section.content}
                  </p>

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-8 mt-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="glass p-6 rounded-xl">
                          <h3 className="text-[22px] font-medium mb-4">
                            {subsection.subheading}
                          </h3>
                          <p className="text-[0.9375rem] leading-relaxed text-white/70">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Placeholder content for blogs without full data */}
      {!blog && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl">
              <p className="text-[0.9375rem] leading-relaxed text-white/70 mb-6">
                This blog post is currently being developed. Check back soon for comprehensive insights on {pageTitle.toLowerCase()}.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-white/70">
                In the meantime, explore our other articles on {categoryName.toLowerCase()} or <Link to="/contact" className="text-yellow-500 hover:underline">contact us</Link> for personalized advice.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      {blog && blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong p-8 md:p-12 rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-white icon-lg" />
                <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3]">Key Takeaways</h2>
              </div>
              
              <div className="space-y-4">
                {blog.keyTakeaways.map((takeaway, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 text-[0.9375rem] leading-relaxed"
                  >
                    <div className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-500 text-[0.75rem] font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white/70">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conclusion */}
      {blog && blog.conclusion && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-6">Conclusion</h2>
            <p className="text-[0.9375rem] leading-relaxed text-white/70">
              {blog.conclusion}
            </p>
          </div>
        </section>
      )}

      {/* Tags */}
      {((blog && blog.tags && blog.tags.length > 0) || pageKeywords.length > 0) && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="text-white/40 icon-sm" />
              {(blog?.tags || pageKeywords.slice(0, 5)).map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black border border-white/20 hover:border-white/30 rounded-lg text-[0.8125rem] text-white/70 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-12 text-center">Related Articles</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {relatedBlogs.map((relatedBlog) => {
                  const RelatedIcon = relatedBlog.icon;
                  return (
                    <Link
                      key={relatedBlog.id}
                      to={getBlogUrl(relatedBlog)}
                      className="glass-card group transition-all duration-200 block"
                    >
                      <div className="inline-block bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-lg mb-4 text-[0.8125rem] font-semibold">
                        {relatedBlog.category}
                      </div>
                      <RelatedIcon className="mb-4 text-white icon-md" />
                      <h3 className="text-lg font-medium mb-3 group-hover:text-yellow-500 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-[0.8125rem] text-gray-400">
                          <Clock className="icon-xs" />
                          <span>{relatedBlog.readTime}</span>
                        </div>
                        <Badge variant="outline" className="text-[0.8125rem]">
                          {relatedBlog.difficulty}
                        </Badge>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-6">Want More Insights Like This?</h2>
            <p className="text-[0.9375rem] leading-relaxed text-white/60 mb-10">
              Subscribe to receive the latest digital marketing guides, tips, and strategies directly in your inbox
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email');
                console.log('Newsletter subscription:', email);
                alert('Thanks for subscribing! You\'ll receive our latest marketing insights.');
                e.currentTarget.reset();
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-black border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="icon-md" />
        </button>
      )}
    </div>
  );
}