import { Link } from 'react-router';
import { ArrowRight, Star, Phone, Mail, MapPin, CheckCircle, Target, Zap, Users, TrendingUp, Award, BarChart3, Shield, Clock, Sparkles, Rocket, Globe, MessageSquare, Play, Trophy, Brain, Lightbulb, LineChart, Gauge, HeartHandshake, Lock, FileCheck, Timer, ChartBar, Search, Megaphone, Tv, Radio, Package, Aperture, Film, Newspaper, Users2, Building2, Vote, MapPinned, Eye, Wifi, Settings, Monitor, Briefcase, Palette, Code, Layers, Boxes, Share2, Laptop, Server, Camera, Heart, GraduationCap, Home, ShoppingCart, Cpu, DollarSign, Hotel, Car, Shirt, Scale, Factory, Utensils } from 'lucide-react';
import { useState } from 'react';
import { AutoCarousel } from '../ui/AutoCarousel';
import { BentoGrid2 } from '../layout/BentoGrid2';
import { SEOHeadSSG } from '../SEOHeadSSG';
import { AnimatedSection } from '../ui/AnimatedSection';
import { OutlinedText } from '../ui/OutlinedText';
import { TextReveal } from '../ui/TextReveal';
import { TextScramble } from '../ui/TextScramble';
import { CountUpNumber } from '../ui/CountUpNumber';
import { MagneticButton } from '../ui/MagneticButton';
import { VideoBackground } from '../ui/VideoBackground';
import { useSEO, StructuredData, organizationSchema, localBusinessSchema, websiteSchema } from '../../utils/seo-system';
import { ROUTES, routeTo } from '../../config/routes';

export function HomePage() {
  const seo = useSEO(); // Auto-loads SEO from centralized config
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  // Core Services - 14 services with proper icons
  const coreServices = [
    {
      title: 'Digital Marketing',
      description: 'Search, social, content and performance working as one connected digital ecosystem.',
      icon: Rocket,
      link: routeTo.service('digital-marketing'),
    },
    {
      title: 'Advertising',
      description: 'Ideas and media built to travel across search, social, video and high-intent moments.',
      icon: Megaphone,
      link: routeTo.service('advertising'),
    },
    {
      title: 'Branding & Strategy',
      description: 'Positioning, identity and communication systems that make the brand unmistakably itself.',
      icon: Sparkles,
      link: routeTo.service('branding-identity'),
    },
    {
      title: 'BTL Activations',
      description: 'Real-world brand experiences built for participation, interaction and lasting recall.',
      icon: Users2,
      link: routeTo.service('btl-activations'),
    },
    {
      title: 'OOH Advertising',
      description: 'Hoardings, transit, retail and premium placements that take the brand beyond the screen.',
      icon: MapPinned,
      link: routeTo.service('ooh-advertising'),
    },
    {
      title: 'Websites & Digital Experiences',
      description: 'Websites, commerce and digital products designed around clarity, speed and action.',
      icon: Monitor,
      link: routeTo.service('web-design-development'),
    },
    {
      title: 'Software Development',
      description: 'Business software, dashboards and automation designed to remove friction and scale smarter.',
      icon: Code,
      link: routeTo.service('software-development'),
    },
    {
      title: 'Public Relations',
      description: 'Media communication, digital PR and influence that give the brand credibility beyond advertising.',
      icon: MessageSquare,
      link: routeTo.service('public-relations'),
    },
    {
      title: 'Political Campaigns',
      description: 'Integrated public communication built around audience insight, media and on-ground reach.',
      icon: Vote,
      link: routeTo.service('political-campaigns'),
    },
    {
      title: 'Product Marketing',
      description: 'Positioning, go-to-market thinking and launch systems that build desire around the product.',
      icon: Package,
      link: routeTo.service('product-marketing'),
    },
    {
      title: 'Graphic Design',
      description: 'Campaign, social, print and brand design created to communicate before it decorates.',
      icon: Palette,
      link: routeTo.service('graphic-design'),
    },
    {
      title: 'Media Production',
      description: 'Films, photography and short-form content built around the idea, not just the equipment.',
      icon: Camera,
      link: routeTo.service('video-media-production'),
    },
  ];

  // Why We're Different - 6 principles
  const differentiators = [
    {
      icon: FileCheck,
      title: 'Strategy Before Spending',
      description: 'We decide what the brand actually needs before deciding where the budget should go.',
    },
    {
      icon: Shield,
      title: 'Ideas Before Noise',
      description: 'A stronger idea beats a louder media plan. We build the message before we amplify it.',
    },
    {
      icon: Clock,
      title: 'One Brand. One Direction.',
      description: 'Strategy, creative, media and technology work toward the same brand objective.',
    },
    {
      icon: Award,
      title: 'Digital + Physical Thinking',
      description: 'The customer does not live in one channel. Neither should the brand experience.',
    },
    {
      icon: Users,
      title: 'Clear Conversations',
      description: 'No unnecessary jargon between you and your own marketing. Clear thinking, clearly communicated.',
    },
    {
      icon: Target,
      title: "Improve, Don't Autopilot",
      description: 'Launch, learn, improve and scale. Good marketing should become smarter as it moves.',
    },
  ];

  // Digital Marketing Deep Dive
  const digitalMarketingServices = [
    {
      icon: Search,
      title: 'Search Visibility',
      description: 'Build the technical, content and authority signals that help the right audience discover you.',
    },
    {
      icon: MapPin,
      title: 'Local Discovery',
      description: 'Own the moments when nearby customers search, compare and decide where to go next.',
    },
    {
      icon: Target,
      title: 'High-Intent Search',
      description: 'Meet demand at the moment people are actively searching for what you offer.',
    },
    {
      icon: Share2,
      title: 'Paid Social & Discovery',
      description: 'Turn scrolling into discovery through sharper audiences, stronger creative and smarter iteration.',
    },
    {
      icon: Mail,
      title: 'Lifecycle & Automation',
      description: 'Keep the conversation moving after the first click with useful, timely communication.',
    },
    {
      icon: BarChart3,
      title: 'Measurement & Learning',
      description: 'Understand what moved, what stalled and what the next decision should be.',
    },
  ];

  // OOH Advertising Details
  const oohServices = [
    {
      icon: Building2,
      title: 'Billboards & Hoardings',
      description: 'High-visibility placements selected around audience movement, context and brand impact.',
    },
    {
      icon: Tv,
      title: 'Transit Media',
      description: 'Take the message through the city with media that moves where the audience moves.',
    },
    {
      icon: Globe,
      title: 'Airport Branding',
      description: 'Premium environments for brands that need scale, stature and high-value attention.',
    },
    {
      icon: Boxes,
      title: 'Mall & Retail Media',
      description: 'Turn high-footfall retail spaces into memorable brand moments close to purchase.',
    },
  ];

  // BTL Activations Examples
  const btlActivations = [
    {
      icon: Users2,
      title: 'Mall & Retail Activations',
      description: "Put the product in people's hands and turn passive audiences into participants.",
    },
    {
      icon: Trophy,
      title: 'Campus & Roadshows',
      description: 'Take the idea to communities, campuses and streets through live brand experiences.',
    },
    {
      icon: Building2,
      title: 'Trade Exhibitions',
      description: 'Build exhibition experiences that attract, explain and create meaningful conversations.',
    },
    {
      icon: Boxes,
      title: 'Society-Level Branding',
      description: 'Bring the brand into neighbourhoods through relevant, high-contact community experiences.',
    },
  ];

  // Tools & Technologies
  const tools = [
    'Google Analytics 4',
    'Search Console',
    'SEMrush',
    'Ahrefs',
    'HubSpot',
    'Meta Business Suite',
    'Google Ads',
    'Adobe Creative Cloud',
    'WordPress',
    'Shopify Plus',
    'AWS Cloud',
    'MongoDB',
    'Firebase',
    'Mailchimp',
    'Zapier',
    'Tableau',
    'Salesforce',
    'Hotjar',
    'Node.js',
  ];

  // Industries Served
  const industries = [
    { name: 'Healthcare', icon: Heart },
    { name: 'Technology', icon: Cpu },
    { name: 'Real Estate', icon: Home },
    { name: 'E-Commerce', icon: ShoppingCart },
    { name: 'Education', icon: GraduationCap },
    { name: 'Finance', icon: DollarSign },
    { name: 'Hospitality', icon: Hotel },
    { name: 'Automotive', icon: Car },
    { name: 'Fashion', icon: Shirt },
    { name: 'F&B', icon: Utensils },
    { name: 'Legal', icon: Scale },
    { name: 'Manufacturing', icon: Factory },
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Discovery & Research',
      description: 'Understand the business, audience, market and real problem to solve.',
      duration: 'UNDERSTAND',
    },
    {
      step: '02',
      icon: FileCheck,
      title: 'Strategy & Planning',
      description: 'Define the opportunity, objective, message and channel role before execution begins.',
      duration: 'DEFINE',
    },
    {
      step: '03',
      icon: Lightbulb,
      title: 'Creative Production',
      description: 'Turn the strategy into an idea, visual language, message and experience.',
      duration: 'CREATE',
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Campaign Execution',
      description: 'Launch the work across the right touchpoints with one connected direction.',
      duration: 'LAUNCH',
    },
    {
      step: '05',
      icon: TrendingUp,
      title: 'Analysis & Improvement',
      description: 'Read the response, learn what changed, improve the work and scale what earns it.',
      duration: 'LEARN + SCALE',
    },
  ];

  // Real Success Metrics
  const successMetrics = [
    {
      metric: 'ATTENTION',
      industry: 'Get Seen',
      description: 'Creative and media should earn the first look — not assume it.',
    },
    {
      metric: 'MEMORY',
      industry: 'Get Remembered',
      description: 'Recognition is built when every brand touchpoint feels connected.',
    },
    {
      metric: 'ACTION',
      industry: 'Get Chosen',
      description: 'Attention matters more when the experience gives people a reason to move.',
    },
    {
      metric: 'Digital + Physical Thinking',
      industry: 'Go Further',
      description: 'Learn from the response, improve the system and take what works further.',
    },
  ];

  // What Great Work Should Leave Behind
  const testimonials = [
    {
      quote: 'Attention gets the first look. Consistency is what turns that look into memory.',
      name: 'ATTENTION → MEMORY',
      title: 'Brand Principle 01',
      result: 'GET REMEMBERED',
      rating: 5,
    },
    {
      quote: 'A campaign gets stronger when the idea survives every format, platform and location.',
      name: 'IDEA → SYSTEM',
      title: 'Brand Principle 02',
      result: 'ONE DIRECTION',
      rating: 5,
    },
    {
      quote: 'The customer never experiences your departments. They experience one brand.',
      name: 'CHANNELS → BRAND',
      title: 'Brand Principle 03',
      result: 'STAY CONNECTED',
      rating: 5,
    },
    {
      quote: 'Good marketing does not run on autopilot. It learns, adapts and gets sharper.',
      name: 'LAUNCH → LEARN',
      title: 'Brand Principle 04',
      result: 'KEEP IMPROVING',
      rating: 5,
    },
  ];

  return (
    <div className="relative">
      {/* ⚠️ REMOVED bg-black - Using body background with grid pattern */}
      {/* SEO Meta Tags - Auto-loaded from centralized config */}
      <SEOHeadSSG {...seo.meta} />
      
      {/* Structured Data */}
      <StructuredData data={[organizationSchema, localBusinessSchema, websiteSchema]} />
      












{/* ============================================================
    SECTION 01 — OPENING STATEMENT
============================================================ */}
<section
  className="relative min-h-screen w-full overflow-hidden bg-black"
  style={{
    minHeight: '100vh',
    fontFamily: "'Raleway', sans-serif",
  }}
  aria-labelledby="home-hero-heading"
>
  {/* Existing hero video */}
  <VideoBackground
    src="https://orange-woodcock-416561.hostingersite.com/wp-content/uploads/2024/09/Sequence-01_2.mp4"
    overlayOpacity={0.04}
    startTime={0}
  />

  {/* Existing readability treatment */}
  <div
    className="absolute inset-0 z-[1] pointer-events-none"
    style={{
      background:
        'linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.22) 56%, rgba(0,0,0,0.06) 78%, rgba(0,0,0,0.02) 100%)',
    }}
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 z-[1] pointer-events-none"
    style={{
      background:
        'linear-gradient(0deg, rgba(0,0,0,0.36) 0%, rgba(0,0,0,0.12) 25%, rgba(0,0,0,0) 56%)',
    }}
    aria-hidden="true"
  />

  {/* Existing yellow accent */}
  <div
    className="absolute inset-0 z-[1] pointer-events-none"
    style={{
      background:
        'radial-gradient(circle at 13% 70%, rgba(234,179,8,0.08) 0%, rgba(234,179,8,0.025) 24%, transparent 44%)',
    }}
    aria-hidden="true"
  />

  {/* Existing container, alignment and spacing */}
  <div className="relative z-10 container mx-auto min-h-screen w-full px-4 sm:px-6 lg:px-8 flex items-center">
    <div className="max-w-6xl mx-auto w-full pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-32 md:pb-16 lg:pt-28 lg:pb-16">
      <div className="max-w-[1080px]">
        <AnimatedSection animation="fadeInUp" delay={0.14}>
          <h1
            id="home-hero-heading"
            className="max-w-[1080px] text-white font-semibold tracking-[-0.025em]"
            style={{
              fontFamily: "'Raleway', sans-serif",
              lineHeight: 1.12,
              overflowWrap: 'break-word',
            }}
          >
            {/* Original first-row typography */}
            <span className="block text-[31px] sm:text-[36px] md:text-[41px] lg:text-[46px] xl:text-[48px]">
              Duniya Brands Ke Peeche ....
            </span>

            {/* Original second-row typography */}
            <span className="block mt-1 sm:mt-1.5 text-[29px] sm:text-[34px] md:text-[39px] lg:text-[44px] xl:text-[46px] text-white">
              Aur Brands....{' '}
              <span className="text-yellow-500">
                Marketing Aur Advertising Ke !!!
              </span>
            </span>
          </h1>
        </AnimatedSection>
      </div>
    </div>
  </div>

  {/* Existing section boundary */}
  <div
    className="absolute bottom-0 left-0 right-0 z-[2] h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />
</section>





{/* ============================================================
    SECTION 02 — OUR SERVICES
    INCHTOMILEZ HOMEPAGE — FINAL

    Background: Original Global Black Grid
    Layout: Existing Asymmetric BentoGrid2
    Heading: Smooth Whole-Element Fade-Up
    Fonts: Existing Raleway Typography
    Routes: Existing ROUTES and routeTo
    Dependencies: No New Imports
============================================================ */}

<section
  id="home-services-section"
  className="relative overflow-hidden ambient-yellow"
  style={{
    paddingBlock: 'clamp(40px, 5vw, 64px)',
  }}
  aria-labelledby="home-services-heading"
>
  {/* ============================================================
      02.01 — EXISTING BENTO PRESENTATION STYLES
  ============================================================ */}

  <style>
    {`
      #home-services-section .services-grid-shell {
        min-width: 0;
        padding: 4px;
      }

      #home-services-bento > [role="list"] {
        gap: 12px;
        grid-auto-rows: minmax(112px, auto);
      }

      #home-services-bento [role="listitem"] {
        min-width: 0;
      }

      #home-services-bento [role="listitem"] > a {
        border-radius: 8px;
      }

      #home-services-bento [role="listitem"] > a > div {
        padding: 12px;
        transition-duration: 200ms;
      }

      #home-services-bento
      [role="listitem"] > a > div > div > .self-end {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        max-width: calc(100% - 32px);
      }

      #home-services-bento
      [role="listitem"] > a > div > div > .mb-auto {
        gap: 8px;
      }

      #home-services-bento [role="listitem"] h3 {
        margin: 0;
        overflow-wrap: break-word;
      }

      #home-services-bento .line-clamp-2 {
        display: block;
        -webkit-line-clamp: unset;
        overflow: visible;
      }

      #home-services-bento
      [role="listitem"] > a > div > div > .mt-auto {
        padding-top: 12px;
        justify-content: flex-end;
      }

      #home-services-bento
      [role="listitem"] > a > div > div > .mt-auto
      > div[aria-hidden="true"] {
        display: none;
      }

      /* COMPACT YELLOW CARD ACTIONS */

      #home-services-bento
      [role="listitem"] > a > div > div > .mt-auto
      > div:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-height: 30px;
        padding: 4px 10px;
        border: 1px solid #eab308;
        border-radius: 6px;
        color: #000;
        background: #eab308;
        opacity: 1;
      }

      #home-services-bento
      [role="listitem"] > a > div > div > .mt-auto
      > div:last-child > span {
        display: inline;
      }

      /* MOBILE BENTO ACCORDION */

      #home-services-bento
      [data-slot="accordion-trigger"] {
        min-height: 44px;
        padding: 10px 12px;
      }

      #home-services-bento
      [data-slot="accordion-content"] a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 8px 12px;
        border: 1px solid #eab308;
        border-radius: 8px;
        color: #000;
        background: #eab308;
      }

      /* BOTTOM CTA PANEL */

      #home-services-section .services-footer {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
        gap: 16px;
        margin-top: 24px;
        padding: 16px;
      }

      #home-services-section .services-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        min-width: 0;
      }

      #home-services-section .services-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        min-height: 44px;
        padding: 10px 14px;
        border-radius: 10px;
        line-height: 1;
        white-space: nowrap;
        box-sizing: border-box;
        transition:
          transform 200ms ease,
          background-color 200ms ease,
          border-color 200ms ease;
      }

      #home-services-section .services-action svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }

      /* HEADING AND REDUCED-MOTION SUPPORT */

      #home-services-section .services-heading {
        font-size: clamp(24px, 2.5vw, 32px);
        line-height: 1.25;
      }

      /* RESPONSIVE */

      @media (min-width: 768px) {
        #home-services-section .services-footer {
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
        }

        #home-services-section .services-actions {
          grid-template-columns:
            repeat(2, minmax(132px, 1fr));
        }
      }

      @media (max-width: 420px) {
        #home-services-section .services-actions {
          grid-template-columns: 1fr;
        }
      }

      /* INTERACTIONS */

      @media (hover: hover) and (pointer: fine) {
        #home-services-bento
        [role="listitem"] > a:hover > div {
          transform: translateY(-2px);
        }

        #home-services-section
        .services-action:hover svg {
          transform: translateX(2px);
        }
      }

      /* ACCESSIBILITY */

      #home-services-section a:focus-visible {
        outline: 2px solid #eab308;
        outline-offset: 3px;
      }

      @media (prefers-reduced-motion: reduce) {
        #home-services-bento
        [role="listitem"] > a > div,
        #home-services-section .services-action,
        #home-services-section .services-action svg {
          transition: none;
          transform: none;
        }
      }
    `}
  </style>

  {/* ============================================================
      02.02 — ORIGINAL DECORATIVE TYPOGRAPHY
      Keeps the existing global black grid visible.
  ============================================================ */}

  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <OutlinedText
      text="THINK"
      className="absolute top-[10%] left-0 text-[11rem] md:text-[15rem] pointer-events-none"
      direction="left"
      stopPosition={25}
      parallax={true}
      parallaxSpeed={0.25}
      opacity={0.04}
      delay={0}
    />

    <OutlinedText
      text="IDEAS"
      className="absolute top-[62%] right-0 text-[10rem] md:text-[14rem] pointer-events-none"
      direction="right"
      stopPosition={25}
      parallax={true}
      parallaxSpeed={0.25}
      opacity={0.04}
      delay={0.2}
    />
  </div>

  {/* ============================================================
      02.03 — SECTION CONTENT
  ============================================================ */}

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          INTRODUCTION — SMOOTH HEADING ANIMATION
          No TextScramble or per-letter transitions.
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.15}
      >
        <div className="max-w-3xl mx-auto text-center mb-8">

          <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-4">
            ONE BRAND. MANY WAYS TO MOVE IT.
          </p>

          <h2
            id="home-services-heading"
            className="services-heading font-bold mb-4 text-white"
          >
            Everything Your Brand Needs to Make Its Mark.
          </h2>

          <p
            className="text-[0.9375rem] leading-relaxed text-gray-300"
            style={{
              lineHeight: 1.6,
            }}
          >
            Strategy, creative, advertising and technology.
            Connected around your next move.
          </p>

        </div>
      </AnimatedSection>

      {/* ========================================================
          02.04 — ORIGINAL ASYMMETRIC BENTO GRID
          Uses the existing 12-service coreServices array.
      ======================================================== */}

      <div
        id="home-services-bento"
        className="services-grid-shell"
      >
        <BentoGrid2
          cards={coreServices.map((service) => {
            const descriptions: Record<string, string> = {
              'Digital Marketing':
                'Help people find your business, understand your offer and take the next step.',

              'Advertising':
                'Give people a reason to stop, look and choose you.',

              'Branding & Strategy':
                'Find what makes your brand different—and make it clear.',

              'BTL Activations':
                'Bring your brand closer through experiences people can take part in.',

              'OOH Advertising':
                'Make your brand part of the places people pass every day.',

              'Websites & Digital Experiences':
                'Turn a first visit into a clear path to enquiry, booking or purchase.',

              'Software Development':
                'Build useful digital tools around the way your business works.',

              'Public Relations':
                'Give your story a clear angle and bring it to relevant conversations.',

              'Political Campaigns':
                'Bring campaign messaging, design and communication together across media.',

              'Product Marketing':
                'Show people what your product does—and why they should want it.',

              'Graphic Design':
                'Make every piece of communication feel unmistakably yours.',

              'Media Production':
                'Bring the idea to life through film, photography, sound and motion.',
            };

            return {
              ...service,
              description:
                descriptions[service.title] ?? service.description,
            };
          })}
          mode="asymmetric"
          showBadges={true}
          showStats={false}
          showCTA={true}
          ariaLabel="Explore all InchToMilez services"
        />
      </div>

      {/* ========================================================
          02.05 — COMPACT CLOSING CTA
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.1}
        amount={0.15}
      >
        <div className="services-footer glass-card rounded-xl">

          <div>
            <h3 className="text-[0.9375rem] font-medium text-white mb-2">
              Not Sure Where to Start?
            </h3>

            <p className="text-sm text-gray-400">
              Tell us your goal. We'll help you find the
              right services and next steps.
            </p>
          </div>

          <div className="services-actions">

            <Link
              to={ROUTES.contact}
              className="services-action group bg-yellow-500 hover:bg-yellow-400 text-black text-[13px] sm:text-[14px] font-semibold"
            >
              <span>Let's Talk</span>

              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-200"
              />
            </Link>

            <Link
              to={ROUTES.services}
              className="services-action group border border-white/20 bg-black/20 text-white hover:border-white/40 text-[13px] sm:text-[14px] font-semibold"
            >
              <span>All Services</span>

              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-200"
              />
            </Link>

          </div>

        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* ============================================================
      02.06 — SECTION BOUNDARY
  ============================================================ */}

  <div
    className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 02 ================= */}


















{/* ============================================================
    SECTION 03 — THE CHALLENGE
    INCHTOMILEZ / PREMIUM INTERACTIVE EDITION

    03.01 Scoped Design System
    03.02 Original Grid Background + Decorative Layer
    03.03 Editorial Section Heading
    03.04 Interactive Two-Column Challenge Console
    03.05 Dynamic Brand Strategy Visualization
    03.06 Compact Closing Statement

    Preserves:
    - Original global black grid background
    - Raleway typography and heading scale
    - 42% / 58% desktop composition
    - Existing React Router service links
    - Approved three challenge topics
    - Smooth whole-element entrance animation
    - No new packages or imports
============================================================ */}

<section
  id="home-challenge"
  className="relative isolate overflow-hidden"
  aria-labelledby="home-challenge-heading"
  style={{
    paddingBlock: "clamp(48px,5.5vw,80px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      03.01 — SCOPED CSS
  ============================================================ */}

  <style>{`
    #home-challenge {
      --ch-border:rgba(255,255,255,.13);
      --ch-muted:#adb0b8;
      --ch-surface:rgba(10,11,13,.94);
      --ch-text:#fff;
    }

    /* SECTION INTRODUCTION */

    #home-challenge .ch-intro {
      max-width:800px;
      margin:0 auto 32px;
      text-align:center;
    }

    #home-challenge .ch-eyebrow {
      margin:0 0 15px;
      color:#aeb1b9;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-challenge .ch-heading {
      margin:0;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-challenge .ch-description {
      max-width:630px;
      margin:16px auto 0;
      color:#c9ccd2;
      font-size:15px;
      line-height:1.7;
    }

    /* INTERACTIVE CONSOLE */

    #home-challenge .ch-console {
      position:relative;
      margin:0;
      padding:0;
      border:0;
      min-width:0;
      min-inline-size:0;
    }

    #home-challenge .ch-hidden {
      position:absolute;
      width:1px;
      height:1px;
      padding:0;
      margin:-1px;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-challenge .ch-console-inner {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:start;
      gap:14px;
    }

    /* LEFT NAVIGATION */

    #home-challenge .ch-nav {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      gap:10px;
      min-width:0;
      align-content:start;
      align-self:start;
    }

    #home-challenge .ch-nav-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      min-height:27px;
      margin-bottom:4px;
    }

    #home-challenge .ch-nav-label {
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-challenge .ch-nav-index {
      color:#777b83;
      font-size:11px;
      font-weight:500;
    }

    /* NAVIGATION CARDS */

    #home-challenge .ch-option {
      position:relative;
      display:grid;
      grid-template-columns:38px minmax(0,1fr) 19px;
      align-items:center;
      gap:13px;
      min-width:0;
      min-height:105px;
      padding:17px;
      border:1px solid var(--ch-border);
      border-radius:11px;
      background:rgba(10,11,13,.87);
      color:#fff;
      cursor:pointer;
      overflow:hidden;
      transition:
        background-color .25s ease,
        border-color .25s ease,
        transform .25s ease;
    }

    #home-challenge .ch-option::before {
      content:"";
      position:absolute;
      left:0;
      top:12px;
      bottom:12px;
      width:2px;
      border-radius:2px;
      background:#eab308;
      transform:scaleY(0);
      transition:transform .25s ease;
    }

    #home-challenge .ch-option::after {
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:linear-gradient(
        115deg,
        rgba(255,255,255,.04),
        transparent 70%
      );
      opacity:0;
      transition:opacity .25s ease;
    }

    #home-challenge .ch-option-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:38px;
      height:38px;
      flex-shrink:0;
      border:1px solid rgba(255,255,255,.16);
      border-radius:9px;
      background:rgba(255,255,255,.035);
      color:#fff;
    }

    #home-challenge .ch-option-icon svg {
      width:18px;
      height:18px;
    }

    #home-challenge .ch-option-copy {
      display:block;
      min-width:0;
    }

    #home-challenge .ch-option-title {
      display:block;
      color:#fff;
      font-size:16px;
      font-weight:600;
      line-height:1.4;
    }

    #home-challenge .ch-option-summary {
      display:block;
      margin-top:6px;
      color:#aeb1b9;
      font-size:12px;
      line-height:1.6;
    }

    #home-challenge .ch-option-arrow {
      width:17px;
      height:17px;
      color:#898d95;
      transition:transform .25s ease;
    }

    /* NAVIGATION SELECTION */

    #ch3-standout:checked ~ .ch-console-inner
    label[for="ch3-standout"],
    #ch3-connected:checked ~ .ch-console-inner
    label[for="ch3-connected"],
    #ch3-measurement:checked ~ .ch-console-inner
    label[for="ch3-measurement"] {
      background:rgba(28,29,33,.97);
      border-color:rgba(255,255,255,.43);
    }

    #ch3-standout:checked ~ .ch-console-inner
    label[for="ch3-standout"]::before,
    #ch3-connected:checked ~ .ch-console-inner
    label[for="ch3-connected"]::before,
    #ch3-measurement:checked ~ .ch-console-inner
    label[for="ch3-measurement"]::before {
      transform:scaleY(1);
    }

    #ch3-standout:checked ~ .ch-console-inner
    label[for="ch3-standout"]::after,
    #ch3-connected:checked ~ .ch-console-inner
    label[for="ch3-connected"]::after,
    #ch3-measurement:checked ~ .ch-console-inner
    label[for="ch3-measurement"]::after {
      opacity:1;
    }

    #ch3-standout:checked ~ .ch-console-inner
    label[for="ch3-standout"] .ch-option-arrow,
    #ch3-connected:checked ~ .ch-console-inner
    label[for="ch3-connected"] .ch-option-arrow,
    #ch3-measurement:checked ~ .ch-console-inner
    label[for="ch3-measurement"] .ch-option-arrow {
      transform:translateX(3px);
      color:#fff;
    }

    /* RIGHT VISUAL PANEL */

    #home-challenge .ch-stage {
      position:relative;
      min-width:0;
      align-self:start;
    }

    #home-challenge .ch-stage-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      min-height:27px;
      margin-bottom:14px;
    }

    #home-challenge .ch-stage-label {
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-challenge .ch-stage-status {
      display:flex;
      align-items:center;
      gap:8px;
      color:#979ba4;
      font-size:11px;
    }

    #home-challenge .ch-status-dot {
      width:6px;
      height:6px;
      border-radius:50%;
      background:#a0a4ad;
    }

    #home-challenge .ch-panel {
      display:none;
      position:relative;
      flex-direction:column;
      min-width:0;
      min-height:365px;
      padding:clamp(19px,2.6vw,30px);
      border:1px solid rgba(255,255,255,.2);
      border-radius:13px;
      background:
        radial-gradient(
          ellipse at 100% 0%,
          rgba(255,255,255,.065),
          transparent 56%
        ),
        linear-gradient(
          145deg,
          rgba(23,24,28,.98),
          rgba(8,9,11,.98)
        );
      box-shadow:
        0 18px 45px rgba(0,0,0,.16),
        inset 0 1px 0 rgba(255,255,255,.035);
      overflow:hidden;
      animation:ch3Reveal .3s ease both;
    }

    #home-challenge .ch-panel::before {
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      opacity:.45;
      background:
        radial-gradient(
          ellipse at 75% 80%,
          rgba(255,255,255,.035),
          transparent 50%
        );
    }

    #home-challenge .ch-panel-top {
      position:relative;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
    }

    #home-challenge .ch-panel-index {
      color:#969aa3;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-challenge .ch-panel-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:37px;
      height:37px;
      border:1px solid rgba(255,255,255,.2);
      background:rgba(255,255,255,.05);
      border-radius:9px;
    }

    #home-challenge .ch-panel-icon svg {
      width:19px;
      height:19px;
      color:#fff;
    }

    #home-challenge .ch-panel-heading {
      position:relative;
      margin:19px 0 0;
      color:#fff;
      font-size:clamp(20px,2vw,24px);
      font-weight:600;
      line-height:1.3;
      text-wrap:balance;
    }

    #home-challenge .ch-panel-copy {
      position:relative;
      margin:10px 0 0;
      max-width:530px;
      color:#bec1c8;
      font-size:13px;
      line-height:1.75;
    }

    /* CONNECTED STRATEGY VISUALIZATION */

    #home-challenge .ch-system {
      position:relative;
      margin-top:23px;
      padding:18px 0;
      border-top:1px solid rgba(255,255,255,.12);
      border-bottom:1px solid rgba(255,255,255,.12);
    }

    #home-challenge .ch-system-caption {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:20px;
      color:#aeb1b9;
      font-size:11px;
      font-weight:500;
      letter-spacing:.05em;
      text-transform:uppercase;
    }

    #home-challenge .ch-system-steps {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:0;
      align-items:start;
      list-style:none;
      margin:0;
      padding:0;
    }

    #home-challenge .ch-system-step {
      position:relative;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:9px;
      min-width:0;
      padding:0 6px;
      text-align:center;
    }

    #home-challenge .ch-system-step:not(:last-child)::after {
      content:"";
      position:absolute;
      height:1px;
      width:calc(100% - 48px);
      top:23px;
      left:calc(50% + 25px);
      background:linear-gradient(
        90deg,
        rgba(255,255,255,.4),
        rgba(255,255,255,.12)
      );
    }

    #home-challenge .ch-system-icon {
      position:relative;
      z-index:1;
      display:flex;
      align-items:center;
      justify-content:center;
      width:46px;
      height:46px;
      border:1px solid rgba(255,255,255,.24);
      border-radius:50%;
      background:#17191c;
      color:#fff;
    }

    #home-challenge .ch-system-icon svg {
      width:19px;
      height:19px;
    }

    #home-challenge .ch-system-step-label {
      color:#fff;
      font-size:12px;
      font-weight:600;
      line-height:1.4;
      overflow-wrap:anywhere;
    }

    #home-challenge .ch-system-step-number {
      color:#838791;
      font-size:10px;
      letter-spacing:.04em;
    }

    /* FOCUS LIST */

    #home-challenge .ch-focus {
      position:relative;
      display:grid;
      grid-template-columns:1fr;
      gap:9px;
      margin:18px 0 0;
      padding:0;
      list-style:none;
    }

    #home-challenge .ch-focus li {
      display:flex;
      align-items:flex-start;
      gap:9px;
      color:#c9cbd0;
      font-size:12px;
      line-height:1.6;
    }

    #home-challenge .ch-focus svg {
      width:15px;
      height:15px;
      margin-top:2px;
      flex-shrink:0;
      color:#b1b4ba;
    }

    /* CTA ACTIONS */

    #home-challenge .ch-panel-actions {
      position:relative;
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      gap:9px;
      margin-top:auto;
      padding-top:22px;
    }

    #home-challenge .ch-btn {
      display:inline-flex;
      justify-content:center;
      align-items:center;
      gap:8px;
      min-height:42px;
      padding:10px 14px;
      border-radius:8px;
      font-size:13px;
      font-weight:600;
      line-height:1.35;
      text-align:center;
      text-decoration:none;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-challenge .ch-btn svg {
      width:15px;
      height:15px;
      flex-shrink:0;
    }

    #home-challenge .ch-btn-primary {
      background:#eab308;
      color:#050505;
      border:1px solid #eab308;
    }

    #home-challenge .ch-btn-secondary {
      color:#fff;
      border:1px solid rgba(255,255,255,.2);
      background:rgba(255,255,255,.025);
    }

    /* PANEL SWITCHING */

    #ch3-standout:checked ~ .ch-console-inner
    .ch-panel-standout,
    #ch3-connected:checked ~ .ch-console-inner
    .ch-panel-connected,
    #ch3-measurement:checked ~ .ch-console-inner
    .ch-panel-measurement {
      display:flex;
    }

    /* BOTTOM STATEMENT */

    #home-challenge .ch-footer {
      display:grid;
      grid-template-columns:1fr;
      align-items:center;
      gap:15px;
      margin-top:16px;
      padding:18px 21px;
      border:1px solid rgba(255,255,255,.13);
      border-radius:11px;
      background:rgba(10,11,13,.91);
    }

    #home-challenge .ch-footer-title {
      margin:0;
      color:#fff;
      font-size:15px;
      font-weight:600;
      line-height:1.45;
    }

    #home-challenge .ch-footer-copy {
      margin:5px 0 0;
      color:#aeb1b9;
      font-size:12px;
      line-height:1.6;
    }

    #home-challenge .ch-footer-link {
      display:inline-flex;
      align-items:center;
      gap:8px;
      width:fit-content;
      min-height:42px;
      color:#fff;
      font-size:13px;
      font-weight:600;
      text-decoration:none;
    }

    #home-challenge .ch-footer-link svg {
      width:16px;
      height:16px;
    }

    /* RESPONSIVE PROPORTIONS */

    @media(min-width:900px) {
      #home-challenge .ch-console-inner {
        grid-template-columns:
          minmax(0,42fr) minmax(0,58fr);
        gap:20px;
      }

      #home-challenge .ch-panel {
        min-height:365px;
      }

      #home-challenge .ch-footer {
        grid-template-columns:minmax(0,1fr) auto;
      }
    }

    @media(min-width:640px) {
      #home-challenge .ch-focus {
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:10px 16px;
      }
    }

    @media(max-width:639px) {
      #home-challenge .ch-intro {
        margin-bottom:25px;
      }

      #home-challenge .ch-option {
        min-height:79px;
        padding:13px;
        grid-template-columns:34px minmax(0,1fr) 17px;
      }

      #home-challenge .ch-option-icon {
        width:34px;
        height:34px;
      }

      #home-challenge .ch-option-title {
        font-size:15px;
      }

      #home-challenge .ch-option-summary {
        font-size:12px;
        line-height:1.45;
      }

      #home-challenge .ch-panel {
        padding:18px;
        min-height:0;
      }

      #home-challenge .ch-system {
        padding:17px 0;
      }

      #home-challenge .ch-btn {
        font-size:12px;
      }

      #home-challenge .ch-panel-actions {
        align-items:stretch;
      }
    }

    @media(max-width:380px) {
      #home-challenge .ch-system-step {
        padding-inline:2px;
      }

      #home-challenge .ch-system-step-label {
        font-size:11px;
      }

      #home-challenge .ch-btn {
        width:100%;
      }
    }

    /* HOVER */

    @media(hover:hover) and (pointer:fine) {
      #home-challenge .ch-option:hover {
        border-color:rgba(255,255,255,.34);
        background:rgba(25,26,30,.94);
      }

      #home-challenge .ch-btn-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-challenge .ch-btn-secondary:hover {
        border-color:rgba(255,255,255,.46);
        background:rgba(255,255,255,.07);
      }

      #home-challenge .ch-footer-link:hover svg {
        transform:translateX(3px);
      }
    }

    /* KEYBOARD ACCESSIBILITY */

    #ch3-standout:focus-visible ~ .ch-console-inner
    label[for="ch3-standout"],
    #ch3-connected:focus-visible ~ .ch-console-inner
    label[for="ch3-connected"],
    #ch3-measurement:focus-visible ~ .ch-console-inner
    label[for="ch3-measurement"] {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    #home-challenge a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @keyframes ch3Reveal {
      from {
        opacity:0;
        transform:translateY(5px);
      }
      to {
        opacity:1;
        transform:translateY(0);
      }
    }

    @media(prefers-reduced-motion:reduce) {
      #home-challenge .ch-panel {
        animation:none;
      }

      #home-challenge .ch-option,
      #home-challenge .ch-option::before,
      #home-challenge .ch-btn {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      03.02 — ORIGINAL GRID + DECORATIVE TYPOGRAPHY

      No background image or solid section overlay.
      Existing global black grid stays visible.
  ============================================================ */}

  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    <OutlinedText
      text="FOCUS"
      className="absolute top-[12%] left-0 text-[11rem] md:text-[15rem] pointer-events-none"
      direction="left"
      stopPosition={25}
      parallax={true}
      parallaxSpeed={0.2}
      opacity={0.025}
      delay={0}
    />
  </div>

  {/* ============================================================
      03.03 — MAIN CONTENT
  ============================================================ */}

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* SECTION HEADING */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.15}
      >
        <header className="ch-intro">
          <p className="ch-eyebrow">
            SOUND FAMILIAR?
          </p>

          <h2
            id="home-challenge-heading"
            className="ch-heading"
          >
            Your Marketing Is Busy.
            {" "}Is It Moving You Forward?
          </h2>

          <p className="ch-description">
            More posts. More ads. More platforms.
            If they're all pulling in different directions,
            it's time to connect the work.
          </p>
        </header>
      </AnimatedSection>

      {/* ========================================================
          03.04 — INTERACTIVE CHALLENGE CONSOLE
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.08}
      >
        {(() => {
          const challenges = [
            {
              id: "standout",
              icon: Target,
              title: "Hard to Stand Out",
              summary:
                "People see your brand. Do they remember why it matters?",
              heading:
                "Give Them a Reason to Remember You.",
              description:
                "A clear position, a recognisable identity and a consistent message help people understand why your brand matters.",
              steps: [
                { title: "Positioning", icon: Target },
                { title: "Identity", icon: Palette },
                { title: "Recognition", icon: Eye },
              ],
              focus: [
                "Clarify what makes your offer different.",
                "Give the brand a recognisable look and voice.",
                "Carry that identity across your key touchpoints.",
              ],
              cta: "Explore Branding & Strategy",
              link: routeTo.service("branding-identity"),
            },
            {
              id: "connected",
              icon: Layers,
              title: "Channels Feel Disconnected",
              summary:
                "Your website, social pages and ads should tell a story people can follow.",
              heading:
                "Make Every Channel Tell the Same Story.",
              description:
                "Connect the message, the creative and the next step so your website, social content and advertising feel like the same brand.",
              steps: [
                { title: "Message", icon: MessageSquare },
                { title: "Channels", icon: Layers },
                { title: "Experience", icon: Monitor },
              ],
              focus: [
                "Give each channel a clear role.",
                "Keep the message and creative consistent.",
                "Connect campaigns to the pages people reach.",
              ],
              cta: "Explore Digital Marketing",
              link: routeTo.service("digital-marketing"),
            },
            {
              id: "measurement",
              icon: BarChart3,
              title: "Not Sure What's Working",
              summary:
                "Views and clicks are useful. Knowing what brings enquiries and sales is more useful.",
              heading:
                "Know What Deserves Your Next Move.",
              description:
                "Bring reporting back to your business goals. Look at the actions being generated, where people drop off and what is worth testing next.",
              steps: [
                { title: "Track", icon: BarChart3 },
                { title: "Understand", icon: Search },
                { title: "Improve", icon: TrendingUp },
              ],
              focus: [
                "Agree on the business actions worth measuring.",
                "Connect campaign reports with website and enquiry data.",
                "Use the findings to prioritise the next test.",
              ],
              cta: "Explore Analytics & Reporting",
              link: routeTo.service("analytics-reporting"),
            },
          ];

          return (
            <fieldset className="ch-console">
              <legend className="ch-hidden">
                Choose a marketing challenge to explore.
              </legend>

              {/* RADIO CONTROLS — ZERO EXTRA STATE */}

              {challenges.map((challenge, index) => (
                <input
                  key={challenge.id}
                  id={`ch3-${challenge.id}`}
                  type="radio"
                  name="ch3-marketing-selector"
                  className="ch-hidden"
                  defaultChecked={index === 0}
                  aria-controls={`ch3-panel-${challenge.id}`}
                />
              ))}

              <div className="ch-console-inner">

                {/* ============================================
                    LEFT — COMPACT CHALLENGE NAVIGATION
                ============================================ */}

                <div className="ch-nav">
                  <div className="ch-nav-header">
                    <span className="ch-nav-label">
                      Identify the Challenge
                    </span>
                    <span className="ch-nav-index">
                      03 KEY AREAS
                    </span>
                  </div>

                  {challenges.map((item) => {
                    const Icon = item.icon;

                    return (
                      <label
                        key={item.id}
                        htmlFor={`ch3-${item.id}`}
                        className="ch-option"
                      >
                        <span
                          className="ch-option-icon"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>

                        <span className="ch-option-copy">
                          <span className="ch-option-title">
                            {item.title}
                          </span>

                          <span className="ch-option-summary">
                            {item.summary}
                          </span>
                        </span>

                        <ArrowRight
                          className="ch-option-arrow"
                          aria-hidden="true"
                        />
                      </label>
                    );
                  })}
                </div>

                {/* ============================================
                    RIGHT — DYNAMIC STRATEGY STAGE
                ============================================ */}

                <div className="ch-stage">
                  <div className="ch-stage-header">
                    <span className="ch-stage-label">
                      The Opportunity
                    </span>

                    <span className="ch-stage-status">
                      <span
                        className="ch-status-dot"
                        aria-hidden="true"
                      />
                      STRATEGY IN FOCUS
                    </span>
                  </div>

                  {challenges.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.id}
                        id={`ch3-panel-${item.id}`}
                        className={
                          `ch-panel ch-panel-${item.id}`
                        }
                        aria-labelledby={
                          `ch3-panel-title-${item.id}`
                        }
                      >
                        {/* PANEL TOP */}

                        <div className="ch-panel-top">
                          <span
                            className="ch-panel-icon"
                            aria-hidden="true"
                          >
                            <Icon />
                          </span>

                          <span className="ch-panel-index">
                            OPPORTUNITY 0{index + 1} / 03
                          </span>
                        </div>

                        {/* HEADING + DESCRIPTION */}

                        <h3
                          id={`ch3-panel-title-${item.id}`}
                          className="ch-panel-heading"
                        >
                          {item.heading}
                        </h3>

                        <p className="ch-panel-copy">
                          {item.description}
                        </p>

                        {/* CONNECTED STRATEGY FLOW */}

                        <div className="ch-system">
                          <div className="ch-system-caption">
                            <span>Our Direction</span>
                            <span>
                              CONNECTED THINKING
                            </span>
                          </div>

                          <ol className="ch-system-steps">
                            {item.steps.map(
                              (step, stepIndex) => {
                                const StepIcon = step.icon;

                                return (
                                  <li
                                    key={step.title}
                                    className="ch-system-step"
                                  >
                                    <span
                                      className="ch-system-icon"
                                    >
                                      <StepIcon
                                        aria-hidden="true"
                                      />
                                    </span>

                                    <span className="ch-system-step-label">
                                      {step.title}
                                    </span>

                                    <span className="ch-system-step-number">
                                      0{stepIndex + 1}
                                    </span>
                                  </li>
                                );
                              }
                            )}
                          </ol>
                        </div>

                        {/* STRATEGIC FOCUS */}

                        <ul className="ch-focus">
                          {item.focus.map((point) => (
                            <li key={point}>
                              <CheckCircle
                                aria-hidden="true"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* COMPACT CTA */}

                        <div className="ch-panel-actions">
                          <Link
                            to={item.link}
                            className="ch-btn ch-btn-primary"
                          >
                            {item.cta}
                            <ArrowRight aria-hidden="true" />
                          </Link>

                          <Link
                            to={ROUTES.contact}
                            className="ch-btn ch-btn-secondary"
                          >
                            Discuss Your Goals
                            <ArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

              </div>
            </fieldset>
          );
        })()}
      </AnimatedSection>

      {/* ========================================================
          03.05 — SECTION CLOSING
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.1}
        amount={0.12}
      >
        <div className="ch-footer">
          <div>
            <h3 className="ch-footer-title">
              Clear Direction Changes Everything.
            </h3>

            <p className="ch-footer-copy">
              Give every channel, campaign and creative
              decision a meaningful purpose.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="ch-footer-link"
          >
            Let's Find Your Next Move
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </div>

  {/* 03.06 — SECTION DIVIDER */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.07]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 03 ================= */}






















{/* ============================================================
    SECTION 04 — WHO WE ARE / AGENCY INTRODUCTION
    INCHTOMILEZ — CINEMATIC BRAND COMMAND CENTER

    04.01 — Scoped Premium Design System
    04.02 — Cinematic 3-Image Background Slider
    04.03 — Editorial Agency Introduction
    04.04 — Immersive Brand Command Center
    04.05 — Connected Capabilities
    04.06 — Integrated Brand Philosophy Rail

    Preserves:
    - Existing Raleway typography
    - Original black / charcoal theme
    - Compact yellow CTA buttons
    - Existing routes and libraries
    - SEO heading hierarchy
    - No TextScramble
    - No additional dependencies
============================================================ */}

<section
  id="home-agency"
  className="relative isolate overflow-hidden bg-[#050607]"
  aria-labelledby="home-agency-heading"
  style={{
    paddingBlock: "clamp(64px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ========================================================
      04.01 — PREMIUM SCOPED STYLES
  ======================================================== */}

  <style>{`
    #home-agency {
      --a4-border:rgba(255,255,255,.17);
      --a4-muted:#b8bac2;
    }

    /* CINEMATIC BACKGROUND SLIDER */

    #home-agency .a4-background {
      position:absolute;
      inset:0;
      z-index:0;
      overflow:hidden;
      pointer-events:none;
      background:#050607;
    }

    #home-agency .a4-background-image {
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      opacity:0;
      animation:a4Fade 24s infinite;
    }

    #home-agency .a4-background-image:nth-child(1) {
      animation-delay:0s;
    }

    #home-agency .a4-background-image:nth-child(2) {
      animation-delay:-16s;
    }

    #home-agency .a4-background-image:nth-child(3) {
      animation-delay:-8s;
    }

    @keyframes a4Fade {
      0% {opacity:1}
      29% {opacity:1}
      33.333%,96% {opacity:0}
      100% {opacity:1}
    }

    #home-agency .a4-background-overlay {
      position:absolute;
      inset:0;
      background:
        linear-gradient(
          90deg,
          rgba(0,0,0,.94) 0%,
          rgba(0,0,0,.87) 39%,
          rgba(0,0,0,.68) 72%,
          rgba(0,0,0,.79)
        ),
        linear-gradient(
          180deg,
          #050607 0%,
          transparent 23%,
          rgba(0,0,0,.4) 75%,
          #050607 100%
        );
    }

    /* MAIN CONTAINER */

    #home-agency .a4-wrapper {
      position:relative;
      z-index:1;
      max-width:1152px;
      margin-inline:auto;
    }

    #home-agency .a4-topbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      gap:12px;
      margin-bottom:35px;
      padding-bottom:16px;
      border-bottom:1px solid rgba(255,255,255,.17);
    }

    #home-agency .a4-topbar span {
      color:#bdc0c7;
      font-size:11px;
      font-weight:500;
      letter-spacing:.08em;
      line-height:1.5;
    }

    /* PRIMARY EDITORIAL LAYOUT */

    #home-agency .a4-main {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:start;
      gap:30px;
    }

    #home-agency .a4-intro {
      min-width:0;
      align-self:start;
    }

    #home-agency .a4-eyebrow {
      margin:0 0 17px;
      color:#c3c6cc;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      line-height:1.5;
      text-transform:uppercase;
    }

    #home-agency .a4-heading {
      margin:0;
      max-width:590px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-agency .a4-lead {
      margin:22px 0 0;
      max-width:535px;
      color:#f0f1f3;
      font-size:15px;
      line-height:1.75;
    }

    #home-agency .a4-description {
      margin:14px 0 0;
      max-width:530px;
      color:#c1c4cb;
      font-size:14px;
      line-height:1.75;
    }

    /* ACTION BUTTONS */

    #home-agency .a4-actions {
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:10px;
      margin-top:25px;
    }

    #home-agency .a4-button {
      display:inline-flex;
      justify-content:center;
      align-items:center;
      gap:8px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-agency .a4-button svg {
      width:16px;
      height:16px;
      flex-shrink:0;
    }

    #home-agency .a4-primary {
      color:#050505;
      background:#eab308;
      border:1px solid #eab308;
    }

    #home-agency .a4-secondary {
      color:#fff;
      background:rgba(9,10,12,.72);
      border:1px solid rgba(255,255,255,.28);
    }

    /* EDITORIAL QUOTE */

    #home-agency .a4-quote {
      position:relative;
      max-width:530px;
      margin-top:31px;
      padding:18px 0 0 17px;
      border-top:1px solid rgba(255,255,255,.16);
    }

    #home-agency .a4-quote::before {
      content:"";
      position:absolute;
      left:0;
      top:19px;
      bottom:2px;
      width:2px;
      background:rgba(255,255,255,.55);
    }

    #home-agency .a4-quote p {
      margin:0;
      color:#e0e2e6;
      font-size:14px;
      font-weight:500;
      line-height:1.7;
    }

    /* ======================================================
       IMMERSIVE BRAND COMMAND CENTER
    ====================================================== */

    #home-agency .a4-command {
      position:relative;
      align-self:start;
      min-width:0;
      height:510px;
      overflow:hidden;
      isolation:isolate;
      border:1px solid rgba(255,255,255,.22);
      border-radius:16px;
      background:#0b0c0e;
      box-shadow:0 24px 70px rgba(0,0,0,.26);
    }

    #home-agency .a4-command-photo {
      position:absolute;
      inset:0;
      z-index:-3;
      width:100%;
      height:100%;
      object-fit:cover;
      filter:saturate(.65);
      transition:transform .8s ease;
    }

    #home-agency .a4-command-shade {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.6),
          rgba(0,0,0,.18) 25%,
          rgba(0,0,0,.74) 62%,
          rgba(0,0,0,.96)
        );
    }

    /* TOP COMMAND META */

    #home-agency .a4-command-header {
      position:absolute;
      top:20px;
      left:20px;
      right:20px;
      z-index:2;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    #home-agency .a4-command-label {
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:9px 11px;
      border:1px solid rgba(255,255,255,.23);
      border-radius:7px;
      background:rgba(6,7,9,.73);
      backdrop-filter:blur(12px);
      color:#fff;
      font-size:10px;
      font-weight:600;
      letter-spacing:.07em;
    }

    #home-agency .a4-command-index {
      color:#e0e1e4;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    /* CENTRAL BRAND COMPOSITION */

    #home-agency .a4-system {
      position:absolute;
      inset:76px 20px 150px;
      display:flex;
      align-items:center;
      justify-content:center;
      pointer-events:none;
    }

    #home-agency .a4-ring {
      position:absolute;
      width:min(62%,280px);
      aspect-ratio:1;
      border:1px solid rgba(255,255,255,.32);
      border-radius:50%;
      box-shadow:0 0 45px rgba(255,255,255,.035);
    }

    #home-agency .a4-ring::before {
      content:"";
      position:absolute;
      inset:18px;
      border:1px dashed rgba(255,255,255,.26);
      border-radius:50%;
      animation:a4Rotate 48s linear infinite;
    }

    #home-agency .a4-ring::after {
      content:"";
      position:absolute;
      inset:-28px;
      border:1px solid rgba(255,255,255,.13);
      border-radius:50%;
    }

    @keyframes a4Rotate {
      from {transform:rotate(0deg)}
      to {transform:rotate(360deg)}
    }

    #home-agency .a4-system-core {
      position:relative;
      z-index:1;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:7px;
      width:170px;
      min-height:106px;
      padding:17px;
      border:1px solid rgba(255,255,255,.37);
      border-radius:12px;
      background:rgba(7,8,10,.88);
      backdrop-filter:blur(20px);
      box-shadow:0 15px 45px rgba(0,0,0,.4);
      text-align:center;
    }

    #home-agency .a4-system-core strong {
      color:#fff;
      font-size:17px;
      font-weight:700;
      line-height:1.3;
    }

    #home-agency .a4-system-core span {
      color:#c9cbd0;
      font-size:10px;
      line-height:1.5;
    }

    /* FLOATING CAPABILITY LABELS */

    #home-agency .a4-floating {
      position:absolute;
      z-index:2;
      display:flex;
      align-items:center;
      gap:9px;
      min-height:38px;
      padding:9px 12px;
      border:1px solid rgba(255,255,255,.25);
      border-radius:8px;
      background:rgba(7,8,10,.85);
      backdrop-filter:blur(16px);
      color:#fff;
      font-size:11px;
      font-weight:600;
      pointer-events:none;
    }

    #home-agency .a4-floating svg {
      width:15px;
      height:15px;
    }

    #home-agency .a4-float-one {
      top:23%;
      left:6%;
    }

    #home-agency .a4-float-two {
      top:25%;
      right:6%;
    }

    #home-agency .a4-float-three {
      bottom:26%;
      left:7%;
    }

    #home-agency .a4-float-four {
      bottom:25%;
      right:6%;
    }

    /* LOWER COMMAND CONTENT */

    #home-agency .a4-command-footer {
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      z-index:2;
      padding:24px;
      background:linear-gradient(
        180deg,
        transparent,
        rgba(3,4,5,.96) 26%
      );
    }

    #home-agency .a4-command-footer h3 {
      margin:0;
      color:#fff;
      font-size:22px;
      font-weight:600;
      line-height:1.35;
    }

    #home-agency .a4-command-footer p {
      max-width:430px;
      margin:10px 0 0;
      color:#c5c7cd;
      font-size:13px;
      line-height:1.7;
    }

    /* ======================================================
       CONNECTED CAPABILITY RAIL
    ====================================================== */

    #home-agency .a4-capability-rail {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      margin-top:24px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.18);
      border-radius:13px;
      background:rgba(8,9,11,.91);
      backdrop-filter:blur(18px);
    }

    #home-agency .a4-capability {
      position:relative;
      display:flex;
      align-items:center;
      gap:13px;
      min-width:0;
      min-height:83px;
      padding:19px;
      color:#fff;
      text-decoration:none;
      border-bottom:1px solid rgba(255,255,255,.11);
      transition:
        background-color .2s ease;
    }

    #home-agency .a4-capability:last-child {
      border-bottom:0;
    }

    #home-agency .a4-capability-icon {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      flex-shrink:0;
      width:38px;
      height:38px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:9px;
      background:rgba(255,255,255,.035);
    }

    #home-agency .a4-capability-icon svg {
      width:18px;
      height:18px;
    }

    #home-agency .a4-capability-copy {
      flex:1;
      min-width:0;
    }

    #home-agency .a4-capability h3 {
      margin:0;
      color:#fff;
      font-size:14px;
      font-weight:600;
      line-height:1.4;
    }

    #home-agency .a4-capability p {
      margin:5px 0 0;
      color:#aeb1b8;
      font-size:12px;
      line-height:1.55;
    }

    #home-agency .a4-capability-arrow {
      flex-shrink:0;
      width:16px;
      height:16px;
      color:#b7bac1;
      transform:rotate(-45deg);
      transition:transform .2s ease;
    }

    /* CLOSING EDITORIAL LINE */

    #home-agency .a4-closing {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:16px;
      margin-top:22px;
      padding-top:20px;
      border-top:1px solid rgba(255,255,255,.14);
    }

    #home-agency .a4-closing p {
      margin:0;
      color:#c1c4ca;
      font-size:13px;
      line-height:1.7;
    }

    #home-agency .a4-closing-link {
      display:inline-flex;
      align-items:center;
      gap:9px;
      min-height:40px;
      color:#fff;
      font-size:13px;
      font-weight:600;
      text-decoration:none;
    }

    #home-agency .a4-closing-link svg {
      width:16px;
      height:16px;
    }

    /* ======================================================
       RESPONSIVE PROPORTIONS
    ====================================================== */

    @media(min-width:1024px) {
      #home-agency .a4-main {
        grid-template-columns:
          minmax(0,44fr)
          minmax(0,56fr);
        gap:clamp(30px,4vw,66px);
      }

      #home-agency .a4-capability-rail {
        grid-template-columns:repeat(4,minmax(0,1fr));
      }

      #home-agency .a4-capability {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.11);
      }

      #home-agency .a4-capability:last-child {
        border-right:0;
      }
    }

    @media(min-width:640px) and (max-width:1023px) {
      #home-agency .a4-capability-rail {
        grid-template-columns:repeat(2,minmax(0,1fr));
      }

      #home-agency .a4-capability:nth-child(odd) {
        border-right:1px solid rgba(255,255,255,.11);
      }

      #home-agency .a4-capability:nth-child(n+3) {
        border-bottom:0;
      }
    }

    @media(max-width:639px) {
      #home-agency .a4-topbar {
        margin-bottom:26px;
      }

      #home-agency .a4-main {
        gap:30px;
      }

      #home-agency .a4-command {
        height:430px;
      }

      #home-agency .a4-command-header {
        top:15px;
        left:15px;
        right:15px;
      }

      #home-agency .a4-floating {
        font-size:10px;
        padding:7px 9px;
        min-height:32px;
      }

      #home-agency .a4-floating svg {
        width:13px;
        height:13px;
      }

      #home-agency .a4-float-one {
        top:24%;
        left:3%;
      }

      #home-agency .a4-float-two {
        top:25%;
        right:3%;
      }

      #home-agency .a4-float-three {
        bottom:33%;
        left:4%;
      }

      #home-agency .a4-float-four {
        bottom:32%;
        right:4%;
      }

      #home-agency .a4-system {
        inset:66px 12px 126px;
      }

      #home-agency .a4-ring {
        width:min(57%,220px);
      }

      #home-agency .a4-system-core {
        width:135px;
        min-height:92px;
        padding:12px;
      }

      #home-agency .a4-system-core strong {
        font-size:14px;
      }

      #home-agency .a4-command-footer {
        padding:18px;
      }

      #home-agency .a4-command-footer h3 {
        font-size:19px;
      }
    }

    @media(max-width:380px) {
      #home-agency .a4-floating {
        font-size:9px;
        gap:5px;
      }

      #home-agency .a4-command {
        height:410px;
      }

      #home-agency .a4-ring {
        width:185px;
      }

      #home-agency .a4-float-one,
      #home-agency .a4-float-three {
        left:2%;
      }

      #home-agency .a4-float-two,
      #home-agency .a4-float-four {
        right:2%;
      }
    }

    /* HOVER EFFECTS */

    @media(hover:hover) and (pointer:fine) {
      #home-agency .a4-command:hover
      .a4-command-photo {
        transform:scale(1.04);
      }

      #home-agency .a4-capability:hover {
        background:rgba(255,255,255,.075);
      }

      #home-agency .a4-capability:hover
      .a4-capability-arrow {
        transform:rotate(0deg);
      }

      #home-agency .a4-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-agency .a4-secondary:hover {
        border-color:rgba(255,255,255,.5);
        background:rgba(255,255,255,.09);
      }
    }

    /* ACCESSIBILITY AND REDUCED MOTION */

    #home-agency a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:4px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-agency .a4-background-image {
        animation:none;
        opacity:0;
      }

      #home-agency
      .a4-background-image:first-child {
        opacity:1;
      }

      #home-agency .a4-ring::before {
        animation:none;
      }

      #home-agency .a4-command-photo,
      #home-agency .a4-button,
      #home-agency .a4-capability,
      #home-agency .a4-capability-arrow {
        transition:none;
      }
    }
  `}</style>

  {/* ========================================================
      04.02 — CINEMATIC BACKGROUND IMAGE SLIDER
  ======================================================== */}

  <div
    className="a4-background"
    aria-hidden="true"
  >
    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=85"
      className="a4-background-image"
      alt=""
      loading="lazy"
      decoding="async"
    />

    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85"
      className="a4-background-image"
      alt=""
      loading="lazy"
      decoding="async"
    />

    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=85"
      className="a4-background-image"
      alt=""
      loading="lazy"
      decoding="async"
    />

    <div className="a4-background-overlay" />
  </div>

  {/* ========================================================
      04.03 — MAIN CONTENT
  ======================================================== */}

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="a4-wrapper">

      {/* SECTION TOP META */}

      <div className="a4-topbar">
        <span>
          04 / THE AGENCY BEHIND THE IDEAS
        </span>

        <span>
          STRATEGY × CREATIVE × MEDIA × TECHNOLOGY
        </span>
      </div>

      <div className="a4-main">

        {/* ====================================================
            LEFT — EDITORIAL AGENCY INTRODUCTION
        ==================================================== */}

        <AnimatedSection
          animation="fadeInUp"
          delay={0.08}
          amount={0.12}
        >
          <div className="a4-intro">

            <p className="a4-eyebrow">
              WHO WE ARE / INCHTOMILEZ
            </p>

            <h2
              id="home-agency-heading"
              className="a4-heading"
            >
              Digital Marketing Agency in Indore
              for Brands Ready to Make Their Mark.
            </h2>

            <p className="a4-lead">
              You bring the ambition. We bring the
              strategy, creative and execution to help
              the right people notice your brand —
              and remember it.
            </p>

            <p className="a4-description">
              We connect branding, digital marketing,
              advertising, creative and technology
              so every part of your brand experience
              feels intentional.
            </p>

            {/* ACTIONS */}

            <div className="a4-actions">
              <Link
                to={ROUTES.contact}
                className="a4-button a4-primary"
              >
                Let's Talk
                <ArrowRight aria-hidden="true" />
              </Link>

              <Link
                to={ROUTES.about}
                className="a4-button a4-secondary"
              >
                Meet InchToMilez
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            {/* BRAND PHILOSOPHY */}

            <div className="a4-quote">
              <p>
                Your brand should never feel like
                five different teams telling five
                different stories.
              </p>
            </div>

          </div>
        </AnimatedSection>

        {/* ====================================================
            RIGHT — IMMERSIVE BRAND COMMAND CENTER
        ==================================================== */}

        <AnimatedSection
          animation="fadeInUp"
          delay={0.14}
          amount={0.1}
        >
          <div className="a4-command">

            {/* CINEMATIC PHOTO */}

            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
              alt=""
              className="a4-command-photo"
              loading="lazy"
              decoding="async"
            />

            <div
              className="a4-command-shade"
              aria-hidden="true"
            />

            {/* TOP META */}

            <div className="a4-command-header">
              <span className="a4-command-label">
                <Layers
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                CONNECTED THINKING
              </span>

              <span className="a4-command-index">
                01 / 04
              </span>
            </div>

            {/* CENTRAL SYSTEM */}

            <div
              className="a4-system"
              aria-hidden="true"
            >
              <div className="a4-ring" />

              <div className="a4-system-core">
                <strong>INCHTOMILEZ</strong>
                <span>
                  ONE CONNECTED BRAND
                </span>
              </div>
            </div>

            {/* FLOATING CAPABILITY LABELS */}

            <div
              className="a4-floating a4-float-one"
              aria-hidden="true"
            >
              <Target />
              STRATEGY
            </div>

            <div
              className="a4-floating a4-float-two"
              aria-hidden="true"
            >
              <Palette />
              CREATIVE
            </div>

            <div
              className="a4-floating a4-float-three"
              aria-hidden="true"
            >
              <Megaphone />
              MEDIA
            </div>

            <div
              className="a4-floating a4-float-four"
              aria-hidden="true"
            >
              <Code />
              TECHNOLOGY
            </div>

            {/* LOWER PHILOSOPHY */}

            <div className="a4-command-footer">
              <h3>
                We Make the Pieces Work Together.
              </h3>

              <p>
                One direction. One recognisable brand.
                Every experience working toward
                the bigger picture.
              </p>
            </div>

          </div>
        </AnimatedSection>

      </div>

      {/* ====================================================
          04.04 — CONNECTED CAPABILITY RAIL
      ==================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="a4-capability-rail">

          {[
            {
              title: "Strategy",
              description: "Know what makes you different.",
              icon: Target,
              link: routeTo.service("branding-identity"),
            },
            {
              title: "Creative",
              description: "Make your idea recognisable.",
              icon: Palette,
              link: routeTo.service("graphic-design"),
            },
            {
              title: "Media",
              description: "Reach the right audience.",
              icon: Megaphone,
              link: routeTo.service("advertising"),
            },
            {
              title: "Technology",
              description: "Make the next step easier.",
              icon: Code,
              link: routeTo.service("web-design-development"),
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="a4-capability"
              >
                <span
                  className="a4-capability-icon"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <span className="a4-capability-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </span>

                <ArrowRight
                  className="a4-capability-arrow"
                  aria-hidden="true"
                />
              </Link>
            );
          })}

        </div>
      </AnimatedSection>

      {/* ====================================================
          04.05 — FINAL EDITORIAL STATEMENT
      ==================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.18}
        amount={0.1}
      >
        <div className="a4-closing">

          <p>
            From the first impression to the
            next conversation — everything connected.
          </p>

          <Link
            to={ROUTES.contact}
            className="a4-closing-link"
          >
            Let's Build Something Meaningful
            <ArrowRight aria-hidden="true" />
          </Link>

        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* ========================================================
      04.06 — SECTION BOUNDARY
  ======================================================== */}

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 04 ================= */}


























{/* ============================================================
    SECTION 05 — CONNECTED DIGITAL MARKETING
    INCHTOMILEZ — PREMIUM CAMPAIGN CANVAS

    Layout:
    - Full-width cinematic introduction
    - Asymmetric 12-column marketing bento
    - Large photographic feature panels
    - Black-glass service cards
    - Compact connected-capability rail

    Theme: Original InchToMilez Black / Yellow Buttons
    Typography: Original Raleway, existing heading sizes
    Animation: Smooth whole-element reveal only
    No TextScramble, accordions or tabbed selectors
    No new dependencies
============================================================ */}

<section
  id="home-digital"
  className="relative isolate overflow-hidden"
  aria-labelledby="home-digital-heading"
  style={{
    paddingBlock: "clamp(56px,7vw,104px)",
    backgroundColor: "#050607",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      05.01 — SELF-CONTAINED CSS
  ============================================================ */}

  <style>{`
    #home-digital .dm5-atmosphere {
      position:absolute;
      inset:0;
      z-index:-1;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 70% 25%,
          rgba(255,255,255,.055),
          transparent 40%
        ),
        linear-gradient(
          180deg,#050607,#090a0c 50%,#050607
        );
    }

    /* EDITORIAL INTRODUCTION */

    #home-digital .dm5-intro {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:30px;
    }

    #home-digital .dm5-eyebrow {
      margin:0 0 15px;
      color:#aeb1b8;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-digital .dm5-heading {
      margin:0;
      max-width:680px;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      color:#fff;
      text-wrap:balance;
    }

    #home-digital .dm5-lead {
      margin:16px 0 0;
      max-width:650px;
      color:#d4d6dc;
      font-size:15px;
      line-height:1.75;
    }

    #home-digital .dm5-intro-right {
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:16px;
    }

    #home-digital .dm5-intro-note {
      margin:0;
      max-width:360px;
      color:#b6b9c0;
      font-size:14px;
      line-height:1.7;
    }

    #home-digital .dm5-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.35;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-digital .dm5-button svg {
      width:16px;
      height:16px;
      flex-shrink:0;
    }

    #home-digital .dm5-primary {
      background:#eab308;
      border:1px solid #eab308;
      color:#000;
    }

    #home-digital .dm5-secondary {
      color:#fff;
      background:rgba(8,9,11,.82);
      border:1px solid rgba(255,255,255,.25);
    }

    /* ASYMMETRIC 12-COLUMN CANVAS */

    #home-digital .dm5-canvas {
      display:grid;
      grid-template-columns:repeat(12,minmax(0,1fr));
      gap:12px;
      align-items:stretch;
    }

    #home-digital .dm5-card {
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      min-width:0;
      padding:22px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:13px;
      background:rgba(9,10,12,.94);
      color:#fff;
      overflow:hidden;
      isolation:isolate;
      text-decoration:none;
      transition:
        border-color .25s ease,
        transform .25s ease,
        box-shadow .25s ease;
    }

    #home-digital .dm5-card::before {
      content:"";
      position:absolute;
      inset:0;
      z-index:-1;
      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.04),
          transparent 60%
        );
      pointer-events:none;
    }

    #home-digital .dm5-photo {
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
      z-index:-3;
      filter:saturate(.7);
      transition:transform .65s ease;
    }

    #home-digital .dm5-photo-shade {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          0deg,
          rgba(0,0,0,.97),
          rgba(0,0,0,.68) 50%,
          rgba(0,0,0,.23)
        );
    }

    /* BENTO PROPORTIONS */

    #home-digital .dm5-feature {
      grid-column:span 12;
      min-height:380px;
    }

    #home-digital .dm5-discovery {
      grid-column:span 12;
      min-height:240px;
    }

    #home-digital .dm5-attention {
      grid-column:span 12;
      min-height:240px;
    }

    #home-digital .dm5-experience {
      grid-column:span 12;
      min-height:255px;
    }

    #home-digital .dm5-measurement {
      grid-column:span 12;
      min-height:255px;
    }

    /* CARD CONTENT */

    #home-digital .dm5-top {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    #home-digital .dm5-index {
      color:#c6c8ce;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-digital .dm5-icon {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:37px;
      height:37px;
      flex-shrink:0;
      border:1px solid rgba(255,255,255,.2);
      border-radius:9px;
      background:rgba(0,0,0,.37);
      backdrop-filter:blur(10px);
    }

    #home-digital .dm5-icon svg {
      width:18px;
      height:18px;
      color:#fff;
    }

    #home-digital .dm5-card-content {
      position:relative;
      max-width:540px;
    }

    #home-digital .dm5-card-title {
      margin:0;
      color:#fff;
      font-size:20px;
      font-weight:600;
      line-height:1.3;
    }

    #home-digital .dm5-feature .dm5-card-title {
      font-size:clamp(23px,2.3vw,31px);
      max-width:560px;
    }

    #home-digital .dm5-card-description {
      margin:11px 0 0;
      max-width:500px;
      color:#d2d4da;
      font-size:13px;
      line-height:1.7;
    }

    #home-digital .dm5-feature .dm5-card-description {
      font-size:14px;
      max-width:530px;
    }

    #home-digital .dm5-tags {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin:16px 0 0;
      padding:0;
      list-style:none;
    }

    #home-digital .dm5-tags li {
      padding:7px 10px;
      color:#e4e5e8;
      font-size:11px;
      line-height:1.4;
      border:1px solid rgba(255,255,255,.2);
      border-radius:6px;
      background:rgba(5,6,8,.7);
    }

    #home-digital .dm5-card-action {
      display:inline-flex;
      align-items:center;
      gap:8px;
      width:fit-content;
      min-height:38px;
      margin-top:20px;
      color:#fff;
      font-size:13px;
      font-weight:600;
    }

    #home-digital .dm5-card-action svg {
      width:15px;
      height:15px;
      transition:transform .2s ease;
    }

    /* CONNECTED SYSTEM RAIL */

    #home-digital .dm5-rail {
      display:grid;
      grid-template-columns:1fr;
      margin-top:14px;
      border:1px solid rgba(255,255,255,.15);
      border-radius:12px;
      background:rgba(9,10,12,.94);
      overflow:hidden;
    }

    #home-digital .dm5-rail-item {
      display:flex;
      align-items:flex-start;
      gap:13px;
      min-width:0;
      padding:19px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-digital .dm5-rail-item:last-child {
      border-bottom:0;
    }

    #home-digital .dm5-rail-number {
      color:#8f929b;
      font-size:11px;
      font-weight:600;
      flex-shrink:0;
    }

    #home-digital .dm5-rail-item strong {
      display:block;
      color:#fff;
      font-size:13px;
      font-weight:600;
      line-height:1.45;
    }

    #home-digital .dm5-rail-item p {
      margin:5px 0 0;
      color:#a8abb3;
      font-size:12px;
      line-height:1.6;
    }

    /* FINAL CTA */

    #home-digital .dm5-footer {
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      justify-content:space-between;
      gap:20px;
      margin-top:24px;
      padding:22px;
      border:1px solid rgba(255,255,255,.15);
      border-radius:12px;
      background:rgba(10,11,13,.9);
    }

    #home-digital .dm5-footer h3 {
      margin:0;
      color:#fff;
      font-size:18px;
      font-weight:600;
      line-height:1.4;
    }

    #home-digital .dm5-footer p {
      margin:6px 0 0;
      color:#aeb1b8;
      font-size:13px;
      line-height:1.65;
    }

    /* RESPONSIVE BENTO GRID */

    @media(min-width:700px) {
      #home-digital .dm5-feature {
        grid-column:span 7;
        min-height:405px;
      }

      #home-digital .dm5-discovery {
        grid-column:span 5;
        min-height:405px;
      }

      #home-digital .dm5-attention {
        grid-column:span 5;
        min-height:270px;
      }

      #home-digital .dm5-experience {
        grid-column:span 7;
        min-height:270px;
      }

      #home-digital .dm5-measurement {
        grid-column:span 12;
        min-height:235px;
      }
    }

    @media(min-width:1024px) {
      #home-digital .dm5-intro {
        grid-template-columns:
          minmax(0,1.4fr) minmax(0,.6fr);
        gap:50px;
      }

      #home-digital .dm5-intro-right {
        align-items:flex-end;
        text-align:right;
      }

      #home-digital .dm5-feature {
        grid-column:span 7;
        min-height:410px;
      }

      #home-digital .dm5-discovery {
        grid-column:span 5;
        min-height:410px;
      }

      #home-digital .dm5-attention {
        grid-column:span 4;
        min-height:285px;
      }

      #home-digital .dm5-experience {
        grid-column:span 4;
        min-height:285px;
      }

      #home-digital .dm5-measurement {
        grid-column:span 4;
        min-height:285px;
      }

      #home-digital .dm5-rail {
        grid-template-columns:
          repeat(4,minmax(0,1fr));
      }

      #home-digital .dm5-rail-item {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-digital .dm5-rail-item:last-child {
        border-right:0;
      }
    }

    /* INTERACTIONS */

    @media(hover:hover) and (pointer:fine) {
      #home-digital .dm5-card:hover {
        transform:translateY(-3px);
        border-color:rgba(255,255,255,.42);
        box-shadow:0 18px 45px rgba(0,0,0,.26);
      }

      #home-digital .dm5-card:hover .dm5-photo {
        transform:scale(1.055);
      }

      #home-digital .dm5-card:hover
      .dm5-card-action svg {
        transform:translateX(4px);
      }

      #home-digital .dm5-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-digital .dm5-secondary:hover {
        border-color:rgba(255,255,255,.5);
        background:rgba(255,255,255,.07);
      }
    }

    #home-digital a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-digital .dm5-card,
      #home-digital .dm5-photo,
      #home-digital .dm5-button,
      #home-digital .dm5-card-action svg {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      05.02 — PREMIUM ATMOSPHERIC BACKGROUND
  ============================================================ */}

  <div
    className="dm5-atmosphere"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          05.03 — EDITORIAL INTRODUCTION
      ======================================================== */}

      <AnimatedSection animation="fadeInUp" delay={0.08}>
        <header className="dm5-intro">

          <div>
            <p className="dm5-eyebrow">
              DIGITAL MARKETING / THE CONNECTED SYSTEM
            </p>

            <h2
              id="home-digital-heading"
              className="dm5-heading"
            >
              Your Brand Doesn't Need More Noise.
              It Needs More Momentum.
            </h2>

            <p className="dm5-lead">
              Search creates discovery. Creative builds
              attention. Digital experiences make the next
              step easier. Analytics help you understand
              what deserves your next move.
            </p>
          </div>

          <div className="dm5-intro-right">
            <p className="dm5-intro-note">
              Digital marketing should feel like
              one connected experience, not a
              collection of unrelated activities.
            </p>

            <Link
              to={routeTo.service("digital-marketing")}
              className="dm5-button dm5-primary"
            >
              Explore Digital Marketing
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

        </header>
      </AnimatedSection>

      {/* ========================================================
          05.04 — ASYMMETRIC CAMPAIGN CANVAS
      ======================================================== */}

      <AnimatedSection animation="fadeInUp" delay={0.12}>
        <div className="dm5-canvas">

          {/* FEATURE — CORE DIGITAL MARKETING */}

          <Link
            to={routeTo.service("digital-marketing")}
            className="dm5-card dm5-feature"
          >
            <img
              className="dm5-photo"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=85"
              alt=""
              loading="lazy"
              decoding="async"
            />

            <div className="dm5-photo-shade" />

            <div className="dm5-top">
              <span className="dm5-index">
                THE BIGGER PICTURE / 01
              </span>

              <span className="dm5-icon">
                <Target aria-hidden="true" />
              </span>
            </div>

            <div className="dm5-card-content">
              <h3 className="dm5-card-title">
                Every Digital Touchpoint.
                One Clear Direction.
              </h3>

              <p className="dm5-card-description">
                Search, content, social media,
                advertising and your website
                work better when they're planned
                around the same business objective.
              </p>

              <span className="dm5-card-action">
                Explore Our Digital Approach
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* DISCOVERY — SEO + SEARCH */}

          <Link
            to={routeTo.service("digital-marketing")}
            className="dm5-card dm5-discovery"
          >
            <div className="dm5-top">
              <span className="dm5-index">
                DISCOVERY / 02
              </span>

              <span className="dm5-icon">
                <Search aria-hidden="true" />
              </span>
            </div>

            <div className="dm5-card-content">
              <h3 className="dm5-card-title">
                Get Discovered.
              </h3>

              <p className="dm5-card-description">
                Help the right people find your
                business when they're searching
                for answers, services or solutions.
              </p>

              <ul className="dm5-tags">
                <li>SEO</li>
                <li>Local Search</li>
                <li>Content Strategy</li>
              </ul>

              <span className="dm5-card-action">
                Explore Search
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* ATTENTION — ADVERTISING */}

          <Link
            to={routeTo.service("advertising")}
            className="dm5-card dm5-attention"
          >
            <img
              className="dm5-photo"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
              alt=""
              loading="lazy"
              decoding="async"
            />

            <div className="dm5-photo-shade" />

            <div className="dm5-top">
              <span className="dm5-index">
                ATTENTION / 03
              </span>

              <span className="dm5-icon">
                <Megaphone aria-hidden="true" />
              </span>
            </div>

            <div className="dm5-card-content">
              <h3 className="dm5-card-title">
                Make Them Look.
              </h3>

              <p className="dm5-card-description">
                Relevant media, stronger creative
                and messages worth noticing.
              </p>

              <span className="dm5-card-action">
                Explore Advertising
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* EXPERIENCES — WEB + CONVERSION */}

          <Link
            to={routeTo.service("web-design-development")}
            className="dm5-card dm5-experience"
          >
            <div className="dm5-top">
              <span className="dm5-index">
                EXPERIENCE / 04
              </span>

              <span className="dm5-icon">
                <Monitor aria-hidden="true" />
              </span>
            </div>

            <div className="dm5-card-content">
              <h3 className="dm5-card-title">
                Give Every Click a Purpose.
              </h3>

              <p className="dm5-card-description">
                Thoughtful websites, landing
                pages and digital experiences
                that make action easier.
              </p>

              <span className="dm5-card-action">
                Explore Websites
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* LEARNING — ANALYTICS */}

          <Link
            to={ROUTES.contact}
            className="dm5-card dm5-measurement"
          >
            <div className="dm5-top">
              <span className="dm5-index">
                IMPROVEMENT / 05
              </span>

              <span className="dm5-icon">
                <BarChart3 aria-hidden="true" />
              </span>
            </div>

            <div className="dm5-card-content">
              <h3 className="dm5-card-title">
                Learn What Works.
              </h3>

              <p className="dm5-card-description">
                Connect analytics, customer
                actions and campaign reports
                to make more informed decisions.
              </p>

              <span className="dm5-card-action">
                Discuss Performance
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

        </div>
      </AnimatedSection>

      {/* ========================================================
          05.05 — CONNECTED CAPABILITY RAIL
      ======================================================== */}

      <AnimatedSection animation="fadeInUp" delay={0.16}>
        <div className="dm5-rail">
          {[
            {
              number: "01",
              title: "Search",
              text: "Help people discover your brand.",
            },
            {
              number: "02",
              title: "Creative",
              text: "Give them a reason to remember it.",
            },
            {
              number: "03",
              title: "Experience",
              text: "Make the next step clear.",
            },
            {
              number: "04",
              title: "Insights",
              text: "Learn, improve and keep moving.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="dm5-rail-item"
            >
              <span className="dm5-rail-number">
                {item.number}
              </span>

              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ========================================================
          05.06 — FINAL CTA
      ======================================================== */}

      <AnimatedSection animation="fadeInUp" delay={0.18}>
        <div className="dm5-footer">
          <div>
            <h3>
              Ready to Make Every Channel Count?
            </h3>

            <p>
              Let's connect the strategy, creative
              and digital experience around your goals.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="dm5-button dm5-primary"
          >
            Let's Plan Your Next Move
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 05 ================= */}








{/* ============================================================
    SECTION 06 — SEO & LOCAL DISCOVERY
    INCHTOMILEZ — SEARCH INTELLIGENCE STUDIO

    Layout: Full-width Search Interface + Capability Rail
    Theme: Black / Dark Glass / White / Yellow CTA
    Typography: Existing Raleway
    Heading Animation: Whole-element fade-up only
    SEO: Semantic H2 / H3
    Dependencies: Existing HomePage imports
============================================================ */}

<section
  id="home-search-discovery"
  className="relative isolate overflow-hidden"
  aria-labelledby="home-search-heading"
  style={{
    paddingBlock: "clamp(64px,7vw,108px)",
    backgroundColor: "#060708",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      06.01 — SECTION-SCOPED STYLES
  ============================================================ */}
  <style>{`
    #home-search-discovery .seo6-atmosphere {
      position:absolute;inset:0;z-index:-1;
      pointer-events:none;
      background:
        linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.63)),
        url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85')
        center/cover no-repeat;
    }
    #home-search-discovery .seo6-atmosphere::after {
      content:"";position:absolute;inset:0;
      background:linear-gradient(180deg,#060708 0%,transparent 25%,#060708 100%);
    }
    #home-search-discovery .seo6-header {
      display:flex;flex-direction:column;
      gap:24px;margin-bottom:30px;
    }
    #home-search-discovery .seo6-eyebrow {
      margin:0 0 15px;color:#b0b2b8;
      font-size:12px;font-weight:500;
      letter-spacing:.08em;text-transform:uppercase;
    }
    #home-search-discovery .seo6-heading {
      margin:0;color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;line-height:1.25;
      text-wrap:balance;
    }
    #home-search-discovery .seo6-description {
      margin:17px 0 0;color:#d1d5db;
      font-size:15px;line-height:1.7;
      max-width:610px;
    }
    #home-search-discovery .seo6-header-actions {
      display:flex;align-items:center;
      flex-wrap:wrap;gap:10px;
    }
    #home-search-discovery .seo6-btn {
      display:inline-flex;align-items:center;
      justify-content:center;gap:9px;
      min-height:42px;padding:10px 15px;
      border-radius:8px;text-decoration:none;
      font-size:13px;font-weight:600;
      transition:background .2s ease,border-color .2s ease,transform .2s ease;
    }
    #home-search-discovery .seo6-btn svg {
      width:16px;height:16px;
    }
    #home-search-discovery .seo6-primary {
      background:#eab308;color:#000;
      border:1px solid #eab308;
    }
    #home-search-discovery .seo6-secondary {
      color:#fff;background:rgba(7,8,10,.8);
      border:1px solid rgba(255,255,255,.24);
    }

    /* SEARCH STUDIO */

    #home-search-discovery .seo6-studio {
      position:relative;overflow:hidden;
      background:rgba(8,9,11,.94);
      border:1px solid rgba(255,255,255,.2);
      border-radius:16px;
      backdrop-filter:blur(18px);
      box-shadow:0 24px 70px rgba(0,0,0,.28);
    }
    #home-search-discovery .seo6-toolbar {
      display:flex;align-items:center;
      justify-content:space-between;gap:12px;
      padding:15px 20px;
      background:rgba(255,255,255,.025);
      border-bottom:1px solid rgba(255,255,255,.12);
    }
    #home-search-discovery .seo6-dots {
      display:flex;align-items:center;gap:6px;
    }
    #home-search-discovery .seo6-dots span {
      display:block;width:7px;height:7px;
      border-radius:50%;background:#494b51;
    }
    #home-search-discovery .seo6-toolbar-label {
      color:#a8abb2;font-size:11px;
      letter-spacing:.05em;
    }
    #home-search-discovery .seo6-body {
      display:grid;grid-template-columns:1fr;
    }
    #home-search-discovery .seo6-main {
      min-width:0;padding:clamp(19px,3vw,36px);
    }
    #home-search-discovery .seo6-panel-heading {
      margin:0 0 19px;color:#fff;
      font-size:15px;font-weight:600;
    }

    /* VISUAL SEARCH BAR */

    #home-search-discovery .seo6-search {
      display:flex;align-items:center;gap:13px;
      padding:15px 17px;
      min-height:56px;
      background:#151619;
      border:1px solid rgba(255,255,255,.24);
      border-radius:10px;color:#fff;
    }
    #home-search-discovery .seo6-search svg {
      width:19px;height:19px;flex-shrink:0;
      color:#d1d5db;
    }
    #home-search-discovery .seo6-search span {
      font-size:14px;line-height:1.5;
    }
    #home-search-discovery .seo6-search-end {
      margin-left:auto;opacity:.65;
    }

    /* SEARCH RESULTS */

    #home-search-discovery .seo6-results {
      display:grid;gap:11px;margin-top:19px;
    }
    #home-search-discovery .seo6-result {
      padding:18px 20px;
      background:rgba(255,255,255,.025);
      border:1px solid rgba(255,255,255,.12);
      border-radius:10px;
    }
    #home-search-discovery .seo6-result-label {
      color:#a3a6ad;font-size:11px;
      letter-spacing:.07em;text-transform:uppercase;
    }
    #home-search-discovery .seo6-result-title {
      color:#fff;margin:10px 0 7px;
      font-size:17px;font-weight:600;
      line-height:1.4;
    }
    #home-search-discovery .seo6-result-copy {
      margin:0;color:#c0c3ca;
      font-size:13px;line-height:1.7;
    }
    #home-search-discovery .seo6-result-url {
      margin-top:12px;font-size:12px;
      color:#9b9ea6;
    }
    #home-search-discovery .seo6-result-note {
      margin:12px 0 0;
      color:#92959d;font-size:11px;
      line-height:1.6;
    }

    /* SECONDARY CAPABILITY PANEL */

    #home-search-discovery .seo6-side {
      display:flex;flex-direction:column;
      min-width:0;padding:24px;
      background:rgba(17,18,21,.86);
      border-top:1px solid rgba(255,255,255,.13);
    }
    #home-search-discovery .seo6-side-heading {
      color:#fff;font-size:16px;
      font-weight:600;margin:0 0 7px;
    }
    #home-search-discovery .seo6-side-description {
      color:#aeb1b8;font-size:13px;
      line-height:1.65;margin:0 0 20px;
    }
    #home-search-discovery .seo6-capabilities {
      display:grid;gap:10px;
    }
    #home-search-discovery .seo6-capability {
      display:flex;align-items:flex-start;gap:13px;
      padding:15px;
      background:#0a0b0d;
      border:1px solid rgba(255,255,255,.14);
      border-radius:10px;
      text-decoration:none;
      transition:border-color .2s ease,transform .2s ease;
    }
    #home-search-discovery .seo6-cap-icon {
      display:inline-flex;align-items:center;
      justify-content:center;
      width:36px;height:36px;flex-shrink:0;
      border-radius:9px;
      border:1px solid rgba(255,255,255,.17);
      background:rgba(255,255,255,.04);
      color:#fff;
    }
    #home-search-discovery .seo6-cap-icon svg {
      width:18px;height:18px;
    }
    #home-search-discovery .seo6-capability h3 {
      margin:0;color:#fff;font-size:14px;
      font-weight:600;line-height:1.4;
    }
    #home-search-discovery .seo6-capability p {
      margin:5px 0 0;color:#a8abb2;
      font-size:12px;line-height:1.6;
    }
    #home-search-discovery .seo6-side-footer {
      margin-top:auto;padding-top:22px;
    }
    #home-search-discovery .seo6-side-footer p {
      color:#d1d5db;font-size:13px;
      line-height:1.7;margin:0 0 15px;
    }

    /* LOWER EDITORIAL RAIL */

    #home-search-discovery .seo6-rail {
      display:grid;grid-template-columns:1fr;
      margin-top:20px;
      border:1px solid rgba(255,255,255,.15);
      border-radius:12px;
      overflow:hidden;background:rgba(10,11,13,.9);
    }
    #home-search-discovery .seo6-rail-item {
      display:flex;align-items:flex-start;gap:12px;
      padding:19px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }
    #home-search-discovery .seo6-rail-item:last-child {
      border-bottom:0;
    }
    #home-search-discovery .seo6-rail-number {
      color:#9b9ea6;font-size:12px;
      font-weight:600;
    }
    #home-search-discovery .seo6-rail strong {
      display:block;color:#fff;
      font-size:13px;font-weight:600;
    }
    #home-search-discovery .seo6-rail p {
      margin:6px 0 0;color:#a6a9b0;
      font-size:12px;line-height:1.65;
    }

    @media(min-width:900px) {
      #home-search-discovery .seo6-header {
        flex-direction:row;
        align-items:end;
        justify-content:space-between;
        gap:35px;
      }
      #home-search-discovery .seo6-header-actions {
        flex-shrink:0;
      }
      #home-search-discovery .seo6-body {
        grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);
      }
      #home-search-discovery .seo6-side {
        border-top:0;
        border-left:1px solid rgba(255,255,255,.13);
      }
    }
    @media(min-width:640px) {
      #home-search-discovery .seo6-rail {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }
      #home-search-discovery .seo6-rail-item {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }
      #home-search-discovery .seo6-rail-item:last-child {
        border-right:0;
      }
    }
    @media(hover:hover) and (pointer:fine) {
      #home-search-discovery .seo6-primary:hover {
        background:#facc15;transform:translateY(-2px);
      }
      #home-search-discovery .seo6-secondary:hover {
        border-color:rgba(255,255,255,.5);
      }
      #home-search-discovery .seo6-capability:hover {
        border-color:rgba(255,255,255,.43);
        transform:translateY(-2px);
      }
    }
    #home-search-discovery a:focus-visible {
      outline:2px solid #eab308;outline-offset:3px;
    }
    @media(prefers-reduced-motion:reduce) {
      #home-search-discovery .seo6-btn,
      #home-search-discovery .seo6-capability {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      06.02 — FULL-WIDTH CINEMATIC BACKGROUND
  ============================================================ */}
  <div
    className="seo6-atmosphere"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          06.03 — INTRODUCTION
      ======================================================== */}
      <AnimatedSection animation="fadeInUp" delay={0.08}>
        <div className="seo6-header">
          <div>
            <p className="seo6-eyebrow">
              SEARCH. DISCOVERY. AUTHORITY.
            </p>

            <h2
              id="home-search-heading"
              className="seo6-heading"
            >
              Make Your Brand the Answer
              They're Looking For.
            </h2>

            <p className="seo6-description">
              Before people know your name, they're already
              searching for what you do. We help businesses
              build a stronger presence across organic
              search, local discovery and useful content.
            </p>
          </div>

          <div className="seo6-header-actions">
            <Link
              to={routeTo.service("digital-marketing")}
              className="seo6-btn seo6-primary"
            >
              Explore SEO Services
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              to={ROUTES.contact}
              className="seo6-btn seo6-secondary"
            >
              Let's Talk
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ========================================================
          06.04 — SEARCH INTELLIGENCE STUDIO
      ======================================================== */}
      <AnimatedSection animation="fadeInUp" delay={0.12}>
        <div className="seo6-studio">

          <div className="seo6-toolbar">
            <div className="seo6-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="seo6-toolbar-label">
              SEARCH DISCOVERY / INTERFACE PREVIEW
            </span>
          </div>

          <div className="seo6-body">

            {/* LEFT — Organic search illustration */}
            <div className="seo6-main">

              <p className="seo6-panel-heading">
                The Moment Someone Starts Searching.
              </p>

              <div
                className="seo6-search"
                aria-label="Illustrative search query: digital marketing agency in Indore"
              >
                <Search aria-hidden="true" />
                <span>
                  digital marketing agency in indore
                </span>
                <ArrowRight
                  className="seo6-search-end"
                  aria-hidden="true"
                />
              </div>

              <div className="seo6-results">
                <div className="seo6-result">
                  <span className="seo6-result-label">
                    EXAMPLE ORGANIC RESULT
                  </span>

                  <h3 className="seo6-result-title">
                    Digital Marketing Agency in Indore
                    | InchToMilez
                  </h3>

                  <p className="seo6-result-copy">
                    Explore digital marketing, search engine
                    optimization, advertising, branding and
                    web development services that help
                    businesses move forward.
                  </p>

                  <p className="seo6-result-url">
                    www.inchtomilez.com
                  </p>
                </div>

                <div className="seo6-result">
                  <span className="seo6-result-label">
                    SEARCH OPPORTUNITY
                  </span>

                  <h3 className="seo6-result-title">
                    Be Useful Before They Know Your Name.
                  </h3>

                  <p className="seo6-result-copy">
                    A well-structured website, helpful
                    service pages and locally relevant
                    information give people more ways
                    to discover your business.
                  </p>
                </div>
              </div>

              <p className="seo6-result-note">
                Visual illustration only. This is not
                a live Google search result or a ranking claim.
              </p>
            </div>

            {/* RIGHT — SEO capabilities */}
            <div className="seo6-side">
              <h3 className="seo6-side-heading">
                What Stronger Visibility Takes
              </h3>

              <p className="seo6-side-description">
                Search performance is built from multiple
                connected elements, not a single keyword.
              </p>

              <div className="seo6-capabilities">

                {[
                  {
                    title: "Technical SEO",
                    description:
                      "Help search engines discover, understand and access important pages.",
                    icon: Code,
                  },
                  {
                    title: "Local SEO",
                    description:
                      "Improve how nearby customers find and evaluate your business.",
                    icon: MapPin,
                  },
                  {
                    title: "Content & Authority",
                    description:
                      "Answer relevant questions and build useful topical coverage.",
                    icon: Globe,
                  },
                ].map(({ title, description, icon: Icon }) => (
                  <Link
                    key={title}
                    to={routeTo.service("digital-marketing")}
                    className="seo6-capability"
                  >
                    <span
                      className="seo6-cap-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </span>
                  </Link>
                ))}

              </div>

              <div className="seo6-side-footer">
                <p>
                  Good SEO makes your business easier to
                  discover, understand and consider.
                </p>

                <Link
                  to={ROUTES.contact}
                  className="seo6-btn seo6-primary"
                >
                  Discuss Your Search Visibility
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* ========================================================
          06.05 — SEARCH CAPABILITY RAIL
      ======================================================== */}
      <AnimatedSection animation="fadeInUp" delay={0.16}>
        <div className="seo6-rail">
          {[
            {
              number: "01",
              title: "Get Found",
              description:
                "Make important services easier to discover.",
            },
            {
              number: "02",
              title: "Build Trust",
              description:
                "Give people clear and helpful answers.",
            },
            {
              number: "03",
              title: "Make the Next Step Easy",
              description:
                "Connect discovery with meaningful enquiries.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="seo6-rail-item"
            >
              <span className="seo6-rail-number">
                {item.number}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 06 ================= */}
























{/* ============================================================
    SECTION 07 — PAID ADVERTISING
    INCHTOMILEZ / CINEMATIC CAMPAIGN GALLERY

    Layout: Horizontal Creative Showcase
    Interaction: Native Swipe + Snap + Linked Navigation
    Design: Black Glass / Editorial / Photographic
    Mobile: Touch Swipe / Responsive Card Widths
    Typography: Existing Raleway
    Animation: No TextScramble
    Dependencies: Existing Link, AnimatedSection,
                  ArrowRight, ROUTES, routeTo
============================================================ */}

<section
  id="home-advertising"
  className="relative isolate overflow-hidden"
  aria-labelledby="home-advertising-heading"
  style={{
    paddingBlock: "clamp(56px,7vw,100px)",
    backgroundColor: "#070809",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ========================================================
      07.01 — STYLES
  ======================================================== */}

  <style>{`
    #home-advertising {
      --ads-border:rgba(255,255,255,.17);
      --ads-muted:#b6b9c1;
    }

    #home-advertising .ads7-atmosphere {
      position:absolute;
      inset:0;
      z-index:-1;
      pointer-events:none;
      background:
        linear-gradient(
          180deg,
          rgba(5,6,8,.94),
          rgba(5,6,8,.73) 42%,
          #050607
        ),
        url('https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85')
        center/cover no-repeat;
    }

    /* SECTION HEADER */

    #home-advertising .ads7-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:30px;
    }

    #home-advertising .ads7-eyebrow {
      margin:0 0 15px;
      color:#bfc1c7;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-advertising .ads7-heading {
      max-width:680px;
      margin:0;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-advertising .ads7-description {
      max-width:650px;
      margin:16px 0 0;
      font-size:15px;
      line-height:1.7;
      color:#d1d5db;
    }

    #home-advertising .ads7-header-side {
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:13px;
    }

    #home-advertising .ads7-side-note {
      margin:0;
      color:#c0c2c9;
      font-size:13px;
      line-height:1.7;
      max-width:340px;
    }

    /* NAVIGATION RAIL */

    #home-advertising .ads7-nav {
      display:flex;
      gap:8px;
      overflow-x:auto;
      padding:0 0 17px;
      scrollbar-width:none;
      -webkit-overflow-scrolling:touch;
    }

    #home-advertising .ads7-nav::-webkit-scrollbar {
      display:none;
    }

    #home-advertising .ads7-nav a {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
      min-height:40px;
      padding:9px 15px;
      border:1px solid rgba(255,255,255,.19);
      border-radius:8px;
      background:rgba(8,9,11,.78);
      color:#e5e7eb;
      font-size:12px;
      font-weight:600;
      text-decoration:none;
      white-space:nowrap;
      transition:
        border-color .2s ease,
        background .2s ease;
    }

    /* HORIZONTAL GALLERY */

    #home-advertising .ads7-gallery {
      display:flex;
      gap:14px;
      overflow-x:auto;
      overflow-y:hidden;
      scroll-snap-type:x mandatory;
      scroll-padding-inline:2px;
      scroll-behavior:smooth;
      overscroll-behavior-inline:contain;
      padding:3px 2px 19px;
      scrollbar-width:thin;
      scrollbar-color:#4d4f53 transparent;
      -webkit-overflow-scrolling:touch;
    }

    #home-advertising .ads7-slide {
      position:relative;
      display:flex;
      flex-direction:column;
      flex:0 0 min(82vw,730px);
      height:clamp(440px,43vw,530px);
      min-width:0;
      overflow:hidden;
      isolation:isolate;
      scroll-snap-align:start;
      scroll-snap-stop:always;
      border:1px solid var(--ads-border);
      border-radius:15px;
      background:#101113;
      color:#fff;
      scroll-margin-inline:2px;
    }

    #home-advertising .ads7-image {
      position:absolute;
      inset:0;
      z-index:-3;
      width:100%;
      height:100%;
      object-fit:cover;
      filter:saturate(.76);
      transition:
        transform .7s ease,
        filter .7s ease;
    }

    #home-advertising .ads7-image-overlay {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.42) 0%,
          rgba(0,0,0,.13) 30%,
          rgba(0,0,0,.58) 62%,
          rgba(0,0,0,.96) 100%
        );
    }

    /* SLIDE TOP META */

    #home-advertising .ads7-slide-top {
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:12px;
      padding:22px;
    }

    #home-advertising .ads7-slide-number {
      font-size:11px;
      font-weight:600;
      letter-spacing:.1em;
      color:#fff;
      background:rgba(5,6,8,.72);
      padding:9px 11px;
      border:1px solid rgba(255,255,255,.25);
      border-radius:7px;
      backdrop-filter:blur(12px);
    }

    #home-advertising .ads7-slide-category {
      font-size:11px;
      font-weight:500;
      letter-spacing:.07em;
      color:#e0e2e5;
      text-align:right;
    }

    /* DARK GLASS INFORMATION PANEL */

    #home-advertising .ads7-glass {
      position:relative;
      width:calc(100% - 30px);
      margin:auto 15px 15px;
      padding:22px;
      background:
        linear-gradient(
          135deg,
          rgba(9,10,12,.95),
          rgba(19,20,23,.84)
        );
      border:1px solid rgba(255,255,255,.2);
      border-radius:12px;
      backdrop-filter:blur(18px);
      -webkit-backdrop-filter:blur(18px);
      box-shadow:0 15px 35px rgba(0,0,0,.25);
    }

    #home-advertising .ads7-glass-meta {
      color:#b4b7bf;
      font-size:11px;
      font-weight:500;
      letter-spacing:.07em;
      text-transform:uppercase;
    }

    #home-advertising .ads7-glass h3 {
      margin:10px 0 0;
      font-size:clamp(20px,2.2vw,27px);
      font-weight:600;
      line-height:1.28;
      color:#fff;
    }

    #home-advertising .ads7-glass p {
      margin:10px 0 0;
      color:#d1d5db;
      font-size:13px;
      line-height:1.7;
      max-width:570px;
    }

    #home-advertising .ads7-services {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin:17px 0 0;
      padding:0;
      list-style:none;
    }

    #home-advertising .ads7-services li {
      padding:7px 10px;
      color:#d1d5db;
      font-size:11px;
      line-height:1.4;
      border:1px solid rgba(255,255,255,.16);
      border-radius:6px;
      background:rgba(255,255,255,.035);
    }

    #home-advertising .ads7-slide-actions {
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:10px;
      margin-top:19px;
    }

    #home-advertising .ads7-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:42px;
      padding:10px 14px;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      border-radius:8px;
      transition:
        background .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-advertising .ads7-button svg {
      width:16px;
      height:16px;
      flex-shrink:0;
    }

    #home-advertising .ads7-primary {
      background:#eab308;
      color:#000;
      border:1px solid #eab308;
    }

    #home-advertising .ads7-secondary {
      color:#fff;
      border:1px solid rgba(255,255,255,.25);
      background:rgba(0,0,0,.4);
    }

    /* PER-SLIDE NEXT AND PREVIOUS */

    #home-advertising .ads7-slide-controls {
      position:absolute;
      top:68px;
      right:22px;
      display:flex;
      gap:7px;
    }

    #home-advertising .ads7-control {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:38px;
      height:38px;
      border:1px solid rgba(255,255,255,.24);
      border-radius:8px;
      background:rgba(7,8,10,.78);
      color:#fff;
      text-decoration:none;
      backdrop-filter:blur(12px);
    }

    #home-advertising .ads7-control svg {
      width:17px;
      height:17px;
    }

    #home-advertising .ads7-control-prev svg {
      transform:rotate(180deg);
    }

    /* PROGRESS / FOOTER */

    #home-advertising .ads7-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:20px;
      flex-wrap:wrap;
      margin-top:18px;
      padding-top:18px;
      border-top:1px solid rgba(255,255,255,.15);
    }

    #home-advertising .ads7-footer-copy {
      color:#bfc2c9;
      font-size:13px;
      line-height:1.65;
      margin:0;
    }

    #home-advertising .ads7-footer-link {
      display:inline-flex;
      align-items:center;
      gap:8px;
      color:#fff;
      font-size:13px;
      font-weight:600;
      text-decoration:none;
      min-height:40px;
    }

    #home-advertising .ads7-footer-link svg {
      width:16px;
      height:16px;
    }

    @media(min-width:1024px) {
      #home-advertising .ads7-header {
        grid-template-columns:minmax(0,1.4fr) minmax(0,.6fr);
        gap:48px;
      }

      #home-advertising .ads7-header-side {
        align-items:flex-end;
        text-align:right;
      }

      #home-advertising .ads7-slide {
        flex-basis:min(67vw,730px);
      }
    }

    @media(max-width:639px) {
      #home-advertising .ads7-gallery {
        gap:10px;
        scroll-padding-inline:0;
      }

      #home-advertising .ads7-slide {
        flex-basis:calc(100% - 27px);
        height:520px;
      }

      #home-advertising .ads7-slide-top {
        padding:15px;
      }

      #home-advertising .ads7-slide-controls {
        top:61px;
        right:15px;
      }

      #home-advertising .ads7-glass {
        width:calc(100% - 20px);
        margin:0 10px 10px;
        padding:16px;
      }

      #home-advertising .ads7-glass h3 {
        font-size:21px;
      }

      #home-advertising .ads7-services li {
        font-size:10px;
      }

      #home-advertising .ads7-button {
        font-size:12px;
        min-height:40px;
        padding:9px 11px;
      }
    }

    @media(max-width:359px) {
      #home-advertising .ads7-slide {
        height:560px;
      }

      #home-advertising .ads7-glass {
        padding:13px;
      }

      #home-advertising .ads7-slide-actions {
        gap:7px;
      }
    }

    @media(hover:hover) and (pointer:fine) {
      #home-advertising .ads7-slide:hover .ads7-image {
        transform:scale(1.045);
        filter:saturate(1);
      }

      #home-advertising .ads7-nav a:hover,
      #home-advertising .ads7-control:hover {
        border-color:rgba(255,255,255,.52);
        background:rgba(255,255,255,.12);
      }

      #home-advertising .ads7-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-advertising .ads7-secondary:hover {
        background:rgba(255,255,255,.1);
      }
    }

    #home-advertising a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-advertising .ads7-gallery {
        scroll-behavior:auto;
      }

      #home-advertising .ads7-image,
      #home-advertising .ads7-button,
      #home-advertising .ads7-nav a {
        transition:none;
      }
    }
  `}</style>

  {/* ========================================================
      07.02 — CINEMATIC BACKGROUND
  ======================================================== */}

  <div
    className="ads7-atmosphere"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ======================================================
          07.03 — EDITORIAL INTRODUCTION
      ====================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
      >
        <header className="ads7-header">

          <div>
            <p className="ads7-eyebrow">
              ADVERTISING / IDEAS IN MOTION
            </p>

            <h2
              id="home-advertising-heading"
              className="ads7-heading"
            >
              The Right Message.
              In the Right Moment.
            </h2>

            <p className="ads7-description">
              Great advertising isn't about being
              the loudest. It's about giving the
              right people a reason to stop, look
              and choose your brand.
            </p>
          </div>

          <div className="ads7-header-side">
            <p className="ads7-side-note">
              From high-intent searches to scroll-stopping
              creative, we bring the idea, audience and
              media together.
            </p>

            <Link
              to={routeTo.service("advertising")}
              className="ads7-button ads7-primary"
            >
              Explore Advertising
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

        </header>
      </AnimatedSection>

      {/* ======================================================
          07.04 — HORIZONTAL CATEGORY NAVIGATION
      ====================================================== */}

      <nav
        className="ads7-nav"
        aria-label="Advertising campaign categories"
      >
        {[
          ["Google Ads", "ads7-google"],
          ["Social Advertising", "ads7-social"],
          ["Video Campaigns", "ads7-video"],
          ["Retargeting", "ads7-retargeting"],
        ].map(([title, id]) => (
          <a key={id} href={`#${id}`}>
            {title}
          </a>
        ))}
      </nav>

      {/* ======================================================
          07.05 — INTERACTIVE CAMPAIGN CAROUSEL

          Native horizontal scroll:
          - Swipe left/right on mobile
          - Scroll snap
          - Prev/next navigation
          - Keyboard-accessible links
      ====================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
      >
        <div
          className="ads7-gallery"
          tabIndex={0}
          role="region"
          aria-label="Advertising service carousel. Swipe or scroll horizontally to explore."
        >
          {[
            {
              id: "ads7-google",
              number: "01 / 04",
              category: "SEARCH & PERFORMANCE",
              title: "Show Up When They're Ready to Choose.",
              description:
                "Reach people actively searching for what you offer. Build campaigns around relevant keywords, compelling offers and clear conversion paths.",
              services: [
                "Google Search Ads",
                "Performance Max",
                "Shopping Campaigns",
              ],
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=85",
              route: routeTo.service("advertising"),
              button: "Explore Google Advertising",
              previous: "ads7-retargeting",
              next: "ads7-social",
            },
            {
              id: "ads7-social",
              number: "02 / 04",
              category: "SOCIAL & DISCOVERY",
              title: "Turn the Scroll Into a Brand Moment.",
              description:
                "Create social campaigns that combine audience understanding, standout visuals and meaningful messaging across the platforms people use every day.",
              services: [
                "Meta Advertising",
                "Creative Testing",
                "Lead Generation",
              ],
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=85",
              route: routeTo.service("advertising"),
              button: "Explore Social Advertising",
              previous: "ads7-google",
              next: "ads7-video",
            },
            {
              id: "ads7-video",
              number: "03 / 04",
              category: "STORYTELLING & FILM",
              title: "Make Them Watch. Give Them Something to Remember.",
              description:
                "Build campaign stories through video, motion and strong creative direction. From brand films to short-form content, give every second a purpose.",
              services: [
                "Video Advertising",
                "Brand Films",
                "Campaign Production",
              ],
              image:
                "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1500&q=85",
              route: routeTo.service("video-media-production"),
              button: "Explore Media Production",
              previous: "ads7-social",
              next: "ads7-retargeting",
            },
            {
              id: "ads7-retargeting",
              number: "04 / 04",
              category: "AUDIENCE RE-ENGAGEMENT",
              title: "Stay Relevant Beyond the First Visit.",
              description:
                "Reconnect with interested audiences through relevant messages and thoughtful campaign sequences, where consent and platform policies permit.",
              services: [
                "Retargeting",
                "Audience Segmentation",
                "Campaign Optimization",
              ],
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=85",
              route: routeTo.service("digital-marketing"),
              button: "Explore Digital Campaigns",
              previous: "ads7-video",
              next: "ads7-google",
            },
          ].map((campaign) => (
            <article
              id={campaign.id}
              key={campaign.id}
              className="ads7-slide"
            >
              {/* Photographic creative backdrop */}
              <img
                src={campaign.image}
                alt=""
                className="ads7-image"
                loading="lazy"
                decoding="async"
              />

              <div
                className="ads7-image-overlay"
                aria-hidden="true"
              />

              {/* Slide header */}
              <div className="ads7-slide-top">
                <span className="ads7-slide-number">
                  {campaign.number}
                </span>

                <span className="ads7-slide-category">
                  {campaign.category}
                </span>
              </div>

              {/* Per-slide navigation */}
              <div className="ads7-slide-controls">
                <a
                  href={`#${campaign.previous}`}
                  className="ads7-control ads7-control-prev"
                  aria-label="Previous advertising category"
                >
                  <ArrowRight aria-hidden="true" />
                </a>

                <a
                  href={`#${campaign.next}`}
                  className="ads7-control"
                  aria-label="Next advertising category"
                >
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>

              {/* Dark glass content panel */}
              <div className="ads7-glass">
                <span className="ads7-glass-meta">
                  INCHTOMILEZ / ADVERTISING
                </span>

                <h3>{campaign.title}</h3>

                <p>{campaign.description}</p>

                <ul className="ads7-services">
                  {campaign.services.map((service) => (
                    <li key={service}>
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="ads7-slide-actions">
                  <Link
                    to={campaign.route}
                    className="ads7-button ads7-primary"
                  >
                    {campaign.button}
                    <ArrowRight aria-hidden="true" />
                  </Link>

                  <Link
                    to={ROUTES.contact}
                    className="ads7-button ads7-secondary"
                  >
                    Discuss Your Campaign
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {/* ======================================================
          07.06 — BOTTOM EDITORIAL FOOTER
      ====================================================== */}

      <div className="ads7-footer">
        <p className="ads7-footer-copy">
          One strong idea. The right audience.
          The right media. A clearer reason to act.
        </p>

        <Link
          to={ROUTES.contact}
          className="ads7-footer-link"
        >
          Let's Build Your Next Campaign
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 07 ================= */}








{/* ============================================================
    SECTION 08 — BRANDING, SOCIAL & CREATIVE
    INCHTOMILEZ / CREATIVE DIRECTION STUDIO

    08.01 — Scoped Design System
    08.02 — Editorial Section Introduction
    08.03 — Interactive Creative Discipline Selector
    08.04 — Full-Width Cinematic Brand Showcase
    08.05 — Creative Process Signature Rail

    DESIGN:
    - Black-on-black premium glass
    - Distinct from Sections 02–07
    - Four selectable creative disciplines
    - Full-width photographic showcase
    - Mobile-responsive, keyboard accessible
    - No new dependencies or React state
    - No heading character scrambling
============================================================ */}

<section
  id="home-creative-studio"
  className="relative isolate overflow-hidden bg-[#060708]"
  aria-labelledby="home-creative-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,106px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      08.01 — SECTION CSS
  ============================================================ */}

  <style>{`
    #home-creative-studio {
      --cs-border:rgba(255,255,255,.16);
      --cs-muted:#b9bcc4;
    }

    #home-creative-studio .cs-atmosphere {
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 80% 18%,
          rgba(255,255,255,.055),
          transparent 40%
        ),
        linear-gradient(
          180deg,
          #060708 0%,
          #0b0c0e 50%,
          #060708 100%
        );
    }

    /* ========================================================
       EDITORIAL INTRODUCTION
    ======================================================== */

    #home-creative-studio .cs-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:30px;
    }

    #home-creative-studio .cs-eyebrow {
      margin:0 0 15px;
      color:#b5b8bf;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-creative-studio .cs-heading {
      margin:0;
      max-width:720px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-creative-studio .cs-lead {
      max-width:650px;
      margin:16px 0 0;
      color:#d1d5db;
      font-size:15px;
      line-height:1.7;
    }

    #home-creative-studio .cs-header-side {
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:13px;
    }

    #home-creative-studio .cs-side-copy {
      max-width:350px;
      margin:0;
      color:#bfc2c9;
      font-size:13px;
      line-height:1.7;
    }

    /* COMPACT BUTTONS */

    #home-creative-studio .cs-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:9px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      text-decoration:none;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-creative-studio .cs-button svg {
      width:16px;
      height:16px;
      flex-shrink:0;
    }

    #home-creative-studio .cs-button-primary {
      color:#050505;
      border:1px solid #eab308;
      background:#eab308;
    }

    #home-creative-studio .cs-button-secondary {
      color:#fff;
      border:1px solid rgba(255,255,255,.28);
      background:rgba(8,9,11,.78);
    }

    /* ========================================================
       INTERACTIVE CREATIVE STUDIO
    ======================================================== */

    #home-creative-studio .cs-studio {
      position:relative;
      min-width:0;
      margin:0;
      padding:0;
      border:0;
    }

    #home-creative-studio .cs-visually-hidden {
      position:absolute;
      width:1px;
      height:1px;
      margin:-1px;
      padding:0;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-creative-studio .cs-toolbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      gap:12px;
      margin-bottom:16px;
      padding-bottom:14px;
      border-bottom:1px solid rgba(255,255,255,.14);
    }

    #home-creative-studio .cs-toolbar-label {
      color:#bfc2c8;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
      text-transform:uppercase;
    }

    #home-creative-studio .cs-toolbar-note {
      color:#858993;
      font-size:11px;
    }

    /* CREATIVE SELECTOR */

    #home-creative-studio .cs-navigation {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:9px;
      margin-bottom:15px;
    }

    #home-creative-studio .cs-choice {
      position:relative;
      display:flex;
      align-items:center;
      gap:12px;
      min-width:0;
      min-height:67px;
      padding:13px 15px;
      border:1px solid var(--cs-border);
      border-radius:10px;
      background:rgba(12,13,15,.94);
      color:#fff;
      cursor:pointer;
      overflow:hidden;
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #home-creative-studio .cs-choice::after {
      content:"";
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      height:2px;
      background:#eab308;
      transform:scaleX(0);
      transform-origin:left;
      transition:transform .25s ease;
    }

    #home-creative-studio .cs-choice-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:35px;
      height:35px;
      flex-shrink:0;
      border:1px solid rgba(255,255,255,.17);
      border-radius:8px;
      background:rgba(255,255,255,.045);
    }

    #home-creative-studio .cs-choice-icon svg {
      width:17px;
      height:17px;
      color:#fff;
    }

    #home-creative-studio .cs-choice-copy {
      display:block;
      min-width:0;
      flex:1;
    }

    #home-creative-studio .cs-choice-name {
      display:block;
      color:#fff;
      font-size:14px;
      font-weight:600;
      line-height:1.4;
    }

    #home-creative-studio .cs-choice-caption {
      display:block;
      margin-top:3px;
      color:#9da1aa;
      font-size:11px;
      line-height:1.45;
    }

    #home-creative-studio .cs-choice-arrow {
      width:16px;
      height:16px;
      flex-shrink:0;
      color:#a2a6ae;
      transform:rotate(-45deg);
    }

    /* SELECTED STATE */

    #cs8-brand:checked ~ .cs-navigation
    label[for="cs8-brand"],
    #cs8-social:checked ~ .cs-navigation
    label[for="cs8-social"],
    #cs8-design:checked ~ .cs-navigation
    label[for="cs8-design"],
    #cs8-production:checked ~ .cs-navigation
    label[for="cs8-production"] {
      border-color:rgba(255,255,255,.47);
      background:rgba(34,35,39,.95);
    }

    #cs8-brand:checked ~ .cs-navigation
    label[for="cs8-brand"]::after,
    #cs8-social:checked ~ .cs-navigation
    label[for="cs8-social"]::after,
    #cs8-design:checked ~ .cs-navigation
    label[for="cs8-design"]::after,
    #cs8-production:checked ~ .cs-navigation
    label[for="cs8-production"]::after {
      transform:scaleX(1);
    }

    /* ========================================================
       IMMERSIVE CINEMATIC CANVAS
    ======================================================== */

    #home-creative-studio .cs-canvas {
      position:relative;
      min-width:0;
      background:#0b0c0e;
      border:1px solid rgba(255,255,255,.2);
      border-radius:15px;
      overflow:hidden;
      box-shadow:0 25px 65px rgba(0,0,0,.24);
    }

    #home-creative-studio .cs-panel {
      display:none;
      position:relative;
      min-height:570px;
      isolation:isolate;
      animation:cs8Enter .35s ease both;
    }

    #cs8-brand:checked ~ .cs-canvas .cs-panel-brand,
    #cs8-social:checked ~ .cs-canvas .cs-panel-social,
    #cs8-design:checked ~ .cs-canvas .cs-panel-design,
    #cs8-production:checked ~ .cs-canvas .cs-panel-production {
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
    }

    #home-creative-studio .cs-main-image {
      position:absolute;
      inset:0;
      z-index:-3;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      filter:saturate(.73);
    }

    #home-creative-studio .cs-image-shade {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          90deg,
          rgba(0,0,0,.75),
          rgba(0,0,0,.15) 65%
        ),
        linear-gradient(
          0deg,
          rgba(0,0,0,.98),
          rgba(0,0,0,.78) 29%,
          rgba(0,0,0,.08) 76%,
          rgba(0,0,0,.35)
        );
    }

    /* TOP BRAND MARKER */

    #home-creative-studio .cs-panel-header {
      position:absolute;
      top:22px;
      left:22px;
      right:22px;
      z-index:1;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
    }

    #home-creative-studio .cs-panel-badge {
      display:inline-flex;
      align-items:center;
      gap:9px;
      padding:10px 12px;
      color:#fff;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
      background:rgba(5,6,8,.77);
      border:1px solid rgba(255,255,255,.23);
      border-radius:7px;
      backdrop-filter:blur(14px);
    }

    #home-creative-studio .cs-panel-counter {
      color:#f1f2f3;
      font-size:12px;
      font-weight:600;
      letter-spacing:.07em;
    }

    /* MAIN CONTENT AREA */

    #home-creative-studio .cs-panel-body {
      position:relative;
      z-index:1;
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:23px;
      padding:clamp(20px,3.5vw,40px);
    }

    #home-creative-studio .cs-panel-copy {
      min-width:0;
      max-width:660px;
    }

    #home-creative-studio .cs-panel-eyebrow {
      display:block;
      margin-bottom:12px;
      color:#d0d2d7;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-creative-studio .cs-panel-heading {
      margin:0;
      color:#fff;
      font-size:clamp(24px,3vw,38px);
      font-weight:700;
      line-height:1.2;
      text-wrap:balance;
    }

    #home-creative-studio .cs-panel-description {
      margin:16px 0 0;
      max-width:580px;
      color:#e1e2e6;
      font-size:14px;
      line-height:1.75;
    }

    #home-creative-studio .cs-panel-actions {
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:24px;
    }

    /* BLACK GLASS DELIVERABLE PANEL */

    #home-creative-studio .cs-deliverables {
      min-width:0;
      padding:21px;
      border:1px solid rgba(255,255,255,.23);
      border-radius:12px;
      background:
        linear-gradient(
          145deg,
          rgba(15,16,19,.95),
          rgba(7,8,10,.89)
        );
      backdrop-filter:blur(18px);
      box-shadow:0 20px 50px rgba(0,0,0,.25);
    }

    #home-creative-studio .cs-deliverables-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:17px;
      padding-bottom:14px;
      border-bottom:1px solid rgba(255,255,255,.13);
    }

    #home-creative-studio .cs-deliverables-title {
      color:#fff;
      font-size:13px;
      font-weight:600;
    }

    #home-creative-studio .cs-deliverables-index {
      color:#8e929b;
      font-size:11px;
    }

    #home-creative-studio .cs-deliverables-list {
      display:grid;
      gap:0;
      list-style:none;
      margin:0;
      padding:0;
    }

    #home-creative-studio .cs-deliverables-list li {
      display:flex;
      align-items:flex-start;
      gap:10px;
      padding:11px 0;
      border-bottom:1px solid rgba(255,255,255,.085);
      color:#d4d6db;
      font-size:12px;
      line-height:1.6;
    }

    #home-creative-studio .cs-deliverables-list li:first-child {
      padding-top:0;
    }

    #home-creative-studio .cs-deliverables-list li:last-child {
      border-bottom:0;
      padding-bottom:0;
    }

    #home-creative-studio .cs-deliverables-list svg {
      width:15px;
      height:15px;
      flex-shrink:0;
      margin-top:2px;
      color:#d0d2d6;
    }

    /* ========================================================
       CREATIVE PROCESS FOOTER
    ======================================================== */

    #home-creative-studio .cs-process {
      display:grid;
      grid-template-columns:1fr;
      gap:0;
      margin-top:15px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:12px;
      background:rgba(10,11,13,.92);
      overflow:hidden;
    }

    #home-creative-studio .cs-process-item {
      display:flex;
      align-items:flex-start;
      gap:13px;
      padding:20px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-creative-studio .cs-process-item:last-child {
      border-bottom:0;
    }

    #home-creative-studio .cs-process-number {
      color:#888c95;
      font-size:11px;
      font-weight:600;
      flex-shrink:0;
    }

    #home-creative-studio .cs-process-item h3 {
      margin:0;
      color:#fff;
      font-size:14px;
      font-weight:600;
      line-height:1.4;
    }

    #home-creative-studio .cs-process-item p {
      margin:6px 0 0;
      color:#a5a8b0;
      font-size:12px;
      line-height:1.6;
    }

    /* ========================================================
       RESPONSIVE
    ======================================================== */

    @media(min-width:1024px) {
      #home-creative-studio .cs-header {
        grid-template-columns:
          minmax(0,1.35fr) minmax(0,.65fr);
        gap:46px;
      }

      #home-creative-studio .cs-header-side {
        align-items:flex-end;
        text-align:right;
      }

      #home-creative-studio .cs-navigation {
        grid-template-columns:
          repeat(4,minmax(0,1fr));
      }

      #home-creative-studio .cs-panel {
        min-height:560px;
      }

      #home-creative-studio .cs-panel-body {
        grid-template-columns:
          minmax(0,1.2fr) minmax(0,.8fr);
        gap:40px;
      }

      #home-creative-studio .cs-process {
        grid-template-columns:
          repeat(4,minmax(0,1fr));
      }

      #home-creative-studio .cs-process-item {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-creative-studio .cs-process-item:last-child {
        border-right:0;
      }
    }

    @media(min-width:640px) and (max-width:1023px) {
      #home-creative-studio .cs-panel-body {
        grid-template-columns:
          minmax(0,1.1fr) minmax(0,.9fr);
        gap:20px;
      }

      #home-creative-studio .cs-navigation {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

      #home-creative-studio .cs-process {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

      #home-creative-studio .cs-process-item:nth-child(odd) {
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-creative-studio .cs-process-item:nth-child(n+3) {
        border-bottom:0;
      }
    }

    @media(max-width:639px) {
      #home-creative-studio .cs-header {
        gap:18px;
        margin-bottom:25px;
      }

      #home-creative-studio .cs-choice {
        min-height:66px;
        padding:10px;
        gap:8px;
      }

      #home-creative-studio .cs-choice-icon {
        width:30px;
        height:30px;
      }

      #home-creative-studio .cs-choice-icon svg {
        width:15px;
        height:15px;
      }

      #home-creative-studio .cs-choice-name {
        font-size:12px;
      }

      #home-creative-studio .cs-choice-caption {
        font-size:10px;
      }

      #home-creative-studio .cs-choice-arrow {
        display:none;
      }

      #home-creative-studio .cs-panel {
        min-height:690px;
      }

      #home-creative-studio .cs-main-image {
        object-position:60% center;
      }

      #home-creative-studio .cs-panel-header {
        top:15px;
        left:15px;
        right:15px;
      }

      #home-creative-studio .cs-panel-body {
        padding:18px;
        gap:19px;
      }

      #home-creative-studio .cs-panel-heading {
        font-size:clamp(23px,6vw,29px);
      }

      #home-creative-studio .cs-deliverables {
        padding:17px;
      }

      #home-creative-studio .cs-button {
        font-size:12px;
        min-height:40px;
        padding:9px 12px;
      }
    }

    @media(max-width:359px) {
      #home-creative-studio .cs-panel {
        min-height:760px;
      }

      #home-creative-studio .cs-navigation {
        gap:6px;
      }

      #home-creative-studio .cs-choice {
        padding:9px;
      }

      #home-creative-studio .cs-choice-caption {
        display:none;
      }

      #home-creative-studio .cs-panel-actions {
        align-items:stretch;
      }

      #home-creative-studio .cs-button {
        width:100%;
      }
    }

    /* ========================================================
       HOVER / FOCUS / REDUCED MOTION
    ======================================================== */

    @media(hover:hover) and (pointer:fine) {
      #home-creative-studio .cs-choice:hover {
        background:rgba(30,31,35,.94);
        border-color:rgba(255,255,255,.42);
      }

      #home-creative-studio .cs-button-primary:hover {
        background:#facc15;
        border-color:#facc15;
        transform:translateY(-2px);
      }

      #home-creative-studio .cs-button-secondary:hover {
        border-color:rgba(255,255,255,.48);
        background:rgba(255,255,255,.1);
      }
    }

    #cs8-brand:focus-visible ~ .cs-navigation
    label[for="cs8-brand"],
    #cs8-social:focus-visible ~ .cs-navigation
    label[for="cs8-social"],
    #cs8-design:focus-visible ~ .cs-navigation
    label[for="cs8-design"],
    #cs8-production:focus-visible ~ .cs-navigation
    label[for="cs8-production"] {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    #home-creative-studio a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @keyframes cs8Enter {
      from {
        opacity:0;
        transform:translateY(7px);
      }
      to {
        opacity:1;
        transform:translateY(0);
      }
    }

    @media(prefers-reduced-motion:reduce) {
      #home-creative-studio .cs-panel {
        animation:none;
      }

      #home-creative-studio .cs-choice,
      #home-creative-studio .cs-button {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      08.02 — EDITORIAL HEADER
  ============================================================ */}

  <div className="cs-atmosphere" aria-hidden="true" />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="cs-header">
          <div>
            <p className="cs-eyebrow">
              BRANDING / SOCIAL / CREATIVE
            </p>

            <h2
              id="home-creative-heading"
              className="cs-heading"
            >
              Make Your Brand Hard to Ignore.
              Even Harder to Forget.
            </h2>

            <p className="cs-lead">
              The strongest brands don't just look good.
              They have something to say, a recognisable
              identity and the confidence to show up
              consistently wherever people find them.
            </p>
          </div>

          <div className="cs-header-side">
            <p className="cs-side-copy">
              From the first idea to the final frame,
              we shape creative that feels like
              your brand — not everybody else's.
            </p>

            <Link
              to={routeTo.service("branding-identity")}
              className="cs-button cs-button-primary"
            >
              Explore Branding
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </header>
      </AnimatedSection>

      {/* ========================================================
          08.03 — INTERACTIVE CREATIVE SELECTOR
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.08}
      >
        {(() => {
          const disciplines = [
            {
              id: "brand",
              label: "Brand Strategy",
              caption: "Positioning & identity",
              icon: Target,
              eyebrow: "01 / BRAND STRATEGY",
              heading:
                "Give People a Reason to Know Your Name.",
              description:
                "A strong brand begins with a clear point of view. We connect positioning, messaging and identity so your business stands for something people can recognise and remember.",
              image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=85",
              deliverables: [
                "Brand Positioning & Direction",
                "Messaging & Tone of Voice",
                "Identity Systems",
                "Brand Guidelines",
              ],
              action: "Explore Brand Strategy",
              route: routeTo.service("branding-identity"),
            },
            {
              id: "social",
              label: "Social Creative",
              caption: "Ideas made for feeds",
              icon: Share2,
              eyebrow: "02 / SOCIAL CONTENT",
              heading:
                "Create a Brand People Want to Follow.",
              description:
                "Social media is more than a publishing calendar. We bring audience insight, consistent storytelling and compelling creative together to help your brand feel relevant in everyday conversations.",
              image:
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=85",
              deliverables: [
                "Content Planning & Calendars",
                "Platform-Specific Creative",
                "Reels & Short-Form Concepts",
                "Community-Led Storytelling",
              ],
              action: "Explore Digital Marketing",
              route: routeTo.service("digital-marketing"),
            },
            {
              id: "design",
              label: "Graphic Design",
              caption: "The visual language",
              icon: Palette,
              eyebrow: "03 / VISUAL COMMUNICATION",
              heading:
                "Make Every Detail Feel Like Your Brand.",
              description:
                "From campaign artwork to everyday communications, strong design makes a brand coherent. We create visual systems that carry the same identity across different media and formats.",
              image:
                "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=85",
              deliverables: [
                "Campaign Key Visuals",
                "Marketing Collateral",
                "Digital & Print Design",
                "Brand-Led Art Direction",
              ],
              action: "Explore Graphic Design",
              route: routeTo.service("graphic-design"),
            },
            {
              id: "production",
              label: "Media Production",
              caption: "Stories in motion",
              icon: Camera,
              eyebrow: "04 / CONTENT PRODUCTION",
              heading:
                "Take the Story Beyond the Static Frame.",
              description:
                "Some ideas deserve to be seen in motion. We bring creative direction, photography, film and production together to turn your brand story into content people can experience.",
              image:
                "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85",
              deliverables: [
                "Brand Films & Ad Creative",
                "Photography Direction",
                "Short-Form Video",
                "Campaign Media Assets",
              ],
              action: "Discuss Media Production",
              route: ROUTES.contact,
            },
          ];

          return (
            <fieldset className="cs-studio">
              <legend className="cs-visually-hidden">
                Choose a creative discipline to explore.
              </legend>

              {/* RADIO STATE */}

              {disciplines.map((item, index) => (
                <input
                  key={item.id}
                  type="radio"
                  name="home-creative-discipline"
                  id={`cs8-${item.id}`}
                  className="cs-visually-hidden"
                  defaultChecked={index === 0}
                  aria-controls={`cs8-panel-${item.id}`}
                />
              ))}

              {/* SECTION TOOLBAR */}

              <div className="cs-toolbar">
                <span className="cs-toolbar-label">
                  THE CREATIVE DIRECTION STUDIO
                </span>

                <span className="cs-toolbar-note">
                  SELECT A DISCIPLINE TO EXPLORE
                </span>
              </div>

              {/* CREATIVE SELECTOR */}

              <div className="cs-navigation">
                {disciplines.map((item) => {
                  const Icon = item.icon;

                  return (
                    <label
                      key={item.id}
                      htmlFor={`cs8-${item.id}`}
                      className="cs-choice"
                    >
                      <span
                        className="cs-choice-icon"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <span className="cs-choice-copy">
                        <span className="cs-choice-name">
                          {item.label}
                        </span>

                        <span className="cs-choice-caption">
                          {item.caption}
                        </span>
                      </span>

                      <ArrowRight
                        className="cs-choice-arrow"
                        aria-hidden="true"
                      />
                    </label>
                  );
                })}
              </div>

              {/* ================================================
                  MAIN DYNAMIC VISUAL SHOWCASE
              ================================================ */}

              <div className="cs-canvas">
                {disciplines.map((item, index) => (
                  <article
                    key={item.id}
                    id={`cs8-panel-${item.id}`}
                    className={`cs-panel cs-panel-${item.id}`}
                  >
                    {/* CINEMATIC PHOTOGRAPHY */}

                    <img
                      src={item.image}
                      alt=""
                      className="cs-main-image"
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="cs-image-shade"
                      aria-hidden="true"
                    />

                    {/* TOP-LEFT LABEL */}

                    <div className="cs-panel-header">
                      <span className="cs-panel-badge">
                        INCHTOMILEZ / CREATIVE
                      </span>

                      <span className="cs-panel-counter">
                        0{index + 1} / 04
                      </span>
                    </div>

                    {/* MAIN CONTENT + GLASS PANEL */}

                    <div className="cs-panel-body">
                      <div className="cs-panel-copy">
                        <span className="cs-panel-eyebrow">
                          {item.eyebrow}
                        </span>

                        <h3 className="cs-panel-heading">
                          {item.heading}
                        </h3>

                        <p className="cs-panel-description">
                          {item.description}
                        </p>

                        <div className="cs-panel-actions">
                          <Link
                            to={item.route}
                            className="cs-button cs-button-primary"
                          >
                            {item.action}
                            <ArrowRight aria-hidden="true" />
                          </Link>

                          <Link
                            to={ROUTES.contact}
                            className="cs-button cs-button-secondary"
                          >
                            Start a Conversation
                            <ArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                      </div>

                      {/* INTEGRATED BLACK GLASS DETAILS */}

                      <div className="cs-deliverables">
                        <div className="cs-deliverables-header">
                          <span className="cs-deliverables-title">
                            What We Create
                          </span>

                          <span className="cs-deliverables-index">
                            0{index + 1} / CAPABILITY
                          </span>
                        </div>

                        <ul className="cs-deliverables-list">
                          {item.deliverables.map((service) => (
                            <li key={service}>
                              <CheckCircle
                                aria-hidden="true"
                              />

                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </fieldset>
          );
        })()}
      </AnimatedSection>

      {/* ========================================================
          08.04 — CREATIVE PROCESS SIGNATURE RAIL
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="cs-process">
          {[
            {
              number: "01",
              title: "Understand",
              description:
                "Start with the brand and its audience.",
            },
            {
              number: "02",
              title: "Shape",
              description:
                "Turn the insight into a clear idea.",
            },
            {
              number: "03",
              title: "Create",
              description:
                "Bring the idea to life across formats.",
            },
            {
              number: "04",
              title: "Connect",
              description:
                "Keep the brand recognisable everywhere.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="cs-process-item"
            >
              <span className="cs-process-number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* ============================================================
      08.05 — SECTION BOUNDARY
  ============================================================ */}

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 08 ================= */}






{/* ============================================================
    SECTION 09 — BEYOND THE SCREEN
    INCHTOMILEZ / OUTDOOR & EXPERIENTIAL MARKETING

    09.01 — Premium Scoped Styles
    09.02 — Editorial Introduction
    09.03 — Immersive Outdoor Advertising Panorama
    09.04 — Interactive Capability Hotspots
    09.05 — OOH & BTL Service Panels
    09.06 — Closing CTA

    Theme: Black / Dark Glass / White / Yellow Buttons
    Typography: Existing Raleway
    Responsive: Desktop, Tablet, Mobile
    No New Dependencies
============================================================ */}

<section
  id="home-beyond-screen"
  className="relative isolate overflow-hidden bg-[#050607]"
  aria-labelledby="home-beyond-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      09.01 — SCOPED STYLES
  ============================================================ */}

  <style>{`
    #home-beyond-screen {
      --bs-border:rgba(255,255,255,.16);
      --bs-glass:rgba(9,10,12,.88);
    }

    #home-beyond-screen .bs-background {
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 80% 30%,
          rgba(255,255,255,.045),
          transparent 50%
        ),
        linear-gradient(
          180deg,#050607,#0b0c0e,#050607
        );
    }

    /* EDITORIAL INTRODUCTION */

    #home-beyond-screen .bs-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:28px;
    }

    #home-beyond-screen .bs-eyebrow {
      margin:0 0 15px;
      color:#afb2b9;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-beyond-screen .bs-heading {
      margin:0;
      max-width:770px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-beyond-screen .bs-lead {
      max-width:650px;
      margin:17px 0 0;
      color:#d1d5db;
      font-size:15px;
      line-height:1.7;
    }

    #home-beyond-screen .bs-header-aside {
      max-width:350px;
      margin:0;
      color:#b8bbc3;
      font-size:13px;
      line-height:1.75;
    }

    /* CINEMATIC PANORAMA */

    #home-beyond-screen .bs-panorama {
      position:relative;
      height:clamp(380px,44vw,520px);
      border:1px solid rgba(255,255,255,.22);
      border-radius:15px;
      overflow:hidden;
      isolation:isolate;
      background:#101114;
      box-shadow:0 25px 70px rgba(0,0,0,.3);
    }

    #home-beyond-screen .bs-panorama-image {
      position:absolute;
      inset:0;
      z-index:-3;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      filter:saturate(.73);
      transition:transform .8s ease,filter .8s ease;
    }

    #home-beyond-screen .bs-panorama-overlay {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          90deg,
          rgba(0,0,0,.76),
          rgba(0,0,0,.2) 60%,
          rgba(0,0,0,.45)
        ),
        linear-gradient(
          0deg,
          rgba(0,0,0,.94),
          transparent 52%,
          rgba(0,0,0,.28)
        );
    }

    #home-beyond-screen .bs-scene-top {
      position:absolute;
      top:22px;
      left:22px;
      right:22px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      z-index:2;
    }

    #home-beyond-screen .bs-scene-label {
      display:inline-flex;
      align-items:center;
      gap:9px;
      padding:9px 12px;
      background:rgba(4,5,7,.75);
      border:1px solid rgba(255,255,255,.24);
      border-radius:7px;
      backdrop-filter:blur(12px);
      color:#fff;
      font-size:10px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-beyond-screen .bs-scene-counter {
      color:#e5e7eb;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    /* FLOATING CAPABILITY HOTSPOTS */

    #home-beyond-screen .bs-hotspot {
      position:absolute;
      z-index:3;
      display:flex;
      align-items:center;
      gap:10px;
      min-height:44px;
      max-width:210px;
      padding:10px 13px;
      border:1px solid rgba(255,255,255,.32);
      border-radius:9px;
      background:rgba(8,9,11,.82);
      color:#fff;
      text-decoration:none;
      backdrop-filter:blur(16px);
      box-shadow:0 12px 25px rgba(0,0,0,.2);
      transition:
        transform .25s ease,
        border-color .25s ease,
        background-color .25s ease;
    }

    #home-beyond-screen .bs-hotspot svg {
      width:17px;
      height:17px;
      flex-shrink:0;
    }

    #home-beyond-screen .bs-hotspot span {
      font-size:12px;
      font-weight:600;
      line-height:1.35;
    }

    #home-beyond-screen .bs-hotspot-one {
      top:29%;
      left:12%;
    }

    #home-beyond-screen .bs-hotspot-two {
      top:40%;
      right:11%;
    }

    #home-beyond-screen .bs-hotspot-three {
      top:59%;
      left:39%;
    }

    /* EDITORIAL OVERLAY */

    #home-beyond-screen .bs-panorama-footer {
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      z-index:2;
      display:flex;
      align-items:end;
      justify-content:space-between;
      gap:18px;
      padding:28px;
    }

    #home-beyond-screen .bs-panorama-footer h3 {
      margin:0;
      max-width:550px;
      color:#fff;
      font-size:clamp(20px,2.3vw,28px);
      font-weight:600;
      line-height:1.3;
      text-wrap:balance;
    }

    #home-beyond-screen .bs-panorama-footer p {
      max-width:480px;
      margin:8px 0 0;
      color:#d2d4d9;
      font-size:13px;
      line-height:1.65;
    }

    #home-beyond-screen .bs-panorama-index {
      flex-shrink:0;
      color:#e0e1e5;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    /* SERVICE SHOWCASE */

    #home-beyond-screen .bs-services {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      gap:13px;
      margin-top:15px;
    }

    #home-beyond-screen .bs-service {
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      min-width:0;
      min-height:250px;
      padding:24px;
      border:1px solid rgba(255,255,255,.17);
      border-radius:13px;
      background:
        linear-gradient(
          145deg,
          rgba(20,21,24,.96),
          rgba(8,9,11,.98)
        );
      color:#fff;
      overflow:hidden;
      text-decoration:none;
      transition:
        transform .25s ease,
        border-color .25s ease;
    }

    #home-beyond-screen .bs-service::before {
      content:"";
      position:absolute;
      top:-65px;
      right:-70px;
      width:250px;
      height:250px;
      border:1px solid rgba(255,255,255,.05);
      border-radius:50%;
      pointer-events:none;
    }

    #home-beyond-screen .bs-service-top {
      position:relative;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    #home-beyond-screen .bs-service-number {
      color:#9fa2aa;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-beyond-screen .bs-service-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:39px;
      height:39px;
      border:1px solid rgba(255,255,255,.18);
      border-radius:9px;
      background:rgba(255,255,255,.04);
    }

    #home-beyond-screen .bs-service-icon svg {
      width:19px;
      height:19px;
    }

    #home-beyond-screen .bs-service-content {
      position:relative;
      max-width:520px;
      margin-top:20px;
    }

    #home-beyond-screen .bs-service h3 {
      margin:0;
      color:#fff;
      font-size:21px;
      font-weight:600;
      line-height:1.35;
    }

    #home-beyond-screen .bs-service p {
      margin:10px 0 0;
      color:#bfc2ca;
      font-size:13px;
      line-height:1.75;
    }

    #home-beyond-screen .bs-service-action {
      display:inline-flex;
      align-items:center;
      gap:8px;
      margin-top:20px;
      color:#fff;
      font-size:13px;
      font-weight:600;
    }

    #home-beyond-screen .bs-service-action svg {
      width:16px;
      height:16px;
      transition:transform .25s ease;
    }

    /* PROCESS RAIL */

    #home-beyond-screen .bs-rail {
      display:flex;
      align-items:center;
      justify-content:center;
      flex-wrap:wrap;
      gap:12px 18px;
      margin-top:17px;
      padding:18px 22px;
      border:1px solid rgba(255,255,255,.15);
      border-radius:10px;
      background:rgba(8,9,11,.9);
      color:#cdd0d6;
      font-size:12px;
      font-weight:500;
    }

    #home-beyond-screen .bs-rail svg {
      width:14px;
      height:14px;
      color:#828690;
    }

    /* CLOSING */

    #home-beyond-screen .bs-closing {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:18px;
      margin-top:26px;
      padding-top:22px;
      border-top:1px solid rgba(255,255,255,.15);
    }

    #home-beyond-screen .bs-closing p {
      margin:0;
      color:#d1d5db;
      font-size:14px;
      line-height:1.7;
    }

    #home-beyond-screen .bs-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:9px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      background:#eab308;
      color:#050505;
      border:1px solid #eab308;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      transition:background-color .2s ease,transform .2s ease;
    }

    #home-beyond-screen .bs-button svg {
      width:16px;
      height:16px;
    }

    /* RESPONSIVE */

    @media(min-width:768px) {
      #home-beyond-screen .bs-services {
        grid-template-columns:repeat(2,minmax(0,1fr));
      }

      #home-beyond-screen .bs-service {
        min-height:245px;
      }
    }

    @media(min-width:1024px) {
      #home-beyond-screen .bs-header {
        grid-template-columns:
          minmax(0,1.35fr) minmax(0,.65fr);
        gap:55px;
      }

      #home-beyond-screen .bs-header-aside {
        justify-self:end;
      }
    }

    @media(max-width:767px) {
      #home-beyond-screen .bs-panorama {
        height:440px;
      }

      #home-beyond-screen .bs-panorama-image {
        object-position:57% center;
      }

      #home-beyond-screen .bs-hotspot {
        min-height:39px;
        padding:9px 10px;
      }

      #home-beyond-screen .bs-hotspot span {
        font-size:11px;
      }

      #home-beyond-screen .bs-hotspot-one {
        top:23%;
        left:6%;
      }

      #home-beyond-screen .bs-hotspot-two {
        top:35%;
        right:6%;
      }

      #home-beyond-screen .bs-hotspot-three {
        top:49%;
        left:17%;
      }

      #home-beyond-screen .bs-panorama-footer {
        padding:20px;
      }

      #home-beyond-screen .bs-panorama-index {
        display:none;
      }
    }

    @media(max-width:400px) {
      #home-beyond-screen .bs-panorama {
        height:470px;
      }

      #home-beyond-screen .bs-hotspot {
        max-width:160px;
      }

      #home-beyond-screen .bs-hotspot svg {
        width:15px;
        height:15px;
      }

      #home-beyond-screen .bs-service {
        min-height:225px;
        padding:19px;
      }

      #home-beyond-screen .bs-service h3 {
        font-size:19px;
      }
    }

    /* HOVER */

    @media(hover:hover) and (pointer:fine) {
      #home-beyond-screen .bs-panorama:hover
      .bs-panorama-image {
        transform:scale(1.04);
        filter:saturate(.94);
      }

      #home-beyond-screen .bs-hotspot:hover {
        transform:translateY(-3px);
        background:rgba(29,30,34,.94);
        border-color:rgba(255,255,255,.58);
      }

      #home-beyond-screen .bs-service:hover {
        transform:translateY(-3px);
        border-color:rgba(255,255,255,.42);
      }

      #home-beyond-screen .bs-service:hover
      .bs-service-action svg {
        transform:translateX(4px);
      }

      #home-beyond-screen .bs-button:hover {
        background:#facc15;
      }
    }

    /* ACCESSIBILITY */

    #home-beyond-screen a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-beyond-screen .bs-panorama-image,
      #home-beyond-screen .bs-hotspot,
      #home-beyond-screen .bs-service,
      #home-beyond-screen .bs-button {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      09.02 — BACKGROUND
  ============================================================ */}

  <div
    className="bs-background"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          09.03 — EDITORIAL INTRODUCTION
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="bs-header">

          <div>
            <p className="bs-eyebrow">
              OOH / BTL / REAL-WORLD EXPERIENCES
            </p>

            <h2
              id="home-beyond-heading"
              className="bs-heading"
            >
              Some Brands Are Seen on Screens.
              Others Become Part of the City.
            </h2>

            <p className="bs-lead">
              When your brand steps into the real world,
              the right placement, idea and experience
              can make people stop and take notice.
            </p>
          </div>

          <p className="bs-header-aside">
            We connect outdoor advertising,
            brand activations and on-ground
            experiences to create meaningful
            encounters beyond digital media.
          </p>

        </header>
      </AnimatedSection>

      {/* ========================================================
          09.04 — IMMERSIVE OUTDOOR PANORAMA
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.1}
      >
        <div className="bs-panorama">

          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
            alt="City skyline at night illustrating outdoor advertising environments"
            className="bs-panorama-image"
            loading="lazy"
            decoding="async"
          />

          <div
            className="bs-panorama-overlay"
            aria-hidden="true"
          />

          {/* SCENE TOP */}

          <div className="bs-scene-top">
            <span className="bs-scene-label">
              <Globe
                className="h-4 w-4"
                aria-hidden="true"
              />
              THE REAL WORLD IS YOUR CANVAS
            </span>

            <span className="bs-scene-counter">
              OUTSIDE / 01
            </span>
          </div>

          {/* INTERACTIVE HOTSPOTS */}

          <Link
            to={routeTo.service("ooh-advertising")}
            className="bs-hotspot bs-hotspot-one"
          >
            <Building2 aria-hidden="true" />
            <span>Outdoor Advertising</span>
          </Link>

          <Link
            to={routeTo.service("btl-activations")}
            className="bs-hotspot bs-hotspot-two"
          >
            <Users aria-hidden="true" />
            <span>Brand Activations</span>
          </Link>

          <Link
            to={ROUTES.contact}
            className="bs-hotspot bs-hotspot-three"
          >
            <Target aria-hidden="true" />
            <span>Campaign Planning</span>
          </Link>

          {/* PANORAMA FOOTER */}

          <div className="bs-panorama-footer">
            <div>
              <h3>
                Big Ideas Deserve Real-World Presence.
              </h3>

              <p>
                From the streets people travel to the
                spaces where they gather, create brand
                encounters that make sense for the
                audience and the moment.
              </p>
            </div>

            <span className="bs-panorama-index">
              INCHTOMILEZ / OUTDOOR
            </span>
          </div>

        </div>
      </AnimatedSection>

      {/* ========================================================
          09.05 — OOH & BTL SERVICE CARDS
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="bs-services">

          {/* OOH ADVERTISING */}

          <Link
            to={routeTo.service("ooh-advertising")}
            className="bs-service"
          >
            <div className="bs-service-top">
              <span className="bs-service-number">
                01 / OUT-OF-HOME
              </span>

              <span className="bs-service-icon">
                <Building2 aria-hidden="true" />
              </span>
            </div>

            <div className="bs-service-content">
              <h3>
                Put Your Brand Where Life Happens.
              </h3>

              <p>
                Billboards, outdoor displays and
                location-led campaigns designed
                to build visibility in the places
                your audience moves through.
              </p>

              <span className="bs-service-action">
                Explore OOH Advertising
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* BTL ACTIVATIONS */}

          <Link
            to={routeTo.service("btl-activations")}
            className="bs-service"
          >
            <div className="bs-service-top">
              <span className="bs-service-number">
                02 / EXPERIENTIAL
              </span>

              <span className="bs-service-icon">
                <Users aria-hidden="true" />
              </span>
            </div>

            <div className="bs-service-content">
              <h3>
                Turn an Audience Into Participants.
              </h3>

              <p>
                On-ground activations, promotional
                experiences and direct engagement
                that bring your brand closer to
                the people you want to reach.
              </p>

              <span className="bs-service-action">
                Explore BTL Activations
                <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>

        </div>
      </AnimatedSection>

      {/* ========================================================
          09.06 — CAMPAIGN PLANNING RAIL
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.18}
        amount={0.1}
      >
        <div className="bs-rail">
          <span>THE IDEA</span>
          <ArrowRight aria-hidden="true" />
          <span>THE RIGHT LOCATION</span>
          <ArrowRight aria-hidden="true" />
          <span>THE EXPERIENCE</span>
          <ArrowRight aria-hidden="true" />
          <span>THE IMPRESSION</span>
        </div>
      </AnimatedSection>

      {/* ========================================================
          09.07 — CLOSING CTA
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.2}
        amount={0.1}
      >
        <div className="bs-closing">
          <p>
            Ready to take your brand beyond the screen?
          </p>

          <Link
            to={ROUTES.contact}
            className="bs-button"
          >
            Plan an Outdoor Campaign
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 09 ================= */}




{/* ============================================================
    SECTION 10 — PUBLIC RELATIONS & BRAND REPUTATION
    INCHTOMILEZ / THE BRAND NEWSROOM

    10.01 — Scoped Premium Styles
    10.02 — Editorial Introduction
    10.03 — Cinematic Brand Newsroom
    10.04 — Interactive Story Angle Selector
    10.05 — PR Capability Editorial Columns
    10.06 — Reputation Framework + CTA

    DESIGN:
    - Editorial newsroom-inspired composition
    - Cinematic photography and black glass
    - Three selectable PR storytelling angles
    - Responsive magazine-style architecture
    - Compact yellow primary CTA
    - Existing Raleway and React Router
    - No new imports or dependencies
    - No TextScramble
============================================================ */}

<section
  id="home-public-relations"
  className="relative isolate overflow-hidden bg-[#060708]"
  aria-labelledby="home-pr-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ============================================================
      10.01 — PREMIUM SCOPED STYLES
  ============================================================ */}

  <style>{`
    #home-public-relations {
      --pr-border:rgba(255,255,255,.16);
      --pr-surface:#101114;
      --pr-muted:#afb2b9;
    }

    #home-public-relations .pr10-atmosphere {
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 75% 15%,
          rgba(255,255,255,.055),
          transparent 43%
        ),
        linear-gradient(
          180deg,#060708,#0a0b0d 52%,#060708
        );
    }

    /* INTRODUCTION */

    #home-public-relations .pr10-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:31px;
    }

    #home-public-relations .pr10-eyebrow {
      margin:0 0 15px;
      color:#b6b9c0;
      font-size:12px;
      font-weight:500;
      line-height:1.5;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-public-relations .pr10-heading {
      max-width:750px;
      margin:0;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-public-relations .pr10-lead {
      max-width:650px;
      margin:17px 0 0;
      color:#d2d4d9;
      font-size:15px;
      line-height:1.7;
    }

    #home-public-relations .pr10-header-aside {
      max-width:350px;
      margin:0;
      color:#b8bbc3;
      font-size:13px;
      line-height:1.75;
    }

    /* THE NEWSROOM SHELL */

    #home-public-relations .pr10-newsroom {
      min-width:0;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.2);
      border-radius:15px;
      background:#0a0b0d;
      box-shadow:0 25px 70px rgba(0,0,0,.28);
    }

    #home-public-relations .pr10-masthead {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      gap:13px;
      padding:17px 22px;
      border-bottom:1px solid rgba(255,255,255,.16);
      background:rgba(18,19,22,.95);
    }

    #home-public-relations .pr10-masthead-brand {
      display:flex;
      align-items:center;
      gap:10px;
      color:#fff;
      font-size:12px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-public-relations .pr10-masthead-brand svg {
      width:17px;
      height:17px;
    }

    #home-public-relations .pr10-masthead-meta {
      color:#969aa3;
      font-size:11px;
      letter-spacing:.06em;
    }

    /* PRIMARY VISUAL EDITORIAL */

    #home-public-relations .pr10-feature {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      min-width:0;
    }

    #home-public-relations .pr10-feature-photo {
      position:relative;
      isolation:isolate;
      min-height:340px;
      overflow:hidden;
      background:#111214;
    }

    #home-public-relations .pr10-feature-photo img {
      position:absolute;
      inset:0;
      z-index:-2;
      width:100%;
      height:100%;
      object-fit:cover;
      filter:saturate(.7);
      transition:transform .7s ease;
    }

    #home-public-relations .pr10-photo-shade {
      position:absolute;
      inset:0;
      z-index:-1;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.28),
          rgba(0,0,0,.14) 40%,
          rgba(0,0,0,.9)
        );
    }

    #home-public-relations .pr10-feature-photo-top {
      position:absolute;
      top:21px;
      left:21px;
      right:21px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
    }

    #home-public-relations .pr10-photo-tag {
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:9px 11px;
      border:1px solid rgba(255,255,255,.25);
      border-radius:7px;
      background:rgba(5,6,8,.72);
      backdrop-filter:blur(12px);
      color:#fff;
      font-size:10px;
      font-weight:600;
      letter-spacing:.07em;
    }

    #home-public-relations .pr10-photo-counter {
      color:#f0f1f3;
      font-size:11px;
      font-weight:600;
    }

    #home-public-relations .pr10-photo-caption {
      position:absolute;
      bottom:25px;
      left:25px;
      right:25px;
      color:#fff;
    }

    #home-public-relations .pr10-photo-caption span {
      display:block;
      margin-bottom:9px;
      color:#d8d9de;
      font-size:11px;
      font-weight:500;
      letter-spacing:.09em;
    }

    #home-public-relations .pr10-photo-caption strong {
      display:block;
      max-width:480px;
      color:#fff;
      font-size:clamp(21px,2.3vw,29px);
      font-weight:600;
      line-height:1.3;
    }

    /* EDITORIAL STORY SELECTOR */

    #home-public-relations .pr10-editorial {
      position:relative;
      min-width:0;
      padding:clamp(20px,3vw,35px);
      background:
        linear-gradient(
          145deg,
          rgba(23,24,28,.98),
          rgba(8,9,11,.99)
        );
    }

    #home-public-relations .pr10-editorial-label {
      margin:0 0 17px;
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-public-relations .pr10-radio {
      position:absolute;
      width:1px;
      height:1px;
      margin:-1px;
      padding:0;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-public-relations .pr10-story-nav {
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-bottom:23px;
    }

    #home-public-relations .pr10-story-choice {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:40px;
      padding:9px 13px;
      border:1px solid rgba(255,255,255,.19);
      border-radius:7px;
      background:rgba(8,9,11,.74);
      color:#d8dadd;
      font-size:12px;
      font-weight:600;
      line-height:1.4;
      cursor:pointer;
      transition:
        background-color .2s ease,
        border-color .2s ease;
    }

    /* SELECTED STATE */

    #pr10-story:checked ~ .pr10-story-nav
    label[for="pr10-story"],
    #pr10-reputation:checked ~ .pr10-story-nav
    label[for="pr10-reputation"],
    #pr10-leadership:checked ~ .pr10-story-nav
    label[for="pr10-leadership"] {
      border-color:rgba(255,255,255,.49);
      background:rgba(255,255,255,.115);
      color:#fff;
    }

    /* STORY CONTENT */

    #home-public-relations .pr10-story-panel {
      display:none;
      flex-direction:column;
      min-width:0;
      animation:pr10Reveal .3s ease both;
    }

    #pr10-story:checked ~ .pr10-story-content
    .pr10-panel-story,
    #pr10-reputation:checked ~ .pr10-story-content
    .pr10-panel-reputation,
    #pr10-leadership:checked ~ .pr10-story-content
    .pr10-panel-leadership {
      display:flex;
    }

    #home-public-relations .pr10-story-index {
      margin-bottom:11px;
      color:#9296a0;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-public-relations .pr10-story-panel h3 {
      margin:0;
      color:#fff;
      font-size:clamp(20px,2.1vw,26px);
      font-weight:600;
      line-height:1.3;
      text-wrap:balance;
    }

    #home-public-relations .pr10-story-panel p {
      max-width:520px;
      margin:13px 0 0;
      color:#c5c8cf;
      font-size:13px;
      line-height:1.75;
    }

    #home-public-relations .pr10-story-points {
      display:grid;
      gap:11px;
      list-style:none;
      padding:19px 0 0;
      margin:20px 0 0;
      border-top:1px solid rgba(255,255,255,.13);
    }

    #home-public-relations .pr10-story-points li {
      display:flex;
      align-items:flex-start;
      gap:9px;
      color:#d5d7dc;
      font-size:12px;
      line-height:1.6;
    }

    #home-public-relations .pr10-story-points svg {
      width:15px;
      height:15px;
      flex-shrink:0;
      margin-top:2px;
    }

    /* ACTIONS */

    #home-public-relations .pr10-actions {
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:10px;
      margin-top:25px;
    }

    #home-public-relations .pr10-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      transition:
        border-color .2s ease,
        background-color .2s ease,
        transform .2s ease;
    }

    #home-public-relations .pr10-button svg {
      width:16px;
      height:16px;
      flex-shrink:0;
    }

    #home-public-relations .pr10-primary {
      background:#eab308;
      border:1px solid #eab308;
      color:#050505;
    }

    #home-public-relations .pr10-secondary {
      color:#fff;
      background:rgba(9,10,12,.72);
      border:1px solid rgba(255,255,255,.25);
    }

    /* MAGAZINE-STYLE CAPABILITY COLUMNS */

    #home-public-relations .pr10-capabilities {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      border-top:1px solid rgba(255,255,255,.14);
      background:#0b0c0e;
    }

    #home-public-relations .pr10-capability {
      position:relative;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:12px;
      min-width:0;
      min-height:165px;
      padding:24px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-public-relations .pr10-capability:last-child {
      border-bottom:0;
    }

    #home-public-relations .pr10-capability-index {
      color:#8d919b;
      font-size:11px;
      font-weight:600;
    }

    #home-public-relations .pr10-capability-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:36px;
      height:36px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:8px;
      background:rgba(255,255,255,.035);
    }

    #home-public-relations .pr10-capability-icon svg {
      width:17px;
      height:17px;
      color:#fff;
    }

    #home-public-relations .pr10-capability h3 {
      margin:0;
      color:#fff;
      font-size:16px;
      font-weight:600;
      line-height:1.4;
    }

    #home-public-relations .pr10-capability p {
      margin:7px 0 0;
      color:#aeb1b9;
      font-size:12px;
      line-height:1.65;
    }

    /* REPUTATION FRAMEWORK */

    #home-public-relations .pr10-framework {
      display:grid;
      grid-template-columns:1fr;
      gap:0;
      margin-top:16px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:12px;
      background:rgba(10,11,13,.91);
      overflow:hidden;
    }

    #home-public-relations .pr10-framework-item {
      display:flex;
      align-items:flex-start;
      gap:12px;
      padding:19px 20px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-public-relations
    .pr10-framework-item:last-child {
      border-bottom:0;
    }

    #home-public-relations .pr10-framework-number {
      color:#92959e;
      font-size:11px;
      font-weight:600;
      flex-shrink:0;
    }

    #home-public-relations .pr10-framework-title {
      display:block;
      color:#fff;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
    }

    #home-public-relations .pr10-framework-description {
      display:block;
      margin-top:5px;
      color:#a9acb4;
      font-size:12px;
      line-height:1.65;
    }

    /* BOTTOM CTA */

    #home-public-relations .pr10-closing {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:20px;
      margin-top:25px;
      padding-top:21px;
      border-top:1px solid rgba(255,255,255,.15);
    }

    #home-public-relations .pr10-closing p {
      margin:0;
      color:#d1d5db;
      font-size:14px;
      line-height:1.7;
    }

    /* RESPONSIVE */

    @media(min-width:900px) {
      #home-public-relations .pr10-header {
        grid-template-columns:
          minmax(0,1.35fr) minmax(0,.65fr);
        gap:45px;
      }

      #home-public-relations .pr10-header-aside {
        justify-self:end;
      }

      #home-public-relations .pr10-feature {
        grid-template-columns:
          minmax(0,52fr) minmax(0,48fr);
      }

      #home-public-relations .pr10-feature-photo {
        min-height:490px;
      }

      #home-public-relations .pr10-capabilities {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }

      #home-public-relations .pr10-capability {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-public-relations .pr10-capability:last-child {
        border-right:0;
      }

      #home-public-relations .pr10-framework {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }

      #home-public-relations .pr10-framework-item {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-public-relations
      .pr10-framework-item:last-child {
        border-right:0;
      }
    }

    @media(min-width:640px) and (max-width:899px) {
      #home-public-relations .pr10-capabilities {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }

      #home-public-relations .pr10-capability {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-public-relations .pr10-capability:last-child {
        border-right:0;
      }
    }

    @media(max-width:639px) {
      #home-public-relations .pr10-header {
        margin-bottom:24px;
      }

      #home-public-relations .pr10-masthead {
        padding:14px 16px;
      }

      #home-public-relations .pr10-feature-photo {
        min-height:295px;
      }

      #home-public-relations .pr10-photo-caption {
        left:17px;
        right:17px;
        bottom:18px;
      }

      #home-public-relations .pr10-editorial {
        padding:20px 17px;
      }

      #home-public-relations .pr10-story-choice {
        min-height:39px;
        padding:9px 11px;
        font-size:11px;
      }

      #home-public-relations .pr10-capability {
        padding:19px;
        min-height:0;
      }
    }

    /* HOVER */

    @media(hover:hover) and (pointer:fine) {
      #home-public-relations .pr10-feature-photo:hover img {
        transform:scale(1.045);
      }

      #home-public-relations .pr10-story-choice:hover {
        background:rgba(255,255,255,.085);
        border-color:rgba(255,255,255,.4);
      }

      #home-public-relations .pr10-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-public-relations .pr10-secondary:hover {
        background:rgba(255,255,255,.09);
        border-color:rgba(255,255,255,.45);
      }
    }

    /* ACCESSIBILITY */

    #home-public-relations a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    #pr10-story:focus-visible ~ .pr10-story-nav
    label[for="pr10-story"],
    #pr10-reputation:focus-visible ~ .pr10-story-nav
    label[for="pr10-reputation"],
    #pr10-leadership:focus-visible ~ .pr10-story-nav
    label[for="pr10-leadership"] {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @keyframes pr10Reveal {
      from {
        opacity:0;
        transform:translateY(5px);
      }
      to {
        opacity:1;
        transform:translateY(0);
      }
    }

    @media(prefers-reduced-motion:reduce) {
      #home-public-relations .pr10-story-panel {
        animation:none;
      }

      #home-public-relations .pr10-button,
      #home-public-relations .pr10-story-choice,
      #home-public-relations .pr10-feature-photo img {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      10.02 — ATMOSPHERE + MAIN CONTAINER
  ============================================================ */}

  <div
    className="pr10-atmosphere"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          10.03 — EDITORIAL HEADING
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="pr10-header">
          <div>
            <p className="pr10-eyebrow">
              PUBLIC RELATIONS / BRAND REPUTATION
            </p>

            <h2
              id="home-pr-heading"
              className="pr10-heading"
            >
              Don't Just Be Seen.
              Be Worth Talking About.
            </h2>

            <p className="pr10-lead">
              A brand story matters when it connects
              with the people who hear it. We help
              businesses shape stronger narratives,
              build credibility and communicate with
              purpose.
            </p>
          </div>

          <p className="pr10-header-aside">
            From media communications and brand
            announcements to reputation strategy,
            bring clarity and consistency to the
            conversations around your business.
          </p>
        </header>
      </AnimatedSection>

      {/* ========================================================
          10.04 — CINEMATIC BRAND NEWSROOM
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.1}
      >
        <div className="pr10-newsroom">

          {/* EDITORIAL MASTHEAD */}

          <div className="pr10-masthead">
            <span className="pr10-masthead-brand">
              <Newspaper aria-hidden="true" />
              THE BRAND NEWSROOM
            </span>

            <span className="pr10-masthead-meta">
              INCHTOMILEZ / COMMUNICATIONS
            </span>
          </div>

          <div className="pr10-feature">

            {/* LEFT — PHOTOGRAPHIC EDITORIAL */}

            <div className="pr10-feature-photo">
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=85"
                alt="Editorial magazines and newspapers illustrating public relations and communications"
                loading="lazy"
                decoding="async"
              />

              <div
                className="pr10-photo-shade"
                aria-hidden="true"
              />

              <div className="pr10-feature-photo-top">
                <span className="pr10-photo-tag">
                  <Globe
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  COMMUNICATION WITH PURPOSE
                </span>

                <span className="pr10-photo-counter">
                  10 / THE STORY
                </span>
              </div>

              <div className="pr10-photo-caption">
                <span>
                  EVERY BRAND HAS A STORY
                </span>

                <strong>
                  Make Yours Clear Enough
                  to Travel Further.
                </strong>
              </div>
            </div>

            {/* RIGHT — INTERACTIVE EDITORIAL CONSOLE */}

            <div className="pr10-editorial">
              <p className="pr10-editorial-label">
                Explore the Communication Strategy
              </p>

              <div
                role="group"
                aria-label="Choose a public relations topic"
              >
                {[
                  ["story", "Brand Stories"],
                  ["reputation", "Reputation"],
                  ["leadership", "Leadership"],
                ].map(([id, label], index) => (
                  <input
                    key={id}
                    type="radio"
                    id={`pr10-${id}`}
                    name="pr10-topic"
                    className="pr10-radio"
                    defaultChecked={index === 0}
                    aria-label={label}
                  />
                ))}

                <div className="pr10-story-nav">
                  <label
                    htmlFor="pr10-story"
                    className="pr10-story-choice"
                  >
                    Brand Stories
                  </label>

                  <label
                    htmlFor="pr10-reputation"
                    className="pr10-story-choice"
                  >
                    Reputation
                  </label>

                  <label
                    htmlFor="pr10-leadership"
                    className="pr10-story-choice"
                  >
                    Leadership
                  </label>
                </div>

                {/* NOTE:
                    Native radio-based switching requires
                    the radio inputs and story containers
                    to share the same parent.
                */}

                <div className="pr10-story-content">

                  {/* BRAND STORY */}

                  <article className="pr10-story-panel pr10-panel-story">
                    <span className="pr10-story-index">
                      01 / BRAND STORYTELLING
                    </span>

                    <h3>
                      Give Your Brand a Story
                      People Can Understand.
                    </h3>

                    <p>
                      What makes your business meaningful?
                      We help shape clear narratives around
                      your brand, products, people and ideas
                      so communication feels relevant
                      instead of promotional.
                    </p>

                    <ul className="pr10-story-points">
                      {[
                        "Brand announcements and communication",
                        "Story and message development",
                        "Relevant media outreach planning",
                      ].map((point) => (
                        <li key={point}>
                          <CheckCircle aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="pr10-actions">
                      <Link
                        to={routeTo.service("public-relations")}
                        className="pr10-button pr10-primary"
                      >
                        Explore Public Relations
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </article>

                  {/* REPUTATION */}

                  <article className="pr10-story-panel pr10-panel-reputation">
                    <span className="pr10-story-index">
                      02 / REPUTATION STRATEGY
                    </span>

                    <h3>
                      Credibility Is Built
                      Through Consistency.
                    </h3>

                    <p>
                      Every interaction influences how
                      people perceive your brand. We help
                      structure communication and messaging
                      so your business presents a clear,
                      dependable identity.
                    </p>

                    <ul className="pr10-story-points">
                      {[
                        "Brand perception and messaging review",
                        "Reputation communication planning",
                        "Consistent brand narratives",
                      ].map((point) => (
                        <li key={point}>
                          <CheckCircle aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="pr10-actions">
                      <Link
                        to={ROUTES.contact}
                        className="pr10-button pr10-primary"
                      >
                        Discuss Brand Reputation
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </article>

                  {/* LEADERSHIP */}

                  <article className="pr10-story-panel pr10-panel-leadership">
                    <span className="pr10-story-index">
                      03 / THOUGHT LEADERSHIP
                    </span>

                    <h3>
                      Let Your Expertise
                      Become Part of the Conversation.
                    </h3>

                    <p>
                      The knowledge behind a business can
                      be one of its strongest assets.
                      We help identify useful perspectives,
                      shape leadership messaging and
                      communicate ideas with clarity.
                    </p>

                    <ul className="pr10-story-points">
                      {[
                        "Leadership messaging and positioning",
                        "Thought leadership content planning",
                        "Executive communication support",
                      ].map((point) => (
                        <li key={point}>
                          <CheckCircle aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="pr10-actions">
                      <Link
                        to={ROUTES.contact}
                        className="pr10-button pr10-primary"
                      >
                        Discuss Your Story
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </div>

          {/* ================================================
              10.05 — EDITORIAL PR CAPABILITIES
          ================================================ */}

          <div className="pr10-capabilities">
            {[
              {
                number: "01",
                title: "Media Relations",
                description:
                  "Build relevant stories and communicate them to appropriate media audiences.",
                icon: Newspaper,
              },
              {
                number: "02",
                title: "Reputation Strategy",
                description:
                  "Develop consistent messaging that supports trust and brand clarity.",
                icon: Shield,
              },
              {
                number: "03",
                title: "Brand Communications",
                description:
                  "Keep company announcements, campaigns and important messages aligned.",
                icon: Megaphone,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="pr10-capability"
                  key={item.number}
                >
                  <span className="pr10-capability-index">
                    {item.number}
                  </span>

                  <span
                    className="pr10-capability-icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </AnimatedSection>

      {/* ========================================================
          10.06 — REPUTATION FRAMEWORK
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="pr10-framework">
          {[
            {
              number: "01",
              title: "Define the Message",
              description:
                "Understand what your brand should communicate.",
            },
            {
              number: "02",
              title: "Tell the Story",
              description:
                "Shape narratives for the right conversations.",
            },
            {
              number: "03",
              title: "Build Credibility",
              description:
                "Support recognition through consistent communication.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="pr10-framework-item"
            >
              <span className="pr10-framework-number">
                {item.number}
              </span>

              <div>
                <strong className="pr10-framework-title">
                  {item.title}
                </strong>

                <span className="pr10-framework-description">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ========================================================
          10.07 — SECTION CLOSING
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.18}
        amount={0.1}
      >
        <div className="pr10-closing">
          <p>
            The right story can make your brand
            easier to understand, remember and trust.
          </p>

          <Link
            to={ROUTES.contact}
            className="pr10-button pr10-primary"
          >
            Let's Shape Your Brand Story
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* ========================================================
      10.08 — SECTION BOUNDARY
  ======================================================== */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 10 ================= */}





{/* ============================================================
  SECTION 11 — PRODUCT MARKETING & LAUNCH CAMPAIGNS
  INCHTOMILEZ / THE LAUNCH STUDIO

  11.01 — Scoped Design System
  11.02 — Editorial Introduction
  11.03 — Cinematic Product Launch Stage
  11.04 — Interactive Four-Phase Launch Timeline
  11.05 — Connected Launch Services
  11.06 — Closing Conversion CTA

  NO new imports, dependencies, fake statistics,
  invented client work or duplicated H1.
============================================================ */}

<section
  id="home-product-launch"
  className="relative isolate overflow-hidden bg-[#050607]"
  aria-labelledby="home-launch-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  <style>{`
    #home-product-launch {
      --l11-border:rgba(255,255,255,.16);
      --l11-glass:rgba(10,11,13,.92);
      --l11-muted:#b7bac2;
    }

    #home-product-launch .l11-ambient {
      position:absolute;inset:0;pointer-events:none;
      background:
        radial-gradient(ellipse at 50% 38%,
          rgba(255,255,255,.045),transparent 55%),
        linear-gradient(180deg,#050607,#0b0c0f,#050607);
    }

    #home-product-launch .l11-header {
      display:grid;grid-template-columns:minmax(0,1fr);
      gap:22px;align-items:end;margin-bottom:30px;
    }

    #home-product-launch .l11-eyebrow {
      margin:0 0 15px;color:#afb2ba;
      font-size:12px;font-weight:500;
      letter-spacing:.09em;text-transform:uppercase;
    }

    #home-product-launch .l11-heading {
      margin:0;max-width:720px;color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      line-height:1.25;font-weight:700;
      text-wrap:balance;
    }

    #home-product-launch .l11-lead {
      margin:17px 0 0;max-width:640px;
      color:#d0d3da;font-size:15px;line-height:1.75;
    }

    #home-product-launch .l11-aside {
      margin:0;max-width:355px;
      color:#b9bcc4;font-size:13px;line-height:1.75;
    }

    /* MAIN SHOWCASE */

    #home-product-launch .l11-studio {
      position:relative;min-width:0;
      overflow:hidden;border-radius:16px;
      border:1px solid rgba(255,255,255,.19);
      background:#090a0c;
      box-shadow:0 25px 75px rgba(0,0,0,.24);
    }

    #home-product-launch .l11-studio-bar {
      display:flex;align-items:center;
      justify-content:space-between;gap:12px;
      padding:15px 22px;flex-wrap:wrap;
      background:#111215;
      border-bottom:1px solid var(--l11-border);
    }

    #home-product-launch .l11-studio-name {
      display:flex;align-items:center;gap:10px;
      color:#fff;font-size:12px;font-weight:600;
      letter-spacing:.07em;
    }

    #home-product-launch .l11-studio-name svg {
      width:17px;height:17px;
    }

    #home-product-launch .l11-studio-note {
      color:#a4a7af;font-size:11px;letter-spacing:.05em;
    }

    /* INTERACTIVE SELECTOR */

    #home-product-launch .l11-radio {
      position:absolute;width:1px;height:1px;
      margin:-1px;padding:0;overflow:hidden;
      clip-path:inset(50%);white-space:nowrap;border:0;
    }

    #home-product-launch .l11-stage {
      position:relative;min-width:0;
      min-height:530px;background:#101113;
    }

    #home-product-launch .l11-scene {
      position:relative;display:none;
      min-height:530px;isolation:isolate;
      flex-direction:column;justify-content:space-between;
      padding:clamp(20px,3vw,35px);
      animation:l11Reveal .32s ease both;
    }

    #home-product-launch .l11-scene-img {
      position:absolute;inset:0;z-index:-3;
      width:100%;height:100%;
      object-fit:cover;object-position:center;
      filter:saturate(.73);
    }

    #home-product-launch .l11-shade {
      position:absolute;inset:0;z-index:-2;
      background:
        linear-gradient(90deg,
          rgba(0,0,0,.89),rgba(0,0,0,.4) 60%,
          rgba(0,0,0,.54)),
        linear-gradient(0deg,
          rgba(0,0,0,.96),transparent 58%,
          rgba(0,0,0,.25));
    }

    #home-product-launch .l11-scene-top {
      display:flex;align-items:start;
      justify-content:space-between;gap:12px;
    }

    #home-product-launch .l11-scene-tag {
      display:inline-flex;align-items:center;gap:8px;
      padding:10px 12px;border-radius:8px;
      background:rgba(7,8,10,.8);
      border:1px solid rgba(255,255,255,.28);
      backdrop-filter:blur(14px);
      color:#fff;font-size:11px;font-weight:600;
    }

    #home-product-launch .l11-scene-tag svg {
      width:16px;height:16px;
    }

    #home-product-launch .l11-scene-index {
      color:#e4e5e8;font-size:11px;font-weight:600;
      letter-spacing:.07em;
    }

    #home-product-launch .l11-scene-bottom {
      display:grid;grid-template-columns:minmax(0,1fr);
      gap:25px;align-items:end;
    }

    #home-product-launch .l11-copy {
      max-width:650px;
    }

    #home-product-launch .l11-kicker {
      display:block;margin-bottom:11px;
      color:#d5d7dd;font-size:11px;
      letter-spacing:.09em;text-transform:uppercase;
    }

    #home-product-launch .l11-scene-title {
      margin:0;color:#fff;font-weight:700;
      font-size:clamp(23px,3vw,38px);
      line-height:1.23;text-wrap:balance;
    }

    #home-product-launch .l11-scene-description {
      max-width:560px;margin:14px 0 0;
      color:#e0e2e6;font-size:14px;line-height:1.75;
    }

    /* LAUNCH DELIVERABLES */

    #home-product-launch .l11-details {
      padding:21px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.23);
      background:rgba(8,9,11,.9);
      backdrop-filter:blur(18px);
      box-shadow:0 18px 40px rgba(0,0,0,.22);
      min-width:0;
    }

    #home-product-launch .l11-details-head {
      display:flex;align-items:center;
      justify-content:space-between;
      gap:10px;padding-bottom:14px;
      border-bottom:1px solid rgba(255,255,255,.13);
      color:#fff;font-size:13px;font-weight:600;
    }

    #home-product-launch .l11-details-head span:last-child {
      color:#999da5;font-size:11px;
    }

    #home-product-launch .l11-details-list {
      margin:10px 0 0;padding:0;
      display:grid;gap:0;list-style:none;
    }

    #home-product-launch .l11-details-list li {
      display:flex;align-items:flex-start;gap:10px;
      padding:10px 0;color:#d5d7de;
      border-bottom:1px solid rgba(255,255,255,.08);
      font-size:12px;line-height:1.6;
    }

    #home-product-launch .l11-details-list li:last-child {
      border-bottom:0;padding-bottom:0;
    }

    #home-product-launch .l11-details-list svg {
      width:15px;height:15px;
      flex-shrink:0;margin-top:2px;
    }

    /* HORIZONTAL LAUNCH TIMELINE */

    #home-product-launch .l11-timeline {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      border-top:1px solid var(--l11-border);
      background:#0b0c0e;
    }

    #home-product-launch .l11-phase {
      position:relative;display:flex;
      align-items:flex-start;flex-direction:column;
      justify-content:space-between;
      gap:10px;min-width:0;min-height:135px;
      padding:19px;cursor:pointer;
      border-right:1px solid rgba(255,255,255,.12);
      border-bottom:1px solid rgba(255,255,255,.12);
      transition:background .2s ease;
    }

    #home-product-launch .l11-phase::after {
      content:"";position:absolute;bottom:0;
      left:0;right:0;height:2px;
      background:#eab308;
      transform:scaleX(0);transform-origin:left;
      transition:transform .25s ease;
    }

    #home-product-launch .l11-phase-top {
      display:flex;align-items:center;
      justify-content:space-between;width:100%;
      color:#979ba4;font-size:11px;font-weight:600;
    }

    #home-product-launch .l11-phase-top svg {
      width:16px;height:16px;
    }

    #home-product-launch .l11-phase-name {
      color:#fff;font-size:15px;
      font-weight:600;line-height:1.4;
    }

    #home-product-launch .l11-phase-caption {
      display:block;margin-top:5px;
      color:#a5a8b0;font-size:12px;line-height:1.5;
    }

    /* RADIO SELECTION */

    #l11-position:checked ~ .l11-stage .l11-position-scene,
    #l11-build:checked ~ .l11-stage .l11-build-scene,
    #l11-launch:checked ~ .l11-stage .l11-launch-scene,
    #l11-grow:checked ~ .l11-stage .l11-grow-scene {
      display:flex;
    }

    #l11-position:checked ~ .l11-timeline label[for="l11-position"],
    #l11-build:checked ~ .l11-timeline label[for="l11-build"],
    #l11-launch:checked ~ .l11-timeline label[for="l11-launch"],
    #l11-grow:checked ~ .l11-timeline label[for="l11-grow"] {
      background:#232428;
    }

    #l11-position:checked ~ .l11-timeline label[for="l11-position"]::after,
    #l11-build:checked ~ .l11-timeline label[for="l11-build"]::after,
    #l11-launch:checked ~ .l11-timeline label[for="l11-launch"]::after,
    #l11-grow:checked ~ .l11-timeline label[for="l11-grow"]::after {
      transform:scaleX(1);
    }

    /* CTA */

    #home-product-launch .l11-actions {
      display:flex;flex-wrap:wrap;gap:10px;
      margin-top:22px;
    }

    #home-product-launch .l11-button {
      display:inline-flex;align-items:center;
      justify-content:center;gap:8px;
      min-height:42px;padding:10px 15px;
      border-radius:8px;font-size:13px;
      font-weight:600;line-height:1.4;
      text-decoration:none;
      transition:background .2s ease,
        border-color .2s ease,transform .2s ease;
    }

    #home-product-launch .l11-button svg {
      width:16px;height:16px;flex-shrink:0;
    }

    #home-product-launch .l11-primary {
      background:#eab308;color:#050505;
      border:1px solid #eab308;
    }

    #home-product-launch .l11-secondary {
      background:rgba(8,9,11,.83);color:#fff;
      border:1px solid rgba(255,255,255,.27);
    }

    /* BOTTOM CONNECTED SERVICE RAIL */

    #home-product-launch .l11-footer {
      display:flex;align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;gap:20px;
      padding:22px 0 0;margin-top:22px;
      border-top:1px solid rgba(255,255,255,.15);
    }

    #home-product-launch .l11-footer h3 {
      margin:0;color:#fff;
      font-size:18px;font-weight:600;line-height:1.4;
    }

    #home-product-launch .l11-footer p {
      margin:6px 0 0;color:#b7bac2;
      font-size:13px;line-height:1.7;
      max-width:650px;
    }

    /* RESPONSIVE */

    @media(min-width:900px) {
      #home-product-launch .l11-header {
        grid-template-columns:minmax(0,1.45fr) minmax(0,.55fr);
        gap:45px;
      }

      #home-product-launch .l11-aside {
        justify-self:end;
      }

      #home-product-launch .l11-scene,
      #home-product-launch .l11-stage {
        min-height:535px;
      }

      #home-product-launch .l11-scene-bottom {
        grid-template-columns:minmax(0,1.18fr) minmax(0,.82fr);
        gap:35px;
      }

      #home-product-launch .l11-timeline {
        grid-template-columns:repeat(4,minmax(0,1fr));
      }

      #home-product-launch .l11-phase {
        min-height:125px;border-bottom:0;
      }

      #home-product-launch .l11-phase:last-child {
        border-right:0;
      }
    }

    @media(min-width:640px) and (max-width:899px) {
      #home-product-launch .l11-scene-bottom {
        grid-template-columns:minmax(0,1fr) minmax(0,.85fr);
        gap:20px;
      }
    }

    @media(max-width:639px) {
      #home-product-launch .l11-scene,
      #home-product-launch .l11-stage {
        min-height:665px;
      }

      #home-product-launch .l11-scene {
        padding:17px;
      }

      #home-product-launch .l11-scene-img {
        object-position:60% center;
      }

      #home-product-launch .l11-details {
        padding:16px;
      }

      #home-product-launch .l11-phase {
        padding:15px;min-height:111px;
      }

      #home-product-launch .l11-phase-name {
        font-size:14px;
      }

      #home-product-launch .l11-phase-caption {
        font-size:11px;
      }
    }

    @media(max-width:360px) {
      #home-product-launch .l11-scene,
      #home-product-launch .l11-stage {
        min-height:730px;
      }

      #home-product-launch .l11-actions .l11-button {
        width:100%;
      }
    }

    @media(hover:hover) and (pointer:fine) {
      #home-product-launch .l11-phase:hover {
        background:rgba(255,255,255,.07);
      }

      #home-product-launch .l11-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-product-launch .l11-secondary:hover {
        background:rgba(255,255,255,.1);
        border-color:rgba(255,255,255,.45);
      }
    }

    #home-product-launch a:focus-visible,
    #home-product-launch .l11-radio:focus-visible
      ~ .l11-timeline label {
      outline-offset:3px;
    }

    #l11-position:focus-visible ~ .l11-timeline label[for="l11-position"],
    #l11-build:focus-visible ~ .l11-timeline label[for="l11-build"],
    #l11-launch:focus-visible ~ .l11-timeline label[for="l11-launch"],
    #l11-grow:focus-visible ~ .l11-timeline label[for="l11-grow"] {
      outline:2px solid #eab308;outline-offset:-3px;
    }

    @keyframes l11Reveal {
      from {opacity:0;transform:translateY(7px)}
      to {opacity:1;transform:translateY(0)}
    }

    @media(prefers-reduced-motion:reduce) {
      #home-product-launch .l11-scene {
        animation:none;
      }
      #home-product-launch .l11-phase,
      #home-product-launch .l11-button {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      11.02 — ATMOSPHERE / EDITORIAL INTRO
  ============================================================ */}

  <div className="l11-ambient" aria-hidden="true" />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="l11-header">
          <div>
            <p className="l11-eyebrow">
              PRODUCT MARKETING / GO-TO-MARKET
            </p>

            <h2
              id="home-launch-heading"
              className="l11-heading"
            >
              A Great Product Deserves
              More Than Just a Launch.
            </h2>

            <p className="l11-lead">
              The product might be ready. But is the
              market ready to notice? We connect positioning,
              creative, launch campaigns and digital
              experiences to give new ideas a stronger
              introduction.
            </p>
          </div>

          <p className="l11-aside">
            Whether you're introducing a new product,
            entering a market or refreshing an existing
            offering, every launch deserves a clear
            story and a thoughtful plan.
          </p>
        </header>
      </AnimatedSection>

      {/* ============================================================
          11.03 — INTERACTIVE LAUNCH STUDIO
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.08}
      >
        <div className="l11-studio">

          <div className="l11-studio-bar">
            <span className="l11-studio-name">
              <Rocket aria-hidden="true" />
              THE LAUNCH STUDIO
            </span>
            <span className="l11-studio-note">
              FROM FIRST IDEA TO MARKET
            </span>
          </div>

          {(() => {
            const phases = [
              {
                id: "position",
                name: "Position",
                caption: "Find the difference",
                kicker: "01 / MARKET POSITIONING",
                headline:
                  "First, Give People a Reason to Choose It.",
                description:
                  "Before investing in attention, understand the audience, the competition and what makes the product relevant. Build the message on a clear point of difference.",
                image:
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=85",
                icon: Target,
                deliverables: [
                  "Audience & Market Understanding",
                  "Product Positioning",
                  "Messaging & Value Proposition",
                  "Go-to-Market Direction",
                ],
                action: "Discuss Product Strategy",
              },
              {
                id: "build",
                name: "Create",
                caption: "Shape the campaign",
                kicker: "02 / CREATIVE DEVELOPMENT",
                headline:
                  "Turn the Product Into a Story Worth Seeing.",
                description:
                  "Build an identity, visual direction and campaign idea that make the product easier to recognise, understand and remember across different channels.",
                image:
                  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85",
                icon: Palette,
                deliverables: [
                  "Launch Campaign Concepts",
                  "Key Visuals & Creative Assets",
                  "Product Storytelling",
                  "Digital & Print Collateral",
                ],
                action: "Discuss Launch Creative",
              },
              {
                id: "launch",
                name: "Launch",
                caption: "Enter the market",
                kicker: "03 / CAMPAIGN ACTIVATION",
                headline:
                  "Make the First Impression Count.",
                description:
                  "Bring the idea to market through connected advertising, social media, content, PR and on-ground opportunities selected for the audience and the objective.",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=85",
                icon: Megaphone,
                deliverables: [
                  "Paid Advertising Campaigns",
                  "Social & Content Rollout",
                  "PR & Launch Communications",
                  "Launch Activation Planning",
                ],
                action: "Plan Your Product Launch",
              },
              {
                id: "grow",
                name: "Improve",
                caption: "Learn and refine",
                kicker: "04 / POST-LAUNCH DEVELOPMENT",
                headline:
                  "The Launch Is a Beginning, Not a Finish Line.",
                description:
                  "Use audience feedback, campaign performance and customer actions to understand what resonates, refine communication and plan the next phase.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=85",
                icon: TrendingUp,
                deliverables: [
                  "Campaign Performance Review",
                  "Audience & Channel Insights",
                  "Creative Refinement",
                  "Next-Phase Marketing Roadmap",
                ],
                action: "Discuss Growth Planning",
              },
            ];

            return (
              <>
                {/* Native state: no React hook needed */}

                {phases.map((phase, index) => (
                  <input
                    key={phase.id}
                    type="radio"
                    className="l11-radio"
                    id={`l11-${phase.id}`}
                    name="inchtomilez-launch-phase"
                    defaultChecked={index === 0}
                    aria-label={`Explore ${phase.name} phase`}
                  />
                ))}

                {/* ================================================
                    11.04 — CINEMATIC CHANGING VISUAL STAGE
                ================================================ */}

                <div className="l11-stage">
                  {phases.map((phase, index) => {
                    const Icon = phase.icon;

                    return (
                      <article
                        key={phase.id}
                        className={`l11-scene l11-${phase.id}-scene`}
                      >
                        <img
                          src={phase.image}
                          alt=""
                          className="l11-scene-img"
                          loading="lazy"
                          decoding="async"
                        />

                        <div
                          className="l11-shade"
                          aria-hidden="true"
                        />

                        <div className="l11-scene-top">
                          <span className="l11-scene-tag">
                            <Icon aria-hidden="true" />
                            INCHTOMILEZ / LAUNCH
                          </span>

                          <span className="l11-scene-index">
                            0{index + 1} / 04
                          </span>
                        </div>

                        <div className="l11-scene-bottom">
                          <div className="l11-copy">
                            <span className="l11-kicker">
                              {phase.kicker}
                            </span>

                            <h3 className="l11-scene-title">
                              {phase.headline}
                            </h3>

                            <p className="l11-scene-description">
                              {phase.description}
                            </p>

                            <div className="l11-actions">
                              <Link
                                to={ROUTES.contact}
                                className="l11-button l11-primary"
                              >
                                {phase.action}
                                <ArrowRight aria-hidden="true" />
                              </Link>

                              <Link
                                to={ROUTES.services}
                                className="l11-button l11-secondary"
                              >
                                Explore Our Services
                                <ArrowRight aria-hidden="true" />
                              </Link>
                            </div>
                          </div>

                          <div className="l11-details">
                            <div className="l11-details-head">
                              <span>What Goes Into This Phase</span>
                              <span>0{index + 1} / 04</span>
                            </div>

                            <ul className="l11-details-list">
                              {phase.deliverables.map((item) => (
                                <li key={item}>
                                  <CheckCircle aria-hidden="true" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* ================================================
                    11.05 — FOUR-PHASE SELECTABLE TIMELINE
                ================================================ */}

                <div
                  className="l11-timeline"
                  role="group"
                  aria-label="Product marketing launch phases"
                >
                  {phases.map((phase, index) => (
                    <label
                      key={phase.id}
                      htmlFor={`l11-${phase.id}`}
                      className="l11-phase"
                    >
                      <span className="l11-phase-top">
                        <span>0{index + 1}</span>
                        <ArrowRight aria-hidden="true" />
                      </span>

                      <span>
                        <span className="l11-phase-name">
                          {phase.name}
                        </span>

                        <span className="l11-phase-caption">
                          {phase.caption}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </AnimatedSection>

      {/* ============================================================
          11.06 — CLOSING CTA
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="l11-footer">
          <div>
            <h3>
              Ready to Bring Something New to Market?
            </h3>

            <p>
              From the first conversation to the launch
              campaign and what comes after, let's
              build a plan that gives your product
              a meaningful start.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="l11-button l11-primary"
          >
            Let's Plan Your Launch
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </div>

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 11 ================= */}





{/* ============================================================
   SECTION 12 — WEBSITES, SOFTWARE & DIGITAL EXPERIENCES
   INCHTOMILEZ / DIGITAL PRODUCT LAB

   12.01 — Premium Scoped Styles
   12.02 — Editorial Introduction
   12.03 — Interactive Device Preview Lab
   12.04 — Website Experience Mockup
   12.05 — Digital Architecture Capabilities
   12.06 — Closing CTA

   THEME:
   Original InchToMilez black / charcoal / yellow buttons
   Existing Raleway typography
   H2 main heading / H3 supporting headings
   No new imports or packages
============================================================ */}

<section
  id="home-digital-experiences"
  className="relative isolate overflow-hidden bg-[#060708]"
  aria-labelledby="home-web-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  <style>{`
    #home-digital-experiences {
      --web12-border:rgba(255,255,255,.16);
      --web12-muted:#b5b8c0;
    }

    #home-digital-experiences .web12-background {
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 50% 38%,
          rgba(255,255,255,.055),
          transparent 55%
        ),
        linear-gradient(
          180deg,#060708,#0c0d10 50%,#060708
        );
    }

    /* EDITORIAL HEADER */

    #home-digital-experiences .web12-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      gap:22px;
      align-items:end;
      margin-bottom:32px;
    }

    #home-digital-experiences .web12-eyebrow {
      margin:0 0 15px;
      color:#aeb1b8;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-digital-experiences .web12-heading {
      max-width:720px;
      margin:0;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-digital-experiences .web12-lead {
      max-width:650px;
      margin:17px 0 0;
      color:#d1d5db;
      font-size:15px;
      line-height:1.75;
    }

    #home-digital-experiences .web12-aside {
      margin:0;
      max-width:360px;
      color:#b9bcc4;
      font-size:13px;
      line-height:1.75;
    }

    /* MAIN PRODUCT LAB */

    #home-digital-experiences .web12-lab {
      position:relative;
      min-width:0;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.2);
      border-radius:16px;
      background:rgba(9,10,12,.97);
      box-shadow:0 25px 75px rgba(0,0,0,.3);
    }

    #home-digital-experiences .web12-toolbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      gap:12px;
      padding:16px 21px;
      border-bottom:1px solid rgba(255,255,255,.13);
      background:#121316;
    }

    #home-digital-experiences .web12-lab-label {
      display:flex;
      align-items:center;
      gap:9px;
      color:#fff;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-digital-experiences .web12-lab-label svg {
      width:17px;
      height:17px;
    }

    #home-digital-experiences .web12-lab-note {
      color:#9498a1;
      font-size:11px;
      letter-spacing:.05em;
    }

    /* LAB CONTENT */

    #home-digital-experiences .web12-workspace {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      min-width:0;
    }

    #home-digital-experiences .web12-preview-area {
      position:relative;
      min-width:0;
      padding:clamp(18px,3vw,32px);
      background:
        radial-gradient(
          ellipse at 50% 45%,
          rgba(255,255,255,.055),
          transparent 58%
        ),
        #0c0d0f;
    }

    /* DEVICE CONTROL */

    #home-digital-experiences .web12-device-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:14px;
      margin-bottom:23px;
    }

    #home-digital-experiences .web12-preview-caption {
      color:#b2b5bc;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-digital-experiences .web12-device-controls {
      display:flex;
      gap:7px;
      padding:4px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:9px;
      background:#17181b;
    }

    #home-digital-experiences .web12-radio {
      position:absolute;
      width:1px;
      height:1px;
      margin:-1px;
      padding:0;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-digital-experiences .web12-device-choice {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:7px;
      min-height:37px;
      padding:8px 13px;
      border-radius:6px;
      color:#b6b9c1;
      font-size:12px;
      font-weight:600;
      cursor:pointer;
      transition:background .2s ease,color .2s ease;
    }

    #home-digital-experiences .web12-device-choice svg {
      width:16px;
      height:16px;
    }

    /* DEVICE PREVIEW */

    #home-digital-experiences .web12-device-stage {
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:425px;
      padding:10px 0 20px;
      overflow:hidden;
    }

    #home-digital-experiences .web12-browser {
      display:flex;
      flex-direction:column;
      width:100%;
      max-width:630px;
      height:386px;
      min-width:0;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.28);
      border-radius:12px;
      background:#131417;
      box-shadow:0 30px 65px rgba(0,0,0,.45);
      transition:
        width .4s cubic-bezier(.22,1,.36,1),
        height .4s cubic-bezier(.22,1,.36,1),
        border-radius .4s ease;
    }

    #home-digital-experiences .web12-browser-bar {
      display:flex;
      align-items:center;
      gap:12px;
      flex-shrink:0;
      padding:11px 14px;
      background:#202125;
      border-bottom:1px solid rgba(255,255,255,.12);
    }

    #home-digital-experiences .web12-browser-dots {
      display:flex;
      gap:5px;
    }

    #home-digital-experiences .web12-browser-dots span {
      width:7px;
      height:7px;
      border-radius:50%;
      background:#656871;
    }

    #home-digital-experiences .web12-url {
      flex:1;
      min-width:0;
      padding:7px 10px;
      border:1px solid rgba(255,255,255,.09);
      border-radius:6px;
      background:#131417;
      color:#a8abb3;
      font-size:11px;
      text-align:center;
    }

    /* MOCK WEBSITE */

    #home-digital-experiences .web12-mock {
      flex:1;
      overflow:auto;
      scrollbar-width:thin;
      scrollbar-color:#383b42 transparent;
      background:#0b0c0e;
      color:#fff;
    }

    #home-digital-experiences .web12-mock-top {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:10px;
      padding:17px 22px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-digital-experiences .web12-mock-brand {
      color:#fff;
      font-size:13px;
      font-weight:700;
      letter-spacing:.045em;
    }

    #home-digital-experiences .web12-mock-menu {
      display:flex;
      gap:13px;
      align-items:center;
      color:#b7bac1;
      font-size:10px;
    }

    #home-digital-experiences .web12-mock-hero {
      position:relative;
      padding:39px 25px 30px;
      overflow:hidden;
    }

    #home-digital-experiences .web12-mock-hero::before {
      content:"";
      position:absolute;
      width:240px;
      height:240px;
      right:-95px;
      top:-80px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.13);
      box-shadow:
        0 0 0 34px rgba(255,255,255,.015),
        0 0 0 72px rgba(255,255,255,.015);
      pointer-events:none;
    }

    #home-digital-experiences .web12-mock-eyebrow {
      margin:0 0 12px;
      color:#adb0b8;
      font-size:9px;
      letter-spacing:.1em;
    }

    #home-digital-experiences .web12-mock-title {
      position:relative;
      max-width:390px;
      margin:0;
      color:#fff;
      font-size:clamp(23px,3vw,35px);
      font-weight:700;
      line-height:1.2;
    }

    #home-digital-experiences .web12-mock-description {
      position:relative;
      max-width:355px;
      margin:13px 0 0;
      color:#b7bac2;
      font-size:11px;
      line-height:1.7;
    }

    #home-digital-experiences .web12-mock-cta {
      display:inline-flex;
      align-items:center;
      gap:7px;
      min-height:30px;
      margin-top:19px;
      padding:8px 12px;
      background:#eab308;
      border-radius:6px;
      color:#000;
      font-size:10px;
      font-weight:700;
    }

    #home-digital-experiences .web12-mock-cta svg {
      width:12px;
      height:12px;
    }

    #home-digital-experiences .web12-mock-features {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:8px;
      padding:0 22px 22px;
    }

    #home-digital-experiences .web12-mock-feature {
      min-width:0;
      min-height:64px;
      padding:12px;
      border:1px solid rgba(255,255,255,.13);
      border-radius:7px;
      background:#16171a;
    }

    #home-digital-experiences .web12-mock-feature strong {
      display:block;
      font-size:10px;
      font-weight:600;
      color:#fff;
    }

    #home-digital-experiences .web12-mock-feature span {
      display:block;
      margin-top:5px;
      color:#9da1aa;
      font-size:9px;
      line-height:1.4;
    }

    /* RADIO DEVICE STATES */

    #web12-desktop:checked ~ .web12-preview-content
    label[for="web12-desktop"],
    #web12-tablet:checked ~ .web12-preview-content
    label[for="web12-tablet"],
    #web12-mobile:checked ~ .web12-preview-content
    label[for="web12-mobile"] {
      color:#fff;
      background:#32343a;
    }

    #web12-tablet:checked ~ .web12-preview-content
    .web12-browser {
      width:min(76%,430px);
      height:415px;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-browser {
      width:min(62%,270px);
      height:425px;
      border-radius:17px;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-mock-top {
      padding:12px;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-mock-menu {
      display:none;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-mock-hero {
      padding:30px 14px 23px;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-mock-title {
      font-size:23px;
    }

    #web12-mobile:checked ~ .web12-preview-content
    .web12-mock-features {
      grid-template-columns:1fr;
      padding:0 14px 14px;
    }

    /* RIGHT CAPABILITY ARCHITECTURE */

    #home-digital-experiences .web12-architecture {
      min-width:0;
      padding:clamp(21px,3vw,31px);
      border-top:1px solid rgba(255,255,255,.15);
      background:
        linear-gradient(
          155deg,#17181b,#0b0c0e
        );
    }

    #home-digital-experiences .web12-architecture-label {
      margin:0 0 12px;
      color:#aeb1b8;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-digital-experiences .web12-architecture-title {
      margin:0;
      color:#fff;
      font-size:22px;
      font-weight:600;
      line-height:1.3;
    }

    #home-digital-experiences .web12-architecture-desc {
      margin:12px 0 22px;
      color:#bfc2c9;
      font-size:13px;
      line-height:1.75;
    }

    #home-digital-experiences .web12-stack {
      display:grid;
      gap:0;
      border-top:1px solid rgba(255,255,255,.13);
    }

    #home-digital-experiences .web12-stack-item {
      display:flex;
      align-items:flex-start;
      gap:13px;
      min-width:0;
      padding:18px 0;
      border-bottom:1px solid rgba(255,255,255,.12);
      text-decoration:none;
      transition:transform .2s ease;
    }

    #home-digital-experiences .web12-stack-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:39px;
      height:39px;
      flex-shrink:0;
      border:1px solid rgba(255,255,255,.18);
      border-radius:9px;
      background:rgba(255,255,255,.04);
      color:#fff;
    }

    #home-digital-experiences .web12-stack-icon svg {
      width:18px;
      height:18px;
    }

    #home-digital-experiences .web12-stack-text {
      flex:1;
      min-width:0;
    }

    #home-digital-experiences .web12-stack-text h3 {
      margin:0;
      color:#fff;
      font-size:14px;
      font-weight:600;
      line-height:1.4;
    }

    #home-digital-experiences .web12-stack-text p {
      margin:6px 0 0;
      color:#aeb1b9;
      font-size:12px;
      line-height:1.65;
    }

    #home-digital-experiences .web12-stack-arrow {
      width:16px;
      height:16px;
      margin-top:9px;
      flex-shrink:0;
      color:#969aa3;
      transform:rotate(-45deg);
    }

    /* BUTTONS */

    #home-digital-experiences .web12-actions {
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:24px;
    }

    #home-digital-experiences .web12-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      transition:
        background .2s ease,
        border-color .2s ease;
    }

    #home-digital-experiences .web12-button svg {
      width:16px;
      height:16px;
    }

    #home-digital-experiences .web12-primary {
      color:#000;
      background:#eab308;
      border:1px solid #eab308;
    }

    #home-digital-experiences .web12-secondary {
      color:#fff;
      background:rgba(0,0,0,.3);
      border:1px solid rgba(255,255,255,.24);
    }

    /* CLOSING RAIL */

    #home-digital-experiences .web12-footer {
      display:grid;
      grid-template-columns:1fr;
      gap:0;
      margin-top:16px;
      border:1px solid rgba(255,255,255,.15);
      border-radius:12px;
      overflow:hidden;
      background:rgba(10,11,13,.94);
    }

    #home-digital-experiences .web12-footer-item {
      display:flex;
      flex-direction:column;
      gap:6px;
      padding:19px 21px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }

    #home-digital-experiences .web12-footer-item:last-child {
      border-bottom:0;
    }

    #home-digital-experiences .web12-footer-item strong {
      color:#fff;
      font-size:13px;
      font-weight:600;
    }

    #home-digital-experiences .web12-footer-item span {
      color:#aeb1b8;
      font-size:12px;
      line-height:1.65;
    }

    @media(min-width:1024px) {
      #home-digital-experiences .web12-header {
        grid-template-columns:
          minmax(0,1.35fr) minmax(0,.65fr);
        gap:45px;
      }

      #home-digital-experiences .web12-aside {
        justify-self:end;
      }

      #home-digital-experiences .web12-workspace {
        grid-template-columns:
          minmax(0,1.15fr) minmax(0,.85fr);
      }

      #home-digital-experiences .web12-architecture {
        border-top:0;
        border-left:1px solid rgba(255,255,255,.15);
      }
    }

    @media(min-width:640px) {
      #home-digital-experiences .web12-footer {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }

      #home-digital-experiences .web12-footer-item {
        border-bottom:0;
        border-right:1px solid rgba(255,255,255,.1);
      }

      #home-digital-experiences .web12-footer-item:last-child {
        border-right:0;
      }
    }

    @media(max-width:639px) {
      #home-digital-experiences .web12-device-stage {
        min-height:345px;
      }

      #home-digital-experiences .web12-browser {
        height:330px;
      }

      #home-digital-experiences
      .web12-mock-menu {
        display:none;
      }

      #home-digital-experiences
      .web12-mock-title {
        font-size:25px;
      }

      #web12-tablet:checked ~ .web12-preview-content
      .web12-browser {
        width:84%;
        height:340px;
      }

      #web12-mobile:checked ~ .web12-preview-content
      .web12-browser {
        width:min(68%,240px);
        height:345px;
      }

      #home-digital-experiences .web12-preview-area {
        padding:16px;
      }

      #home-digital-experiences .web12-device-choice {
        padding:8px 10px;
        font-size:11px;
      }
    }

    @media(max-width:380px) {
      #home-digital-experiences .web12-device-stage {
        min-height:315px;
      }

      #home-digital-experiences .web12-browser {
        height:300px;
      }

      #web12-mobile:checked ~ .web12-preview-content
      .web12-browser {
        width:195px;
        height:315px;
      }

      #home-digital-experiences .web12-actions
      .web12-button {
        width:100%;
      }
    }

    @media(hover:hover) and (pointer:fine) {
      #home-digital-experiences .web12-device-choice:hover {
        color:#fff;
        background:#292b30;
      }

      #home-digital-experiences .web12-stack-item:hover {
        transform:translateX(3px);
      }

      #home-digital-experiences .web12-primary:hover {
        background:#facc15;
        border-color:#facc15;
      }

      #home-digital-experiences .web12-secondary:hover {
        background:rgba(255,255,255,.08);
        border-color:rgba(255,255,255,.45);
      }
    }

    #home-digital-experiences a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    #web12-desktop:focus-visible ~ .web12-preview-content
    label[for="web12-desktop"],
    #web12-tablet:focus-visible ~ .web12-preview-content
    label[for="web12-tablet"],
    #web12-mobile:focus-visible ~ .web12-preview-content
    label[for="web12-mobile"] {
      outline:2px solid #eab308;
      outline-offset:2px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-digital-experiences .web12-browser,
      #home-digital-experiences .web12-button,
      #home-digital-experiences .web12-stack-item {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      12.02 — EDITORIAL INTRODUCTION
  ============================================================ */}

  <div className="web12-background" aria-hidden="true" />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="web12-header">
          <div>
            <p className="web12-eyebrow">
              WEBSITES / SOFTWARE / DIGITAL EXPERIENCES
            </p>

            <h2
              id="home-web-heading"
              className="web12-heading"
            >
              A Website Should Do More
              Than Look Impressive.
            </h2>

            <p className="web12-lead">
              Your website is where curiosity becomes
              consideration. We combine thoughtful design,
              development and technology to create digital
              experiences that feel intuitive, work
              across devices and support real business goals.
            </p>
          </div>

          <p className="web12-aside">
            From a brand's first website to more complex
            digital platforms, we connect visual
            design, usability and performance
            around the people using them.
          </p>
        </header>
      </AnimatedSection>

      {/* ============================================================
          12.03 — INTERACTIVE DIGITAL PRODUCT LAB
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.08}
      >
        <div className="web12-lab">

          {/* LAB TOP TOOLBAR */}

          <div className="web12-toolbar">
            <span className="web12-lab-label">
              <Code aria-hidden="true" />
              THE DIGITAL PRODUCT LAB
            </span>

            <span className="web12-lab-note">
              DESIGN / EXPERIENCE / TECHNOLOGY
            </span>
          </div>

          <div className="web12-workspace">

            {/* ================================================
                LEFT — RESPONSIVE WEBSITE PREVIEW
            ================================================ */}

            <div className="web12-preview-area">

              {/* Native radio device selector */}

              {[
                ["desktop", "Desktop"],
                ["tablet", "Tablet"],
                ["mobile", "Mobile"],
              ].map(([id, label], index) => (
                <input
                  key={id}
                  type="radio"
                  id={`web12-${id}`}
                  name="web12-preview-device"
                  className="web12-radio"
                  defaultChecked={index === 0}
                  aria-label={`${label} preview`}
                />
              ))}

              <div className="web12-preview-content">

                <div className="web12-device-header">
                  <span className="web12-preview-caption">
                    RESPONSIVE EXPERIENCE / DEMO
                  </span>

                  <div
                    className="web12-device-controls"
                    role="group"
                    aria-label="Select device preview"
                  >
                    <label
                      htmlFor="web12-desktop"
                      className="web12-device-choice"
                    >
                      <Monitor aria-hidden="true" />
                      Desktop
                    </label>

                    <label
                      htmlFor="web12-tablet"
                      className="web12-device-choice"
                    >
                      Tablet
                    </label>

                    <label
                      htmlFor="web12-mobile"
                      className="web12-device-choice"
                    >
                      Mobile
                    </label>
                  </div>
                </div>

                {/* DEVICE STAGE */}

                <div className="web12-device-stage">

                  <div className="web12-browser">

                    <div
                      className="web12-browser-bar"
                      aria-hidden="true"
                    >
                      <div className="web12-browser-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="web12-url">
                        yourbrand.com
                      </div>
                    </div>

                    {/* FICTIONAL WEBSITE MOCKUP */}

                    <div className="web12-mock">

                      <div className="web12-mock-top">
                        <strong className="web12-mock-brand">
                          YOUR BRAND
                        </strong>

                        <div className="web12-mock-menu">
                          <span>About</span>
                          <span>Services</span>
                          <span>Contact</span>
                        </div>
                      </div>

                      <div className="web12-mock-hero">

                        <p className="web12-mock-eyebrow">
                          BUILT AROUND YOUR AUDIENCE
                        </p>

                        <p className="web12-mock-title">
                          Make Every
                          Interaction Count.
                        </p>

                        <p className="web12-mock-description">
                          An intentional design,
                          a clear message and
                          an experience that makes
                          the next step easier.
                        </p>

                        <span className="web12-mock-cta">
                          Explore More
                          <ArrowRight aria-hidden="true" />
                        </span>
                      </div>

                      <div className="web12-mock-features">
                        {[
                          ["Clarity", "Easy to understand"],
                          ["Usability", "Simple to navigate"],
                          ["Performance", "Built with purpose"],
                        ].map(([name, description]) => (
                          <div
                            key={name}
                            className="web12-mock-feature"
                          >
                            <strong>{name}</strong>
                            <span>{description}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>

                <p
                  style={{
                    margin:0,
                    color:"#969aa3",
                    fontSize:11,
                    lineHeight:1.6,
                    textAlign:"center",
                  }}
                >
                  Illustrative responsive design concept.
                  Not an actual client project.
                </p>

              </div>
            </div>

            {/* ================================================
                RIGHT — TECHNOLOGY ARCHITECTURE
            ================================================ */}

            <div className="web12-architecture">

              <p className="web12-architecture-label">
                MORE THAN A PRETTY INTERFACE
              </p>

              <h3 className="web12-architecture-title">
                Designed for People.
                Built for What Comes Next.
              </h3>

              <p className="web12-architecture-desc">
                Good digital experiences connect
                the brand, the user and the technology.
                Every decision should make something
                clearer, faster or easier.
              </p>

              <div className="web12-stack">
                {[
                  {
                    icon: Layers,
                    title: "UX & UI Design",
                    description:
                      "Clear structure, thoughtful interfaces and intuitive navigation.",
                    link: routeTo.service(
                      "web-design-development"
                    ),
                  },
                  {
                    icon: Code,
                    title: "Website Development",
                    description:
                      "Responsive websites built around the content, business and audience.",
                    link: routeTo.service(
                      "web-design-development"
                    ),
                  },
                  {
                    icon: Zap,
                    title: "Speed & Technical SEO",
                    description:
                      "Performance-conscious development and search-friendly foundations.",
                    link: routeTo.service(
                      "digital-marketing"
                    ),
                  },
                  {
                    icon: Shield,
                    title: "Software & Digital Platforms",
                    description:
                      "Purpose-built digital tools and practical technology solutions.",
                    link: ROUTES.services,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.link}
                      className="web12-stack-item"
                    >
                      <span
                        className="web12-stack-icon"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <div className="web12-stack-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <ArrowRight
                        className="web12-stack-arrow"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="web12-actions">
                <Link
                  to={routeTo.service(
                    "web-design-development"
                  )}
                  className="web12-button web12-primary"
                >
                  Explore Web Development
                  <ArrowRight aria-hidden="true" />
                </Link>

                <Link
                  to={ROUTES.contact}
                  className="web12-button web12-secondary"
                >
                  Discuss Your Project
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================
          12.04 — BOTTOM EXPERIENCE PRINCIPLES
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="web12-footer">
          {[
            {
              title: "Built Around Your Audience",
              text: "A digital experience should make sense to the people using it.",
            },
            {
              title: "Made to Work Across Devices",
              text: "Clear, consistent experiences from phones to desktops.",
            },
            {
              title: "Connected to Business Goals",
              text: "Every interaction should support a meaningful next step.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="web12-footer-item"
            >
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 12 ================= */}



{/* ============================================================
    SECTION 13 — HOW WE WORK
    INCHTOMILEZ / THE CONNECTED PROCESS

    13.01 — Scoped Design System
    13.02 — Editorial Introduction
    13.03 — Premium Connected Process Architecture
    13.04 — Strategy-to-Execution Closing Statement

    DESIGN:
    - Original black / charcoal theme
    - Sophisticated staggered workflow
    - Connected vertical process line
    - Premium dark glass surfaces
    - Smooth whole-element entrance animations
    - Responsive mobile-first construction
    - Existing React Router, Lucide, AnimatedSection
    - No new dependencies or TextScramble
============================================================ */}

<section
  id="home-our-process"
  className="relative isolate overflow-hidden bg-[#060708]"
  aria-labelledby="home-process-heading"
  style={{
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  <style>{`
    #home-our-process {
      --p13-border:rgba(255,255,255,.16);
      --p13-muted:#b4b7bf;
    }

    #home-our-process .p13-atmosphere {
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 50% 35%,
          rgba(255,255,255,.05),
          transparent 55%
        ),
        linear-gradient(
          180deg,#060708,#0d0e10 50%,#060708
        );
    }

    /* SECTION HEADER */

    #home-our-process .p13-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:39px;
    }

    #home-our-process .p13-eyebrow {
      margin:0 0 15px;
      color:#b2b5bd;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-our-process .p13-heading {
      margin:0;
      max-width:720px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-our-process .p13-lead {
      margin:17px 0 0;
      max-width:650px;
      color:#d0d3da;
      font-size:15px;
      line-height:1.75;
    }

    #home-our-process .p13-aside {
      max-width:330px;
      margin:0;
      color:#b9bbc3;
      font-size:13px;
      line-height:1.75;
    }

    /* PROCESS ARCHITECTURE */

    #home-our-process .p13-process {
      position:relative;
      display:grid;
      grid-template-columns:1fr;
      gap:16px;
      padding-left:27px;
    }

    #home-our-process .p13-process::before {
      content:"";
      position:absolute;
      left:7px;
      top:22px;
      bottom:22px;
      width:1px;
      background:linear-gradient(
        180deg,
        transparent,
        rgba(255,255,255,.55) 12%,
        rgba(255,255,255,.3) 85%,
        transparent
      );
    }

    /* INDIVIDUAL STAGES */

    #home-our-process .p13-step {
      position:relative;
      min-width:0;
    }

    #home-our-process .p13-step::before {
      content:"";
      position:absolute;
      top:34px;
      left:-25px;
      width:11px;
      height:11px;
      border-radius:50%;
      border:2px solid #b5b7bd;
      background:#0b0c0e;
      box-shadow:0 0 0 5px #08090b;
      z-index:2;
    }

    #home-our-process .p13-step::after {
      content:"";
      position:absolute;
      top:39px;
      left:-14px;
      width:14px;
      height:1px;
      background:rgba(255,255,255,.3);
    }

    #home-our-process .p13-card {
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      min-width:0;
      min-height:220px;
      padding:25px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:13px;
      background:
        linear-gradient(
          145deg,
          rgba(23,24,27,.96),
          rgba(9,10,12,.97)
        );
      overflow:hidden;
      isolation:isolate;
      transition:
        border-color .25s ease,
        transform .25s ease,
        box-shadow .25s ease;
    }

    #home-our-process .p13-card::before {
      content:"";
      position:absolute;
      width:260px;
      height:260px;
      top:-140px;
      right:-100px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.075);
      box-shadow:
        0 0 0 35px rgba(255,255,255,.014),
        0 0 0 75px rgba(255,255,255,.01);
      pointer-events:none;
    }

    #home-our-process .p13-card-top {
      position:relative;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:16px;
    }

    #home-our-process .p13-step-number {
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-our-process .p13-step-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:42px;
      height:42px;
      border:1px solid rgba(255,255,255,.2);
      border-radius:10px;
      background:rgba(255,255,255,.045);
      color:#fff;
    }

    #home-our-process .p13-step-icon svg {
      width:20px;
      height:20px;
    }

    #home-our-process .p13-card-body {
      position:relative;
      margin-top:28px;
    }

    #home-our-process .p13-step-title {
      margin:0;
      color:#fff;
      font-size:22px;
      font-weight:600;
      line-height:1.35;
    }

    #home-our-process .p13-step-description {
      margin:11px 0 0;
      max-width:500px;
      color:#c1c4cb;
      font-size:13px;
      line-height:1.75;
    }

    #home-our-process .p13-deliverable {
      display:flex;
      align-items:flex-start;
      gap:9px;
      margin-top:19px;
      padding-top:15px;
      border-top:1px solid rgba(255,255,255,.12);
      color:#e0e1e5;
      font-size:12px;
      line-height:1.6;
    }

    #home-our-process .p13-deliverable svg {
      width:15px;
      height:15px;
      margin-top:2px;
      flex-shrink:0;
    }

    /* FEATURED SECTION FOOTER */

    #home-our-process .p13-footer {
      position:relative;
      display:grid;
      grid-template-columns:1fr;
      align-items:center;
      gap:24px;
      margin-top:25px;
      padding:27px;
      border:1px solid rgba(255,255,255,.18);
      border-radius:13px;
      background:
        linear-gradient(
          125deg,
          rgba(23,24,28,.95),
          rgba(7,8,10,.98)
        );
    }

    #home-our-process .p13-footer-label {
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-our-process .p13-footer-heading {
      margin:11px 0 0;
      color:#fff;
      font-size:20px;
      font-weight:600;
      line-height:1.35;
    }

    #home-our-process .p13-footer-copy {
      margin:9px 0 0;
      max-width:600px;
      color:#bdc0c7;
      font-size:13px;
      line-height:1.75;
    }

    /* CTA */

    #home-our-process .p13-button {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      width:fit-content;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      background:#eab308;
      border:1px solid #eab308;
      color:#050505;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      text-decoration:none;
      transition:background .2s ease,transform .2s ease;
    }

    #home-our-process .p13-button svg {
      width:16px;
      height:16px;
    }

    /* RESPONSIVE ARCHITECTURE */

    @media(min-width:900px) {
      #home-our-process .p13-header {
        grid-template-columns:
          minmax(0,1.35fr) minmax(0,.65fr);
        gap:45px;
      }

      #home-our-process .p13-aside {
        justify-self:end;
      }

      #home-our-process .p13-process {
        grid-template-columns:repeat(2,minmax(0,1fr));
        column-gap:60px;
        row-gap:30px;
        padding-left:0;
      }

      #home-our-process .p13-process::before {
        left:50%;
        top:35px;
        bottom:35px;
        transform:translateX(-50%);
      }

      #home-our-process .p13-step:nth-child(odd) {
        margin-top:0;
      }

      #home-our-process .p13-step:nth-child(even) {
        margin-top:74px;
      }

      #home-our-process .p13-step::before {
        display:none;
      }

      #home-our-process .p13-step::after {
        display:none;
      }

      #home-our-process .p13-card {
        min-height:267px;
      }

      #home-our-process .p13-step:nth-child(1) {
        grid-column:1;
        grid-row:1;
      }

      #home-our-process .p13-step:nth-child(2) {
        grid-column:2;
        grid-row:1;
      }

      #home-our-process .p13-step:nth-child(3) {
        grid-column:1;
        grid-row:2;
      }

      #home-our-process .p13-step:nth-child(4) {
        grid-column:2;
        grid-row:2;
      }

      #home-our-process .p13-footer {
        grid-template-columns:minmax(0,1fr) auto;
        padding:30px;
      }
    }

    @media(min-width:640px) and (max-width:899px) {
      #home-our-process .p13-process {
        padding-left:34px;
      }

      #home-our-process .p13-process::before {
        left:13px;
      }

      #home-our-process .p13-step::before {
        left:-26px;
      }

      #home-our-process .p13-step::after {
        left:-15px;
      }
    }

    @media(max-width:639px) {
      #home-our-process .p13-header {
        margin-bottom:28px;
      }

      #home-our-process .p13-process {
        gap:12px;
        padding-left:22px;
      }

      #home-our-process .p13-process::before {
        left:4px;
      }

      #home-our-process .p13-step::before {
        left:-23px;
      }

      #home-our-process .p13-step::after {
        left:-13px;
        width:13px;
      }

      #home-our-process .p13-card {
        min-height:215px;
        padding:19px;
      }

      #home-our-process .p13-step-title {
        font-size:19px;
      }

      #home-our-process .p13-footer {
        padding:21px;
      }
    }

    /* INTERACTION */

    @media(hover:hover) and (pointer:fine) {
      #home-our-process .p13-card:hover {
        border-color:rgba(255,255,255,.42);
        transform:translateY(-4px);
        box-shadow:0 20px 45px rgba(0,0,0,.22);
      }

      #home-our-process .p13-button:hover {
        background:#facc15;
        border-color:#facc15;
        transform:translateY(-2px);
      }
    }

    #home-our-process a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-our-process .p13-card,
      #home-our-process .p13-button {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      13.02 — EDITORIAL HEADER
  ============================================================ */}

  <div
    className="p13-atmosphere"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="p13-header">
          <div>
            <p className="p13-eyebrow">
              THE INCHTOMILEZ WAY / HOW WE WORK
            </p>

            <h2
              id="home-process-heading"
              className="p13-heading"
            >
              Good Work Doesn't Happen by Accident.
            </h2>

            <p className="p13-lead">
              Every brand brings a different challenge.
              That's why we start by understanding
              the business before deciding what
              to create, where to communicate
              or which channels to use.
            </p>
          </div>

          <p className="p13-aside">
            A connected process keeps the strategy,
            creative, execution and learning
            moving in the same direction —
            without making the work unnecessarily complicated.
          </p>
        </header>
      </AnimatedSection>

      {/* ============================================================
          13.03 — CONNECTED PROCESS ARCHITECTURE
      ============================================================ */}

      <div className="p13-process">

        {[
          {
            number: "01",
            title: "Discover",
            icon: Search,
            description:
              "We begin with your business, your audience, your market and the challenge in front of you. Before suggesting channels or campaigns, we understand what you're trying to achieve.",
            result:
              "A clearer understanding of the challenge.",
          },
          {
            number: "02",
            title: "Define",
            icon: Target,
            description:
              "We shape the strategy, positioning and priorities. The goal is to give the work a clear direction and connect marketing decisions to what matters for the business.",
            result:
              "A practical direction for the work ahead.",
          },
          {
            number: "03",
            title: "Create & Activate",
            icon: Rocket,
            description:
              "We turn the direction into real work: campaigns, brand assets, advertising, content, digital platforms or on-ground experiences depending on what the project needs.",
            result:
              "Ideas brought to life across the right touchpoints.",
          },
          {
            number: "04",
            title: "Measure & Improve",
            icon: BarChart3,
            description:
              "We review performance, understand the audience response and identify useful next steps. Learning helps improve future creative, campaigns and experiences.",
            result:
              "More informed decisions about what comes next.",
          },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <AnimatedSection
              key={step.number}
              animation="fadeInUp"
              delay={0.06 + index * 0.06}
              amount={0.1}
            >
              <article className="p13-step">
                <div className="p13-card">

                  <div className="p13-card-top">
                    <span className="p13-step-number">
                      PHASE {step.number} / 04
                    </span>

                    <span
                      className="p13-step-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                  </div>

                  <div className="p13-card-body">
                    <h3 className="p13-step-title">
                      {step.title}
                    </h3>

                    <p className="p13-step-description">
                      {step.description}
                    </p>

                    <div className="p13-deliverable">
                      <CheckCircle aria-hidden="true" />
                      <span>{step.result}</span>
                    </div>
                  </div>

                </div>
              </article>
            </AnimatedSection>
          );
        })}

      </div>

      {/* ============================================================
          13.04 — CLOSING CONVERSION PANEL
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.1}
      >
        <div className="p13-footer">

          <div>
            <span className="p13-footer-label">
              A CLEARER WAY TO MOVE FORWARD
            </span>

            <h3 className="p13-footer-heading">
              One Challenge. One Direction. The Right Team.
            </h3>

            <p className="p13-footer-copy">
              You don't need to arrive with a finished brief.
              Tell us where your business stands and what
              you're trying to achieve. We'll start there.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="p13-button"
          >
            Let's Talk About Your Goals
            <ArrowRight aria-hidden="true" />
          </Link>

        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 13 ================= */}










{/* ============================================================
    SECTION 14 — INDUSTRIES WE WORK WITH
    INCHTOMILEZ / PREMIUM INDUSTRY DISCOVERY WALL

    FIXED VERSION:
    - Correct 12-column CSS grid
    - No individual AnimatedSection wrappers around cards
    - Correct 7/5 + 4/4/4 desktop composition
    - Correct tablet and mobile layouts
    - No overlapping or squeezed cards
    - Original Raleway typography
    - Black / Dark Glass / White / Yellow CTA
    - No additional imports or dependencies

    14.01 — Scoped Styles
    14.02 — Editorial Introduction
    14.03 — Corrected Photographic Grid
    14.04 — Industry-Specific Content
    14.05 — Closing CTA
============================================================ */}

<section
  id="home-industries"
  className="relative isolate overflow-hidden"
  aria-labelledby="home-industries-heading"
  style={{
    backgroundColor: "#060708",
    paddingBlock: "clamp(60px,7vw,105px)",
    fontFamily: "'Raleway', sans-serif",
    color: "#fff",
  }}
>
  {/* ============================================================
      14.01 — COMPLETE SECTION CSS
  ============================================================ */}

  <style>{`
    #home-industries {
      --i14-border: rgba(255,255,255,.16);
      --i14-muted: #b8bbc2;
    }

    #home-industries *,
    #home-industries *::before,
    #home-industries *::after {
      box-sizing: border-box;
    }

    #home-industries .i14-ambient {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(
          ellipse at 55% 30%,
          rgba(255,255,255,.04),
          transparent 55%
        ),
        linear-gradient(
          180deg,
          #060708,
          #0b0c0e 50%,
          #060708
        );
    }

    /* ========================================================
       14.02 — EDITORIAL HEADER
    ======================================================== */

    #home-industries .i14-header {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      gap: 20px;
      align-items: end;
      margin-bottom: 29px;
    }

    #home-industries .i14-eyebrow {
      margin: 0 0 15px;
      color: #b2b5bc;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #home-industries .i14-title {
      margin: 0;
      max-width: 750px;
      color: #fff;
      font-size: clamp(24px,2.5vw,32px);
      font-weight: 700;
      line-height: 1.25;
      text-wrap: balance;
    }

    #home-industries .i14-lead {
      max-width: 650px;
      margin: 16px 0 0;
      color: #d1d5db;
      font-size: 15px;
      line-height: 1.7;
    }

    #home-industries .i14-aside {
      margin: 0;
      max-width: 350px;
      color: var(--i14-muted);
      font-size: 13px;
      line-height: 1.75;
    }

    /* ========================================================
       14.03 — CORRECTED INDUSTRY GRID

       IMPORTANT:
       Direct children must be .i14-item links.
       Do NOT wrap each card in AnimatedSection.
    ======================================================== */

    #home-industries .i14-wall {
      display: grid;
      width: 100%;
      min-width: 0;
      grid-template-columns: repeat(12,minmax(0,1fr));
      grid-auto-flow: row dense;
      gap: 12px;
      align-items: stretch;
    }

    /* SHARED CARD DESIGN */

    #home-industries .i14-item {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      grid-column: span 12;

      width: 100%;
      min-width: 0;
      min-height: 290px;

      margin: 0;
      padding: 20px;

      overflow: hidden;

      border: 1px solid rgba(255,255,255,.2);
      border-radius: 13px;

      background: #111316;
      color: #fff;
      text-decoration: none;

      transition:
        border-color .25s ease,
        transform .25s ease,
        box-shadow .25s ease;
    }

    /* CARD BACKGROUND PHOTOGRAPHY */

    #home-industries .i14-image {
      position: absolute;
      inset: 0;
      z-index: -3;

      display: block;
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

      filter: saturate(.75);

      transition:
        transform .7s ease,
        filter .7s ease;
    }

    #home-industries .i14-shade {
      position: absolute;
      inset: 0;
      z-index: -2;
      pointer-events: none;

      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.58) 0%,
          rgba(0,0,0,.10) 35%,
          rgba(0,0,0,.78) 75%,
          rgba(0,0,0,.97) 100%
        );
    }

    #home-industries .i14-item::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background: rgba(0,0,0,.05);
    }

    /* ========================================================
       14.04 — GRID CARD SIZE VARIATIONS
    ======================================================== */

    #home-industries .i14-wide {
      grid-column: span 12;
      min-height: 385px;
    }

    #home-industries .i14-medium {
      grid-column: span 12;
      min-height: 295px;
    }

    #home-industries .i14-compact {
      grid-column: span 12;
      min-height: 255px;
    }

    /* CARD HEADER */

    #home-industries .i14-card-top {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    #home-industries .i14-index {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      min-height: 32px;
      padding: 8px 10px;

      border: 1px solid rgba(255,255,255,.23);
      border-radius: 6px;

      background: rgba(7,8,10,.73);
      backdrop-filter: blur(10px);

      color: #fff;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .07em;
      white-space: nowrap;
    }

    #home-industries .i14-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      width: 37px;
      height: 37px;
      flex-shrink: 0;

      border-radius: 8px;
      border: 1px solid rgba(255,255,255,.3);

      background: rgba(7,8,10,.75);
      backdrop-filter: blur(12px);

      transition: transform .25s ease;
    }

    #home-industries .i14-arrow svg {
      width: 17px;
      height: 17px;
      transform: rotate(-45deg);
    }

    /* ========================================================
       PREMIUM DARK GLASS CONTENT OVERLAY
    ======================================================== */

    #home-industries .i14-content {
      position: relative;
      display: block;

      width: 100%;
      max-width: 470px;
      min-width: 0;

      padding: 15px 16px;
      margin-top: 25px;

      border: 1px solid rgba(255,255,255,.18);
      border-radius: 10px;

      background: rgba(9,10,12,.83);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);

      box-shadow: 0 15px 35px rgba(0,0,0,.22);
    }

    #home-industries .i14-category {
      display: block;

      margin-bottom: 7px;

      color: #b7bac2;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    #home-industries .i14-content h3 {
      margin: 0;

      color: #fff;
      font-size: clamp(17px,1.7vw,22px);
      font-weight: 600;
      line-height: 1.35;

      overflow-wrap: break-word;
    }

    #home-industries .i14-content p {
      margin: 9px 0 0;

      color: #ced1d7;
      font-size: 12px;
      line-height: 1.65;

      overflow-wrap: break-word;
    }

    #home-industries .i14-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;

      margin-top: 13px;

      color: #fff;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.45;
    }

    #home-industries .i14-action svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }

    /* ========================================================
       14.05 — CLOSING EDITORIAL STRIP
    ======================================================== */

    #home-industries .i14-insight {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      align-items: center;
      gap: 20px;

      margin-top: 15px;
      padding: 24px;

      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;

      background:
        linear-gradient(
          120deg,
          rgba(23,24,28,.94),
          rgba(8,9,11,.96)
        );
    }

    #home-industries .i14-insight-label {
      display: block;

      margin-bottom: 9px;

      color: #adb0b8;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .08em;
    }

    #home-industries .i14-insight h3 {
      margin: 0;

      color: #fff;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.35;
    }

    #home-industries .i14-insight p {
      margin: 9px 0 0;
      max-width: 680px;

      color: #bfc2c9;
      font-size: 13px;
      line-height: 1.75;
    }

    /* PRIMARY CTA */

    #home-industries .i14-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      width: fit-content;
      min-height: 42px;
      padding: 10px 15px;

      border: 1px solid #eab308;
      border-radius: 8px;

      background: #eab308;
      color: #050505;

      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
      text-align: center;
      text-decoration: none;

      transition:
        background .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #home-industries .i14-btn svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    /* ========================================================
       TABLET: 640px–1023px

       Row 1: 7 + 5
       Remaining: 6 + 6
    ======================================================== */

    @media (min-width:640px) {
      #home-industries .i14-wide {
        grid-column: span 7;
        min-height: 370px;
      }

      #home-industries .i14-medium {
        grid-column: span 5;
        min-height: 370px;
      }

      #home-industries .i14-compact {
        grid-column: span 6;
        min-height: 300px;
      }

      #home-industries .i14-item {
        padding: 19px;
      }

      #home-industries .i14-content {
        padding: 14px;
      }
    }

    /* ========================================================
       DESKTOP: 1024px+

       Row 1: 7 + 5
       Row 2: 4 + 4 + 4
       Row 3: 4 + 4 + 4
    ======================================================== */

    @media (min-width:1024px) {
      #home-industries .i14-header {
        grid-template-columns:
          minmax(0,1.4fr)
          minmax(0,.6fr);
        gap: 45px;
      }

      #home-industries .i14-aside {
        justify-self: end;
      }

      #home-industries .i14-wide {
        grid-column: span 7;
        min-height: 385px;
      }

      #home-industries .i14-medium {
        grid-column: span 5;
        min-height: 385px;
      }

      #home-industries .i14-compact {
        grid-column: span 4;
        min-height: 310px;
      }

      #home-industries .i14-item {
        padding: 20px;
      }

      #home-industries .i14-content {
        padding: 15px 16px;
      }

      #home-industries .i14-insight {
        grid-template-columns: minmax(0,1fr) auto;
        padding: 27px 30px;
      }
    }

    /* ========================================================
       MOBILE: UNDER 640px

       All cards use full available width.
    ======================================================== */

    @media (max-width:639px) {
      #home-industries .i14-header {
        margin-bottom: 24px;
      }

      #home-industries .i14-wall {
        grid-template-columns: minmax(0,1fr);
        gap: 11px;
      }

      #home-industries .i14-item,
      #home-industries .i14-wide,
      #home-industries .i14-medium,
      #home-industries .i14-compact {
        grid-column: 1 / -1;
        min-height: 300px;
        padding: 15px;
      }

      #home-industries .i14-wide {
        min-height: 345px;
      }

      #home-industries .i14-content {
        max-width: 100%;
        padding: 14px;
      }

      #home-industries .i14-content h3 {
        font-size: 19px;
      }

      #home-industries .i14-insight {
        padding: 20px;
      }

      #home-industries .i14-insight h3 {
        font-size: 18px;
      }

      #home-industries .i14-btn {
        width: fit-content;
      }
    }

    /* ========================================================
       SMALL MOBILE
    ======================================================== */

    @media (max-width:380px) {
      #home-industries .i14-item {
        padding: 12px;
      }

      #home-industries .i14-content {
        padding: 12px;
      }

      #home-industries .i14-content h3 {
        font-size: 18px;
      }

      #home-industries .i14-category {
        font-size: 9px;
      }

      #home-industries .i14-insight {
        padding: 17px;
      }
    }

    /* ========================================================
       HOVER EFFECTS
    ======================================================== */

    @media (hover:hover) and (pointer:fine) {
      #home-industries .i14-item:hover {
        transform: translateY(-3px);
        border-color: rgba(255,255,255,.48);
        box-shadow: 0 20px 50px rgba(0,0,0,.26);
      }

      #home-industries .i14-item:hover .i14-image {
        transform: scale(1.055);
        filter: saturate(.95);
      }

      #home-industries .i14-item:hover .i14-arrow {
        transform: translate(2px,-2px);
      }

      #home-industries .i14-btn:hover {
        background: #facc15;
        border-color: #facc15;
        transform: translateY(-2px);
      }
    }

    /* KEYBOARD + ACCESSIBILITY */

    #home-industries a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion:reduce) {
      #home-industries .i14-item,
      #home-industries .i14-image,
      #home-industries .i14-arrow,
      #home-industries .i14-btn {
        transition: none;
      }
    }
  `}</style>

  {/* ============================================================
      14.02 — ATMOSPHERE
  ============================================================ */}

  <div
    className="i14-ambient"
    aria-hidden="true"
  />

  {/* ============================================================
      14.03 — MAIN CONTAINER
  ============================================================ */}

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* SECTION INTRODUCTION */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="i14-header">
          <div>
            <p className="i14-eyebrow">
              INDUSTRIES / DIFFERENT CHALLENGES
            </p>

            <h2
              id="home-industries-heading"
              className="i14-title"
            >
              Every Industry Has
              a Different Story to Tell.
            </h2>

            <p className="i14-lead">
              What connects with a retail customer
              isn't necessarily what matters to a
              healthcare patient or a business buyer.
              We adapt the strategy, creative and
              communication to the people you're
              trying to reach.
            </p>
          </div>

          <p className="i14-aside">
            Different audiences. Different decisions.
            Different opportunities. The starting
            point is always understanding what
            matters to yours.
          </p>
        </header>
      </AnimatedSection>

      {/* ========================================================
          14.04 — COMPLETE INDUSTRY DATA

          All eight original industries preserved.
      ======================================================== */}

      {(() => {
        const industries = [
          {
            number: "01",
            category: "CONSUMER MARKETS",
            title: "Retail & E-Commerce",
            description:
              "Create stronger product stories, engaging shopping experiences and campaigns designed around how people discover and choose brands.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1500&q=85",
            layout: "i14-wide",
          },
          {
            number: "02",
            category: "BUSINESS MARKETS",
            title: "B2B & Professional Services",
            description:
              "Communicate expertise, build credibility and make complex offerings easier for decision-makers to understand.",
            image:
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-medium",
          },
          {
            number: "03",
            category: "PEOPLE & WELLNESS",
            title: "Healthcare & Wellness",
            description:
              "Make service information clearer, address real audience questions and develop thoughtful, responsible communications.",
            image:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
          {
            number: "04",
            category: "SPACE & LIFESTYLE",
            title: "Real Estate & Interiors",
            description:
              "Bring projects, properties and spaces to life through distinctive presentation, useful information and targeted campaigns.",
            image:
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
          {
            number: "05",
            category: "LEARNING & DEVELOPMENT",
            title: "Education & Training",
            description:
              "Help prospective students and families understand programmes, outcomes, experiences and the next steps.",
            image:
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
          {
            number: "06",
            category: "LEISURE & EXPERIENCES",
            title: "Hospitality & Travel",
            description:
              "Turn destinations, places and experiences into compelling brand stories that inspire consideration.",
            image:
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
          {
            number: "07",
            category: "INDUSTRY & INNOVATION",
            title: "Manufacturing & Industrial",
            description:
              "Translate technical capabilities, solutions and business strengths into clear communication for relevant buyers.",
            image:
              "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
          {
            number: "08",
            category: "DIGITAL-FIRST BRANDS",
            title: "Startups & Technology",
            description:
              "Build an identity, explain a new idea and connect product messaging with the right digital experiences.",
            image:
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85",
            layout: "i14-compact",
          },
        ];

        return (
          <>
            {/* ====================================================
                14.05 — FIXED PHOTOGRAPHIC GRID

                CRITICAL FIX:
                AnimatedSection wraps the WHOLE grid.
                Individual cards remain DIRECT grid children.
            ==================================================== */}

            <AnimatedSection
              animation="fadeInUp"
              delay={0.12}
              amount={0.06}
            >
              <div className="i14-wall">

                {industries.map((industry) => (
                  <Link
                    key={industry.number}
                    to={ROUTES.contact}
                    className={`i14-item ${industry.layout}`}
                    aria-label={`Discuss marketing for ${industry.title}`}
                  >
                    {/* BACKGROUND IMAGE */}

                    <img
                      src={industry.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="i14-image"
                    />

                    {/* DARK PHOTO GRADIENT */}

                    <div
                      className="i14-shade"
                      aria-hidden="true"
                    />

                    {/* CARD TOP CONTROLS */}

                    <div className="i14-card-top">

                      <span className="i14-index">
                        {industry.number} / 08
                      </span>

                      <span
                        className="i14-arrow"
                        aria-hidden="true"
                      >
                        <ArrowRight />
                      </span>

                    </div>

                    {/* INDUSTRY CONTENT */}

                    <div className="i14-content">

                      <span className="i14-category">
                        {industry.category}
                      </span>

                      <h3>{industry.title}</h3>

                      <p>{industry.description}</p>

                      <span className="i14-action">
                        Discuss Your Industry
                        <ArrowRight aria-hidden="true" />
                      </span>

                    </div>

                  </Link>
                ))}

              </div>
            </AnimatedSection>

          </>
        );
      })()}

      {/* ========================================================
          14.06 — CLOSING CTA
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="i14-insight">

          <div>
            <span className="i14-insight-label">
              YOUR INDUSTRY. YOUR CHALLENGE.
            </span>

            <h3>
              Don't See Your Industry Here?
              That's Not a Problem.
            </h3>

            <p>
              The right approach starts with
              understanding your business, not
              forcing it into a predefined
              marketing template. Tell us what
              you do and what you're working toward.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="i14-btn"
          >
            Let's Discuss Your Business
            <ArrowRight aria-hidden="true" />
          </Link>

        </div>
      </AnimatedSection>

    </div>
  </div>

  {/* ============================================================
      14.07 — SECTION BOUNDARY
  ============================================================ */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 14 ================= */}





{/* ============================================================
   SECTION 15 — WHY CHOOSE INCHTOMILEZ
   THE AGENCY ADVANTAGE / INTERACTIVE MANIFESTO

   15.01 — Scoped Design
   15.02 — Editorial Introduction
   15.03 — Interactive Advantage Matrix
   15.04 — Dynamic Strategy Manifesto
   15.05 — Closing CTA

   Existing imports only.
   No TextScramble or fabricated performance statistics.
============================================================ */}

<section
  id="home-why-inchtomilez"
  className="relative isolate overflow-hidden"
  aria-labelledby="why15-heading"
  style={{
    background: "#060708",
    paddingBlock: "clamp(60px,7vw,106px)",
    fontFamily: "'Raleway', sans-serif",
    color: "#fff",
  }}
>
  <style>{`
    #home-why-inchtomilez {
      --w15-border: rgba(255,255,255,.15);
      --w15-glass: rgba(15,16,19,.92);
      --w15-muted: #b6b9c1;
    }

    #home-why-inchtomilez .w15-grid-bg {
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
      background-size:56px 56px;
      mask-image:linear-gradient(
        180deg,transparent,black 20%,black 80%,transparent
      );
    }

    /* INTRO */

    #home-why-inchtomilez .w15-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:31px;
    }

    #home-why-inchtomilez .w15-eyebrow {
      margin:0 0 15px;
      color:#afb2ba;
      font-size:12px;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-why-inchtomilez .w15-heading {
      margin:0;
      max-width:710px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-why-inchtomilez .w15-lead {
      margin:17px 0 0;
      max-width:650px;
      color:#d0d2d8;
      font-size:15px;
      line-height:1.75;
    }

    #home-why-inchtomilez .w15-side {
      margin:0;
      max-width:335px;
      color:#b8bac2;
      font-size:13px;
      line-height:1.75;
    }

    /* ADVANTAGE STUDIO */

    #home-why-inchtomilez .w15-studio {
      position:relative;
      min-width:0;
      margin:0;
      padding:0;
      border:1px solid rgba(255,255,255,.19);
      border-radius:15px;
      background:#0c0d0f;
      overflow:hidden;
      box-shadow:0 25px 65px rgba(0,0,0,.23);
    }

    #home-why-inchtomilez .w15-legend {
      position:absolute;
      width:1px;height:1px;
      padding:0;margin:-1px;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-why-inchtomilez .w15-radio {
      position:absolute;
      width:1px;height:1px;
      margin:-1px;padding:0;
      overflow:hidden;
      clip-path:inset(50%);
      white-space:nowrap;
      border:0;
    }

    #home-why-inchtomilez .w15-toolbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      flex-wrap:wrap;
      padding:17px 22px;
      border-bottom:1px solid var(--w15-border);
      background:#141518;
    }

    #home-why-inchtomilez .w15-toolbar strong {
      color:#fff;
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
    }

    #home-why-inchtomilez .w15-toolbar span {
      color:#9599a3;
      font-size:11px;
      letter-spacing:.04em;
    }

    /* INTERACTIVE FOUR-PART MATRIX */

    #home-why-inchtomilez .w15-matrix {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      border-bottom:1px solid var(--w15-border);
    }

    #home-why-inchtomilez .w15-choice {
      position:relative;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:space-between;
      gap:24px;
      min-height:170px;
      padding:20px;
      background:#101114;
      border-right:1px solid rgba(255,255,255,.12);
      border-bottom:1px solid rgba(255,255,255,.12);
      color:#fff;
      cursor:pointer;
      overflow:hidden;
      transition:background .25s ease;
    }

    #home-why-inchtomilez .w15-choice::after {
      content:"";
      position:absolute;
      left:0;right:0;bottom:0;
      height:2px;
      background:#d6d8dd;
      transform:scaleX(0);
      transform-origin:left;
      transition:transform .25s ease;
    }

    #home-why-inchtomilez .w15-choice-top {
      display:flex;
      width:100%;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    #home-why-inchtomilez .w15-choice-index {
      color:#91959e;
      font-size:11px;
      font-weight:600;
    }

    #home-why-inchtomilez .w15-choice-icon {
      display:inline-flex;
      width:37px;height:37px;
      align-items:center;
      justify-content:center;
      border:1px solid rgba(255,255,255,.16);
      border-radius:9px;
      background:rgba(255,255,255,.04);
    }

    #home-why-inchtomilez .w15-choice-icon svg {
      width:18px;height:18px;
    }

    #home-why-inchtomilez .w15-choice-name {
      display:block;
      color:#fff;
      font-size:16px;
      font-weight:600;
      line-height:1.4;
    }

    #home-why-inchtomilez .w15-choice-description {
      display:block;
      margin-top:7px;
      color:#aeb1b9;
      font-size:12px;
      line-height:1.6;
    }

    /* SELECTED MATRIX STATE */

    #w15-one:checked ~ .w15-matrix
    label[for="w15-one"],
    #w15-two:checked ~ .w15-matrix
    label[for="w15-two"],
    #w15-three:checked ~ .w15-matrix
    label[for="w15-three"],
    #w15-four:checked ~ .w15-matrix
    label[for="w15-four"] {
      background:#25262a;
    }

    #w15-one:checked ~ .w15-matrix
    label[for="w15-one"]::after,
    #w15-two:checked ~ .w15-matrix
    label[for="w15-two"]::after,
    #w15-three:checked ~ .w15-matrix
    label[for="w15-three"]::after,
    #w15-four:checked ~ .w15-matrix
    label[for="w15-four"]::after {
      transform:scaleX(1);
    }

    /* DYNAMIC MANIFESTO STAGE */

    #home-why-inchtomilez .w15-stage {
      min-width:0;
      position:relative;
      background:
        radial-gradient(
          ellipse at 85% 35%,
          rgba(255,255,255,.055),
          transparent 42%
        ),
        linear-gradient(130deg,#18191c,#090a0c);
    }

    #home-why-inchtomilez .w15-panel {
      display:none;
      grid-template-columns:1fr;
      gap:24px;
      min-width:0;
      min-height:380px;
      padding:clamp(22px,4vw,40px);
      animation:w15Enter .3s ease both;
    }

    #w15-one:checked ~ .w15-stage .w15-panel-one,
    #w15-two:checked ~ .w15-stage .w15-panel-two,
    #w15-three:checked ~ .w15-stage .w15-panel-three,
    #w15-four:checked ~ .w15-stage .w15-panel-four {
      display:grid;
    }

    #home-why-inchtomilez .w15-stage-meta {
      display:block;
      margin-bottom:17px;
      color:#a6a9b0;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-why-inchtomilez .w15-panel h3 {
      max-width:640px;
      margin:0;
      color:#fff;
      font-size:clamp(22px,2.7vw,33px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-why-inchtomilez .w15-panel-description {
      max-width:570px;
      margin:17px 0 0;
      color:#c4c7ce;
      font-size:14px;
      line-height:1.75;
    }

    #home-why-inchtomilez .w15-checks {
      display:grid;
      gap:12px;
      margin:23px 0 0;
      padding:0;
      list-style:none;
    }

    #home-why-inchtomilez .w15-checks li {
      display:flex;
      align-items:flex-start;
      gap:10px;
      color:#d4d6db;
      font-size:13px;
      line-height:1.65;
    }

    #home-why-inchtomilez .w15-checks svg {
      width:16px;height:16px;
      margin-top:3px;
      flex-shrink:0;
    }

    /* SIGNATURE VISUAL */

    #home-why-inchtomilez .w15-visual {
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      min-height:215px;
      padding:25px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:12px;
      background:
        radial-gradient(
          circle at center,
          rgba(255,255,255,.07),
          transparent 65%
        ),
        #0b0c0e;
      overflow:hidden;
    }

    #home-why-inchtomilez .w15-visual::before {
      content:"";
      position:absolute;
      width:270px;height:270px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:50%;
      box-shadow:
        0 0 0 34px rgba(255,255,255,.025),
        0 0 0 72px rgba(255,255,255,.016);
    }

    #home-why-inchtomilez .w15-visual-center {
      position:relative;
      z-index:1;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:12px;
      width:min(100%,245px);
      min-height:130px;
      padding:20px;
      border:1px solid rgba(255,255,255,.3);
      border-radius:12px;
      background:rgba(19,20,23,.96);
      box-shadow:0 18px 45px rgba(0,0,0,.32);
      text-align:center;
    }

    #home-why-inchtomilez .w15-visual-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:45px;height:45px;
      border:1px solid rgba(255,255,255,.2);
      border-radius:11px;
      background:rgba(255,255,255,.055);
    }

    #home-why-inchtomilez .w15-visual-icon svg {
      width:22px;height:22px;
    }

    #home-why-inchtomilez .w15-visual-center strong {
      color:#fff;
      font-size:17px;
      font-weight:600;
      line-height:1.3;
    }

    #home-why-inchtomilez .w15-visual-center span {
      color:#aeb1ba;
      font-size:11px;
      line-height:1.6;
    }

    /* FOOTER */

    #home-why-inchtomilez .w15-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:20px;
      margin-top:18px;
      padding:23px;
      border:1px solid var(--w15-border);
      border-radius:12px;
      background:rgba(13,14,17,.93);
    }

    #home-why-inchtomilez .w15-footer h3 {
      margin:0;
      color:#fff;
      font-size:19px;
      font-weight:600;
      line-height:1.4;
    }

    #home-why-inchtomilez .w15-footer p {
      max-width:610px;
      margin:8px 0 0;
      color:#b9bcc4;
      font-size:13px;
      line-height:1.7;
    }

    #home-why-inchtomilez .w15-btn {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      min-height:42px;
      padding:10px 15px;
      border-radius:8px;
      background:#eab308;
      border:1px solid #eab308;
      color:#050505;
      text-decoration:none;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      transition:
        background .2s ease,
        transform .2s ease;
    }

    #home-why-inchtomilez .w15-btn svg {
      width:16px;height:16px;
    }

    /* RESPONSIVE */

    @media(min-width:900px) {
      #home-why-inchtomilez .w15-header {
        grid-template-columns:
          minmax(0,1.45fr) minmax(0,.55fr);
        gap:45px;
      }

      #home-why-inchtomilez .w15-side {
        justify-self:end;
      }

      #home-why-inchtomilez .w15-matrix {
        grid-template-columns:repeat(4,minmax(0,1fr));
      }

      #home-why-inchtomilez .w15-choice {
        min-height:184px;
        border-bottom:0;
      }

      #home-why-inchtomilez .w15-choice:last-child {
        border-right:0;
      }

      #home-why-inchtomilez .w15-panel {
        grid-template-columns:
          minmax(0,1.2fr) minmax(0,.8fr);
        align-items:center;
        gap:45px;
      }

      #home-why-inchtomilez .w15-visual {
        min-height:285px;
      }
    }

    @media(max-width:899px) {
      #home-why-inchtomilez
      .w15-choice:nth-child(even) {
        border-right:0;
      }

      #home-why-inchtomilez
      .w15-choice:nth-child(n+3) {
        border-bottom:0;
      }
    }

    @media(max-width:639px) {
      #home-why-inchtomilez .w15-choice {
        padding:14px;
        min-height:145px;
        gap:16px;
      }

      #home-why-inchtomilez .w15-choice-name {
        font-size:14px;
      }

      #home-why-inchtomilez .w15-choice-description {
        font-size:11px;
      }

      #home-why-inchtomilez .w15-choice-icon {
        width:33px;height:33px;
      }

      #home-why-inchtomilez .w15-panel {
        min-height:0;
        padding:19px;
      }

      #home-why-inchtomilez .w15-visual {
        min-height:210px;
      }

      #home-why-inchtomilez .w15-footer {
        padding:20px;
      }
    }

    @media(max-width:365px) {
      #home-why-inchtomilez .w15-choice {
        min-height:162px;
        padding:11px;
      }
      #home-why-inchtomilez .w15-btn {
        width:100%;
      }
    }

    @media(hover:hover) and (pointer:fine) {
      #home-why-inchtomilez .w15-choice:hover {
        background:#242529;
      }

      #home-why-inchtomilez .w15-btn:hover {
        background:#facc15;
        border-color:#facc15;
        transform:translateY(-2px);
      }
    }

    #home-why-inchtomilez a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    #w15-one:focus-visible ~ .w15-matrix label[for="w15-one"],
    #w15-two:focus-visible ~ .w15-matrix label[for="w15-two"],
    #w15-three:focus-visible ~ .w15-matrix label[for="w15-three"],
    #w15-four:focus-visible ~ .w15-matrix label[for="w15-four"] {
      outline:2px solid #eab308;
      outline-offset:-3px;
    }

    @keyframes w15Enter {
      from {opacity:0;transform:translateY(7px)}
      to {opacity:1;transform:translateY(0)}
    }

    @media(prefers-reduced-motion:reduce) {
      #home-why-inchtomilez .w15-panel {
        animation:none;
      }
      #home-why-inchtomilez .w15-choice,
      #home-why-inchtomilez .w15-btn {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      15.02 — BACKGROUND + EDITORIAL INTRODUCTION
  ============================================================ */}

  <div
    className="w15-grid-bg"
    aria-hidden="true"
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="w15-header">
          <div>
            <p className="w15-eyebrow">
              WHY INCHTOMILEZ / OUR APPROACH
            </p>

            <h2
              id="why15-heading"
              className="w15-heading"
            >
              The Difference Isn't Doing More.
              It's Making Everything Work Together.
            </h2>

            <p className="w15-lead">
              You don't need disconnected ideas, more
              noise or another complicated marketing
              plan. You need people who understand
              the bigger picture and know how to
              connect strategy with execution.
            </p>
          </div>

          <p className="w15-side">
            We believe the best agency relationships
            are built around clear thinking, thoughtful
            creative and conversations that actually
            move the work forward.
          </p>
        </header>
      </AnimatedSection>

      {/* ============================================================
          15.03 — INTERACTIVE AGENCY ADVANTAGE MATRIX
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.08}
      >
        {(() => {
          const advantages = [
            {
              id: "one",
              number: "01",
              icon: Target,
              title: "Business-First Thinking",
              caption: "The goal before the channel",
              heading:
                "We Start With Your Business. Not a List of Services.",
              description:
                "A campaign only makes sense when it supports a clear objective. We begin with the audience, the challenge and what the business is trying to achieve before recommending the approach.",
              points: [
                "Understand the business challenge first.",
                "Focus on what the audience needs.",
                "Choose channels with a clear purpose.",
              ],
              visualTitle: "Clarity Before Activity",
              visualSubtitle: "The right direction starts with the right questions.",
            },
            {
              id: "two",
              number: "02",
              icon: Layers,
              title: "Connected Capabilities",
              caption: "Fewer disconnected pieces",
              heading:
                "One Brand Experience. Not Five Different Conversations.",
              description:
                "Branding, digital, advertising, creative and technology should strengthen one another. We think across those disciplines so the audience experiences a coherent brand.",
              points: [
                "Connect messaging across channels.",
                "Keep creative and execution aligned.",
                "Make the customer journey feel consistent.",
              ],
              visualTitle: "Everything Connected",
              visualSubtitle: "Strategy, creative, media and experiences.",
            },
            {
              id: "three",
              number: "03",
              icon: Lightbulb,
              title: "Creative With Purpose",
              caption: "Ideas that mean something",
              heading:
                "An Idea Should Look Good. And Have a Reason to Exist.",
              description:
                "Creative work is most useful when it communicates something meaningful. We connect audience insight and brand character with ideas built for the places people will experience them.",
              points: [
                "Find an idea worth communicating.",
                "Make the brand distinctive and recognisable.",
                "Adapt creative for relevant formats.",
              ],
              visualTitle: "Ideas With Intention",
              visualSubtitle: "Creativity shaped around the message.",
            },
            {
              id: "four",
              number: "04",
              icon: TrendingUp,
              title: "Always Learning",
              caption: "Improve what comes next",
              heading:
                "The Next Decision Should Be Smarter Than the Last.",
              description:
                "Projects don't end with a launch or a campaign going live. We value useful feedback, transparent conversations and learning that helps identify what to refine next.",
              points: [
                "Look beyond vanity metrics.",
                "Review what audiences actually do.",
                "Use insights to guide the next move.",
              ],
              visualTitle: "Progress Through Learning",
              visualSubtitle: "Review, refine and move forward.",
            },
          ];

          return (
            <fieldset className="w15-studio">
              <legend className="w15-legend">
                Explore what makes the InchToMilez approach different.
              </legend>

              {/* Native radio state */}

              {advantages.map((item, index) => (
                <input
                  key={item.id}
                  type="radio"
                  name="w15-advantage"
                  id={`w15-${item.id}`}
                  className="w15-radio"
                  defaultChecked={index === 0}
                />
              ))}

              {/* STUDIO TOOLBAR */}

              <div className="w15-toolbar">
                <strong>
                  THE INCHTOMILEZ ADVANTAGE
                </strong>

                <span>
                  EXPLORE OUR WAY OF THINKING
                </span>
              </div>

              {/* ================================================
                  FOUR-PART INTERACTIVE MATRIX
              ================================================ */}

              <div className="w15-matrix">
                {advantages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <label
                      key={item.id}
                      htmlFor={`w15-${item.id}`}
                      className="w15-choice"
                    >
                      <span className="w15-choice-top">
                        <span className="w15-choice-index">
                          {item.number} / 04
                        </span>

                        <span
                          className="w15-choice-icon"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                      </span>

                      <span>
                        <strong className="w15-choice-name">
                          {item.title}
                        </strong>

                        <span className="w15-choice-description">
                          {item.caption}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* ================================================
                  15.04 — DYNAMIC MANIFESTO CONTENT
              ================================================ */}

              <div className="w15-stage">
                {advantages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.id}
                      className={`w15-panel w15-panel-${item.id}`}
                    >
                      {/* EDITORIAL CONTENT */}

                      <div>
                        <span className="w15-stage-meta">
                          INCHTOMILEZ / ADVANTAGE {item.number}
                        </span>

                        <h3>{item.heading}</h3>

                        <p className="w15-panel-description">
                          {item.description}
                        </p>

                        <ul className="w15-checks">
                          {item.points.map((point) => (
                            <li key={point}>
                              <CheckCircle aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ABSTRACT BRAND VISUAL */}

                      <div className="w15-visual">
                        <div className="w15-visual-center">
                          <span
                            className="w15-visual-icon"
                            aria-hidden="true"
                          >
                            <Icon />
                          </span>

                          <strong>
                            {item.visualTitle}
                          </strong>

                          <span>
                            {item.visualSubtitle}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </fieldset>
          );
        })()}
      </AnimatedSection>

      {/* ============================================================
          15.05 — PREMIUM CONVERSION FOOTER
      ============================================================ */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
        amount={0.1}
      >
        <div className="w15-footer">
          <div>
            <h3>
              Your Business Deserves More Than a Generic Plan.
            </h3>

            <p>
              Tell us what you're building, what's
              challenging you and where you want to go.
              We'll start with a meaningful conversation.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="w15-btn"
          >
            Let's Talk About Your Brand
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 15 ================= */}






{/* ============================================================
    SECTION 16 — OUR WORK & CREATIVE SHOWCASE
    INCHTOMILEZ / THE CREATIVE INDEX

    16.01 — Scoped Design System
    16.02 — Editorial Introduction
    16.03 — Asymmetric Visual Showcase
    16.04 — Creative Discipline Details
    16.05 — Closing Conversion Panel

    IMPORTANT:
    These are illustrative capability previews,
    NOT verified client projects or case studies.

    No new dependencies, imports or artificial metrics.
============================================================ */}

<section
  id="home-our-work"
  className="relative isolate overflow-hidden"
  aria-labelledby="work16-heading"
  style={{
    backgroundColor: "#060708",
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
    color: "#fff",
  }}
>
  <style>{`
    #home-our-work {
      --wk16-border:rgba(255,255,255,.17);
      --wk16-muted:#b9bcc3;
    }

    #home-our-work *,
    #home-our-work *::before,
    #home-our-work *::after {
      box-sizing:border-box;
    }

    #home-our-work .wk16-ambient {
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        radial-gradient(
          ellipse at 80% 20%,
          rgba(255,255,255,.05),
          transparent 47%
        ),
        linear-gradient(
          180deg,#060708,#0c0d0f,#060708
        );
    }

    /* ======================================================
       INTRODUCTION
    ====================================================== */

    #home-our-work .wk16-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      align-items:end;
      gap:22px;
      margin-bottom:31px;
    }

    #home-our-work .wk16-eyebrow {
      margin:0 0 15px;
      color:#b5b8c0;
      font-size:12px;
      font-weight:500;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-our-work .wk16-title {
      margin:0;
      max-width:750px;
      color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;
      line-height:1.25;
      text-wrap:balance;
    }

    #home-our-work .wk16-lead {
      margin:16px 0 0;
      max-width:645px;
      color:#d1d5db;
      font-size:15px;
      line-height:1.75;
    }

    #home-our-work .wk16-header-aside {
      max-width:340px;
      margin:0;
      color:#b8bbc2;
      font-size:13px;
      line-height:1.75;
    }

    /* ======================================================
       MAIN PORTFOLIO WALL
       Direct grid children — no layout wrappers.
    ====================================================== */

    #home-our-work .wk16-gallery {
      display:grid;
      grid-template-columns:repeat(12,minmax(0,1fr));
      gap:14px;
      min-width:0;
    }

    #home-our-work .wk16-tile {
      position:relative;
      isolation:isolate;
      grid-column:span 12;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      min-width:0;
      min-height:385px;
      padding:20px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.2);
      border-radius:14px;
      background:#121316;
      text-decoration:none;
      color:#fff;
      transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
    }

    #home-our-work .wk16-image {
      position:absolute;
      inset:0;
      z-index:-3;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      filter:saturate(.72);
      transition:
        transform .75s cubic-bezier(.2,.8,.2,1),
        filter .5s ease;
    }

    #home-our-work .wk16-shade {
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.5),
          transparent 35%,
          rgba(0,0,0,.45) 60%,
          rgba(0,0,0,.94)
        );
      pointer-events:none;
    }

    /* TILE VARIATIONS */

    #home-our-work .wk16-featured {
      min-height:470px;
    }

    #home-our-work .wk16-secondary {
      min-height:385px;
    }

    #home-our-work .wk16-tertiary {
      min-height:385px;
    }

    /* TILE TOP LABELS */

    #home-our-work .wk16-tile-top {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    #home-our-work .wk16-index {
      display:inline-flex;
      align-items:center;
      min-height:33px;
      padding:8px 11px;
      background:rgba(7,8,10,.79);
      border:1px solid rgba(255,255,255,.25);
      border-radius:7px;
      backdrop-filter:blur(12px);
      color:#fff;
      font-size:11px;
      font-weight:600;
      letter-spacing:.07em;
    }

    #home-our-work .wk16-arrow {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:39px;
      height:39px;
      flex-shrink:0;
      border:1px solid rgba(255,255,255,.29);
      border-radius:9px;
      background:rgba(7,8,10,.8);
      backdrop-filter:blur(12px);
      transition:
        transform .25s ease,
        background .25s ease;
    }

    #home-our-work .wk16-arrow svg {
      width:18px;
      height:18px;
      transform:rotate(-45deg);
    }

    /* GLASS CONTENT PANEL */

    #home-our-work .wk16-content {
      position:relative;
      display:block;
      width:100%;
      max-width:540px;
      margin-top:24px;
      padding:21px;
      border:1px solid rgba(255,255,255,.24);
      border-radius:11px;
      background:
        linear-gradient(
          135deg,
          rgba(13,14,17,.94),
          rgba(7,8,10,.83)
        );
      backdrop-filter:blur(18px);
      -webkit-backdrop-filter:blur(18px);
      box-shadow:0 15px 40px rgba(0,0,0,.2);
    }

    #home-our-work .wk16-category {
      display:block;
      margin-bottom:10px;
      color:#bfc2c9;
      font-size:10px;
      font-weight:600;
      letter-spacing:.09em;
      text-transform:uppercase;
    }

    #home-our-work .wk16-content h3 {
      margin:0;
      color:#fff;
      font-size:clamp(20px,2.2vw,28px);
      font-weight:600;
      line-height:1.3;
      text-wrap:balance;
    }

    #home-our-work .wk16-content p {
      margin:11px 0 0;
      max-width:470px;
      color:#d3d5db;
      font-size:13px;
      line-height:1.7;
    }

    #home-our-work .wk16-tags {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:17px;
    }

    #home-our-work .wk16-tag {
      display:inline-flex;
      padding:7px 10px;
      border:1px solid rgba(255,255,255,.2);
      border-radius:6px;
      background:rgba(255,255,255,.035);
      color:#d3d5db;
      font-size:11px;
      line-height:1.4;
    }

    #home-our-work .wk16-explore {
      display:inline-flex;
      align-items:center;
      gap:8px;
      margin-top:19px;
      color:#fff;
      font-size:13px;
      font-weight:600;
    }

    #home-our-work .wk16-explore svg {
      width:16px;
      height:16px;
      transition:transform .25s ease;
    }

    /* ======================================================
       EDITORIAL INTERLUDE
    ====================================================== */

    #home-our-work .wk16-manifesto {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      gap:16px;
      align-items:center;
      margin:15px 0;
      padding:27px;
      border:1px solid rgba(255,255,255,.16);
      border-radius:12px;
      background:
        radial-gradient(
          ellipse at 90% 50%,
          rgba(255,255,255,.06),
          transparent 55%
        ),
        #111215;
    }

    #home-our-work .wk16-manifesto-label {
      color:#aeb1b9;
      font-size:11px;
      font-weight:600;
      letter-spacing:.09em;
    }

    #home-our-work .wk16-manifesto h3 {
      max-width:700px;
      margin:11px 0 0;
      font-size:clamp(19px,2vw,25px);
      font-weight:600;
      line-height:1.35;
      color:#fff;
    }

    #home-our-work .wk16-manifesto p {
      max-width:660px;
      margin:10px 0 0;
      color:#b9bcc4;
      font-size:13px;
      line-height:1.75;
    }

    /* CTA */

    #home-our-work .wk16-btn {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:9px;
      width:fit-content;
      min-height:42px;
      padding:10px 15px;
      border:1px solid #eab308;
      border-radius:8px;
      background:#eab308;
      color:#050505;
      font-size:13px;
      font-weight:600;
      line-height:1.4;
      text-decoration:none;
      transition:
        background .2s ease,
        transform .2s ease;
    }

    #home-our-work .wk16-btn svg {
      width:16px;
      height:16px;
    }

    /* CLOSING */

    #home-our-work .wk16-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:20px;
      margin-top:23px;
      padding-top:22px;
      border-top:1px solid rgba(255,255,255,.15);
    }

    #home-our-work .wk16-footer p {
      margin:0;
      color:#c6c8ce;
      font-size:13px;
      line-height:1.7;
    }

    #home-our-work .wk16-footer-link {
      display:inline-flex;
      align-items:center;
      gap:8px;
      color:#fff;
      min-height:40px;
      font-size:13px;
      font-weight:600;
      text-decoration:none;
    }

    #home-our-work .wk16-footer-link svg {
      width:16px;
      height:16px;
    }

    /* RESPONSIVE */

    @media(min-width:700px) {
      #home-our-work .wk16-featured {
        grid-column:span 7;
        min-height:510px;
      }

      #home-our-work .wk16-secondary {
        grid-column:span 5;
        min-height:510px;
      }

      #home-our-work .wk16-tertiary {
        grid-column:span 12;
        min-height:380px;
      }

      #home-our-work .wk16-manifesto {
        grid-template-columns:minmax(0,1fr) auto;
      }
    }

    @media(min-width:1024px) {
      #home-our-work .wk16-header {
        grid-template-columns:
          minmax(0,1.4fr) minmax(0,.6fr);
        gap:45px;
      }

      #home-our-work .wk16-header-aside {
        justify-self:end;
      }

      #home-our-work .wk16-featured {
        grid-column:span 7;
        min-height:500px;
      }

      #home-our-work .wk16-secondary {
        grid-column:span 5;
        min-height:500px;
      }

      #home-our-work .wk16-tertiary {
        grid-column:span 12;
        min-height:390px;
      }

      #home-our-work .wk16-tertiary .wk16-content {
        max-width:560px;
      }
    }

    @media(max-width:699px) {
      #home-our-work .wk16-header {
        margin-bottom:24px;
      }

      #home-our-work .wk16-gallery {
        gap:11px;
      }

      #home-our-work .wk16-tile,
      #home-our-work .wk16-featured,
      #home-our-work .wk16-secondary,
      #home-our-work .wk16-tertiary {
        grid-column:1 / -1;
        min-height:400px;
        padding:14px;
      }

      #home-our-work .wk16-featured {
        min-height:465px;
      }

      #home-our-work .wk16-content {
        padding:17px;
      }

      #home-our-work .wk16-content h3 {
        font-size:21px;
      }

      #home-our-work .wk16-manifesto {
        padding:20px;
      }
    }

    @media(max-width:380px) {
      #home-our-work .wk16-tile {
        min-height:450px;
        padding:11px;
      }

      #home-our-work .wk16-featured {
        min-height:495px;
      }

      #home-our-work .wk16-content {
        padding:14px;
      }

      #home-our-work .wk16-content p {
        font-size:12px;
      }

      #home-our-work .wk16-btn {
        width:100%;
      }
    }

    /* INTERACTIONS */

    @media(hover:hover) and (pointer:fine) {
      #home-our-work .wk16-tile:hover {
        transform:translateY(-3px);
        border-color:rgba(255,255,255,.48);
        box-shadow:0 20px 50px rgba(0,0,0,.25);
      }

      #home-our-work .wk16-tile:hover .wk16-image {
        transform:scale(1.055);
        filter:saturate(.98);
      }

      #home-our-work .wk16-tile:hover .wk16-arrow {
        transform:translate(2px,-2px);
        background:rgba(255,255,255,.16);
      }

      #home-our-work .wk16-tile:hover .wk16-explore svg {
        transform:translateX(4px);
      }

      #home-our-work .wk16-btn:hover {
        background:#facc15;
        border-color:#facc15;
        transform:translateY(-2px);
      }
    }

    #home-our-work a:focus-visible {
      outline:2px solid #eab308;
      outline-offset:3px;
    }

    @media(prefers-reduced-motion:reduce) {
      #home-our-work .wk16-tile,
      #home-our-work .wk16-image,
      #home-our-work .wk16-arrow,
      #home-our-work .wk16-btn {
        transition:none;
      }
    }
  `}</style>

  {/* ============================================================
      16.02 — ATMOSPHERE
  ============================================================ */}

  <div className="wk16-ambient" aria-hidden="true" />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* ========================================================
          16.03 — INTRODUCTION
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
        amount={0.12}
      >
        <header className="wk16-header">
          <div>
            <p className="wk16-eyebrow">
              OUR WORK / CREATIVE POSSIBILITIES
            </p>

            <h2
              id="work16-heading"
              className="wk16-title"
            >
              Big Ideas Are Better
              When You Can See Them.
            </h2>

            <p className="wk16-lead">
              A brand is experienced in many ways.
              Through an identity, a campaign,
              a website or a single memorable moment.
              Here's a closer look at the creative
              disciplines that bring those experiences
              together.
            </p>
          </div>

          <p className="wk16-header-aside">
            Thoughtful strategy meets memorable
            creative. Every execution has a role
            to play in the bigger brand story.
          </p>
        </header>
      </AnimatedSection>

      {/* ========================================================
          16.04 — PHOTOGRAPHIC CREATIVE INDEX

          Fixed grid architecture:
          Cards are DIRECT children of .wk16-gallery.
          No individual AnimatedSection wrappers.
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
        amount={0.06}
      >
        <div className="wk16-gallery">

          {[
            {
              number: "01",
              category: "CREATIVE CAPABILITY PREVIEW / BRANDING",
              title: "An Identity That's Impossible to Confuse.",
              description:
                "From the first impression to the smallest detail, build a visual language that feels distinct, recognisable and true to the brand.",
              tags: [
                "Brand Identity",
                "Visual Direction",
                "Design Systems",
              ],
              image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85",
              layout: "wk16-featured",
              link: routeTo.service("branding-identity"),
              action: "Explore Branding",
            },
            {
              number: "02",
              category: "CREATIVE CAPABILITY PREVIEW / CAMPAIGNS",
              title: "Campaign Ideas Made to Get Noticed.",
              description:
                "Connect the right message, medium and creative direction to make advertising feel relevant to the audience.",
              tags: [
                "Campaign Creative",
                "Advertising",
                "Media",
              ],
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
              layout: "wk16-secondary",
              link: routeTo.service("advertising"),
              action: "Explore Advertising",
            },
            {
              number: "03",
              category: "CREATIVE CAPABILITY PREVIEW / DIGITAL",
              title: "Digital Experiences That Feel as Good as They Work.",
              description:
                "Bring clarity, design and usability together through websites and digital experiences that make the next step easy.",
              tags: [
                "Web Design",
                "Digital Experience",
                "Development",
              ],
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=85",
              layout: "wk16-tertiary",
              link: routeTo.service("web-design-development"),
              action: "Explore Web Development",
            },
          ].map((work) => (
            <Link
              key={work.number}
              to={work.link}
              className={`wk16-tile ${work.layout}`}
              aria-label={work.action}
            >
              {/* VISUAL */}

              <img
                src={work.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="wk16-image"
              />

              <div
                className="wk16-shade"
                aria-hidden="true"
              />

              {/* TOP NAVIGATION */}

              <div className="wk16-tile-top">
                <span className="wk16-index">
                  {work.number} / 03
                </span>

                <span
                  className="wk16-arrow"
                  aria-hidden="true"
                >
                  <ArrowRight />
                </span>
              </div>

              {/* GLASS EDITORIAL CONTENT */}

              <div className="wk16-content">
                <span className="wk16-category">
                  {work.category}
                </span>

                <h3>{work.title}</h3>

                <p>{work.description}</p>

                <div className="wk16-tags">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="wk16-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="wk16-explore">
                  {work.action}
                  <ArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}

        </div>
      </AnimatedSection>

      {/* ========================================================
          16.05 — CREATIVE MANIFESTO
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.15}
        amount={0.1}
      >
        <div className="wk16-manifesto">
          <div>
            <span className="wk16-manifesto-label">
              STRATEGY × CREATIVE × EXECUTION
            </span>

            <h3>
              The Medium Changes.
              The Brand Should Still Feel Like You.
            </h3>

            <p>
              Whether someone discovers your business
              through a campaign, a social post or your
              website, every interaction should
              tell a consistent story.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="wk16-btn"
          >
            Let's Create Something
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

      {/* ========================================================
          16.06 — SECTION CLOSING
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.18}
        amount={0.1}
      >
        <div className="wk16-footer">
          <p>
            Have a brand, campaign or digital
            project in mind? We'd like to hear about it.
          </p>

          <Link
            to={ROUTES.contact}
            className="wk16-footer-link"
          >
            Discuss Your Project
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 16 ================= */}






{/* ============================================================
   SECTION 18 — CASE STUDIES & MEASURABLE RESULTS
   INCHTOMILEZ / RESULTS INTELLIGENCE STUDIO

   IMPORTANT:
   This is a strategic example showcase.
   It does NOT imply these are actual client case studies.
   Replace scenarios and illustrative graphics with
   verifiable projects/results before making proof claims.

   No new imports or dependencies.
============================================================ */}

<section
  id="home-case-studies"
  className="relative isolate overflow-hidden"
  aria-labelledby="case18-heading"
  style={{
    background: "#050607",
    paddingBlock: "clamp(60px,7vw,108px)",
    fontFamily: "'Raleway', sans-serif",
    color: "#fff",
  }}
>
  <style>{`
    #home-case-studies {
      --c18-line:rgba(255,255,255,.15);
      --c18-muted:#b6b9c1;
      --c18-glass:rgba(13,14,17,.94);
    }
    #home-case-studies * {
      box-sizing:border-box;
    }
    #home-case-studies .c18-bg {
      position:absolute;inset:0;pointer-events:none;
      background:
        radial-gradient(ellipse at 70% 35%,
          rgba(255,255,255,.055),transparent 55%),
        linear-gradient(180deg,#050607,#0b0c0e,#050607);
    }
    #home-case-studies .c18-header {
      display:grid;
      grid-template-columns:minmax(0,1fr);
      gap:20px;align-items:end;margin-bottom:30px;
    }
    #home-case-studies .c18-eyebrow {
      margin:0 0 15px;color:#afb2ba;
      font-size:12px;letter-spacing:.09em;
      text-transform:uppercase;
    }
    #home-case-studies .c18-heading {
      margin:0;max-width:740px;color:#fff;
      font-size:clamp(24px,2.5vw,32px);
      font-weight:700;line-height:1.25;
      text-wrap:balance;
    }
    #home-case-studies .c18-lead {
      margin:17px 0 0;max-width:650px;
      font-size:15px;line-height:1.75;color:#d1d5db;
    }
    #home-case-studies .c18-aside {
      margin:0;color:#b7bac2;font-size:13px;
      line-height:1.75;max-width:350px;
    }

    /* MAIN STUDIO */

    #home-case-studies .c18-studio {
      position:relative;min-width:0;
      border:1px solid rgba(255,255,255,.2);
      border-radius:15px;overflow:hidden;
      background:#0b0c0e;
      box-shadow:0 25px 65px rgba(0,0,0,.24);
    }
    #home-case-studies .c18-bar {
      display:flex;align-items:center;
      justify-content:space-between;gap:12px;
      flex-wrap:wrap;padding:17px 21px;
      background:#17181b;
      border-bottom:1px solid var(--c18-line);
    }
    #home-case-studies .c18-bar strong {
      font-size:11px;letter-spacing:.08em;color:#fff;
    }
    #home-case-studies .c18-bar span {
      font-size:11px;color:#a6a9b0;
    }

    /* SELECTOR */

    #home-case-studies .c18-radio {
      position:absolute;width:1px;height:1px;
      margin:-1px;padding:0;overflow:hidden;
      clip-path:inset(50%);white-space:nowrap;border:0;
    }
    #home-case-studies .c18-tabs {
      display:grid;
      grid-template-columns:1fr;
      background:#101114;
      border-bottom:1px solid var(--c18-line);
    }
    #home-case-studies .c18-tab {
      position:relative;
      display:flex;align-items:center;
      justify-content:space-between;
      min-width:0;gap:12px;padding:18px 20px;
      border-bottom:1px solid rgba(255,255,255,.1);
      color:#fff;cursor:pointer;
      transition:background .2s ease;
    }
    #home-case-studies .c18-tab:last-child {
      border-bottom:0;
    }
    #home-case-studies .c18-tab::after {
      content:"";position:absolute;bottom:0;
      left:0;right:0;height:2px;background:#eab308;
      transform:scaleX(0);transform-origin:left;
      transition:transform .25s ease;
    }
    #home-case-studies .c18-tab-copy {
      min-width:0;
    }
    #home-case-studies .c18-tab-number {
      display:block;margin-bottom:6px;
      color:#92969e;font-size:10px;letter-spacing:.07em;
    }
    #home-case-studies .c18-tab-name {
      display:block;color:#fff;
      font-size:14px;font-weight:600;line-height:1.4;
    }
    #home-case-studies .c18-tab-caption {
      display:block;margin-top:5px;
      color:#aeb1b8;font-size:11px;line-height:1.5;
    }
    #home-case-studies .c18-tab svg {
      width:17px;height:17px;flex-shrink:0;
      color:#b8bbc2;
    }

    #c18-awareness:checked ~ .c18-tabs
    label[for="c18-awareness"],
    #c18-leads:checked ~ .c18-tabs
    label[for="c18-leads"],
    #c18-experience:checked ~ .c18-tabs
    label[for="c18-experience"] {
      background:#26272b;
    }
    #c18-awareness:checked ~ .c18-tabs
    label[for="c18-awareness"]::after,
    #c18-leads:checked ~ .c18-tabs
    label[for="c18-leads"]::after,
    #c18-experience:checked ~ .c18-tabs
    label[for="c18-experience"]::after {
      transform:scaleX(1);
    }

    /* PANELS */

    #home-case-studies .c18-panel {
      display:none;
      grid-template-columns:minmax(0,1fr);
      min-width:0;
      animation:c18Enter .3s ease both;
    }
    #c18-awareness:checked ~ .c18-panels
    .c18-panel-awareness,
    #c18-leads:checked ~ .c18-panels
    .c18-panel-leads,
    #c18-experience:checked ~ .c18-panels
    .c18-panel-experience {
      display:grid;
    }
    #home-case-studies .c18-story {
      padding:clamp(22px,3vw,36px);
      min-width:0;
      background:
        linear-gradient(145deg,#1a1b1f,#0b0c0e);
    }
    #home-case-studies .c18-story-meta {
      display:flex;gap:10px;
      align-items:center;justify-content:space-between;
      margin-bottom:25px;
      color:#aeb1b9;font-size:11px;
      letter-spacing:.07em;
    }
    #home-case-studies .c18-story h3 {
      margin:0;max-width:560px;
      color:#fff;font-size:clamp(21px,2.3vw,29px);
      font-weight:600;line-height:1.3;text-wrap:balance;
    }
    #home-case-studies .c18-story p {
      margin:14px 0 0;max-width:580px;
      color:#c5c8cf;font-size:13px;line-height:1.8;
    }
    #home-case-studies .c18-story-section {
      border-top:1px solid rgba(255,255,255,.13);
      padding-top:20px;margin-top:24px;
    }
    #home-case-studies .c18-story-label {
      display:block;color:#aeb1b9;
      font-size:11px;font-weight:600;letter-spacing:.07em;
      text-transform:uppercase;
    }
    #home-case-studies .c18-points {
      display:grid;gap:12px;
      list-style:none;padding:0;margin:16px 0 0;
    }
    #home-case-studies .c18-points li {
      display:flex;align-items:flex-start;gap:10px;
      color:#d8dae0;font-size:12px;line-height:1.65;
    }
    #home-case-studies .c18-points svg {
      width:15px;height:15px;flex-shrink:0;
      margin-top:2px;
    }

    /* INTELLIGENCE VISUAL */

    #home-case-studies .c18-visual {
      display:flex;flex-direction:column;gap:18px;
      min-width:0;padding:clamp(20px,3vw,30px);
      border-top:1px solid var(--c18-line);
      background:#0d0e11;
    }
    #home-case-studies .c18-visual-header {
      display:flex;justify-content:space-between;
      align-items:center;gap:10px;flex-wrap:wrap;
    }
    #home-case-studies .c18-visual-header strong {
      font-size:12px;color:#fff;font-weight:600;
    }
    #home-case-studies .c18-visual-header span {
      font-size:10px;color:#9599a2;
    }
    #home-case-studies .c18-metrics {
      display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
      gap:8px;
    }
    #home-case-studies .c18-metric {
      padding:13px 10px;min-width:0;
      border:1px solid rgba(255,255,255,.13);
      border-radius:9px;background:#191a1e;
    }
    #home-case-studies .c18-metric small {
      display:block;color:#a5a8b1;
      font-size:10px;line-height:1.5;
    }
    #home-case-studies .c18-metric strong {
      display:block;margin-top:7px;color:#fff;
      font-size:13px;font-weight:600;
      line-height:1.4;overflow-wrap:anywhere;
    }
    #home-case-studies .c18-chart {
      position:relative;display:flex;align-items:center;
      min-height:215px;
      padding:18px;border:1px solid rgba(255,255,255,.14);
      border-radius:12px;
      background:
        linear-gradient(140deg,#1b1c20,#101114);
    }
    #home-case-studies .c18-chart svg {
      display:block;width:100%;height:auto;
      overflow:visible;
    }
    #home-case-studies .c18-analysis {
      padding:19px;border:1px solid rgba(255,255,255,.14);
      border-radius:11px;background:rgba(255,255,255,.035);
    }
    #home-case-studies .c18-analysis strong {
      color:#fff;font-size:13px;font-weight:600;
    }
    #home-case-studies .c18-analysis p {
      margin:8px 0 0;font-size:12px;
      line-height:1.7;color:#b9bcc4;
    }

    /* BOTTOM BENCHMARK STRIP */

    #home-case-studies .c18-framework {
      display:grid;grid-template-columns:1fr;
      border-top:1px solid var(--c18-line);
      background:#111215;
    }
    #home-case-studies .c18-framework-item {
      display:flex;align-items:flex-start;gap:12px;
      padding:19px 20px;
      border-bottom:1px solid rgba(255,255,255,.1);
    }
    #home-case-studies .c18-framework-item:last-child {
      border-bottom:0;
    }
    #home-case-studies .c18-framework-index {
      color:#9599a2;font-size:11px;
    }
    #home-case-studies .c18-framework-item strong {
      display:block;font-size:13px;
      font-weight:600;color:#fff;
    }
    #home-case-studies .c18-framework-item p {
      margin:5px 0 0;color:#adb0b8;
      font-size:12px;line-height:1.6;
    }

    /* CTA */

    #home-case-studies .c18-footer {
      display:flex;align-items:center;
      justify-content:space-between;flex-wrap:wrap;
      gap:20px;margin-top:18px;
      padding:24px;border:1px solid var(--c18-line);
      border-radius:12px;
      background:linear-gradient(135deg,#191a1e,#0b0c0e);
    }
    #home-case-studies .c18-footer h3 {
      margin:0;color:#fff;font-size:19px;
      font-weight:600;line-height:1.4;
    }
    #home-case-studies .c18-footer p {
      margin:8px 0 0;color:#b8bbc3;
      font-size:13px;line-height:1.7;
      max-width:620px;
    }
    #home-case-studies .c18-button {
      display:inline-flex;align-items:center;justify-content:center;
      gap:8px;min-height:42px;padding:10px 15px;
      border:1px solid #eab308;
      border-radius:8px;background:#eab308;color:#050505;
      font-size:13px;font-weight:600;text-decoration:none;
      transition:background .2s ease,transform .2s ease;
    }
    #home-case-studies .c18-button svg {
      width:16px;height:16px;
    }

    @media(min-width:900px) {
      #home-case-studies .c18-header {
        grid-template-columns:minmax(0,1.35fr) minmax(0,.65fr);
        gap:45px;
      }
      #home-case-studies .c18-aside {justify-self:end}
      #home-case-studies .c18-panel {
        grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);
      }
      #home-case-studies .c18-visual {
        border-top:0;
        border-left:1px solid var(--c18-line);
      }
      #home-case-studies .c18-tabs {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }
      #home-case-studies .c18-tab {
        min-height:104px;
        border-right:1px solid rgba(255,255,255,.1);
        border-bottom:0;
      }
      #home-case-studies .c18-tab:last-child {border-right:0}
      #home-case-studies .c18-framework {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }
      #home-case-studies .c18-framework-item {
        border-right:1px solid rgba(255,255,255,.1);
        border-bottom:0;
      }
      #home-case-studies .c18-framework-item:last-child {border-right:0}
    }
    @media(min-width:600px) and (max-width:899px) {
      #home-case-studies .c18-tabs {
        grid-template-columns:repeat(3,minmax(0,1fr));
      }
      #home-case-studies .c18-tab {
        border-bottom:0;border-right:1px solid rgba(255,255,255,.1);
      }
    }
    @media(max-width:599px) {
      #home-case-studies .c18-tab {
        min-height:65px;padding:12px 17px;
      }
      #home-case-studies .c18-tab-caption {margin-top:3px}
      #home-case-studies .c18-chart {min-height:160px;padding:12px}
      #home-case-studies .c18-footer {padding:19px}
      #home-case-studies .c18-metric {padding:10px 8px}
      #home-case-studies .c18-metric strong {font-size:11px}
    }

    @media(hover:hover) and (pointer:fine) {
      #home-case-studies .c18-tab:hover {
        background:#27282c;
      }
      #home-case-studies .c18-button:hover {
        background:#facc15;border-color:#facc15;
        transform:translateY(-2px);
      }
    }
    #home-case-studies a:focus-visible {
      outline:2px solid #eab308;outline-offset:3px;
    }
    #c18-awareness:focus-visible ~ .c18-tabs label[for="c18-awareness"],
    #c18-leads:focus-visible ~ .c18-tabs label[for="c18-leads"],
    #c18-experience:focus-visible ~ .c18-tabs label[for="c18-experience"] {
      outline:2px solid #eab308;outline-offset:-3px;
    }
    @keyframes c18Enter {
      from {opacity:0;transform:translateY(6px)}
      to {opacity:1;transform:translateY(0)}
    }
    @media(prefers-reduced-motion:reduce) {
      #home-case-studies .c18-panel {animation:none}
      #home-case-studies .c18-tab,
      #home-case-studies .c18-button {transition:none}
    }
  `}</style>

  {/* ========================================================
      18.02 — BACKGROUND + EDITORIAL INTRO
  ======================================================== */}

  <div className="c18-bg" aria-hidden="true" />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <AnimatedSection
        animation="fadeInUp"
        delay={0.08}
      >
        <header className="c18-header">
          <div>
            <p className="c18-eyebrow">
              STRATEGY / EXECUTION / MEASUREMENT
            </p>

            <h2
              id="case18-heading"
              className="c18-heading"
            >
              Pretty Campaigns Get Attention.
              Better Decisions Move Businesses.
            </h2>

            <p className="c18-lead">
              Visibility matters. But so does what
              happens after someone notices your
              brand. We connect marketing decisions
              to business goals, meaningful actions
              and the lessons worth taking forward.
            </p>
          </div>

          <p className="c18-aside">
            Explore how different marketing challenges
            call for different strategies, creative
            approaches and ways to measure success.
          </p>
        </header>
      </AnimatedSection>

      {/* ========================================================
          18.03 — RESULTS INTELLIGENCE STUDIO
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.12}
      >
        {(() => {
          const examples = [
            {
              id: "awareness",
              number: "01",
              tab: "Brand Awareness",
              caption: "From recognition to consideration",
              heading:
                "A Brand Needs More Than Exposure. It Needs Recognition.",
              problem:
                "A business may be running social posts and advertising but still struggle to communicate what makes it different. The challenge is connecting reach with a clear and recognisable message.",
              approach: [
                "Clarify the audience and brand positioning.",
                "Connect creative direction across relevant media.",
                "Review branded interest and audience engagement.",
              ],
              measures: [
                ["Reach", "Exposure"],
                ["Search Interest", "Discovery"],
                ["Engagement", "Response"],
              ],
              insight:
                "High reach without meaningful engagement or brand interest can be a reason to examine the message, audience or creative—not simply increase spending.",
              path:
                "M8 178 C60 170 85 137 133 144 S211 126 260 105 S333 117 383 76 S461 85 515 32",
              link: routeTo.service("branding-identity"),
            },
            {
              id: "leads",
              number: "02",
              tab: "Lead Generation",
              caption: "From clicks to useful enquiries",
              heading:
                "More Leads Don't Always Mean Better Business Opportunities.",
              problem:
                "A campaign can generate plenty of enquiries while attracting people who are unlikely to become customers. Better decisions begin with lead relevance, qualification and follow-up quality.",
              approach: [
                "Align targeting and landing pages with the offer.",
                "Measure qualified enquiries instead of volume alone.",
                "Review conversion friction and follow-up outcomes.",
              ],
              measures: [
                ["Enquiries", "Volume"],
                ["Qualified Leads", "Relevance"],
                ["Cost per Lead", "Efficiency"],
              ],
              insight:
                "Cost per lead is useful, but it should be interpreted alongside lead quality and conversion into real business opportunities.",
              path:
                "M8 178 C58 160 83 171 127 150 S191 105 246 119 S323 94 369 73 S441 63 515 26",
              link: routeTo.service("digital-marketing"),
            },
            {
              id: "experience",
              number: "03",
              tab: "Digital Experience",
              caption: "From visits to meaningful action",
              heading:
                "Traffic Is Only the Beginning. The Experience Must Do Its Part.",
              problem:
                "People may reach a website and leave without taking action. A clearer journey, relevant content and usable interfaces can help visitors understand the offer and decide what to do next.",
              approach: [
                "Improve clarity of service and product information.",
                "Review the mobile experience and page performance.",
                "Measure actions such as enquiries and completed forms.",
              ],
              measures: [
                ["Visits", "Discovery"],
                ["Engaged Sessions", "Interest"],
                ["Conversions", "Action"],
              ],
              insight:
                "When visitors arrive but do not act, assess page relevance, ease of use and message clarity before assuming that more traffic is the solution.",
              path:
                "M8 174 C58 184 92 145 143 152 S225 124 269 112 S347 76 402 77 S460 38 515 22",
              link: routeTo.service("web-design-development"),
            },
          ];

          return (
            <div className="c18-studio">

              {/* TOP BAR */}

              <div className="c18-bar">
                <strong>
                  INCHTOMILEZ / RESULTS INTELLIGENCE
                </strong>
                <span>
                  STRATEGIC SCENARIOS / NOT CLIENT DATA
                </span>
              </div>

              {/* INTERACTIVE NATIVE RADIO CONTROLS */}

              {examples.map((item, index) => (
                <input
                  key={item.id}
                  type="radio"
                  name="c18-example"
                  id={`c18-${item.id}`}
                  className="c18-radio"
                  defaultChecked={index === 0}
                  aria-label={`View ${item.tab} scenario`}
                />
              ))}

              {/* INTERACTIVE SELECTOR */}

              <div className="c18-tabs">
                {examples.map((item) => (
                  <label
                    key={item.id}
                    htmlFor={`c18-${item.id}`}
                    className="c18-tab"
                  >
                    <span className="c18-tab-copy">
                      <span className="c18-tab-number">
                        {item.number} / CHALLENGE
                      </span>
                      <strong className="c18-tab-name">
                        {item.tab}
                      </strong>
                      <span className="c18-tab-caption">
                        {item.caption}
                      </span>
                    </span>
                    <ArrowRight aria-hidden="true" />
                  </label>
                ))}
              </div>

              {/* DYNAMIC SCENARIO PANELS */}

              <div className="c18-panels">
                {examples.map((item) => (
                  <article
                    key={item.id}
                    className={`c18-panel c18-panel-${item.id}`}
                  >

                    {/* LEFT — BUSINESS STORY */}

                    <div className="c18-story">
                      <div className="c18-story-meta">
                        <span>
                          BUSINESS CHALLENGE / {item.number}
                        </span>
                        <span>THE APPROACH</span>
                      </div>

                      <h3>{item.heading}</h3>

                      <p>{item.problem}</p>

                      <div className="c18-story-section">
                        <span className="c18-story-label">
                          What We Would Focus On
                        </span>

                        <ul className="c18-points">
                          {item.approach.map((point) => (
                            <li key={point}>
                              <CheckCircle aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{marginTop:25}}>
                        <Link
                          to={item.link}
                          className="c18-button"
                        >
                          Explore the Relevant Services
                          <ArrowRight aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT — VISUAL INTELLIGENCE */}

                    <div className="c18-visual">
                      <div className="c18-visual-header">
                        <strong>THE MEASUREMENT LENS</strong>
                        <span>ILLUSTRATIVE ONLY</span>
                      </div>

                      <div className="c18-metrics">
                        {item.measures.map(([name, meaning]) => (
                          <div
                            key={name}
                            className="c18-metric"
                          >
                            <small>{name}</small>
                            <strong>{meaning}</strong>
                          </div>
                        ))}
                      </div>

                      <div className="c18-chart">
                        <svg
                          viewBox="0 0 525 210"
                          role="img"
                          aria-label="Illustrative upward trend line, not measured campaign performance"
                        >
                          {[40,85,130,175].map((y) => (
                            <line
                              key={y}
                              x1="0"
                              y1={y}
                              x2="525"
                              y2={y}
                              stroke="rgba(255,255,255,.14)"
                              strokeDasharray="4 7"
                            />
                          ))}

                          <path
                            d={item.path}
                            fill="none"
                            stroke="rgba(255,255,255,.95)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength="100"
                          />

                          <text
                            x="6"
                            y="202"
                            fill="#9296a0"
                            fontSize="10"
                          >
                            Example journey
                          </text>

                          <text
                            x="519"
                            y="202"
                            fill="#9296a0"
                            fontSize="10"
                            textAnchor="end"
                          >
                            Not real results
                          </text>
                        </svg>
                      </div>

                      <div className="c18-analysis">
                        <strong>
                          What the Data Should Help Answer
                        </strong>
                        <p>{item.insight}</p>
                      </div>
                    </div>

                  </article>
                ))}
              </div>

              {/* BOTTOM STRATEGY FRAMEWORK */}

              <div className="c18-framework">
                {[
                  {
                    n: "01",
                    t: "Define Success",
                    d: "Choose the business actions worth measuring.",
                  },
                  {
                    n: "02",
                    t: "Connect the Data",
                    d: "Understand how channels and experiences contribute.",
                  },
                  {
                    n: "03",
                    t: "Make Smarter Moves",
                    d: "Use meaningful insights to guide the next decision.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="c18-framework-item"
                  >
                    <span className="c18-framework-index">
                      {item.n}
                    </span>
                    <div>
                      <strong>{item.t}</strong>
                      <p>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </AnimatedSection>

      {/* ========================================================
          18.04 — FINAL CONVERSION
      ======================================================== */}

      <AnimatedSection
        animation="fadeInUp"
        delay={0.16}
      >
        <div className="c18-footer">
          <div>
            <h3>
              Your Next Campaign Deserves a Clearer Direction.
            </h3>

            <p>
              Let's discuss your marketing goals,
              the challenges you're facing and how
              success should be measured for
              your business.
            </p>
          </div>

          <Link
            to={ROUTES.contact}
            className="c18-button"
          >
            Let's Discuss Your Growth
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

    </div>
  </div>

  <div
    className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 18 ================= */}





{/* ============================================================
  SECTION 20 — THE INCHTOMILEZ FAQ KNOWLEDGE HUB

  100 Questions / 10 Categories
  Interactive category tabs
  Native accessible FAQ accordions
  Mobile optimized
  SEO-focused, human-readable answers
  No additional dependencies

  Note: FAQ answers must remain accurate to the
  services and processes InchToMilez actually offers.
============================================================ */}

{(() => {
  const faqCategories = [
    {
      id: "marketing",
      name: "Digital Marketing",
      description: "Agency selection, strategy and business growth",
      faqs: [
        {
          q: "What does a digital marketing agency do?",
          a: "A digital marketing agency helps businesses reach relevant audiences through channels such as SEO, paid advertising, social media, content and websites. Its role is to connect these activities to business objectives, whether that means increasing enquiries, building brand awareness or improving online sales. A useful agency strategy should explain what will be done, why it matters and how progress will be assessed."
        },
        {
          q: "Why should a business hire a digital marketing agency in Indore?",
          a: "An Indore-based agency may offer convenient collaboration and familiarity with the local market. However, location alone does not determine quality. Evaluate the agency's strategic understanding, communication, work samples, measurement approach and ability to support your business objectives. Businesses targeting customers across India can also benefit from an agency that understands both local and national digital marketing."
        },
        {
          q: "How do I choose the best digital marketing company in Indore?",
          a: "Begin with your goals and ask shortlisted agencies how they would approach them. Review genuine work, relevant capabilities, reporting methods and service scope. Clarify who will manage the account, what deliverables are included, how advertising budgets are handled and how performance will be discussed. The best choice is the team whose approach fits your needs, not simply the agency claiming to be number one."
        },
        {
          q: "What digital marketing services does a growing business need?",
          a: "The right mix depends on where the business currently stands. A business with limited visibility might prioritize search optimization and a clear website, while one seeking immediate enquiries might test paid search. An established consumer brand may need social creative, advertising and customer retention work. Start with an audit of audience demand, existing assets and conversion opportunities before choosing channels."
        },
        {
          q: "What is the difference between digital marketing and traditional advertising?",
          a: "Digital marketing uses channels such as search engines, websites, social platforms and email, while traditional advertising includes formats such as print, radio, outdoor displays and physical activations. Digital channels often provide more granular interaction data, but traditional media can still be valuable for reach and recognition. The appropriate mix depends on audience behavior, geography, budget and campaign goals."
        },
        {
          q: "How long does digital marketing take to show results?",
          a: "Timing varies substantially by channel and objective. Paid advertising may start generating measurable activity shortly after launch, while SEO and brand-building typically take longer to mature. Tracking setup, creative quality, market competition, budget and website experience can all affect results. A responsible plan establishes early indicators, review milestones and realistic expectations instead of promising a fixed outcome."
        },
        {
          q: "How much should a business spend on digital marketing?",
          a: "There is no universal budget suitable for every business. Consider customer value, market competition, geographic coverage, business margins, existing demand and the number of channels being tested. Separate advertising expenditure from agency management, content production and technology costs. Begin with a budget that can support meaningful testing, then refine allocation using reliable performance and lead-quality data."
        },
        {
          q: "Can digital marketing help small businesses compete with larger brands?",
          a: "Yes, smaller businesses can use focused positioning, local relevance, useful content and targeted campaigns to reach specific audiences. They may not be able to match a large competitor's advertising budget, but they can often address a narrower customer need more clearly. Success depends on choosing achievable priorities, communicating genuine strengths and maintaining a consistent customer experience."
        },
        {
          q: "Should I invest in SEO or paid advertising first?",
          a: "Choose according to urgency, budget and the state of your website. Paid advertising can provide controlled traffic and campaign feedback more quickly, while SEO develops organic discovery over time. If the website has major usability or conversion problems, address those before scaling either channel. Many businesses benefit from an integrated plan that uses paid campaigns for testing and SEO for sustained visibility."
        },
        {
          q: "How can InchToMilez help build a digital marketing strategy?",
          a: "An effective starting point is understanding your business goals, intended customers, competitive environment and current marketing activities. From there, relevant services can be prioritized across branding, search, advertising, creative and website experience. Contact InchToMilez with your business category, target location and primary objective so the appropriate project scope and next steps can be discussed."
        }
      ]
    },
    {
      id: "seo",
      name: "Search Engine Optimization",
      description: "Organic visibility, technical SEO and content",
      faqs: [
        {
          q: "What is search engine optimization and why is it important?",
          a: "Search engine optimization, or SEO, is the process of improving a website so search engines can discover, understand and present relevant pages to users. It involves technical accessibility, useful content, page structure and site quality. SEO can help businesses attract people already researching their products or services, although it cannot guarantee particular rankings or traffic volumes."
        },
        {
          q: "What services should an SEO company in Indore provide?",
          a: "Useful SEO services may include technical audits, keyword research, search-intent mapping, content improvements, internal linking, structured data, local SEO and performance monitoring. The exact scope should depend on the website's problems and business goals. An agency should explain which improvements are prioritized, what has been implemented and how changes will be validated."
        },
        {
          q: "How long does it take to rank on Google's first page?",
          a: "No reliable agency can promise a specific first-page ranking date. Competition, content quality, website history, technical accessibility, local relevance and changes in search results all influence progress. Some improvements may be reflected relatively quickly, while competitive commercial queries often require sustained work. Measure progress through relevant search impressions, clicks, qualified traffic and conversions."
        },
        {
          q: "What is the difference between on-page SEO and technical SEO?",
          a: "On-page SEO concerns the content and meaning of individual pages, including headings, titles, internal links, service descriptions and search intent. Technical SEO focuses on whether search engines can crawl, render, understand and index the website correctly. Both are connected: excellent content on an inaccessible page may remain undiscovered, while a technically sound but unhelpful page may struggle to compete."
        },
        {
          q: "How important are title tags and meta descriptions for SEO?",
          a: "Descriptive, distinct title elements help communicate what a page is about and can influence how its search result is presented. Meta descriptions provide potential summary text, although Google may generate different snippets based on the query. Neither should be treated as a place to repeat keywords mechanically. Write them around the page's actual purpose, main service and intended visitor."
        },
        {
          q: "Can changing H1, H2 and H3 headings improve search visibility?",
          a: "A clear heading hierarchy helps organize content and makes pages easier for people and search systems to understand. The H1 should introduce the main topic, while H2 and H3 elements should group useful supporting information. Changing headings alone does not guarantee higher rankings. The content beneath those headings must also answer relevant questions accurately and comprehensively."
        },
        {
          q: "What is search intent in keyword research?",
          a: "Search intent describes what someone is trying to achieve with a query. A person searching for an explanation may need an educational article, while someone searching for a digital marketing agency in Indore may want service details, credibility signals and contact information. Matching the page to the visitor's actual task is generally more helpful than repeating the target keyword throughout the text."
        },
        {
          q: "Why are internal links important for SEO?",
          a: "Internal links connect related pages within the same website. They help visitors find relevant services and resources and help search engines discover content and understand page relationships. Use clear anchor text that describes the destination, such as SEO services or website development, rather than linking every occurrence of a keyword. Prioritize genuinely useful connections between pages."
        },
        {
          q: "What causes website pages to remain unindexed?",
          a: "Possible causes include blocked crawling, noindex directives, incorrect canonical signals, server errors, weak or duplicate content, poor internal discovery and rendering issues. Google may also choose not to index an accessible page. Investigate with Google Search Console, inspect the returned HTML and HTTP status, and check whether the page offers distinct value before requesting another crawl."
        },
        {
          q: "Does adding more pages automatically improve SEO rankings?",
          a: "No. More pages can create additional opportunities to answer distinct search needs, but they can also produce duplication, thin content and keyword cannibalization. Each page should have a clear purpose and useful information. Consolidating overlapping pages can sometimes be better than creating many nearly identical service or location pages."
        }
      ]
    },
    {
      id: "local",
      name: "Local SEO & Google Maps",
      description: "Indore visibility and local business discovery",
      faqs: [
        {
          q: "What is local SEO for a business in Indore?",
          a: "Local SEO improves how a business appears for geographically relevant searches. It includes accurate business information, locally useful website content, a properly maintained Google Business Profile and a trustworthy online presence. For an Indore business, this means helping nearby customers understand where the business operates, what it provides and how to contact it."
        },
        {
          q: "How can a business appear in Google Maps results?",
          a: "An eligible business should establish and maintain an accurate Google Business Profile, select appropriate categories and provide complete, truthful details. Website relevance, business prominence and distance from the searcher can influence local results. There is no legitimate payment or optimization technique that guarantees the top position in Google Maps."
        },
        {
          q: "Does a Google Business Profile help local SEO?",
          a: "A complete Google Business Profile helps potential customers find business details in Google Search and Maps. Relevant categories, accurate opening hours, genuine reviews and updated information improve usefulness. The profile should match the real-world business and follow Google's eligibility and representation policies. It complements, rather than replaces, a useful website."
        },
        {
          q: "How should I optimize for digital marketing agency in Indore?",
          a: "Create a helpful agency page that genuinely describes your Indore presence, services, differentiators and contact details. Support it with dedicated service pages, relevant internal links and verifiable business information. Include the location naturally in suitable titles and copy, but avoid repeating the phrase excessively. Also strengthen local business signals and address technical indexing problems."
        },
        {
          q: "What are the main factors that influence local search results?",
          a: "Google describes local ranking primarily in terms of relevance, distance and prominence. Relevance concerns how well a business matches the search, distance concerns its proximity to the searcher and prominence concerns how well known it is. Businesses can improve the clarity and credibility of their information, but they cannot control every ranking factor."
        },
        {
          q: "Do customer reviews improve local business credibility?",
          a: "Authentic customer reviews can help prospective buyers assess service quality and understand other people's experiences. Review activity is also one signal associated with local business prominence. Request feedback ethically and respond professionally, without offering incentives for positive reviews or publishing fabricated testimonials. Avoid making review counts or ratings claims unless verified."
        },
        {
          q: "Should a business create separate location pages?",
          a: "Separate location pages are useful when each represents a legitimate, distinct location or provides substantial location-specific value. Pages created only by swapping city names risk becoming repetitive and unhelpful. A good page should explain the actual service availability, relevant location details and how customers can engage with the business."
        },
        {
          q: "Can a service-area business optimize for nearby cities?",
          a: "Yes, businesses can clearly describe the geographic areas they genuinely serve. The website should explain service availability and relevant local details without inventing offices or addresses. Google Business Profile service-area settings should follow eligibility rules. Avoid creating misleading listings at locations where the business does not actually operate."
        },
        {
          q: "Why does a competitor rank above my business in local search?",
          a: "Different businesses may have stronger relevance, closer proximity, greater prominence or more useful local information for a particular query. Search results also vary by location and context. Compare the quality of business profiles, website content, local mentions and customer experience, while recognizing that ranking algorithms are not fully disclosed."
        },
        {
          q: "How do I measure local SEO performance?",
          a: "Track relevant local search impressions, organic visits, Google Business Profile interactions and business enquiries. Use Google Search Console for search queries and landing-page visibility, and website analytics for meaningful actions. Distinguish between an increase in visibility and an increase in qualified leads, calls or actual customer enquiries."
        }
      ]
    },
    {
      id: "googleads",
      name: "Google Ads & PPC",
      description: "Paid search, campaign quality and lead generation",
      faqs: [
        {
          q: "What is Google Ads and how does it work?",
          a: "Google Ads allows businesses to advertise across Google properties and eligible partner inventory. Advertisers configure goals, targeting, budgets, creative and bidding strategies, while auction systems determine when eligible ads may appear. Results depend on relevance, competition, landing pages, budget and campaign configuration. Advertising activity should be measured against meaningful business outcomes."
        },
        {
          q: "How can a Google Ads agency in Indore help my business?",
          a: "An agency can assist with account structure, keyword planning, audience signals, conversion measurement, ad messaging, landing pages and ongoing optimization. A capable team should also examine lead quality and budget efficiency instead of reporting only clicks. Ask how campaigns will be monitored, how changes are documented and who owns the advertising account."
        },
        {
          q: "What is pay-per-click advertising?",
          a: "Pay-per-click, or PPC, is an advertising pricing model in which an advertiser pays when someone clicks an ad. It is commonly associated with search advertising, although digital campaigns can use other charging mechanisms. A low cost per click does not necessarily indicate good performance; the relevance and value of resulting customer actions are more important."
        },
        {
          q: "How much does Google Ads cost in India?",
          a: "Costs vary by industry, geography, keyword competition, campaign type and advertising quality. Google Ads generally lets advertisers define spending limits, but the cost of generating a useful lead can differ considerably across businesses. Plan for both ad spend and any agency or production fees. Base ongoing budget decisions on conversion quality and commercial feasibility."
        },
        {
          q: "What is the difference between Google Search Ads and Display Ads?",
          a: "Search Ads can appear in response to relevant search queries, making them useful for capturing existing intent. Display advertising typically places visual ads across eligible websites and applications and can support awareness or audience engagement. The better format depends on whether you need to reach active searchers, introduce a brand or reconnect with interested users."
        },
        {
          q: "What is Performance Max in Google Ads?",
          a: "Performance Max is a goal-based Google Ads campaign type that can use inventory across multiple Google channels. It uses advertiser-supplied assets, settings, measurement and automated optimization. Businesses should provide suitable creative, accurate conversion signals and clear goals, then evaluate the quality of results rather than assuming automation will correct a weak offer or website."
        },
        {
          q: "How can I reduce irrelevant Google Ads leads?",
          a: "Review search terms, keyword match choices, location settings, ad copy and the landing-page offer. Make service eligibility and important qualification details clear to potential customers. Where appropriate, use negative keywords and better conversion tracking. Evaluate lead outcomes with your sales or enquiry team so campaign optimization reflects genuine customer quality."
        },
        {
          q: "Why are Google Ads clicks not turning into enquiries?",
          a: "Possible causes include targeting mismatch, unclear messaging, slow pages, mobile usability problems, confusing forms and insufficient trust information. Conversion measurement may also be incomplete. Examine the complete journey from search term to advertisement, landing page and enquiry action. Fix obvious friction before assuming that a larger budget will solve the problem."
        },
        {
          q: "What is conversion tracking in Google Ads?",
          a: "Conversion tracking measures selected customer actions associated with advertising, such as valid form submissions, calls or purchases. Reliable setup requires suitable tags, event definitions, consent handling and checks for duplicate or incorrect events. Businesses should distinguish between superficial interactions and the actions that have real business value."
        },
        {
          q: "Should I manage Google Ads myself or hire an agency?",
          a: "Self-management may be practical for a limited campaign when someone has time to learn the platform, monitor performance and maintain accurate tracking. An agency can help when campaign complexity, creative requirements or optimization workload increase. Compare the cost of professional support with the resources and expertise already available within your business."
        }
      ]
    },
    {
      id: "social",
      name: "Social Media & Meta Ads",
      description: "Social content, audiences and paid campaigns",
      faqs: [
        {
          q: "What is social media marketing?",
          a: "Social media marketing uses platforms such as Instagram, Facebook and LinkedIn to communicate with audiences, publish content and support business goals. It can include organic content, community engagement and paid campaigns. The most useful strategy connects platform choice and creative style to the audience rather than posting simply to maintain activity."
        },
        {
          q: "Which social media platform is best for my business?",
          a: "The appropriate platform depends on who your customers are, the type of product or service and how people make purchasing decisions. Visually driven consumer brands may prioritize Instagram, while some B2B organizations may find LinkedIn valuable. Study audience behavior, available creative resources and commercial outcomes before expanding across multiple platforms."
        },
        {
          q: "How does Meta advertising work for businesses?",
          a: "Meta's advertising tools allow businesses to run campaigns across supported placements such as Facebook and Instagram. Advertisers choose objectives, budgets, creative and permitted audience settings. Delivery is influenced by platform systems and campaign signals. Strong offers, clear communication, appropriate targeting and reliable measurement remain important to lead quality."
        },
        {
          q: "How can Meta Ads generate better-quality leads?",
          a: "Start by defining what qualifies someone as a useful prospect. Align the ad, landing page and enquiry questions with that definition, while following Meta's advertising and privacy policies. Review actual lead outcomes, not merely form submissions. Better creative and qualification can reduce unsuitable enquiries, although no targeting method guarantees a particular customer profile."
        },
        {
          q: "What is retargeting in digital advertising?",
          a: "Retargeting is a way to reconnect with people who have previously interacted with a business, such as eligible website visitors or engaged audiences. It generally depends on appropriate technical setup, audience availability, consent and platform policies. Retargeting messages should be useful and proportionate rather than repetitive or invasive."
        },
        {
          q: "How frequently should a brand post on social media?",
          a: "There is no ideal universal posting frequency. A manageable schedule of useful, audience-relevant content is usually preferable to a large volume of repetitive posts. Consider the creative production capacity, platform behavior and type of content your customers value. Review meaningful engagement and business outcomes before increasing frequency."
        },
        {
          q: "Are Instagram Reels important for brand marketing?",
          a: "Short-form video can help explain products, demonstrate experiences and communicate brand personality in an engaging format. However, Reels are not automatically the best content type for every objective. Combine video with suitable static content, useful captions and strong creative ideas, then assess whether the content reaches relevant audiences and encourages useful actions."
        },
        {
          q: "What is the difference between social media management and social advertising?",
          a: "Social media management typically concerns ongoing content, publishing, brand presentation and audience interaction. Social advertising uses paid campaigns to reach selected audiences under platform rules. The two activities can complement one another, but they require different planning and measurement approaches. Organic engagement alone should not be confused with paid campaign performance."
        },
        {
          q: "How do businesses measure social media marketing success?",
          a: "Choose metrics that align with campaign objectives. Awareness work may examine relevant reach and content engagement, while lead-generation campaigns should evaluate valid enquiries, conversion quality and cost efficiency. Track outcomes using available platform reports, website analytics and business records while considering attribution limitations."
        },
        {
          q: "Can social media marketing help build long-term brand trust?",
          a: "Consistent and useful communication can help audiences understand a business and become familiar with its expertise and personality. Trust also depends on the quality of actual products, customer experience and truthful claims. Responding responsibly to questions and feedback is often more valuable than concentrating exclusively on followers and likes."
        }
      ]
    },
    {
      id: "branding",
      name: "Branding & Creative",
      description: "Identity, positioning and creative direction",
      faqs: [
        {
          q: "What is branding in marketing?",
          a: "Branding is the process of shaping how a business presents itself and what people associate with it. It includes positioning, identity, messaging, tone and customer experience. A brand is more than a logo or color palette: it is also influenced by what the business offers, how it communicates and whether its promises match actual experiences."
        },
        {
          q: "Why should a business invest in professional branding?",
          a: "Clear branding can make an offering easier to recognize, understand and distinguish from alternatives. It also provides a consistent foundation for websites, advertising, packaging, social content and other communications. The commercial benefit depends on how effectively the brand identity reflects customer needs and is applied across real touchpoints."
        },
        {
          q: "What does a branding agency in Indore typically offer?",
          a: "Branding services may include research, positioning, naming, messaging, logo design, visual identity systems, guidelines and campaign art direction. The scope should reflect what the business needs rather than automatically include every deliverable. Ask how strategic decisions will be made and how the identity will work across relevant physical and digital channels."
        },
        {
          q: "What is the difference between a logo and a brand identity?",
          a: "A logo is one recognizable visual element associated with a business. Brand identity is the broader system of colors, typography, imagery, design rules, messaging and expression that makes communications coherent. A well-designed identity should work consistently across varied formats instead of depending on a logo alone."
        },
        {
          q: "When should a company consider rebranding?",
          a: "Rebranding may be useful when positioning no longer reflects the business, audiences have changed, services have evolved or the existing identity creates confusion. It should not be undertaken solely because a visual trend looks attractive. Evaluate existing brand recognition and customer expectations before deciding whether to refresh or replace established elements."
        },
        {
          q: "What is brand positioning?",
          a: "Brand positioning defines how a business wants to be understood within its competitive context. It identifies the audience, relevant needs, distinctive strengths and the promise being communicated. Effective positioning is grounded in something the business can actually deliver. It helps guide messaging, campaign concepts and customer experiences."
        },
        {
          q: "How does graphic design support digital marketing?",
          a: "Graphic design turns information, ideas and offers into visual communication that people can interpret quickly. It supports advertising, websites, social content, presentations and other materials. Good design should balance visual appeal with hierarchy, readability, brand consistency and the intended audience's needs."
        },
        {
          q: "What makes an advertising creative effective?",
          a: "An effective creative communicates a clear idea to a relevant audience in a format appropriate to its placement. The message, visual direction, offer and next step should support one another. Performance also depends on timing, audience selection and media context. Testing can help identify which creative approaches are more useful for a particular campaign."
        },
        {
          q: "What should a professional brand guideline document contain?",
          a: "Brand guidelines commonly explain approved logo variations, color values, typography, spacing, image treatment, tone of voice and examples of correct usage. The detail required depends on business complexity and how many people produce communications. A practical document helps designers, marketers and vendors maintain consistency without limiting creativity unnecessarily."
        },
        {
          q: "Can branding improve marketing performance?",
          a: "A recognizable and credible brand can support advertising and conversion by making communications more consistent and easier to understand. However, branding alone cannot compensate for an unsuitable product, weak offer or poor customer experience. Evaluate brand development alongside awareness, customer feedback and commercially meaningful actions."
        }
      ]
    },
    {
      id: "web",
      name: "Websites & Development",
      description: "Responsive design, performance and conversions",
      faqs: [
        {
          q: "Why does a business need a professional website?",
          a: "A website gives customers a place to understand services, evaluate credibility and take the next step. It can also support search visibility, campaigns, enquiries and digital transactions. A professional website should be accessible, clear, mobile-friendly and aligned with the business's actual priorities rather than designed only for visual impact."
        },
        {
          q: "What should I look for in a website development company in Indore?",
          a: "Review technical capability, design quality, accessibility, responsive behavior, content management, security considerations and post-launch support. Clarify who owns the source code, domain and hosting accounts. Also ask how the company validates performance, search accessibility and contact forms before release. The right developer should explain both the design and its practical operation."
        },
        {
          q: "What is responsive website design?",
          a: "Responsive design allows a website's layout, text, navigation and interactive elements to adapt to different screen sizes. It helps people use the same website on phones, tablets and desktops without horizontal overflow or unreadable content. Mobile optimization also involves touch-friendly controls, performance and accessibility—not simply shrinking a desktop layout."
        },
        {
          q: "Does website speed affect SEO?",
          a: "Website performance is important for user experience, and Google uses Core Web Vitals within its broader page-experience considerations. However, a perfect performance score does not guarantee high search rankings. Prioritize real-user usability, loading behavior and relevant content while avoiding unnecessarily heavy scripts, images and animations."
        },
        {
          q: "What is the difference between WordPress and a React website?",
          a: "WordPress is a content management system commonly used for websites that require convenient editorial publishing. React is a JavaScript library used to build interactive interfaces and can be combined with different rendering and content-management solutions. The better choice depends on content workflows, technical requirements, maintenance resources and search-rendering architecture."
        },
        {
          q: "Can a React website rank well on Google?",
          a: "Yes, React websites can perform well in search when pages are crawlable, useful and rendered in a search-accessible way. Server-side rendering, static generation or reliable prerendering can make important page content more readily available to crawlers. Validate production HTML, HTTP responses, canonical URLs, links and structured data rather than assuming client-side rendering will always be sufficient."
        },
        {
          q: "What are Core Web Vitals?",
          a: "Core Web Vitals are performance metrics associated with loading, responsiveness and visual stability. Google's current set includes Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift. They provide useful diagnostics for actual user experience, especially on mobile devices, but should be evaluated alongside accessibility and overall website functionality."
        },
        {
          q: "Why is landing-page design important for lead generation?",
          a: "Landing pages connect an advertisement or search result with a specific offer. Visitors should quickly understand what is available, whether it matches their needs and how to proceed. Clear content, readable typography, credible information, suitable forms and fast mobile performance can reduce unnecessary friction. Conversion testing helps identify improvements relevant to the audience."
        },
        {
          q: "What makes a website SEO-friendly?",
          a: "An SEO-friendly website provides accessible pages, descriptive URLs, logical headings, crawlable internal links, appropriate metadata, helpful content and reliable HTTP responses. Technical foundations such as mobile usability, canonical handling and XML sitemaps also matter. SEO readiness should be checked against the deployed website, not only development previews."
        },
        {
          q: "How often should a business update its website?",
          a: "Update a website whenever important business information changes, content becomes inaccurate, security maintenance is required or usability problems are identified. Some businesses need frequent publishing, while others need only periodic reviews. Regularly check forms, links, key pages, performance and contact information instead of changing content simply to appear active."
        }
      ]
    },
    {
      id: "analytics",
      name: "Analytics & Conversion",
      description: "Measurement, reporting and business performance",
      faqs: [
        {
          q: "What is marketing analytics?",
          a: "Marketing analytics involves collecting and interpreting information about campaign activity, audience behavior and outcomes. It helps businesses understand which efforts are creating useful engagement and where improvement may be needed. Reliable analytics requires clear definitions, accurate implementation and interpretation within the business context."
        },
        {
          q: "What is Google Analytics 4?",
          a: "Google Analytics 4, commonly called GA4, is an analytics platform that uses an event-based measurement model for websites and supported apps. It can provide information about traffic sources, engagement and configured business actions. Businesses should configure events carefully, respect privacy requirements and validate reporting before relying on it for important decisions."
        },
        {
          q: "What is a website conversion?",
          a: "A conversion is a defined action considered valuable to the business, such as a completed purchase, qualified enquiry or appointment request. Smaller interactions, such as clicking a button, may be useful diagnostic events but are not always true business conversions. Measurement should distinguish between completed outcomes and intermediate steps."
        },
        {
          q: "What is conversion rate optimization?",
          a: "Conversion rate optimization, or CRO, improves the experience that helps suitable visitors complete meaningful actions. Work may involve clearer messaging, navigation improvements, form simplification, page-speed fixes and controlled testing. A higher conversion percentage is not necessarily better if the resulting leads or sales are less valuable."
        },
        {
          q: "How do I calculate marketing return on investment?",
          a: "Return on investment compares an investment's financial return against its cost under a clearly stated calculation method. For marketing, accurately assigning revenue and costs can be difficult because customers may interact with multiple channels. Include relevant campaign and management costs, document assumptions and distinguish estimated attribution from confirmed financial outcomes."
        },
        {
          q: "What is return on ad spend?",
          a: "Return on ad spend, or ROAS, typically compares attributed advertising revenue with advertising expenditure. For example, a reported ratio may indicate how much attributed revenue was generated per unit of ad spend. It does not automatically account for product costs, agency fees or profitability. Attribution limitations can also affect the reported figure."
        },
        {
          q: "Which KPIs matter most in a lead-generation campaign?",
          a: "Useful indicators can include valid enquiries, qualified lead rate, cost per qualified lead, appointment completion and customer acquisition cost. The exact priorities depend on the sales process. Click-through rate and cost per click can help diagnose campaign behavior, but they should not be treated as substitutes for business outcomes."
        },
        {
          q: "Why do advertising platforms report different conversion numbers?",
          a: "Platforms may use different attribution windows, identity methods, conversion definitions, time zones and measurement models. Consent limitations and browser behavior can also affect data collection. Compare reports only after understanding their definitions, and use appropriately validated first-party business records where available."
        },
        {
          q: "How can businesses track leads from multiple channels?",
          a: "Use consistent campaign tagging, validated form events, appropriate call measurement and organized enquiry records. Where lawful and technically suitable, CRM data can help distinguish initial enquiries from qualified opportunities. Build a reporting approach that recognizes customers may interact with several channels before contacting the business."
        },
        {
          q: "How often should marketing performance be reviewed?",
          a: "Campaign health may need frequent monitoring, while strategic decisions benefit from reviewing a meaningful amount of data. The right schedule depends on spending levels, traffic volumes and the speed of customer decisions. Avoid reacting to small day-to-day fluctuations without context. Combine ongoing checks with periodic reviews of quality, costs and business outcomes."
        }
      ]
    },
    {
      id: "offline",
      name: "Advertising, PR & OOH",
      description: "Outdoor, activations and brand communications",
      faqs: [
        {
          q: "What is out-of-home advertising?",
          a: "Out-of-home advertising, or OOH, reaches audiences through physical locations such as billboards, transit placements and other public displays. It can support brand awareness, geographic reach and campaign recognition. Planning should consider audience movement, visibility, placement availability, local regulations and the broader communication strategy."
        },
        {
          q: "What is the difference between ATL and BTL marketing?",
          a: "Above-the-line marketing is commonly used to describe broad-reach communication such as mass-media advertising. Below-the-line marketing generally refers to more targeted activities such as direct promotions, events or activations. Modern campaigns often combine elements of both, and terminology may vary by agency or market."
        },
        {
          q: "What is experiential marketing?",
          a: "Experiential marketing creates opportunities for people to interact with a brand through real-world or digital experiences. Examples can include demonstrations, interactive installations and promotional events. The experience should communicate a relevant brand idea and respect participant safety, accessibility and privacy."
        },
        {
          q: "How do businesses choose billboard locations?",
          a: "Location selection depends on the target audience, traffic context, visibility, available formats, campaign duration and budget. Businesses should examine whether the placement reaches relevant people rather than judging it solely by size. Local permissions and media-owner terms must also be considered before booking."
        },
        {
          q: "What is a brand activation campaign?",
          a: "A brand activation is an organized activity designed to encourage audience participation or engagement with a product, service or brand. It may involve demonstrations, sampling, events or interactive experiences. Planning should establish the intended audience, communication objective, operational requirements and practical ways to evaluate participation."
        },
        {
          q: "What does a public relations agency do?",
          a: "Public relations work helps organizations shape communications and engage with relevant audiences, including media and other stakeholders. Services may include messaging, announcements, media outreach and reputation planning. Earned coverage depends on editorial decisions, so responsible agencies should not promise that a particular publication will cover a story."
        },
        {
          q: "What is the difference between PR and paid advertising?",
          a: "Paid advertising buys eligible placements and generally gives advertisers greater control over the material presented within platform and publisher rules. Public relations often involves communicating information to third parties who independently decide whether and how to cover it. Both can support awareness and credibility, but their control, costs and measurement differ."
        },
        {
          q: "How can a business build a stronger brand reputation?",
          a: "Start by delivering reliable products or services and communicating accurately. Consistent messaging, responsible customer service, appropriate responses to criticism and authentic third-party feedback can help people evaluate the business. Reputation is shaped by actual experiences, so communications should support rather than replace operational quality."
        },
        {
          q: "Can outdoor advertising and digital marketing work together?",
          a: "Yes. Outdoor placements can introduce or reinforce a brand while digital channels provide further product information, engagement and measurable actions. Consistent visuals and messages make the experience easier to recognize. Businesses can use suitable campaign URLs or other lawful measurement techniques to assess responses, while acknowledging attribution limits."
        },
        {
          q: "How should the success of an offline advertising campaign be measured?",
          a: "Measurement depends on the objective. Awareness campaigns may use research, estimated audience exposure or relevant brand-search trends, while activation campaigns may examine participation and validated enquiries. Offline attribution is often less precise than digital interaction tracking. Use multiple indicators and avoid claiming that every subsequent sale was caused by the campaign."
        }
      ]
    },
    {
      id: "ai",
      name: "AI Search, AEO & GEO",
      description: "AI discovery, structured content and future visibility",
      faqs: [
        {
          q: "What is Answer Engine Optimization?",
          a: "Answer Engine Optimization, or AEO, is a term used for making information easier for search and answer systems to find, interpret and present in response to questions. Useful practices include clear answers, descriptive headings, accurate facts and logical content structure. There is no single universal AEO ranking system or technique that guarantees answer inclusion."
        },
        {
          q: "What is Generative Engine Optimization?",
          a: "Generative Engine Optimization, or GEO, describes efforts to make useful information more discoverable and understandable to generative search experiences. Relevant work overlaps with sound SEO: accessible pages, original information, clear entities, trustworthy sourcing and informative content. Different AI products retrieve and present information differently, so guaranteed placement claims are unreliable."
        },
        {
          q: "How can a business improve visibility in AI-powered search?",
          a: "Publish accurate content that clearly explains the organization, services, audience and evidence supporting important claims. Make key information accessible in HTML, maintain consistent business details and provide genuinely useful answers to customer questions. Technical accessibility matters, but AI systems independently determine what content to retrieve, summarize or reference."
        },
        {
          q: "Does Google Search Console have a separate GEO ranking report?",
          a: "Google Search Console provides search performance and indexing information, but it should not be treated as a universal dashboard for visibility across all generative AI systems. Available reporting features can evolve. Businesses should use official product documentation, website analytics and carefully interpreted referral information while avoiding unsupported claims about precise AI rankings."
        },
        {
          q: "Does FAQ schema guarantee rich results in Google?",
          a: "No. Structured data helps machines interpret eligible content but does not guarantee a search feature. Google generally restricts FAQ rich results to well-known authoritative government and health websites. For a marketing agency, helpful visible FAQs can still serve users, but FAQ markup should not be treated as a dependable way to obtain expanded search listings."
        },
        {
          q: "Is structured data important for AI search visibility?",
          a: "Appropriate structured data can clarify recognized information such as organizational identity, website relationships and service details for systems that process it. Markup must reflect visible, accurate content and follow the relevant vocabulary and search-provider rules. Structured data is a supporting signal, not a substitute for accessible pages or trustworthy information."
        },
        {
          q: "Should an agency create separate pages for every SEO question?",
          a: "Create a dedicated page when a topic deserves substantial, distinct information and serves a clear user need. Closely related questions may be better answered together in one comprehensive guide. Publishing hundreds of thin or repetitive pages can dilute the site's usefulness. Organize content according to genuine topic relationships, not a target page count."
        },
        {
          q: "Can case studies improve visibility in traditional and AI search?",
          a: "Genuine case studies can provide original information about a challenge, method and measured outcome. Clearly documented evidence may be more useful to readers and systems than generic marketing claims. Avoid inventing figures, customers or attribution. Where permission allows, explain the project context, measurement method, limitations and actual results."
        },
        {
          q: "Is an llms.txt file necessary for ranking in AI search?",
          a: "The llms.txt proposal is not a universal requirement for inclusion in AI search, and support varies by service. It should not be treated as a proven ranking factor. Prioritize accurate HTML content, crawlability, clear internal links and official crawler guidance before adopting optional discovery formats."
        },
        {
          q: "How should businesses combine SEO, AEO and GEO?",
          a: "Begin with a technically accessible website and useful content that satisfies real search intent. Add clear question-based explanations, verified organizational details, original examples and appropriate structured data where supported. Monitor actual search, referral and conversion behavior. Treat AEO and GEO as extensions of a strong information strategy rather than separate shortcuts to guaranteed visibility."
        }
      ]
    }
  ];

  const totalFAQs = faqCategories.reduce(
    (sum, category) => sum + category.faqs.length,
    0
  );

  const selectorCSS = faqCategories.map((category) => `
    #faq20-${category.id}:checked ~ .faq20-interface
    label[for="faq20-${category.id}"] {
      color:#fff;
      background:#303136;
      border-color:rgba(255,255,255,.45);
    }

    #faq20-${category.id}:checked ~ .faq20-interface
    .faq20-panel-${category.id} {
      display:block;
    }

    #faq20-${category.id}:focus-visible ~ .faq20-interface
    label[for="faq20-${category.id}"] {
      outline:2px solid #eab308;
      outline-offset:2px;
    }
  `).join("\n");

  return (
    <section
      id="home-faq"
      className="relative isolate overflow-hidden"
      aria-labelledby="faq20-heading"
      style={{
        backgroundColor:"#060708",
        color:"#fff",
        paddingBlock:"clamp(60px,7vw,108px)",
        fontFamily:"'Raleway', sans-serif"
      }}
    >
      {/* ======================================================
          20.01 — COMPLETE SCOPED STYLES
      ====================================================== */}

      <style>{`
        #home-faq *,
        #home-faq *::before,
        #home-faq *::after {
          box-sizing:border-box;
        }

        #home-faq .faq20-bg {
          position:absolute;
          inset:0;
          pointer-events:none;
          background:
            radial-gradient(
              ellipse at 75% 25%,
              rgba(255,255,255,.045),
              transparent 55%
            ),
            linear-gradient(
              180deg,#060708,#0c0d10,#060708
            );
        }

        #home-faq .faq20-header {
          display:grid;
          grid-template-columns:minmax(0,1fr);
          gap:24px;
          align-items:end;
          margin-bottom:32px;
        }

        #home-faq .faq20-eyebrow {
          margin:0 0 15px;
          color:#aeb1b9;
          font-size:12px;
          font-weight:500;
          letter-spacing:.09em;
          text-transform:uppercase;
        }

        #home-faq .faq20-heading {
          max-width:760px;
          margin:0;
          color:#fff;
          font-size:clamp(24px,2.5vw,32px);
          font-weight:700;
          line-height:1.25;
          text-wrap:balance;
        }

        #home-faq .faq20-lead {
          margin:16px 0 0;
          max-width:660px;
          color:#d1d5db;
          font-size:15px;
          line-height:1.75;
        }

        #home-faq .faq20-header-aside {
          margin:0;
          color:#b8bbc3;
          font-size:13px;
          line-height:1.75;
          max-width:340px;
        }

        /* MAIN GLASS CONTAINER */

        #home-faq .faq20-studio {
          position:relative;
          min-width:0;
          padding:0;
          margin:0;
          border:0;
        }

        #home-faq .faq20-radio {
          position:absolute;
          width:1px;
          height:1px;
          overflow:hidden;
          margin:-1px;
          padding:0;
          clip-path:inset(50%);
          border:0;
          white-space:nowrap;
        }

        #home-faq .faq20-interface {
          min-width:0;
          border:1px solid rgba(255,255,255,.2);
          border-radius:15px;
          overflow:hidden;
          background:#0a0b0d;
          box-shadow:0 25px 70px rgba(0,0,0,.25);
        }

        #home-faq .faq20-toolbar {
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:12px;
          padding:17px 21px;
          background:#17181b;
          border-bottom:1px solid rgba(255,255,255,.14);
        }

        #home-faq .faq20-toolbar-title {
          display:flex;
          align-items:center;
          gap:10px;
          color:#fff;
          font-size:12px;
          font-weight:600;
          letter-spacing:.07em;
        }

        #home-faq .faq20-toolbar-title svg {
          width:18px;
          height:18px;
        }

        #home-faq .faq20-toolbar-count {
          color:#aeb1b9;
          font-size:11px;
        }

        /* CATEGORY TABS */

        #home-faq .faq20-tabs {
          display:flex;
          align-items:stretch;
          gap:9px;
          padding:16px;
          overflow-x:auto;
          scrollbar-width:thin;
          scrollbar-color:#42444b transparent;
          scroll-snap-type:x proximity;
          background:#101114;
          border-bottom:1px solid rgba(255,255,255,.14);
          -webkit-overflow-scrolling:touch;
        }

        #home-faq .faq20-tab {
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:6px;
          flex:0 0 auto;
          min-width:146px;
          min-height:66px;
          padding:12px 14px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:9px;
          background:#17181b;
          color:#d1d5db;
          cursor:pointer;
          scroll-snap-align:start;
          transition:
            background .2s ease,
            border-color .2s ease;
        }

        #home-faq .faq20-tab strong {
          display:block;
          font-size:12px;
          font-weight:600;
          line-height:1.45;
          color:inherit;
        }

        #home-faq .faq20-tab span {
          font-size:10px;
          color:#989ca5;
          line-height:1.4;
        }

        /* ANSWER PANEL */

        #home-faq .faq20-content {
          position:relative;
          padding:clamp(16px,3vw,32px);
          background:
            linear-gradient(
              145deg,#141518,#090a0c
            );
        }

        #home-faq .faq20-panel {
          display:none;
          animation:faq20-enter .25s ease both;
        }

        #home-faq .faq20-panel-header {
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:14px;
          margin-bottom:23px;
          padding-bottom:20px;
          border-bottom:1px solid rgba(255,255,255,.13);
        }

        #home-faq .faq20-panel-kicker {
          display:block;
          margin-bottom:9px;
          font-size:11px;
          color:#aeb1b8;
          letter-spacing:.08em;
          text-transform:uppercase;
        }

        #home-faq .faq20-panel-title {
          margin:0;
          font-size:clamp(19px,2vw,24px);
          font-weight:600;
          line-height:1.35;
          color:#fff;
        }

        #home-faq .faq20-panel-description {
          margin:8px 0 0;
          color:#aeb1b9;
          font-size:12px;
          line-height:1.65;
        }

        #home-faq .faq20-panel-count {
          display:inline-flex;
          padding:9px 12px;
          border:1px solid rgba(255,255,255,.18);
          border-radius:8px;
          color:#c9cbd1;
          font-size:11px;
          background:#1e1f23;
          white-space:nowrap;
        }

        /* FAQ ACCORDION */

        #home-faq .faq20-list {
          display:grid;
          grid-template-columns:minmax(0,1fr);
          gap:10px;
        }

        #home-faq .faq20-item {
          min-width:0;
          border:1px solid rgba(255,255,255,.15);
          border-radius:10px;
          background:rgba(10,11,13,.93);
          overflow:hidden;
        }

        #home-faq .faq20-question {
          display:flex;
          align-items:center;
          gap:13px;
          min-height:64px;
          padding:17px 19px;
          color:#fff;
          font-size:14px;
          font-weight:600;
          line-height:1.55;
          cursor:pointer;
          list-style:none;
        }

        #home-faq .faq20-question::-webkit-details-marker {
          display:none;
        }

        #home-faq .faq20-number {
          flex-shrink:0;
          color:#9296a0;
          font-size:11px;
          font-weight:600;
        }

        #home-faq .faq20-question-text {
          flex:1;
          min-width:0;
        }

        #home-faq .faq20-plus {
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          width:28px;
          height:28px;
          border:1px solid rgba(255,255,255,.17);
          border-radius:7px;
          background:#1f2024;
          color:#fff;
          font-size:19px;
          font-weight:400;
          transition:transform .2s ease;
        }

        #home-faq .faq20-item[open] {
          border-color:rgba(255,255,255,.33);
          background:#191a1e;
        }

        #home-faq .faq20-item[open] .faq20-plus {
          transform:rotate(45deg);
        }

        #home-faq .faq20-answer {
          padding:0 20px 21px 49px;
          color:#cbd0d8;
          font-size:13px;
          line-height:1.85;
        }

        #home-faq .faq20-answer p {
          margin:0;
        }

        /* FOOTER */

        #home-faq .faq20-bottom {
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:17px;
          margin-top:20px;
          padding:23px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:12px;
          background:
            linear-gradient(
              135deg,#1a1b1f,#0a0b0d
            );
        }

        #home-faq .faq20-bottom h3 {
          margin:0;
          color:#fff;
          font-size:18px;
          font-weight:600;
          line-height:1.4;
        }

        #home-faq .faq20-bottom p {
          margin:7px 0 0;
          color:#b8bbc3;
          font-size:13px;
          line-height:1.7;
        }

        #home-faq .faq20-button {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          min-height:42px;
          padding:10px 15px;
          border-radius:8px;
          border:1px solid #eab308;
          background:#eab308;
          color:#050505;
          text-decoration:none;
          font-size:13px;
          font-weight:600;
          line-height:1.4;
          transition:background .2s ease;
        }

        #home-faq .faq20-button svg {
          width:16px;
          height:16px;
        }

        /* RESPONSIVE */

        @media(min-width:900px) {
          #home-faq .faq20-header {
            grid-template-columns:
              minmax(0,1.4fr)
              minmax(0,.6fr);
            gap:45px;
          }

          #home-faq .faq20-header-aside {
            justify-self:end;
          }
        }

        @media(max-width:639px) {
          #home-faq .faq20-tabs {
            padding:11px;
            gap:7px;
          }

          #home-faq .faq20-tab {
            min-width:135px;
            min-height:61px;
            padding:10px;
          }

          #home-faq .faq20-question {
            padding:15px 13px;
            gap:10px;
            font-size:13px;
          }

          #home-faq .faq20-answer {
            padding:0 14px 17px 38px;
            font-size:12px;
          }

          #home-faq .faq20-bottom {
            padding:19px;
          }
        }

        @media(hover:hover) and (pointer:fine) {
          #home-faq .faq20-tab:hover {
            background:#282a2f;
            border-color:rgba(255,255,255,.4);
          }

          #home-faq .faq20-item:hover {
            border-color:rgba(255,255,255,.3);
          }

          #home-faq .faq20-button:hover {
            background:#facc15;
            border-color:#facc15;
          }
        }

        #home-faq summary:focus-visible,
        #home-faq a:focus-visible {
          outline:2px solid #eab308;
          outline-offset:2px;
        }

        @keyframes faq20-enter {
          from {
            opacity:0;
            transform:translateY(5px);
          }
          to {
            opacity:1;
            transform:translateY(0);
          }
        }

        @media(prefers-reduced-motion:reduce) {
          #home-faq .faq20-panel {
            animation:none;
          }

          #home-faq .faq20-plus,
          #home-faq .faq20-tab,
          #home-faq .faq20-button {
            transition:none;
          }
        }

        ${selectorCSS}
      `}</style>

      <div className="faq20-bg" aria-hidden="true"/>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ================================================
              20.02 — HEADER
          ================================================ */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.08}
          >
            <header className="faq20-header">
              <div>
                <p className="faq20-eyebrow">
                  KNOWLEDGE / QUESTIONS / ANSWERS
                </p>

                <h2
                  id="faq20-heading"
                  className="faq20-heading"
                >
                  Good Questions Deserve
                  Clear Answers.
                </h2>

                <p className="faq20-lead">
                  Choosing the right marketing approach
                  starts with understanding your options.
                  Explore practical answers about
                  digital marketing, SEO, advertising,
                  branding and growing your business.
                </p>
              </div>

              <p className="faq20-header-aside">
                From getting discovered in Indore
                to building a stronger digital
                presence, find the information
                you need before making your next move.
              </p>
            </header>
          </AnimatedSection>

          {/* ================================================
              20.03 — COMPLETE INTERACTIVE FAQ HUB
          ================================================ */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.12}
          >
            <div
              className="faq20-studio"
              role="group"
              aria-label="Frequently asked questions by category"
            >

              {/* CATEGORY SELECTION STATE */}

              {faqCategories.map((category,index) => (
                <input
                  key={category.id}
                  type="radio"
                  className="faq20-radio"
                  id={`faq20-${category.id}`}
                  name="inchtomilez-faq-category"
                  aria-label={category.name}
                  defaultChecked={index===0}
                />
              ))}

              <div className="faq20-interface">

                {/* TOP TOOLBAR */}

                <div className="faq20-toolbar">
                  <span className="faq20-toolbar-title">
                    <Search aria-hidden="true"/>
                    THE INCHTOMILEZ KNOWLEDGE HUB
                  </span>

                  <span className="faq20-toolbar-count">
                    {totalFAQs} QUESTIONS / {faqCategories.length} CATEGORIES
                  </span>
                </div>

                {/* HORIZONTAL CATEGORY TABS */}

                <div
                  className="faq20-tabs"
                  role="group"
                  aria-label="FAQ categories"
                >
                  {faqCategories.map((category) => (
                    <label
                      key={category.id}
                      htmlFor={`faq20-${category.id}`}
                      className="faq20-tab"
                    >
                      <strong>{category.name}</strong>
                      <span>
                        {category.faqs.length} QUESTIONS
                      </span>
                    </label>
                  ))}
                </div>

                {/* CATEGORY CONTENT PANELS */}

                <div className="faq20-content">
                  {faqCategories.map((category,categoryIndex) => (
                    <div
                      key={category.id}
                      className={`faq20-panel faq20-panel-${category.id}`}
                    >

                      <div className="faq20-panel-header">
                        <div>
                          <span className="faq20-panel-kicker">
                            CATEGORY {String(categoryIndex+1).padStart(2,"0")}
                            {" / "}
                            KNOWLEDGE CENTER
                          </span>

                          <h3 className="faq20-panel-title">
                            {category.name}
                          </h3>

                          <p className="faq20-panel-description">
                            {category.description}
                          </p>
                        </div>

                        <span className="faq20-panel-count">
                          {category.faqs.length} ANSWERS
                        </span>
                      </div>

                      <div className="faq20-list">
                        {category.faqs.map((faq,index) => (
                          <details
                            key={`${category.id}-${index}`}
                            className="faq20-item"
                          >
                            <summary className="faq20-question">
                              <span className="faq20-number">
                                {String(index+1).padStart(2,"0")}
                              </span>

                              <span className="faq20-question-text">
                                {faq.q}
                              </span>

                              <span
                                className="faq20-plus"
                                aria-hidden="true"
                              >
                                +
                              </span>
                            </summary>

                            <div className="faq20-answer">
                              <p>{faq.a}</p>
                            </div>
                          </details>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* ================================================
              20.04 — FINAL FAQ CTA
          ================================================ */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.16}
          >
            <div className="faq20-bottom">
              <div>
                <h3>
                  Still Have Questions About Your Business?
                </h3>

                <p>
                  Tell us what you're working toward.
                  We'll help you explore the right
                  marketing direction.
                </p>
              </div>

              <Link
                to={ROUTES.contact}
                className="faq20-button"
              >
                Ask InchToMilez
                <ArrowRight aria-hidden="true"/>
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />
    </section>
  );
})()}

{/* ================= END SECTION 20 ================= */}



{/* ============================================================
  SECTION 21 — FINAL CONVERSION / GOOGLE MAP LOCATIONS
  INCHTOMILEZ / LET'S TALK

  21.01 — Scoped CSS
  21.02 — Final Conversion Hero
  21.03 — Contact & Conversion Actions
  21.04 — Interactive Indore / Pune Office Switcher
  21.05 — Real Google Maps Embeds
  21.06 — Direct Call / Directions / Email
  21.07 — Closing Brand Statement

  No new dependencies.
  Uses the existing website contact route.
============================================================ */}

{(() => {
  const offices = [
    {
      id: "indore",
      number: "01",
      city: "Indore",
      region: "Madhya Pradesh",
      label: "Vijay Nagar Office",
      address:
        "7th Floor, Block A, Metro Tower, Scheme No. 54 PU4, Vijay Nagar, Indore, Madhya Pradesh 452010, India",
      phone: "+91 90099 70709",
      phoneHref: "tel:+919009970709",
      mapsQuery:
        "Inchtomilez Digital Marketing And Advertising Agency, Metro Tower, Scheme 54, Vijay Nagar, Indore",
      mapsPlaceId:
        "ChIJm6nkJQD9YjkRKNtiKxpjh_0",
    },
    {
      id: "pune",
      number: "02",
      city: "Pune / PCMC",
      region: "Maharashtra",
      label: "Nashik Phata Office",
      address:
        "855, Gera's Imperium Gateway, Nashik Phata Flyover, opposite Bhosari Metro Station, Pimpri-Chinchwad, Maharashtra 411034, India",
      phone: "+91 90099 79600",
      phoneHref: "tel:+919009979600",
      mapsQuery:
        "855, Gera's Imperium Gateway, Nashik Phata, Bhosari Metro Station, Pimpri-Chinchwad, Maharashtra 411034",
      mapsPlaceId: "",
    },
  ];

  return (
    <section
      id="home-contact-locations"
      aria-labelledby="loc21-heading"
      className="relative isolate overflow-hidden"
      style={{
        background: "#050607",
        color: "#fff",
        fontFamily: "'Raleway', sans-serif",
        paddingBlock: "clamp(65px,8vw,120px)",
      }}
    >
      {/* ======================================================
          21.01 — PREMIUM SCOPED STYLES
      ====================================================== */}

      <style>{`
        #home-contact-locations {
          --l21-line: rgba(255,255,255,.15);
          --l21-muted: #b7bac2;
        }

        #home-contact-locations *,
        #home-contact-locations *::before,
        #home-contact-locations *::after {
          box-sizing:border-box;
        }

        #home-contact-locations .l21-background {
          position:absolute;
          inset:0;
          pointer-events:none;
          background:
            radial-gradient(
              ellipse at 15% 25%,
              rgba(255,255,255,.06),
              transparent 50%
            ),
            radial-gradient(
              ellipse at 80% 80%,
              rgba(255,255,255,.045),
              transparent 48%
            ),
            linear-gradient(
              180deg,#050607,#0e0f12,#050607
            );
        }

        /* HERO */

        #home-contact-locations .l21-eyebrow {
          margin:0 0 16px;
          color:#b6b8c0;
          font-size:12px;
          font-weight:600;
          letter-spacing:.1em;
          text-transform:uppercase;
        }

        #home-contact-locations .l21-heading {
          max-width:850px;
          margin:0;
          color:#fff;
          font-size:clamp(28px,3.7vw,51px);
          font-weight:700;
          line-height:1.16;
          letter-spacing:-.025em;
          text-wrap:balance;
        }

        #home-contact-locations .l21-description {
          max-width:660px;
          margin:20px 0 0;
          color:#c6c9d0;
          font-size:15px;
          line-height:1.8;
        }

        #home-contact-locations .l21-hero {
          position:relative;
          display:grid;
          grid-template-columns:minmax(0,1fr);
          gap:30px;
          align-items:end;
          padding-bottom:38px;
          border-bottom:1px solid var(--l21-line);
        }

        #home-contact-locations .l21-hero-actions {
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          gap:12px;
        }

        /* BUTTONS */

        #home-contact-locations .l21-button {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          min-height:43px;
          padding:11px 16px;
          border-radius:8px;
          font-size:13px;
          font-weight:600;
          line-height:1.4;
          text-decoration:none;
          text-align:center;
          transition:
            background .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }

        #home-contact-locations .l21-button svg {
          width:16px;
          height:16px;
          flex-shrink:0;
        }

        #home-contact-locations .l21-primary {
          background:#eab308;
          color:#050505;
          border:1px solid #eab308;
        }

        #home-contact-locations .l21-secondary {
          background:rgba(255,255,255,.055);
          color:#fff;
          border:1px solid rgba(255,255,255,.25);
        }

        #home-contact-locations .l21-actions-note {
          margin:0;
          max-width:290px;
          color:#9296a0;
          font-size:11px;
          line-height:1.65;
        }

        /* CONTACT QUICK STRIP */

        #home-contact-locations .l21-contact-strip {
          display:grid;
          grid-template-columns:1fr;
          gap:0;
          margin-top:24px;
          border:1px solid var(--l21-line);
          border-radius:13px;
          overflow:hidden;
          background:rgba(19,20,23,.9);
        }

        #home-contact-locations .l21-contact-cell {
          display:flex;
          align-items:flex-start;
          gap:14px;
          min-width:0;
          padding:23px;
          border-bottom:1px solid var(--l21-line);
          text-decoration:none;
          transition:background .2s ease;
        }

        #home-contact-locations .l21-contact-cell:last-child {
          border-bottom:0;
        }

        #home-contact-locations .l21-contact-icon {
          display:flex;
          width:42px;
          height:42px;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          border-radius:9px;
          border:1px solid rgba(255,255,255,.18);
          background:rgba(255,255,255,.05);
          color:#fff;
        }

        #home-contact-locations .l21-contact-icon svg {
          width:19px;
          height:19px;
        }

        #home-contact-locations .l21-contact-copy {
          min-width:0;
        }

        #home-contact-locations .l21-contact-copy small {
          display:block;
          margin-bottom:5px;
          color:#a3a7af;
          font-size:11px;
          font-weight:500;
        }

        #home-contact-locations .l21-contact-copy strong {
          display:block;
          color:#fff;
          font-size:14px;
          font-weight:600;
          line-height:1.5;
          overflow-wrap:anywhere;
        }

        #home-contact-locations .l21-contact-copy span {
          display:block;
          margin-top:5px;
          color:#aeb1b9;
          font-size:11px;
          line-height:1.6;
        }

        /* OFFICE HEADER */

        #home-contact-locations .l21-office-heading {
          display:flex;
          flex-wrap:wrap;
          align-items:end;
          justify-content:space-between;
          gap:20px;
          margin:56px 0 24px;
        }

        #home-contact-locations .l21-section-label {
          display:block;
          margin-bottom:12px;
          color:#aeb1b9;
          font-size:11px;
          font-weight:600;
          letter-spacing:.09em;
        }

        #home-contact-locations .l21-office-heading h3 {
          margin:0;
          color:#fff;
          font-size:clamp(22px,2.5vw,30px);
          font-weight:700;
          line-height:1.3;
        }

        #home-contact-locations .l21-office-heading p {
          margin:10px 0 0;
          max-width:660px;
          color:#bdc0c8;
          font-size:13px;
          line-height:1.75;
        }

        #home-contact-locations .l21-office-badge {
          padding:10px 13px;
          border:1px solid rgba(255,255,255,.2);
          border-radius:8px;
          color:#d4d6dc;
          background:rgba(255,255,255,.05);
          font-size:11px;
          white-space:nowrap;
        }

        /* MAP CONTAINER */

        #home-contact-locations .l21-map-studio {
          position:relative;
          border:1px solid rgba(255,255,255,.2);
          border-radius:15px;
          background:#0c0d10;
          overflow:hidden;
          box-shadow:0 28px 75px rgba(0,0,0,.24);
        }

        #home-contact-locations .l21-radio {
          position:absolute;
          width:1px;
          height:1px;
          padding:0;
          margin:-1px;
          border:0;
          overflow:hidden;
          clip-path:inset(50%);
          white-space:nowrap;
        }

        #home-contact-locations .l21-tabs {
          display:grid;
          grid-template-columns:1fr 1fr;
          background:#141518;
          border-bottom:1px solid var(--l21-line);
        }

        #home-contact-locations .l21-tab {
          position:relative;
          display:flex;
          flex-direction:column;
          gap:5px;
          min-width:0;
          padding:20px;
          border-right:1px solid var(--l21-line);
          cursor:pointer;
          transition:background .2s ease;
        }

        #home-contact-locations .l21-tab:last-child {
          border-right:0;
        }

        #home-contact-locations .l21-tab::after {
          content:"";
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          height:2px;
          background:#eab308;
          transform:scaleX(0);
          transform-origin:left;
          transition:transform .25s ease;
        }

        #home-contact-locations .l21-tab-index {
          color:#989ca5;
          font-size:10px;
          font-weight:600;
          letter-spacing:.07em;
        }

        #home-contact-locations .l21-tab-city {
          display:block;
          color:#fff;
          font-size:17px;
          font-weight:600;
          line-height:1.4;
        }

        #home-contact-locations .l21-tab-label {
          color:#b0b3bb;
          font-size:11px;
          line-height:1.5;
        }

        /* SELECTED OFFICE */

        #l21-office-indore:checked ~ .l21-interface
        label[for="l21-office-indore"],
        #l21-office-pune:checked ~ .l21-interface
        label[for="l21-office-pune"] {
          background:#292a2e;
        }

        #l21-office-indore:checked ~ .l21-interface
        label[for="l21-office-indore"]::after,
        #l21-office-pune:checked ~ .l21-interface
        label[for="l21-office-pune"]::after {
          transform:scaleX(1);
        }

        /* OFFICE CONTENT */

        #home-contact-locations .l21-office-panel {
          display:none;
          grid-template-columns:minmax(0,1fr);
          min-width:0;
          animation:l21Reveal .3s ease both;
        }

        #l21-office-indore:checked ~ .l21-interface
        .l21-panel-indore,
        #l21-office-pune:checked ~ .l21-interface
        .l21-panel-pune {
          display:grid;
        }

        #home-contact-locations .l21-office-info {
          display:flex;
          flex-direction:column;
          min-width:0;
          gap:0;
          padding:clamp(22px,3vw,32px);
          background:
            linear-gradient(145deg,#1d1e22,#0d0e11);
        }

        #home-contact-locations .l21-office-meta {
          display:block;
          margin-bottom:14px;
          color:#aeb1b9;
          font-size:11px;
          letter-spacing:.09em;
          text-transform:uppercase;
        }

        #home-contact-locations .l21-office-title {
          margin:0;
          color:#fff;
          font-size:clamp(23px,2.5vw,30px);
          font-weight:700;
          line-height:1.25;
        }

        #home-contact-locations .l21-office-region {
          margin:9px 0 0;
          color:#b5b8c0;
          font-size:13px;
        }

        #home-contact-locations .l21-office-details {
          display:grid;
          gap:19px;
          margin:27px 0;
          padding:24px 0;
          border-top:1px solid rgba(255,255,255,.14);
          border-bottom:1px solid rgba(255,255,255,.14);
        }

        #home-contact-locations .l21-detail {
          display:flex;
          align-items:flex-start;
          gap:12px;
          min-width:0;
        }

        #home-contact-locations .l21-detail-icon {
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          width:34px;
          height:34px;
          border:1px solid rgba(255,255,255,.15);
          border-radius:8px;
          background:rgba(255,255,255,.05);
        }

        #home-contact-locations .l21-detail-icon svg {
          width:16px;
          height:16px;
        }

        #home-contact-locations .l21-detail small {
          display:block;
          color:#a5a8b0;
          font-size:11px;
          margin-bottom:5px;
        }

        #home-contact-locations .l21-detail address {
          color:#e4e5e8;
          font-size:13px;
          line-height:1.75;
          font-style:normal;
        }

        #home-contact-locations .l21-detail a {
          color:#fff;
          font-size:13px;
          line-height:1.6;
          text-decoration:none;
          overflow-wrap:anywhere;
        }

        #home-contact-locations .l21-office-actions {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:auto;
        }

        /* REAL GOOGLE MAPS */

        #home-contact-locations .l21-map-side {
          display:flex;
          flex-direction:column;
          min-width:0;
          border-top:1px solid var(--l21-line);
          background:#141518;
        }

        #home-contact-locations .l21-map-top {
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:12px;
          min-height:49px;
          padding:13px 17px;
          border-bottom:1px solid rgba(255,255,255,.12);
        }

        #home-contact-locations .l21-map-top strong {
          color:#fff;
          font-size:11px;
          font-weight:600;
        }

        #home-contact-locations .l21-map-top span {
          color:#a5a8b0;
          font-size:11px;
        }

        #home-contact-locations .l21-map-frame {
          display:block;
          width:100%;
          height:380px;
          border:0;
          background:#202126;
        }

        #home-contact-locations .l21-map-bottom {
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:12px;
          padding:17px 20px;
          border-top:1px solid rgba(255,255,255,.12);
          background:#101114;
        }

        #home-contact-locations .l21-map-bottom span {
          color:#b5b8c0;
          font-size:12px;
        }

        #home-contact-locations .l21-map-link {
          display:inline-flex;
          align-items:center;
          gap:7px;
          color:#fff;
          text-decoration:none;
          font-size:12px;
          font-weight:600;
        }

        #home-contact-locations .l21-map-link svg {
          width:15px;
          height:15px;
        }

        /* FINAL BRAND LINE */

        #home-contact-locations .l21-final {
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:20px;
          margin-top:28px;
          padding:25px 0 0;
          border-top:1px solid var(--l21-line);
        }

        #home-contact-locations .l21-final strong {
          display:block;
          max-width:560px;
          color:#fff;
          font-size:18px;
          font-weight:600;
          line-height:1.4;
        }

        #home-contact-locations .l21-final p {
          margin:8px 0 0;
          color:#aeb1b9;
          font-size:13px;
          line-height:1.7;
        }

        /* RESPONSIVE */

        @media(min-width:640px) {
          #home-contact-locations .l21-contact-strip {
            grid-template-columns:repeat(3,minmax(0,1fr));
          }

          #home-contact-locations .l21-contact-cell {
            border-bottom:0;
            border-right:1px solid var(--l21-line);
          }

          #home-contact-locations .l21-contact-cell:last-child {
            border-right:0;
          }
        }

        @media(min-width:980px) {
          #home-contact-locations .l21-hero {
            grid-template-columns:minmax(0,1.45fr) minmax(0,.55fr);
            gap:55px;
          }

          #home-contact-locations .l21-hero-actions {
            justify-self:end;
          }

          #home-contact-locations .l21-office-panel {
            grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);
          }

          #home-contact-locations .l21-map-side {
            border-top:0;
            border-left:1px solid var(--l21-line);
          }

          #home-contact-locations .l21-map-frame {
            height:420px;
            flex:1;
            min-height:420px;
          }
        }

        @media(max-width:639px) {
          #home-contact-locations .l21-heading {
            font-size:clamp(27px,7vw,36px);
          }

          #home-contact-locations .l21-contact-cell {
            padding:18px;
          }

          #home-contact-locations .l21-office-heading {
            margin-top:45px;
          }

          #home-contact-locations .l21-tab {
            padding:14px 12px;
          }

          #home-contact-locations .l21-tab-city {
            font-size:15px;
          }

          #home-contact-locations .l21-tab-label {
            font-size:10px;
          }

          #home-contact-locations .l21-office-info {
            padding:20px;
          }

          #home-contact-locations .l21-map-frame {
            height:330px;
          }

          #home-contact-locations .l21-office-actions
          .l21-button {
            flex:1;
          }
        }

        @media(max-width:370px) {
          #home-contact-locations .l21-hero-actions,
          #home-contact-locations .l21-hero-actions .l21-button {
            width:100%;
          }

          #home-contact-locations .l21-office-actions
          .l21-button {
            flex:1 0 100%;
          }
        }

        /* ACCESSIBILITY */

        #home-contact-locations a:focus-visible {
          outline:2px solid #eab308;
          outline-offset:3px;
        }

        #l21-office-indore:focus-visible ~ .l21-interface
        label[for="l21-office-indore"],
        #l21-office-pune:focus-visible ~ .l21-interface
        label[for="l21-office-pune"] {
          outline:2px solid #eab308;
          outline-offset:-3px;
        }

        @media(hover:hover) and (pointer:fine) {
          #home-contact-locations .l21-primary:hover {
            background:#facc15;
            border-color:#facc15;
            transform:translateY(-2px);
          }

          #home-contact-locations .l21-secondary:hover {
            background:rgba(255,255,255,.11);
            border-color:rgba(255,255,255,.45);
          }

          #home-contact-locations .l21-tab:hover {
            background:#25262b;
          }

          #home-contact-locations .l21-contact-cell:hover {
            background:rgba(255,255,255,.055);
          }
        }

        @keyframes l21Reveal {
          from {
            opacity:0;
            transform:translateY(6px);
          }
          to {
            opacity:1;
            transform:translateY(0);
          }
        }

        @media(prefers-reduced-motion:reduce) {
          #home-contact-locations .l21-office-panel {
            animation:none;
          }

          #home-contact-locations .l21-button,
          #home-contact-locations .l21-tab,
          #home-contact-locations .l21-contact-cell {
            transition:none;
          }
        }
      `}</style>

      {/* ======================================================
          21.02 — ATMOSPHERE
      ====================================================== */}

      <div className="l21-background" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ==================================================
              21.03 — PREMIUM FINAL CONVERSION HERO
          ================================================== */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.08}
          >
            <div className="l21-hero">

              <div>
                <p className="l21-eyebrow">
                  LET'S TALK / YOUR NEXT BIG MOVE
                </p>

                <h2
                  id="loc21-heading"
                  className="l21-heading"
                >
                  Have a Brand to Build?
                  A Market to Win?
                  Or an Idea Worth Taking Further?
                </h2>

                <p className="l21-description">
                  You don't need to have everything figured
                  out before talking to us. Bring your
                  business challenge, your ambition or
                  even the beginning of an idea.
                  We'll start with a conversation
                  about what actually matters.
                </p>
              </div>

              <div className="l21-hero-actions">

                <Link
                  to={ROUTES.contact}
                  className="l21-button l21-primary"
                >
                  Let's Discuss Your Project
                  <ArrowRight aria-hidden="true" />
                </Link>

                <a
                  href="tel:+919669988666"
                  className="l21-button l21-secondary"
                >
                  <Phone aria-hidden="true" />
                  Call +91 96699 88666
                </a>

                <p className="l21-actions-note">
                  Tell us what you're building.
                  The first step is understanding
                  the opportunity.
                </p>

              </div>
            </div>
          </AnimatedSection>

          {/* ==================================================
              21.04 — DIRECT CONTACT CHANNELS
          ================================================== */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.12}
          >
            <div className="l21-contact-strip">

              <a
                href="mailto:hello@inchtomilez.com"
                className="l21-contact-cell"
              >
                <span
                  className="l21-contact-icon"
                  aria-hidden="true"
                >
                  <Mail />
                </span>

                <span className="l21-contact-copy">
                  <small>EMAIL US</small>
                  <strong>hello@inchtomilez.com</strong>
                  <span>Share your brief or questions</span>
                </span>
              </a>

              <a
                href="tel:+919009970709"
                className="l21-contact-cell"
              >
                <span
                  className="l21-contact-icon"
                  aria-hidden="true"
                >
                  <Phone />
                </span>

                <span className="l21-contact-copy">
                  <small>INDORE OFFICE</small>
                  <strong>+91 90099 70709</strong>
                  <span>Vijay Nagar, Indore</span>
                </span>
              </a>

              <a
                href="tel:+919009979600"
                className="l21-contact-cell"
              >
                <span
                  className="l21-contact-icon"
                  aria-hidden="true"
                >
                  <Phone />
                </span>

                <span className="l21-contact-copy">
                  <small>PUNE / PCMC OFFICE</small>
                  <strong>+91 90099 79600</strong>
                  <span>Nashik Phata, Pimpri-Chinchwad</span>
                </span>
              </a>

            </div>
          </AnimatedSection>

          {/* ==================================================
              21.05 — OFFICE LOCATIONS INTRO
          ================================================== */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.14}
          >
            <div className="l21-office-heading">
              <div>
                <span className="l21-section-label">
                  OUR PRESENCE / FIND US
                </span>

                <h3>
                  Two Locations. One Connected Agency.
                </h3>

                <p>
                  Find our offices in Indore and
                  Pune / Pimpri-Chinchwad. Explore
                  the map, get directions or connect
                  with the team before visiting.
                </p>
              </div>

              <span className="l21-office-badge">
                INDORE / PUNE
              </span>
            </div>
          </AnimatedSection>

          {/* ==================================================
              21.06 — INTERACTIVE GOOGLE MAPS STUDIO
          ================================================== */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.16}
          >
            <div
              className="l21-map-studio"
              role="group"
              aria-label="Select an InchToMilez office location"
            >

              {/* NATIVE RADIO SELECTION */}

              {offices.map((office,index) => (
                <input
                  key={office.id}
                  type="radio"
                  className="l21-radio"
                  id={`l21-office-${office.id}`}
                  name="l21-office-location"
                  defaultChecked={index === 0}
                  aria-label={`${office.city} office`}
                />
              ))}

              <div className="l21-interface">

                {/* ==========================================
                    OFFICE SWITCHING TABS
                ========================================== */}

                <div className="l21-tabs">
                  {offices.map((office) => (
                    <label
                      key={office.id}
                      htmlFor={`l21-office-${office.id}`}
                      className="l21-tab"
                    >
                      <span className="l21-tab-index">
                        LOCATION {office.number}
                      </span>

                      <strong className="l21-tab-city">
                        {office.city}
                      </strong>

                      <span className="l21-tab-label">
                        {office.label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* ==========================================
                    GOOGLE MAPS + OFFICE INFORMATION
                ========================================== */}

                <div className="l21-panels">

                  {offices.map((office) => {
                    const directionsUrl =
                      "https://www.google.com/maps/dir/?api=1" +
                      "&destination=" +
                      encodeURIComponent(office.mapsQuery) +
                      (office.mapsPlaceId
                        ? "&destination_place_id=" +
                          encodeURIComponent(office.mapsPlaceId)
                        : "");

                    const searchUrl =
                      "https://www.google.com/maps/search/?api=1" +
                      "&query=" +
                      encodeURIComponent(office.mapsQuery) +
                      (office.mapsPlaceId
                        ? "&query_place_id=" +
                          encodeURIComponent(office.mapsPlaceId)
                        : "");

                    const embedUrl =
                      "https://www.google.com/maps?q=" +
                      encodeURIComponent(office.mapsQuery) +
                      "&output=embed";

                    return (
                      <div
                        key={office.id}
                        className={
                          `l21-office-panel l21-panel-${office.id}`
                        }
                      >

                        {/* ==================================
                            LEFT — OFFICE DETAILS
                        ================================== */}

                        <div className="l21-office-info">
                          <span className="l21-office-meta">
                            INCHTOMILEZ /
                            {" "}
                            {office.label.toUpperCase()}
                          </span>

                          <h4 className="l21-office-title">
                            {office.city}
                          </h4>

                          <p className="l21-office-region">
                            {office.region}, India
                          </p>

                          <div className="l21-office-details">

                            {/* ADDRESS */}

                            <div className="l21-detail">
                              <span
                                className="l21-detail-icon"
                                aria-hidden="true"
                              >
                                <MapPin />
                              </span>

                              <div>
                                <small>OFFICE ADDRESS</small>
                                <address>
                                  {office.address}
                                </address>
                              </div>
                            </div>

                            {/* PHONE */}

                            <div className="l21-detail">
                              <span
                                className="l21-detail-icon"
                                aria-hidden="true"
                              >
                                <Phone />
                              </span>

                              <div>
                                <small>CALL THIS OFFICE</small>

                                <a href={office.phoneHref}>
                                  {office.phone}
                                </a>
                              </div>
                            </div>

                            {/* EMAIL */}

                            <div className="l21-detail">
                              <span
                                className="l21-detail-icon"
                                aria-hidden="true"
                              >
                                <Mail />
                              </span>

                              <div>
                                <small>EMAIL OUR TEAM</small>

                                <a href="mailto:hello@inchtomilez.com">
                                  hello@inchtomilez.com
                                </a>
                              </div>
                            </div>

                          </div>

                          {/* OFFICE-SPECIFIC ACTIONS */}

                          <div className="l21-office-actions">

                            <a
                              href={directionsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="l21-button l21-primary"
                              aria-label={`Get Google Maps directions to the ${office.city} office`}
                            >
                              <MapPin aria-hidden="true" />
                              Get Directions
                            </a>

                            <a
                              href={office.phoneHref}
                              className="l21-button l21-secondary"
                            >
                              <Phone aria-hidden="true" />
                              Call Office
                            </a>

                          </div>

                        </div>

                        {/* ==================================
                            RIGHT — LIVE GOOGLE MAPS EMBED
                        ================================== */}

                        <div className="l21-map-side">

                          <div className="l21-map-top">
                            <strong>
                              GOOGLE MAPS / LOCATION
                            </strong>

                            <span>
                              {office.label}
                            </span>
                          </div>

                          <iframe
                            title={`Google Maps location for InchToMilez ${office.city}`}
                            src={embedUrl}
                            className="l21-map-frame"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                          />

                          <div className="l21-map-bottom">
                            <span>
                              Explore this location on Google Maps
                            </span>

                            <a
                              href={searchUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="l21-map-link"
                            >
                              Open Google Maps
                              <ArrowRight aria-hidden="true" />
                            </a>
                          </div>

                        </div>

                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ==================================================
              21.07 — BRAND CLOSING / CTA
          ================================================== */}

          <AnimatedSection
            animation="fadeInUp"
            delay={0.18}
          >
            <div className="l21-final">
              <div>
                <strong>
                  From the First Conversation
                  to the Next Big Move.
                </strong>

                <p>
                  Strategy. Creative. Advertising.
                  Technology. One connected direction.
                </p>
              </div>

              <Link
                to={ROUTES.contact}
                className="l21-button l21-primary"
              >
                Start a Conversation
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />
    </section>
  );
})()}

{/* ================= END SECTION 21 ================= */}



    </div>
  );
}
