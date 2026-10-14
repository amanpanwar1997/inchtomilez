import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import {
  TrendingUp,
  Target,
  Sparkles,
  BarChart3,
  Globe,
  Award,
  Play,
  Mail,
  Building2,
  Search,
  Clock,
  ArrowRight,
  Grid3x3,
  Star,
  FolderOpen,
  X,
  ChevronRight,
} from 'lucide-react';

import { getAllBlogTopics, getBlogUrl } from '../data/blogData';
import { getCategoryNameFromSlug } from '../../utils/blogSlugGenerator';
import { SEOHeadSSG } from '../SEOHeadSSG';
import {
  StructuredData,
  organizationSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from '../../utils/seo-system';
import { OutlinedText } from '../ui/OutlinedText';
import { Badge } from '../ui/badge';
import { BentoGrid2 } from '../layout/BentoGrid2';
import { ROUTES, SITE_URL, routeTo } from '../../config/routes';

// Category metadata
const categoryMetadata: Record<string, { icon: any; color: string }> = {
  'SEO & Local SEO': { icon: TrendingUp, color: 'yellow' },
  'PPC & Google Ads': { icon: Target, color: 'yellow' },
  'Social Media Marketing': { icon: Sparkles, color: 'yellow' },
  'Content Marketing': { icon: BarChart3, color: 'yellow' },
  'Web Design & Development': { icon: Globe, color: 'yellow' },
  'Branding & Creative': { icon: Award, color: 'yellow' },
  'Email Marketing': { icon: Mail, color: 'yellow' },
  'Video & Media Production': { icon: Play, color: 'yellow' },
  'Analytics & Reporting': { icon: BarChart3, color: 'yellow' },
  'E-commerce Marketing': { icon: Building2, color: 'yellow' },
};

export function BlogCategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  // Get category name from slug
  const categoryName = getCategoryNameFromSlug(categorySlug || '');
  
  // Get all topics from data file
  const allTopics = useMemo(() => getAllBlogTopics(), []);
  
  // Filter topics by category
  const categoryTopics = useMemo(() => {
    return allTopics.filter(topic => topic.category === categoryName);
  }, [allTopics, categoryName]);

  const isValidCategory =
    Boolean(categorySlug) &&
    Boolean(categoryMetadata[categoryName]) &&
    categoryTopics.length > 0;

  if (!isValidCategory || !categorySlug) {
    return (
      <>
        <SEOHeadSSG
          title="Blog Category Not Found | Inchtomilez"
          description="The requested blog category could not be found."
          canonical={`${SITE_URL}${ROUTES.blogs}`}
          noindex
          nofollow
        />

        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-[30px] font-medium mb-4">
              Blog Category Not Found
            </h1>

            <p className="text-gray-400 mb-6">
              The blog category you requested does not exist or may have moved.
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

  const categoryMeta = categoryMetadata[categoryName];
  const CategoryIcon = categoryMeta.icon;

  // Filtered topics
  const filteredTopics = useMemo(() => {
    let filtered = categoryTopics;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter(topic => topic.difficulty === selectedDifficulty);
    }

    return filtered;
  }, [categoryTopics, searchQuery, selectedDifficulty]);

  // Featured posts from this category
  const featuredPosts = useMemo(() => {
    return categoryTopics.filter(topic => topic.featured).slice(0, 6).map(topic => ({
      title: topic.title,
      description: `${topic.readTime} • ${topic.difficulty}`,
      icon: topic.icon,
      link: getBlogUrl(topic)
    }));
  }, [categoryTopics]);

  // SEO
  const pageTitle = `${categoryName} - Inchtomilez Blog`;
  const pageDescription = `Explore our comprehensive ${categoryName.toLowerCase()} articles. ${categoryTopics.length} expert guides and insights.`;

  const categoryPath = routeTo.blogCategory(categorySlug);
  const canonicalUrl = `${SITE_URL}${categoryPath}`;

  // Breadcrumb schema
  const breadcrumbItems = [
    { label: 'Home', path: ROUTES.home },
    { label: 'Blog', path: ROUTES.blogs },
    { label: categoryName, path: categoryPath },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO */}
      <SEOHeadSSG 
        title={pageTitle}
        description={pageDescription}
        keywords={[categoryName, 'digital marketing', 'Indore', 'blog', 'guides']}
        canonical={canonicalUrl}
      />

      {/* Structured Data */}
      <StructuredData data={organizationSchema} />
      <StructuredData
        data={getWebPageSchema(
          pageTitle,
          pageDescription,
          categoryPath
        )}
      />
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-6">
            <Link to={ROUTES.home} className="text-gray-400 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <Link to={ROUTES.blogs} className="text-gray-400 hover:text-yellow-500 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white">{categoryName}</span>
          </nav>

          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 glass-yellow rounded-xl">
              <CategoryIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-[30px] md:text-[36px] font-medium mb-2">
                {categoryName}
              </h1>
              <p className="text-[15px] text-gray-400">
                {categoryTopics.length} articles
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${categoryName.toLowerCase()} articles...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-[15px] text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                !selectedDifficulty
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              All Levels
            </button>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                  selectedDifficulty === level
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Background Text */}
        <OutlinedText 
          text={categoryName.toUpperCase()}
          direction="left"
          delay={0}
          stopPosition={25}
          parallax={true}
          parallaxSpeed={0.2}
        />
      </section>

      {/* Featured Posts (if any) */}
      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-[20px] md:text-[22px] font-bold">Featured Articles</h2>
            </div>
            <BentoGrid2 
              cards={featuredPosts}
              mode="asymmetric"
              showBadges={true}
              ariaLabel="Featured blog posts"
            />
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FolderOpen className="w-6 h-6 text-yellow-500" />
              <h2 className="text-[20px] md:text-[22px] font-bold">
                All {categoryName} Articles
              </h2>
            </div>
            <span className="text-[13px] text-gray-400">
              {filteredTopics.length} {filteredTopics.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {filteredTopics.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-[15px] text-gray-400">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map(topic => {
                const TopicIcon = topic.icon;
                return (
                  <Link
                    key={topic.id}
                    to={getBlogUrl(topic)}
                    className="glass-card group transition-all duration-200 block"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <TopicIcon className="w-5 h-5 text-yellow-500" />
                      </div>
                      <Badge variant="secondary" className="text-[11px]">
                        {topic.difficulty}
                      </Badge>
                    </div>

                    <h3 className="text-[18px] font-medium mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                      {topic.title}
                    </h3>

                    <p className="text-[13px] text-gray-400 mb-4 line-clamp-2">
                      {topic.metaDescription}
                    </p>

                    <div className="flex items-center justify-between text-[13px] text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{topic.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Back to All Categories */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <Link
            to={ROUTES.blogs}
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg text-[15px] font-semibold hover:bg-yellow-400 transition-colors"
          >
            <Grid3x3 className="w-5 h-5" />
            Browse All Categories
          </Link>
        </div>
      </section>
    </div>
  );
}