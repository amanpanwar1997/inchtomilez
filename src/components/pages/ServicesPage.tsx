import { Link } from 'react-router';
import { ArrowRight, Target, TrendingUp, Users, Zap, Star, Search, Globe, ShoppingCart, Megaphone, Palette, Camera, Newspaper, FileText, PenTool, Video, Award, BarChart3, Mail, MessageSquare, CheckCircle, Rocket, Trophy, Shield, Smartphone, MonitorPlay, Brain, Lightbulb, Code, DollarSign, TrendingDown, Play } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BentoGrid2 } from '../layout/BentoGrid2';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { AutoCarousel } from '../ui/AutoCarousel';
import { OutlinedText } from '../ui/OutlinedText';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { SEOHeadSSG } from '../SEOHeadSSG';
import { useSEO, StructuredData, organizationSchema, getWebPageSchema, getBreadcrumbSchema } from '../../utils/seo-system';
import { ROUTES, routeTo } from '../../config/routes';

export function ServicesPage() {
  const seo = useSEO(); // Auto-loads SEO from centralized config
  const breadcrumbs = [
    { name: 'Home', path: ROUTES.home },
    { name: 'Services', path: ROUTES.services },
  ];
  
  const featuredServices = [
    {
      title: 'Digital Marketing',
      tagline: 'SEO, PPC, Social Media & Content Marketing',
      description: 'Comprehensive digital marketing including SEO (3-6 month timeline), Google Ads management, social media strategy, content creation, and email marketing.',
      icon: TrendingUp,
      link: routeTo.service('digital-marketing'),
      projects: 342,
      badge: 'Most Popular',
      stats: '342 Clients Served',
    },
    {
      title: 'Advertising',
      tagline: 'Multi-Channel Campaign Management',
      description: 'Advertising campaigns across Google Ads, Meta, LinkedIn, YouTube, OOH, and print. Testing and optimization based on performance data.',
      icon: Megaphone,
      link: routeTo.service('advertising'),
      projects: 287,
      badge: 'Results-Focused',
      stats: '287 Campaigns Run',
    },
    {
      title: 'Branding',
      tagline: 'Brand Strategy & Identity Design',
      description: 'Complete branding services including strategy, positioning, logo design, visual identity systems, brand guidelines, and voice development.',
      icon: Award,
      link: routeTo.service('branding-identity'),
      projects: 156,
      badge: 'Premium',
      stats: '156 Brands Created',
    },
    {
      title: 'Website & App Development',
      tagline: 'Fast, Responsive Web Solutions',
      description: 'Professional website development, e-commerce platforms, and mobile app creation. Focus on speed optimization and user experience.',
      icon: Globe,
      link: routeTo.service('web-design-development'),
      projects: 365,
      badge: 'Essential',
      stats: '365 Projects Delivered',
    },
    {
      title: 'Software Development',
      tagline: 'Custom Software Solutions',
      description: 'Custom SaaS platforms, enterprise software, CRM systems, API integrations, and automation tools built with modern technology stacks.',
      icon: MonitorPlay,
      link: routeTo.service('software-development'),
      projects: 142,
      badge: 'Technical',
      stats: '142 Products Built',
    },
    {
      title: 'Graphic Design & Creative',
      tagline: 'Professional Visual Content',
      description: 'Graphic design services including social media graphics, marketing materials, packaging design, motion graphics, and animation work.',
      icon: Palette,
      link: routeTo.service('graphic-design'),
      projects: 287,
      badge: 'Creative',
      stats: '12,000+ Designs Created',
    },
    {
      title: 'Media Production',
      tagline: 'Video & Photography Services',
      description: 'Professional video production, commercial photography, drone cinematography, event coverage, and post-production editing.',
      icon: Camera,
      link: routeTo.service('video-media-production'),
      projects: 198,
      badge: 'Professional',
      stats: '198 Projects Completed',
    },
    {
      title: 'Public Relations',
      tagline: 'Strategic PR & Media Relations',
      description: 'PR campaign strategy, media placements, press releases, crisis management, and thought leadership positioning.',
      icon: MessageSquare,
      link: routeTo.service('public-relations'),
      projects: 89,
      badge: 'Strategic',
      stats: '89 Campaigns Managed',
    },
    {
      title: 'Political Campaigns',
      tagline: 'Data-Driven Political Strategy',
      description: 'Electoral campaign strategy, voter analysis, digital advocacy, messaging development, and ground operations coordination.',
      icon: Target,
      link: routeTo.service('political-campaigns'),
      projects: 34,
      badge: 'Specialized',
      stats: '34 Campaigns Run',
    },
    {
      title: 'OOH Advertising',
      tagline: 'Outdoor & Transit Advertising',
      description: 'Strategic outdoor advertising including billboards, transit ads, mall displays, airport branding, and digital OOH placements.',
      icon: Megaphone,
      link: routeTo.service('ooh-advertising'),
      projects: 156,
      badge: 'Traditional',
      stats: '156 Campaigns Placed',
    },
    {
      title: 'Radio & Newspapers',
      tagline: 'Traditional Media Buying',
      description: 'Radio advertising, newspaper placements, magazine features, and traditional media buying with performance tracking.',
      icon: Newspaper,
      link: routeTo.service('radio-newspapers'),
      projects: 178,
      badge: 'Classic Media',
      stats: '178 Campaigns Placed',
    },
    {
      title: 'Product Marketing',
      tagline: 'Go-to-Market Strategy',
      description: 'Product positioning, launch strategy, lifecycle marketing, competitive analysis, and pricing strategy development.',
      icon: Rocket,
      link: routeTo.service('product-marketing'),
      projects: 97,
      badge: 'Growth-Focused',
      stats: '97 Launches Supported',
    },
    {
      title: 'BTL Activations & On-Ground Marketing',
      tagline: 'Experiential Brand Engagement',
      description: 'Direct consumer engagement through product sampling, mall activations, roadshows, events, and experiential campaigns.',
      icon: Users,
      link: routeTo.service('btl-activations'),
      projects: 89,
      badge: '🔥 Core Service',
      stats: '500K+ Consumers Engaged',
    },
    {
      title: 'Creative Concept & Campaign Execution',
      tagline: 'Integrated Campaign Development',
      description: 'End-to-end creative campaigns from strategy to execution across digital, traditional, experiential, and PR channels.',
      icon: Lightbulb,
      link: routeTo.service('creative-campaigns'),
      projects: 120,
      badge: '⭐ Core Service',
      stats: '120+ Campaigns Executed',
    },
  ];

  const allServices = [
    { name: 'Digital Marketing', slug: 'digital-marketing', icon: TrendingUp, clients: '74+ Campaigns', description: 'SEO, PPC, Social, Content, Email' },
    { name: 'Advertising', slug: 'advertising', icon: Megaphone, clients: '13+ International', description: 'Google, Social, OOH, Print, Video' },
    { name: 'Branding', slug: 'branding-identity', icon: Award, clients: '100+ Brands', description: 'Strategy, Logo, Identity, Guidelines' },
    { name: 'Website & App Development', slug: 'web-design-development', icon: Globe, clients: '60+ Websites', description: 'Web, E-commerce, Apps, UI/UX' },
    { name: 'Software Development', slug: 'software-development', icon: MonitorPlay, clients: 'Custom Solutions', description: 'SaaS, Enterprise, CRM, APIs' },
    { name: 'Graphic Design & Creative', slug: 'graphic-design', icon: Palette, clients: 'Creative Studio', description: 'Graphics, Animation, Print, Digital' },
    { name: 'Media Production', slug: 'video-media-production', icon: Camera, clients: 'Full Production', description: 'Video, Photography, Events, Post' },
    { name: 'Public Relations', slug: 'public-relations', icon: MessageSquare, clients: 'PR Excellence', description: 'PR Strategy, Media, Crisis Management' },
    { name: 'Political Campaigns', slug: 'political-campaigns', icon: Target, clients: 'Strategic Campaigns', description: 'Electoral Strategy, Digital Advocacy' },
    { name: 'OOH Advertising', slug: 'ooh-advertising', icon: Megaphone, clients: 'Outdoor Experts', description: 'Billboards, Transit, Digital OOH' },
    { name: 'Radio & Newspapers', slug: 'radio-newspapers', icon: Newspaper, clients: 'Traditional Media', description: 'Radio Spots, Print, Magazines' },
    { name: 'Product Marketing', slug: 'product-marketing', icon: Rocket, clients: 'Product Launch', description: 'GTM, Positioning, Launches' },
    { name: 'BTL Activations', slug: 'btl-activations', icon: Users, clients: '🔥 Core Service', description: 'Sampling, Events, Experiential' },
    { name: 'Creative Campaigns', slug: 'creative-campaigns', icon: Lightbulb, clients: '⭐ Core Service', description: 'Strategy, Creative, Multi-Channel' },
  ];

  const serviceStats = [
    { number: '14', label: 'Specialized Services', growth: 'Comprehensive solutions', icon: Target },
    { number: '96+', label: 'Clients Served', growth: 'Growing businesses', icon: Users },
    { number: '100+', label: 'Brands Managed', growth: 'Successfully delivered', icon: Rocket },
    { number: '4.9★', label: 'Google Rating', growth: '200+ verified reviews', icon: TrendingUp },
  ];

  const successMetrics = [
    { metric: '96+', label: 'Clients Served', description: 'Across all services and industries', icon: Users },
    { metric: '100+', label: 'Brands Managed', description: 'Successfully delivered', icon: Award },
    { metric: '7', label: 'Years Experience', description: 'Serving businesses since 2018', icon: CheckCircle },
    { metric: '60+', label: 'Websites Built', description: 'Successfully delivered', icon: DollarSign },
    { metric: '98%', label: 'Client Retention', description: 'Long-term partnerships', icon: Star },
    { metric: '4.9★', label: 'Google Rating', description: 'From 200+ verified reviews', icon: Trophy },
  ];

  const pricingData = [
    {
      question: 'How much do your services cost?',
      answer: 'Pricing varies based on service and scope. Digital marketing typically starts at ₹35,000/month, website development from ₹65,000, branding from ₹95,000. We provide detailed proposals based on your specific needs. Schedule a free consultation to discuss pricing.',
    },
    {
      question: 'Do you offer package discounts?',
      answer: 'Yes, we offer bundled service packages with discounts. Clients combining multiple services can save 15-25%. We\'ll discuss package options during your consultation based on your needs and budget.',
    },
    {
      question: 'What is included in digital marketing services?',
      answer: 'Our digital marketing includes SEO (on-page and technical optimization), PPC management, social media strategy and management, content creation, email marketing, analytics tracking, monthly reporting, and regular strategy calls.',
    },
    {
      question: 'What are your contract terms?',
      answer: 'Digital marketing services typically require 6-month minimum commitments as SEO takes 3-6 months to show results. Website and branding are project-based. We don\'t use long lock-in contracts - most clients continue because they see value.',
    },
    {
      question: 'How do you ensure transparency?',
      answer: 'We provide monthly detailed reports, dashboard access for tracking, regular calls to review progress, and clear documentation of all work completed. You\'ll always know what we\'re working on and where your budget is allocated.',
    },
  ];

  const serviceDetails = [
    {
      service: 'SEO Services',
      features: ['Technical SEO audit and fixes', 'Keyword research and analysis', 'On-page optimization', 'Content optimization', 'Link building (white-hat methods)', 'Monthly performance reports'],
      timeline: 'Results in 3-6 months',
      clients: 187,
      pricing: 'From ₹35,000/month',
    },
    {
      service: 'Social Media Marketing',
      features: ['Platform strategy development', 'Content creation and scheduling', 'Community management', 'Paid social advertising', 'Performance tracking', 'Monthly reports and insights'],
      timeline: 'Ongoing optimization',
      clients: 203,
      pricing: 'From ₹30,000/month',
    },
    {
      service: 'Google Ads / PPC',
      features: ['Campaign strategy and setup', 'Ad copy and creative development', 'Keyword research and bidding', 'A/B testing and optimization', 'Conversion tracking', 'Regular performance reviews'],
      timeline: 'Results in 1-2 months',
      clients: 189,
      pricing: 'From ₹25,000/month + ad spend',
    },
    {
      service: 'Website Development',
      features: ['Custom responsive design', 'Speed optimization', 'SEO-friendly structure', 'Security setup and SSL', 'CMS integration', '6 months support included'],
      timeline: '4-8 weeks delivery',
      clients: 156,
      pricing: 'From ₹65,000',
    },
    {
      service: 'Branding Services',
      features: ['Brand strategy development', 'Logo design concepts', 'Visual identity system', 'Brand guidelines document', 'Marketing collateral design', 'Launch support'],
      timeline: '6-8 weeks process',
      clients: 142,
      pricing: 'From ₹95,000',
    },
    {
      service: 'Video Production',
      features: ['Concept and script development', 'Professional filming (4K)', 'Drone footage (if needed)', 'Professional editing', 'Motion graphics', 'Multiple format delivery'],
      timeline: '2-4 weeks per video',
      clients: 98,
      pricing: 'From ₹50,000/video',
    },
  ];

  const industries = [
    { name: 'Healthcare', clients: '67+' },
    { name: 'Technology & SaaS', clients: '52+' },
    { name: 'Education & E-Learning', clients: '43+' },
    { name: 'Real Estate', clients: '89+' },
    { name: 'Finance & Banking', clients: '34+' },
    { name: 'Retail & E-commerce', clients: '78+' },
    { name: 'Automotive', clients: '29+' },
    { name: 'Fashion & Apparel', clients: '41+' },
    { name: 'Food & Beverage', clients: '53+' },
    { name: 'Legal Services', clients: '22+' },
    { name: 'Manufacturing', clients: '31+' },
    { name: 'Sports & Fitness', clients: '18+' },
    { name: 'Entertainment', clients: '27+' },
    { name: 'Non-Profit', clients: '19+' },
    { name: 'Hospitality & Travel', clients: '36+' },
    { name: 'Beauty & Wellness', clients: '45+' },
  ];

  const whyChooseUs = [
    {
      icon: Trophy,
      title: 'Proven Experience',
      description: '1,850+ projects delivered across 12 services with 98% client retention rate over 10+ years.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: '50+ in-house specialists including strategists, designers, developers, and marketers.',
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'We set clear goals and work consistently toward achieving them through ongoing optimization.',
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'Monthly reports, dashboard access, regular calls. You always know what we\'re working on.',
    },
    {
      icon: Rocket,
      title: 'Reliable Delivery',
      description: '98% on-time delivery rate. We meet commitments and communicate clearly about timelines.',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'ISO 9001:2015 certified processes. Professional work with multiple quality checks.',
    },
  ];

  const caseStudies = [
    {
      client: 'Healthcare Startup',
      industry: 'Healthcare',
      challenge: 'New clinic needed to build local visibility and patient inquiries.',
      solution: 'Local SEO, Google My Business optimization, and targeted Google Ads over 6 months.',
      result: 'Grew from zero to 150+ monthly inquiries. Became established in local market.',
    },
    {
      client: 'E-commerce Business',
      industry: 'Retail',
      challenge: 'Online store had traffic but low conversion rates.',
      solution: 'Website redesign, improved product pages, and conversion optimization over 3 months.',
      result: 'Conversion rate improved from 1.2% to 3.8%. Revenue increased accordingly.',
    },
    {
      client: 'Real Estate Agency',
      industry: 'Real Estate',
      challenge: 'Traditional agency needed digital presence and lead generation.',
      solution: 'Website development, SEO, and Facebook advertising over 4 months.',
      result: 'Generated 200+ qualified leads. Digital now accounts for 40% of their business.',
    },
  ];

  return (
    <div>
      {/* ⚠️ REMOVED bg-black - Using body background with grid pattern */}
      {/* SEO Meta Tags - Auto-loaded from centralized config */}
      <SEOHeadSSG {...seo.meta} />
      
      <StructuredData 
        data={[
          organizationSchema,
          getWebPageSchema(seo.meta.title, seo.meta.description, ROUTES.services, breadcrumbs),
          getBreadcrumbSchema(breadcrumbs),
        ]} 
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} showHomeIcon={true} />

      










{/* ============================================================
   SECTION 01 — SERVICES PAGE / MAIN HERO
   INCHTOMILEZ — CONNECTED CAPABILITIES

   Layout:
   - Desktop: Editorial split / 55% content + 45% visualization
   - Tablet: Balanced responsive composition
   - Mobile: Content first, compact capability visualization
   - No bento cards in the hero
   - No external image dependency
   - Scoped CSS / original Raleway typography

   Required existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No additional dependencies
============================================================ */}

<section
  id="services-hero"
  aria-labelledby="services-hero-title"
  className="relative isolate w-full overflow-hidden border-b border-white/[0.08]"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  {/* ========================================================
      01.01 — SCOPED STYLES
  ======================================================== */}

  <style>{`
    #services-hero {
      position: relative;
      isolation: isolate;
      width: 100%;
      min-height: 710px;
      display: flex;
      align-items: center;
      padding: clamp(90px, 10vw, 140px) 0 55px;
      color: #fff;
    }

    #services-hero,
    #services-hero *,
    #services-hero *::before,
    #services-hero *::after {
      box-sizing: border-box;
    }

    #services-hero .sh-shell {
      width: 100%;
      max-width: 1240px;
      margin-inline: auto;
      padding-inline: 32px;
      position: relative;
      z-index: 2;
    }

    #services-hero .sh-layout {
      display: grid;
      grid-template-columns:
        minmax(0, 1.12fr) minmax(0, .88fr);
      align-items: center;
      gap: clamp(28px, 4vw, 65px);
      min-width: 0;
    }

    /* ========================================
       LEFT — EDITORIAL CONTENT
    ======================================== */

    #services-hero .sh-content {
      width: 100%;
      max-width: 650px;
      min-width: 0;
      text-align: left;
    }

    #services-hero .sh-eyebrow {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 23px;
      color: #b1b5bd;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .12em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    #services-hero .sh-eyebrow::before {
      content: "";
      flex: 0 0 27px;
      width: 27px;
      height: 1px;
      background: rgba(255,255,255,.55);
    }

    #services-hero .sh-h1 {
      max-width: 660px;
      margin: 0 0 27px;
      font-family: 'Raleway', sans-serif;
      color: #fff !important;
      font-size: clamp(34px, 3.65vw, 51px);
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: -.04em;
      text-align: left;
      overflow-wrap: break-word;
    }

    #services-hero .sh-h1 span {
      display: block;
    }

    #services-hero .sh-h1 span + span {
      margin-top: 5px;
    }

    #services-hero .sh-description {
      max-width: 530px;
      margin: 0;
      color: #bec2ca;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.85;
      text-align: left;
    }

    #services-hero .sh-description strong {
      color: #f0f0f2;
      font-weight: 600;
    }

    /* SMALL VALUE POINTS */

    #services-hero .sh-benefits {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 10px 20px;
      max-width: 560px;
      margin-top: 26px;
    }

    #services-hero .sh-benefit {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #c7cbd2;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      white-space: nowrap;
    }

    #services-hero .sh-benefit::before {
      content: "";
      width: 6px;
      height: 6px;
      flex: 0 0 6px;
      border: 1px solid rgba(255,255,255,.7);
      border-radius: 50%;
    }

    /* BUTTONS — LEFT-ALIGNED */

    #services-hero .sh-actions {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      gap: 11px;
      margin-top: 32px;
      padding: 0;
      text-align: left;
    }

    #services-hero .sh-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      gap: 9px;
      min-height: 43px;
      padding: 11px 17px;
      margin: 0;
      border-radius: 8px;
      font-family: 'Raleway', sans-serif;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      text-decoration: none;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #services-hero .sh-button svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
    }

    #services-hero .sh-button-primary {
      border: 1px solid #eab308;
      color: #050505;
      background: #eab308;
    }

    #services-hero .sh-button-secondary {
      border: 1px solid rgba(255,255,255,.26);
      color: #fff;
      background: rgba(16,17,20,.7);
    }

    /* ========================================
       RIGHT — CONNECTED SERVICE SYSTEM
    ======================================== */

    #services-hero .sh-visual {
      position: relative;
      width: 100%;
      height: 500px;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #services-hero .sh-system {
      position: relative;
      width: min(100%, 470px);
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* CENTRAL ORBIT LINES */

    #services-hero .sh-orbit {
      position: absolute;
      inset: 8%;
      border: 1px solid rgba(255,255,255,.115);
      border-radius: 50%;
      pointer-events: none;
    }

    #services-hero .sh-orbit-middle {
      inset: 21%;
      border-color: rgba(255,255,255,.14);
    }

    #services-hero .sh-orbit-inner {
      inset: 34%;
      border-color: rgba(255,255,255,.16);
    }

    #services-hero .sh-axis {
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.13),
        transparent
      );
      transform: rotate(-32deg);
      pointer-events: none;
    }

    #services-hero .sh-axis-two {
      transform: rotate(55deg);
    }

    /* CENTER BRAND CORE */

    #services-hero .sh-core {
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 50%;
      width: 148px;
      height: 148px;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 9px;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 50%;
      background: #15161a;
      box-shadow:
        0 0 0 14px rgba(255,255,255,.025),
        0 20px 55px rgba(0,0,0,.35);
      text-align: center;
    }

    #services-hero .sh-core-mark {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -.07em;
      color: #fff;
    }

    #services-hero .sh-core-rule {
      width: 35px;
      height: 1px;
      background: rgba(255,255,255,.3);
    }

    #services-hero .sh-core-label {
      max-width: 110px;
      color: #b8bcc5;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .07em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    /* FLOATING CAPABILITY LABELS */

    #services-hero .sh-node {
      position: absolute;
      z-index: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 43px;
      min-width: 118px;
      max-width: 155px;
      padding: 11px 14px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 8px;
      background: #18191d;
      box-shadow: 0 10px 30px rgba(0,0,0,.22);
      color: #e6e7eb;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.4;
      text-align: center;
      white-space: normal;
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #services-hero .sh-node-1 {
      top: 9%;
      left: 50%;
      transform: translateX(-50%);
    }

    #services-hero .sh-node-2 {
      top: 25%;
      right: -1%;
    }

    #services-hero .sh-node-3 {
      bottom: 22%;
      right: -2%;
    }

    #services-hero .sh-node-4 {
      bottom: 7%;
      left: 50%;
      transform: translateX(-50%);
    }

    #services-hero .sh-node-5 {
      bottom: 22%;
      left: -2%;
    }

    #services-hero .sh-node-6 {
      top: 25%;
      left: -2%;
    }

    #services-hero .sh-node-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 7px;
      flex-shrink: 0;
      border-radius: 50%;
      background: #bfc3cc;
    }

    /* RIGHT VISUAL CAPTION */

    #services-hero .sh-visual-caption {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: #838893;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .12em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* ========================================
       LOWER HERO SIGNATURE
    ======================================== */

    #services-hero .sh-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-top: 34px;
      padding-top: 21px;
      border-top: 1px solid rgba(255,255,255,.1);
    }

    #services-hero .sh-bottom span {
      color: #9398a2;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: .08em;
      line-height: 1.6;
    }

    /* BACKGROUND EDITORIAL WORD */

    #services-hero .sh-background-word {
      position: absolute;
      z-index: 0;
      top: 12%;
      right: -4%;
      color: transparent;
      font-size: clamp(110px, 18vw, 260px);
      font-weight: 800;
      letter-spacing: -.075em;
      line-height: 1;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* ========================================
       INTERACTIONS
    ======================================== */

    @media (hover: hover) and (pointer: fine) {
      #services-hero .sh-button-primary:hover {
        background: #facc15;
        border-color: #facc15;
        transform: translateY(-2px);
      }

      #services-hero .sh-button-secondary:hover {
        background: rgba(255,255,255,.055);
        border-color: rgba(255,255,255,.5);
        transform: translateY(-2px);
      }

      #services-hero .sh-node:hover {
        border-color: rgba(255,255,255,.4);
        background: #24262b;
      }
    }

    #services-hero a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* ========================================
       TABLET
    ======================================== */

    @media (min-width: 768px) and (max-width: 1100px) {
      #services-hero {
        min-height: 650px;
      }

      #services-hero .sh-shell {
        padding-inline: 26px;
      }

      #services-hero .sh-layout {
        grid-template-columns:
          minmax(0, 1.1fr) minmax(0, .9fr);
        gap: 24px;
      }

      #services-hero .sh-h1 {
        font-size: clamp(31px, 3.6vw, 41px);
      }

      #services-hero .sh-visual {
        height: 400px;
      }

      #services-hero .sh-system {
        width: 100%;
      }

      #services-hero .sh-node {
        min-width: 90px;
        max-width: 115px;
        min-height: 38px;
        padding: 8px;
        font-size: 10px;
      }

      #services-hero .sh-core {
        width: 125px;
        height: 125px;
      }
    }

    /* ========================================
       MOBILE
    ======================================== */

    @media (max-width: 767px) {
      #services-hero {
        display: block;
        min-height: 0;
        padding: 96px 0 32px;
      }

      #services-hero .sh-shell {
        padding-inline: 20px;
      }

      #services-hero .sh-layout {
        grid-template-columns: 1fr;
        gap: 36px;
      }

      #services-hero .sh-content {
        max-width: 100%;
      }

      #services-hero .sh-eyebrow {
        font-size: 10px;
        margin-bottom: 17px;
      }

      #services-hero .sh-h1 {
        max-width: 100%;
        margin-bottom: 21px;
        font-size: clamp(30px, 7.8vw, 41px);
        line-height: 1.19;
      }

      #services-hero .sh-description {
        max-width: 100%;
        font-size: 13px;
        line-height: 1.85;
      }

      #services-hero .sh-benefits {
        margin-top: 20px;
        gap: 10px 15px;
      }

      #services-hero .sh-benefit {
        font-size: 11px;
      }

      #services-hero .sh-actions {
        margin-top: 25px;
        gap: 9px;
      }

      #services-hero .sh-button {
        padding: 10px 13px;
        min-height: 42px;
        font-size: 12px;
      }

      #services-hero .sh-visual {
        height: auto;
        min-height: 0;
        padding: 0 8px 25px;
      }

      #services-hero .sh-system {
        width: min(100%, 350px);
      }

      #services-hero .sh-core {
        width: 112px;
        height: 112px;
        gap: 6px;
      }

      #services-hero .sh-core-mark {
        font-size: 17px;
      }

      #services-hero .sh-core-label {
        font-size: 8px;
      }

      #services-hero .sh-node {
        min-width: 78px;
        max-width: 98px;
        min-height: 34px;
        padding: 7px 6px;
        font-size: 9px;
      }

      #services-hero .sh-node-dot {
        width: 4px;
        height: 4px;
        margin-right: 4px;
      }

      #services-hero .sh-node-2,
      #services-hero .sh-node-3 {
        right: -1%;
      }

      #services-hero .sh-node-5,
      #services-hero .sh-node-6 {
        left: -1%;
      }

      #services-hero .sh-visual-caption {
        bottom: 0;
        font-size: 9px;
      }

      #services-hero .sh-bottom {
        margin-top: 10px;
        padding-top: 16px;
      }

      #services-hero .sh-bottom span {
        font-size: 9px;
      }

      #services-hero .sh-background-word {
        top: 100px;
        font-size: 105px;
      }
    }

    @media (max-width: 390px) {
      #services-hero .sh-shell {
        padding-inline: 16px;
      }

      #services-hero .sh-h1 {
        font-size: 29px;
      }

      #services-hero .sh-actions {
        display: grid;
        grid-template-columns: 1fr;
      }

      #services-hero .sh-button {
        width: 100%;
      }

      #services-hero .sh-node {
        min-width: 72px;
        max-width: 87px;
        font-size: 8px;
      }

      #services-hero .sh-bottom {
        flex-wrap: wrap;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-hero .sh-button,
      #services-hero .sh-node {
        transition: none;
      }
    }
  `}</style>

  {/* ========================================================
      01.02 — BACKGROUND TYPOGRAPHY
  ======================================================== */}

  <div
    className="sh-background-word"
    aria-hidden="true"
  >
    SERVICES
  </div>

  <div className="sh-shell">

    {/* ======================================================
        01.03 — MAIN EDITORIAL HERO LAYOUT
    ====================================================== */}

    <div className="sh-layout">

      {/* LEFT — CONTENT */}

      <div className="sh-content">

        <p className="sh-eyebrow">
          01 / INCHTOMILEZ SERVICES
        </p>

        <h1
          id="services-hero-title"
          className="sh-h1"
        >
          <span>One Agency.</span>
          <span>
            Every Discipline Your Brand Needs
            to Move Forward.
          </span>
        </h1>

        <p className="sh-description">
          From <strong>digital marketing and SEO</strong> to
          advertising, branding, creative communication
          and website development, InchToMilez brings
          the right expertise together to help businesses
          build a stronger presence, reach relevant
          audiences and create more connected brand
          experiences.
        </p>

        {/* SERVICE VALUE POINTS */}

        <div
          className="sh-benefits"
          aria-label="Our approach"
        >
          <span className="sh-benefit">
            Strategy-Led Thinking
          </span>

          <span className="sh-benefit">
            Integrated Execution
          </span>

          <span className="sh-benefit">
            Business-Focused Decisions
          </span>
        </div>

        {/* COMPACT LEFT-ALIGNED ACTIONS */}

        <div className="sh-actions">

          <a
            href="#services-overview"
            className="sh-button sh-button-primary"
          >
            Explore Our Services
            <ArrowRight aria-hidden="true" />
          </a>

          <Link
            to="/contact"
            className="sh-button sh-button-secondary"
          >
            Let's Discuss Your Project
            <ArrowRight aria-hidden="true" />
          </Link>

        </div>

      </div>

      {/* RIGHT — CONNECTED SERVICES VISUALIZATION */}

      <div
        className="sh-visual"
        aria-label="Six connected InchToMilez service disciplines"
      >
        <div className="sh-system">

          {/* CONCENTRIC CONNECTION RINGS */}

          <div className="sh-orbit" aria-hidden="true" />
          <div
            className="sh-orbit sh-orbit-middle"
            aria-hidden="true"
          />
          <div
            className="sh-orbit sh-orbit-inner"
            aria-hidden="true"
          />

          <div className="sh-axis" aria-hidden="true" />
          <div
            className="sh-axis sh-axis-two"
            aria-hidden="true"
          />

          {/* CENTRAL BRAND CORE */}

          <div className="sh-core">
            <span className="sh-core-mark">
              INCH
            </span>

            <span className="sh-core-rule" />

            <span className="sh-core-label">
              ONE CONNECTED AGENCY
            </span>
          </div>

          {/* SIX DISCIPLINES */}

          {[
            {
              name: "Brand Strategy",
              position: "sh-node-1",
            },
            {
              name: "Digital Marketing",
              position: "sh-node-2",
            },
            {
              name: "SEO & Search",
              position: "sh-node-3",
            },
            {
              name: "Web Development",
              position: "sh-node-4",
            },
            {
              name: "Creative & Design",
              position: "sh-node-5",
            },
            {
              name: "Advertising",
              position: "sh-node-6",
            },
          ].map((service) => (
            <div
              key={service.name}
              className={`sh-node ${service.position}`}
            >
              <span
                className="sh-node-dot"
                aria-hidden="true"
              />
              {service.name}
            </div>
          ))}

        </div>

        <span className="sh-visual-caption">
          DIFFERENT EXPERTISE / ONE DIRECTION
        </span>
      </div>

    </div>

    {/* ======================================================
        01.04 — BOTTOM SIGNATURE
    ====================================================== */}

    <div className="sh-bottom">
      <span>
        DIGITAL MARKETING · ADVERTISING · CREATIVE · TECHNOLOGY
      </span>

      <span>
        INCHTOMILEZ / INDORE, INDIA
      </span>
    </div>

  </div>

  {/* ========================================================
      01.05 — SECTION BOUNDARY
  ======================================================== */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 01 ================= */}













{/* ============================================================
   SECTION 02 — COMPLETE SERVICES ECOSYSTEM
   INCHTOMILEZ / SERVICES PAGE

   Source:
   - 18 primary services in supplied sitemap.xml
   - 13 specialist routes from website route inventory

   Design:
   - Editorial full-width service directory
   - 5 distinct capability groups
   - Numbered horizontal service rows
   - Separate specialist-service index
   - Responsive desktop / tablet / mobile
   - No new dependencies

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"
============================================================ */}

<section
  id="services-overview"
  aria-labelledby="services-overview-title"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  {/* 02.01 — SERVICE CONTENT / VERIFIED ROUTE DATA */}

  {(() => {
    const serviceGroups = [
      {
        number: "01",
        eyebrow: "DIGITAL & PERFORMANCE",
        heading: "Be Found. Reach People. Create Demand.",
        description:
          "Digital channels should support your business objectives together, not operate as disconnected activities. We combine digital strategy, organic search, paid advertising, social media and e-commerce marketing around the customer journey.",
        services: [
          {
            name: "Digital Marketing",
            url: "/services/digital-marketing",
            description:
              "Integrated digital marketing strategy, channel planning and online campaigns that connect your brand with relevant audiences."
          },
          {
            name: "Search Engine Optimization",
            url: "/services/search-engine-optimization-seo",
            description:
              "Technical SEO, on-page optimization, organic content and local search improvements to strengthen your website's discoverability."
          },
          {
            name: "Google Ads & PPC",
            url: "/services/ppc-google-ads",
            description:
              "Search advertising, campaign management, audience targeting and conversion measurement built around your advertising objectives."
          },
          {
            name: "Social Media Marketing",
            url: "/services/social-media-marketing",
            description:
              "Social media strategy, platform-specific communication and content campaigns that support brand awareness and engagement."
          },
          {
            name: "E-Commerce Marketing",
            url: "/services/ecommerce-marketing",
            description:
              "Digital campaigns, product discovery and customer journey improvements for businesses selling products online."
          }
        ]
      },
      {
        number: "02",
        eyebrow: "BRANDING & CREATIVE",
        heading: "Make Your Brand Recognisable.",
        description:
          "A stronger brand needs more than an attractive logo. It needs a clear position, consistent communication and creative ideas that audiences can recognise across channels and experiences.",
        services: [
          {
            name: "Branding & Identity",
            url: "/services/branding-identity",
            description:
              "Brand positioning, visual identity, communication direction and design systems that build a consistent business identity."
          },
          {
            name: "Creative Campaigns",
            url: "/services/creative-campaigns",
            description:
              "Campaign concepts, creative messaging and integrated ideas for product launches, promotions and brand communication."
          },
          {
            name: "Graphic Design",
            url: "/services/graphic-design",
            description:
              "Creative design for marketing materials, advertising campaigns, social media, presentations and brand communication."
          },
          {
            name: "Product Marketing",
            url: "/services/product-marketing",
            description:
              "Product positioning, launch communication and promotional strategies that explain why an offering matters to its audience."
          }
        ]
      },
      {
        number: "03",
        eyebrow: "ADVERTISING & ACTIVATIONS",
        heading: "Take the Message Beyond the Screen.",
        description:
          "Customers encounter brands through physical environments, outdoor media, local experiences and traditional advertising. We consider how those channels can complement a larger brand strategy.",
        services: [
          {
            name: "Advertising",
            url: "/services/advertising",
            description:
              "Advertising strategy, campaign planning and communication across appropriate digital and traditional media."
          },
          {
            name: "BTL Activations",
            url: "/services/btl-activations",
            description:
              "Experiential promotions, local activations and consumer engagement activities designed around real-world brand interactions."
          },
          {
            name: "Outdoor & OOH Advertising",
            url: "/services/ooh-advertising",
            description:
              "Out-of-home advertising, location-based visibility and outdoor campaign planning for relevant audiences."
          },
          {
            name: "Political Campaigns",
            url: "/services/political-campaigns",
            description:
              "Campaign communication, outreach materials and coordinated media execution for political and public-information initiatives."
          },
          {
            name: "Radio & Newspaper Advertising",
            url: "/services/radio-newspapers",
            description:
              "Print and radio advertising planning, message development and local or regional media communication."
          }
        ]
      },
      {
        number: "04",
        eyebrow: "WEB & TECHNOLOGY",
        heading: "Build Better Digital Experiences.",
        description:
          "Your website and digital systems are part of how customers experience your brand. They should communicate clearly, perform reliably and make the next action easier.",
        services: [
          {
            name: "Website Design & Development",
            url: "/services/web-design-development",
            description:
              "Responsive business websites, landing pages, UI/UX and website development with usability and search accessibility in mind."
          },
          {
            name: "Software Development",
            url: "/services/software-development",
            description:
              "Business-focused software, digital interfaces and custom web application development shaped around practical requirements."
          }
        ]
      },
      {
        number: "05",
        eyebrow: "MEDIA & COMMUNICATION",
        heading: "Tell Stories That Reach Further.",
        description:
          "Brand communication extends beyond everyday advertising. Production and public relations help businesses explain ideas, share developments and communicate through different formats.",
        services: [
          {
            name: "Video & Media Production",
            url: "/services/video-media-production",
            description:
              "Video content, campaign films, promotional media and creative production for digital and brand communication."
          },
          {
            name: "Public Relations",
            url: "/services/public-relations",
            description:
              "Public relations communication, announcement planning and messaging to support an organisation's public presence."
          }
        ]
      }
    ];

    const specialistGroups = [
      {
        title: "SEO & Search",
        links: [
          {
            label: "Local SEO",
            to: "/services/search-engine-optimization-seo/local-seo"
          },
          {
            label: "Technical SEO",
            to: "/services/search-engine-optimization-seo/technical-seo"
          }
        ]
      },
      {
        title: "Google Ads",
        links: [
          {
            label: "Display Advertising",
            to: "/services/ppc-google-ads/display-ads"
          },
          {
            label: "Google Shopping Ads",
            to: "/services/ppc-google-ads/google-shopping"
          }
        ]
      },
      {
        title: "Social & Influencer",
        links: [
          {
            label: "Facebook Marketing",
            to: "/services/social-media-marketing/facebook"
          },
          {
            label: "Instagram Marketing",
            to: "/services/social-media-marketing/instagram"
          },
          {
            label: "Influencer Marketing",
            to: "/services/social-media-marketing/influencer-marketing"
          }
        ]
      },
      {
        title: "Content & Communication",
        links: [
          {
            label: "Content Marketing",
            to: "/services/content-marketing"
          },
          {
            label: "Blog Writing",
            to: "/services/content-marketing/blog-writing"
          },
          {
            label: "Copywriting",
            to: "/services/content-marketing/copywriting"
          },
          {
            label: "Email Marketing",
            to: "/services/email-marketing"
          }
        ]
      },
      {
        title: "Web Development",
        links: [
          {
            label: "WordPress Development",
            to: "/services/web-design-development/wordpress"
          },
          {
            label: "E-Commerce Development",
            to: "/services/web-design-development/ecommerce"
          }
        ]
      }
    ];

    return (
      <>
        {/* 02.02 — COMPONENT SCOPED STYLES */}

        <style>{`
          #services-overview,
          #services-overview * {
            box-sizing: border-box;
          }

          #services-overview .s2-shell {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            width: 100%;
            padding: 0 24px;
            margin: 0 auto;
          }

          /* SECTION HEADER */

          #services-overview .s2-header {
            display: grid;
            grid-template-columns: minmax(0,1.1fr) minmax(0,.9fr);
            gap: 42px;
            align-items: end;
            margin-bottom: 45px;
          }

          #services-overview .s2-eyebrow {
            color: #afb4be;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: .11em;
            text-transform: uppercase;
            margin: 0 0 18px;
          }

          #services-overview .s2-heading {
            max-width: 710px;
            margin: 0;
            color: #fff !important;
            font-size: clamp(29px,3.2vw,43px);
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -.035em;
            text-wrap: balance;
          }

          #services-overview .s2-header-copy {
            color: #b9bdc5;
            font-size: 14px;
            line-height: 1.9;
            max-width: 425px;
            margin: 0;
          }

          /* GROUPED SERVICE DIRECTORY */

          #services-overview .s2-group {
            display: grid;
            grid-template-columns: minmax(0,.38fr) minmax(0,.62fr);
            gap: clamp(22px,4vw,54px);
            align-items: start;
            border-top: 1px solid rgba(255,255,255,.16);
            padding: 37px 0 45px;
          }

          #services-overview .s2-group-intro {
            min-width: 0;
          }

          #services-overview .s2-group-number {
            display: block;
            color: #9297a2;
            font-size: 11px;
            font-weight: 600;
            margin-bottom: 18px;
            letter-spacing: .11em;
          }

          #services-overview .s2-group-eyebrow {
            display: block;
            color: #aeb3bd;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: .09em;
            text-transform: uppercase;
            margin-bottom: 13px;
          }

          #services-overview .s2-group-title {
            max-width: 390px;
            margin: 0 0 17px;
            color: #fff !important;
            font-size: clamp(23px,2.2vw,31px);
            font-weight: 600;
            letter-spacing: -.025em;
            line-height: 1.25;
            text-wrap: balance;
          }

          #services-overview .s2-group-description {
            max-width: 400px;
            margin: 0;
            color: #adb3bd;
            font-size: 13px;
            line-height: 1.9;
          }

          /* SERVICE ROWS */

          #services-overview .s2-services {
            display: grid;
            grid-template-columns: minmax(0,1fr);
            gap: 0;
            min-width: 0;
          }

          #services-overview .s2-service {
            display: grid;
            grid-template-columns: minmax(0,1fr) 35px;
            align-items: center;
            gap: 16px;
            min-width: 0;
            padding: 19px 0;
            border-bottom: 1px solid rgba(255,255,255,.13);
            text-decoration: none;
            transition: padding .25s ease;
          }

          #services-overview .s2-service:first-child {
            padding-top: 5px;
          }

          #services-overview .s2-service h3 {
            margin: 0 0 8px;
            color: #fff !important;
            font-size: 18px;
            line-height: 1.4;
            font-weight: 600;
            letter-spacing: -.02em;
          }

          #services-overview .s2-service p {
            margin: 0;
            color: #aeb4bd;
            font-size: 12px;
            line-height: 1.8;
            max-width: 550px;
          }

          #services-overview .s2-service-arrow {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.18);
            background: rgba(255,255,255,.025);
            color: #d5d7db;
            transition:
              background-color .25s ease,
              transform .25s ease;
          }

          #services-overview .s2-service-arrow svg {
            width: 16px;
            height: 16px;
            transform: rotate(-45deg);
          }

          /* SPECIALIST DIRECTORY */

          #services-overview .s2-specialists {
            margin-top: 20px;
            padding: clamp(24px,3vw,37px);
            border: 1px solid rgba(255,255,255,.15);
            border-radius: 12px;
            background:
              linear-gradient(
                130deg,
                rgba(26,27,31,.94),
                rgba(10,11,14,.95)
              );
          }

          #services-overview .s2-specialists-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 30px;
            margin-bottom: 30px;
          }

          #services-overview .s2-specialists-header h3 {
            color: #fff !important;
            font-size: clamp(22px,2.3vw,30px);
            font-weight: 600;
            line-height: 1.3;
            margin: 0 0 10px;
          }

          #services-overview .s2-specialists-header p {
            max-width: 660px;
            margin: 0;
            color: #b5bac3;
            font-size: 13px;
            line-height: 1.8;
          }

          #services-overview .s2-specialists-count {
            white-space: nowrap;
            color: #8f949e;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: .09em;
          }

          #services-overview .s2-specialist-grid {
            display: grid;
            grid-template-columns: repeat(3,minmax(0,1fr));
            gap: 25px 28px;
          }

          #services-overview .s2-specialist-group {
            min-width: 0;
          }

          #services-overview .s2-specialist-group h4 {
            margin: 0 0 13px;
            color: #fff !important;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
          }

          #services-overview .s2-specialist-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 10px 0;
            color: #b9bec7;
            font-size: 12px;
            line-height: 1.6;
            text-decoration: none;
            border-bottom: 1px solid rgba(255,255,255,.1);
          }

          #services-overview .s2-specialist-link svg {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
            transform: rotate(-45deg);
          }

          /* CLOSING CTA */

          #services-overview .s2-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
            margin-top: 16px;
            padding: 27px 30px;
            border: 1px solid rgba(255,255,255,.15);
            border-radius: 11px;
            background: rgba(12,13,16,.91);
          }

          #services-overview .s2-footer h3 {
            margin: 0 0 8px;
            color: #fff !important;
            font-size: 19px;
            font-weight: 600;
            line-height: 1.4;
          }

          #services-overview .s2-footer p {
            max-width: 680px;
            margin: 0;
            color: #b3b9c2;
            font-size: 13px;
            line-height: 1.8;
          }

          #services-overview .s2-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            min-height: 42px;
            padding: 10px 17px;
            border-radius: 8px;
            border: 1px solid #eab308;
            background: #eab308;
            color: #050505;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            white-space: nowrap;
            flex-shrink: 0;
            transition: background-color .2s ease;
          }

          #services-overview .s2-button svg {
            width: 15px;
            height: 15px;
          }

          /* INTERACTIONS */

          @media (hover:hover) and (pointer:fine) {
            #services-overview .s2-service:hover {
              padding-left: 8px;
            }

            #services-overview .s2-service:hover .s2-service-arrow {
              background: rgba(255,255,255,.095);
              transform: translate(2px,-2px);
            }

            #services-overview .s2-specialist-link:hover {
              color: #fff;
            }

            #services-overview .s2-button:hover {
              background: #facc15;
            }
          }

          #services-overview a:focus-visible {
            outline: 2px solid #eab308;
            outline-offset: 4px;
          }

          /* TABLET */

          @media (max-width: 900px) {
            #services-overview .s2-header {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            #services-overview .s2-header-copy {
              max-width: 700px;
            }

            #services-overview .s2-group {
              grid-template-columns: minmax(0,.4fr) minmax(0,.6fr);
              gap: 24px;
            }

            #services-overview .s2-specialist-grid {
              grid-template-columns: repeat(2,minmax(0,1fr));
            }
          }

          /* MOBILE */

          @media (max-width: 640px) {
            #services-overview .s2-shell {
              padding-inline: 18px;
            }

            #services-overview .s2-heading {
              font-size: clamp(27px,7vw,34px);
            }

            #services-overview .s2-header-copy {
              font-size: 13px;
            }

            #services-overview .s2-header {
              margin-bottom: 28px;
            }

            #services-overview .s2-group {
              grid-template-columns: 1fr;
              gap: 24px;
              padding: 31px 0 38px;
            }

            #services-overview .s2-group-title {
              font-size: 25px;
            }

            #services-overview .s2-group-description {
              font-size: 12px;
            }

            #services-overview .s2-service {
              grid-template-columns: minmax(0,1fr) 30px;
              gap: 12px;
              padding: 17px 0;
            }

            #services-overview .s2-service h3 {
              font-size: 16px;
            }

            #services-overview .s2-service p {
              font-size: 12px;
            }

            #services-overview .s2-service-arrow {
              width: 30px;
              height: 30px;
            }

            #services-overview .s2-specialists {
              padding: 22px;
            }

            #services-overview .s2-specialists-header {
              flex-direction: column;
              gap: 10px;
            }

            #services-overview .s2-specialist-grid {
              grid-template-columns: 1fr;
              gap: 23px;
            }

            #services-overview .s2-footer {
              flex-direction: column;
              align-items: flex-start;
              padding: 23px;
            }

            #services-overview .s2-button {
              width: 100%;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #services-overview .s2-service,
            #services-overview .s2-service-arrow,
            #services-overview .s2-button {
              transition: none;
            }
          }
        `}</style>

        <div className="s2-shell">

          {/* 02.03 — MAIN SECTION INTRODUCTION */}

          <header className="s2-header">
            <div>
              <p className="s2-eyebrow">
                02 / COMPLETE SERVICE DIRECTORY
              </p>

              <h2
                id="services-overview-title"
                className="s2-heading"
              >
                Everything Your Brand Needs.
                Organised Around What You Want to Achieve.
              </h2>
            </div>

            <p className="s2-header-copy">
              InchToMilez brings together digital marketing,
              search engine optimization, Google Ads,
              branding, creative campaigns, web development
              and traditional advertising.

              Explore our capabilities by discipline,
              from core marketing services to specialised
              execution.
            </p>
          </header>

          {/* 02.04 — ALL 18 SITEMAP-LISTED PRIMARY SERVICES */}

          <div className="s2-directory">

            {serviceGroups.map((group) => (
              <div
                className="s2-group"
                key={group.number}
              >

                {/* LEFT — CATEGORY INTRODUCTION */}

                <div className="s2-group-intro">

                  <span className="s2-group-number">
                    {group.number} / 05
                  </span>

                  <span className="s2-group-eyebrow">
                    {group.eyebrow}
                  </span>

                  <h3 className="s2-group-title">
                    {group.heading}
                  </h3>

                  <p className="s2-group-description">
                    {group.description}
                  </p>

                </div>

                {/* RIGHT — INDIVIDUAL SERVICE LINKS */}

                <div className="s2-services">

                  {group.services.map((service) => (
                    <Link
                      to={service.url}
                      className="s2-service"
                      key={service.url}
                      aria-label={`Explore ${service.name}`}
                    >
                      <div>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>

                      <span
                        className="s2-service-arrow"
                        aria-hidden="true"
                      >
                        <ArrowRight />
                      </span>
                    </Link>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* 02.05 — ADDITIONAL SPECIALIST SERVICE ROUTES */}

          <div className="s2-specialists">

            <div className="s2-specialists-header">
              <div>
                <h3>
                  Explore Our Specialist Services.
                </h3>

                <p>
                  Need something more specific? Browse
                  focused service pages covering local
                  search, paid media, content, social
                  media and website technologies.
                </p>
              </div>

              <span className="s2-specialists-count">
                13 SPECIALIST PAGES
              </span>
            </div>

            <nav
              className="s2-specialist-grid"
              aria-label="Specialist service pages"
            >
              {specialistGroups.map((group) => (
                <div
                  className="s2-specialist-group"
                  key={group.title}
                >
                  <h4>{group.title}</h4>

                  {group.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="s2-specialist-link"
                    >
                      <span>{link.label}</span>

                      <ArrowRight aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

          </div>

          {/* 02.06 — CONVERSION PANEL */}

          <div className="s2-footer">
            <div>
              <h3>
                Not Sure Where Your Business Should Start?
              </h3>

              <p>
                You don't have to choose a marketing service
                before speaking with us. Tell us about your
                business, the challenges you're facing and
                what you'd like to achieve.
              </p>
            </div>

            <Link
              to="/contact"
              className="s2-button"
            >
              Discuss Your Project
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

        </div>
      </>
    );
  })()}

</section>

{/* ================= END SECTION 02 ================= */}



{/* ==========================================================
  SECTION 04 — SEARCH ENGINE OPTIMIZATION
  Design: Search Architecture + Local SEO Feature
  Existing imports: Link, ArrowRight
  No new dependencies
========================================================== */}

<section
  id="services-seo"
  aria-labelledby="sseo-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-seo, #services-seo * { box-sizing: border-box; }

    #services-seo .sseo-shell {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 0 24px;
    }

    #services-seo .sseo-heading-area {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,.7fr);
      align-items: end;
      gap: 38px;
      margin-bottom: 33px;
    }

    #services-seo .sseo-kicker {
      margin: 0 0 16px;
      color: #aeb4bf;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-seo .sseo-h2 {
      max-width: 770px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(29px,3.2vw,43px);
      font-weight: 600;
      line-height: 1.19;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #services-seo .sseo-lead {
      max-width: 410px;
      margin: 0;
      color: #b8bec8;
      font-size: 14px;
      line-height: 1.85;
    }

    /* FEATURED SEARCH-ARCHITECTURE PANEL */

    #services-seo .sseo-platform {
      padding: clamp(20px,3vw,34px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 13px;
      background:
        linear-gradient(135deg,
          rgba(27,28,32,.95),
          rgba(9,10,13,.96));
    }

    #services-seo .sseo-platform-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-bottom: 20px;
      margin-bottom: 23px;
      border-bottom: 1px solid rgba(255,255,255,.14);
    }

    #services-seo .sseo-platform-head span {
      color: #b4bac4;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .08em;
    }

    #services-seo .sseo-platform-head small {
      color: #8e949e;
      font-size: 10px;
      letter-spacing: .09em;
    }

    /* LAYERED SEARCH VISUAL — NOT A REAL SERP */

    #services-seo .sseo-query {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 17px 20px;
      margin-bottom: 16px;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 10px;
      background: rgba(8,9,11,.8);
    }

    #services-seo .sseo-query-symbol {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255,255,255,.7);
      border-radius: 50%;
      flex-shrink: 0;
      position: relative;
    }

    #services-seo .sseo-query-symbol::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 2px;
      right: -6px;
      bottom: -3px;
      background: rgba(255,255,255,.7);
      transform: rotate(45deg);
    }

    #services-seo .sseo-query span:last-child {
      color: #e1e4e9;
      font-size: 13px;
      font-weight: 500;
    }

    #services-seo .sseo-layers {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 12px;
    }

    #services-seo .sseo-layer {
      min-width: 0;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 10px;
      background: rgba(11,12,15,.86);
      transition: border-color .2s ease;
    }

    #services-seo .sseo-layer-index {
      display: block;
      margin-bottom: 30px;
      color: #9da4ae;
      font-size: 11px;
      font-weight: 600;
    }

    #services-seo .sseo-layer h3 {
      margin: 0 0 12px;
      color: #fff !important;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.35;
    }

    #services-seo .sseo-layer p {
      margin: 0;
      color: #adb4be;
      font-size: 12px;
      line-height: 1.85;
    }

    #services-seo .sseo-layer-items {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 18px;
    }

    #services-seo .sseo-layer-items span {
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 5px;
      padding: 6px 9px;
      color: #bbc1ca;
      font-size: 10px;
      line-height: 1.5;
    }

    /* LOCAL SEO EDITORIAL FEATURE */

    #services-seo .sseo-local {
      display: grid;
      grid-template-columns: minmax(0,.85fr) minmax(0,1fr);
      gap: 32px;
      margin-top: 14px;
      padding: clamp(24px,3.2vw,38px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: rgba(13,14,17,.92);
    }

    #services-seo .sseo-local-label {
      display: block;
      color: #aeb5bf;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      margin-bottom: 15px;
    }

    #services-seo .sseo-local h3 {
      margin: 0 0 16px;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      line-height: 1.28;
      font-weight: 600;
      letter-spacing: -.025em;
    }

    #services-seo .sseo-local p {
      margin: 0 0 14px;
      color: #b4bbc5;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-seo .sseo-local-points {
      display: grid;
      grid-template-columns: 1fr;
      gap: 11px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    #services-seo .sseo-local-points li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding-bottom: 11px;
      border-bottom: 1px solid rgba(255,255,255,.1);
      color: #d4d7dc;
      font-size: 12px;
      line-height: 1.75;
    }

    #services-seo .sseo-local-points li::before {
      content: "";
      width: 6px;
      height: 6px;
      margin-top: 8px;
      flex: 0 0 6px;
      border: 1px solid rgba(255,255,255,.7);
      border-radius: 50%;
    }

    /* CTA + SERVICE LINKS */

    #services-seo .sseo-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 22px;
      padding: 25px 0 0;
    }

    #services-seo .sseo-related {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px 22px;
    }

    #services-seo .sseo-related a {
      color: #ced2da;
      font-size: 12px;
      line-height: 1.6;
      text-decoration: underline;
      text-decoration-color: rgba(255,255,255,.25);
      text-underline-offset: 5px;
    }

    #services-seo .sseo-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border-radius: 8px;
      background: #eab308;
      color: #080808;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background .2s ease;
    }

    #services-seo .sseo-action svg {
      width: 15px;
      height: 15px;
    }

    @media (hover:hover) and (pointer:fine) {
      #services-seo .sseo-layer:hover {
        border-color: rgba(255,255,255,.34);
      }
      #services-seo .sseo-action:hover {
        background: #facc15;
      }
      #services-seo .sseo-related a:hover {
        color: #fff;
      }
    }
    #services-seo a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }
    @media (max-width: 850px) {
      #services-seo .sseo-heading-area {
        grid-template-columns: 1fr;
        gap: 18px;
      }
      #services-seo .sseo-lead {
        max-width: 720px;
      }
    }
    @media (max-width: 640px) {
      #services-seo .sseo-shell {
        padding-inline: 18px;
      }
      #services-seo .sseo-h2 {
        font-size: clamp(27px,7vw,34px);
      }
      #services-seo .sseo-platform {
        padding: 16px;
      }
      #services-seo .sseo-layers,
      #services-seo .sseo-local {
        grid-template-columns: 1fr;
      }
      #services-seo .sseo-layer {
        padding: 20px;
      }
      #services-seo .sseo-layer-index {
        margin-bottom: 20px;
      }
      #services-seo .sseo-local {
        padding: 21px;
        gap: 16px;
      }
      #services-seo .sseo-footer {
        align-items: flex-start;
      }
      #services-seo .sseo-action {
        width: 100%;
      }
    }
  `}</style>

  <div className="sseo-shell">

    {/* 04.01 — INTRODUCTION */}
    <header className="sseo-heading-area">
      <div>
        <p className="sseo-kicker">
          04 / SEARCH ENGINE OPTIMIZATION
        </p>

        <h2 id="sseo-heading" className="sseo-h2">
          Your Customers Are Searching.
          Make Your Business Easier to Find.
        </h2>
      </div>

      <p className="sseo-lead">
        Organic visibility is built through accessible
        websites, relevant content, clear page structure
        and a useful experience for people searching
        for products or services. Our SEO services
        connect these elements into a coordinated plan.
      </p>
    </header>

    {/* 04.02 — SEARCH ARCHITECTURE */}
    <div className="sseo-platform">

      <div className="sseo-platform-head">
        <span>THE SEARCH VISIBILITY FRAMEWORK</span>
        <small>FOUR CONNECTED FOUNDATIONS</small>
      </div>

      <div className="sseo-query">
        <span
          className="sseo-query-symbol"
          aria-hidden="true"
        />
        <span>
          How can customers discover your business?
        </span>
      </div>

      <div className="sseo-layers">
        {[
          {
            n: "01 / FOUNDATION",
            title: "Technical SEO",
            copy:
              "Search engines need to access, crawl and interpret your website. We review indexing, URL structures, canonical signals, internal links, page performance and other technical foundations.",
            details: [
              "Crawlability",
              "Indexing",
              "Site Structure",
              "Core Web Vitals"
            ]
          },
          {
            n: "02 / RELEVANCE",
            title: "On-Page SEO",
            copy:
              "Each important page should communicate a clear purpose. We develop keyword-to-page mapping, descriptive headings, useful content, titles and internal linking around relevant search intent.",
            details: [
              "Page Titles",
              "H1–H3 Structure",
              "Search Intent",
              "Internal Links"
            ]
          },
          {
            n: "03 / DISCOVERY",
            title: "Local SEO",
            copy:
              "Local customers often search by service and city. We focus on accurate business information, location relevance, Google Business Profile improvements and helpful location-specific pages.",
            details: [
              "Google Maps",
              "Business Profile",
              "Local Pages",
              "NAP Consistency"
            ]
          },
          {
            n: "04 / USEFULNESS",
            title: "Content & Authority",
            copy:
              "Helpful content makes it easier for visitors to evaluate a service or answer a question. We develop topic coverage, supporting pages and content that demonstrates genuine relevance.",
            details: [
              "Content Planning",
              "FAQs",
              "Topic Coverage",
              "Relevant References"
            ]
          }
        ].map((layer) => (
          <article
            className="sseo-layer"
            key={layer.n}
          >
            <span className="sseo-layer-index">
              {layer.n}
            </span>

            <h3>{layer.title}</h3>
            <p>{layer.copy}</p>

            <div className="sseo-layer-items">
              {layer.details.map((detail) => (
                <span key={detail}>
                  {detail}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* 04.03 — LOCAL SEO DEPTH */}
    <div className="sseo-local">

      <div>
        <span className="sseo-local-label">
          LOCAL SEARCH / INDORE
        </span>

        <h3>
          Be Relevant When Someone Searches
          for Services in Their City.
        </h3>

        <p>
          For a business serving Indore, local SEO
          can help communicate where it operates,
          which services it provides and how
          potential customers can contact it.
        </p>

        <p>
          Local search visibility depends on many
          factors, including relevance, distance,
          prominence and the quality of information.
          No agency can guarantee a particular
          Google ranking.
        </p>
      </div>

      <div>
        <ul className="sseo-local-points">
          <li>
            Service-and-location keyword research,
            with relevant landing page mapping
          </li>
          <li>
            Google Business Profile information,
            categories and service descriptions
          </li>
          <li>
            Accurate business details and consistent
            contact information across web properties
          </li>
          <li>
            Useful local content, location pages
            and relevant internal links
          </li>
          <li>
            Review practices that respect platform
            policies and genuine customer feedback
          </li>
          <li>
            Search Console and analytics reporting
            to understand search visibility trends
          </li>
        </ul>
      </div>
    </div>

    {/* 04.04 — SPECIALIST LINKS + CTA */}
    <div className="sseo-footer">
      <nav
        className="sseo-related"
        aria-label="Explore specialist SEO services"
      >
        <Link to="/services/search-engine-optimization-seo">
          SEO Services
        </Link>
        <Link to="/services/search-engine-optimization-seo/local-seo">
          Local SEO
        </Link>
        <Link to="/services/search-engine-optimization-seo/technical-seo">
          Technical SEO
        </Link>
      </nav>

      <Link
        to="/services/search-engine-optimization-seo"
        className="sseo-action"
      >
        Explore SEO Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 04 ================= */}


{/* ==========================================================
  SECTION 05 — GOOGLE ADS & PERFORMANCE MARKETING
  Design: Campaign Operations Desk + Horizontal Timeline
  Existing imports: Link, ArrowRight
  No new dependencies
========================================================== */}

<section
  id="services-paid-media"
  aria-labelledby="spm-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-paid-media,
    #services-paid-media * {
      box-sizing: border-box;
    }

    #services-paid-media .spm-shell {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      width: 100%;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* EDITORIAL HEADER */

    #services-paid-media .spm-header {
      display: grid;
      grid-template-columns: minmax(0,1.1fr) minmax(0,.9fr);
      align-items: end;
      gap: 40px;
      margin-bottom: 33px;
    }

    #services-paid-media .spm-kicker {
      margin: 0 0 16px;
      color: #aeb3bd;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-paid-media .spm-h2 {
      margin: 0;
      max-width: 750px;
      color: #fff !important;
      font-size: clamp(29px,3.2vw,43px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.19;
      text-wrap: balance;
    }

    #services-paid-media .spm-intro {
      max-width: 430px;
      margin: 0;
      color: #b8bec7;
      font-size: 14px;
      line-height: 1.85;
    }

    /* CAMPAIGN OPERATIONS DESK */

    #services-paid-media .spm-desk {
      padding: clamp(20px,3vw,34px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 13px;
      background:
        linear-gradient(
          125deg,
          rgba(28,29,33,.96),
          rgba(10,11,14,.97)
        );
    }

    #services-paid-media .spm-desk-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      padding-bottom: 20px;
      margin-bottom: 22px;
      border-bottom: 1px solid rgba(255,255,255,.13);
    }

    #services-paid-media .spm-desk-label {
      color: #dfe1e6;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .04em;
    }

    #services-paid-media .spm-desk-meta {
      color: #9198a2;
      font-size: 10px;
      letter-spacing: .08em;
    }

    /* CAMPAIGN OBJECTIVE STRIP */

    #services-paid-media .spm-objective {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      gap: 24px;
      align-items: center;
      padding: 24px;
      margin-bottom: 14px;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 10px;
      background: rgba(7,8,10,.7);
    }

    #services-paid-media .spm-objective small {
      display: block;
      margin-bottom: 9px;
      color: #9ba2ac;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-paid-media .spm-objective h3 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 23px;
      font-weight: 600;
      line-height: 1.3;
    }

    #services-paid-media .spm-objective p {
      max-width: 700px;
      margin: 0;
      color: #aeb5bf;
      font-size: 13px;
      line-height: 1.8;
    }

    #services-paid-media .spm-objective-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 54px;
      height: 54px;
      border: 1px solid rgba(255,255,255,.25);
      border-radius: 50%;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }

    /* CHANNEL ROWS — DIFFERENT FROM BENTO */

    #services-paid-media .spm-channels {
      display: grid;
      grid-template-columns: repeat(4,minmax(0,1fr));
      gap: 10px;
    }

    #services-paid-media .spm-channel {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 245px;
      padding: 22px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 9px;
      background: rgba(10,11,14,.84);
      transition: border-color .2s ease;
    }

    #services-paid-media .spm-channel-num {
      display: block;
      margin-bottom: 32px;
      color: #9ea4ae;
      font-size: 11px;
      font-weight: 600;
    }

    #services-paid-media .spm-channel h3 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.35;
    }

    #services-paid-media .spm-channel p {
      margin: 0;
      color: #adb4be;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-paid-media .spm-channel-role {
      display: block;
      margin-top: auto;
      padding-top: 17px;
      color: #cdd1d8;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .06em;
      line-height: 1.5;
    }

    /* HORIZONTAL CAMPAIGN LIFECYCLE */

    #services-paid-media .spm-flow-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      margin: 36px 0 18px;
    }

    #services-paid-media .spm-flow-head h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(21px,2.3vw,29px);
      font-weight: 600;
      line-height: 1.35;
    }

    #services-paid-media .spm-flow-head span {
      color: #9299a3;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
    }

    #services-paid-media .spm-flow {
      display: grid;
      grid-template-columns: repeat(5,minmax(0,1fr));
      gap: 0;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      overflow: hidden;
      background: rgba(12,13,16,.92);
    }

    #services-paid-media .spm-step {
      min-width: 0;
      padding: 24px 19px;
      border-right: 1px solid rgba(255,255,255,.12);
    }

    #services-paid-media .spm-step:last-child {
      border-right: none;
    }

    #services-paid-media .spm-step-num {
      display: block;
      margin-bottom: 31px;
      color: #a0a6b0;
      font-size: 11px;
      font-weight: 600;
    }

    #services-paid-media .spm-step h4 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.45;
    }

    #services-paid-media .spm-step p {
      margin: 0;
      color: #acb3bd;
      font-size: 11px;
      line-height: 1.8;
    }

    /* FINAL RECOMMENDATION + CTA */

    #services-paid-media .spm-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      gap: 24px;
      align-items: center;
      margin-top: 16px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(22,23,27,.9);
    }

    #services-paid-media .spm-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-paid-media .spm-footer p {
      max-width: 700px;
      margin: 0;
      color: #b1b7c0;
      font-size: 13px;
      line-height: 1.8;
    }

    #services-paid-media .spm-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border-radius: 8px;
      background: #eab308;
      color: #070707;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background .2s ease;
    }

    #services-paid-media .spm-action svg {
      width: 15px;
      height: 15px;
    }

    #services-paid-media .spm-specialist-links {
      display: flex;
      gap: 12px 22px;
      flex-wrap: wrap;
      margin-top: 23px;
    }

    #services-paid-media .spm-specialist-links a {
      color: #c8cdd5;
      font-size: 12px;
      line-height: 1.7;
      text-decoration: underline;
      text-decoration-color: rgba(255,255,255,.25);
      text-underline-offset: 5px;
    }

    @media (hover:hover) and (pointer:fine) {
      #services-paid-media .spm-channel:hover {
        border-color: rgba(255,255,255,.34);
      }
      #services-paid-media .spm-action:hover {
        background: #facc15;
      }
      #services-paid-media .spm-specialist-links a:hover {
        color: #fff;
      }
    }

    #services-paid-media a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    @media (max-width: 1000px) {
      #services-paid-media .spm-channels {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
      #services-paid-media .spm-channel {
        min-height: 215px;
      }
      #services-paid-media .spm-flow {
        grid-template-columns: repeat(3,minmax(0,1fr));
      }
      #services-paid-media .spm-step {
        border-bottom: 1px solid rgba(255,255,255,.12);
      }
    }

    @media (max-width: 720px) {
      #services-paid-media .spm-header {
        grid-template-columns: 1fr;
        gap: 18px;
      }
    }

    @media (max-width: 640px) {
      #services-paid-media .spm-shell {
        padding-inline: 18px;
      }
      #services-paid-media .spm-h2 {
        font-size: clamp(27px,7vw,34px);
      }
      #services-paid-media .spm-intro {
        font-size: 13px;
      }
      #services-paid-media .spm-desk {
        padding: 16px;
      }
      #services-paid-media .spm-desk-head {
        align-items: flex-start;
      }
      #services-paid-media .spm-objective {
        grid-template-columns: 1fr;
        padding: 20px;
      }
      #services-paid-media .spm-objective-indicator {
        display: none;
      }
      #services-paid-media .spm-channels {
        grid-template-columns: 1fr;
      }
      #services-paid-media .spm-channel {
        min-height: 0;
        padding: 20px;
      }
      #services-paid-media .spm-channel-num {
        margin-bottom: 18px;
      }
      #services-paid-media .spm-channel-role {
        margin-top: 17px;
      }
      #services-paid-media .spm-flow {
        grid-template-columns: 1fr;
      }
      #services-paid-media .spm-step {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,.12);
        padding: 20px;
      }
      #services-paid-media .spm-step:last-child {
        border-bottom: none;
      }
      #services-paid-media .spm-step-num {
        margin-bottom: 15px;
      }
      #services-paid-media .spm-footer {
        grid-template-columns: 1fr;
        padding: 22px;
      }
      #services-paid-media .spm-action {
        width: 100%;
      }
    }
  `}</style>

  <div className="spm-shell">

    {/* 05.01 — SECTION INTRODUCTION */}
    <header className="spm-header">
      <div>
        <p className="spm-kicker">
          05 / PERFORMANCE MARKETING & ADVERTISING
        </p>

        <h2 id="spm-heading" className="spm-h2">
          Every Click Has a Cost.
          Make Every Decision Count.
        </h2>
      </div>

      <p className="spm-intro">
        Running ads is only one part of performance
        marketing. Strong campaign planning connects
        the right audience, message, channel, budget
        and landing experience — then uses measurement
        to understand what happens next.
      </p>
    </header>

    {/* 05.02 — CAMPAIGN OPERATIONS DESK */}
    <div className="spm-desk">
      <div className="spm-desk-head">
        <span className="spm-desk-label">
          PAID MEDIA CAPABILITY FRAMEWORK
        </span>
        <span className="spm-desk-meta">
          STRATEGY / EXECUTION / MEASUREMENT
        </span>
      </div>

      <div className="spm-objective">
        <div>
          <small>START WITH THE BUSINESS OBJECTIVE</small>

          <h3>
            Reach the Right People.
            Give Them a Reason to Act.
          </h3>

          <p>
            The objective may be relevant website visits,
            product purchases, enquiries or brand awareness.
            The advertising approach should follow that
            objective, rather than forcing every business
            into the same campaign format.
          </p>
        </div>

        <div
          className="spm-objective-indicator"
          aria-hidden="true"
        >
          ↗
        </div>
      </div>

      {/* FOUR PAID MEDIA CHANNELS */}
      <div className="spm-channels">
        {[
          {
            n: "01 / HIGH INTENT",
            title: "Google Search Ads",
            description:
              "Reach people actively searching for relevant products, services or solutions. Align keywords, ad copy and landing pages with search intent.",
            role: "SEARCH INTENT & ENQUIRIES"
          },
          {
            n: "02 / DISCOVERY",
            title: "Display Advertising",
            description:
              "Use visual advertising placements to introduce offers, build familiarity and reconnect with eligible audiences where appropriate.",
            role: "VISIBILITY & REMARKETING"
          },
          {
            n: "03 / COMMERCE",
            title: "Google Shopping Ads",
            description:
              "Present eligible products through shopping-focused campaigns, with attention to feed information, merchant setup and product relevance.",
            role: "PRODUCT DISCOVERY"
          },
          {
            n: "04 / SOCIAL",
            title: "Paid Social Campaigns",
            description:
              "Develop Meta and other paid social campaigns using relevant audiences, creative concepts and destination experiences.",
            role: "AUDIENCE REACH & ACTION"
          }
        ].map((channel) => (
          <article className="spm-channel" key={channel.n}>
            <span className="spm-channel-num">
              {channel.n}
            </span>
            <h3>{channel.title}</h3>
            <p>{channel.description}</p>
            <span className="spm-channel-role">
              {channel.role}
            </span>
          </article>
        ))}
      </div>
    </div>

    {/* 05.03 — HORIZONTAL CAMPAIGN LIFECYCLE */}
    <div className="spm-flow-head">
      <h3>
        From Campaign Planning to Continuous Learning.
      </h3>
      <span>THE PAID MEDIA WORKFLOW</span>
    </div>

    <div className="spm-flow">
      {[
        {
          number: "01",
          name: "Define",
          copy:
            "Agree on the campaign objective, target audience, budget and meaningful actions to measure."
        },
        {
          number: "02",
          name: "Plan",
          copy:
            "Select campaign formats, targeting approach, messaging and landing page requirements."
        },
        {
          number: "03",
          name: "Create",
          copy:
            "Develop suitable advertisements, creative variants and a consistent post-click experience."
        },
        {
          number: "04",
          name: "Launch",
          copy:
            "Configure campaigns, review tracking and quality checks, then begin delivery."
        },
        {
          number: "05",
          name: "Improve",
          copy:
            "Study performance, search terms, audience response and conversion quality to guide changes."
        }
      ].map((step) => (
        <article className="spm-step" key={step.number}>
          <span className="spm-step-num">
            {step.number} / 05
          </span>

          <h4>{step.name}</h4>
          <p>{step.copy}</p>
        </article>
      ))}
    </div>

    {/* 05.04 — CLOSING CONVERSION PANEL */}
    <div className="spm-footer">
      <div>
        <h3>
          Better Advertising Decisions Start
          With Better Questions.
        </h3>
        <p>
          Planning your first campaign or reviewing
          existing advertising? We can discuss
          your business objectives, current channels,
          campaign structure and measurement needs.
        </p>
      </div>

      <Link
        to="/services/ppc-google-ads"
        className="spm-action"
      >
        Explore Google Ads Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

    {/* 05.05 — VERIFIED SERVICE ROUTE LINKS */}
    <nav
      className="spm-specialist-links"
      aria-label="Specialist paid advertising services"
    >
      <Link to="/services/ppc-google-ads">
        Google Ads & PPC
      </Link>
      <Link to="/services/ppc-google-ads/display-ads">
        Display Advertising
      </Link>
      <Link to="/services/ppc-google-ads/google-shopping">
        Google Shopping
      </Link>
      <Link to="/services/social-media-marketing">
        Social Media Marketing
      </Link>
    </nav>
  </div>
</section>

{/* ================= END SECTION 05 ================= */}




{/* SECTION 01 — MAIN SERVICES HERO */}
{/* Existing hero */}

{/* SECTION 02 — COMPLETE SERVICES DIRECTORY */}
{/* Existing directory */}

{/* SECTION 03 — DIGITAL MARKETING STRATEGY */}
{/* Paste Section 03 here */}

{/* SECTION 04 — SEO & ORGANIC SEARCH */}
{/* Paste Section 04 here */}

{/* SECTION 05 — GOOGLE ADS & PERFORMANCE MARKETING */}
{/* Paste Section 05 here */}

{/* SECTION 06 — FOLLOWING SERVICE SECTION */}











{/* ============================================================
   SECTION 06 — BRANDING & CREATIVE SERVICES
   INCHTOMILEZ / SERVICES PAGE

   06.01 Creative Editorial Introduction
   06.02 Brand Identity Showcase
   06.03 Creative Capabilities Index
   06.04 Brand Development Philosophy
   06.05 Conversion CTA

   UI/UX: Creative Studio / Editorial Showcase
   Theme: Black Grid / Raleway / White & Grey
   Accent: Yellow Buttons Only
   Dependencies: Existing Link and ArrowRight
============================================================ */}

<section
  id="services-branding"
  aria-labelledby="sbc-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-branding,
    #services-branding * {
      box-sizing: border-box;
    }

    #services-branding .sbc-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding: 0 24px;
      margin: 0 auto;
    }

    /* ==========================================
       06.01 EDITORIAL INTRODUCTION
    ========================================== */

    #services-branding .sbc-header {
      display: grid;
      grid-template-columns:
        minmax(0, 1.15fr) minmax(0, .85fr);
      gap: 40px;
      align-items: end;
      margin-bottom: 42px;
    }

    #services-branding .sbc-eyebrow {
      display: block;
      margin-bottom: 19px;
      color: #aeb4be;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    #services-branding .sbc-heading {
      max-width: 750px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(30px, 3.3vw, 45px);
      font-weight: 600;
      line-height: 1.18;
      letter-spacing: -.038em;
      text-wrap: balance;
    }

    #services-branding .sbc-header-copy {
      max-width: 440px;
      margin: 0;
      color: #b9bec7;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ==========================================
       06.02 CREATIVE STUDIO SHOWCASE
    ========================================== */

    #services-branding .sbc-showcase {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(0, .65fr);
      gap: 13px;
      min-width: 0;
    }

    #services-branding .sbc-main-visual {
      position: relative;
      min-width: 0;
      min-height: 490px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      padding: clamp(26px, 3.2vw, 42px);
      border: 1px solid rgba(255,255,255,.19);
      border-radius: 13px;
      background:
        radial-gradient(
          ellipse at 85% 15%,
          rgba(255,255,255,.075),
          transparent 55%
        ),
        linear-gradient(
          140deg,
          #25262b,
          #101115 65%,
          #08090b
        );
    }

    #services-branding .sbc-visual-top {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    #services-branding .sbc-visual-top span {
      color: #bec3cb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    /* LARGE CREATIVE TYPOGRAPHY */

    #services-branding .sbc-artwork {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      z-index: 1;
      padding: 46px 0;
    }

    #services-branding .sbc-artword {
      display: block;
      max-width: 100%;
      margin: 0;
      color: #fff !important;
      font-size: clamp(54px, 7.3vw, 105px);
      font-weight: 800;
      line-height: .94;
      letter-spacing: -.085em;
      overflow-wrap: break-word;
    }

    #services-branding .sbc-artword-outline {
      color: transparent !important;
      -webkit-text-stroke: 1px rgba(255,255,255,.65);
    }

    #services-branding .sbc-artwork-note {
      display: block;
      margin-top: 26px;
      color: #adb3bd;
      font-size: 12px;
      line-height: 1.7;
      letter-spacing: .02em;
    }

    #services-branding .sbc-visual-bottom {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 20px;
      padding-top: 19px;
      border-top: 1px solid rgba(255,255,255,.15);
    }

    #services-branding .sbc-visual-bottom p {
      max-width: 440px;
      margin: 0;
      color: #ced2d8;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-branding .sbc-visual-index {
      color: #9ea4ae;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
    }

    /* RIGHT STACK */

    #services-branding .sbc-side {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      gap: 13px;
      min-width: 0;
    }

    #services-branding .sbc-side-panel {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
      min-width: 0;
      padding: clamp(22px,2.7vw,31px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: rgba(13,14,17,.95);
    }

    #services-branding .sbc-panel-label {
      color: #aab0b9;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-branding .sbc-side-panel h3 {
      margin: 0 0 12px;
      color: #fff !important;
      font-size: clamp(20px,2.1vw,27px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.025em;
    }

    #services-branding .sbc-side-panel p {
      margin: 0;
      color: #afb6c0;
      font-size: 12px;
      line-height: 1.85;
    }

    /* ==========================================
       06.03 CREATIVE CAPABILITIES INDEX
    ========================================== */

    #services-branding .sbc-capability-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin: 42px 0 17px;
    }

    #services-branding .sbc-capability-header h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(22px,2.4vw,30px);
      font-weight: 600;
      line-height: 1.35;
      letter-spacing: -.025em;
    }

    #services-branding .sbc-capability-header span {
      color: #9299a3;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      white-space: nowrap;
    }

    #services-branding .sbc-capabilities {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 12px;
    }

    #services-branding .sbc-capability {
      min-width: 0;
      min-height: 245px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 28px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 10px;
      background: rgba(12,13,16,.92);
      text-decoration: none;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #services-branding .sbc-capability-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    #services-branding .sbc-capability-top span {
      color: #9da4ae;
      font-size: 11px;
      font-weight: 600;
    }

    #services-branding .sbc-capability-top svg {
      width: 17px;
      height: 17px;
      color: #cbd0d7;
      transform: rotate(-45deg);
    }

    #services-branding .sbc-capability h4 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-branding .sbc-capability p {
      margin: 0;
      color: #afb6c0;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ==========================================
       06.04 PHILOSOPHY BANNER
    ========================================== */

    #services-branding .sbc-philosophy {
      display: grid;
      grid-template-columns: minmax(0,.7fr) minmax(0,1fr);
      align-items: center;
      gap: 35px;
      margin-top: 14px;
      padding: clamp(25px,3vw,38px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: rgba(22,23,27,.94);
    }

    #services-branding .sbc-philosophy-label {
      display: block;
      margin-bottom: 13px;
      color: #a4abb6;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-branding .sbc-philosophy h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(22px,2.4vw,31px);
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.3;
    }

    #services-branding .sbc-philosophy p {
      margin: 0;
      color: #b9bec7;
      font-size: 13px;
      line-height: 1.9;
    }

    /* ==========================================
       06.05 CONVERSION CTA
    ========================================== */

    #services-branding .sbc-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      margin-top: 15px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 11px;
      background: rgba(12,13,16,.93);
    }

    #services-branding .sbc-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-branding .sbc-footer p {
      max-width: 680px;
      margin: 0;
      color: #b2b8c1;
      font-size: 13px;
      line-height: 1.8;
    }

    #services-branding .sbc-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
      transition: background-color .2s ease;
    }

    #services-branding .sbc-button svg {
      width: 15px;
      height: 15px;
    }

    /* HOVER */

    @media (hover:hover) and (pointer:fine) {
      #services-branding .sbc-capability:hover {
        transform: translateY(-3px);
        border-color: rgba(255,255,255,.38);
        background: rgba(25,26,30,.97);
      }

      #services-branding .sbc-button:hover {
        background: #facc15;
      }
    }

    #services-branding a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #services-branding .sbc-header {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      #services-branding .sbc-header-copy {
        max-width: 700px;
      }

      #services-branding .sbc-showcase {
        grid-template-columns: minmax(0,1fr);
      }

      #services-branding .sbc-main-visual {
        min-height: 390px;
      }

      #services-branding .sbc-artword {
        font-size: clamp(58px,10vw,105px);
      }

      #services-branding .sbc-side {
        grid-template-columns: repeat(2,minmax(0,1fr));
        grid-template-rows: auto;
      }

      #services-branding .sbc-capabilities {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #services-branding .sbc-shell {
        padding-inline: 18px;
      }

      #services-branding .sbc-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-branding .sbc-header-copy {
        font-size: 13px;
      }

      #services-branding .sbc-main-visual {
        min-height: 360px;
        padding: 23px;
      }

      #services-branding .sbc-artwork {
        padding: 38px 0;
      }

      #services-branding .sbc-artword {
        font-size: clamp(48px,12vw,75px);
      }

      #services-branding .sbc-side {
        grid-template-columns: 1fr;
      }

      #services-branding .sbc-side-panel {
        min-height: 190px;
        padding: 23px;
      }

      #services-branding .sbc-capabilities {
        grid-template-columns: 1fr;
      }

      #services-branding .sbc-capability {
        min-height: 200px;
        padding: 23px;
      }

      #services-branding .sbc-capability-header {
        align-items: flex-start;
      }

      #services-branding .sbc-philosophy {
        grid-template-columns: 1fr;
        gap: 17px;
        padding: 23px;
      }

      #services-branding .sbc-footer {
        flex-direction: column;
        align-items: flex-start;
        padding: 23px;
      }

      #services-branding .sbc-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #services-branding .sbc-capability,
      #services-branding .sbc-button {
        transition: none;
      }

      #services-branding .sbc-capability:hover {
        transform: none;
      }
    }
  `}</style>

  <div className="sbc-shell">

    {/* 06.01 — EDITORIAL INTRODUCTION */}

    <header className="sbc-header">
      <div>
        <span className="sbc-eyebrow">
          06 / BRANDING & CREATIVE SERVICES
        </span>

        <h2 id="sbc-heading" className="sbc-heading">
          A Brand Shouldn't Just Look Different.
          It Should Mean Something.
        </h2>
      </div>

      <p className="sbc-header-copy">
        Great brands create recognition, communicate
        a clear personality and give people a reason
        to remember them. At InchToMilez, our branding
        and creative services bring positioning,
        visual identity, design and campaigns together
        to build a more consistent brand experience.
      </p>
    </header>

    {/* 06.02 — LARGE CREATIVE SHOWCASE */}

    <div className="sbc-showcase">

      {/* MAIN TYPOGRAPHIC ARTWORK */}

      <div className="sbc-main-visual">
        <div className="sbc-visual-top">
          <span>THE CREATIVE SIDE OF INCHTOMILEZ</span>
          <span>STUDIO / 01</span>
        </div>

        <div className="sbc-artwork">
          <span className="sbc-artword">
            THINK.
          </span>

          <span className="sbc-artword sbc-artword-outline">
            CREATE.
          </span>

          <span className="sbc-artword">
            CONNECT.
          </span>

          <span className="sbc-artwork-note">
            Strategy shapes the idea.
            Creativity makes it recognisable.
          </span>
        </div>

        <div className="sbc-visual-bottom">
          <p>
            Good creative work isn't only about
            attracting attention. It should explain
            the brand, support the message and feel
            relevant to the people seeing it.
          </p>

          <span className="sbc-visual-index">
            01 / 03
          </span>
        </div>
      </div>

      {/* SIDE PRINCIPLE PANELS */}

      <div className="sbc-side">

        <article className="sbc-side-panel">
          <span className="sbc-panel-label">
            BRAND FOUNDATIONS
          </span>

          <div>
            <h3>
              Know What You Stand For.
            </h3>

            <p>
              Effective branding begins with
              understanding the business, its
              customers, market position and
              the value it wants to communicate.
              Those decisions guide the brand's
              personality, voice and identity.
            </p>
          </div>
        </article>

        <article className="sbc-side-panel">
          <span className="sbc-panel-label">
            CREATIVE EXPRESSION
          </span>

          <div>
            <h3>
              Make Every Impression Count.
            </h3>

            <p>
              From identity systems and social
              creative to campaign visuals and
              advertising materials, every
              touchpoint should feel connected
              to the same brand story.
            </p>
          </div>
        </article>

      </div>
    </div>

    {/* 06.03 — CREATIVE SERVICE CAPABILITIES */}

    <div className="sbc-capability-header">
      <h3>
        Explore Our Branding & Creative Expertise.
      </h3>

      <span>06 CREATIVE DISCIPLINES</span>
    </div>

    <div className="sbc-capabilities">
      {[
        {
          n: "01",
          title: "Brand Strategy & Identity",
          text:
            "Brand research, positioning, identity direction, brand guidelines and consistent visual communication.",
          to: "/services/branding-identity"
        },
        {
          n: "02",
          title: "Creative Campaigns",
          text:
            "Campaign ideas, messaging frameworks, integrated advertising concepts and creative execution across channels.",
          to: "/services/creative-campaigns"
        },
        {
          n: "03",
          title: "Graphic Design",
          text:
            "Visual communication for campaigns, print materials, advertising graphics and social media content.",
          to: "/services/graphic-design"
        },
        {
          n: "04",
          title: "Product Marketing",
          text:
            "Product positioning, launch communication, promotional concepts and audience-focused marketing materials.",
          to: "/services/product-marketing"
        },
        {
          n: "05",
          title: "Video & Media Production",
          text:
            "Promotional videos, digital media, campaign storytelling and visual formats for brand communication.",
          to: "/services/video-media-production"
        },
        {
          n: "06",
          title: "Content Marketing",
          text:
            "Content planning, brand messaging, copywriting and useful communication for digital audiences.",
          to: "/services/content-marketing"
        }
      ].map((service) => (
        <Link
          key={service.n}
          to={service.to}
          className="sbc-capability"
        >
          <div className="sbc-capability-top">
            <span>{service.n} / 06</span>
            <ArrowRight aria-hidden="true" />
          </div>

          <div>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </div>
        </Link>
      ))}
    </div>

    {/* 06.04 — PHILOSOPHY */}

    <div className="sbc-philosophy">
      <div>
        <span className="sbc-philosophy-label">
          OUR CREATIVE APPROACH
        </span>

        <h3>
          Design With Purpose.
          Create With Context.
        </h3>
      </div>

      <p>
        Different businesses need different creative
        approaches. An established business may need
        greater consistency across its identity, while
        a new brand may need its positioning, voice
        and visual direction developed from the ground up.
        <br />
        <br />
        We believe the starting point should always be
        the audience and the message — not simply
        following the latest visual trend. That's
        how creative work becomes more relevant,
        recognisable and useful.
      </p>
    </div>

    {/* 06.05 — CONVERSION CTA */}

    <div className="sbc-footer">
      <div>
        <h3>
          Ready to Build a More Distinctive Brand?
        </h3>

        <p>
          Whether you're starting something new,
          refreshing your identity or planning a
          creative campaign, let's discuss the
          story you want your brand to communicate.
        </p>
      </div>

      <Link
        to="/services/branding-identity"
        className="sbc-button"
      >
        Explore Branding Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 06 ================= */}



{/* ============================================================
   SECTION 07 — SOCIAL MEDIA, CONTENT & INFLUENCERS
   INCHTOMILEZ / SERVICES PAGE

   07.01 Editorial Introduction
   07.02 Horizontal Content Production Storyboard
   07.03 Social Platform & Content Channels
   07.04 Influencer + Content Marketing Editorial Feature
   07.05 Specialist Service Links & CTA

   Design: Creative Storyboard / Editorial Split
   Existing imports: Link, ArrowRight
   No new dependencies or additional H1
============================================================ */}

<section
  id="services-social-content"
  aria-labelledby="ssc-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-social-content,
    #services-social-content * {
      box-sizing: border-box;
    }

    #services-social-content .ssc-shell {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ==========================================
       INTRODUCTION
    ========================================== */

    #services-social-content .ssc-topline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      padding-bottom: 19px;
      margin-bottom: 32px;
      border-bottom: 1px solid rgba(255,255,255,.15);
    }

    #services-social-content .ssc-eyebrow,
    #services-social-content .ssc-top-index {
      margin: 0;
      color: #aab0ba;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.6;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-social-content .ssc-header {
      display: grid;
      grid-template-columns: minmax(0,1.12fr) minmax(0,.88fr);
      align-items: end;
      gap: 44px;
      margin-bottom: 38px;
    }

    #services-social-content .ssc-heading {
      max-width: 750px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(30px,3.3vw,44px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.18;
      text-wrap: balance;
    }

    #services-social-content .ssc-intro {
      max-width: 440px;
      margin: 0;
      color: #b9bec8;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ==========================================
       HORIZONTAL CONTENT STORYBOARD
    ========================================== */

    #services-social-content .ssc-storyboard {
      position: relative;
      padding: clamp(20px,3vw,34px);
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 13px;
      background:
        linear-gradient(
          125deg,
          rgba(27,28,33,.96),
          rgba(10,11,14,.97)
        );
    }

    #services-social-content .ssc-storyboard-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-bottom: 22px;
    }

    #services-social-content .ssc-small-label {
      color: #abb1bb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-social-content .ssc-storyboard-top h3 {
      margin: 0;
      color: #fff !important;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-social-content .ssc-track {
      display: grid;
      grid-template-columns: repeat(4,minmax(0,1fr));
      gap: 11px;
    }

    #services-social-content .ssc-frame {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 295px;
      overflow: hidden;
      padding: 23px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 9px;
      background: rgba(8,9,12,.78);
      transition:
        border-color .25s ease,
        background-color .25s ease;
    }

    #services-social-content .ssc-frame-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
    }

    #services-social-content .ssc-frame-index {
      color: #aeb4be;
      font-size: 11px;
      font-weight: 600;
    }

    #services-social-content .ssc-frame-symbol {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 50%;
      color: #fff;
      font-size: 15px;
    }

    #services-social-content .ssc-frame-middle {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 105px;
    }

    #services-social-content .ssc-frame-word {
      color: transparent;
      font-size: clamp(34px,4vw,54px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: 1;
      text-align: center;
      -webkit-text-stroke: 1px rgba(255,255,255,.48);
    }

    #services-social-content .ssc-frame h4 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 17px;
      line-height: 1.4;
      font-weight: 600;
    }

    #services-social-content .ssc-frame p {
      margin: 0;
      color: #afb6c0;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-social-content .ssc-storyboard-caption {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      margin-top: 21px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,.12);
    }

    #services-social-content .ssc-storyboard-caption p {
      max-width: 730px;
      margin: 0;
      color: #bbc0c9;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-social-content .ssc-storyboard-caption span {
      color: #969ca7;
      font-size: 10px;
      letter-spacing: .08em;
      white-space: nowrap;
    }

    /* ==========================================
       SOCIAL PLATFORMS — EDITORIAL ROWS
    ========================================== */

    #services-social-content .ssc-platform-heading {
      display: grid;
      grid-template-columns: minmax(0,.8fr) minmax(0,1fr);
      align-items: end;
      gap: 30px;
      margin: 44px 0 20px;
    }

    #services-social-content .ssc-platform-heading h3 {
      margin: 0;
      max-width: 440px;
      color: #fff !important;
      font-size: clamp(23px,2.6vw,33px);
      font-weight: 600;
      line-height: 1.28;
      letter-spacing: -.028em;
    }

    #services-social-content .ssc-platform-heading p {
      margin: 0;
      max-width: 550px;
      color: #b2b9c3;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-social-content .ssc-channel-list {
      border-top: 1px solid rgba(255,255,255,.16);
    }

    #services-social-content .ssc-channel {
      display: grid;
      grid-template-columns: 48px minmax(0,.75fr) minmax(0,1.1fr) 36px;
      gap: 20px;
      align-items: center;
      min-width: 0;
      padding: 23px 12px;
      border-bottom: 1px solid rgba(255,255,255,.14);
      text-decoration: none;
      transition:
        background-color .25s ease,
        padding .25s ease;
    }

    #services-social-content .ssc-channel-index {
      color: #9299a4;
      font-size: 12px;
      font-weight: 600;
    }

    #services-social-content .ssc-channel-name {
      color: #fff;
      font-size: clamp(17px,2vw,23px);
      line-height: 1.35;
      font-weight: 600;
      letter-spacing: -.02em;
    }

    #services-social-content .ssc-channel-description {
      color: #b0b7c1;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-social-content .ssc-channel-arrow {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 50%;
      color: #fff;
    }

    #services-social-content .ssc-channel-arrow svg {
      width: 15px;
      height: 15px;
      transform: rotate(-45deg);
    }

    /* ==========================================
       INFLUENCERS + CONTENT FEATURE
    ========================================== */

    #services-social-content .ssc-feature {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,1fr);
      gap: 13px;
      margin-top: 35px;
    }

    #services-social-content .ssc-feature-panel {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 38px;
      min-width: 0;
      min-height: 375px;
      padding: clamp(24px,3.1vw,37px);
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 12px;
      background:
        linear-gradient(
          145deg,
          rgba(27,28,33,.96),
          rgba(10,11,14,.96)
        );
    }

    #services-social-content .ssc-feature-panel:nth-child(2) {
      background: rgba(13,14,17,.94);
    }

    #services-social-content .ssc-feature-label {
      color: #aab1bb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-social-content .ssc-feature-panel h3 {
      margin: 0 0 16px;
      max-width: 470px;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      line-height: 1.28;
      letter-spacing: -.03em;
    }

    #services-social-content .ssc-feature-panel p {
      margin: 0 0 14px;
      color: #b6bdc7;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-social-content .ssc-feature-links {
      display: flex;
      flex-wrap: wrap;
      gap: 11px 18px;
      padding-top: 21px;
      border-top: 1px solid rgba(255,255,255,.14);
    }

    #services-social-content .ssc-feature-links a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #e1e3e7;
      font-size: 12px;
      line-height: 1.5;
      text-decoration: underline;
      text-decoration-color: rgba(255,255,255,.3);
      text-underline-offset: 5px;
    }

    #services-social-content .ssc-feature-links svg {
      width: 13px;
      height: 13px;
      transform: rotate(-45deg);
    }

    /* ==========================================
       CTA STRIP
    ========================================== */

    #services-social-content .ssc-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-social-content .ssc-footer h3 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-social-content .ssc-footer p {
      max-width: 700px;
      margin: 0;
      color: #b2b9c3;
      font-size: 13px;
      line-height: 1.8;
    }

    #services-social-content .ssc-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border-radius: 8px;
      border: 1px solid #eab308;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-social-content .ssc-button svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #services-social-content .ssc-frame:hover {
        border-color: rgba(255,255,255,.4);
        background: rgba(25,26,30,.96);
      }

      #services-social-content .ssc-channel:hover {
        padding-left: 19px;
        background: rgba(255,255,255,.035);
      }

      #services-social-content .ssc-feature-links a:hover {
        color: #fff;
      }

      #services-social-content .ssc-button:hover {
        background: #facc15;
      }
    }

    #services-social-content a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-social-content .ssc-track {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }

      #services-social-content .ssc-frame {
        min-height: 260px;
      }

      #services-social-content .ssc-frame-word {
        font-size: 52px;
      }

      #services-social-content .ssc-channel {
        grid-template-columns: 35px minmax(0,.8fr) minmax(0,1fr) 32px;
        gap: 12px;
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-social-content .ssc-shell {
        padding-inline: 18px;
      }

      #services-social-content .ssc-header,
      #services-social-content .ssc-platform-heading {
        grid-template-columns: minmax(0,1fr);
        gap: 17px;
      }

      #services-social-content .ssc-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-social-content .ssc-intro {
        font-size: 13px;
      }

      #services-social-content .ssc-storyboard {
        padding: 16px;
      }

      #services-social-content .ssc-storyboard-top {
        align-items: flex-start;
        flex-direction: column;
      }

      #services-social-content .ssc-track {
        display: flex;
        gap: 11px;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        padding-bottom: 12px;
        scrollbar-width: thin;
      }

      #services-social-content .ssc-frame {
        flex: 0 0 min(76vw,245px);
        min-height: 290px;
        scroll-snap-align: start;
      }

      #services-social-content .ssc-frame-word {
        font-size: 49px;
      }

      #services-social-content .ssc-storyboard-caption {
        align-items: flex-start;
        flex-direction: column;
      }

      #services-social-content .ssc-channel {
        grid-template-columns: 25px minmax(0,1fr) 30px;
        gap: 11px;
        padding: 18px 4px;
      }

      #services-social-content .ssc-channel-name {
        font-size: 17px;
      }

      #services-social-content .ssc-channel-description {
        grid-column: 2;
        grid-row: 2;
      }

      #services-social-content .ssc-channel-arrow {
        grid-column: 3;
        grid-row: 1;
        width: 30px;
        height: 30px;
      }

      #services-social-content .ssc-feature {
        grid-template-columns: minmax(0,1fr);
      }

      #services-social-content .ssc-feature-panel {
        min-height: 0;
        padding: 24px;
        gap: 28px;
      }

      #services-social-content .ssc-feature-panel h3 {
        font-size: 26px;
      }

      #services-social-content .ssc-footer {
        grid-template-columns: minmax(0,1fr);
        gap: 20px;
        padding: 23px;
      }

      #services-social-content .ssc-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-social-content .ssc-frame,
      #services-social-content .ssc-channel,
      #services-social-content .ssc-button {
        transition: none;
      }

      #services-social-content .ssc-track {
        scroll-behavior: auto;
      }
    }
  `}</style>

  <div className="ssc-shell">

    {/* 07.01 — EDITORIAL INTRODUCTION */}

    <div className="ssc-topline">
      <p className="ssc-eyebrow">
        07 / SOCIAL MEDIA & CONTENT MARKETING
      </p>

      <span className="ssc-top-index">
        CONTENT / COMMUNITY / COMMUNICATION
      </span>
    </div>

    <header className="ssc-header">
      <h2 id="ssc-heading" className="ssc-heading">
        Don't Just Fill the Feed.
        Give People Something Worth Following.
      </h2>

      <p className="ssc-intro">
        Social media marketing should do more than
        produce a regular stream of posts. It should
        help people understand your brand, recognise
        its value and find reasons to engage.
        InchToMilez connects content strategy,
        creative production, platform communication
        and performance learning into a more
        deliberate approach.
      </p>
    </header>

    {/* 07.02 — CREATIVE CONTENT STORYBOARD */}

    <div className="ssc-storyboard">

      <div className="ssc-storyboard-top">
        <h3>
          From an Idea to a Content Experience.
        </h3>

        <span className="ssc-small-label">
          THE CONTENT STORYBOARD / 04 STAGES
        </span>
      </div>

      <div className="ssc-track">
        {[
          {
            n: "01",
            symbol: "↗",
            word: "WHY",
            title: "Find the Right Story",
            copy:
              "Understand the audience, brand voice, customer questions and communication objective before developing content."
          },
          {
            n: "02",
            symbol: "✳",
            word: "IDEA",
            title: "Create With Purpose",
            copy:
              "Develop strong messages, campaign concepts, design direction, written content and suitable visual formats."
          },
          {
            n: "03",
            symbol: "→",
            word: "POST",
            title: "Adapt for the Platform",
            copy:
              "Shape content around the channel, format and audience rather than repeating identical material everywhere."
          },
          {
            n: "04",
            symbol: "↻",
            word: "LEARN",
            title: "Review the Response",
            copy:
              "Evaluate content engagement, audience feedback and relevant business actions to guide the next cycle."
          }
        ].map((frame) => (
          <article className="ssc-frame" key={frame.n}>

            <div className="ssc-frame-top">
              <span className="ssc-frame-index">
                {frame.n} / 04
              </span>

              <span
                className="ssc-frame-symbol"
                aria-hidden="true"
              >
                {frame.symbol}
              </span>
            </div>

            <div className="ssc-frame-middle" aria-hidden="true">
              <span className="ssc-frame-word">
                {frame.word}
              </span>
            </div>

            <div>
              <h4>{frame.title}</h4>
              <p>{frame.copy}</p>
            </div>

          </article>
        ))}
      </div>

      <div className="ssc-storyboard-caption">
        <p>
          Content strategy connects what the brand
          wants to say with what the audience needs
          to hear — through relevant formats and
          consistent communication.
        </p>

        <span>SCROLL TO EXPLORE ON MOBILE →</span>
      </div>

    </div>

    {/* 07.03 — SOCIAL PLATFORM SERVICES */}

    <div className="ssc-platform-heading">
      <h3>
        Different Platforms.
        Different Conversations.
      </h3>

      <p>
        Each channel has its own audience behaviours,
        content formats and expectations. We consider
        where your customers spend time, what they
        expect from the platform and how your brand
        can communicate effectively in that environment.
      </p>
    </div>

    <div className="ssc-channel-list">

      {[
        {
          number: "01",
          name: "Instagram Marketing",
          copy:
            "Visual storytelling, Reels, carousels, campaign creative, content calendars and audience-focused brand communication.",
          to: "/services/social-media-marketing/instagram"
        },
        {
          number: "02",
          name: "Facebook Marketing",
          copy:
            "Business page communication, audience engagement, social campaigns and coordinated organic and paid content.",
          to: "/services/social-media-marketing/facebook"
        },
        {
          number: "03",
          name: "Influencer Marketing",
          copy:
            "Creator selection, collaboration planning, campaign briefs, content alignment and influencer partnership coordination.",
          to: "/services/social-media-marketing/influencer-marketing"
        },
        {
          number: "04",
          name: "Social Media Marketing",
          copy:
            "Platform strategy, brand voice, creative direction, publishing plans and measurement across relevant social channels.",
          to: "/services/social-media-marketing"
        }
      ].map((channel) => (
        <Link
          to={channel.to}
          key={channel.number}
          className="ssc-channel"
        >
          <span className="ssc-channel-index">
            {channel.number}
          </span>

          <span className="ssc-channel-name">
            {channel.name}
          </span>

          <span className="ssc-channel-description">
            {channel.copy}
          </span>

          <span
            className="ssc-channel-arrow"
            aria-hidden="true"
          >
            <ArrowRight />
          </span>
        </Link>
      ))}

    </div>

    {/* 07.04 — TWO EDITORIAL FEATURES */}

    <div className="ssc-feature">

      {/* INFLUENCER MARKETING */}

      <article className="ssc-feature-panel">

        <span className="ssc-feature-label">
          INFLUENCER & CREATOR COLLABORATIONS
        </span>

        <div>
          <h3>
            The Right Creator Matters More
            Than the Biggest Follower Count.
          </h3>

          <p>
            Influencer marketing is about finding
            meaningful alignment between a brand,
            a creator and an audience. A partnership
            should make sense for the people receiving
            the message, not simply deliver impressions.
          </p>

          <p>
            We consider creator relevance, audience
            demographics, content style, campaign
            expectations, brand suitability and
            disclosure requirements when planning
            collaborations.
          </p>
        </div>

        <div className="ssc-feature-links">
          <Link to="/services/social-media-marketing/influencer-marketing">
            Influencer Marketing
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

      </article>

      {/* CONTENT MARKETING */}

      <article className="ssc-feature-panel">

        <span className="ssc-feature-label">
          WRITING, CONTENT & COMMUNICATION
        </span>

        <div>
          <h3>
            Good Content Answers Questions
            Before It Asks for Attention.
          </h3>

          <p>
            Content marketing supports the customer
            journey by explaining services, sharing
            useful information and making a brand's
            expertise easier to understand.
          </p>

          <p>
            From SEO-focused articles and website
            copywriting to email campaigns and
            brand communication, the objective
            is to create content that serves a
            clear purpose and fits the intended
            audience.
          </p>
        </div>

        <div className="ssc-feature-links">
          <Link to="/services/content-marketing">
            Content Marketing
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link to="/services/content-marketing/blog-writing">
            Blog Writing
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link to="/services/content-marketing/copywriting">
            Copywriting
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link to="/services/email-marketing">
            Email Marketing
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

      </article>

    </div>

    {/* 07.05 — FINAL CTA */}

    <div className="ssc-footer">
      <div>
        <h3>
          Give Your Brand a More Consistent Voice.
        </h3>

        <p>
          Whether you're building a social media
          presence, developing content or planning
          creator collaborations, we can help you
          identify an approach that fits your
          audience and business objectives.
        </p>
      </div>

      <Link
        to="/services/social-media-marketing"
        className="ssc-button"
      >
        Explore Social Media Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 07 ================= */}













{/* ============================================================
   SECTION 08 — WEBSITE DESIGN & DEVELOPMENT
   INCHTOMILEZ / SERVICES PAGE

   08.01 Editorial Introduction
   08.02 Website Experience Showcase
   08.03 Website Development Architecture
   08.04 Specialist Development Services
   08.05 Conversion CTA

   UI/UX: Digital Architecture / Browser Preview
   Theme: Original Black Grid / Raleway
   Text: White & Neutral Grey
   Accent: Yellow CTA Buttons Only

   Existing imports:
   Link, ArrowRight
============================================================ */}

<section
  id="services-web-development"
  aria-labelledby="swd-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-web-development,
    #services-web-development * {
      box-sizing: border-box;
    }

    #services-web-development .swd-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ==========================================
       08.01 — EDITORIAL INTRODUCTION
    ========================================== */

    #services-web-development .swd-header {
      display: grid;
      grid-template-columns:
        minmax(0, 1.1fr) minmax(0, .9fr);
      align-items: end;
      gap: 42px;
      margin-bottom: 42px;
    }

    #services-web-development .swd-eyebrow {
      display: block;
      margin-bottom: 18px;
      color: #aeb4be;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-web-development .swd-heading {
      max-width: 740px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(29px, 3.3vw, 44px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.19;
      text-wrap: balance;
    }

    #services-web-development .swd-header-copy {
      max-width: 435px;
      margin: 0;
      color: #b9bec8;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ==========================================
       08.02 — WEBSITE BROWSER SHOWCASE
    ========================================== */

    #services-web-development .swd-showcase {
      display: grid;
      grid-template-columns:
        minmax(0, 1.15fr) minmax(0, .85fr);
      align-items: stretch;
      gap: 14px;
      min-width: 0;
    }

    #services-web-development .swd-browser {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 510px;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 13px;
      background: #111216;
      overflow: hidden;
    }

    #services-web-development .swd-browser-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 15px 19px;
      border-bottom: 1px solid rgba(255,255,255,.13);
      background: #1d1e23;
    }

    #services-web-development .swd-dots {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    #services-web-development .swd-dots span {
      width: 7px;
      height: 7px;
      border: 1px solid rgba(255,255,255,.45);
      border-radius: 50%;
    }

    #services-web-development .swd-address {
      flex: 1;
      max-width: 330px;
      padding: 7px 13px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 5px;
      color: #a6acb6;
      font-size: 10px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #services-web-development .swd-browser-label {
      color: #a2a9b3;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .06em;
    }

    /* INTERNAL MOCK WEBSITE */

    #services-web-development .swd-browser-content {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
      padding: clamp(22px,3vw,36px);
      background:
        linear-gradient(
          135deg,
          rgba(33,34,39,.98),
          rgba(10,11,14,.98)
        );
    }

    #services-web-development .swd-mock-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }

    #services-web-development .swd-mock-logo {
      color: #fff;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -.045em;
    }

    #services-web-development .swd-mock-nav-lines {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    #services-web-development .swd-mock-nav-lines span {
      width: 23px;
      height: 3px;
      background: rgba(255,255,255,.25);
      border-radius: 2px;
    }

    #services-web-development .swd-mock-hero {
      max-width: 450px;
      padding: 32px 0;
    }

    #services-web-development .swd-mock-kicker {
      display: block;
      margin-bottom: 14px;
      color: #aab1bb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
    }

    #services-web-development .swd-mock-heading {
      margin: 0 0 17px;
      color: #fff !important;
      font-size: clamp(32px,3.9vw,52px);
      font-weight: 700;
      letter-spacing: -.06em;
      line-height: 1.09;
      text-wrap: balance;
    }

    #services-web-development .swd-mock-description {
      max-width: 385px;
      margin: 0;
      color: #b0b6c0;
      font-size: 12px;
      line-height: 1.85;
    }

    #services-web-development .swd-mock-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 22px;
      padding: 10px 15px;
      border-radius: 7px;
      background: #eab308;
      color: #050505;
      font-size: 11px;
      font-weight: 700;
    }

    #services-web-development .swd-mock-button svg {
      width: 14px;
      height: 14px;
    }

    #services-web-development .swd-mock-bottom {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 10px;
    }

    #services-web-development .swd-mock-feature {
      padding: 15px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 7px;
      background: rgba(255,255,255,.025);
    }

    #services-web-development .swd-mock-feature span {
      display: block;
      margin-bottom: 9px;
      color: #9ba2ac;
      font-size: 10px;
    }

    #services-web-development .swd-mock-feature strong {
      display: block;
      color: #e8eaee;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.5;
    }

    /* RIGHT — EDITORIAL EXPLANATION */

    #services-web-development .swd-explanation {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 35px;
      min-width: 0;
      padding: clamp(25px,3vw,38px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background:
        linear-gradient(
          145deg,
          rgba(27,28,32,.96),
          rgba(10,11,14,.95)
        );
    }

    #services-web-development .swd-explanation-label {
      color: #aeb4be;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-web-development .swd-explanation h3 {
      max-width: 380px;
      margin: 0 0 20px;
      color: #fff !important;
      font-size: clamp(24px,2.6vw,34px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-web-development .swd-explanation p {
      margin: 0 0 17px;
      color: #b8bec7;
      font-size: 13px;
      line-height: 1.9;
    }

    #services-web-development .swd-explanation-bottom {
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.13);
    }

    #services-web-development .swd-explanation-bottom strong {
      display: block;
      margin-bottom: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
    }

    #services-web-development .swd-explanation-bottom span {
      display: block;
      color: #aeb5bf;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ==========================================
       08.03 — WEBSITE ARCHITECTURE
    ========================================== */

    #services-web-development .swd-architecture-header {
      display: grid;
      grid-template-columns: minmax(0,.8fr) minmax(0,1fr);
      gap: 30px;
      align-items: end;
      margin: 45px 0 23px;
    }

    #services-web-development .swd-architecture-header h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.6vw,33px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.03em;
    }

    #services-web-development .swd-architecture-header p {
      margin: 0;
      color: #b5bbc5;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-web-development .swd-architecture {
      display: grid;
      grid-template-columns: repeat(4,minmax(0,1fr));
      gap: 12px;
    }

    #services-web-development .swd-layer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 35px;
      min-width: 0;
      min-height: 240px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 10px;
      background: rgba(12,13,16,.93);
      transition: border-color .25s ease;
    }

    #services-web-development .swd-layer-index {
      color: #9ca3ad;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .05em;
    }

    #services-web-development .swd-layer h4 {
      margin: 0 0 11px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-web-development .swd-layer p {
      margin: 0;
      color: #b0b7c1;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ==========================================
       08.04 — SPECIALIST SERVICES
    ========================================== */

    #services-web-development .swd-specialists {
      display: grid;
      grid-template-columns: minmax(0,.65fr) minmax(0,1fr);
      gap: 30px;
      margin-top: 14px;
      padding: clamp(24px,3vw,36px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(21,22,26,.94);
    }

    #services-web-development .swd-specialists h3 {
      margin: 0 0 13px;
      color: #fff !important;
      font-size: clamp(22px,2.4vw,30px);
      font-weight: 600;
      line-height: 1.3;
    }

    #services-web-development .swd-specialists p {
      margin: 0;
      color: #b7bdc7;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-web-development .swd-service-links {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      gap: 0;
    }

    #services-web-development .swd-service-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 17px 0;
      border-bottom: 1px solid rgba(255,255,255,.13);
      color: #e3e5e9;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.5;
      text-decoration: none;
    }

    #services-web-development .swd-service-link:first-child {
      padding-top: 0;
    }

    #services-web-development .swd-service-link svg {
      flex-shrink: 0;
      width: 15px;
      height: 15px;
      transform: rotate(-45deg);
    }

    /* ==========================================
       08.05 — FINAL CTA
    ========================================== */

    #services-web-development .swd-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 14px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-web-development .swd-footer h3 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-web-development .swd-footer p {
      margin: 0;
      max-width: 720px;
      color: #b2b9c3;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-web-development .swd-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border-radius: 8px;
      border: 1px solid #eab308;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color .25s ease;
    }

    #services-web-development .swd-cta svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #services-web-development .swd-layer:hover {
        border-color: rgba(255,255,255,.35);
      }

      #services-web-development .swd-service-link:hover {
        color: #fff;
      }

      #services-web-development .swd-cta:hover {
        background: #facc15;
      }
    }

    #services-web-development a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-web-development .swd-showcase {
        grid-template-columns: minmax(0,1fr);
      }

      #services-web-development .swd-browser {
        min-height: 470px;
      }

      #services-web-development .swd-explanation {
        min-height: 0;
        gap: 24px;
      }

      #services-web-development .swd-architecture {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-web-development .swd-shell {
        padding-inline: 18px;
      }

      #services-web-development .swd-header {
        grid-template-columns: minmax(0,1fr);
        gap: 18px;
      }

      #services-web-development .swd-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-web-development .swd-header-copy {
        font-size: 13px;
      }

      #services-web-development .swd-browser {
        min-height: 0;
      }

      #services-web-development .swd-browser-top {
        padding: 12px;
      }

      #services-web-development .swd-address {
        max-width: 180px;
      }

      #services-web-development .swd-browser-label {
        display: none;
      }

      #services-web-development .swd-browser-content {
        padding: 22px;
      }

      #services-web-development .swd-mock-heading {
        font-size: clamp(30px,7vw,42px);
      }

      #services-web-development .swd-mock-bottom {
        grid-template-columns: minmax(0,1fr);
      }

      #services-web-development .swd-explanation {
        padding: 23px;
      }

      #services-web-development .swd-explanation h3 {
        font-size: 26px;
      }

      #services-web-development .swd-architecture-header {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      #services-web-development .swd-architecture {
        grid-template-columns: minmax(0,1fr);
      }

      #services-web-development .swd-layer {
        min-height: 0;
        gap: 25px;
        padding: 22px;
      }

      #services-web-development .swd-specialists {
        grid-template-columns: minmax(0,1fr);
        gap: 25px;
        padding: 23px;
      }

      #services-web-development .swd-footer {
        grid-template-columns: minmax(0,1fr);
        gap: 20px;
        padding: 23px;
      }

      #services-web-development .swd-cta {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #services-web-development .swd-layer,
      #services-web-development .swd-cta {
        transition: none;
      }
    }
  `}</style>

  <div className="swd-shell">

    {/* ======================================================
        08.01 — SECTION INTRODUCTION
    ====================================================== */}

    <header className="swd-header">
      <div>
        <span className="swd-eyebrow">
          08 / WEBSITE DESIGN & DEVELOPMENT
        </span>

        <h2 id="swd-heading" className="swd-heading">
          Your Website Should Do More Than Exist.
          It Should Work for Your Business.
        </h2>
      </div>

      <p className="swd-header-copy">
        A business website is often where people
        decide whether to contact you, enquire about
        a service or explore a product. InchToMilez
        combines website design, development,
        user experience and SEO foundations to
        create digital experiences that communicate
        clearly and make the next action easier.
      </p>
    </header>

    {/* ======================================================
        08.02 — DIGITAL EXPERIENCE SHOWCASE
    ====================================================== */}

    <div className="swd-showcase">

      {/* BROWSER PREVIEW — CONCEPTUAL VISUAL */}

      <div className="swd-browser">

        <div className="swd-browser-top">
          <div className="swd-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="swd-address">
            your-brand.example
          </div>

          <span className="swd-browser-label">
            WEBSITE / PREVIEW
          </span>
        </div>

        <div className="swd-browser-content">

          <div className="swd-mock-nav">
            <span className="swd-mock-logo">
              YOUR BRAND
            </span>

            <div className="swd-mock-nav-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="swd-mock-hero">
            <span className="swd-mock-kicker">
              CLEAR MESSAGE / BETTER EXPERIENCE
            </span>

            <p className="swd-mock-heading">
              Make Every
              Visit Matter.
            </p>

            <p className="swd-mock-description">
              A clear message, thoughtful design,
              useful content and an experience
              built around what visitors need.
            </p>

            <span className="swd-mock-button">
              Your Next Step
              <ArrowRight aria-hidden="true" />
            </span>
          </div>

          <div className="swd-mock-bottom">
            {[
              {
                n: "01",
                title: "Clear Navigation"
              },
              {
                n: "02",
                title: "Responsive Layout"
              },
              {
                n: "03",
                title: "Useful Content"
              }
            ].map((feature) => (
              <div
                className="swd-mock-feature"
                key={feature.n}
              >
                <span>{feature.n}</span>
                <strong>{feature.title}</strong>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT — WHY THE WEBSITE MATTERS */}

      <article className="swd-explanation">

        <span className="swd-explanation-label">
          THE ROLE OF A BUSINESS WEBSITE
        </span>

        <div>
          <h3>
            Designed for People.
            Built Around Business Objectives.
          </h3>

          <p>
            A website should introduce the business,
            explain its products or services,
            answer relevant questions and help
            visitors make informed decisions.
          </p>

          <p>
            Good website design combines hierarchy,
            navigation, typography, mobile usability
            and accessible content. Good development
            ensures that the experience works
            reliably across devices and browsers.
          </p>

          <p>
            We also consider how the website fits
            into the rest of your marketing — from
            Google search and advertising campaigns
            to content and lead generation.
          </p>
        </div>

        <div className="swd-explanation-bottom">
          <strong>
            More Than a Digital Brochure.
          </strong>

          <span>
            Your website is an important part of
            how people discover, understand and
            interact with your brand.
          </span>
        </div>

      </article>

    </div>

    {/* ======================================================
        08.03 — DEVELOPMENT ARCHITECTURE
    ====================================================== */}

    <div className="swd-architecture-header">
      <h3>
        The Foundations Behind a Better Website.
      </h3>

      <p>
        Effective website design and development
        requires more than assembling pages.
        Each layer contributes to usability,
        communication, accessibility and
        long-term maintainability.
      </p>
    </div>

    <div className="swd-architecture">

      {[
        {
          number: "01 / STRUCTURE",
          heading: "Information Architecture",
          description:
            "Plan page hierarchy, navigation, service structure and the paths visitors take to find information."
        },
        {
          number: "02 / EXPERIENCE",
          heading: "UI & UX Design",
          description:
            "Develop responsive layouts, clear visual hierarchy, readable interfaces and consistent interactions."
        },
        {
          number: "03 / DEVELOPMENT",
          heading: "Technical Implementation",
          description:
            "Build functional web pages, integrate necessary features and establish a reliable technical foundation."
        },
        {
          number: "04 / DISCOVERY",
          heading: "SEO & Performance",
          description:
            "Consider crawlable content, page metadata, mobile usability, loading performance and website accessibility."
        }
      ].map((layer) => (
        <article className="swd-layer" key={layer.number}>
          <span className="swd-layer-index">
            {layer.number}
          </span>

          <div>
            <h4>{layer.heading}</h4>
            <p>{layer.description}</p>
          </div>
        </article>
      ))}

    </div>

    {/* ======================================================
        08.04 — SPECIALIST WEB DEVELOPMENT SERVICES
    ====================================================== */}

    <div className="swd-specialists">

      <div>
        <h3>
          Different Websites.
          Different Requirements.
        </h3>

        <p>
          A corporate website, an online store and a
          conversion-focused landing page serve
          different purposes. We consider the
          business model, content needs, technical
          requirements and available resources
          before choosing an approach.
        </p>
      </div>

      <nav
        className="swd-service-links"
        aria-label="Website development services"
      >
        {[
          {
            label: "Website Design & Development",
            to: "/services/web-design-development"
          },
          {
            label: "WordPress Development",
            to: "/services/web-design-development/wordpress"
          },
          {
            label: "E-Commerce Website Development",
            to: "/services/web-design-development/ecommerce"
          },
          {
            label: "Software Development",
            to: "/services/software-development"
          }
        ].map((service) => (
          <Link
            key={service.to}
            to={service.to}
            className="swd-service-link"
          >
            <span>{service.label}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </nav>

    </div>

    {/* ======================================================
        08.05 — FINAL CONVERSION CTA
    ====================================================== */}

    <div className="swd-footer">
      <div>
        <h3>
          Planning a New Website or Improving an Existing One?
        </h3>

        <p>
          Whether your business needs a new website,
          an online store or a better digital
          experience, let's discuss your requirements,
          audience and project objectives.
        </p>
      </div>

      <Link
        to="/services/web-design-development"
        className="swd-cta"
      >
        Explore Web Development
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

</section>

{/* ================= END SECTION 08 ================= */}








{/* ============================================================
   SECTION 09 — ADVERTISING BEYOND DIGITAL
   INCHTOMILEZ / SERVICES PAGE

   09.01 Editorial Introduction
   09.02 Outdoor Advertising Showcase
   09.03 Advertising Formats / Horizontal Gallery
   09.04 Integrated Campaign Execution
   09.05 Specialist Services + CTA

   UI/UX:
   - Wide cinematic billboard composition
   - Horizontal scroll-snap media gallery
   - Editorial campaign execution timeline
   - No repeated bento-grid layouts

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No new dependencies
============================================================ */}

<section
  id="services-advertising"
  aria-labelledby="sad-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-advertising,
    #services-advertising * {
      box-sizing: border-box;
    }

    #services-advertising .sad-shell {
      width: 100%;
      max-width: 1200px;
      padding: 0 24px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    #services-advertising .sad-eyebrow {
      margin: 0 0 18px;
      color: #afb4bd;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-advertising .sad-header {
      display: grid;
      grid-template-columns: minmax(0,1.2fr) minmax(0,.8fr);
      gap: 42px;
      align-items: end;
      margin-bottom: 39px;
    }

    #services-advertising .sad-heading {
      max-width: 750px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(29px,3.3vw,44px);
      font-weight: 600;
      line-height: 1.18;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #services-advertising .sad-header-copy {
      max-width: 440px;
      margin: 0;
      color: #b9bec7;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ---------------------------------------
       09.02 BILLBOARD CONCEPTUAL SHOWCASE
    --------------------------------------- */

    #services-advertising .sad-showcase {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0,1.4fr) minmax(0,.6fr);
      gap: 14px;
      min-width: 0;
    }

    #services-advertising .sad-billboard-panel {
      position: relative;
      min-width: 0;
      min-height: 470px;
      padding: clamp(20px,3vw,34px);
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 13px;
      background: linear-gradient(
        150deg,#292a2e,#0b0c0f 80%
      );
      overflow: hidden;
    }

    #services-advertising .sad-panel-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      color: #afb5be;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-advertising .sad-billboard-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 345px;
      padding: 20px 16px;
    }

    #services-advertising .sad-billboard {
      width: min(100%,610px);
      margin: 0 auto;
      padding: clamp(22px,3vw,39px);
      border: 8px solid #373940;
      outline: 1px solid rgba(255,255,255,.2);
      background: #101114;
      box-shadow: 0 24px 55px rgba(0,0,0,.42);
      transform: perspective(900px) rotateY(-5deg);
    }

    #services-advertising .sad-billboard-small {
      display: block;
      color: #aeb4be;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: .1em;
      margin-bottom: 22px;
    }

    #services-advertising .sad-billboard-title {
      margin: 0 0 20px;
      color: #fff !important;
      font-size: clamp(31px,4.4vw,62px);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -.07em;
    }

    #services-advertising .sad-billboard-title span {
      display: block;
    }

    #services-advertising .sad-billboard-title .outline {
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,.8);
    }

    #services-advertising .sad-billboard-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,.2);
      color: #c4c8d0;
      font-size: 10px;
    }

    #services-advertising .sad-billboard-stand {
      width: 100%;
      height: 27px;
      display: flex;
      justify-content: space-around;
      padding: 0 30%;
    }

    #services-advertising .sad-billboard-stand span {
      width: 8px;
      height: 27px;
      background: #474a51;
    }

    #services-advertising .sad-showcase-caption {
      color: #a8aeb8;
      font-size: 11px;
      line-height: 1.7;
      margin: 0;
    }

    /* RIGHT EDITORIAL PANEL */

    #services-advertising .sad-meaning {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 32px;
      padding: clamp(24px,3vw,36px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: rgba(12,13,16,.95);
    }

    #services-advertising .sad-meaning-label {
      color: #aab1bb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-advertising .sad-meaning h3 {
      margin: 0 0 18px;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.03em;
    }

    #services-advertising .sad-meaning p {
      margin: 0 0 14px;
      color: #b6bdc7;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-advertising .sad-meaning-bottom {
      border-top: 1px solid rgba(255,255,255,.13);
      padding-top: 18px;
      color: #d7d9de;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ---------------------------------------
       09.03 HORIZONTAL FORMAT GALLERY
    --------------------------------------- */

    #services-advertising .sad-gallery-heading {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
      margin: 43px 0 20px;
    }

    #services-advertising .sad-gallery-heading h3 {
      max-width: 710px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.03em;
    }

    #services-advertising .sad-gallery-heading span {
      color: #9da4ae;
      font-size: 10px;
      font-weight: 600;
      white-space: nowrap;
      letter-spacing: .08em;
    }

    #services-advertising .sad-gallery {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      padding-bottom: 12px;
      scroll-snap-type: x mandatory;
      scrollbar-width: thin;
      -webkit-overflow-scrolling: touch;
    }

    #services-advertising .sad-format {
      flex: 0 0 clamp(240px,28%,320px);
      min-width: 0;
      min-height: 310px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 24px;
      padding: 25px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
      text-decoration: none;
      scroll-snap-align: start;
      transition: background-color .2s ease,border-color .2s ease;
    }

    #services-advertising .sad-format-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    #services-advertising .sad-format-number {
      color: #9da4af;
      font-size: 11px;
      font-weight: 600;
    }

    #services-advertising .sad-format-top svg {
      width: 17px;
      height: 17px;
      color: #d2d5db;
      transform: rotate(-45deg);
    }

    #services-advertising .sad-format-symbol {
      display: block;
      color: transparent;
      font-size: clamp(55px,6vw,78px);
      font-weight: 800;
      letter-spacing: -.09em;
      line-height: 1;
      -webkit-text-stroke: 1px rgba(255,255,255,.45);
    }

    #services-advertising .sad-format h4 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.35;
    }

    #services-advertising .sad-format p {
      margin: 0;
      color: #b0b7c1;
      font-size: 12px;
      line-height: 1.85;
    }

    /* ---------------------------------------
       09.04 CAMPAIGN EXECUTION TIMELINE
    --------------------------------------- */

    #services-advertising .sad-process {
      margin-top: 34px;
      padding: clamp(23px,3vw,36px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: linear-gradient(
        130deg,rgba(27,28,33,.95),rgba(10,11,14,.96)
      );
    }

    #services-advertising .sad-process-head {
      display: grid;
      grid-template-columns: minmax(0,.85fr) minmax(0,1fr);
      gap: 32px;
      align-items: end;
      margin-bottom: 29px;
    }

    #services-advertising .sad-process-head h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-advertising .sad-process-head p {
      margin: 0;
      color: #b5bcc6;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-advertising .sad-steps {
      display: grid;
      grid-template-columns: repeat(4,minmax(0,1fr));
      gap: 12px;
    }

    #services-advertising .sad-step {
      min-width: 0;
      padding: 21px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 9px;
      background: rgba(9,10,12,.82);
    }

    #services-advertising .sad-step-number {
      display: block;
      margin-bottom: 30px;
      color: #a3aab4;
      font-size: 11px;
      font-weight: 600;
    }

    #services-advertising .sad-step h4 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-advertising .sad-step p {
      margin: 0;
      color: #b0b7c0;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ---------------------------------------
       09.05 BOTTOM CTA
    --------------------------------------- */

    #services-advertising .sad-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-advertising .sad-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-advertising .sad-footer p {
      max-width: 690px;
      margin: 0;
      color: #b3bac4;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-advertising .sad-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      background: #eab308;
      border: 1px solid #eab308;
      border-radius: 8px;
      color: #050505;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-advertising .sad-button svg {
      width: 15px;
      height: 15px;
    }

    /* DESKTOP HOVERS */

    @media (hover:hover) and (pointer:fine) {
      #services-advertising .sad-format:hover {
        background: rgba(25,26,30,.97);
        border-color: rgba(255,255,255,.34);
      }

      #services-advertising .sad-button:hover {
        background: #facc15;
      }
    }

    #services-advertising a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-advertising .sad-showcase {
        grid-template-columns: 1fr;
      }

      #services-advertising .sad-billboard-panel {
        min-height: 430px;
      }

      #services-advertising .sad-meaning {
        min-height: 0;
      }

      #services-advertising .sad-steps {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-advertising .sad-shell {
        padding-inline: 18px;
      }

      #services-advertising .sad-header,
      #services-advertising .sad-process-head {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #services-advertising .sad-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-advertising .sad-header-copy {
        font-size: 13px;
      }

      #services-advertising .sad-billboard-panel {
        min-height: 340px;
        padding: 20px;
      }

      #services-advertising .sad-billboard-area {
        min-height: 270px;
        padding: 20px 5px;
      }

      #services-advertising .sad-billboard {
        padding: 20px;
        border-width: 6px;
        transform: none;
      }

      #services-advertising .sad-billboard-title {
        font-size: clamp(29px,7vw,47px);
      }

      #services-advertising .sad-meaning {
        padding: 23px;
      }

      #services-advertising .sad-meaning h3 {
        font-size: 26px;
      }

      #services-advertising .sad-gallery-heading {
        align-items: flex-start;
        flex-direction: column;
      }

      #services-advertising .sad-format {
        flex-basis: min(78vw,290px);
        min-height: 290px;
        padding: 23px;
      }

      #services-advertising .sad-process {
        padding: 22px;
      }

      #services-advertising .sad-steps {
        grid-template-columns: 1fr;
      }

      #services-advertising .sad-step-number {
        margin-bottom: 17px;
      }

      #services-advertising .sad-footer {
        align-items: flex-start;
        flex-direction: column;
        padding: 23px;
      }

      #services-advertising .sad-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-advertising .sad-format,
      #services-advertising .sad-button {
        transition: none;
      }

      #services-advertising .sad-gallery {
        scroll-behavior: auto;
      }
    }
  `}</style>

  <div className="sad-shell">

    {/* 09.01 — INTRODUCTION */}

    <header className="sad-header">
      <div>
        <p className="sad-eyebrow">
          09 / ADVERTISING BEYOND DIGITAL
        </p>

        <h2
          id="sad-heading"
          className="sad-heading"
        >
          Some Brands Need More Than a Screen
          to Make an Impression.
        </h2>
      </div>

      <p className="sad-header-copy">
        Digital channels are only part of the
        advertising landscape. People also encounter
        brands through billboards, outdoor media,
        newspapers, radio, events and local experiences.
        InchToMilez approaches these formats as
        potential parts of a broader advertising
        and brand communication strategy.
      </p>
    </header>

    {/* 09.02 — CONCEPTUAL BILLBOARD SHOWCASE */}

    <div className="sad-showcase">

      <div className="sad-billboard-panel">

        <div className="sad-panel-top">
          <span>OUTDOOR ADVERTISING / CONCEPT</span>
          <span>MEDIA / 001</span>
        </div>

        <div className="sad-billboard-area">

          <div className="sad-billboard">
            <span className="sad-billboard-small">
              INCHTOMILEZ / ADVERTISING
            </span>

            <p className="sad-billboard-title">
              <span>THINK</span>
              <span className="outline">BEYOND</span>
              <span>THE SCREEN.</span>
            </p>

            <div className="sad-billboard-bottom">
              <span>
                DIGITAL. PHYSICAL. CONNECTED.
              </span>
              <span>INCHTOMILEZ</span>
            </div>
          </div>

          <div
            className="sad-billboard-stand"
            aria-hidden="true"
          >
            <span />
            <span />
          </div>

        </div>

        <p className="sad-showcase-caption">
          A conceptual advertising installation
          illustrating how a clear brand message can
          translate into a physical media environment.
        </p>

      </div>

      {/* WHY PHYSICAL ADVERTISING MATTERS */}

      <article className="sad-meaning">
        <span className="sad-meaning-label">
          INTEGRATED BRAND VISIBILITY
        </span>

        <div>
          <h3>
            The Right Message.
            In the Right Environment.
          </h3>

          <p>
            A billboard reaches people differently
            from a search advertisement. An event
            creates a different interaction from a
            social media post. Each format has its
            own strengths and limitations.
          </p>

          <p>
            We consider audience, location, timing,
            message clarity, creative format and
            campaign objectives before deciding
            where a brand should appear.
          </p>
        </div>

        <div className="sad-meaning-bottom">
          One consistent brand message can be adapted
          to multiple environments without relying
          on identical creative everywhere.
        </div>
      </article>

    </div>

    {/* 09.03 — HORIZONTAL MEDIA GALLERY */}

    <div className="sad-gallery-heading">
      <h3>
        Explore Advertising Formats Beyond Digital.
      </h3>

      <span>SCROLL TO EXPLORE →</span>
    </div>

    <div
      className="sad-gallery"
      aria-label="Advertising services"
    >
      {[
        {
          n: "01",
          symbol: "OOH",
          title: "Outdoor & OOH Advertising",
          description:
            "Billboards, outdoor placements, location-based visibility and creative adapted to real-world viewing conditions.",
          path: "/services/ooh-advertising"
        },
        {
          n: "02",
          symbol: "BTL",
          title: "BTL Activations",
          description:
            "Experiential promotions, branded interactions and local activations that bring brands closer to their audiences.",
          path: "/services/btl-activations"
        },
        {
          n: "03",
          symbol: "PR",
          title: "Public Relations",
          description:
            "Announcements, communication planning and media-facing messaging designed to support public understanding.",
          path: "/services/public-relations"
        },
        {
          n: "04",
          symbol: "FM",
          title: "Radio & Newspaper Ads",
          description:
            "Regional radio, newspaper advertisements, print creative and traditional media planning for relevant audiences.",
          path: "/services/radio-newspapers"
        },
        {
          n: "05",
          symbol: "AD",
          title: "Integrated Advertising",
          description:
            "Connected advertising concepts, campaign coordination and communication across suitable online and offline channels.",
          path: "/services/advertising"
        }
      ].map((format) => (
        <Link
          key={format.n}
          to={format.path}
          className="sad-format"
        >
          <div className="sad-format-top">
            <span className="sad-format-number">
              {format.n} / 05
            </span>
            <ArrowRight aria-hidden="true" />
          </div>

          <span
            className="sad-format-symbol"
            aria-hidden="true"
          >
            {format.symbol}
          </span>

          <div>
            <h4>{format.title}</h4>
            <p>{format.description}</p>
          </div>
        </Link>
      ))}
    </div>

    {/* 09.04 — EXECUTION FRAMEWORK */}

    <div className="sad-process">

      <div className="sad-process-head">
        <h3>
          From Media Planning to Real-World Execution.
        </h3>

        <p>
          Physical advertising involves additional
          planning considerations, including placement,
          production, schedules, location restrictions
          and coordination with media owners or event
          partners. We structure those requirements
          around the campaign brief and objectives.
        </p>
      </div>

      <div className="sad-steps">
        {[
          {
            number: "01",
            title: "Understand the Market",
            body:
              "Define the audience, target locations, campaign purpose and the role physical advertising should play."
          },
          {
            number: "02",
            title: "Plan the Placement",
            body:
              "Evaluate media formats, relevant locations, availability, budgets and practical execution requirements."
          },
          {
            number: "03",
            title: "Develop the Creative",
            body:
              "Adapt the message, artwork and production specifications to the selected advertising environment."
          },
          {
            number: "04",
            title: "Coordinate & Review",
            body:
              "Plan implementation, check agreed deliverables and review available campaign evidence or response indicators."
          }
        ].map((step) => (
          <article
            key={step.number}
            className="sad-step"
          >
            <span className="sad-step-number">
              {step.number} / 04
            </span>

            <h4>{step.title}</h4>
            <p>{step.body}</p>
          </article>
        ))}
      </div>

    </div>

    {/* 09.05 — CLOSING CTA */}

    <div className="sad-footer">
      <div>
        <h3>
          Planning a Campaign That Goes Beyond Digital?
        </h3>

        <p>
          From outdoor advertising and BTL activations
          to print, radio and integrated brand campaigns,
          let's discuss the audience, geography, media
          formats and objectives for your project.
        </p>
      </div>

      <Link
        to="/services/advertising"
        className="sad-button"
      >
        Explore Advertising
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

</section>

{/* ================= END SECTION 09 ================= */}
















{/* ============================================================
   SECTION 10 — E-COMMERCE MARKETING & PRODUCT GROWTH
   INCHTOMILEZ / SERVICES PAGE

   10.01 Editorial Introduction
   10.02 Commerce Experience Studio
   10.03 Customer Purchase Journey
   10.04 E-Commerce Marketing Capabilities
   10.05 Final CTA

   DESIGN:
   - Editorial Commerce Studio
   - Conceptual Product Storefront
   - Vertical Customer Journey
   - Horizontal Specialist Service Index

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No new dependencies
============================================================ */}

<section
  id="services-ecommerce"
  aria-labelledby="sec10-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-ecommerce,
    #services-ecommerce * {
      box-sizing: border-box;
    }

    #services-ecommerce .sec10-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* ==========================================
       10.01 EDITORIAL INTRODUCTION
    ========================================== */

    #services-ecommerce .sec10-header {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
      gap: clamp(25px, 4vw, 54px);
      align-items: end;
      margin-bottom: 38px;
    }

    #services-ecommerce .sec10-eyebrow {
      display: block;
      margin: 0 0 18px;
      color: #abb1bc;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.6;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-ecommerce .sec10-heading {
      max-width: 745px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(29px, 3.2vw, 43px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #services-ecommerce .sec10-header-copy {
      max-width: 440px;
      margin: 0;
      color: #b8bec8;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ==========================================
       10.02 COMMERCE EXPERIENCE STUDIO
    ========================================== */

    #services-ecommerce .sec10-studio {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
      align-items: stretch;
      gap: 14px;
    }

    /* CONCEPTUAL STOREFRONT */

    #services-ecommerce .sec10-storefront {
      min-width: 0;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 12px;
      background: #121317;
    }

    #services-ecommerce .sec10-window-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 15px 19px;
      border-bottom: 1px solid rgba(255,255,255,.13);
      background: #1c1d22;
    }

    #services-ecommerce .sec10-window-dots {
      display: flex;
      gap: 6px;
    }

    #services-ecommerce .sec10-window-dots span {
      width: 7px;
      height: 7px;
      border: 1px solid rgba(255,255,255,.4);
      border-radius: 50%;
    }

    #services-ecommerce .sec10-window-address {
      padding: 7px 15px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 5px;
      color: #acb3bd;
      font-size: 10px;
      line-height: 1.4;
    }

    #services-ecommerce .sec10-store-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-height: 460px;
      padding: clamp(20px, 3vw, 33px);
      background: linear-gradient(
        135deg,
        rgba(31,32,36,.98),
        rgba(10,11,14,.98)
      );
    }

    #services-ecommerce .sec10-store-navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
    }

    #services-ecommerce .sec10-store-brand {
      color: #fff;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -.045em;
    }

    #services-ecommerce .sec10-store-nav-lines {
      display: flex;
      gap: 8px;
    }

    #services-ecommerce .sec10-store-nav-lines span {
      width: 24px;
      height: 3px;
      border-radius: 3px;
      background: rgba(255,255,255,.28);
    }

    #services-ecommerce .sec10-products {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 11px;
      flex: 1;
    }

    #services-ecommerce .sec10-product {
      display: flex;
      flex-direction: column;
      min-width: 0;
      padding: 11px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 8px;
      background: rgba(255,255,255,.035);
    }

    #services-ecommerce .sec10-product-visual {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 150px;
      margin-bottom: 15px;
      overflow: hidden;
      border-radius: 6px;
      background:
        linear-gradient(145deg, #34353b, #1a1b20);
    }

    #services-ecommerce .sec10-product-object {
      width: 60%;
      max-width: 93px;
      aspect-ratio: 4/5;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 13px 13px 7px 7px;
      background:
        linear-gradient(
          140deg,
          rgba(255,255,255,.23),
          rgba(255,255,255,.035)
        );
      box-shadow: 12px 15px 28px rgba(0,0,0,.25);
      transform: rotate(-8deg);
    }

    #services-ecommerce .sec10-product:nth-child(2)
    .sec10-product-object {
      width: 68%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      transform: rotate(0deg);
    }

    #services-ecommerce .sec10-product:nth-child(3)
    .sec10-product-object {
      width: 55%;
      aspect-ratio: 3/5;
      border-radius: 5px;
      transform: rotate(7deg);
    }

    #services-ecommerce .sec10-product-label {
      color: #e5e7eb;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.5;
    }

    #services-ecommerce .sec10-product-meta {
      display: block;
      margin-top: 5px;
      color: #a7adb7;
      font-size: 10px;
      line-height: 1.5;
    }

    #services-ecommerce .sec10-store-bottom {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,.13);
      color: #afb5be;
      font-size: 10px;
      letter-spacing: .05em;
    }

    /* RIGHT — COMMERCE EDITORIAL */

    #services-ecommerce .sec10-studio-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 35px;
      min-width: 0;
      padding: clamp(24px,3vw,37px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background:
        linear-gradient(
          145deg,
          rgba(27,28,32,.96),
          rgba(10,11,14,.96)
        );
    }

    #services-ecommerce .sec10-info-label {
      color: #abb2bd;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-ecommerce .sec10-studio-info h3 {
      margin: 0 0 18px;
      color: #fff !important;
      font-size: clamp(23px,2.6vw,34px);
      font-weight: 600;
      line-height: 1.28;
      letter-spacing: -.03em;
    }

    #services-ecommerce .sec10-studio-info p {
      margin: 0 0 14px;
      color: #b6bdc7;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-ecommerce .sec10-info-footer {
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.14);
    }

    #services-ecommerce .sec10-info-footer strong {
      display: block;
      margin-bottom: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
    }

    #services-ecommerce .sec10-info-footer span {
      color: #aeb5bf;
      font-size: 12px;
      line-height: 1.75;
    }

    /* ==========================================
       10.03 CUSTOMER PURCHASE JOURNEY
    ========================================== */

    #services-ecommerce .sec10-journey-header {
      display: grid;
      grid-template-columns: minmax(0,.8fr) minmax(0,1fr);
      align-items: end;
      gap: 32px;
      margin: 45px 0 24px;
    }

    #services-ecommerce .sec10-journey-header h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,33px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-ecommerce .sec10-journey-header p {
      margin: 0;
      color: #b5bdc7;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-ecommerce .sec10-journey {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      gap: 0;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
      overflow: hidden;
    }

    #services-ecommerce .sec10-journey-step {
      display: grid;
      grid-template-columns: 100px minmax(0,.6fr) minmax(0,1fr);
      align-items: center;
      gap: 25px;
      min-width: 0;
      padding: 26px 30px;
      border-bottom: 1px solid rgba(255,255,255,.13);
    }

    #services-ecommerce .sec10-journey-step:last-child {
      border-bottom: none;
    }

    #services-ecommerce .sec10-step-index {
      color: #9ca4af;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .06em;
    }

    #services-ecommerce .sec10-journey-step h4 {
      margin: 0;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-ecommerce .sec10-journey-step p {
      margin: 0;
      color: #b3bac4;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ==========================================
       10.04 SPECIALIST SERVICE INDEX
    ========================================== */

    #services-ecommerce .sec10-specialists {
      margin-top: 38px;
    }

    #services-ecommerce .sec10-specialists-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 20px;
      margin-bottom: 19px;
    }

    #services-ecommerce .sec10-specialists-header h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.4vw,31px);
      font-weight: 600;
      line-height: 1.3;
    }

    #services-ecommerce .sec10-specialists-header span {
      color: #a4aab5;
      font-size: 10px;
      letter-spacing: .1em;
      white-space: nowrap;
    }

    #services-ecommerce .sec10-services-list {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 12px;
    }

    #services-ecommerce .sec10-service {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      align-items: center;
      min-width: 0;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 10px;
      background: rgba(12,13,16,.93);
      text-decoration: none;
      transition:
        border-color .2s ease,
        background-color .2s ease;
    }

    #services-ecommerce .sec10-service h4 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-ecommerce .sec10-service p {
      margin: 0;
      color: #adb5bf;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-ecommerce .sec10-service svg {
      width: 17px;
      height: 17px;
      color: #d4d7dc;
      flex-shrink: 0;
      transform: rotate(-45deg);
    }

    /* ==========================================
       10.05 CONVERSION CTA
    ========================================== */

    #services-ecommerce .sec10-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(23,24,28,.94);
    }

    #services-ecommerce .sec10-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-ecommerce .sec10-footer p {
      max-width: 700px;
      margin: 0;
      color: #b6bdc6;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-ecommerce .sec10-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-ecommerce .sec10-button svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #services-ecommerce .sec10-service:hover {
        border-color: rgba(255,255,255,.36);
        background: rgba(25,26,30,.96);
      }

      #services-ecommerce .sec10-button:hover {
        background: #facc15;
      }
    }

    #services-ecommerce a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-ecommerce .sec10-studio {
        grid-template-columns: 1fr;
      }

      #services-ecommerce .sec10-studio-info {
        gap: 22px;
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-ecommerce .sec10-shell {
        padding-inline: 18px;
      }

      #services-ecommerce .sec10-header,
      #services-ecommerce .sec10-journey-header {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      #services-ecommerce .sec10-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-ecommerce .sec10-header-copy {
        font-size: 13px;
      }

      #services-ecommerce .sec10-store-content {
        padding: 18px;
        min-height: 350px;
      }

      #services-ecommerce .sec10-products {
        gap: 7px;
      }

      #services-ecommerce .sec10-product {
        padding: 7px;
      }

      #services-ecommerce .sec10-product-visual {
        min-height: 105px;
      }

      #services-ecommerce .sec10-product-label {
        font-size: 9px;
      }

      #services-ecommerce .sec10-product-meta {
        font-size: 8px;
      }

      #services-ecommerce .sec10-studio-info {
        padding: 23px;
      }

      #services-ecommerce .sec10-studio-info h3 {
        font-size: 26px;
      }

      #services-ecommerce .sec10-journey-step {
        grid-template-columns: 45px minmax(0,1fr);
        gap: 11px 17px;
        padding: 20px;
      }

      #services-ecommerce .sec10-journey-step p {
        grid-column: 2;
      }

      #services-ecommerce .sec10-journey-step h4 {
        font-size: 17px;
      }

      #services-ecommerce .sec10-specialists-header {
        align-items: flex-start;
        flex-direction: column;
      }

      #services-ecommerce .sec10-services-list {
        grid-template-columns: 1fr;
      }

      #services-ecommerce .sec10-service {
        padding: 21px;
      }

      #services-ecommerce .sec10-footer {
        grid-template-columns: 1fr;
        padding: 23px;
      }

      #services-ecommerce .sec10-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #services-ecommerce .sec10-service,
      #services-ecommerce .sec10-button {
        transition: none;
      }
    }
  `}</style>

  <div className="sec10-shell">

    {/* 10.01 — SECTION INTRODUCTION */}

    <header className="sec10-header">
      <div>
        <span className="sec10-eyebrow">
          10 / E-COMMERCE MARKETING & PRODUCT GROWTH
        </span>

        <h2
          id="sec10-heading"
          className="sec10-heading"
        >
          Getting Products Online Is One Thing.
          Getting Customers to Choose Them Is Another.
        </h2>
      </div>

      <p className="sec10-header-copy">
        Online commerce involves more than a product
        catalogue and a checkout button. Customers
        compare options, evaluate product information,
        consider delivery and pricing, and decide
        whether they trust the buying experience.
        Our e-commerce marketing approach connects
        discovery, advertising, website experience
        and customer communication.
      </p>
    </header>

    {/* 10.02 — CONCEPTUAL COMMERCE STOREFRONT */}

    <div className="sec10-studio">

      <div className="sec10-storefront">

        <div className="sec10-window-top">
          <div
            className="sec10-window-dots"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <span className="sec10-window-address">
            your-store.example
          </span>
        </div>

        <div className="sec10-store-content">

          <div className="sec10-store-navigation">
            <span className="sec10-store-brand">
              YOUR STORE
            </span>

            <div
              className="sec10-store-nav-lines"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* ABSTRACT PRODUCT PREVIEW — NO FAKE PRODUCTS */}

          <div className="sec10-products">

            {[
              {
                name: "Product Discovery",
                meta: "Visibility & Relevance"
              },
              {
                name: "Product Experience",
                meta: "Information & Usability"
              },
              {
                name: "Customer Action",
                meta: "Confidence & Conversion"
              }
            ].map((product) => (
              <div
                className="sec10-product"
                key={product.name}
              >
                <div className="sec10-product-visual">
                  <div
                    className="sec10-product-object"
                    aria-hidden="true"
                  />
                </div>

                <span className="sec10-product-label">
                  {product.name}
                </span>

                <span className="sec10-product-meta">
                  {product.meta}
                </span>
              </div>
            ))}

          </div>

          <div className="sec10-store-bottom">
            <span>
              DISCOVERY / EXPERIENCE / PURCHASE
            </span>

            <span>
              COMMERCE CONCEPT
            </span>
          </div>

        </div>

      </div>

      {/* RIGHT — BUSINESS PERSPECTIVE */}

      <article className="sec10-studio-info">

        <span className="sec10-info-label">
          THE BUSINESS OF ONLINE COMMERCE
        </span>

        <div>
          <h3>
            Every Product Needs a Clear Path
            From Discovery to Decision.
          </h3>

          <p>
            A customer might first encounter your
            product through a Google search,
            Shopping advertisement, social media
            campaign or online recommendation.
          </p>

          <p>
            What happens afterwards matters just
            as much. Product pages should provide
            useful information, the store should
            be easy to navigate, and the checkout
            experience should reduce avoidable
            confusion.
          </p>

          <p>
            Marketing can create interest,
            but the buying experience plays
            an important role in whether that
            interest becomes a purchase.
          </p>
        </div>

        <div className="sec10-info-footer">
          <strong>
            One Connected Commerce Experience.
          </strong>

          <span>
            Product marketing, advertising,
            web development and measurement
            should support the same customer journey.
          </span>
        </div>

      </article>

    </div>

    {/* 10.03 — PURCHASE JOURNEY */}

    <div className="sec10-journey-header">
      <h3>
        Understanding the Online Purchase Journey.
      </h3>

      <p>
        Customers rarely move from discovering a product
        to purchasing without considering other factors.
        Understanding the stages of the buying journey
        helps businesses make better marketing and
        website decisions.
      </p>
    </div>

    <div className="sec10-journey">
      {[
        {
          n: "01 / DISCOVERY",
          title: "Make Products Discoverable",
          description:
            "Use relevant search visibility, product information, advertising and content to help potential customers find suitable products."
        },
        {
          n: "02 / EVALUATION",
          title: "Help Customers Compare",
          description:
            "Provide clear product descriptions, useful images, specifications, policies and information that supports informed choices."
        },
        {
          n: "03 / PURCHASE",
          title: "Reduce Buying Friction",
          description:
            "Create understandable navigation, visible next steps, mobile-friendly product pages and a practical checkout experience."
        },
        {
          n: "04 / AFTER PURCHASE",
          title: "Build an Ongoing Relationship",
          description:
            "Use appropriate email communication, useful support information and customer feedback to improve future experiences."
        }
      ].map((step) => (
        <article
          className="sec10-journey-step"
          key={step.n}
        >
          <span className="sec10-step-index">
            {step.n}
          </span>

          <h4>{step.title}</h4>

          <p>{step.description}</p>
        </article>
      ))}
    </div>

    {/* 10.04 — SPECIALIST COMMERCE SERVICES */}

    <div className="sec10-specialists">

      <div className="sec10-specialists-header">
        <h3>
          Explore Our E-Commerce Capabilities.
        </h3>

        <span>
          COMMERCE / MEDIA / TECHNOLOGY
        </span>
      </div>

      <nav
        className="sec10-services-list"
        aria-label="E-commerce marketing services"
      >
        {[
          {
            title: "E-Commerce Marketing",
            description:
              "Digital marketing strategies, product promotion and customer acquisition planning for online retailers.",
            url: "/services/ecommerce-marketing"
          },
          {
            title: "E-Commerce Website Development",
            description:
              "Online store design, product catalogue experiences, responsive layouts and commerce functionality.",
            url: "/services/web-design-development/ecommerce"
          },
          {
            title: "Google Shopping Advertising",
            description:
              "Product-focused Google Ads campaigns, Merchant Center considerations and shopping visibility.",
            url: "/services/ppc-google-ads/google-shopping"
          },
          {
            title: "Product Marketing",
            description:
              "Product positioning, promotional messaging, launch communication and offer presentation.",
            url: "/services/product-marketing"
          },
          {
            title: "Analytics & Reporting",
            description:
              "Measurement planning, website events, campaign performance and customer journey analysis.",
            url: "/services/analytics-reporting"
          }
        ].map((service) => (
          <Link
            key={service.url}
            to={service.url}
            className="sec10-service"
          >
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>

            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </div>

    {/* 10.05 — CLOSING CTA */}

    <div className="sec10-footer">
      <div>
        <h3>
          Building an Online Store or Improving
          Your E-Commerce Marketing?
        </h3>

        <p>
          Whether you're launching an e-commerce
          business or reviewing an existing store,
          let's discuss your products, customers,
          marketing channels and buying experience.
        </p>
      </div>

      <Link
        to="/services/ecommerce-marketing"
        className="sec10-button"
      >
        Explore E-Commerce Marketing
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 10 ================= */}









{/* ============================================================
   SECTION 11 — ANALYTICS & MARKETING INTELLIGENCE
   INCHTOMILEZ / SERVICES PAGE

   11.01 Editorial Introduction
   11.02 Analytics Command Centre
   11.03 Measurement Framework
   11.04 Reporting & Decision Intelligence
   11.05 Conversion CTA

   DESIGN:
   - Analytics Dashboard Composition
   - Illustrative Measurement Visualization
   - Structured Reporting Framework
   - Editorial Decision Panel

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No additional dependencies
============================================================ */}

<section
  id="services-analytics"
  aria-labelledby="san-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-analytics,
    #services-analytics * {
      box-sizing: border-box;
    }

    #services-analytics .san-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding-inline: 24px;
      margin-inline: auto;
    }

    /* ========================================
       INTRODUCTION
    ======================================== */

    #services-analytics .san-heading-area {
      display: grid;
      grid-template-columns: minmax(0,1.12fr) minmax(0,.88fr);
      align-items: end;
      gap: 42px;
      margin-bottom: 39px;
    }

    #services-analytics .san-eyebrow {
      display: block;
      margin: 0 0 18px;
      color: #abb2bd;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    #services-analytics .san-heading {
      max-width: 750px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(29px,3.2vw,43px);
      font-weight: 600;
      line-height: 1.19;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #services-analytics .san-intro {
      max-width: 440px;
      margin: 0;
      color: #b8bec8;
      font-size: 14px;
      line-height: 1.9;
    }

    /* ========================================
       ANALYTICS DASHBOARD COMPOSITION
    ======================================== */

    #services-analytics .san-console {
      padding: clamp(20px,3vw,34px);
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 13px;
      background: linear-gradient(
        140deg,
        rgba(27,28,33,.96),
        rgba(9,10,13,.98)
      );
    }

    #services-analytics .san-console-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 23px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255,255,255,.13);
    }

    #services-analytics .san-console-title {
      color: #e4e6ea;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .04em;
    }

    #services-analytics .san-console-meta {
      color: #949ba6;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
    }

    /* DASHBOARD: MAIN VISUAL + SIDEBAR */

    #services-analytics .san-dashboard {
      display: grid;
      grid-template-columns: minmax(0,1.3fr) minmax(0,.7fr);
      gap: 13px;
      min-width: 0;
    }

    #services-analytics .san-chart-panel {
      min-width: 0;
      display: flex;
      flex-direction: column;
      padding: 25px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 10px;
      background: rgba(8,9,12,.78);
    }

    #services-analytics .san-chart-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 21px;
    }

    #services-analytics .san-chart-heading h3 {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.35;
    }

    #services-analytics .san-chart-heading p {
      margin: 0;
      color: #aab1bc;
      font-size: 11px;
      line-height: 1.7;
    }

    #services-analytics .san-chart-tag {
      padding: 7px 10px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 6px;
      color: #b8bec7;
      font-size: 10px;
      font-weight: 600;
    }

    /* ILLUSTRATIVE BAR VISUAL */

    #services-analytics .san-chart {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
      min-height: 270px;
      padding: 22px 9px 0;
      border-bottom: 1px solid rgba(255,255,255,.2);
      background: repeating-linear-gradient(
        to top,
        transparent 0,
        transparent 24%,
        rgba(255,255,255,.055) calc(24% + 1px),
        transparent calc(24% + 2px),
        transparent 25%
      );
    }

    #services-analytics .san-chart-column {
      flex: 1;
      height: 100%;
      min-width: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    #services-analytics .san-chart-bar {
      display: block;
      width: min(60%,36px);
      height: var(--bar-height);
      min-height: 16px;
      border: 1px solid rgba(255,255,255,.28);
      border-radius: 5px 5px 0 0;
      background: linear-gradient(
        180deg,
        rgba(255,255,255,.55),
        rgba(255,255,255,.11)
      );
    }

    #services-analytics .san-chart-labels {
      display: grid;
      grid-template-columns: repeat(8,minmax(0,1fr));
      gap: 8px;
      padding: 12px 9px 0;
    }

    #services-analytics .san-chart-labels span {
      text-align: center;
      color: #9299a4;
      font-size: 10px;
    }

    #services-analytics .san-chart-note {
      margin: 22px 0 0;
      color: #aeb5c0;
      font-size: 11px;
      line-height: 1.7;
    }

    /* MEASUREMENT SIDEBAR */

    #services-analytics .san-dashboard-side {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      gap: 12px;
    }

    #services-analytics .san-metric {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 22px;
      min-width: 0;
      padding: 23px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 10px;
      background: rgba(11,12,15,.9);
    }

    #services-analytics .san-metric-label {
      display: block;
      color: #aab1bb;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #services-analytics .san-metric h4 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.35;
    }

    #services-analytics .san-metric p {
      margin: 0;
      color: #b0b7c2;
      font-size: 12px;
      line-height: 1.8;
    }

    /* ========================================
       MEASUREMENT FRAMEWORK
    ======================================== */

    #services-analytics .san-framework-header {
      display: grid;
      grid-template-columns: minmax(0,.85fr) minmax(0,1fr);
      align-items: end;
      gap: 32px;
      margin: 44px 0 23px;
    }

    #services-analytics .san-framework-header h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-analytics .san-framework-header p {
      margin: 0;
      color: #b4bbc5;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-analytics .san-framework {
      display: grid;
      grid-template-columns: repeat(4,minmax(0,1fr));
      gap: 12px;
    }

    #services-analytics .san-framework-step {
      min-width: 0;
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
      padding: 23px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 10px;
      background: rgba(12,13,16,.92);
    }

    #services-analytics .san-framework-index {
      color: #a2a9b3;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .05em;
    }

    #services-analytics .san-framework-step h4 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-analytics .san-framework-step p {
      margin: 0;
      color: #aeb5c0;
      font-size: 12px;
      line-height: 1.85;
    }

    /* ========================================
       DECISION INTELLIGENCE EDITORIAL
    ======================================== */

    #services-analytics .san-decisions {
      display: grid;
      grid-template-columns: minmax(0,.78fr) minmax(0,1fr);
      gap: 34px;
      align-items: center;
      margin-top: 14px;
      padding: clamp(24px,3vw,37px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 11px;
      background: rgba(22,23,27,.93);
    }

    #services-analytics .san-decisions-label {
      display: block;
      margin-bottom: 13px;
      color: #a9b0ba;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-analytics .san-decisions h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: -.03em;
    }

    #services-analytics .san-decisions p {
      margin: 0 0 15px;
      color: #b8bec8;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-analytics .san-decisions p:last-child {
      margin-bottom: 0;
    }

    /* ========================================
       CLOSING CTA
    ======================================== */

    #services-analytics .san-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-analytics .san-footer h3 {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-analytics .san-footer p {
      max-width: 700px;
      margin: 0;
      color: #b4bbc5;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-analytics .san-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-analytics .san-button svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #services-analytics .san-button:hover {
        background: #facc15;
      }
    }

    #services-analytics a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-analytics .san-dashboard {
        grid-template-columns: 1fr;
      }

      #services-analytics .san-dashboard-side {
        grid-template-columns: repeat(3,minmax(0,1fr));
      }

      #services-analytics .san-framework {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-analytics .san-shell {
        padding-inline: 18px;
      }

      #services-analytics .san-heading-area,
      #services-analytics .san-framework-header,
      #services-analytics .san-decisions {
        grid-template-columns: minmax(0,1fr);
        gap: 18px;
      }

      #services-analytics .san-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-analytics .san-intro {
        font-size: 13px;
      }

      #services-analytics .san-console {
        padding: 16px;
      }

      #services-analytics .san-chart-panel {
        padding: 18px;
      }

      #services-analytics .san-chart {
        min-height: 190px;
        gap: 6px;
      }

      #services-analytics .san-chart-labels {
        gap: 5px;
      }

      #services-analytics .san-dashboard-side {
        grid-template-columns: 1fr;
      }

      #services-analytics .san-metric {
        gap: 17px;
        padding: 20px;
      }

      #services-analytics .san-framework {
        grid-template-columns: 1fr;
      }

      #services-analytics .san-framework-step {
        min-height: 0;
        padding: 22px;
        gap: 24px;
      }

      #services-analytics .san-decisions {
        padding: 23px;
      }

      #services-analytics .san-footer {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #services-analytics .san-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #services-analytics .san-button {
        transition: none;
      }
    }
  `}</style>

  <div className="san-shell">

    {/* 11.01 — EDITORIAL INTRODUCTION */}

    <header className="san-heading-area">
      <div>
        <span className="san-eyebrow">
          11 / ANALYTICS & MARKETING INTELLIGENCE
        </span>

        <h2
          id="san-heading"
          className="san-heading"
        >
          Data Means Very Little Until It
          Helps You Make a Better Decision.
        </h2>
      </div>

      <p className="san-intro">
        Marketing generates information across
        advertising platforms, websites, search engines
        and customer interactions. The challenge is
        understanding what that information means.
        InchToMilez approaches analytics and reporting
        as tools for clearer marketing decisions,
        not simply a collection of dashboard numbers.
      </p>
    </header>

    {/* 11.02 — ANALYTICS COMMAND CENTRE */}

    <div className="san-console">

      <div className="san-console-top">
        <span className="san-console-title">
          MARKETING INTELLIGENCE / OVERVIEW
        </span>

        <span className="san-console-meta">
          ILLUSTRATIVE MEASUREMENT MODEL
        </span>
      </div>

      <div className="san-dashboard">

        {/* LEFT — CONCEPTUAL CHART */}

        <div className="san-chart-panel">
          <div className="san-chart-heading">
            <div>
              <h3>Understanding Performance Trends</h3>
              <p>
                Illustrative visualization — not live
                client or campaign results.
              </p>
            </div>

            <span className="san-chart-tag">
              TREND VIEW
            </span>
          </div>

          <div
            className="san-chart"
            role="img"
            aria-label="Illustrative bar chart showing an example of changing marketing activity across eight periods, not actual campaign data"
          >
            {[
              "38%",
              "54%",
              "47%",
              "68%",
              "62%",
              "76%",
              "71%",
              "88%"
            ].map((height, index) => (
              <div
                className="san-chart-column"
                key={index}
              >
                <span
                  className="san-chart-bar"
                  style={
                    {
                      "--bar-height": height
                    } as React.CSSProperties
                  }
                />
              </div>
            ))}
          </div>

          <div className="san-chart-labels">
            {[
              "P1", "P2", "P3", "P4",
              "P5", "P6", "P7", "P8"
            ].map((period) => (
              <span key={period}>
                {period}
              </span>
            ))}
          </div>

          <p className="san-chart-note">
            A useful report connects changing trends
            with campaign activity, website events,
            channel context and the business objective.
          </p>
        </div>

        {/* RIGHT — MEASUREMENT AREAS */}

        <div className="san-dashboard-side">
          {[
            {
              label: "01 / VISIBILITY",
              heading: "Reach & Discovery",
              description:
                "Understand how audiences encounter the brand across search results, advertising and content."
            },
            {
              label: "02 / ENGAGEMENT",
              heading: "Visitor Behaviour",
              description:
                "Study relevant interactions, website navigation and how visitors engage with content or offers."
            },
            {
              label: "03 / ACTION",
              heading: "Conversions & Enquiries",
              description:
                "Measure meaningful actions such as enquiries, form submissions, calls and eligible purchase events."
            }
          ].map((metric) => (
            <article
              className="san-metric"
              key={metric.label}
            >
              <span className="san-metric-label">
                {metric.label}
              </span>

              <div>
                <h4>{metric.heading}</h4>
                <p>{metric.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>

    {/* 11.03 — MEASUREMENT FRAMEWORK */}

    <div className="san-framework-header">
      <h3>
        What Should Marketing Measurement Actually Do?
      </h3>

      <p>
        A practical measurement plan defines what
        matters, collects relevant information,
        interprets it in context and supports
        better decisions. The tools and indicators
        depend on the business and the campaigns
        being evaluated.
      </p>
    </div>

    <div className="san-framework">
      {[
        {
          number: "01 / OBJECTIVES",
          title: "Define the Right Metrics",
          description:
            "Identify relevant measures such as qualified enquiries, purchase events, organic discovery or customer engagement based on the business goal."
        },
        {
          number: "02 / TRACKING",
          title: "Establish Measurement",
          description:
            "Review analytics implementation, important website events, conversion definitions and applicable privacy or consent requirements."
        },
        {
          number: "03 / ANALYSIS",
          title: "Understand the Context",
          description:
            "Compare performance over meaningful periods while considering campaign changes, seasonality, data limitations and customer behaviour."
        },
        {
          number: "04 / LEARNING",
          title: "Turn Findings Into Actions",
          description:
            "Use reporting to identify opportunities, investigate problems and decide what should be tested, improved or prioritised next."
        }
      ].map((step) => (
        <article
          className="san-framework-step"
          key={step.number}
        >
          <span className="san-framework-index">
            {step.number}
          </span>

          <div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </article>
      ))}
    </div>

    {/* 11.04 — REPORTING & DECISION INTELLIGENCE */}

    <div className="san-decisions">

      <div>
        <span className="san-decisions-label">
          FROM REPORTS TO RECOMMENDATIONS
        </span>

        <h3>
          A Good Report Should Answer
          More Than “What Happened?”
        </h3>
      </div>

      <div>
        <p>
          Useful marketing reporting considers
          which activities contributed to the
          objective, which audiences responded
          and where visitors may have encountered
          friction in their journey.
        </p>

        <p>
          It should also explain the limits of
          the available data. Tracking systems,
          attribution models and advertising
          platforms do not provide a perfect view
          of every customer decision.
        </p>

        <p>
          Our approach focuses on presenting
          findings in understandable language
          and connecting them to practical
          recommendations for future campaigns,
          content, websites and budgets.
        </p>
      </div>

    </div>

    {/* 11.05 — FINAL CTA */}

    <div className="san-footer">
      <div>
        <h3>
          Want a Clearer View of Your Marketing?
        </h3>

        <p>
          Whether you need help with reporting,
          conversion tracking or understanding
          your existing campaign data, let's discuss
          which measurements are meaningful for
          your business.
        </p>
      </div>

      <Link
        to="/services/analytics-reporting"
        className="san-button"
      >
        Explore Analytics Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

</section>

{/* ================= END SECTION 11 ================= */}










{/* ============================================================
   SECTION 12 — INTEGRATED MARKETING SOLUTIONS
   INCHTOMILEZ / SERVICES PAGE

   12.01 Editorial Introduction
   12.02 Business Challenge Navigator
   12.03 Connected Service Combinations
   12.04 Strategy-to-Execution Summary
   12.05 Conversion CTA

   Layout: Full-width Editorial + Interactive Solution Rows
   No repeated bento grid or dashboard
   No new dependencies

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"
============================================================ */}

<section
  id="services-integrated-solutions"
  aria-labelledby="sis-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-integrated-solutions,
    #services-integrated-solutions * {
      box-sizing: border-box;
    }

    #services-integrated-solutions .sis-shell {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    /* 12.01 — INTRO */

    #services-integrated-solutions .sis-header {
      display: grid;
      grid-template-columns: minmax(0,1.2fr) minmax(0,.8fr);
      align-items: end;
      gap: 42px;
      margin-bottom: 40px;
    }

    #services-integrated-solutions .sis-eyebrow {
      margin: 0 0 17px;
      color: #abb1bb;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-integrated-solutions .sis-heading {
      max-width: 800px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(30px,3.35vw,45px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.19;
      text-wrap: balance;
    }

    #services-integrated-solutions .sis-lead {
      max-width: 440px;
      margin: 0;
      color: #b8bec8;
      font-size: 14px;
      line-height: 1.9;
    }

    /* 12.02 — DIRECTORY CONTAINER */

    #services-integrated-solutions .sis-directory {
      border-top: 1px solid rgba(255,255,255,.2);
    }

    #services-integrated-solutions .sis-solution {
      border-bottom: 1px solid rgba(255,255,255,.15);
      background: transparent;
      transition: background-color .2s ease;
    }

    #services-integrated-solutions .sis-solution[open] {
      background: rgba(24,25,29,.7);
    }

    #services-integrated-solutions .sis-trigger {
      display: grid;
      grid-template-columns:
        55px minmax(0,.9fr) minmax(0,1fr) 40px;
      gap: 24px;
      align-items: center;
      padding: 27px 23px;
      cursor: pointer;
      list-style: none;
    }

    #services-integrated-solutions .sis-trigger::-webkit-details-marker {
      display: none;
    }

    #services-integrated-solutions .sis-trigger::marker {
      content: "";
    }

    #services-integrated-solutions .sis-number {
      color: #a1a7b1;
      font-size: 12px;
      font-weight: 600;
    }

    #services-integrated-solutions .sis-trigger-title {
      display: block;
      margin: 0;
      color: #fff;
      font-size: clamp(20px,2.2vw,28px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-integrated-solutions .sis-trigger-summary {
      color: #aeb5bf;
      font-size: 12px;
      line-height: 1.8;
    }

    #services-integrated-solutions .sis-plus {
      display: flex;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.21);
      border-radius: 50%;
      color: #fff;
      font-size: 24px;
      font-weight: 300;
      transition: transform .25s ease;
    }

    #services-integrated-solutions .sis-solution[open] .sis-plus {
      transform: rotate(45deg);
    }

    /* 12.03 — EXPANDED SOLUTION */

    #services-integrated-solutions .sis-expanded {
      display: grid;
      grid-template-columns: minmax(0,.35fr) minmax(0,.65fr);
      gap: 30px;
      padding: 25px 27px 32px 102px;
      border-top: 1px solid rgba(255,255,255,.11);
    }

    #services-integrated-solutions .sis-perspective {
      min-width: 0;
      padding: 5px 0;
    }

    #services-integrated-solutions .sis-small-label {
      display: block;
      margin-bottom: 14px;
      color: #a3aab4;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #services-integrated-solutions .sis-perspective h3 {
      margin: 0 0 15px;
      color: #fff !important;
      font-size: 22px;
      font-weight: 600;
      line-height: 1.35;
      letter-spacing: -.02em;
    }

    #services-integrated-solutions .sis-perspective p {
      margin: 0 0 18px;
      color: #b5bbc5;
      font-size: 12px;
      line-height: 1.9;
    }

    #services-integrated-solutions .sis-outcome {
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,.15);
    }

    #services-integrated-solutions .sis-outcome strong {
      display: block;
      margin-bottom: 8px;
      color: #e3e5ea;
      font-size: 12px;
      font-weight: 600;
    }

    #services-integrated-solutions .sis-outcome span {
      color: #abb2be;
      font-size: 12px;
      line-height: 1.8;
    }

    /* CONNECTED SERVICE STEPS */

    #services-integrated-solutions .sis-plan {
      min-width: 0;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 10px;
      overflow: hidden;
      background: rgba(9,10,13,.8);
    }

    #services-integrated-solutions .sis-plan-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      padding: 16px 19px;
      border-bottom: 1px solid rgba(255,255,255,.15);
      color: #b6bdc6;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    #services-integrated-solutions .sis-plan-row {
      display: grid;
      grid-template-columns: 29px minmax(0,1fr) 24px;
      align-items: start;
      gap: 15px;
      min-width: 0;
      padding: 17px 19px;
      border-bottom: 1px solid rgba(255,255,255,.1);
      text-decoration: none;
      transition: background-color .2s ease;
    }

    #services-integrated-solutions .sis-plan-row:last-child {
      border-bottom: none;
    }

    #services-integrated-solutions .sis-plan-index {
      color: #969da8;
      font-size: 11px;
      font-weight: 600;
    }

    #services-integrated-solutions .sis-plan-row h4 {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-integrated-solutions .sis-plan-row p {
      margin: 0;
      color: #aeb6c0;
      font-size: 12px;
      line-height: 1.75;
    }

    #services-integrated-solutions .sis-plan-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      color: #d6d9df;
    }

    #services-integrated-solutions .sis-plan-arrow svg {
      width: 15px;
      height: 15px;
      transform: rotate(-45deg);
    }

    /* 12.04 — STRATEGY STATEMENT */

    #services-integrated-solutions .sis-philosophy {
      display: grid;
      grid-template-columns: minmax(0,.9fr) minmax(0,1fr);
      align-items: center;
      gap: 36px;
      margin-top: 34px;
      padding: clamp(25px,3vw,38px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: linear-gradient(
        125deg,
        rgba(28,29,34,.96),
        rgba(11,12,15,.96)
      );
    }

    #services-integrated-solutions .sis-philosophy-label {
      display: block;
      margin-bottom: 15px;
      color: #aeb4bd;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
    }

    #services-integrated-solutions .sis-philosophy h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(24px,2.7vw,35px);
      font-weight: 600;
      line-height: 1.27;
      letter-spacing: -.035em;
    }

    #services-integrated-solutions .sis-philosophy p {
      margin: 0 0 15px;
      color: #b8bec7;
      font-size: 13px;
      line-height: 1.9;
    }

    #services-integrated-solutions .sis-philosophy p:last-child {
      margin-bottom: 0;
    }

    /* 12.05 — CTA */

    #services-integrated-solutions .sis-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-integrated-solutions .sis-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-integrated-solutions .sis-footer p {
      max-width: 700px;
      margin: 0;
      color: #b4bbc5;
      font-size: 13px;
      line-height: 1.8;
    }

    #services-integrated-solutions .sis-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-integrated-solutions .sis-button svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #services-integrated-solutions .sis-plan-row:hover {
        background: rgba(255,255,255,.055);
      }

      #services-integrated-solutions .sis-button:hover {
        background: #facc15;
      }
    }

    #services-integrated-solutions summary:focus-visible,
    #services-integrated-solutions a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: -3px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #services-integrated-solutions .sis-expanded {
        grid-template-columns: 1fr;
        gap: 25px;
        padding-left: 28px;
      }

      #services-integrated-solutions .sis-perspective {
        max-width: 700px;
      }

      #services-integrated-solutions .sis-trigger {
        grid-template-columns:
          38px minmax(0,.9fr) minmax(0,1fr) 36px;
        gap: 15px;
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-integrated-solutions .sis-shell {
        padding-inline: 18px;
      }

      #services-integrated-solutions .sis-header {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #services-integrated-solutions .sis-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-integrated-solutions .sis-lead {
        font-size: 13px;
      }

      #services-integrated-solutions .sis-trigger {
        grid-template-columns: 25px minmax(0,1fr) 32px;
        gap: 11px;
        padding: 21px 10px;
      }

      #services-integrated-solutions .sis-number {
        font-size: 10px;
      }

      #services-integrated-solutions .sis-trigger-title {
        font-size: 20px;
      }

      #services-integrated-solutions .sis-trigger-summary {
        grid-column: 2;
        grid-row: 2;
        font-size: 11px;
      }

      #services-integrated-solutions .sis-plus {
        grid-column: 3;
        grid-row: 1;
        width: 32px;
        height: 32px;
        font-size: 20px;
      }

      #services-integrated-solutions .sis-expanded {
        padding: 23px 14px 26px;
      }

      #services-integrated-solutions .sis-perspective h3 {
        font-size: 20px;
      }

      #services-integrated-solutions .sis-plan-row {
        padding: 16px 13px;
        gap: 10px;
        grid-template-columns: 22px minmax(0,1fr) 20px;
      }

      #services-integrated-solutions .sis-plan-row h4 {
        font-size: 14px;
      }

      #services-integrated-solutions .sis-philosophy {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #services-integrated-solutions .sis-footer {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #services-integrated-solutions .sis-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-integrated-solutions .sis-plus,
      #services-integrated-solutions .sis-plan-row,
      #services-integrated-solutions .sis-button {
        transition: none;
      }
    }
  `}</style>

  {/* 12.01 — SECTION INTRODUCTION */}

  <div className="sis-shell">

    <header className="sis-header">
      <div>
        <p className="sis-eyebrow">
          12 / INTEGRATED MARKETING SOLUTIONS
        </p>

        <h2 id="sis-heading" className="sis-heading">
          Your Business Doesn't Need Every Service.
          It Needs the Right Combination.
        </h2>
      </div>

      <p className="sis-lead">
        Different businesses face different challenges.
        Launching a new brand requires different
        priorities from improving search visibility
        or generating more relevant enquiries.
        Explore how multiple InchToMilez services
        can support a single business objective.
      </p>
    </header>

    {/* 12.02 — BUSINESS CHALLENGE NAVIGATOR */}

    <div className="sis-directory">

      {[
        {
          id: "01",
          title: "I Want to Launch a New Brand.",
          summary:
            "Build the identity, digital presence and communication foundations before going to market.",
          detailTitle:
            "Start With a Brand People Can Understand.",
          perspective:
            "A new business needs to communicate who it is, what it offers and why its audience should care. The early priorities often involve positioning, identity, website structure and launch communication.",
          outcome:
            "A clearer brand identity, a practical digital foundation and coordinated launch communication.",
          services: [
            {
              name: "Branding & Identity",
              role:
                "Define brand positioning, visual identity and a consistent communication direction.",
              url: "/services/branding-identity"
            },
            {
              name: "Website Design & Development",
              role:
                "Build an accessible digital destination that explains the new business and its offering.",
              url: "/services/web-design-development"
            },
            {
              name: "Creative Campaigns",
              role:
                "Develop launch messaging and creative assets suited to the brand and target audience.",
              url: "/services/creative-campaigns"
            },
            {
              name: "Digital Marketing",
              role:
                "Select relevant channels to introduce the business and support its early marketing objectives.",
              url: "/services/digital-marketing"
            }
          ]
        },
        {
          id: "02",
          title: "I Want More Relevant Enquiries.",
          summary:
            "Connect search intent, advertising, landing pages and conversion measurement.",
          detailTitle:
            "Find the Gaps Between Interest and Action.",
          perspective:
            "Lead generation involves more than increasing traffic. The offer, audience, campaign message, enquiry process and follow-up experience can all affect the relevance of incoming enquiries.",
          outcome:
            "A more coordinated approach to reaching potential customers, explaining the offering and measuring meaningful enquiries.",
          services: [
            {
              name: "Google Ads & PPC",
              role:
                "Plan search-led campaigns around relevant customer intent and defined advertising objectives.",
              url: "/services/ppc-google-ads"
            },
            {
              name: "Search Engine Optimization",
              role:
                "Improve service-page relevance and strengthen organic discoverability for suitable searches.",
              url: "/services/search-engine-optimization-seo"
            },
            {
              name: "Website Design & Development",
              role:
                "Develop clear landing experiences and straightforward enquiry journeys.",
              url: "/services/web-design-development"
            },
            {
              name: "Analytics & Reporting",
              role:
                "Review conversion events, campaign trends and available indicators of enquiry quality.",
              url: "/services/analytics-reporting"
            }
          ]
        },
        {
          id: "03",
          title: "I Want Stronger Brand Recognition.",
          summary:
            "Make messaging, visual identity and brand visibility more consistent across channels.",
          detailTitle:
            "Give People More Reasons to Recognise You.",
          perspective:
            "Brand recognition develops through consistent communication and relevant exposure over time. Creative direction, content, social media and advertising can each play a different role.",
          outcome:
            "A more recognisable identity and better alignment between the brand's message and its advertising activity.",
          services: [
            {
              name: "Branding & Identity",
              role:
                "Clarify the distinctive features, personality and visual language of the brand.",
              url: "/services/branding-identity"
            },
            {
              name: "Social Media Marketing",
              role:
                "Build a consistent content direction across appropriate social channels.",
              url: "/services/social-media-marketing"
            },
            {
              name: "Video & Media Production",
              role:
                "Translate brand messages into suitable visual and video formats.",
              url: "/services/video-media-production"
            },
            {
              name: "Outdoor & OOH Advertising",
              role:
                "Consider physical media placements where geographic visibility supports the campaign.",
              url: "/services/ooh-advertising"
            }
          ]
        },
        {
          id: "04",
          title: "I Want to Grow My Online Store.",
          summary:
            "Improve product discovery, shopping experiences, promotions and marketing measurement.",
          detailTitle:
            "Support the Journey From Product Discovery to Purchase.",
          perspective:
            "E-commerce growth requires attention to how shoppers find products, evaluate information, navigate the store and complete purchases. Marketing and website experience need to support one another.",
          outcome:
            "More connected product marketing and a clearer basis for improving the online purchase journey.",
          services: [
            {
              name: "E-Commerce Marketing",
              role:
                "Plan relevant marketing activity around products, shoppers and commercial priorities.",
              url: "/services/ecommerce-marketing"
            },
            {
              name: "Google Shopping Ads",
              role:
                "Use product-based search advertising where feed requirements and campaign suitability align.",
              url: "/services/ppc-google-ads/google-shopping"
            },
            {
              name: "E-Commerce Website Development",
              role:
                "Improve the storefront structure, mobile shopping experience and product-page usability.",
              url: "/services/web-design-development/ecommerce"
            },
            {
              name: "Analytics & Reporting",
              role:
                "Review available product, purchase and customer-journey data to guide optimisation.",
              url: "/services/analytics-reporting"
            }
          ]
        }
      ].map((solution, index) => (
        <details
          key={solution.id}
          name="inchtomilez-business-solutions"
          className="sis-solution"
          open={index === 0 ? true : undefined}
        >
          {/* INTERACTIVE SOLUTION SELECTOR */}

          <summary className="sis-trigger">
            <span className="sis-number">
              {solution.id}
            </span>

            <span className="sis-trigger-title">
              {solution.title}
            </span>

            <span className="sis-trigger-summary">
              {solution.summary}
            </span>

            <span className="sis-plus" aria-hidden="true">
              +
            </span>
          </summary>

          {/* CONNECTED SERVICE COMBINATION */}

          <div className="sis-expanded">

            <div className="sis-perspective">
              <span className="sis-small-label">
                THE BUSINESS PERSPECTIVE
              </span>

              <h3>{solution.detailTitle}</h3>

              <p>{solution.perspective}</p>

              <div className="sis-outcome">
                <strong>
                  What the approach aims to create
                </strong>
                <span>{solution.outcome}</span>
              </div>
            </div>

            <div className="sis-plan">
              <div className="sis-plan-title">
                <span>CONNECTED SERVICE MIX</span>
                <span>04 DISCIPLINES</span>
              </div>

              {solution.services.map((service, i) => (
                <Link
                  key={service.url}
                  to={service.url}
                  className="sis-plan-row"
                >
                  <span className="sis-plan-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4>{service.name}</h4>
                    <p>{service.role}</p>
                  </div>

                  <span
                    className="sis-plan-arrow"
                    aria-hidden="true"
                  >
                    <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </details>
      ))}

    </div>

    {/* 12.04 — STRATEGY-TO-EXECUTION STATEMENT */}

    <div className="sis-philosophy">
      <div>
        <span className="sis-philosophy-label">
          OUR INTEGRATED APPROACH
        </span>

        <h3>
          Different Services.
          One Business Objective.
        </h3>
      </div>

      <div>
        <p>
          Integrated marketing does not mean using
          every available service. It means selecting
          disciplines that genuinely support the
          business challenge, then defining how
          those disciplines should work together.
        </p>

        <p>
          The examples above illustrate possible
          service combinations, not fixed packages.
          The right scope depends on business
          priorities, audience needs, existing
          resources, budgets and practical timelines.
        </p>
      </div>
    </div>

    {/* 12.05 — CONVERSION CTA */}

    <div className="sis-footer">
      <div>
        <h3>
          Tell Us the Challenge. We'll Discuss the Approach.
        </h3>

        <p>
          Whether you're launching a business,
          improving marketing performance or
          looking for more connected execution,
          start with the objective — not a service list.
        </p>
      </div>

      <Link
        to="/contact"
        className="sis-button"
      >
        Discuss Your Business
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 12 ================= */}


















{/* ============================================================
   SECTION 13 — HOW WE DELIVER OUR SERVICES
   INCHTOMILEZ / SERVICES PAGE

   13.01 Editorial Header
   13.02 Alternating Project Timeline
   13.03 Scope & Deliverables Summary
   13.04 Project Collaboration Statement
   13.05 Closing CTA

   UI: Alternating Editorial Timeline
   Existing imports: Link, ArrowRight
   No additional packages / no additional H1
============================================================ */}

<section
  id="services-delivery-process"
  aria-labelledby="sdp-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-delivery-process,
    #services-delivery-process * {
      box-sizing: border-box;
    }

    #services-delivery-process .sdp-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding-inline: 24px;
      margin-inline: auto;
    }

    /* -----------------------------------------
       13.01 — EDITORIAL HEADER
    ----------------------------------------- */

    #services-delivery-process .sdp-header {
      display: grid;
      grid-template-columns: minmax(0,1.15fr) minmax(0,.85fr);
      gap: 45px;
      align-items: end;
      margin-bottom: 65px;
    }

    #services-delivery-process .sdp-eyebrow {
      display: block;
      margin-bottom: 17px;
      color: #adb4be;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #services-delivery-process .sdp-heading {
      max-width: 770px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(30px,3.3vw,45px);
      font-weight: 600;
      line-height: 1.18;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #services-delivery-process .sdp-intro {
      max-width: 440px;
      margin: 0;
      color: #b9c0c9;
      font-size: 14px;
      line-height: 1.9;
    }

    /* -----------------------------------------
       13.02 — ALTERNATING PROJECT TIMELINE
    ----------------------------------------- */

    #services-delivery-process .sdp-timeline {
      position: relative;
      display: grid;
      gap: 20px;
    }

    #services-delivery-process .sdp-timeline::before {
      content: "";
      position: absolute;
      top: 28px;
      bottom: 35px;
      left: 50%;
      width: 1px;
      transform: translateX(-50%);
      background: linear-gradient(
        180deg,
        transparent,
        rgba(255,255,255,.34) 7%,
        rgba(255,255,255,.28) 93%,
        transparent
      );
      pointer-events: none;
    }

    #services-delivery-process .sdp-milestone {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0,1fr) 56px minmax(0,1fr);
      gap: 21px;
      align-items: center;
      min-width: 0;
    }

    #services-delivery-process .sdp-marker {
      grid-column: 2;
      grid-row: 1;
      position: relative;
      z-index: 2;
      width: 42px;
      height: 42px;
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.4);
      border-radius: 50%;
      background: #16171b;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }

    #services-delivery-process .sdp-card {
      position: relative;
      min-width: 0;
      padding: clamp(24px,3vw,36px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: linear-gradient(
        145deg,
        rgba(27,28,32,.96),
        rgba(10,11,14,.97)
      );
      transition:
        border-color .25s ease,
        transform .25s ease;
    }

    #services-delivery-process .sdp-milestone:nth-child(odd)
    .sdp-card {
      grid-column: 1;
      grid-row: 1;
    }

    #services-delivery-process .sdp-milestone:nth-child(even)
    .sdp-card {
      grid-column: 3;
      grid-row: 1;
    }

    /* TEXT OPPOSITE EACH TIMELINE CARD */

    #services-delivery-process .sdp-opposite {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    #services-delivery-process .sdp-milestone:nth-child(odd)
    .sdp-opposite {
      grid-column: 3;
      grid-row: 1;
      padding-left: 20px;
    }

    #services-delivery-process .sdp-milestone:nth-child(even)
    .sdp-opposite {
      grid-column: 1;
      grid-row: 1;
      padding-right: 20px;
      text-align: right;
      align-items: flex-end;
    }

    #services-delivery-process .sdp-phase {
      color: #acb3be;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    #services-delivery-process .sdp-opposite-title {
      max-width: 330px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,34px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.27;
    }

    #services-delivery-process .sdp-opposite-copy {
      max-width: 340px;
      margin: 0;
      color: #aeb6c1;
      font-size: 13px;
      line-height: 1.85;
    }

    /* CARD CONTENT */

    #services-delivery-process .sdp-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 13px;
      margin-bottom: 25px;
    }

    #services-delivery-process .sdp-card-label {
      color: #a7aeba;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #services-delivery-process .sdp-card-count {
      color: #8f96a1;
      font-size: 11px;
    }

    #services-delivery-process .sdp-card h3 {
      margin: 0 0 14px;
      color: #fff !important;
      font-size: clamp(20px,2vw,27px);
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: -.025em;
    }

    #services-delivery-process .sdp-card-description {
      margin: 0 0 19px;
      color: #b8bec8;
      font-size: 13px;
      line-height: 1.9;
    }

    #services-delivery-process .sdp-tasks {
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    #services-delivery-process .sdp-tasks li {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      color: #c4c9d1;
      font-size: 12px;
      line-height: 1.75;
    }

    #services-delivery-process .sdp-tasks li::before {
      content: "";
      width: 6px;
      height: 6px;
      flex: 0 0 6px;
      margin-top: 8px;
      border: 1px solid rgba(255,255,255,.7);
      border-radius: 50%;
    }

    /* TANGIBLE OUTPUT */

    #services-delivery-process .sdp-output {
      display: grid;
      gap: 7px;
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,.14);
    }

    #services-delivery-process .sdp-output span {
      color: #989faa;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #services-delivery-process .sdp-output strong {
      color: #e0e3e8;
      font-size: 12px;
      line-height: 1.7;
      font-weight: 600;
    }

    /* -----------------------------------------
       13.03 — DELIVERABLES / EXPECTATIONS
    ----------------------------------------- */

    #services-delivery-process .sdp-expectations {
      margin-top: 50px;
      padding: clamp(24px,3vw,37px);
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 12px;
      background: rgba(21,22,26,.95);
    }

    #services-delivery-process .sdp-expectations-head {
      display: grid;
      grid-template-columns: minmax(0,.85fr) minmax(0,1fr);
      gap: 35px;
      align-items: end;
      margin-bottom: 27px;
    }

    #services-delivery-process .sdp-expectations-head h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(24px,2.7vw,35px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-delivery-process .sdp-expectations-head p {
      margin: 0;
      color: #b7bec8;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-delivery-process .sdp-expectation-grid {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 13px;
    }

    #services-delivery-process .sdp-expectation {
      min-width: 0;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 9px;
      background: rgba(9,10,13,.78);
    }

    #services-delivery-process .sdp-expectation-label {
      display: block;
      margin-bottom: 23px;
      color: #a7aeba;
      font-size: 11px;
      font-weight: 600;
    }

    #services-delivery-process .sdp-expectation h4 {
      margin: 0 0 11px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-delivery-process .sdp-expectation p {
      margin: 0;
      color: #afb7c1;
      font-size: 12px;
      line-height: 1.85;
    }

    /* -----------------------------------------
       13.04 — COLLABORATION STATEMENT
    ----------------------------------------- */

    #services-delivery-process .sdp-collaboration {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,1fr);
      gap: 33px;
      align-items: center;
      margin-top: 15px;
      padding: clamp(25px,3vw,38px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: linear-gradient(
        125deg,
        rgba(28,29,33,.95),
        rgba(11,12,15,.96)
      );
    }

    #services-delivery-process .sdp-collaboration-label {
      display: block;
      margin-bottom: 14px;
      color: #acb3be;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-delivery-process .sdp-collaboration h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(24px,2.6vw,34px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.03em;
    }

    #services-delivery-process .sdp-collaboration p {
      margin: 0 0 14px;
      color: #b9bec8;
      font-size: 13px;
      line-height: 1.9;
    }

    #services-delivery-process .sdp-collaboration p:last-child {
      margin-bottom: 0;
    }

    /* -----------------------------------------
       13.05 — FINAL CTA
    ----------------------------------------- */

    #services-delivery-process .sdp-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-delivery-process .sdp-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-delivery-process .sdp-footer p {
      max-width: 700px;
      margin: 0;
      color: #b3bac5;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-delivery-process .sdp-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      flex-shrink: 0;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition:
        background-color .2s ease,
        transform .2s ease;
    }

    #services-delivery-process .sdp-button svg {
      width: 15px;
      height: 15px;
    }

    @media (hover:hover) and (pointer:fine) {
      #services-delivery-process .sdp-card:hover {
        border-color: rgba(255,255,255,.34);
        transform: translateY(-2px);
      }

      #services-delivery-process .sdp-button:hover {
        background: #facc15;
        transform: translateY(-2px);
      }
    }

    #services-delivery-process a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* -----------------------------------------
       TABLET
    ----------------------------------------- */

    @media (max-width: 900px) {
      #services-delivery-process .sdp-header {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      #services-delivery-process .sdp-intro {
        max-width: 690px;
      }

      #services-delivery-process .sdp-milestone {
        grid-template-columns:
          minmax(0,1fr) 42px minmax(0,1fr);
        gap: 12px;
      }

      #services-delivery-process .sdp-card {
        padding: 22px;
      }

      #services-delivery-process .sdp-opposite-title {
        font-size: 24px;
      }

      #services-delivery-process .sdp-expectation-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
    }

    /* -----------------------------------------
       MOBILE
    ----------------------------------------- */

    @media (max-width: 680px) {
      #services-delivery-process .sdp-shell {
        padding-inline: 18px;
      }

      #services-delivery-process .sdp-header {
        margin-bottom: 37px;
      }

      #services-delivery-process .sdp-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-delivery-process .sdp-intro {
        font-size: 13px;
      }

      #services-delivery-process .sdp-timeline {
        gap: 32px;
      }

      #services-delivery-process .sdp-timeline::before {
        left: 18px;
        top: 17px;
        bottom: 45px;
        transform: none;
      }

      #services-delivery-process .sdp-milestone {
        grid-template-columns: 37px minmax(0,1fr);
        align-items: start;
        gap: 0 15px;
      }

      #services-delivery-process .sdp-marker {
        grid-column: 1;
        grid-row: 1;
        width: 36px;
        height: 36px;
      }

      #services-delivery-process .sdp-milestone:nth-child(odd)
      .sdp-opposite,
      #services-delivery-process .sdp-milestone:nth-child(even)
      .sdp-opposite {
        grid-column: 2;
        grid-row: 1;
        padding: 0;
        text-align: left;
        align-items: flex-start;
      }

      #services-delivery-process .sdp-milestone:nth-child(odd)
      .sdp-card,
      #services-delivery-process .sdp-milestone:nth-child(even)
      .sdp-card {
        grid-column: 2;
        grid-row: 2;
        margin-top: 17px;
      }

      #services-delivery-process .sdp-opposite-title {
        font-size: 22px;
      }

      #services-delivery-process .sdp-opposite-copy {
        font-size: 12px;
      }

      #services-delivery-process .sdp-card {
        padding: 21px;
      }

      #services-delivery-process .sdp-card h3 {
        font-size: 20px;
      }

      #services-delivery-process .sdp-expectations {
        margin-top: 42px;
        padding: 22px;
      }

      #services-delivery-process .sdp-expectations-head {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      #services-delivery-process .sdp-expectation-grid {
        grid-template-columns: 1fr;
      }

      #services-delivery-process .sdp-collaboration {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #services-delivery-process .sdp-footer {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #services-delivery-process .sdp-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-delivery-process .sdp-card,
      #services-delivery-process .sdp-button {
        transition: none;
      }

      #services-delivery-process .sdp-card:hover,
      #services-delivery-process .sdp-button:hover {
        transform: none;
      }
    }
  `}</style>

  <div className="sdp-shell">

    {/* ==============================================
        13.01 — INTRODUCTION
    ============================================== */}

    <header className="sdp-header">
      <div>
        <span className="sdp-eyebrow">
          13 / HOW WE DELIVER OUR SERVICES
        </span>

        <h2 id="sdp-heading" className="sdp-heading">
          From the First Conversation to the
          Final Deliverable. Every Step Has a Purpose.
        </h2>
      </div>

      <p className="sdp-intro">
        Choosing a marketing or advertising agency
        is not just about the services available.
        It's also about how a project is understood,
        planned, executed and reviewed. Our approach
        connects business understanding, relevant
        expertise, practical coordination and
        clear communication throughout the work.
      </p>
    </header>

    {/* ==============================================
        13.02 — ALTERNATING PROJECT TIMELINE
    ============================================== */}

    <div className="sdp-timeline">

      {[
        {
          number: "01",
          phase: "DISCOVERY",
          oppositeTitle: "First, We Understand the Business.",
          oppositeCopy:
            "Before suggesting channels or deliverables, the starting point is the problem the business wants to solve.",
          title: "The Discovery Conversation",
          description:
            "We discuss your offering, target audience, current marketing, competitors, business priorities and practical constraints. This creates context for the recommendations that follow.",
          tasks: [
            "Business objectives and project requirements",
            "Audience, market and competitor context",
            "Existing website, campaigns or brand assets",
            "Budget expectations and project constraints"
          ],
          output:
            "A documented understanding of the challenge and initial project requirements."
        },
        {
          number: "02",
          phase: "DIRECTION",
          oppositeTitle: "Then, We Define What Makes Sense.",
          oppositeCopy:
            "A clear scope helps both teams know what is being proposed, why it matters and what falls outside the engagement.",
          title: "Strategy, Scope & Priorities",
          description:
            "We translate the initial discussion into relevant service recommendations and an achievable scope. Depending on the engagement, this may involve digital strategy, media planning, creative direction or technical requirements.",
          tasks: [
            "Relevant services and recommended approach",
            "Project scope and expected deliverables",
            "Working timelines and key dependencies",
            "Approval points and responsibilities"
          ],
          output:
            "A proposed plan or scope of work for review and agreement."
        },
        {
          number: "03",
          phase: "PREPARATION",
          oppositeTitle: "A Good Plan Needs Good Coordination.",
          oppositeCopy:
            "Marketing activity can involve several disciplines. Planning identifies how those tasks depend on one another.",
          title: "Planning & Preparation",
          description:
            "We organise the information, assets, access requirements and execution steps needed for the agreed project. The work may involve content, design, campaign setup, development or production.",
          tasks: [
            "Creative or content briefing",
            "Channel and delivery planning",
            "Required account access and source materials",
            "Milestones, review stages and coordination"
          ],
          output:
            "A practical execution plan with identified inputs, dependencies and review stages."
        },
        {
          number: "04",
          phase: "CREATION",
          oppositeTitle: "The Work Starts Taking Shape.",
          oppositeCopy:
            "Creative and technical development should reflect the approved direction, not drift into disconnected activities.",
          title: "Creative & Technical Development",
          description:
            "The relevant specialists develop the project components. This can include advertising creative, copy, content, website interfaces, search improvements or media assets.",
          tasks: [
            "Design, writing or production work",
            "Campaign or technical development",
            "Internal coordination between disciplines",
            "Feedback and agreed revisions"
          ],
          output:
            "Developed assets or implementation work ready for the next approval or quality-review stage."
        },
        {
          number: "05",
          phase: "DELIVERY",
          oppositeTitle: "Ready Means More Than Finished.",
          oppositeCopy:
            "Before launch or handover, the work should be reviewed against its agreed requirements.",
          title: "Quality Checks & Launch",
          description:
            "We review relevant elements before the work is published, handed over or activated. Checks vary by service and may include creative accuracy, website functionality, campaign configuration or link and tracking verification.",
          tasks: [
            "Review against approved requirements",
            "Relevant technical or creative checks",
            "Final approval and handover coordination",
            "Publication, deployment or campaign activation"
          ],
          output:
            "Agreed work delivered, launched or handed over, subject to the engagement scope."
        },
        {
          number: "06",
          phase: "REVIEW",
          oppositeTitle: "Delivery Is a Milestone. Learning Is Ongoing.",
          oppositeCopy:
            "For ongoing engagements, reporting and feedback inform the next set of decisions.",
          title: "Reporting, Feedback & Refinement",
          description:
            "Where ongoing support or campaign management is included, we review relevant performance information, discuss feedback and recommend practical improvements. One-time projects may conclude with a final handover.",
          tasks: [
            "Review relevant delivery or performance data",
            "Discuss observations and feedback",
            "Identify possible improvements",
            "Agree on follow-up work when applicable"
          ],
          output:
            "A project closeout or ongoing review with recommendations appropriate to the agreed scope."
        }
      ].map((step, index) => (
        <article
          className="sdp-milestone"
          key={step.number}
        >

          {/* CENTER TIMELINE MARKER */}

          <span
            className="sdp-marker"
            aria-hidden="true"
          >
            {step.number}
          </span>

          {/* EDITORIAL TEXT OPPOSITE THE CARD */}

          <div className="sdp-opposite">
            <span className="sdp-phase">
              {step.phase} / {step.number}
            </span>

            <h3 className="sdp-opposite-title">
              {step.oppositeTitle}
            </h3>

            <p className="sdp-opposite-copy">
              {step.oppositeCopy}
            </p>
          </div>

          {/* DETAILED PROCESS CARD */}

          <div className="sdp-card">

            <div className="sdp-card-top">
              <span className="sdp-card-label">
                PROJECT MILESTONE
              </span>

              <span className="sdp-card-count">
                {String(index + 1).padStart(2, "0")} / 06
              </span>
            </div>

            <h3>{step.title}</h3>

            <p className="sdp-card-description">
              {step.description}
            </p>

            <ul className="sdp-tasks">
              {step.tasks.map((task) => (
                <li key={task}>
                  {task}
                </li>
              ))}
            </ul>

            <div className="sdp-output">
              <span>
                TYPICAL STAGE OUTPUT
              </span>

              <strong>
                {step.output}
              </strong>
            </div>

          </div>

        </article>
      ))}

    </div>

    {/* ==============================================
        13.03 — EXPECTATIONS & DELIVERABLES
    ============================================== */}

    <div className="sdp-expectations">

      <div className="sdp-expectations-head">
        <h3>
          Clear Expectations Make Better Projects.
        </h3>

        <p>
          A website development project, ongoing SEO
          engagement and one-time advertising campaign
          will not have identical requirements. The
          exact scope, outputs, revisions, responsibilities
          and timelines should be agreed for each project.
        </p>
      </div>

      <div className="sdp-expectation-grid">
        {[
          {
            number: "01",
            title: "Defined Deliverables",
            description:
              "Identify what the engagement includes, such as campaign assets, website pages, optimisation tasks, content pieces or reports."
          },
          {
            number: "02",
            title: "Review & Approval Points",
            description:
              "Establish when important work needs client input, feedback or approval so decisions and revisions are properly coordinated."
          },
          {
            number: "03",
            title: "Relevant Communication",
            description:
              "Agree on appropriate updates, responsibilities and review arrangements based on the type and duration of the engagement."
          }
        ].map((item) => (
          <article
            className="sdp-expectation"
            key={item.number}
          >
            <span className="sdp-expectation-label">
              {item.number} / 03
            </span>

            <h4>{item.title}</h4>

            <p>{item.description}</p>
          </article>
        ))}
      </div>

    </div>

    {/* ==============================================
        13.04 — COLLABORATION
    ============================================== */}

    <div className="sdp-collaboration">
      <div>
        <span className="sdp-collaboration-label">
          AN IMPORTANT PART OF OUR APPROACH
        </span>

        <h3>
          A Good Project Is Built With the Client.
          Not Just Delivered to Them.
        </h3>
      </div>

      <div>
        <p>
          The best project decisions need both sides
          of the conversation. Your team understands
          the business, products, customers and
          operational realities. The agency brings
          relevant marketing, creative and technical
          perspectives to the work.
        </p>

        <p>
          Bringing those perspectives together
          makes it easier to review assumptions,
          address practical questions and keep
          the execution aligned with the project's
          agreed objectives.
        </p>
      </div>
    </div>

    {/* ==============================================
        13.05 — CONVERSION CTA
    ============================================== */}

    <div className="sdp-footer">
      <div>
        <h3>
          Have a Project in Mind? Start With the Brief.
        </h3>

        <p>
          Share what your business needs, what you're
          planning and the challenges you want to solve.
          We can discuss the relevant services,
          project scope and possible next steps.
        </p>
      </div>

      <Link
        to="/contact"
        className="sdp-button"
      >
        Discuss Your Project
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>
</section>

{/* ================= END SECTION 13 ================= */}






{/* ============================================================
   SECTION 14 — SERVICES FAQ
   INCHTOMILEZ / SERVICES PAGE

   14.01 Editorial FAQ Introduction
   14.02 Search-Friendly Question Directory
   14.03 Client Guidance
   14.04 Conversion CTA

   UI: Sticky Editorial Introduction + Accordion Directory
   Design: Original Black Theme / Raleway
   Yellow: CTA Buttons Only

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No additional dependencies
============================================================ */}

<section
  id="services-faq"
  aria-labelledby="sfq-heading"
  className="relative isolate border-t border-white/[0.08] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-faq,
    #services-faq * {
      box-sizing: border-box;
    }

    #services-faq .sfq-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding: 0 24px;
      margin: 0 auto;
    }

    /* ======================================
       14.01 — MAIN EDITORIAL LAYOUT
    ====================================== */

    #services-faq .sfq-layout {
      display: grid;
      grid-template-columns:
        minmax(0, .38fr) minmax(0, .62fr);
      align-items: start;
      gap: clamp(32px,5vw,70px);
    }

    #services-faq .sfq-introduction {
      position: sticky;
      top: 105px;
      min-width: 0;
    }

    #services-faq .sfq-eyebrow {
      display: block;
      margin: 0 0 19px;
      color: #abb2bc;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-faq .sfq-heading {
      margin: 0 0 23px;
      color: #fff !important;
      font-size: clamp(29px,3.15vw,43px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.2;
      text-wrap: balance;
    }

    #services-faq .sfq-intro-copy {
      margin: 0 0 17px;
      max-width: 415px;
      color: #b8bec8;
      font-size: 13px;
      line-height: 1.9;
    }

    /* INTRODUCTION SUPPORT PANEL */

    #services-faq .sfq-help {
      margin-top: 32px;
      padding: 23px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 10px;
      background: rgba(21,22,26,.9);
    }

    #services-faq .sfq-help-label {
      display: block;
      margin-bottom: 14px;
      color: #aeb5be;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #services-faq .sfq-help h3 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-faq .sfq-help p {
      margin: 0 0 20px;
      color: #b5bbc5;
      font-size: 12px;
      line-height: 1.85;
    }

    #services-faq .sfq-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 41px;
      padding: 10px 16px;
      border: 1px solid #eab308;
      border-radius: 8px;
      background: #eab308;
      color: #050505;
      text-decoration: none;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #services-faq .sfq-button svg {
      width: 14px;
      height: 14px;
    }

    /* ======================================
       14.02 — FAQ DIRECTORY
    ====================================== */

    #services-faq .sfq-directory {
      min-width: 0;
      border-top: 1px solid rgba(255,255,255,.18);
    }

    #services-faq .sfq-question {
      min-width: 0;
      border-bottom: 1px solid rgba(255,255,255,.14);
      transition: background-color .2s ease;
    }

    #services-faq .sfq-question[open] {
      background: rgba(255,255,255,.025);
    }

    #services-faq .sfq-question summary {
      display: grid;
      grid-template-columns: 32px minmax(0,1fr) 34px;
      gap: 16px;
      align-items: start;
      padding: 23px 10px;
      cursor: pointer;
      list-style: none;
    }

    #services-faq .sfq-question summary::-webkit-details-marker {
      display: none;
    }

    #services-faq .sfq-question summary::marker {
      content: "";
    }

    #services-faq .sfq-question-number {
      padding-top: 3px;
      color: #969da8;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.6;
    }

    #services-faq .sfq-question-text {
      color: #fff;
      font-size: clamp(15px,1.55vw,19px);
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -.015em;
    }

    #services-faq .sfq-expand {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 50%;
      color: #fff;
      font-size: 22px;
      font-weight: 300;
      line-height: 1;
      transition: transform .25s ease;
    }

    #services-faq .sfq-question[open] .sfq-expand {
      transform: rotate(45deg);
    }

    #services-faq .sfq-answer {
      padding: 0 50px 25px 58px;
    }

    #services-faq .sfq-answer p {
      margin: 0 0 13px;
      color: #b9c0ca;
      font-size: 13px;
      line-height: 1.95;
    }

    #services-faq .sfq-answer p:last-child {
      margin-bottom: 0;
    }

    /* ======================================
       14.03 — GUIDANCE STRIP
    ====================================== */

    #services-faq .sfq-guidance {
      display: grid;
      grid-template-columns: minmax(0,.8fr) minmax(0,1fr);
      gap: 30px;
      align-items: center;
      margin-top: 50px;
      padding: clamp(24px,3vw,37px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: linear-gradient(
        135deg,
        rgba(27,28,32,.95),
        rgba(10,11,14,.96)
      );
    }

    #services-faq .sfq-guidance-label {
      display: block;
      margin-bottom: 13px;
      color: #a9b0ba;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #services-faq .sfq-guidance h3 {
      margin: 0;
      color: #fff !important;
      font-size: clamp(23px,2.5vw,32px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #services-faq .sfq-guidance p {
      margin: 0 0 13px;
      color: #b9c0c9;
      font-size: 13px;
      line-height: 1.85;
    }

    #services-faq .sfq-guidance p:last-child {
      margin-bottom: 0;
    }

    /* ======================================
       14.04 — FINAL CTA
    ====================================== */

    #services-faq .sfq-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 15px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
    }

    #services-faq .sfq-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #services-faq .sfq-footer p {
      max-width: 700px;
      margin: 0;
      color: #b5bcc6;
      font-size: 13px;
      line-height: 1.85;
    }

    /* ======================================
       HOVER & ACCESSIBILITY
    ====================================== */

    @media (hover:hover) and (pointer:fine) {
      #services-faq .sfq-button:hover {
        background: #facc15;
      }

      #services-faq .sfq-question:hover {
        background: rgba(255,255,255,.03);
      }
    }

    #services-faq summary:focus-visible,
    #services-faq a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 3px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #services-faq .sfq-layout {
        grid-template-columns: minmax(0,1fr);
        gap: 33px;
      }

      #services-faq .sfq-introduction {
        position: static;
      }

      #services-faq .sfq-help {
        max-width: 600px;
      }
    }

    /* MOBILE */

    @media (max-width: 680px) {
      #services-faq .sfq-shell {
        padding-inline: 18px;
      }

      #services-faq .sfq-heading {
        font-size: clamp(28px,7vw,35px);
      }

      #services-faq .sfq-question summary {
        grid-template-columns: 22px minmax(0,1fr) 30px;
        gap: 11px;
        padding: 21px 6px;
      }

      #services-faq .sfq-question-text {
        font-size: 16px;
      }

      #services-faq .sfq-expand {
        width: 30px;
        height: 30px;
      }

      #services-faq .sfq-answer {
        padding: 0 11px 23px 39px;
      }

      #services-faq .sfq-answer p {
        font-size: 12px;
      }

      #services-faq .sfq-guidance {
        grid-template-columns: 1fr;
        gap: 19px;
        padding: 23px;
      }

      #services-faq .sfq-footer {
        grid-template-columns: 1fr;
        padding: 23px;
      }

      #services-faq .sfq-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #services-faq .sfq-question,
      #services-faq .sfq-expand,
      #services-faq .sfq-button {
        transition: none;
      }
    }
  `}</style>

  <div className="sfq-shell">

    {/* 14.01 — INTRODUCTION */}

    <div className="sfq-layout">

      {/* LEFT — EDITORIAL & CONTACT */}

      <div className="sfq-introduction">
        <span className="sfq-eyebrow">
          14 / FREQUENTLY ASKED QUESTIONS
        </span>

        <h2 id="sfq-heading" className="sfq-heading">
          Before We Work Together,
          Let's Answer the Important Questions.
        </h2>

        <p className="sfq-intro-copy">
          Choosing a digital marketing agency
          involves more than comparing services.
          You also need to understand which
          approach makes sense for your business,
          what a project could involve and how
          results are evaluated.
        </p>

        <p className="sfq-intro-copy">
          Here are answers to common questions
          businesses ask about InchToMilez's
          digital marketing, SEO, advertising,
          branding, content and website
          development services in Indore.
        </p>

        <div className="sfq-help">
          <span className="sfq-help-label">
            NEED SOMETHING MORE SPECIFIC?
          </span>

          <h3>
            Every Business Has Different Questions.
          </h3>

          <p>
            Tell us about your project, objectives
            and existing challenges. We can discuss
            which services and working arrangements
            may be appropriate.
          </p>

          <Link
            to="/contact"
            className="sfq-button"
          >
            Ask Us a Question
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* RIGHT — COMPLETE FAQ DIRECTORY */}

      <div className="sfq-directory">

        {[
          {
            q: "What services does InchToMilez provide?",
            a: [
              "InchToMilez offers a range of digital marketing, advertising, branding, creative and technology services. These include search engine optimization, Google Ads and PPC management, social media marketing, content marketing, brand identity, graphic design, website design and development, e-commerce marketing, outdoor advertising, BTL activations and analytics reporting.",
              "Businesses can explore individual disciplines or discuss a combination of services based on their objectives."
            ]
          },
          {
            q: "How do I know which marketing service my business needs?",
            a: [
              "Start with the business challenge rather than the marketing channel. A company seeking local search visibility may benefit from local SEO, while a business planning an immediate promotional campaign may consider relevant advertising channels.",
              "The most suitable approach depends on your target audience, competitive environment, existing marketing activity, budget and objectives."
            ]
          },
          {
            q: "Does InchToMilez provide digital marketing services in Indore?",
            a: [
              "Yes. InchToMilez is based in Indore and provides digital marketing and related services for businesses looking to strengthen their online presence, communication and marketing activity.",
              "The appropriate project scope depends on the services required and can be discussed during an initial enquiry."
            ]
          },
          {
            q: "Can I hire InchToMilez for one service instead of a complete marketing package?",
            a: [
              "A project may focus on one discipline, such as SEO, website development, branding or Google Ads, or involve several connected services.",
              "The final engagement depends on the project requirements, availability, scope and the work agreed between the business and the agency."
            ]
          },
          {
            q: "How much do digital marketing services cost in Indore?",
            a: [
              "Digital marketing costs vary according to the type of service, project complexity, deliverables, team involvement, advertising requirements and duration of the engagement.",
              "For example, a one-time branding project and ongoing paid advertising management have different cost structures. A proposal should distinguish agency fees from advertising budgets and third-party expenses where applicable."
            ]
          },
          {
            q: "How long does SEO take to produce results?",
            a: [
              "SEO is generally an ongoing process rather than an immediate-result activity. The time needed to observe meaningful changes depends on your website's technical condition, content quality, competition, search demand and the work being undertaken.",
              "No agency can responsibly guarantee a specific search ranking or fixed timeline for organic traffic growth."
            ]
          },
          {
            q: "Does InchToMilez manage Google Ads and PPC campaigns?",
            a: [
              "Google Ads and PPC are among the agency's listed services. Typical work can include campaign planning, keyword and audience research, ad messaging, campaign configuration, measurement and ongoing optimisation where included in the agreed scope.",
              "Advertising spend, management fees and the availability of specific campaign services should be confirmed during project scoping."
            ]
          },
          {
            q: "Can you help improve the quality of enquiries from advertising?",
            a: [
              "Enquiry relevance can be influenced by audience targeting, search intent, ad messaging, offer clarity, landing page experience and the questions used in enquiry forms.",
              "Reviewing those elements alongside available conversion information may help identify opportunities to improve campaign relevance. Better-quality enquiries cannot be guaranteed."
            ]
          },
          {
            q: "Does InchToMilez offer website design and development?",
            a: [
              "Yes. The service portfolio includes website design and development, WordPress development, e-commerce website development and related digital experiences.",
              "A website project can involve planning its structure, user interface, responsive layouts, technical functionality and search-friendly content foundations. The precise technologies and features depend on the agreed requirements."
            ]
          },
          {
            q: "Can I combine branding, website development and digital marketing?",
            a: [
              "Yes. These services can complement one another. Branding establishes identity and messaging, website development creates the digital experience, and digital marketing helps relevant audiences discover and engage with the business.",
              "Coordinating the work can help maintain consistency across customer touchpoints, although the right combination depends on the project's objectives."
            ]
          },
          {
            q: "Do you provide social media marketing and content creation?",
            a: [
              "The agency's service portfolio includes social media marketing, Instagram and Facebook marketing, content marketing, blog writing, copywriting and influencer marketing.",
              "The approach can include content direction, messaging, suitable creative formats and campaign coordination depending on the scope of work."
            ]
          },
          {
            q: "Does InchToMilez handle offline advertising as well as digital campaigns?",
            a: [
              "Yes. The listed service areas include outdoor and OOH advertising, BTL activations, radio and newspaper advertising, public relations and integrated advertising.",
              "Availability, media placement options, production requirements, permissions and costs depend on the campaign location and individual project."
            ]
          },
          {
            q: "How does InchToMilez measure marketing performance?",
            a: [
              "The measurement approach should reflect the objective of the activity. Relevant indicators may include organic search visibility, website behaviour, advertising interactions, enquiries, purchase events and campaign costs.",
              "Analytics and reporting can help interpret patterns and guide improvements, but attribution systems have limitations and do not capture every customer decision perfectly."
            ]
          },
          {
            q: "Will I receive reports or updates on my marketing campaigns?",
            a: [
              "Reporting and communication arrangements should be defined in the engagement scope. Ongoing campaign work may include performance reviews, relevant observations and recommendations at agreed intervals.",
              "One-time creative or website projects may instead involve milestones, approval stages and a final delivery or handover."
            ]
          },
          {
            q: "How do I start a project with InchToMilez?",
            a: [
              "You can begin by contacting InchToMilez with a description of your business, the services you're considering and the challenge or objective you want to address.",
              "From there, the project requirements, suitable approach, scope, deliverables and next steps can be discussed before proceeding."
            ]
          }
        ].map((item, index) => (
          <details
            key={item.q}
            className="sfq-question"
            name="inchtomilez-service-faq"
            open={index === 0 ? true : undefined}
          >
            <summary>
              <span className="sfq-question-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="sfq-question-text">
                {item.q}
              </span>

              <span
                className="sfq-expand"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <div className="sfq-answer">
              {item.a.map((paragraph, pIndex) => (
                <p key={pIndex}>
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}

      </div>

    </div>

    {/* 14.03 — CLIENT GUIDANCE */}

    <div className="sfq-guidance">
      <div>
        <span className="sfq-guidance-label">
          BEFORE YOU CHOOSE AN AGENCY
        </span>

        <h3>
          Ask Better Questions.
          Make More Informed Decisions.
        </h3>
      </div>

      <div>
        <p>
          Before committing to any marketing or
          development project, clarify the objective,
          expected deliverables, budget, responsibilities
          and how the work will be reviewed.
        </p>

        <p>
          An informed decision isn't based on the
          biggest list of services or the boldest
          promises. It's based on understanding
          what the business needs and whether
          the proposed approach fits those needs.
        </p>
      </div>
    </div>

    {/* 14.04 — FINAL CTA */}

    <div className="sfq-footer">
      <div>
        <h3>
          Still Have Questions About Our Services?
        </h3>

        <p>
          Share your business requirements,
          marketing challenges or project ideas
          with InchToMilez. We can discuss
          the relevant services and possible next steps.
        </p>
      </div>

      <Link
        to="/contact"
        className="sfq-button"
      >
        Contact InchToMilez
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

</section>

{/* ================= END SECTION 14 ================= */}





{/* ============================================================
   SECTION 15 — FINAL SERVICES CTA
   INCHTOMILEZ / SERVICES PAGE

   15.01 Section Identification
   15.02 Oversized Animated Editorial Heading
   15.03 Conversion Messaging
   15.04 Primary & Secondary CTAs
   15.05 Closing Brand Signature

   UI/UX:
   - Full-width editorial composition
   - Animated heading reveal (CSS only)
   - Outlined display typography
   - Restrained line/grid details
   - No redundant bento cards
   - Existing dark background remains visible

   Existing imports:
   Link from "react-router"
   ArrowRight from "lucide-react"

   No new dependencies / No additional H1
============================================================ */}

<section
  id="services-final-cta"
  aria-labelledby="sfc-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.08] py-20 md:py-28"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #services-final-cta,
    #services-final-cta * {
      box-sizing: border-box;
    }

    #services-final-cta .sfc-shell {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      width: 100%;
      padding: 0 24px;
      margin: 0 auto;
    }

    #services-final-cta .sfc-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding-bottom: 22px;
      border-bottom: 1px solid rgba(255,255,255,.15);
    }

    #services-final-cta .sfc-eyebrow,
    #services-final-cta .sfc-index {
      margin: 0;
      color: #adb4be;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    /* MAIN CTA STAGE */

    #services-final-cta .sfc-stage {
      position: relative;
      overflow: hidden;
      padding: clamp(45px,8vw,110px) 0;
    }

    #services-final-cta .sfc-ghost {
      position: absolute;
      right: -1%;
      top: 4%;
      z-index: -1;
      color: transparent;
      font-size: clamp(100px,17vw,240px);
      font-weight: 800;
      letter-spacing: -.08em;
      line-height: 1;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    #services-final-cta .sfc-preheading {
      display: block;
      margin-bottom: 28px;
      color: #aeb5be;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .13em;
      text-transform: uppercase;
    }

    #services-final-cta .sfc-heading {
      max-width: 1120px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(42px,6.4vw,86px);
      font-weight: 700;
      line-height: 1.13;
      letter-spacing: -.06em;
      text-wrap: balance;
    }

    #services-final-cta .sfc-line {
      display: block;
      opacity: 0;
      transform: translateY(25px);
      animation: sfc-reveal .8s ease-out forwards;
    }

    #services-final-cta .sfc-line:nth-child(2) {
      animation-delay: .18s;
    }

    #services-final-cta .sfc-line:nth-child(3) {
      animation-delay: .36s;
    }

    #services-final-cta .sfc-outline {
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,.82);
    }

    @keyframes sfc-reveal {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* CONVERSION CONTENT */

    #services-final-cta .sfc-conversion {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,.7fr);
      align-items: end;
      gap: 45px;
      margin-top: 45px;
    }

    #services-final-cta .sfc-conversion-copy {
      max-width: 625px;
      margin: 0;
      color: #c0c5cd;
      font-size: clamp(14px,1.4vw,17px);
      line-height: 1.9;
    }

    #services-final-cta .sfc-actions {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 11px;
    }

    #services-final-cta .sfc-btn-primary,
    #services-final-cta .sfc-btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 43px;
      padding: 11px 17px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
      white-space: nowrap;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #services-final-cta .sfc-btn-primary {
      border: 1px solid #eab308;
      background: #eab308;
      color: #050505;
    }

    #services-final-cta .sfc-btn-secondary {
      border: 1px solid rgba(255,255,255,.3);
      background: rgba(255,255,255,.055);
      color: #fff;
    }

    #services-final-cta .sfc-btn-primary svg,
    #services-final-cta .sfc-btn-secondary svg {
      width: 15px;
      height: 15px;
    }

    /* CLOSING SIGNATURE */

    #services-final-cta .sfc-bottom {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 20px;
      padding-top: 26px;
      border-top: 1px solid rgba(255,255,255,.15);
    }

    #services-final-cta .sfc-brand {
      display: block;
      margin-bottom: 8px;
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -.025em;
    }

    #services-final-cta .sfc-description {
      color: #9fa6b0;
      font-size: 11px;
      line-height: 1.7;
      letter-spacing: .03em;
    }

    #services-final-cta .sfc-endmark {
      color: #8f96a0;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      white-space: nowrap;
    }

    @media (hover:hover) and (pointer:fine) {
      #services-final-cta .sfc-btn-primary:hover {
        background: #facc15;
        transform: translateY(-2px);
      }

      #services-final-cta .sfc-btn-secondary:hover {
        background: rgba(255,255,255,.12);
        border-color: rgba(255,255,255,.55);
        transform: translateY(-2px);
      }
    }

    #services-final-cta a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #services-final-cta .sfc-conversion {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      #services-final-cta .sfc-actions {
        justify-content: flex-start;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #services-final-cta .sfc-shell {
        padding-inline: 18px;
      }

      #services-final-cta .sfc-heading {
        font-size: clamp(37px,10vw,55px);
        letter-spacing: -.052em;
      }

      #services-final-cta .sfc-preheading {
        font-size: 10px;
      }

      #services-final-cta .sfc-stage {
        padding: 55px 0;
      }

      #services-final-cta .sfc-ghost {
        font-size: 110px;
      }

      #services-final-cta .sfc-conversion {
        margin-top: 32px;
        gap: 26px;
      }

      #services-final-cta .sfc-conversion-copy {
        font-size: 13px;
      }

      #services-final-cta .sfc-actions {
        flex-direction: column;
        width: 100%;
      }

      #services-final-cta .sfc-btn-primary,
      #services-final-cta .sfc-btn-secondary {
        width: 100%;
      }

      #services-final-cta .sfc-bottom {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      #services-final-cta .sfc-endmark {
        white-space: normal;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #services-final-cta .sfc-line {
        animation: none;
        opacity: 1;
        transform: none;
      }

      #services-final-cta .sfc-btn-primary,
      #services-final-cta .sfc-btn-secondary {
        transition: none;
      }
    }
  `}</style>

  <div className="sfc-shell">

    {/* 15.01 — TOP IDENTIFIER */}

    <div className="sfc-topline">
      <p className="sfc-eyebrow">
        15 / LET'S MOVE FORWARD
      </p>

      <span className="sfc-index">
        INCHTOMILEZ / SERVICES
      </span>
    </div>

    {/* 15.02 — OVERSIZED EDITORIAL TYPOGRAPHY */}

    <div className="sfc-stage">

      <div className="sfc-ghost" aria-hidden="true">
        NEXT
      </div>

      <span className="sfc-preheading">
        A CONVERSATION IS A GOOD PLACE TO START
      </span>

      <h2 id="sfc-heading" className="sfc-heading">
        <span className="sfc-line">
          You've Seen
        </span>

        <span className="sfc-line sfc-outline">
          What We Do.
        </span>

        <span className="sfc-line">
          Now Let's Talk About You.
        </span>
      </h2>

      {/* 15.03 — CONVERSION MESSAGE */}

      <div className="sfc-conversion">

        <p className="sfc-conversion-copy">
          Whether your business needs digital
          marketing, SEO, advertising, a stronger
          brand identity or a better website, the
          right place to begin is understanding
          what you're trying to achieve.
          <br />
          <br />
          Tell us about your business, your challenges
          and the opportunities you're exploring.
          We'll discuss how InchToMilez's capabilities
          might fit your next move.
        </p>

        {/* 15.04 — PRIMARY / SECONDARY CTA */}

        <div className="sfc-actions">
          <Link
            to="/contact"
            className="sfc-btn-primary"
          >
            Let's Discuss Your Project
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link
            to="/about"
            className="sfc-btn-secondary"
          >
            Get to Know Us
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

      </div>

    </div>

    {/* 15.05 — FINAL BRAND SIGNATURE */}

    <div className="sfc-bottom">

      <div>
        <span className="sfc-brand">
          INCHTOMILEZ
        </span>

        <span className="sfc-description">
          DIGITAL MARKETING · ADVERTISING · BRANDING ·
          CREATIVE · TECHNOLOGY
        </span>
      </div>

      <span className="sfc-endmark">
        INDORE, INDIA / SERVICES
      </span>

    </div>

  </div>
</section>

{/* ================= END SECTION 15 ================= */}


      
    </div>
  );
}
