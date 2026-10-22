/**
 * ============================================================================
 * INCHTOMILEZ - ADVANCED SEO DATABASE
 * ============================================================================
 *
 * Version: 5.1 - Backward-compatible SEO refinements
 *
 * PURPOSE
 * -------
 * Central SEO metadata database for all important indexable static routes.
 *
 * PRIMARY SEO OBJECTIVE
 * ---------------------
 * Establish Inchtomilez as a highly relevant entity for:
 *
 * - Digital Marketing Agency in Indore
 * - Advertising Agency in Indore
 * - SEO Company in Indore
 * - Google Ads Agency in Indore
 * - Social Media Marketing Agency in Indore
 * - Website Development Company in Indore
 * - Branding Agency in Indore
 * - Local SEO Services in Indore
 *
 * IMPORTANT ARCHITECTURE
 * ----------------------
 *
 * 1. Homepage owns:
 *    "Digital Marketing Agency in Indore"
 *
 * 2. Service pages own individual service intent.
 *
 * 3. Sub-service pages own long-tail service intent.
 *
 * 4. Industry pages own industry-specific marketing intent.
 *
 * 5. Blog article SEO is generated dynamically by BlogDetailPage.
 *    We DO NOT hardcode hundreds of article entries here.
 *
 * This reduces:
 * - keyword cannibalization
 * - outdated URLs
 * - duplicate metadata
 * - maintenance problems
 *
 * ============================================================================
 */

import type { SEOData } from "./seo-master";


// ============================================================================
// CONSTANTS
// ============================================================================


// ============================================================================
// SEO FACTORIES
// ============================================================================

/**
 * Standard website / informational page.
 */
function websiteSEO(
  title: string,
  description: string,
  keywords: string[],
  h1: string
): SEOData {
  return {
    title,
    description,
    keywords,
    h1,
    ogType: "website",
    schemaType: "website",
  };
}


/**
 * Organization / company page.
 */
function organizationSEO(
  title: string,
  description: string,
  keywords: string[],
  h1: string
): SEOData {
  return {
    title,
    description,
    keywords,
    h1,
    ogType: "website",
    schemaType: "organization",
  };
}


/**
 * Commercial service page.
 */
function serviceSEO(
  title: string,
  description: string,
  keywords: string[],
  h1: string,
  category: string
): SEOData {
  return {
    title,
    description,
    keywords,
    h1,
    // Open Graph standard types do not include "service".
    // Keep Service JSON-LD via schemaType independently.
    ogType: "website",
    schemaType: "service",
    category,
  };
}


// ============================================================================
// COMPLETE SEO DATA
// ============================================================================

export const COMPLETE_SEO_DATA: Record<string, SEOData> = {

  // ==========================================================================
  // HOMEPAGE
  // PRIMARY KEYWORD: DIGITAL MARKETING AGENCY IN INDORE
  // ==========================================================================

  "/": {
    title:
      "Digital Marketing Agency in Indore | Inchtomilez",

    description:
      "Inchtomilez is a digital marketing agency in Indore offering SEO, Google Ads, Meta Ads, social media marketing, branding, web development and AI SEO.",

    keywords: [
      "digital marketing agency in Indore",
      "digital marketing company Indore",
      "advertising agency in Indore",
      "online marketing agency Indore",
      "performance marketing agency Indore",
      "SEO company Indore",
      "Google Ads agency Indore",
      "social media marketing agency Indore",
      "website development company Indore",
      "branding agency Indore",
      "Inchtomilez",
    ],

    h1:
      "Digital Marketing Agency in Indore for Measurable Business Growth",

    ogType: "website",

    schemaType: "organization",
  },


  // ==========================================================================
  // MAIN PAGES
  // ==========================================================================

  "/about": organizationSEO(
    "About Inchtomilez | Digital Marketing Agency in Indore",

    "Discover Inchtomilez, a digital marketing and advertising agency in Indore offering SEO, Google Ads, social media, branding and web development.",

    [
      "about Inchtomilez",
      "digital marketing agency Indore",
      "advertising agency Indore",
      "marketing company Indore",
      "Inchtomilez team",
      "Inchtomilez Indore",
    ],

    "About Inchtomilez"
  ),


  "/services": serviceSEO(
    "Marketing & Advertising Services in Indore | Inchtomilez",

    "Explore SEO, Google Ads, Meta Ads, social media marketing, branding, web development, content marketing and advertising services from Inchtomilez.",

    [
      "digital marketing services Indore",
      "advertising services Indore",
      "SEO services Indore",
      "Google Ads services Indore",
      "social media marketing Indore",
      "website development Indore",
      "branding services Indore",
    ],

    "Marketing & Advertising Services in Indore",

    "Marketing and Advertising"
  ),


  "/industries": serviceSEO(
    "Industry-Focused Digital Marketing | Inchtomilez",

    "Explore digital marketing for healthcare, real estate, education, retail, finance and other industries, including SEO, paid ads and branding.",

    [
      "industry digital marketing",
      "healthcare marketing Indore",
      "real estate marketing Indore",
      "education marketing Indore",
      "ecommerce marketing",
      "B2B marketing agency Indore",
    ],

    "Digital Marketing Solutions for Different Industries",

    "Industry Marketing"
  ),


  "/blogs": websiteSEO(
    "Digital Marketing Blog | SEO, Google Ads & Growth | Inchtomilez",

    "Read practical guides on SEO, Google Ads, social media, content marketing, website development, branding and digital growth from the Inchtomilez team.",

    [
      "digital marketing blog",
      "SEO blog India",
      "Google Ads guides",
      "social media marketing blog",
      "digital marketing tips",
      "marketing blog Indore",
    ],

    "Digital Marketing Insights, Guides & Strategies"
  ),


  "/faqs": {
    title:
      "Digital Marketing FAQs | SEO, Ads & Services | Inchtomilez",

    description:
      "Get answers to common questions about SEO, Google Ads, social media marketing, websites, digital marketing costs, timelines and working with Inchtomilez.",

    keywords: [
      "digital marketing FAQs",
      "SEO FAQ",
      "Google Ads questions",
      "digital marketing pricing Indore",
      "marketing agency questions",
    ],

    h1:
      "Frequently Asked Questions",

    ogType: "website",

    schemaType: "faq",
  },


  "/contact": organizationSEO(
    "Contact Inchtomilez | Digital Marketing Agency in Indore",

    "Contact Inchtomilez in Indore for SEO, Google Ads, Meta Ads, social media marketing, branding, web development and advertising enquiries.",

    [
      "contact Inchtomilez",
      "digital marketing agency Vijay Nagar Indore",
      "marketing agency near me",
      "advertising agency Vijay Nagar",
      "SEO company Indore contact",
      "Inchtomilez phone",
    ],

    "Contact Inchtomilez in Indore"
  ),


  // ==========================================================================
  // CORE SERVICE PAGES
  // ==========================================================================

  "/services/search-engine-optimization-seo": serviceSEO(
    "SEO Company in Indore | SEO Services | Inchtomilez",

    "SEO services in Indore covering technical SEO, on-page optimization, local SEO and content strategy to strengthen organic visibility and relevant traffic.",

    [
      "SEO company in Indore",
      "SEO agency Indore",
      "SEO services Indore",
      "best SEO company Indore",
      "local SEO Indore",
      "technical SEO Indore",
      "organic SEO services Indore",
      "Google ranking company Indore",
    ],

    "SEO Company in Indore Focused on Rankings, Traffic & Leads",

    "Search Engine Optimization"
  ),


  "/services/ppc-google-ads": serviceSEO(
    "Google Ads Agency in Indore | PPC | Inchtomilez",

    "Google Ads and PPC management in Indore, including search, display, shopping and remarketing campaigns with conversion tracking and reporting.",

    [
      "Google Ads agency Indore",
      "PPC company Indore",
      "Google Ads expert Indore",
      "PPC management Indore",
      "Google advertising agency Indore",
      "paid search agency Indore",
      "lead generation agency Indore",
    ],

    "Google Ads Agency in Indore for Performance-Driven Campaigns",

    "Google Ads and PPC"
  ),


  "/services/social-media-marketing": serviceSEO(
    "Social Media Marketing Agency Indore | Inchtomilez",

    "Social media marketing in Indore with content strategy, account management, Meta Ads and campaign reporting for Facebook, Instagram and other platforms.",

    [
      "social media marketing agency Indore",
      "social media company Indore",
      "Instagram marketing Indore",
      "Facebook marketing Indore",
      "Meta Ads agency Indore",
      "social media management Indore",
    ],

    "Social Media Marketing Agency in Indore",

    "Social Media Marketing"
  ),


  "/services/content-marketing": serviceSEO(
    "Content Marketing Agency in Indore | Inchtomilez",

    "Content marketing services in Indore, including SEO content, website copywriting, blogs, editorial strategy and campaign content for your audience.",

    [
      "content marketing agency Indore",
      "content writing services Indore",
      "SEO content Indore",
      "blog writing Indore",
      "website content writing Indore",
      "copywriting agency Indore",
    ],

    "Content Marketing Services That Build Authority & Demand",

    "Content Marketing"
  ),


  "/services/branding-identity": serviceSEO(
    "Branding Agency in Indore | Inchtomilez",

    "Branding and visual identity services in Indore, including logo design, brand strategy, visual guidelines and creative assets for your business.",

    [
      "branding agency Indore",
      "brand identity Indore",
      "branding company Indore",
      "logo design Indore",
      "brand strategy Indore",
      "creative agency Indore",
    ],

    "Branding & Identity Agency in Indore",

    "Branding and Identity"
  ),


  "/services/web-design-development": serviceSEO(
    "Website Development Company Indore | Inchtomilez",

    "Website design and development in Indore, including responsive business websites, WordPress, e-commerce development and conversion-focused interfaces.",

    [
      "website development company Indore",
      "web development company Indore",
      "website designer Indore",
      "web design agency Indore",
      "React development Indore",
      "WordPress development Indore",
      "ecommerce website development Indore",
    ],

    "Website Development Company in Indore",

    "Web Design and Development"
  ),


  "/services/video-media-production": serviceSEO(
    "Video Production Services in Indore | Inchtomilez",

    "Video and media production in Indore, including brand films, ad creatives, commercial photography, editing and visual content for marketing campaigns.",

    [
      "video production company Indore",
      "video agency Indore",
      "corporate video Indore",
      "advertising video Indore",
      "social media video production Indore",
      "media production Indore",
    ],

    "Video & Media Production in Indore",

    "Video and Media Production"
  ),


  "/services/email-marketing": serviceSEO(
    "Email Marketing Services | Inchtomilez",

    "Email marketing services covering campaign planning, newsletter content, customer journeys, segmentation and performance analysis.",

    [
      "email marketing services Indore",
      "email marketing agency Indore",
      "email automation services",
      "email campaign management",
      "lead nurturing services",
    ],

    "Email Marketing & Automation Services",

    "Email Marketing"
  ),


  "/services/ecommerce-marketing": serviceSEO(
    "Ecommerce Marketing Services | Inchtomilez",

    "Ecommerce marketing services covering product ads, SEO, remarketing, email campaigns and analytics for online stores and retail brands.",

    [
      "ecommerce marketing agency Indore",
      "ecommerce SEO Indore",
      "online store marketing",
      "Shopify marketing Indore",
      "ecommerce advertising",
      "marketplace marketing",
    ],

    "Ecommerce Marketing for Sustainable Online Growth",

    "Ecommerce Marketing"
  ),


  "/services/analytics-reporting": serviceSEO(
    "Marketing Analytics & Reporting | Inchtomilez",

    "Marketing analytics and reporting services including GA4, conversion tracking, dashboards, campaign measurement and performance insights.",

    [
      "marketing analytics Indore",
      "digital marketing reporting",
      "campaign analytics",
      "Google Analytics services Indore",
      "marketing dashboard",
      "ROI reporting",
    ],

    "Marketing Analytics & Transparent Reporting",

    "Analytics and Reporting"
  ),


  "/services/btl-activations": serviceSEO(
    "BTL Activations & Brand Promotions | Inchtomilez",

    "Discover below-the-line marketing, event activations, retail promotions and brand engagement campaigns tailored to your audience.",

    [
      "BTL activation agency Indore",
      "BTL marketing Indore",
      "brand activation Indore",
      "event marketing Indore",
      "experiential marketing Indore",
      "on ground promotion Indore",
    ],

    "BTL Activations & Experiential Marketing in Indore",

    "BTL Marketing"
  ),


  "/services/ooh-advertising": serviceSEO(
    "Outdoor & OOH Advertising Services | Inchtomilez",

    "Out-of-home advertising services covering billboard creative, outdoor media planning and location-focused brand campaigns.",

    [
      "outdoor advertising agency Indore",
      "OOH advertising Indore",
      "hoarding advertising Indore",
      "billboard advertising Indore",
      "outdoor media agency Indore",
      "transit advertising Indore",
    ],

    "OOH & Outdoor Advertising in Indore",

    "OOH Advertising"
  ),


  "/services/influencer-marketing": serviceSEO(
    "Influencer Marketing Agency in Indore | Inchtomilez",

    "Influencer marketing campaigns for brands including creator discovery, outreach, campaign strategy, content coordination and performance measurement.",

    [
      "influencer marketing agency Indore",
      "influencer agency Indore",
      "creator marketing Indore",
      "Instagram influencer marketing",
      "brand collaboration agency",
    ],

    "Influencer Marketing Campaigns for Brands",

    "Influencer Marketing"
  ),


  "/services/digital-marketing": serviceSEO(
    "Digital Marketing Services in Indore | Inchtomilez",

    "Explore digital marketing services in Indore combining SEO, Google Ads, social media marketing, content, branding and analytics for business growth.",

    [
      "digital marketing services Indore",
      "online marketing services Indore",
      "internet marketing Indore",
      "performance marketing Indore",
      "digital marketing solutions Indore",
    ],

    "Integrated Digital Marketing Services in Indore",

    "Digital Marketing"
  ),


  // ==========================================================================
  // SEO SUB-SERVICES
  // ==========================================================================

  "/services/search-engine-optimization-seo/local-seo": serviceSEO(
    "Local SEO Services in Indore | Inchtomilez",

    "Local SEO services for Google Business Profile optimization, local keyword research, business listings and location-page improvements.",

    [
      "local SEO services Indore",
      "Google Maps ranking Indore",
      "Google Business Profile optimization Indore",
      "GMB SEO Indore",
      "local search company Indore",
      "map pack ranking Indore",
    ],

    "Local SEO Services in Indore for Google Maps Visibility",

    "Local SEO"
  ),


  "/services/search-engine-optimization-seo/technical-seo": serviceSEO(
    "Technical SEO Services | Inchtomilez",

    "Technical SEO services covering website crawlability, indexing, structured data, site architecture and Core Web Vitals recommendations.",

    [
      "technical SEO services Indore",
      "technical SEO audit Indore",
      "Core Web Vitals optimization",
      "website indexing SEO",
      "crawlability optimization",
      "schema markup services",
    ],

    "Technical SEO Services for Stronger Search Performance",

    "Technical SEO"
  ),


  // ==========================================================================
  // PPC SUB-SERVICES
  // ==========================================================================

  "/services/ppc-google-ads/google-shopping": serviceSEO(
    "Google Shopping Ads Management | Inchtomilez",

    "Google Shopping campaign services covering product feed optimization, Merchant Center setup, product ads and performance reporting.",

    [
      "Google Shopping Ads Indore",
      "Google Merchant Center Indore",
      "shopping ads agency",
      "product listing ads",
      "ecommerce Google Ads Indore",
    ],

    "Google Shopping Ads Management",

    "Google Shopping Ads"
  ),


  "/services/ppc-google-ads/display-ads": serviceSEO(
    "Google Display Ads Management | Inchtomilez",

    "Google Display Ads services covering visual creatives, audience selection, campaign setup, remarketing and performance reporting.",

    [
      "display advertising Indore",
      "Google Display Ads Indore",
      "remarketing agency Indore",
      "banner advertising Indore",
      "retargeting campaigns",
    ],

    "Display Advertising & Remarketing Services",

    "Display Advertising"
  ),


  // ==========================================================================
  // SOCIAL MEDIA SUB-SERVICES
  // ==========================================================================

  "/services/social-media-marketing/instagram": serviceSEO(
    "Instagram Marketing Agency in Indore | Inchtomilez",

    "Instagram marketing services in Indore for content strategy, reels, creative production, Meta Ads and account growth planning.",

    [
      "Instagram marketing agency Indore",
      "Instagram management Indore",
      "Instagram Ads Indore",
      "reels marketing Indore",
      "Instagram content agency Indore",
    ],

    "Instagram Marketing Services in Indore",

    "Instagram Marketing"
  ),


  "/services/social-media-marketing/facebook": serviceSEO(
    "Facebook Marketing Agency | Inchtomilez",

    "Facebook marketing services covering page strategy, content planning, Meta Ads campaigns, audience targeting and reporting.",

    [
      "Facebook marketing agency Indore",
      "Facebook Ads Indore",
      "Meta Ads agency Indore",
      "Facebook lead generation Indore",
      "Facebook page management Indore",
    ],

    "Facebook Marketing & Meta Ads in Indore",

    "Facebook Marketing"
  ),


  "/services/social-media-marketing/influencer-marketing": serviceSEO(
    "Influencer Marketing Services | Inchtomilez",

    "Influencer marketing services covering creator selection, campaign planning, collaborations, content coordination and measurement.",

    [
      "influencer marketing Indore",
      "social media influencer agency",
      "creator collaborations",
      "Instagram influencer campaign",
      "brand influencer marketing",
    ],

    "Social Media Influencer Marketing",

    "Influencer Marketing"
  ),


  // ==========================================================================
  // CONTENT SUB-SERVICES
  // ==========================================================================

  "/services/content-marketing/copywriting": serviceSEO(
    "Website & Advertising Copywriting | Inchtomilez",

    "Copywriting services for websites, landing pages, ads, email campaigns and brand messaging that clearly communicate your offering.",

    [
      "copywriting services Indore",
      "website copywriting Indore",
      "ad copywriter Indore",
      "sales copywriting",
      "landing page copywriting",
    ],

    "Professional Copywriting Services",

    "Copywriting"
  ),


  "/services/content-marketing/blog-writing": serviceSEO(
    "SEO Blog Writing Services | Inchtomilez",

    "Blog writing services for helpful articles, search-focused editorial planning, brand storytelling and informative website content.",

    [
      "blog writing services Indore",
      "SEO content writing Indore",
      "article writing Indore",
      "SEO blogs",
      "content writer Indore",
    ],

    "SEO Blog Writing & Content Services",

    "Blog Writing"
  ),


  // ==========================================================================
  // WEB DEVELOPMENT SUB-SERVICES
  // ==========================================================================

  "/services/web-design-development/ecommerce": serviceSEO(
    "Ecommerce Website Development | Inchtomilez",

    "Ecommerce website development services covering online stores, product pages, checkout experience and responsive storefront design.",

    [
      "ecommerce website development Indore",
      "Shopify developer Indore",
      "WooCommerce development Indore",
      "online store development Indore",
      "ecommerce web design Indore",
    ],

    "Ecommerce Website Development in Indore",

    "Ecommerce Development"
  ),


  "/services/web-design-development/wordpress": serviceSEO(
    "WordPress Website Development | Inchtomilez",

    "WordPress website development services for responsive business sites, content management, landing pages and on-page SEO foundations.",

    [
      "WordPress development Indore",
      "WordPress developer Indore",
      "WordPress company Indore",
      "WordPress website design Indore",
      "WordPress maintenance Indore",
    ],

    "WordPress Development Services in Indore",

    "WordPress Development"
  ),


  // ==========================================================================
  // INDUSTRIES
  // ==========================================================================

  "/industries/healthcare": serviceSEO(
    "Healthcare Digital Marketing | Inchtomilez",

    "Healthcare digital marketing services including local SEO, patient information websites, paid media and ethical clinic communication.",

    [
      "healthcare digital marketing Indore",
      "hospital marketing agency Indore",
      "doctor marketing Indore",
      "patient lead generation",
      "medical SEO Indore",
    ],

    "Healthcare Digital Marketing for Hospitals, Clinics & Doctors",

    "Healthcare Marketing"
  ),


  "/industries/education": serviceSEO(
    "Education Marketing Services | Inchtomilez",

    "Marketing for schools, institutes and education providers, including search visibility, enquiry campaigns and social media.",

    [
      "education marketing agency Indore",
      "school marketing Indore",
      "college marketing Indore",
      "student lead generation",
      "education SEO",
    ],

    "Digital Marketing for Education & Admissions",

    "Education Marketing"
  ),


  "/industries/real-estate": serviceSEO(
    "Real Estate Digital Marketing in Indore | Inchtomilez",

    "Real estate marketing in Indore covering property campaign creative, Google Ads, Meta Ads, landing pages and lead generation.",

    [
      "real estate marketing agency Indore",
      "property lead generation Indore",
      "real estate Google Ads Indore",
      "real estate Meta Ads",
      "property marketing agency",
    ],

    "Real Estate Marketing & Property Lead Generation",

    "Real Estate Marketing"
  ),


  "/industries/ecommerce": serviceSEO(
    "Ecommerce Digital Marketing Agency | Inchtomilez",

    "Growth marketing for ecommerce businesses with Google Ads, Meta Ads, SEO, marketplace optimization, content and conversion-focused acquisition strategies.",

    [
      "ecommerce digital marketing",
      "ecommerce marketing agency Indore",
      "online store marketing",
      "ecommerce SEO",
      "ecommerce advertising",
    ],

    "Ecommerce Digital Marketing & Sales Growth",

    "Ecommerce Marketing"
  ),


  "/industries/hospitality": serviceSEO(
    "Hospitality Digital Marketing | Inchtomilez",

    "Marketing for hotels and hospitality brands, including local SEO, social media, campaigns and direct booking-focused websites.",

    [
      "hotel marketing Indore",
      "restaurant marketing Indore",
      "hospitality marketing agency",
      "hotel SEO",
      "restaurant social media marketing",
    ],

    "Digital Marketing for Hotels & Hospitality Brands",

    "Hospitality Marketing"
  ),


  "/industries/automotive": serviceSEO(
    "Automotive Digital Marketing Services | Inchtomilez",

    "Marketing for automotive businesses, including local SEO, search ads, social campaigns and dealership enquiry generation.",

    [
      "automotive marketing Indore",
      "car dealership marketing Indore",
      "automobile lead generation",
      "auto SEO",
      "automotive advertising",
    ],

    "Automotive Digital Marketing & Lead Generation",

    "Automotive Marketing"
  ),


  "/industries/fashion": serviceSEO(
    "Fashion Brand Digital Marketing | Inchtomilez",

    "Digital marketing for fashion brands covering social media campaigns, product advertising, influencer collaborations and ecommerce.",

    [
      "fashion marketing agency",
      "fashion social media marketing",
      "apparel marketing",
      "fashion ecommerce marketing",
      "influencer marketing fashion",
    ],

    "Digital Marketing for Fashion & Apparel Brands",

    "Fashion Marketing"
  ),


  "/industries/legal": serviceSEO(
    "Law Firm Digital Marketing Services | Inchtomilez",

    "Digital marketing for legal practices, including informative websites, local search visibility, content and enquiry-focused campaigns.",

    [
      "law firm digital marketing",
      "legal SEO",
      "lawyer marketing",
      "legal Google Ads",
      "law firm lead generation",
    ],

    "Digital Marketing for Law Firms & Legal Services",

    "Legal Marketing"
  ),


  "/industries/manufacturing": serviceSEO(
    "Manufacturing Digital Marketing | Inchtomilez",

    "B2B digital marketing for manufacturers, including product websites, technical content, SEO and industrial lead generation.",

    [
      "manufacturing marketing agency",
      "B2B marketing Indore",
      "industrial SEO",
      "manufacturer lead generation",
      "industrial digital marketing",
    ],

    "Digital Marketing for Manufacturing & B2B Companies",

    "Manufacturing Marketing"
  ),


  "/industries/agriculture": serviceSEO(
    "Digital Marketing for Agriculture | Inchtomilez",

    "Digital marketing for agriculture businesses, including SEO, lead generation, social media content and product-focused campaigns.",

    [
      "agriculture marketing",
      "agribusiness marketing",
      "agritech digital marketing",
      "agriculture advertising",
      "farm equipment marketing",
    ],

    "Digital Marketing for Agriculture & Agribusiness",

    "Agriculture Marketing"
  ),


  "/industries/logistics": serviceSEO(
    "Logistics Digital Marketing Services | Inchtomilez",

    "Marketing for logistics providers covering B2B SEO, service landing pages, content and lead-generation campaign planning.",

    [
      "logistics marketing",
      "transport marketing",
      "freight marketing",
      "logistics SEO",
      "B2B logistics lead generation",
    ],

    "Digital Marketing for Logistics & Supply Chain Companies",

    "Logistics Marketing"
  ),


  "/industries/construction": serviceSEO(
    "Construction Company Marketing | Inchtomilez",

    "Digital marketing for construction businesses covering websites, local search, project portfolios and lead-generation campaigns.",

    [
      "construction marketing agency",
      "contractor marketing",
      "builder marketing Indore",
      "construction SEO",
      "construction lead generation",
    ],

    "Digital Marketing for Construction Companies",

    "Construction Marketing"
  ),


  "/industries/retail": serviceSEO(
    "Retail Digital Marketing Services | Inchtomilez",

    "Digital marketing for retail businesses, including local SEO, seasonal campaigns, shopping ads and social media promotions.",

    [
      "retail marketing agency",
      "store marketing Indore",
      "retail advertising",
      "local retail SEO",
      "retail social media",
    ],

    "Digital Marketing for Retail Brands",

    "Retail Marketing"
  ),


  "/industries/technology": serviceSEO(
    "Technology Company Marketing | Inchtomilez",

    "B2B and technology marketing covering SEO, product communication, lead-generation landing pages and digital advertising.",

    [
      "SaaS marketing agency",
      "technology marketing",
      "IT company marketing",
      "software lead generation",
      "B2B SaaS SEO",
    ],

    "Digital Marketing for Technology & SaaS Companies",

    "Technology Marketing"
  ),


  "/industries/finance": serviceSEO(
    "Financial Services Digital Marketing | Inchtomilez",

    "Marketing for finance businesses covering informative content, SEO, paid campaigns and compliant brand communication.",

    [
      "fintech marketing",
      "financial services marketing",
      "finance SEO",
      "financial advertising",
      "fintech lead generation",
    ],

    "Digital Marketing for Finance & Fintech",

    "Finance Marketing"
  ),


  "/industries/entertainment": serviceSEO(
    "Entertainment & Media Digital Marketing | Inchtomilez",

    "Digital campaigns for entertainment, media, events and production brands focused on audience growth, promotion, social engagement and visibility.",

    [
      "entertainment marketing",
      "media marketing",
      "event promotion",
      "entertainment social media",
      "audience marketing",
    ],

    "Digital Marketing for Entertainment & Media",

    "Entertainment Marketing"
  ),


  "/industries/non-profit": serviceSEO(
    "Nonprofit Digital Marketing Services | Inchtomilez",

    "Digital outreach for nonprofit organizations, including awareness campaigns, donation messaging, social media and websites.",

    [
      "NGO digital marketing",
      "non-profit marketing",
      "charity marketing",
      "fundraising campaigns",
      "social cause marketing",
    ],

    "Digital Marketing for NGOs & Non-Profit Organizations",

    "Non-Profit Marketing"
  ),


  "/industries/sports": serviceSEO(
    "Sports Brand Digital Marketing | Inchtomilez",

    "Digital marketing for sports brands and organizations, including social media, events, audience engagement and paid advertising.",

    [
      "sports marketing",
      "gym marketing Indore",
      "fitness marketing agency",
      "sports social media",
      "fitness lead generation",
    ],

    "Digital Marketing for Sports & Fitness Brands",

    "Sports Marketing"
  ),


  // ==========================================================================
  // COMPANY / TRUST PAGES
  // ==========================================================================

  "/team": organizationSEO(
    "Our Team | Digital Marketing Experts at Inchtomilez",

    "Meet the people behind Inchtomilez across SEO, paid media, social media, web development, branding, creative production and digital strategy.",

    [
      "Inchtomilez team",
      "digital marketing experts Indore",
      "SEO experts Indore",
      "marketing professionals Indore",
    ],

    "Meet the Inchtomilez Team"
  ),


  "/careers": organizationSEO(
    "Digital Marketing Jobs in Indore | Careers at Inchtomilez",

    "Explore career opportunities at Inchtomilez in Indore across SEO, paid advertising, social media, content, design, development and digital marketing.",

    [
      "digital marketing jobs Indore",
      "SEO jobs Indore",
      "social media jobs Indore",
      "Inchtomilez careers",
      "marketing agency jobs Indore",
    ],

    "Build Your Career at Inchtomilez"
  ),


  "/testimonials": organizationSEO(
    "Client Reviews & Testimonials | Inchtomilez",

    "Read client experiences and testimonials about Inchtomilez digital marketing, advertising, SEO, paid campaigns, website and creative services.",

    [
      "Inchtomilez reviews",
      "Inchtomilez testimonials",
      "digital marketing agency reviews Indore",
      "marketing client reviews",
    ],

    "What Our Clients Say"
  ),


  "/case-studies": organizationSEO(
    "Digital Marketing Case Studies | Inchtomilez",

    "Explore Inchtomilez case studies and project approaches across SEO, advertising, social media, branding, websites and industry-specific marketing.",

    [
      "digital marketing case studies",
      "SEO case study Indore",
      "Google Ads results",
      "lead generation case studies",
      "Inchtomilez results",
    ],

    "Digital Marketing Case Studies & Results"
  ),


  "/portfolio": organizationSEO(
    "Digital Marketing & Creative Portfolio | Inchtomilez",

    "Explore selected Inchtomilez work across websites, digital campaigns, branding, advertising, social media and creative production.",

    [
      "Inchtomilez portfolio",
      "digital marketing portfolio",
      "web design portfolio Indore",
      "branding portfolio",
      "advertising portfolio",
    ],

    "Our Work & Portfolio"
  ),


  "/press": organizationSEO(
    "Press & Media | Inchtomilez",

    "News, announcements, media coverage, company updates and industry recognition related to Inchtomilez Digital Marketing And Advertising Agency.",

    [
      "Inchtomilez news",
      "Inchtomilez press",
      "marketing agency news Indore",
      "Inchtomilez media",
    ],

    "Press & Media"
  ),


  "/partners": organizationSEO(
    "Technology & Business Partners | Inchtomilez",

    "Explore technology, platform and business relationships supporting Inchtomilez digital marketing, advertising and technology services.",

    [
      "Inchtomilez partners",
      "marketing technology partners",
      "digital agency partnerships",
      "business partners",
    ],

    "Our Technology & Business Partners"
  ),


  "/awards": organizationSEO(
    "Awards & Recognition | Inchtomilez",

    "Explore awards, achievements and recognition associated with Inchtomilez Digital Marketing And Advertising Agency.",

    [
      "Inchtomilez awards",
      "marketing agency awards Indore",
      "digital marketing recognition",
      "agency achievements",
    ],

    "Awards & Recognition"
  ),


  // ==========================================================================
  // BLOG CATEGORY PAGES
  // BlogDetailPage handles individual article SEO dynamically.
  // ==========================================================================

  "/blogs/seo": websiteSEO(
    "SEO & Local SEO Guides | Inchtomilez",

    "SEO guides covering local SEO, technical SEO, search rankings, Google Business Profile, on-page optimization and organic growth strategies.",

    [
      "SEO guides",
      "local SEO blog",
      "SEO tips",
      "technical SEO guides",
      "Google Business Profile SEO",
    ],

    "SEO & Local SEO Guides"
  ),


  "/blogs/ppc": websiteSEO(
    "Google Ads & PPC Guides | Inchtomilez",

    "Practical Google Ads and PPC guides covering campaign strategy, bidding, targeting, conversion optimization and paid advertising performance.",

    [
      "Google Ads guides",
      "PPC blog",
      "Google Ads tips",
      "paid advertising guides",
      "PPC optimization",
    ],

    "Google Ads & PPC Guides"
  ),


  "/blogs/social-media": websiteSEO(
    "Social Media Marketing Guides | Inchtomilez",

    "Social media marketing guides covering Instagram, Facebook, Meta Ads, content strategy, reels, engagement and campaign growth.",

    [
      "social media marketing blog",
      "Instagram marketing guides",
      "Facebook marketing tips",
      "Meta Ads guides",
      "social media strategy",
    ],

    "Social Media Marketing Guides"
  ),


  "/blogs/content-marketing": websiteSEO(
    "Content Marketing Guides | Inchtomilez",

    "Content marketing guides covering strategy, blog writing, SEO content, copywriting, campaign content and audience engagement.",

    [
      "content marketing blog",
      "content writing guides",
      "copywriting tips",
      "SEO content",
      "blog strategy",
    ],

    "Content Marketing Guides"
  ),


  "/blogs/web-design": websiteSEO(
    "Web Design & Development Guides | Inchtomilez",

    "Guides on web design, development, website performance, UX, ecommerce, WordPress and conversion-focused digital experiences.",

    [
      "web design blog",
      "website development guides",
      "WordPress guides",
      "ecommerce development",
      "website optimization",
    ],

    "Web Design & Development Guides"
  ),


  "/blogs/branding": websiteSEO(
    "Branding & Creative Guides | Inchtomilez",

    "Branding and creative strategy guides covering identity, positioning, visual communication, brand development and campaign creativity.",

    [
      "branding blog",
      "brand strategy",
      "brand identity guides",
      "creative marketing",
      "branding tips",
    ],

    "Branding & Creative Guides"
  ),


  "/blogs/email-marketing": websiteSEO(
    "Email Marketing Guides | Inchtomilez",

    "Email marketing guides covering campaigns, automation, segmentation, newsletters, lead nurturing and retention strategy.",

    [
      "email marketing blog",
      "email automation",
      "email campaign guides",
      "newsletter marketing",
      "lead nurturing",
    ],

    "Email Marketing Guides"
  ),


  "/blogs/video-production": websiteSEO(
    "Video & Media Production Guides | Inchtomilez",

    "Guides covering video production, advertising videos, reels, commercial content, photography and visual media strategy.",

    [
      "video production blog",
      "video marketing guides",
      "reels strategy",
      "commercial video",
      "media production",
    ],

    "Video & Media Production Guides"
  ),


  "/blogs/analytics": websiteSEO(
    "Marketing Analytics & Reporting Guides | Inchtomilez",

    "Digital analytics guides covering measurement, attribution, conversion tracking, GA4, reporting, dashboards and marketing performance.",

    [
      "marketing analytics blog",
      "GA4 guides",
      "conversion tracking",
      "marketing reporting",
      "digital analytics",
    ],

    "Marketing Analytics & Reporting Guides"
  ),


  "/blogs/ecommerce": websiteSEO(
    "Ecommerce Marketing Guides | Inchtomilez",

    "Ecommerce guides covering online advertising, product marketing, SEO, marketplaces, conversion optimization and customer acquisition.",

    [
      "ecommerce marketing blog",
      "online store marketing",
      "ecommerce SEO",
      "ecommerce ads",
      "Shopify marketing",
    ],

    "Ecommerce Marketing Guides"
  ),


  // ==========================================================================
  // RESOURCE PAGES
  // ==========================================================================

  "/resources": websiteSEO(
    "Digital Marketing Resources | Inchtomilez",

    "Explore practical marketing resources covering SEO, paid advertising, social media, websites, branding and digital strategy.",

    [
      "digital marketing resources",
      "SEO resources",
      "marketing guides",
      "advertising resources",
      "marketing templates",
    ],

    "Digital Marketing Resources"
  ),


  "/downloads": websiteSEO(
    "Marketing Downloads, Templates & Guides | Inchtomilez",

    "Download practical digital marketing templates, checklists, guides and resources from Inchtomilez.",

    [
      "marketing templates",
      "digital marketing downloads",
      "SEO checklist",
      "marketing guides",
      "free marketing resources",
    ],

    "Marketing Downloads & Templates"
  ),


  "/ebooks": websiteSEO(
    "Digital Marketing Ebooks & Guides | Inchtomilez",

    "Explore ebooks and long-form guides covering SEO, advertising, social media, content and digital business growth.",

    [
      "digital marketing ebooks",
      "SEO ebook",
      "Google Ads guide",
      "social media ebook",
      "marketing guides",
    ],

    "Digital Marketing Ebooks"
  ),


  "/webinars": websiteSEO(
    "Digital Marketing Webinars | Inchtomilez",

    "Explore digital marketing webinars and sessions covering SEO, Google Ads, social media, websites and growth strategy.",

    [
      "digital marketing webinars",
      "SEO webinar",
      "Google Ads webinar",
      "marketing training",
      "digital marketing sessions",
    ],

    "Digital Marketing Webinars"
  ),


  "/tools": websiteSEO(
    "Digital Marketing Tools | Inchtomilez",

    "Explore useful digital marketing tools and utilities for SEO, advertising, analytics, social media and campaign planning.",

    [
      "digital marketing tools",
      "SEO tools",
      "marketing calculators",
      "advertising tools",
      "marketing utilities",
    ],

    "Digital Marketing Tools"
  ),


  "/glossary": websiteSEO(
    "Digital Marketing Glossary | SEO, PPC & Marketing Terms",

    "Understand common SEO, PPC, advertising, analytics, social media and digital marketing terminology with the Inchtomilez marketing glossary.",

    [
      "digital marketing glossary",
      "SEO terms",
      "PPC terms",
      "marketing definitions",
      "advertising terminology",
    ],

    "Digital Marketing Glossary"
  ),


  "/sitemap-page": websiteSEO(
    "Website Sitemap | Inchtomilez",

    "Browse important pages, services, industries, resources and content available on the Inchtomilez website.",

    [
      "Inchtomilez sitemap",
      "website pages",
      "Inchtomilez services",
    ],

    "Website Sitemap"
  ),


  // ==========================================================================
  // LEGAL PAGES
  // ==========================================================================

  "/privacy-policy": websiteSEO(
    "Privacy Policy | Inchtomilez",

    "Read the Inchtomilez privacy policy explaining how information may be collected, processed, stored and protected when using our website and services.",

    [
      "Inchtomilez privacy policy",
      "privacy policy",
      "data privacy",
    ],

    "Privacy Policy"
  ),


  "/terms-of-service": websiteSEO(
    "Terms of Service | Inchtomilez",

    "Read the terms governing use of the Inchtomilez website and applicable conditions related to our digital marketing and advertising services.",

    [
      "Inchtomilez terms",
      "terms of service",
      "terms and conditions",
    ],

    "Terms of Service"
  ),


  "/cookie-policy": websiteSEO(
    "Cookie Policy | Inchtomilez",

    "Read information about cookies and similar technologies that may be used on the Inchtomilez website.",

    [
      "Inchtomilez cookie policy",
      "cookie policy",
      "website cookies",
    ],

    "Cookie Policy"
  ),


  "/disclaimer": websiteSEO(
    "Disclaimer | Inchtomilez",

    "Read important disclaimers and limitations related to information, content and services provided through the Inchtomilez website.",

    [
      "Inchtomilez disclaimer",
      "website disclaimer",
      "legal disclaimer",
    ],

    "Disclaimer"
  ),


  "/refund-policy": websiteSEO(
    "Refund & Cancellation Policy | Inchtomilez",

    "Read the Inchtomilez refund and cancellation policy and the terms that may apply to eligible services and engagements.",

    [
      "Inchtomilez refund policy",
      "refund policy",
      "cancellation policy",
    ],

    "Refund & Cancellation Policy"
  ),
};


// ============================================================================
// DEVELOPMENT SAFETY CHECK
// ============================================================================

/**
 * Warn during development if an SEO entry is incomplete.
 *
 * This does NOT run as an error in production and therefore will not
 * stop a Vercel deployment.
 */

if (
  import.meta.env.DEV
) {
  Object.entries(
    COMPLETE_SEO_DATA
  ).forEach(
    ([path, data]) => {

      if (
        !data.title?.trim() ||
        !data.description?.trim() ||
        !data.h1?.trim()
      ) {
        console.warn(
          `[SEO] Incomplete metadata for route: ${path}`
        );
      }

      if (
        data.title && data.title.length > 70
      ) {
        console.warn(
          `[SEO] Long title (${data.title.length} chars): ${path}`
        );
      }

      if (
        data.description && data.description.length > 180
      ) {
        console.warn(
          `[SEO] Long description (${data.description.length} chars): ${path}`
        );
      }

      if (!path.startsWith("/") || (path.length > 1 && path.endsWith("/"))) {
        console.warn(`[SEO] Non-normalized route key: ${path}`);
      }

      if (!Array.isArray(data.keywords)) {
        console.warn(`[SEO] Invalid keywords array: ${path}`);
      }

      if (data.ogType && data.ogType !== "website" && data.ogType !== "article") {
        console.warn(`[SEO] Unsupported Open Graph type: ${path} (${data.ogType})`);
      }
    }
  );
}