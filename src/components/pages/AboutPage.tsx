import { Link } from 'react-router';

import {
  ArrowRight,
  Award,
  CheckCircle,
  Target,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Code,
  Palette,
  Trophy,
  Zap,
  BarChart3,
  Heart,
  Sparkles,
  Rocket,
  MapPin,
  Megaphone,
  Search,
  Handshake,
  Building2
} from 'lucide-react';

import { useState } from 'react';

import { BentoGrid2 } from '../layout/BentoGrid2';
import { OutlinedText } from '../ui/OutlinedText';
import { AnimatedSection } from '../ui/AnimatedSection';
import { EarthGlobe } from '../ui/EarthGlobe';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { SEOHeadSSG } from '../SEOHeadSSG';

import {
  useSEO,
  StructuredData,
  organizationSchema,
  getWebPageSchema,
  getBreadcrumbSchema
} from '../../utils/seo-system';


export function AboutPage() {

  const seo = useSEO();

  const [email, setEmail] = useState('');


  /*
  |--------------------------------------------------------------------------
  | BREADCRUMBS
  |--------------------------------------------------------------------------
  */

  const breadcrumbs = [
    {
      name: 'Home',
      path: '/'
    },

    {
      name: 'About',
      path: '/about'
    },
  ];


  /*
  |--------------------------------------------------------------------------
  | NEWSLETTER
  |--------------------------------------------------------------------------
  */

  const handleNewsletterSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    console.log('Newsletter signup:', email);

    setEmail('');

  };


  /*
  |--------------------------------------------------------------------------
  | WHO WE ARE
  |--------------------------------------------------------------------------
  */

  const whoWeAreFeatures = [

    {
      icon: Rocket,

      label: 'Our Purpose',

      description:
        'To build brands people notice, remember and choose by connecting strategy, creative, media and technology around one clear direction.',
    },

    {
      icon: Target,

      label: 'Our Vision',

      description:
        'To build an independent Indian agency capable of thinking locally, operating nationally and creating ideas strong enough to travel across markets, mediums and cultures.',
    },

    {
      icon: Award,

      label: 'Our Approach',

      description:
        'We start with the business problem, find the idea, choose the right channels and build the experience around what the brand actually needs.',
    },

    {
      icon: Users,

      label: 'Founder-Led',

      description:
        'Founded by Aman Panwar in Indore, Inchtomilez stays close to the thinking, the client and the work that shapes every brand we touch.',
    },

    {
      icon: Globe,

      label: 'Our Presence',

      description:
        'Built in Indore and expanding through Pune in September 2026 — one connected agency, one standard of thinking, wherever the work needs to go.',
    },

    {
      icon: Trophy,

      label: 'Our Commitment',

      description:
        'We want every engagement to leave the brand clearer, stronger and more memorable than we found it — with better thinking behind every next move.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | WHAT DRIVES GROWTH
  |--------------------------------------------------------------------------
  */

  const growthPrinciples = [

    {
      icon: Target,

      label: 'Strategy',

      description:
        'Find what the brand needs to mean, who needs to care and where the real opportunity is. Strategy gives every next move a reason to exist.',
    },

    {
      icon: Palette,

      label: 'Creative',

      description:
        'Turn strategy into ideas, words and design people want to look at — and can still remember after the campaign is gone.',
    },

    {
      icon: TrendingUp,

      label: 'Performance',

      description:
        'Give the right idea the right audience at the right moment, then learn what earns attention, action and another look.',
    },

    {
      icon: Code,

      label: 'Technology',

      description:
        'Make the click worth it through websites, commerce and digital systems that turn attention into a useful brand experience.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | HOW WE WORK
  |--------------------------------------------------------------------------
  */

  const workingPrinciples = [

    {
      icon: Search,

      label: 'Understand First',

      description:
        'We ask what needs to change before asking where to advertise. Business, audience and context come before tactics.',
    },

    {
      icon: Shield,

      label: 'Communicate Clearly',

      description:
        'No theatre. No unnecessary jargon. What matters, what changed and what happens next should always be clear.',
    },

    {
      icon: CheckCircle,

      label: 'Launch Properly',

      description:
        'A strong idea still needs disciplined execution. Every detail, screen, placement and handoff should protect the same brand thought.',
    },

    {
      icon: BarChart3,

      label: 'Improve Continuously',

      description:
        'Launch is the beginning of learning, not the end of the work. We read the response, sharpen the system and keep moving.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | WHAT MAKES US DIFFERENT
  |--------------------------------------------------------------------------
  */

  const differenceFactors = [

    {
      label: 'Problem Before Platform',

      sublabel:
        'Understand what needs to change before choosing where to show up'
    },

    {
      label: 'One Brand. One Direction.',

      sublabel:
        'Every discipline works around the same central brand idea'
    },

    {
      label: 'Idea Before Format',

      sublabel:
        'Build the thought first, then let it travel across formats'
    },

    {
      label: 'Digital + Physical Thinking',

      sublabel:
        'The customer does not live in one channel; neither should the brand'
    },

    {
      label: 'Founder-Led Attention',

      sublabel:
        'Stay close to the work, the decisions and the client'
    },

    {
      label: 'Built To Evolve',

      sublabel:
        'Platforms change. Strong thinking should travel with them'
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | EXPERTISE
  |--------------------------------------------------------------------------
  */

  const expertiseAreas = [

    {
      icon: Target,

      label: 'Strategy & Brand Direction',

      description:
        'Positioning, market understanding and brand direction that decide what the business should say, where it should go and why people should care.',
    },

    {
      icon: Megaphone,

      label: 'Advertising & Media',

      description:
        'Paid media across search, social, video and high-intent moments — built around the audience, message and objective.',
    },

    {
      icon: Search,

      label: 'Search & Understandy',

      description:
        'Organic search, local discovery and content systems built to make the brand easier to find when people are already looking.',
    },

    {
      icon: Palette,

      label: 'Creative & Content',

      description:
        'Identity, campaigns, design, copy and content that turn brand strategy into something people can see, feel and remember.',
    },

    {
      icon: Code,

      label: 'Web & Digital Experiences',

      description:
        'Websites, commerce and digital products designed around clarity, speed and the moments between interest and action.',
    },

    {
      icon: Handshake,

      label: 'Connected Growth Management',

      description:
        'Keep strategy, creative, media and technology aligned as the work moves from launch to learning to scale.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | WHY CHOOSE US
  |--------------------------------------------------------------------------
  */

  const whyChooseReasons = [

    {
      icon: Target,

      label: 'One Connected Agency',

      description:
        'Strategy, creative, media, search and technology work better when they are solving the same brand problem together.',
    },

    {
      icon: Sparkles,

      label: 'Founder-Led Thinking',

      description:
        'The agency stays close to the business context, the central idea and the decisions that shape the final work.',
    },

    {
      icon: Trophy,

      label: 'Channel-Agnostic By Design',

      description:
        'The platform is never the strategy. We choose the medium because it fits the objective — not because it is easy to sell.',
    },

    {
      icon: Zap,

      label: 'Built To Launch',

      description:
        'Ideas are developed with the realities of creative, media and technology in mind, so they can survive contact with the real world.',
    },

    {
      icon: BarChart3,

      label: 'Data With Context',

      description:
        'Data should make the next decision smarter — not reduce the brand to a dashboard full of numbers without meaning.',
    },

    {
      icon: Heart,

      label: 'Long-Term Brand Building',

      description:
        'The goal is not one impressive campaign. It is a stronger brand after every campaign, launch and learning cycle.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | PROCESS
  |--------------------------------------------------------------------------
  */

  const processSteps = [

    {
      number: '01',

      label: 'Understand',

      description:
        'Business. Audience. Category. Competition. What is happening now — and what actually needs to change?',
    },

    {
      number: '02',

      label: 'Define',

      description:
        'Turn the problem into a clear objective, position, message, idea and role for every channel involved.',
    },

    {
      number: '03',

      label: 'Create',

      description:
        'Turn strategy into campaigns, content, design, websites and experiences that all feel like the same brand.',
    },

    {
      number: '04',

      label: 'Launch',

      description:
        'Put the work into the world with media, technology and execution aligned around one connected brand experience.',
    },

    {
      number: '05',

      label: 'Learn + Scale',

      description:
        'Read the response, improve what matters and take the strongest parts of the system further.',
    },

  ];


  /*
  |--------------------------------------------------------------------------
  | INDUSTRIES
  |--------------------------------------------------------------------------
  */

  const industries = [

    {
      label: 'Healthcare',

      sublabel:
        'Doctors, clinics, hospitals, healthcare services, wellness and patient-acquisition programs',
    },

    {
      label: 'Real Estate',

      sublabel:
        'Developers, residential and commercial projects, property brands and lead-generation campaigns',
    },

    {
      label: 'Education',

      sublabel:
        'Institutions, courses, learning brands, admissions marketing and education businesses',
    },

    {
      label: 'E-Commerce & Retail',

      sublabel:
        'D2C brands, online stores, retail businesses, marketplaces and product-led growth',
    },

    {
      label: 'Automotive',

      sublabel:
        'Dealerships, automotive services, accessories, products and customer-acquisition campaigns',
    },

    {
      label: 'Professional Services',

      sublabel:
        'Consulting firms, B2B companies, service businesses and growth-stage enterprises',
    },

  ];


  return (

    <div>


      {/* ================================================================
          SEO
      ================================================================ */}

      <SEOHeadSSG {...seo.meta} />


      <StructuredData
        data={[

          organizationSchema,

          getWebPageSchema(
            seo.meta.title,
            seo.meta.description,
            '/about',
            breadcrumbs
          ),

          getBreadcrumbSchema(breadcrumbs),

        ]}
      />


      {/* ================================================================
          BREADCRUMBS
      ================================================================ */}

      <Breadcrumbs
        items={breadcrumbs}
        showHomeIcon={true}
      />


      {/* ================================================================
          HERO
      ================================================================ */}

{/* ============================================================
    SECTION 01 — ABOUT US / DIGITAL GLOBE HERO
    Original EarthGlobe preserved.
    No new dependencies.
============================================================ */}

<section
  id="about-hero"
  className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 md:min-h-[100vh] flex flex-col justify-center relative overflow-hidden"
  aria-labelledby="about-hero-title"
>
  {/* ORIGINAL BACKGROUND OUTLINED TEXT */}
  <div
    className="absolute top-[8%] left-1/2 -translate-x-1/2 text-[10rem] md:text-[14rem] pointer-events-none font-bold text-outlined-visible-full select-none whitespace-nowrap"
    aria-hidden="true"
  >
    OUR STORY
  </div>

  {/* ORIGINAL DIGITAL GLOBE — UNCHANGED */}
  <div className="absolute top-[15%] md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[3%] pointer-events-none z-0 opacity-50 md:opacity-100">
    <AnimatedSection animation="fadeIn" delay={0.6}>
      {/* Mobile */}
      <div className="block md:hidden">
        <EarthGlobe
          size={350}
          particleCount={500}
          rotationSpeed={0.0008}
          glowIntensity={0.4}
          className="animate-float"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <EarthGlobe
          size={550}
          particleCount={500}
          rotationSpeed={0.0008}
          glowIntensity={0.4}
          className="animate-float"
        />
      </div>
    </AnimatedSection>
  </div>

  {/* UPGRADED EDITORIAL CONTENT */}
  <div className="relative z-10 w-full max-w-6xl mx-auto">
    <div
      className="relative max-w-[650px] pt-28 md:pt-0"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* EYEBROW */}
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
          ABOUT INCHTOMILEZ / WHO WE ARE
        </p>
      </AnimatedSection>

      {/* MAIN SEO H1 */}
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <h1
          id="about-hero-title"
          className="mb-6 text-[31px] sm:text-[36px] md:text-[41px] lg:text-[46px] font-semibold tracking-[-0.025em] leading-[1.16] text-white"
        >
          <span className="block">
            Different Disciplines.
          </span>
          <span className="block mt-1">
            One Connected Agency.
          </span>
        </h1>
      </AnimatedSection>

      {/* AGENCY INTRODUCTION */}
      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <p className="mb-4 max-w-[590px] text-[0.9375rem] leading-[1.8] text-gray-200">
          We're InchToMilez — a digital marketing,
          advertising and creative agency based in
          Indore.
        </p>
      </AnimatedSection>

      {/* BRAND PHILOSOPHY */}
      <AnimatedSection animation="fadeInUp" delay={0.4}>
        <p className="mb-4 max-w-[590px] text-[0.9375rem] leading-[1.8] text-gray-300">
          We bring branding, strategy, creative,
          media and technology together because
          a brand shouldn't have to work in pieces.
        </p>
        <p className="mb-7 max-w-[590px] text-[0.9375rem] leading-[1.8] text-gray-300">
          From the first idea to the final experience,
          we believe every part of marketing should
          move in the same direction.
        </p>
      </AnimatedSection>

      {/* CLOSING BRAND STATEMENT */}
      <AnimatedSection animation="fadeInUp" delay={0.5}>
        <div className="mb-8 border-l-2 border-white/30 pl-4">
          <p className="text-[0.9375rem] font-semibold leading-[1.6] text-white">
            One Brand. One Direction.
            Everything Connected.
          </p>
        </div>
      </AnimatedSection>

      {/* COMPACT CTA BUTTONS */}
      <AnimatedSection animation="fadeInUp" delay={0.6}>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#about-identity"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-yellow-500 px-5 py-2.5 text-[13px] font-semibold text-black transition-colors duration-200 hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Explore Our Story
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            to="/services"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/30 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore What We Do
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </div>

  {/* EXISTING SECTION BOUNDARY */}
  <div
    className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />
</section>
{/* ================= END SECTION 01 ================= */}


















{/* ============================================================
    SECTION 02 — WHO WE ARE
    CORRECTED ASYMMETRIC BENTO LAYOUT
    No new imports or dependencies
============================================================ */}

<section
  id="about-identity"
  aria-labelledby="about-identity-title"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-identity,
    #about-identity * {
      box-sizing: border-box;
    }

    #about-identity .ai-container {
      width: 100%;
      max-width: 1200px;
      padding: 0 24px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    #about-identity .ai-intro {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, .75fr);
      gap: 40px;
      align-items: end;
      margin-bottom: 30px;
    }

    #about-identity .ai-label {
      font-size: 11px;
      font-weight: 600;
      color: #aeb2bc;
      letter-spacing: .1em;
      margin-bottom: 16px;
    }

    #about-identity #about-identity-title {
      font-size: clamp(28px, 3vw, 40px);
      line-height: 1.22;
      letter-spacing: -.03em;
      font-weight: 600;
      color: #fff !important;
      max-width: 650px;
      margin: 0;
      text-wrap: balance;
    }

    #about-identity .ai-intro-copy {
      font-size: 14px;
      line-height: 1.8;
      color: #b9bdc5;
      max-width: 420px;
      margin: 0;
    }

    /* MAIN GRID — DIRECT CHILDREN ONLY */

    #about-identity .ai-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);
      grid-template-rows: repeat(2, minmax(205px, auto));
      gap: 14px;
      align-items: stretch;
    }

    #about-identity .ai-card {
      position: relative;
      min-width: 0;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: rgba(13,14,17,.92);
      padding: 27px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: border-color .25s ease, transform .25s ease;
    }

    #about-identity .ai-card-main {
      grid-row: 1 / 3;
      min-height: 424px;
      padding: clamp(28px, 3vw, 42px);
      justify-content: space-between;
      background: linear-gradient(
        135deg,
        rgba(29,30,35,.96),
        rgba(10,11,14,.97)
      );
    }

    #about-identity .ai-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    #about-identity .ai-index {
      font-size: 11px;
      color: #9296a0;
      font-weight: 500;
      letter-spacing: .08em;
    }

    #about-identity .ai-category {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .08em;
      color: #b9bdc6;
    }

    #about-identity .ai-card h3 {
      color: #fff !important;
      font-weight: 600;
      letter-spacing: -.02em;
      line-height: 1.3;
      margin: 0 0 12px;
      font-size: 19px;
    }

    #about-identity .ai-card-main h3 {
      font-size: clamp(26px, 2.7vw, 36px);
      max-width: 500px;
      line-height: 1.2;
    }

    #about-identity .ai-card p {
      color: #b3b7c0;
      font-size: 13px;
      line-height: 1.85;
      margin: 0;
    }

    #about-identity .ai-card-main p {
      max-width: 540px;
      font-size: 14px;
    }

    #about-identity .ai-icon {
      width: 40px;
      height: 40px;
      border-radius: 9px;
      border: 1px solid rgba(255,255,255,.17);
      background: rgba(255,255,255,.04);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    #about-identity .ai-icon svg {
      width: 19px;
      height: 19px;
    }

    #about-identity .ai-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      border-top: 1px solid rgba(255,255,255,.1);
      padding-top: 20px;
      margin-top: 30px;
    }

    #about-identity .ai-tag {
      border: 1px solid rgba(255,255,255,.15);
      padding: 7px 11px;
      border-radius: 6px;
      color: #c4c7ce;
      font-size: 11px;
    }

    /* PRINCIPLE CARDS */

    #about-identity .ai-principles {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-top: 14px;
    }

    #about-identity .ai-principle {
      min-height: 205px;
      gap: 22px;
    }

    /* CLOSING BAR */

    #about-identity .ai-footer {
      margin-top: 14px;
      padding: 22px 25px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(13,14,17,.9);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    #about-identity .ai-footer h3 {
      color: #fff !important;
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 6px;
    }

    #about-identity .ai-footer p {
      font-size: 12px;
      color: #b2b6be;
      line-height: 1.7;
      margin: 0;
    }

    #about-identity .ai-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      min-height: 42px;
      padding: 10px 17px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 8px;
      background: #eab308;
      color: #000;
      text-decoration: none;
    }

    #about-identity .ai-button svg {
      width: 15px;
      height: 15px;
    }

    /* INTERACTIONS */

    @media (hover:hover) and (pointer:fine) {
      #about-identity .ai-card:hover {
        border-color: rgba(255,255,255,.38);
        transform: translateY(-3px);
      }

      #about-identity .ai-button:hover {
        background: #facc15;
      }
    }

    #about-identity a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 3px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #about-identity .ai-intro {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #about-identity .ai-grid {
        grid-template-columns: repeat(2, minmax(0,1fr));
        grid-template-rows: auto auto;
      }

      #about-identity .ai-card-main {
        grid-row: auto;
        grid-column: 1 / -1;
        min-height: 330px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-identity .ai-container {
        padding: 0 18px;
      }

      #about-identity #about-identity-title {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-identity .ai-intro-copy {
        font-size: 13px;
      }

      #about-identity .ai-grid,
      #about-identity .ai-principles {
        grid-template-columns: minmax(0,1fr);
      }

      #about-identity .ai-card-main {
        grid-column: auto;
        min-height: 380px;
        padding: 25px;
      }

      #about-identity .ai-card {
        padding: 23px;
      }

      #about-identity .ai-card-main h3 {
        font-size: 28px;
      }

      #about-identity .ai-principle {
        min-height: 0;
      }

      #about-identity .ai-footer {
        flex-direction: column;
        align-items: flex-start;
      }

      #about-identity .ai-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion:reduce) {
      #about-identity .ai-card {
        transition:none;
      }

      #about-identity .ai-card:hover {
        transform:none;
      }
    }
  `}</style>

  <div className="ai-container">

    {/* 02.01 — INTRODUCTION */}
    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header className="ai-intro">

        <div>
          <p className="ai-label">
            02 / WHO WE ARE
          </p>

          <h2 id="about-identity-title">
            We Don't Just Do Marketing.
            We Make the Pieces Work Together.
          </h2>
        </div>

        <p className="ai-intro-copy">
          Some agencies make ads. Some build websites.
          Some manage social media. We believe the
          real value comes from connecting the work —
          so every channel supports the same brand,
          message and objective.
        </p>

      </header>
    </AnimatedSection>

    {/* 02.02 — MAIN ASYMMETRIC BENTO */}
    <div className="ai-grid">

      {/* LARGE CARD — DIRECT GRID CHILD */}
      <article className="ai-card ai-card-main">
        <div className="ai-card-top">
          <span className="ai-category">THE AGENCY</span>
          <span className="ai-index">01 / 03</span>
        </div>

        <div className="my-10">
          <h3>
            Independent in Thinking.
            Connected in Everything We Do.
          </h3>

          <p>
            InchToMilez is an independent digital marketing
            and advertising agency in Indore. We bring
            brand strategy, creative communication,
            advertising, search, media and technology
            together to help businesses communicate
            clearly and create consistent brand experiences.
          </p>
        </div>

        <div className="ai-tags">
          {[
            "Brand Strategy",
            "Creative",
            "Advertising",
            "Digital",
            "Technology"
          ].map((tag) => (
            <span className="ai-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* PURPOSE */}
      <article className="ai-card">
        <div className="ai-card-top mb-6">
          <span className="ai-icon">
            <Target aria-hidden="true" />
          </span>
          <span className="ai-index">02 / 03</span>
        </div>

        <div className="mt-auto">
          <h3>Our Purpose</h3>
          <p>
            To help businesses build brands that people
            notice, understand and remember — with
            strategy, creative and execution moving
            in the same direction.
          </p>
        </div>
      </article>

      {/* VISION */}
      <article className="ai-card">
        <div className="ai-card-top mb-6">
          <span className="ai-icon">
            <Globe aria-hidden="true" />
          </span>
          <span className="ai-index">03 / 03</span>
        </div>

        <div className="mt-auto">
          <h3>Our Vision</h3>
          <p>
            To grow as an independent Indian agency
            where thoughtful strategy, original
            creative work and connected marketing
            help businesses across markets.
          </p>
        </div>
      </article>

    </div>

    {/* 02.03 — THREE PRINCIPLES */}
    <div className="ai-principles">

      {[
        {
          number: "01",
          icon: Search,
          title: "Understand the Business",
          description:
            "Know the audience, competition and what needs to change before recommending a channel."
        },
        {
          number: "02",
          icon: Palette,
          title: "Connect the Thinking",
          description:
            "Bring the idea, design, communication and media together around one brand direction."
        },
        {
          number: "03",
          icon: TrendingUp,
          title: "Keep Improving",
          description:
            "Use feedback, performance and audience response to make the next decision better."
        }
      ].map((item) => {
        const CardIcon = item.icon;

        return (
          <article
            className="ai-card ai-principle"
            key={item.number}
          >
            <div className="ai-card-top">
              <span className="ai-icon">
                <CardIcon aria-hidden="true" />
              </span>
              <span className="ai-index">
                {item.number}
              </span>
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        );
      })}

    </div>

    {/* 02.04 — CTA */}
    <div className="ai-footer">

      <div>
        <h3>Different Expertise. One Shared Direction.</h3>
        <p>
          From brand positioning to digital experiences,
          we connect the pieces that help your business
          communicate and grow.
        </p>
      </div>

      <Link to="/contact" className="ai-button">
        Let's Talk
        <ArrowRight aria-hidden="true" />
      </Link>

    </div>

  </div>

</section>

{/* ================= END SECTION 02 ================= */}










{/* ============================================================
    SECTION 03 — HOW A BRAND MOVES
    Connected Marketing System

    Existing black grid background
    Existing Raleway typography
    White/grey text only
    No additional imports
    No new dependencies
============================================================ */}

<section
  id="about-connected-system"
  aria-labelledby="about-connected-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06]"
  style={{
    paddingBlock: "clamp(60px, 7vw, 96px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  <style>{`
    #about-connected-system,
    #about-connected-system * {
      box-sizing: border-box;
    }

    #about-connected-system .acs-container {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    #about-connected-system .acs-intro {
      max-width: 750px;
      margin: 0 auto 38px;
      text-align: center;
    }

    #about-connected-system .acs-eyebrow {
      margin: 0 0 15px;
      color: #aeb2bc;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #about-connected-system .acs-heading {
      margin: 0;
      color: #fff !important;
      font-size: clamp(27px, 3.1vw, 42px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.18;
      text-wrap: balance;
    }

    #about-connected-system .acs-description {
      max-width: 660px;
      margin: 17px auto 0;
      color: #b8bcc5;
      font-size: 14px;
      line-height: 1.85;
    }

    /* CONNECTED SYSTEM */

    #about-connected-system .acs-system {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      min-width: 0;
    }

    #about-connected-system .acs-system::before {
      content: "";
      position: absolute;
      top: 43px;
      left: 9%;
      right: 9%;
      height: 1px;
      background: rgba(255,255,255,.18);
      z-index: 0;
      pointer-events: none;
    }

    #about-connected-system .acs-card {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 330px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 12px;
      background: rgba(12,13,16,.94);
      transition:
        transform .25s ease,
        border-color .25s ease,
        background-color .25s ease;
    }

    #about-connected-system .acs-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 45px;
    }

    #about-connected-system .acs-icon {
      width: 39px;
      height: 39px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 9px;
      background: #17191d;
      color: #fff;
    }

    #about-connected-system .acs-icon svg {
      width: 19px;
      height: 19px;
    }

    #about-connected-system .acs-number {
      color: #898d96;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .08em;
    }

    #about-connected-system .acs-card h3 {
      margin: 0 0 12px;
      color: #fff !important;
      font-size: 21px;
      font-weight: 600;
      line-height: 1.3;
    }

    #about-connected-system .acs-card p {
      margin: 0;
      color: #aeb3bc;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-connected-system .acs-card-bottom {
      margin-top: auto;
      padding-top: 25px;
    }

    #about-connected-system .acs-card-label {
      display: block;
      margin-top: 24px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,.1);
      color: #858993;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    /* CENTRAL CONCLUSION */

    #about-connected-system .acs-conclusion {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 14px;
      padding: 26px 30px;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 12px;
      background: linear-gradient(
        110deg,
        rgba(26,27,31,.96),
        rgba(10,11,13,.96)
      );
    }

    #about-connected-system .acs-conclusion h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-connected-system .acs-conclusion p {
      max-width: 680px;
      margin: 0;
      color: #b4b8c0;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-connected-system .acs-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 42px;
      padding: 10px 17px;
      border: 1px solid #eab308;
      border-radius: 8px;
      color: #050505;
      background: #eab308;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color .2s ease;
    }

    #about-connected-system .acs-action svg {
      width: 15px;
      height: 15px;
    }

    /* DECORATIVE OUTLINE */

    #about-connected-system .acs-outline {
      position: absolute;
      top: 5%;
      right: -3%;
      z-index: 0;
      color: transparent;
      font-size: clamp(110px, 17vw, 240px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: 1;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* HOVER */

    @media (hover: hover) and (pointer: fine) {
      #about-connected-system .acs-card:hover {
        border-color: rgba(255,255,255,.38);
        background: rgba(24,25,29,.97);
        transform: translateY(-4px);
      }

      #about-connected-system .acs-action:hover {
        background: #facc15;
      }
    }

    #about-connected-system a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #about-connected-system .acs-system {
        grid-template-columns: repeat(2, minmax(0,1fr));
      }

      #about-connected-system .acs-system::before {
        display: none;
      }

      #about-connected-system .acs-card {
        min-height: 270px;
      }

      #about-connected-system .acs-card-top {
        margin-bottom: 30px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-connected-system .acs-container {
        padding-inline: 18px;
      }

      #about-connected-system .acs-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-connected-system .acs-description {
        font-size: 13px;
      }

      #about-connected-system .acs-system {
        grid-template-columns: minmax(0,1fr);
        gap: 11px;
      }

      #about-connected-system .acs-card {
        min-height: 0;
        padding: 22px;
      }

      #about-connected-system .acs-card-top {
        margin-bottom: 28px;
      }

      #about-connected-system .acs-card-bottom {
        padding-top: 0;
      }

      #about-connected-system .acs-card h3 {
        font-size: 20px;
      }

      #about-connected-system .acs-card-label {
        margin-top: 18px;
      }

      #about-connected-system .acs-conclusion {
        grid-template-columns: 1fr;
        padding: 23px;
      }

      #about-connected-system .acs-action {
        width: 100%;
      }

      #about-connected-system .acs-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-connected-system .acs-card,
      #about-connected-system .acs-action {
        transition: none;
      }

      #about-connected-system .acs-card:hover {
        transform: none;
      }
    }
  `}</style>

  {/* BACKGROUND WORD */}
  <div className="acs-outline" aria-hidden="true">
    CONNECT
  </div>

  <div className="acs-container">

    {/* SECTION INTRO */}
    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header className="acs-intro">

        <p className="acs-eyebrow">
          03 / HOW A BRAND MOVES
        </p>

        <h2 id="about-connected-heading" className="acs-heading">
          Good Marketing Is Not a Collection of Departments.
        </h2>

        <p className="acs-description">
          People don't experience a brand one department at a time.
          We connect strategy, creative, media and technology
          so every touchpoint works towards the same objective.
        </p>

      </header>
    </AnimatedSection>

    {/* CONNECTED DISCIPLINES */}
    <div className="acs-system">

      {[
        {
          number: "01",
          icon: Target,
          title: "Strategy",
          description:
            "Understand the business, audience and opportunity before deciding what the brand should say and where it should show up.",
          label: "FIND THE DIRECTION"
        },
        {
          number: "02",
          icon: Palette,
          title: "Creative",
          description:
            "Turn clear thinking into ideas, design, content and communication people can recognise and remember.",
          label: "BUILD THE IDEA"
        },
        {
          number: "03",
          icon: Megaphone,
          title: "Media",
          description:
            "Choose the channels and placements that connect the message with the right audience.",
          label: "REACH THE AUDIENCE"
        },
        {
          number: "04",
          icon: Code,
          title: "Technology",
          description:
            "Connect attention with useful websites, digital experiences and systems that make the next step easier.",
          label: "MAKE IT WORK"
        }
      ].map((discipline) => {
        const DisciplineIcon = discipline.icon;

        return (
          <article
            key={discipline.number}
            className="acs-card"
          >
            <div className="acs-card-top">
              <span className="acs-icon">
                <DisciplineIcon aria-hidden="true" />
              </span>

              <span className="acs-number">
                {discipline.number} / 04
              </span>
            </div>

            <div className="acs-card-bottom">
              <h3>{discipline.title}</h3>
              <p>{discipline.description}</p>

              <span className="acs-card-label">
                {discipline.label}
              </span>
            </div>
          </article>
        );
      })}

    </div>

    {/* CLOSING PANEL */}
    <AnimatedSection animation="fadeInUp" delay={0.12}>
      <div className="acs-conclusion">
        <div>
          <h3>Four Disciplines. One Connected Brand Experience.</h3>
          <p>
            The value is not in having more marketing channels.
            It's in making the right ones work together.
          </p>
        </div>

        <Link to="/services" className="acs-action">
          Explore Our Services
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </AnimatedSection>

  </div>
</section>

{/* ================= END SECTION 03 ================= */}








{/* ============================================================
    SECTION 04 — HOW WE WORK WITH YOU
    INCHTOMILEZ / ABOUT US

    Layout: 42% / 58% Editorial Split
    Right: Four Interactive Principles
    Footer: Compact Conversion Panel

    Existing dependencies only:
    Link, ArrowRight, Users, Shield,
    CheckCircle, BarChart3, AnimatedSection

    No additional H1 / No new packages
============================================================ */}

<section
  id="about-working-relationship"
  aria-labelledby="about-working-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06]"
  style={{
    paddingBlock: "clamp(64px, 7vw, 100px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ========================================================
      04.01 — SCOPED STYLES
  ======================================================== */}

  <style>{`
    #about-working-relationship,
    #about-working-relationship * {
      box-sizing: border-box;
    }

    #about-working-relationship .awr-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* MAIN EDITORIAL COMPOSITION */

    #about-working-relationship .awr-layout {
      display: grid;
      grid-template-columns:
        minmax(0, 42fr) minmax(0, 58fr);
      gap: clamp(28px, 5vw, 70px);
      align-items: start;
      min-width: 0;
    }

    /* LEFT — INTRODUCTION */

    #about-working-relationship .awr-intro {
      min-width: 0;
      width: 100%;
      text-align: left;
    }

    #about-working-relationship .awr-eyebrow {
      display: flex;
      align-items: center;
      gap: 11px;
      margin: 0 0 19px;
      color: #acb0b9;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    #about-working-relationship .awr-eyebrow::before {
      content: "";
      width: 22px;
      height: 1px;
      flex: 0 0 22px;
      background: rgba(255,255,255,.5);
    }

    #about-working-relationship .awr-title {
      margin: 0 0 22px;
      max-width: 460px;
      color: #fff !important;
      font-family: 'Raleway', sans-serif;
      font-size: clamp(28px, 3vw, 41px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.2;
      overflow-wrap: break-word;
      text-wrap: balance;
    }

    #about-working-relationship .awr-description {
      max-width: 410px;
      margin: 0 0 16px;
      color: #b8bcc5;
      font-size: 14px;
      line-height: 1.85;
    }

    #about-working-relationship .awr-description-lead {
      color: #e0e2e6;
      font-size: 15px;
    }

    /* EDITORIAL STATEMENT */

    #about-working-relationship .awr-statement {
      margin-top: 30px;
      max-width: 420px;
      padding: 22px 24px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background:
        linear-gradient(
          135deg,
          rgba(29,30,34,.94),
          rgba(12,13,16,.92)
        );
    }

    #about-working-relationship .awr-statement-label {
      display: block;
      margin-bottom: 13px;
      color: #a9adb5;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-working-relationship .awr-statement p {
      margin: 0;
      color: #fff;
      font-size: clamp(17px, 1.7vw, 21px);
      font-weight: 600;
      letter-spacing: -.02em;
      line-height: 1.5;
    }

    /* RIGHT — PRINCIPLE LIST */

    #about-working-relationship .awr-principles {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 11px;
      min-width: 0;
    }

    #about-working-relationship .awr-card {
      position: relative;
      display: grid;
      grid-template-columns:
        42px minmax(0, 1fr) 24px;
      align-items: start;
      gap: 18px;
      min-width: 0;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(12,13,16,.91);
      overflow: hidden;
      transition:
        transform .25s ease,
        border-color .25s ease,
        background-color .25s ease;
    }

    #about-working-relationship .awr-card::before {
      content: "";
      position: absolute;
      top: 16px;
      bottom: 16px;
      left: 0;
      width: 2px;
      background: rgba(255,255,255,.55);
      transform: scaleY(0);
      transform-origin: center;
      transition: transform .25s ease;
    }

    #about-working-relationship .awr-card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 9px;
      background: rgba(255,255,255,.045);
      color: #fff;
    }

    #about-working-relationship .awr-card-icon svg {
      width: 19px;
      height: 19px;
    }

    #about-working-relationship .awr-card-content {
      min-width: 0;
    }

    #about-working-relationship .awr-card-heading {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -.018em;
    }

    #about-working-relationship .awr-card-copy {
      max-width: 490px;
      margin: 0;
      color: #afb4bd;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-working-relationship .awr-card-number {
      padding-top: 4px;
      color: #898d96;
      font-size: 11px;
      font-weight: 600;
      text-align: right;
    }

    /* BOTTOM CONVERSION PANEL */

    #about-working-relationship .awr-footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 22px;
      align-items: center;
      margin-top: 22px;
      padding: 24px 27px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(18,19,22,.9);
    }

    #about-working-relationship .awr-footer-heading {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-working-relationship .awr-footer-copy {
      margin: 0;
      color: #aeb3bc;
      font-size: 13px;
      line-height: 1.75;
    }

    #about-working-relationship .awr-actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    #about-working-relationship .awr-button {
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
      line-height: 1.3;
      text-decoration: none;
      white-space: nowrap;
      transition:
        background-color .2s ease,
        border-color .2s ease,
        transform .2s ease;
    }

    #about-working-relationship .awr-button svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      transition: transform .2s ease;
    }

    /* BACKGROUND TYPOGRAPHY */

    #about-working-relationship .awr-outline {
      position: absolute;
      top: 7%;
      left: -3%;
      z-index: 0;
      color: transparent;
      font-size: clamp(105px, 17vw, 240px);
      font-weight: 800;
      letter-spacing: -.065em;
      line-height: 1;
      white-space: nowrap;
      -webkit-text-stroke:
        1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* HOVER */

    @media (hover: hover) and (pointer: fine) {
      #about-working-relationship .awr-card:hover {
        background: rgba(23,24,28,.96);
        border-color: rgba(255,255,255,.38);
        transform: translateX(4px);
      }

      #about-working-relationship .awr-card:hover::before {
        transform: scaleY(1);
      }

      #about-working-relationship .awr-button:hover {
        background: #facc15;
        border-color: #facc15;
        transform: translateY(-2px);
      }

      #about-working-relationship .awr-button:hover svg {
        transform: translateX(3px);
      }
    }

    #about-working-relationship a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #about-working-relationship .awr-layout {
        grid-template-columns: minmax(0, 1fr);
        gap: 32px;
      }

      #about-working-relationship .awr-intro {
        max-width: 700px;
      }

      #about-working-relationship .awr-title,
      #about-working-relationship .awr-description {
        max-width: 650px;
      }

      #about-working-relationship .awr-statement {
        max-width: 650px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-working-relationship .awr-shell {
        padding-inline: 18px;
      }

      #about-working-relationship .awr-title {
        font-size: clamp(27px, 7vw, 34px);
        line-height: 1.23;
      }

      #about-working-relationship .awr-description {
        font-size: 13px;
        line-height: 1.8;
      }

      #about-working-relationship .awr-statement {
        margin-top: 24px;
        padding: 20px;
      }

      #about-working-relationship .awr-card {
        grid-template-columns:
          37px minmax(0, 1fr) 20px;
        padding: 19px 16px;
        gap: 12px;
      }

      #about-working-relationship .awr-card-icon {
        width: 37px;
        height: 37px;
      }

      #about-working-relationship .awr-card-icon svg {
        width: 17px;
        height: 17px;
      }

      #about-working-relationship .awr-card-heading {
        font-size: 16px;
      }

      #about-working-relationship .awr-card-copy {
        font-size: 12px;
      }

      #about-working-relationship .awr-footer {
        grid-template-columns: minmax(0, 1fr);
        padding: 22px;
        gap: 18px;
      }

      #about-working-relationship .awr-button {
        width: 100%;
      }

      #about-working-relationship .awr-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-working-relationship .awr-card,
      #about-working-relationship .awr-card::before,
      #about-working-relationship .awr-button,
      #about-working-relationship .awr-button svg {
        transition: none;
      }

      #about-working-relationship .awr-card:hover,
      #about-working-relationship .awr-button:hover {
        transform: none;
      }
    }
  `}</style>

  {/* ========================================================
      04.02 — DECORATIVE BACKGROUND
  ======================================================== */}

  <div
    className="awr-outline"
    aria-hidden="true"
  >
    TOGETHER
  </div>

  <div className="awr-shell">

    {/* ======================================================
        04.03 — TWO-COLUMN EDITORIAL LAYOUT
    ====================================================== */}

    <div className="awr-layout">

      {/* LEFT — INTRODUCTION */}

      <div className="awr-intro">
        <AnimatedSection
          animation="fadeInUp"
          delay={0.08}
        >
          <p className="awr-eyebrow">
            04 / HOW WE WORK WITH YOU
          </p>

          <h2
            id="about-working-heading"
            className="awr-title"
          >
            Good Work Starts With
            Understanding Each Other.
          </h2>

          <p className="awr-description awr-description-lead">
            A great working relationship isn't
            built on presentations, complicated
            terminology or endless approvals.
          </p>

          <p className="awr-description">
            It starts with understanding your
            business, asking the right questions
            and being clear about what matters.
          </p>

          <p className="awr-description">
            At InchToMilez, we believe in
            staying involved, keeping
            communication straightforward
            and making every decision count.
          </p>
        </AnimatedSection>

        {/* EDITORIAL STATEMENT */}

        <AnimatedSection
          animation="fadeInUp"
          delay={0.14}
        >
          <div className="awr-statement">
            <span className="awr-statement-label">
              OUR WORKING PHILOSOPHY
            </span>

            <p>
              How We Work Together Matters
              Just As Much As What We Create.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* RIGHT — FOUR WORKING PRINCIPLES */}

      <div
        className="awr-principles"
        aria-label="How InchToMilez works with clients"
      >
        {[
          {
            number: "01",
            icon: Users,
            title: "We Listen Before We Recommend",
            description:
              "Before discussing campaigns, we want to understand your business, challenges, audience and priorities. The first conversation should be about you — not a list of services."
          },
          {
            number: "02",
            icon: Shield,
            title: "We Keep Things Clear",
            description:
              "You should know what we're working on, why it matters and what happens next. We believe good communication makes better work possible."
          },
          {
            number: "03",
            icon: CheckCircle,
            title: "We Stay Close to the Details",
            description:
              "From the first idea to the final creative, we care about how the work comes together. Small decisions can make a big difference to how a brand is experienced."
          },
          {
            number: "04",
            icon: BarChart3,
            title: "We Learn and Improve Together",
            description:
              "Feedback, audience response and performance help guide the next decision. We believe in reviewing the work, understanding what changed and improving thoughtfully."
          }
        ].map((principle) => {
          const PrincipleIcon = principle.icon;

          return (
            <article
              className="awr-card"
              key={principle.number}
            >
              {/* ICON */}

              <div className="awr-card-icon">
                <PrincipleIcon aria-hidden="true" />
              </div>

              {/* CONTENT */}

              <div className="awr-card-content">
                <h3 className="awr-card-heading">
                  {principle.title}
                </h3>

                <p className="awr-card-copy">
                  {principle.description}
                </p>
              </div>

              {/* NUMBER */}

              <span className="awr-card-number">
                {principle.number}
              </span>
            </article>
          );
        })}
      </div>

    </div>

    {/* ======================================================
        04.04 — CLOSING CONVERSION PANEL
    ====================================================== */}

    <AnimatedSection
      animation="fadeInUp"
      delay={0.12}
    >
      <div className="awr-footer">

        <div>
          <h3 className="awr-footer-heading">
            A Better Conversation Is a Good Place to Start.
          </h3>

          <p className="awr-footer-copy">
            Tell us about your business, your challenges
            and what you're working towards.
            We'll discuss the next steps together.
          </p>
        </div>

        <div className="awr-actions">
          <Link
            to="/contact"
            className="awr-button"
          >
            Let's Talk

            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

      </div>
    </AnimatedSection>

  </div>

  {/* ========================================================
      04.05 — SECTION BOUNDARY
  ======================================================== */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 04 ================= */}



















{/* ============================================================
    SECTION 05 — THE FOUNDER & OUR STORY
    INCHTOMILEZ ABOUT US

    05.01 Editorial Introduction
    05.02 Founder Identity + Story
    05.03 Three-Stage Agency Evolution
    05.04 Closing Brand Statement

    Theme: Original black grid + glassmorphism
    Typography: Existing Raleway
    No new imports or dependencies
============================================================ */}

<section
  id="about-founder"
  aria-labelledby="about-founder-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-founder,
    #about-founder * {
      box-sizing: border-box;
    }

    #about-founder .af-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding: 0 24px;
      margin: 0 auto;
    }

    #about-founder .af-eyebrow {
      margin: 0 0 16px;
      color: #aeb2bc;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    #about-founder .af-heading {
      max-width: 760px;
      margin: 0 0 18px;
      color: #fff !important;
      font-size: clamp(28px, 3.1vw, 42px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-founder .af-lead {
      max-width: 735px;
      margin: 0;
      color: #b9bdc5;
      font-size: 14px;
      line-height: 1.85;
    }

    /* FOUNDER EDITORIAL GRID */

    #about-founder .af-feature {
      display: grid;
      grid-template-columns: minmax(0, 45fr) minmax(0, 55fr);
      gap: 14px;
      align-items: stretch;
      margin-top: 36px;
    }

    #about-founder .af-panel {
      min-width: 0;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      overflow: hidden;
      background: rgba(12,13,16,.91);
    }

    #about-founder .af-profile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 48px;
      min-height: 425px;
      padding: clamp(25px, 3vw, 38px);
      background: linear-gradient(
        145deg,
        rgba(30,31,36,.97),
        rgba(10,11,13,.97)
      );
    }

    #about-founder .af-panel-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    #about-founder .af-small-label {
      color: #aeb2bc;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #about-founder .af-index {
      color: #8e929c;
      font-size: 11px;
    }

    #about-founder .af-monogram {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 78px;
      height: 78px;
      margin-bottom: 28px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 15px;
      background: rgba(255,255,255,.035);
      color: #fff;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -.06em;
    }

    #about-founder .af-name {
      margin: 0 0 9px;
      color: #fff !important;
      font-size: clamp(27px, 2.8vw, 37px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.15;
    }

    #about-founder .af-role {
      margin: 0;
      color: #b9bdc5;
      font-size: 13px;
      line-height: 1.7;
    }

    #about-founder .af-profile-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-top: 1px solid rgba(255,255,255,.12);
      padding-top: 20px;
      margin-top: 28px;
      color: #aeb2bc;
      font-size: 11px;
    }

    /* STORY PANEL */

    #about-founder .af-story {
      padding: clamp(25px, 3vw, 38px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 35px;
    }

    #about-founder .af-story h3 {
      margin: 0 0 22px;
      color: #fff !important;
      font-size: clamp(23px, 2.3vw, 31px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.25;
      text-wrap: balance;
    }

    #about-founder .af-story p {
      max-width: 560px;
      margin: 0 0 16px;
      color: #b9bdc5;
      font-size: 13px;
      line-height: 1.9;
    }

    #about-founder .af-story p:last-child {
      margin-bottom: 0;
    }

    #about-founder .af-story-signature {
      border-top: 1px solid rgba(255,255,255,.12);
      padding-top: 22px;
      color: #e5e6e9;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.65;
    }

    /* THE AGENCY JOURNEY */

    #about-founder .af-journey-header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
      margin: 48px 0 20px;
    }

    #about-founder .af-journey-heading {
      margin: 0;
      color: #fff !important;
      font-size: clamp(21px, 2.2vw, 29px);
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.3;
    }

    #about-founder .af-journey-caption {
      margin: 0;
      color: #9297a0;
      font-size: 11px;
      line-height: 1.6;
    }

    #about-founder .af-journey {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    #about-founder .af-step {
      position: relative;
      min-width: 0;
      min-height: 205px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      background: rgba(12,13,16,.9);
      transition:
        transform .25s ease,
        border-color .25s ease,
        background-color .25s ease;
    }

    #about-founder .af-step-index {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      color: #979ba4;
      font-size: 11px;
      font-weight: 600;
    }

    #about-founder .af-step-dot {
      display: block;
      width: 7px;
      height: 7px;
      border: 1px solid rgba(255,255,255,.6);
      border-radius: 50%;
      background: rgba(255,255,255,.15);
    }

    #about-founder .af-step h3 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-founder .af-step p {
      margin: 0;
      color: #afb4bd;
      font-size: 12px;
      line-height: 1.8;
    }

    /* FINAL STATEMENT */

    #about-founder .af-footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 24px;
      margin-top: 14px;
      padding: 25px 28px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 11px;
      background: rgba(20,21,25,.92);
    }

    #about-founder .af-footer h3 {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-founder .af-footer p {
      max-width: 630px;
      margin: 0;
      color: #afb4bd;
      font-size: 12px;
      line-height: 1.75;
    }

    #about-founder .af-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
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

    #about-founder .af-button svg {
      width: 15px;
      height: 15px;
    }

    /* DECORATIVE WORD */

    #about-founder .af-outline {
      position: absolute;
      top: 8%;
      right: -3%;
      z-index: 0;
      color: transparent;
      font-size: clamp(110px, 17vw, 240px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: 1;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* HOVER */

    @media (hover: hover) and (pointer: fine) {
      #about-founder .af-step:hover {
        transform: translateY(-4px);
        border-color: rgba(255,255,255,.36);
        background: rgba(24,25,29,.95);
      }

      #about-founder .af-button:hover {
        background: #facc15;
      }
    }

    #about-founder a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 900px) {
      #about-founder .af-feature {
        grid-template-columns: 1fr;
      }

      #about-founder .af-profile {
        min-height: 340px;
      }

      #about-founder .af-story {
        min-height: 0;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-founder .af-shell {
        padding-inline: 18px;
      }

      #about-founder .af-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-founder .af-lead {
        font-size: 13px;
      }

      #about-founder .af-feature {
        margin-top: 27px;
      }

      #about-founder .af-profile,
      #about-founder .af-story {
        padding: 23px;
      }

      #about-founder .af-profile {
        min-height: 300px;
      }

      #about-founder .af-name {
        font-size: 29px;
      }

      #about-founder .af-story h3 {
        font-size: 24px;
      }

      #about-founder .af-journey-header {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 35px;
        gap: 8px;
      }

      #about-founder .af-journey {
        grid-template-columns: 1fr;
      }

      #about-founder .af-step {
        min-height: 0;
        padding: 22px;
      }

      #about-founder .af-step-index {
        margin-bottom: 24px;
      }

      #about-founder .af-footer {
        grid-template-columns: 1fr;
        padding: 22px;
        gap: 18px;
      }

      #about-founder .af-button {
        width: 100%;
      }

      #about-founder .af-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-founder .af-step,
      #about-founder .af-button {
        transition: none;
      }

      #about-founder .af-step:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 05.01 — DECORATIVE BACKGROUND */}
  <div className="af-outline" aria-hidden="true">
    FOUNDER
  </div>

  <div className="af-shell">

    {/* 05.02 — EDITORIAL INTRODUCTION */}
    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header>
        <p className="af-eyebrow">
          05 / THE STORY BEHIND INCHTOMILEZ
        </p>

        <h2 id="about-founder-heading" className="af-heading">
          Built From Experience.
          Shaped by a Different Way of Thinking.
        </h2>

        <p className="af-lead">
          InchToMilez began with a practical understanding
          of digital marketing, advertising and the everyday
          challenges businesses face. That experience
          continues to shape how the agency thinks,
          creates and works with clients.
        </p>
      </header>
    </AnimatedSection>

    {/* 05.03 — FOUNDER FEATURE */}
    <div className="af-feature">

      {/* LEFT — IDENTITY PANEL */}
      <article className="af-panel af-profile">

        <div className="af-panel-top">
          <span className="af-small-label">
            THE FOUNDER
          </span>
          <span className="af-index">01 / 02</span>
        </div>

        <div>
          <div className="af-monogram" aria-hidden="true">
            AP
          </div>

          <h3 className="af-name">
            Aman Panwar
          </h3>

          <p className="af-role">
            Founder, InchToMilez
          </p>
        </div>

        <div className="af-profile-footer">
          <span>Independent Agency</span>
          <span>Indore, India</span>
        </div>

      </article>

      {/* RIGHT — FOUNDER STORY */}
      <article className="af-panel af-story">

        <div>
          <div className="af-panel-top mb-7">
            <span className="af-small-label">
              THE THINKING BEHIND THE AGENCY
            </span>
            <span className="af-index">02 / 02</span>
          </div>

          <h3>
            An Agency Built Around
            Understanding the Work.
          </h3>

          <p>
            Before InchToMilez became a connected
            marketing and advertising agency,
            its foundation was hands-on work
            across websites, search, campaigns
            and digital communication.
          </p>

          <p>
            Working across these disciplines
            highlighted something important:
            a good website, a strong campaign
            or a creative idea can only do so much
            when the rest of the brand is moving
            in a different direction.
          </p>

          <p>
            This became part of the agency's
            approach — understand the business,
            connect the right expertise and
            stay close to how the work is executed.
          </p>
        </div>

        <div className="af-story-signature">
          The aim isn't to make marketing
          more complicated. It's to make
          the work more connected.
        </div>

      </article>
    </div>

    {/* 05.04 — HOW THE AGENCY EVOLVED */}
    <div className="af-journey-header">
      <h3 className="af-journey-heading">
        The Thinking That Shaped InchToMilez.
      </h3>

      <p className="af-journey-caption">
        FROM EXPERIENCE TO AN INTEGRATED APPROACH
      </p>
    </div>

    <div className="af-journey">

      {[
        {
          number: "01",
          title: "The Hands-On Foundation",
          description:
            "Learning through real work in websites, search, advertising and digital communication."
        },
        {
          number: "02",
          title: "Seeing the Bigger Picture",
          description:
            "Understanding how brand decisions, creative ideas, media and customer experience influence one another."
        },
        {
          number: "03",
          title: "Building a Connected Agency",
          description:
            "Bringing disciplines together around business objectives, consistent communication and better execution."
        }
      ].map((step) => (
        <article className="af-step" key={step.number}>
          <div className="af-step-index">
            <span>{step.number} / 03</span>
            <span className="af-step-dot" aria-hidden="true" />
          </div>

          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}

    </div>

    {/* 05.05 — CONTINUING THE CONVERSATION */}
    <AnimatedSection animation="fadeInUp" delay={0.12}>
      <div className="af-footer">
        <div>
          <h3>
            Every Business Has a Story.
            We're Interested in Yours.
          </h3>

          <p>
            Share what you're building, where you're
            trying to go and what you want your brand
            to communicate.
          </p>
        </div>

        <Link to="/contact" className="af-button">
          Start a Conversation
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </AnimatedSection>

  </div>

  {/* 05.06 — SECTION BOUNDARY */}
  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 05 ================= */}













{/* ============================================================
    SECTION 06 — OUR PRESENCE
    INCHTOMILEZ / ABOUT US

    06.01 Scoped Design System
    06.02 Editorial Introduction
    06.03 Indore + Pune Location Showcase
    06.04 Connected Presence Strip
    06.05 Closing CTA

    Layout: Asymmetric 60 / 40 Location Showcase
    Theme: Existing Black Grid + Glassmorphism
    Font: Existing Raleway
    Accent: Yellow CTA Buttons Only

    Existing imports:
    Link, ArrowRight, MapPin, Building2,
    Globe, AnimatedSection

    No new dependencies.
============================================================ */}

<section
  id="about-presence"
  aria-labelledby="about-presence-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06]"
  style={{
    paddingBlock: "clamp(64px, 7vw, 100px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  {/* ========================================================
      06.01 — SCOPED STYLES
  ======================================================== */}

  <style>{`
    #about-presence,
    #about-presence * {
      box-sizing: border-box;
    }

    #about-presence {
      color: #fff;
    }

    #about-presence .ap-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ----------------------------------------
       EDITORIAL INTRODUCTION
    ---------------------------------------- */

    #about-presence .ap-intro {
      display: grid;
      grid-template-columns:
        minmax(0, 1fr) minmax(0, .65fr);
      align-items: end;
      gap: 40px;
      margin-bottom: 34px;
    }

    #about-presence .ap-eyebrow {
      margin: 0 0 17px;
      color: #aeb2bc;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #about-presence .ap-heading {
      max-width: 700px;
      margin: 0;
      color: #fff !important;
      font-size: clamp(28px, 3.1vw, 42px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-presence .ap-intro-copy {
      max-width: 420px;
      margin: 0;
      color: #b8bcc5;
      font-size: 14px;
      line-height: 1.85;
    }

    /* ----------------------------------------
       ASYMMETRIC LOCATION GRID
    ---------------------------------------- */

    #about-presence .ap-locations {
      display: grid;
      grid-template-columns:
        minmax(0, 1.28fr) minmax(0, .72fr);
      align-items: stretch;
      gap: 14px;
      min-width: 0;
    }

    #about-presence .ap-card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 0;
      min-height: 425px;
      overflow: hidden;
      padding: clamp(25px, 3vw, 38px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 13px;
      background: rgba(12,13,16,.94);
      isolation: isolate;
      transition:
        border-color .25s ease,
        background-color .25s ease;
    }

    #about-presence .ap-indore {
      background:
        radial-gradient(
          ellipse at 90% 12%,
          rgba(255,255,255,.07),
          transparent 50%
        ),
        linear-gradient(
          140deg,
          rgba(29,30,35,.97),
          rgba(9,10,12,.97)
        );
    }

    #about-presence .ap-pune {
      background:
        linear-gradient(
          155deg,
          rgba(18,19,23,.96),
          rgba(9,10,13,.97)
        );
    }

    /* CARD TOP */

    #about-presence .ap-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    #about-presence .ap-card-label {
      color: #b2b6be;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #about-presence .ap-card-index {
      color: #8c909a;
      font-size: 11px;
      letter-spacing: .08em;
    }

    /* LOCATION VISUAL */

    #about-presence .ap-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 135px;
      margin: 15px 0;
      overflow: hidden;
    }

    #about-presence .ap-orbit {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 50%;
      pointer-events: none;
    }

    #about-presence .ap-orbit::before {
      content: "";
      position: absolute;
      inset: 28px;
      border: 1px solid rgba(255,255,255,.11);
      border-radius: 50%;
    }

    #about-presence .ap-orbit::after {
      content: "";
      position: absolute;
      inset: 58px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 50%;
    }

    #about-presence .ap-location-icon {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      border: 1px solid rgba(255,255,255,.25);
      border-radius: 16px;
      background: #1d1f24;
      color: #fff;
      box-shadow: 0 12px 35px rgba(0,0,0,.25);
    }

    #about-presence .ap-location-icon svg {
      width: 28px;
      height: 28px;
    }

    /* CITY CONTENT */

    #about-presence .ap-city-name {
      margin: 0 0 14px;
      color: #fff !important;
      font-size: clamp(32px, 3.5vw, 49px);
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: -.045em;
    }

    #about-presence .ap-city-description {
      max-width: 525px;
      margin: 0;
      color: #b8bcc5;
      font-size: 13px;
      line-height: 1.85;
    }

    #about-presence .ap-location-meta {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.12);
    }

    #about-presence .ap-location-meta svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #c8cbd1;
      margin-top: 2px;
    }

    #about-presence .ap-location-meta span {
      color: #b8bcc5;
      font-size: 12px;
      line-height: 1.7;
    }

    /* ----------------------------------------
       CONNECTED PRESENCE STRIP
    ---------------------------------------- */

    #about-presence .ap-connection {
      display: grid;
      grid-template-columns:
        minmax(0, 1fr) auto minmax(0, 1fr);
      align-items: center;
      gap: 24px;
      margin-top: 14px;
      padding: 24px 28px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      background: rgba(13,14,17,.9);
    }

    #about-presence .ap-connection-side {
      min-width: 0;
    }

    #about-presence .ap-connection-side:last-child {
      text-align: right;
    }

    #about-presence .ap-connection-label {
      display: block;
      margin-bottom: 7px;
      color: #9296a0;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #about-presence .ap-connection-value {
      display: block;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-presence .ap-connection-center {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    #about-presence .ap-connection-line {
      width: clamp(20px, 5vw, 75px);
      height: 1px;
      background: rgba(255,255,255,.23);
    }

    #about-presence .ap-connection-symbol {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 39px;
      height: 39px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 50%;
      background: rgba(255,255,255,.045);
      color: #fff;
    }

    #about-presence .ap-connection-symbol svg {
      width: 17px;
      height: 17px;
    }

    /* ----------------------------------------
       CLOSING CTA
    ---------------------------------------- */

    #about-presence .ap-footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 14px;
      padding: 26px 28px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background:
        linear-gradient(
          110deg,
          rgba(24,25,29,.95),
          rgba(11,12,15,.96)
        );
    }

    #about-presence .ap-footer-heading {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-presence .ap-footer-copy {
      max-width: 650px;
      margin: 0;
      color: #b4b8c1;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-presence .ap-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
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
        border-color .2s ease;
    }

    #about-presence .ap-button svg {
      width: 15px;
      height: 15px;
    }

    /* ----------------------------------------
       BACKGROUND OUTLINED TYPOGRAPHY
    ---------------------------------------- */

    #about-presence .ap-outline {
      position: absolute;
      top: 4%;
      right: -3%;
      z-index: 0;
      color: transparent;
      font-size: clamp(110px, 17vw, 240px);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -.07em;
      white-space: nowrap;
      -webkit-text-stroke:
        1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* ----------------------------------------
       INTERACTION
    ---------------------------------------- */

    @media (hover: hover) and (pointer: fine) {
      #about-presence .ap-card:hover {
        border-color: rgba(255,255,255,.35);
      }

      #about-presence .ap-button:hover {
        background: #facc15;
        border-color: #facc15;
      }
    }

    #about-presence a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* ----------------------------------------
       TABLET
    ---------------------------------------- */

    @media (max-width: 900px) {
      #about-presence .ap-intro {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #about-presence .ap-intro-copy {
        max-width: 680px;
      }

      #about-presence .ap-locations {
        grid-template-columns:
          minmax(0, 1fr) minmax(0, 1fr);
      }

      #about-presence .ap-card {
        min-height: 425px;
      }

      #about-presence .ap-connection {
        gap: 15px;
      }
    }

    /* ----------------------------------------
       MOBILE
    ---------------------------------------- */

    @media (max-width: 640px) {
      #about-presence .ap-shell {
        padding-inline: 18px;
      }

      #about-presence .ap-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-presence .ap-intro-copy {
        font-size: 13px;
      }

      #about-presence .ap-locations {
        grid-template-columns: minmax(0, 1fr);
        gap: 11px;
      }

      #about-presence .ap-card {
        min-height: 370px;
        padding: 24px;
      }

      #about-presence .ap-visual {
        min-height: 115px;
      }

      #about-presence .ap-orbit {
        width: 165px;
        height: 165px;
      }

      #about-presence .ap-city-name {
        font-size: 34px;
      }

      #about-presence .ap-connection {
        gap: 9px;
        padding: 20px 15px;
      }

      #about-presence .ap-connection-value {
        font-size: 12px;
      }

      #about-presence .ap-connection-center {
        gap: 5px;
      }

      #about-presence .ap-connection-line {
        width: 12px;
      }

      #about-presence .ap-connection-symbol {
        width: 30px;
        height: 30px;
      }

      #about-presence .ap-footer {
        grid-template-columns: 1fr;
        padding: 23px;
        gap: 19px;
      }

      #about-presence .ap-button {
        width: 100%;
      }

      #about-presence .ap-outline {
        font-size: 105px;
      }
    }

    @media (max-width: 360px) {
      #about-presence .ap-connection {
        grid-template-columns: 1fr;
      }

      #about-presence .ap-connection-center {
        justify-content: flex-start;
      }

      #about-presence .ap-connection-side:last-child {
        text-align: left;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-presence .ap-card,
      #about-presence .ap-button {
        transition: none;
      }
    }
  `}</style>

  {/* ========================================================
      06.02 — BACKGROUND TYPOGRAPHY
  ======================================================== */}

  <div
    className="ap-outline"
    aria-hidden="true"
  >
    PRESENCE
  </div>

  <div className="ap-shell">

    {/* ======================================================
        06.03 — EDITORIAL INTRODUCTION
    ====================================================== */}

    <AnimatedSection
      animation="fadeInUp"
      delay={0.08}
    >
      <header className="ap-intro">

        <div>
          <p className="ap-eyebrow">
            06 / OUR PRESENCE
          </p>

          <h2
            id="about-presence-heading"
            className="ap-heading"
          >
            Different Cities.
            One Way of Working.
          </h2>
        </div>

        <p className="ap-intro-copy">
          InchToMilez is based in Indore, with Pune
          part of our expansion plans. Across every
          new opportunity, our focus remains on
          understanding businesses, building
          relevant ideas and delivering connected
          marketing experiences.
        </p>

      </header>
    </AnimatedSection>

    {/* ======================================================
        06.04 — LOCATION SHOWCASE
        Direct grid children for correct alignment.
    ====================================================== */}

    <div className="ap-locations">

      {/* ----------------------------------------
          INDORE — MAIN LOCATION
      ---------------------------------------- */}

      <article className="ap-card ap-indore">

        <div className="ap-card-top">
          <span className="ap-card-label">
            OUR FOUNDATION
          </span>

          <span className="ap-card-index">
            01 / 02
          </span>
        </div>

        <div className="ap-visual" aria-hidden="true">

          <div className="ap-orbit" />

          <span className="ap-location-icon">
            <Building2 />
          </span>

        </div>

        <div>
          <h3 className="ap-city-name">
            Indore.
          </h3>

          <p className="ap-city-description">
            Indore is where InchToMilez began
            and where our agency's approach
            took shape. It remains the foundation
            for how we work with businesses,
            develop ideas and bring different
            marketing disciplines together.
          </p>

          <div className="ap-location-meta">
            <MapPin aria-hidden="true" />

            <span>
              Vijay Nagar, Indore
              <br />
              Madhya Pradesh, India
            </span>
          </div>
        </div>

      </article>

      {/* ----------------------------------------
          PUNE — EXPANSION PLANS
      ---------------------------------------- */}

      <article className="ap-card ap-pune">

        <div className="ap-card-top">
          <span className="ap-card-label">
            OUR NEXT CHAPTER
          </span>

          <span className="ap-card-index">
            02 / 02
          </span>
        </div>

        <div className="ap-visual" aria-hidden="true">

          <div className="ap-orbit" />

          <span className="ap-location-icon">
            <Globe />
          </span>

        </div>

        <div>
          <h3 className="ap-city-name">
            Pune.
          </h3>

          <p className="ap-city-description">
            Pune represents an opportunity
            to extend our agency's presence,
            connect with more businesses and
            work across different industries,
            while retaining the same approach
            to strategy, creative and execution.
          </p>

          <div className="ap-location-meta">
            <MapPin aria-hidden="true" />

            <span>
              Pune, Maharashtra
              <br />
              Planned Expansion
            </span>
          </div>
        </div>

      </article>

    </div>

    {/* ======================================================
        06.05 — CONNECTED PRESENCE STRIP
    ====================================================== */}

    <div className="ap-connection">

      <div className="ap-connection-side">
        <span className="ap-connection-label">
          ESTABLISHED BASE
        </span>

        <span className="ap-connection-value">
          Indore, Madhya Pradesh
        </span>
      </div>

      <div
        className="ap-connection-center"
        aria-hidden="true"
      >
        <span className="ap-connection-line" />

        <span className="ap-connection-symbol">
          <Globe />
        </span>

        <span className="ap-connection-line" />
      </div>

      <div className="ap-connection-side">
        <span className="ap-connection-label">
          FUTURE PRESENCE
        </span>

        <span className="ap-connection-value">
          Pune, Maharashtra
        </span>
      </div>

    </div>

    {/* ======================================================
        06.06 — CONTACT CTA
    ====================================================== */}

    <AnimatedSection
      animation="fadeInUp"
      delay={0.12}
    >
      <div className="ap-footer">

        <div>
          <h3 className="ap-footer-heading">
            Wherever You're Building,
            Let's Start With a Conversation.
          </h3>

          <p className="ap-footer-copy">
            Tell us about your business, your market
            and the challenge you're working on.
            We'll explore how we can work together.
          </p>
        </div>

        <Link
          to="/contact"
          className="ap-button"
        >
          Get in Touch

          <ArrowRight aria-hidden="true" />
        </Link>

      </div>
    </AnimatedSection>

  </div>

  {/* ========================================================
      06.07 — SECTION BOUNDARY
  ======================================================== */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 06 ================= */}












{/* ============================================================
    SECTION 07 — THE INCHTOMILEZ DIFFERENCE

    07.01 Scoped CSS
    07.02 Editorial Introduction
    07.03 Agency Standards Dashboard
    07.04 Closing Statement

    Layout:
    - Asymmetric editorial split
    - Numbered premium horizontal rows
    - Interactive hover states
    - Responsive mobile layout

    Uses existing:
    AnimatedSection, Link, ArrowRight,
    Target, Shield, CheckCircle,
    Users, BarChart3

    No new imports or dependencies
============================================================ */}

<section
  id="about-difference"
  aria-labelledby="about-difference-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06]"
  style={{
    paddingBlock: "clamp(60px, 7vw, 96px)",
    fontFamily: "'Raleway', sans-serif",
  }}
>
  <style>{`
    /* ==========================================
       07.01 — SCOPED DESIGN SYSTEM
    ========================================== */

    #about-difference,
    #about-difference * {
      box-sizing: border-box;
    }

    #about-difference .ad-shell {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* MAIN COMPOSITION */

    #about-difference .ad-layout {
      display: grid;
      grid-template-columns:
        minmax(0, 38fr) minmax(0, 62fr);
      align-items: start;
      gap: clamp(30px, 5vw, 70px);
    }

    /* LEFT EDITORIAL COLUMN */

    #about-difference .ad-intro {
      min-width: 0;
    }

    #about-difference .ad-eyebrow {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 20px;
      color: #acb0b9;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-difference .ad-eyebrow::before {
      content: "";
      width: 23px;
      height: 1px;
      background: rgba(255,255,255,.5);
      flex-shrink: 0;
    }

    #about-difference .ad-heading {
      max-width: 450px;
      margin: 0 0 23px;
      color: #fff !important;
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      overflow-wrap: break-word;
      text-wrap: balance;
    }

    #about-difference .ad-copy {
      max-width: 425px;
      margin: 0 0 16px;
      color: #b7bbc4;
      font-size: 14px;
      line-height: 1.85;
    }

    #about-difference .ad-copy-lead {
      color: #e0e2e6;
      font-size: 15px;
    }

    /* LEFT FEATURE PANEL */

    #about-difference .ad-feature {
      position: relative;
      margin-top: 28px;
      padding: 25px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: linear-gradient(
        145deg,
        rgba(28,29,34,.95),
        rgba(10,11,14,.96)
      );
    }

    #about-difference .ad-feature-label {
      display: block;
      margin-bottom: 22px;
      color: #9fa3ac;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-difference .ad-feature-heading {
      max-width: 340px;
      margin: 0 0 12px;
      color: #fff !important;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.35;
    }

    #about-difference .ad-feature-copy {
      margin: 0;
      color: #b0b4bd;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-difference .ad-feature-footer {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 25px;
      padding-top: 17px;
      border-top: 1px solid rgba(255,255,255,.12);
      color: #c9cbd1;
      font-size: 11px;
      font-weight: 500;
    }

    #about-difference .ad-feature-footer svg {
      width: 16px;
      height: 16px;
    }

    /* RIGHT — STANDARDS DASHBOARD */

    #about-difference .ad-standards {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      min-width: 0;
    }

    #about-difference .ad-standards-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 4px;
    }

    #about-difference .ad-standards-label {
      color: #aeb2bb;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-difference .ad-standards-count {
      color: #858994;
      font-size: 11px;
    }

    /* DIRECT GRID CHILDREN — NO WRAPPER BUG */

    #about-difference .ad-row {
      position: relative;
      display: grid;
      grid-template-columns:
        44px minmax(0, 1fr) 20px;
      align-items: start;
      gap: 18px;
      min-width: 0;
      padding: 23px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      background: rgba(12,13,16,.94);
      overflow: hidden;
      transition:
        background-color .25s ease,
        border-color .25s ease,
        transform .25s ease;
    }

    #about-difference .ad-row::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      bottom: 15px;
      width: 2px;
      border-radius: 2px;
      background: rgba(255,255,255,.7);
      transform: scaleY(0);
      transition: transform .25s ease;
    }

    #about-difference .ad-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 10px;
      color: #fff;
      background: rgba(255,255,255,.04);
    }

    #about-difference .ad-icon svg {
      width: 19px;
      height: 19px;
    }

    #about-difference .ad-row-content {
      min-width: 0;
    }

    #about-difference .ad-row h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -.02em;
    }

    #about-difference .ad-row p {
      max-width: 530px;
      margin: 0;
      color: #acb1bb;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-difference .ad-index {
      color: #898d97;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.5;
      text-align: right;
    }

    /* BOTTOM CLOSING PANEL */

    #about-difference .ad-footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 25px;
      margin-top: 18px;
      padding: 26px 28px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: rgba(21,22,26,.94);
    }

    #about-difference .ad-footer-title {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      letter-spacing: -.02em;
      line-height: 1.4;
    }

    #about-difference .ad-footer-copy {
      margin: 0;
      max-width: 710px;
      color: #adb2bb;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-difference .ad-action {
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
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition:
        background-color .2s ease,
        transform .2s ease;
    }

    #about-difference .ad-action svg {
      width: 15px;
      height: 15px;
    }

    /* DECORATIVE TYPOGRAPHY */

    #about-difference .ad-outline {
      position: absolute;
      top: 6%;
      left: -2%;
      z-index: 0;
      font-size: clamp(110px, 17vw, 230px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke:
        1px rgba(255,255,255,.035);
      white-space: nowrap;
      pointer-events: none;
      user-select: none;
    }

    /* INTERACTIONS */

    @media (hover: hover) and (pointer: fine) {
      #about-difference .ad-row:hover {
        transform: translateX(4px);
        background: rgba(25,26,30,.97);
        border-color: rgba(255,255,255,.35);
      }

      #about-difference .ad-row:hover::before {
        transform: scaleY(1);
      }

      #about-difference .ad-action:hover {
        background: #facc15;
        transform: translateY(-2px);
      }
    }

    #about-difference a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #about-difference .ad-layout {
        grid-template-columns: minmax(0, 1fr);
        gap: 32px;
      }

      #about-difference .ad-intro {
        max-width: 760px;
      }

      #about-difference .ad-heading,
      #about-difference .ad-copy {
        max-width: 680px;
      }

      #about-difference .ad-feature {
        max-width: 680px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-difference .ad-shell {
        padding-inline: 18px;
      }

      #about-difference .ad-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-difference .ad-copy {
        font-size: 13px;
      }

      #about-difference .ad-feature {
        padding: 22px;
      }

      #about-difference .ad-feature-heading {
        font-size: 20px;
      }

      #about-difference .ad-row {
        grid-template-columns:
          38px minmax(0,1fr) 18px;
        gap: 12px;
        padding: 18px 15px;
      }

      #about-difference .ad-icon {
        width: 38px;
        height: 38px;
      }

      #about-difference .ad-icon svg {
        width: 17px;
        height: 17px;
      }

      #about-difference .ad-row h3 {
        font-size: 16px;
      }

      #about-difference .ad-row p {
        font-size: 12px;
      }

      #about-difference .ad-footer {
        grid-template-columns: minmax(0,1fr);
        gap: 18px;
        padding: 22px;
      }

      #about-difference .ad-action {
        width: 100%;
      }

      #about-difference .ad-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-difference .ad-row,
      #about-difference .ad-row::before,
      #about-difference .ad-action {
        transition: none;
      }

      #about-difference .ad-row:hover,
      #about-difference .ad-action:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 07.02 — BACKGROUND WORD */}
  <div className="ad-outline" aria-hidden="true">
    STANDARDS
  </div>

  <div className="ad-shell">

    {/* 07.03 — MAIN EDITORIAL LAYOUT */}
    <div className="ad-layout">

      {/* LEFT — POSITIONING */}
      <div className="ad-intro">

        <AnimatedSection
          animation="fadeInUp"
          delay={0.08}
        >
          <p className="ad-eyebrow">
            07 / THE INCHTOMILEZ DIFFERENCE
          </p>

          <h2
            id="about-difference-heading"
            className="ad-heading"
          >
            The Difference Isn't Just What We Do.
            It's How We Approach It.
          </h2>

          <p className="ad-copy ad-copy-lead">
            Choosing a marketing and advertising
            agency is about more than comparing
            services.
          </p>

          <p className="ad-copy">
            It's about the thinking behind the
            recommendations, the attention given
            to your business, the quality of
            execution and how decisions are made
            along the way.
          </p>

          <p className="ad-copy">
            At InchToMilez, these principles
            guide how we approach the work.
          </p>
        </AnimatedSection>

        {/* LEFT FEATURE PANEL */}
        <AnimatedSection
          animation="fadeInUp"
          delay={0.14}
        >
          <div className="ad-feature">
            <span className="ad-feature-label">
              WHAT MATTERS TO US
            </span>

            <h3 className="ad-feature-heading">
              Doing the Right Work.
              Not Just More Work.
            </h3>

            <p className="ad-feature-copy">
              We focus on understanding the
              objective, choosing an appropriate
              approach and giving each part of
              the work a clear purpose.
            </p>

            <div className="ad-feature-footer">
              <CheckCircle aria-hidden="true" />
              <span>Clarity before activity</span>
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* RIGHT — AGENCY STANDARDS */}
      <div className="ad-standards">

        <div className="ad-standards-header">
          <span className="ad-standards-label">
            HOW WE APPROACH THE WORK
          </span>
          <span className="ad-standards-count">
            05 PRINCIPLES
          </span>
        </div>

        {[
          {
            number: "01",
            icon: Target,
            title: "Recommendations With a Reason",
            description:
              "Every service, platform and creative decision should serve a defined business objective. We want you to understand why an approach makes sense before moving forward."
          },
          {
            number: "02",
            icon: Users,
            title: "Involvement Beyond the Brief",
            description:
              "Understanding the business shouldn't stop after the first meeting. We believe regular conversations, feedback and context help keep the work relevant."
          },
          {
            number: "03",
            icon: Shield,
            title: "Attention to the Details",
            description:
              "A campaign is made up of many decisions — language, design, targeting, landing experience and execution. Each detail contributes to how the brand is perceived."
          },
          {
            number: "04",
            icon: CheckCircle,
            title: "Consistency Across Touchpoints",
            description:
              "A customer should recognise the same brand whether they encounter a search result, advertisement, website, social post or physical activation."
          },
          {
            number: "05",
            icon: BarChart3,
            title: "Decisions Informed by Learning",
            description:
              "Performance reports are useful when they lead to better questions and clearer next steps. We use what we learn to review priorities and refine the approach."
          }
        ].map((item) => {
          const ItemIcon = item.icon;

          return (
            <article
              className="ad-row"
              key={item.number}
            >
              <div className="ad-icon">
                <ItemIcon aria-hidden="true" />
              </div>

              <div className="ad-row-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="ad-index">
                {item.number}
              </span>
            </article>
          );
        })}
      </div>

    </div>

    {/* 07.04 — CLOSING STATEMENT */}
    <AnimatedSection
      animation="fadeInUp"
      delay={0.12}
    >
      <div className="ad-footer">
        <div>
          <h3 className="ad-footer-title">
            The Right Agency Relationship Starts
            With the Right Conversation.
          </h3>

          <p className="ad-footer-copy">
            Tell us what you're trying to achieve,
            what's holding you back and what kind
            of support your business needs.
          </p>
        </div>

        <Link
          to="/contact"
          className="ad-action"
        >
          Let's Talk
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </AnimatedSection>

  </div>

  {/* 07.05 — SECTION BOUNDARY */}
  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 07 ================= */}













{/* ============================================================
   SECTION 08 — OUR EXPERTISE
   About Us / InchToMilez

   08.01 Introduction
   08.02 Editorial Sidebar
   08.03 Six-Discipline Capability Matrix
   08.04 Closing Statement

   No new dependencies. Existing icons only.
============================================================ */}

<section
  id="about-expertise"
  aria-labelledby="about-expertise-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-expertise,
    #about-expertise * {
      box-sizing: border-box;
    }

    #about-expertise .ae-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    #about-expertise .ae-header {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
      align-items: end;
      gap: 42px;
      margin-bottom: 40px;
    }

    #about-expertise .ae-eyebrow {
      display: block;
      color: #aeb3bc;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .12em;
      margin-bottom: 18px;
      text-transform: uppercase;
    }

    #about-expertise .ae-heading {
      margin: 0;
      max-width: 750px;
      font-size: clamp(29px, 3.2vw, 43px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.2;
      color: #fff !important;
      text-wrap: balance;
    }

    #about-expertise .ae-header-copy {
      margin: 0;
      max-width: 420px;
      justify-self: end;
      color: #b5bac4;
      font-size: 14px;
      line-height: 1.9;
    }

    /* MAIN EDITORIAL LAYOUT */

    #about-expertise .ae-layout {
      display: grid;
      grid-template-columns: minmax(0, .37fr) minmax(0, .63fr);
      align-items: start;
      gap: 16px;
    }

    /* LEFT SIDEBAR */

    #about-expertise .ae-sidebar {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 50px;
      min-height: 490px;
      min-width: 0;
      padding: 30px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 12px;
      background:
        linear-gradient(145deg,
          rgba(30,31,36,.95),
          rgba(9,10,13,.97));
    }

    #about-expertise .ae-sidebar-label {
      color: #aab0b9;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-expertise .ae-sidebar-heading {
      margin: 20px 0 18px;
      color: #fff !important;
      font-size: clamp(23px, 2.4vw, 32px);
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -.03em;
    }

    #about-expertise .ae-sidebar-copy {
      margin: 0;
      color: #b7bbc4;
      font-size: 13px;
      line-height: 1.9;
    }

    #about-expertise .ae-sidebar-bottom {
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.12);
    }

    #about-expertise .ae-sidebar-bottom strong {
      display: block;
      margin-bottom: 9px;
      color: #fff;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
    }

    #about-expertise .ae-sidebar-bottom p {
      margin: 0;
      color: #aeb3bc;
      font-size: 12px;
      line-height: 1.8;
    }

    /* CAPABILITY MATRIX */

    #about-expertise .ae-matrix {
      display: grid;
      grid-template-columns: minmax(0,1fr);
      gap: 10px;
      min-width: 0;
    }

    #about-expertise .ae-matrix-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 2px 3px 8px;
    }

    #about-expertise .ae-matrix-heading span {
      color: #aeb2bc;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-expertise .ae-item {
      display: grid;
      grid-template-columns: 43px minmax(0,1fr) 28px;
      align-items: start;
      gap: 17px;
      padding: 23px;
      min-width: 0;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      background: rgba(12,13,16,.92);
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #about-expertise .ae-icon {
      width: 43px;
      height: 43px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: 1px solid rgba(255,255,255,.17);
      border-radius: 9px;
      background: rgba(255,255,255,.045);
    }

    #about-expertise .ae-icon svg {
      width: 19px;
      height: 19px;
    }

    #about-expertise .ae-item-content {
      min-width: 0;
    }

    #about-expertise .ae-item h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -.02em;
    }

    #about-expertise .ae-item-copy {
      margin: 0;
      color: #b0b5be;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-expertise .ae-specialties {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 15px;
    }

    #about-expertise .ae-specialty {
      display: inline-block;
      padding: 5px 9px;
      border: 1px solid rgba(255,255,255,.11);
      border-radius: 5px;
      color: #aeb3bc;
      background: rgba(255,255,255,.025);
      font-size: 10px;
      line-height: 1.5;
    }

    #about-expertise .ae-number {
      color: #8e929b;
      font-size: 11px;
      font-weight: 600;
      text-align: right;
      padding-top: 5px;
    }

    /* FOOTER */

    #about-expertise .ae-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 24px;
      margin-top: 16px;
      padding: 26px 29px;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 11px;
      background: rgba(22,23,27,.93);
    }

    #about-expertise .ae-footer h3 {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-expertise .ae-footer p {
      max-width: 660px;
      margin: 0;
      color: #b1b6bf;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-expertise .ae-button {
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

    #about-expertise .ae-button svg {
      width: 15px;
      height: 15px;
    }

    #about-expertise .ae-outline {
      position: absolute;
      top: 6%;
      right: -3%;
      z-index: 0;
      font-size: clamp(110px,17vw,240px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: 1;
      color: transparent;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    @media (hover:hover) and (pointer:fine) {
      #about-expertise .ae-item:hover {
        border-color: rgba(255,255,255,.36);
        background: rgba(25,26,30,.96);
        transform: translateX(3px);
      }

      #about-expertise .ae-button:hover {
        background: #facc15;
      }
    }

    #about-expertise a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    @media (max-width: 960px) {
      #about-expertise .ae-layout {
        grid-template-columns: minmax(0,1fr);
      }

      #about-expertise .ae-sidebar {
        min-height: 0;
        gap: 28px;
      }
    }

    @media (max-width: 740px) {
      #about-expertise .ae-header {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #about-expertise .ae-header-copy {
        justify-self: start;
      }

      #about-expertise .ae-footer {
        grid-template-columns: 1fr;
        gap: 19px;
      }
    }

    @media (max-width: 640px) {
      #about-expertise .ae-shell {
        padding-inline: 18px;
      }

      #about-expertise .ae-heading {
        font-size: clamp(27px,7vw,34px);
      }

      #about-expertise .ae-header-copy {
        font-size: 13px;
      }

      #about-expertise .ae-sidebar {
        padding: 23px;
      }

      #about-expertise .ae-item {
        grid-template-columns: 37px minmax(0,1fr) 19px;
        gap: 12px;
        padding: 18px 15px;
      }

      #about-expertise .ae-icon {
        width: 37px;
        height: 37px;
      }

      #about-expertise .ae-icon svg {
        width: 17px;
        height: 17px;
      }

      #about-expertise .ae-item h3 {
        font-size: 16px;
      }

      #about-expertise .ae-item-copy {
        font-size: 12px;
      }

      #about-expertise .ae-footer {
        padding: 22px;
      }

      #about-expertise .ae-button {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-expertise .ae-item,
      #about-expertise .ae-button {
        transition: none;
      }

      #about-expertise .ae-item:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 08.01 — BACKGROUND WORD */}
  <div className="ae-outline" aria-hidden="true">
    EXPERTISE
  </div>

  <div className="ae-shell">

    {/* 08.02 — INTRODUCTION */}
    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header className="ae-header">
        <div>
          <span className="ae-eyebrow">
            08 / OUR EXPERTISE
          </span>

          <h2
            id="about-expertise-heading"
            className="ae-heading"
          >
            Different Disciplines.
            A Shared Understanding
            of the Brand.
          </h2>
        </div>

        <p className="ae-header-copy">
          Our expertise covers the thinking,
          communication, media and digital
          experiences behind a brand. Each
          discipline brings a different perspective
          to a common business objective.
        </p>
      </header>
    </AnimatedSection>

    {/* 08.03 — SIDEBAR + MATRIX */}
    <div className="ae-layout">

      {/* LEFT EDITORIAL PANEL */}
      <aside className="ae-sidebar">
        <div>
          <span className="ae-sidebar-label">
            MORE THAN A SERVICES LIST
          </span>

          <h3 className="ae-sidebar-heading">
            Expertise Matters More
            When It Works Together.
          </h3>

          <p className="ae-sidebar-copy">
            A brand isn't built through a single
            campaign, website or advertisement.
            It develops through the decisions
            that shape how people discover,
            understand and experience it.
          </p>
        </div>

        <div className="ae-sidebar-bottom">
          <strong>
            One brand. Multiple perspectives.
          </strong>
          <p>
            Different capabilities contribute at
            different stages. The aim is to keep
            them connected, not treat every task
            as an isolated project.
          </p>
        </div>
      </aside>

      {/* RIGHT — DIRECT CHILD CAPABILITY ROWS */}
      <div className="ae-matrix">
        <div className="ae-matrix-heading">
          <span>AREAS OF EXPERTISE</span>
          <span>06 DISCIPLINES</span>
        </div>

        {[
          {
            number: "01",
            icon: Target,
            title: "Brand Strategy & Positioning",
            description:
              "Defining what a brand stands for, who it needs to reach and how it should communicate its value in a competitive market.",
            specialties: [
              "Brand Positioning",
              "Audience Research",
              "Communication Strategy"
            ]
          },
          {
            number: "02",
            icon: Palette,
            title: "Creative Thinking & Design",
            description:
              "Translating strategy into identities, campaigns and design systems that communicate clearly and feel consistent across touchpoints.",
            specialties: [
              "Brand Identity",
              "Campaign Concepts",
              "Creative Design"
            ]
          },
          {
            number: "03",
            icon: Megaphone,
            title: "Advertising & Media",
            description:
              "Planning advertising around the audience, message and objective, with coordinated execution across relevant digital channels.",
            specialties: [
              "Google Ads",
              "Paid Social",
              "Media Planning"
            ]
          },
          {
            number: "04",
            icon: Search,
            title: "Search & Digital Discoverability",
            description:
              "Improving how businesses can be discovered through search, useful content and a stronger presence where potential customers are looking.",
            specialties: [
              "Search Engine Optimisation",
              "Local SEO",
              "Content Strategy"
            ]
          },
          {
            number: "05",
            icon: Code,
            title: "Websites & Digital Experiences",
            description:
              "Creating websites and digital experiences that explain the brand, make information accessible and help visitors take the next step.",
            specialties: [
              "Website Development",
              "UX & UI",
              "Landing Pages"
            ]
          },
          {
            number: "06",
            icon: TrendingUp,
            title: "Measurement & Continuous Improvement",
            description:
              "Using campaign results, website behaviour and business feedback to understand what is working and refine future decisions.",
            specialties: [
              "Analytics",
              "Performance Reviews",
              "Optimisation"
            ]
          }
        ].map((item) => {
          const CapabilityIcon = item.icon;

          return (
            <article
              key={item.number}
              className="ae-item"
            >
              <div className="ae-icon">
                <CapabilityIcon aria-hidden="true" />
              </div>

              <div className="ae-item-content">
                <h3>{item.title}</h3>

                <p className="ae-item-copy">
                  {item.description}
                </p>

                <div className="ae-specialties">
                  {item.specialties.map((specialty) => (
                    <span
                      className="ae-specialty"
                      key={specialty}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <span className="ae-number">
                {item.number}
              </span>
            </article>
          );
        })}
      </div>
    </div>

    {/* 08.04 — CONCLUDING STATEMENT */}
    <div className="ae-footer">
      <div>
        <h3>
          The Right Expertise for the Right Challenge.
        </h3>

        <p>
          Every business has different priorities.
          We start by understanding yours, then
          explore which combination of capabilities
          is most relevant.
        </p>
      </div>

      <Link to="/services" className="ae-button">
        Explore Our Services
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

  {/* SECTION BOUNDARY */}
  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]"
    aria-hidden="true"
  />
</section>

{/* ================= END SECTION 08 ================= */}





{/* ============================================================
   SECTION 09 — INDUSTRIES & BUSINESS UNDERSTANDING
   INCHTOMILEZ / ABOUT US

   09.01 Editorial Header
   09.02 Industry Understanding Matrix
   09.03 Our Perspective
   09.04 Closing CTA

   Design: Dark editorial cards / responsive two-column grid
   Imports: Existing Lucide icons, Link and ArrowRight
   No new dependencies / No extra H1
============================================================ */}

<section
  id="about-industries"
  aria-labelledby="about-industries-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-industries,
    #about-industries * {
      box-sizing: border-box;
    }

    #about-industries .ai9-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: auto;
      padding: 0 24px;
    }

    #about-industries .ai9-header {
      display: grid;
      grid-template-columns: minmax(0, 1.12fr) minmax(0, .88fr);
      gap: 42px;
      align-items: end;
      margin-bottom: 36px;
    }

    #about-industries .ai9-eyebrow {
      display: block;
      color: #aeb2bb;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
      margin-bottom: 17px;
    }

    #about-industries .ai9-title {
      margin: 0;
      max-width: 690px;
      color: #fff !important;
      font-size: clamp(28px, 3.15vw, 42px);
      font-weight: 600;
      letter-spacing: -.035em;
      line-height: 1.2;
      text-wrap: balance;
    }

    #about-industries .ai9-header-copy {
      margin: 0;
      max-width: 430px;
      justify-self: end;
      color: #b7bbc5;
      font-size: 14px;
      line-height: 1.85;
    }

    /* INDUSTRY PANEL GRID */

    #about-industries .ai9-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: stretch;
      gap: 13px;
    }

    #about-industries .ai9-card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 245px;
      padding: 27px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 12px;
      background: rgba(12,13,16,.93);
      overflow: hidden;
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #about-industries .ai9-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 100% 0%,
        rgba(255,255,255,.05),
        transparent 65%
      );
      pointer-events: none;
    }

    #about-industries .ai9-card-top {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-bottom: 25px;
    }

    #about-industries .ai9-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 9px;
      color: #fff;
      background: rgba(255,255,255,.04);
    }

    #about-industries .ai9-icon svg {
      width: 20px;
      height: 20px;
    }

    #about-industries .ai9-index {
      color: #8e929c;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .07em;
    }

    #about-industries .ai9-content {
      position: relative;
      flex: 1;
    }

    #about-industries .ai9-content h3 {
      margin: 0 0 10px;
      color: #fff !important;
      font-size: 21px;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.35;
    }

    #about-industries .ai9-content p {
      margin: 0;
      color: #b4b8c1;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-industries .ai9-insight {
      position: relative;
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,.1);
    }

    #about-industries .ai9-insight-label {
      display: block;
      margin-bottom: 6px;
      color: #8e939d;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .09em;
      text-transform: uppercase;
    }

    #about-industries .ai9-insight-value {
      display: block;
      color: #d6d8dd;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.65;
    }

    /* A DIFFERENT PERSPECTIVE */

    #about-industries .ai9-perspective {
      display: grid;
      grid-template-columns: minmax(0, .65fr) minmax(0, 1fr);
      gap: 28px;
      align-items: center;
      margin-top: 14px;
      padding: clamp(24px, 3vw, 36px);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px;
      background: linear-gradient(
        120deg,
        rgba(28,29,34,.96),
        rgba(11,12,15,.96)
      );
    }

    #about-industries .ai9-perspective-label {
      display: block;
      margin-bottom: 11px;
      color: #aab0b9;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-industries .ai9-perspective h3 {
      margin: 0;
      max-width: 360px;
      color: #fff !important;
      font-size: clamp(22px, 2.3vw, 30px);
      font-weight: 600;
      letter-spacing: -.03em;
      line-height: 1.3;
    }

    #about-industries .ai9-perspective p {
      margin: 0;
      color: #b9bdc5;
      font-size: 13px;
      line-height: 1.9;
    }

    /* CTA */

    #about-industries .ai9-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      margin-top: 14px;
      padding: 23px 26px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 11px;
      background: rgba(13,14,17,.92);
    }

    #about-industries .ai9-footer h3 {
      margin: 0 0 7px;
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
    }

    #about-industries .ai9-footer p {
      max-width: 680px;
      margin: 0;
      color: #b0b5be;
      font-size: 13px;
      line-height: 1.75;
    }

    #about-industries .ai9-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      gap: 8px;
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

    #about-industries .ai9-button svg {
      width: 15px;
      height: 15px;
    }

    /* OUTLINED DECORATION */

    #about-industries .ai9-outline {
      position: absolute;
      top: 4%;
      right: -3%;
      z-index: 0;
      font-size: clamp(110px, 17vw, 230px);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -.07em;
      color: transparent;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      pointer-events: none;
      user-select: none;
    }

    /* DESKTOP HOVER */

    @media (hover: hover) and (pointer: fine) {
      #about-industries .ai9-card:hover {
        border-color: rgba(255,255,255,.36);
        background: rgba(24,25,29,.96);
        transform: translateY(-3px);
      }

      #about-industries .ai9-button:hover {
        background: #facc15;
      }
    }

    #about-industries a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 850px) {
      #about-industries .ai9-header {
        grid-template-columns: 1fr;
        gap: 17px;
      }

      #about-industries .ai9-header-copy {
        justify-self: start;
        max-width: 700px;
      }

      #about-industries .ai9-perspective {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-industries .ai9-shell {
        padding-inline: 18px;
      }

      #about-industries .ai9-title {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-industries .ai9-header-copy {
        font-size: 13px;
      }

      #about-industries .ai9-grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 11px;
      }

      #about-industries .ai9-card {
        min-height: 0;
        padding: 23px;
      }

      #about-industries .ai9-card-top {
        margin-bottom: 21px;
      }

      #about-industries .ai9-content h3 {
        font-size: 19px;
      }

      #about-industries .ai9-content p {
        font-size: 12px;
      }

      #about-industries .ai9-perspective {
        padding: 23px;
      }

      #about-industries .ai9-perspective h3 {
        font-size: 25px;
      }

      #about-industries .ai9-footer {
        flex-direction: column;
        align-items: flex-start;
        padding: 22px;
        gap: 19px;
      }

      #about-industries .ai9-button {
        width: 100%;
      }

      #about-industries .ai9-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-industries .ai9-card,
      #about-industries .ai9-button {
        transition: none;
      }

      #about-industries .ai9-card:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 09.01 — DECORATIVE BACKGROUND */}

  <div className="ai9-outline" aria-hidden="true">
    INDUSTRIES
  </div>

  <div className="ai9-shell">

    {/* 09.02 — EDITORIAL INTRODUCTION */}

    <header className="ai9-header">
      <div>
        <span className="ai9-eyebrow">
          09 / THE INDUSTRIES WE UNDERSTAND
        </span>

        <h2
          id="about-industries-heading"
          className="ai9-title"
        >
          Every Industry Has Its Own Challenges.
          We Start by Understanding Them.
        </h2>
      </div>

      <p className="ai9-header-copy">
        Different industries have different audiences,
        buying decisions, communication challenges
        and expectations. We don't believe that
        one marketing formula fits every business.
      </p>
    </header>

    {/* 09.03 — INDUSTRY MATRIX */}

    <div className="ai9-grid">

      {[
        {
          number: "01",
          icon: Heart,
          title: "Healthcare & Wellness",
          description:
            "Healthcare communication requires clarity, trust and sensitivity. Patients need understandable information before making important decisions.",
          insight:
            "Patient education, trust and responsible communication"
        },
        {
          number: "02",
          icon: Building2,
          title: "Real Estate & Property",
          description:
            "Property decisions involve research, location, investment considerations and confidence. Marketing needs to answer practical questions, not simply generate enquiries.",
          insight:
            "Project positioning, qualified enquiries and buyer confidence"
        },
        {
          number: "03",
          icon: Award,
          title: "Education & Learning",
          description:
            "Students and families compare courses, institutions, outcomes and long-term value. Clear communication helps them understand what makes an offering relevant.",
          insight:
            "Course visibility, admissions journeys and institutional credibility"
        },
        {
          number: "04",
          icon: TrendingUp,
          title: "Retail & E-Commerce",
          description:
            "Retail brands compete for attention and repeat purchases. Product presentation, advertising, customer experience and brand recall need to work together.",
          insight:
            "Product discovery, shopping experiences and customer retention"
        },
        {
          number: "05",
          icon: Target,
          title: "Automotive & Mobility",
          description:
            "Automotive customers compare features, value, availability and service. Marketing should make complex choices easier to understand and enquiries easier to act upon.",
          insight:
            "Product communication, local discovery and dealership enquiries"
        },
        {
          number: "06",
          icon: Handshake,
          title: "Professional & B2B Services",
          description:
            "Professional services often involve longer conversations and multiple decision-makers. Credibility, expertise and clear business value matter throughout the journey.",
          insight:
            "Business positioning, credibility and relevant lead generation"
        }
      ].map((industry) => {
        const IndustryIcon = industry.icon;

        return (
          <article
            key={industry.number}
            className="ai9-card"
          >
            <div className="ai9-card-top">
              <span className="ai9-icon">
                <IndustryIcon aria-hidden="true" />
              </span>

              <span className="ai9-index">
                {industry.number} / 06
              </span>
            </div>

            <div className="ai9-content">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>

            <div className="ai9-insight">
              <span className="ai9-insight-label">
                WHAT MATTERS
              </span>

              <span className="ai9-insight-value">
                {industry.insight}
              </span>
            </div>
          </article>
        );
      })}

    </div>

    {/* 09.04 — A DIFFERENT PERSPECTIVE */}

    <div className="ai9-perspective">
      <div>
        <span className="ai9-perspective-label">
          OUR APPROACH ACROSS INDUSTRIES
        </span>

        <h3>
          The Industry Changes.
          The Need to Understand Doesn't.
        </h3>
      </div>

      <p>
        Before recommending a campaign, channel or
        creative direction, we want to understand
        how customers make decisions in that
        particular market. The questions that matter
        to a patient aren't the same as those that
        matter to a property buyer, student or
        business decision-maker.
        <br />
        <br />
        That's why context comes before execution.
      </p>
    </div>

    {/* 09.05 — CLOSING CTA */}

    <div className="ai9-footer">
      <div>
        <h3>
          Every Business Is Different.
          Tell Us About Yours.
        </h3>

        <p>
          Whatever your industry, the conversation
          begins with understanding your business,
          audience and objectives.
        </p>
      </div>

      <Link
        to="/industries"
        className="ai9-button"
      >
        Explore Industries
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>

  </div>

</section>

{/* ================= END SECTION 09 ================= */}





{/* ============================================================
   SECTION 10 — WHY WORK WITH INCHTOMILEZ?
   ABOUT US / THE VALUE OF THE RELATIONSHIP

   10.01 Editorial introduction
   10.02 Left-side agency proposition
   10.03 Four client-value pillars
   10.04 Closing statement + CTA

   Design: Asymmetric editorial + 2x2 value matrix
   Existing imports: Link, ArrowRight, AnimatedSection
   No new dependencies or additional H1
============================================================ */}

<section
  id="about-why-choose"
  aria-labelledby="about-why-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-why-choose,
    #about-why-choose * {
      box-sizing: border-box;
    }

    #about-why-choose .awc-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* EDITORIAL HEADING */

    #about-why-choose .awc-header {
      max-width: 870px;
      margin-bottom: 38px;
    }

    #about-why-choose .awc-label {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 20px;
      color: #aab0ba;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #about-why-choose .awc-label::before {
      content: "";
      width: 24px;
      height: 1px;
      flex: 0 0 24px;
      background: rgba(255,255,255,.5);
    }

    #about-why-choose .awc-heading {
      max-width: 850px;
      margin: 0 0 19px;
      color: #fff !important;
      font-size: clamp(29px, 3.35vw, 45px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-why-choose .awc-lead {
      max-width: 680px;
      margin: 0;
      color: #b7bbc4;
      font-size: 14px;
      line-height: 1.85;
    }

    /* MAIN COMPOSITION */

    #about-why-choose .awc-layout {
      display: grid;
      grid-template-columns: minmax(0, .41fr) minmax(0, .59fr);
      align-items: stretch;
      gap: 14px;
      min-width: 0;
    }

    /* LEFT FEATURE */

    #about-why-choose .awc-feature {
      position: relative;
      min-width: 0;
      min-height: 520px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
      padding: clamp(26px, 3vw, 40px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 13px;
      background:
        radial-gradient(
          ellipse at 80% 10%,
          rgba(255,255,255,.075),
          transparent 55%
        ),
        linear-gradient(
          145deg,
          rgba(31,32,37,.97),
          rgba(10,11,14,.98)
        );
      overflow: hidden;
    }

    #about-why-choose .awc-feature-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
    }

    #about-why-choose .awc-feature-label {
      color: #aeb3bc;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-why-choose .awc-feature-index {
      color: #858b95;
      font-size: 11px;
    }

    #about-why-choose .awc-feature-statement {
      max-width: 400px;
      margin: 0 0 24px;
      color: #fff !important;
      font-size: clamp(27px, 2.8vw, 38px);
      font-weight: 600;
      line-height: 1.28;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-why-choose .awc-feature-copy {
      max-width: 385px;
      margin: 0;
      color: #b9bdc6;
      font-size: 14px;
      line-height: 1.9;
    }

    #about-why-choose .awc-feature-bottom {
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.13);
    }

    #about-why-choose .awc-feature-bottom p {
      margin: 0;
      color: #d6d8dc;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.8;
    }

    /* RIGHT — 2x2 VALUE MATRIX */

    #about-why-choose .awc-matrix {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(245px, auto));
      gap: 14px;
      min-width: 0;
    }

    #about-why-choose .awc-card {
      position: relative;
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 34px;
      padding: 27px 25px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 12px;
      background: rgba(13,14,17,.94);
      overflow: hidden;
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #about-why-choose .awc-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    #about-why-choose .awc-number {
      color: #c1c5cc;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .07em;
    }

    #about-why-choose .awc-card-arrow {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 50%;
      color: #b7bbc3;
      transform: rotate(-45deg);
    }

    #about-why-choose .awc-card-arrow svg {
      width: 15px;
      height: 15px;
    }

    #about-why-choose .awc-card h3 {
      margin: 0 0 12px;
      color: #fff !important;
      font-size: clamp(18px, 1.65vw, 22px);
      font-weight: 600;
      line-height: 1.35;
      letter-spacing: -.025em;
    }

    #about-why-choose .awc-card p {
      margin: 0;
      color: #afb4be;
      font-size: 12px;
      line-height: 1.85;
    }

    /* BOTTOM PANEL */

    #about-why-choose .awc-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 24px;
      margin-top: 15px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: rgba(20,21,25,.94);
    }

    #about-why-choose .awc-footer-title {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -.02em;
    }

    #about-why-choose .awc-footer-copy {
      max-width: 700px;
      margin: 0;
      color: #b0b5be;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-why-choose .awc-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      flex-shrink: 0;
      min-height: 42px;
      padding: 10px 18px;
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

    #about-why-choose .awc-button svg {
      width: 15px;
      height: 15px;
    }

    /* SUBTLE BACKGROUND WORD */

    #about-why-choose .awc-outline {
      position: absolute;
      z-index: 0;
      right: -4%;
      top: 5%;
      font-size: clamp(105px, 17vw, 230px);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -.07em;
      color: transparent;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      user-select: none;
      pointer-events: none;
    }

    /* INTERACTION */

    @media (hover:hover) and (pointer:fine) {
      #about-why-choose .awc-card:hover {
        border-color: rgba(255,255,255,.34);
        background: rgba(26,27,31,.97);
        transform: translateY(-3px);
      }

      #about-why-choose .awc-button:hover {
        background: #facc15;
        transform: translateY(-2px);
      }
    }

    #about-why-choose a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #about-why-choose .awc-layout {
        grid-template-columns: 1fr;
      }

      #about-why-choose .awc-feature {
        min-height: 350px;
      }

      #about-why-choose .awc-matrix {
        grid-template-rows: auto auto;
      }

      #about-why-choose .awc-card {
        min-height: 230px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-why-choose .awc-shell {
        padding-inline: 18px;
      }

      #about-why-choose .awc-header {
        margin-bottom: 28px;
      }

      #about-why-choose .awc-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-why-choose .awc-lead {
        font-size: 13px;
      }

      #about-why-choose .awc-feature {
        min-height: 350px;
        padding: 24px;
      }

      #about-why-choose .awc-feature-statement {
        font-size: 28px;
      }

      #about-why-choose .awc-feature-copy {
        font-size: 13px;
      }

      #about-why-choose .awc-matrix {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto;
        gap: 11px;
      }

      #about-why-choose .awc-card {
        min-height: 205px;
        padding: 23px;
        gap: 30px;
      }

      #about-why-choose .awc-card h3 {
        font-size: 20px;
      }

      #about-why-choose .awc-footer {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #about-why-choose .awc-button {
        width: 100%;
      }

      #about-why-choose .awc-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-why-choose .awc-card,
      #about-why-choose .awc-button {
        transition: none;
      }

      #about-why-choose .awc-card:hover,
      #about-why-choose .awc-button:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 10.01 — DECORATIVE BACKGROUND */}

  <div className="awc-outline" aria-hidden="true">
    VALUE
  </div>

  <div className="awc-shell">

    {/* 10.02 — EDITORIAL INTRODUCTION */}

    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header className="awc-header">
        <p className="awc-label">
          10 / WHY WORK WITH INCHTOMILEZ
        </p>

        <h2
          id="about-why-heading"
          className="awc-heading"
        >
          You Don't Need More Marketing Activity.
          You Need the Right Agency Behind It.
        </h2>

        <p className="awc-lead">
          Working with an agency should help you make
          sense of your marketing, not make it more
          complicated. The real value is having
          relevant expertise, clear priorities and
          a shared understanding of where your
          business wants to go.
        </p>
      </header>
    </AnimatedSection>

    {/* 10.03 — MAIN ASYMMETRIC LAYOUT */}

    <div className="awc-layout">

      {/* LEFT — THE CENTRAL PROPOSITION */}

      <article className="awc-feature">

        <div className="awc-feature-top">
          <span className="awc-feature-label">
            THE VALUE OF A CONNECTED AGENCY
          </span>

          <span className="awc-feature-index">
            01 / 05
          </span>
        </div>

        <div>
          <h3 className="awc-feature-statement">
            An Agency Should Help You See
            the Bigger Picture.
          </h3>

          <p className="awc-feature-copy">
            Business owners shouldn't have to
            manage every marketing discipline
            separately or struggle to connect
            conflicting recommendations.
          </p>

          <p className="awc-feature-copy mt-4">
            Our approach brings the different
            parts of marketing into one conversation,
            making it easier to plan, coordinate
            and make informed decisions.
          </p>
        </div>

        <div className="awc-feature-bottom">
          <p>
            Clearer direction. Connected thinking.
            More meaningful conversations.
          </p>
        </div>

      </article>

      {/* RIGHT — CLIENT VALUE MATRIX */}

      <div className="awc-matrix">

        {[
          {
            number: "02",
            title: "Clarity on What Matters",
            description:
              "Marketing involves countless choices. We help frame those decisions around the business challenge, audience and priorities — rather than choosing activities simply because they're popular."
          },
          {
            number: "03",
            title: "Expertise That Connects",
            description:
              "Creative, advertising, search and digital experiences influence one another. Thinking about them together helps reduce disconnected messaging and conflicting directions."
          },
          {
            number: "04",
            title: "A Business-First Perspective",
            description:
              "A campaign can look impressive without addressing the original problem. We believe recommendations should always return to the business objective that started the conversation."
          },
          {
            number: "05",
            title: "Room to Evolve",
            description:
              "Business priorities, customer expectations and platforms change. An agency relationship should leave room to review assumptions, adapt the approach and keep learning."
          }
        ].map((value) => (
          <article
            className="awc-card"
            key={value.number}
          >
            <div className="awc-card-top">
              <span className="awc-number">
                {value.number} / 05
              </span>

              <span
                className="awc-card-arrow"
                aria-hidden="true"
              >
                <ArrowRight />
              </span>
            </div>

            <div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </article>
        ))}

      </div>

    </div>

    {/* 10.04 — CLOSING CTA */}

    <AnimatedSection animation="fadeInUp" delay={0.12}>
      <div className="awc-footer">

        <div>
          <h3 className="awc-footer-title">
            The First Step Is Understanding Your Business.
          </h3>

          <p className="awc-footer-copy">
            Tell us where your brand stands today,
            what's changing and where you'd like
            to take it. We'll start with a conversation
            about the challenge.
          </p>
        </div>

        <Link
          to="/contact"
          className="awc-button"
        >
          Discuss Your Business
          <ArrowRight aria-hidden="true" />
        </Link>

      </div>
    </AnimatedSection>

  </div>

  {/* 10.05 — SECTION BOUNDARY */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 10 ================= */}




























{/* ============================================================
   SECTION 10 — WHY WORK WITH INCHTOMILEZ?
   ABOUT US / THE VALUE OF THE RELATIONSHIP

   10.01 Editorial introduction
   10.02 Left-side agency proposition
   10.03 Four client-value pillars
   10.04 Closing statement + CTA

   Design: Asymmetric editorial + 2x2 value matrix
   Existing imports: Link, ArrowRight, AnimatedSection
   No new dependencies or additional H1
============================================================ */}

<section
  id="about-why-choose"
  aria-labelledby="about-why-heading"
  className="relative isolate overflow-hidden border-t border-white/[0.06] py-16 md:py-24"
  style={{ fontFamily: "'Raleway', sans-serif" }}
>
  <style>{`
    #about-why-choose,
    #about-why-choose * {
      box-sizing: border-box;
    }

    #about-why-choose .awc-shell {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
    }

    /* EDITORIAL HEADING */

    #about-why-choose .awc-header {
      max-width: 870px;
      margin-bottom: 38px;
    }

    #about-why-choose .awc-label {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 20px;
      color: #aab0ba;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    #about-why-choose .awc-label::before {
      content: "";
      width: 24px;
      height: 1px;
      flex: 0 0 24px;
      background: rgba(255,255,255,.5);
    }

    #about-why-choose .awc-heading {
      max-width: 850px;
      margin: 0 0 19px;
      color: #fff !important;
      font-size: clamp(29px, 3.35vw, 45px);
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-why-choose .awc-lead {
      max-width: 680px;
      margin: 0;
      color: #b7bbc4;
      font-size: 14px;
      line-height: 1.85;
    }

    /* MAIN COMPOSITION */

    #about-why-choose .awc-layout {
      display: grid;
      grid-template-columns: minmax(0, .41fr) minmax(0, .59fr);
      align-items: stretch;
      gap: 14px;
      min-width: 0;
    }

    /* LEFT FEATURE */

    #about-why-choose .awc-feature {
      position: relative;
      min-width: 0;
      min-height: 520px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
      padding: clamp(26px, 3vw, 40px);
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 13px;
      background:
        radial-gradient(
          ellipse at 80% 10%,
          rgba(255,255,255,.075),
          transparent 55%
        ),
        linear-gradient(
          145deg,
          rgba(31,32,37,.97),
          rgba(10,11,14,.98)
        );
      overflow: hidden;
    }

    #about-why-choose .awc-feature-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
    }

    #about-why-choose .awc-feature-label {
      color: #aeb3bc;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    #about-why-choose .awc-feature-index {
      color: #858b95;
      font-size: 11px;
    }

    #about-why-choose .awc-feature-statement {
      max-width: 400px;
      margin: 0 0 24px;
      color: #fff !important;
      font-size: clamp(27px, 2.8vw, 38px);
      font-weight: 600;
      line-height: 1.28;
      letter-spacing: -.035em;
      text-wrap: balance;
    }

    #about-why-choose .awc-feature-copy {
      max-width: 385px;
      margin: 0;
      color: #b9bdc6;
      font-size: 14px;
      line-height: 1.9;
    }

    #about-why-choose .awc-feature-bottom {
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,.13);
    }

    #about-why-choose .awc-feature-bottom p {
      margin: 0;
      color: #d6d8dc;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.8;
    }

    /* RIGHT — 2x2 VALUE MATRIX */

    #about-why-choose .awc-matrix {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(245px, auto));
      gap: 14px;
      min-width: 0;
    }

    #about-why-choose .awc-card {
      position: relative;
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 34px;
      padding: 27px 25px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 12px;
      background: rgba(13,14,17,.94);
      overflow: hidden;
      transition:
        border-color .25s ease,
        background-color .25s ease,
        transform .25s ease;
    }

    #about-why-choose .awc-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    #about-why-choose .awc-number {
      color: #c1c5cc;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .07em;
    }

    #about-why-choose .awc-card-arrow {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 50%;
      color: #b7bbc3;
      transform: rotate(-45deg);
    }

    #about-why-choose .awc-card-arrow svg {
      width: 15px;
      height: 15px;
    }

    #about-why-choose .awc-card h3 {
      margin: 0 0 12px;
      color: #fff !important;
      font-size: clamp(18px, 1.65vw, 22px);
      font-weight: 600;
      line-height: 1.35;
      letter-spacing: -.025em;
    }

    #about-why-choose .awc-card p {
      margin: 0;
      color: #afb4be;
      font-size: 12px;
      line-height: 1.85;
    }

    /* BOTTOM PANEL */

    #about-why-choose .awc-footer {
      display: grid;
      grid-template-columns: minmax(0,1fr) auto;
      align-items: center;
      gap: 24px;
      margin-top: 15px;
      padding: 27px 29px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 12px;
      background: rgba(20,21,25,.94);
    }

    #about-why-choose .awc-footer-title {
      margin: 0 0 8px;
      color: #fff !important;
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -.02em;
    }

    #about-why-choose .awc-footer-copy {
      max-width: 700px;
      margin: 0;
      color: #b0b5be;
      font-size: 13px;
      line-height: 1.8;
    }

    #about-why-choose .awc-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      flex-shrink: 0;
      min-height: 42px;
      padding: 10px 18px;
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

    #about-why-choose .awc-button svg {
      width: 15px;
      height: 15px;
    }

    /* SUBTLE BACKGROUND WORD */

    #about-why-choose .awc-outline {
      position: absolute;
      z-index: 0;
      right: -4%;
      top: 5%;
      font-size: clamp(105px, 17vw, 230px);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -.07em;
      color: transparent;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(255,255,255,.035);
      user-select: none;
      pointer-events: none;
    }

    /* INTERACTION */

    @media (hover:hover) and (pointer:fine) {
      #about-why-choose .awc-card:hover {
        border-color: rgba(255,255,255,.34);
        background: rgba(26,27,31,.97);
        transform: translateY(-3px);
      }

      #about-why-choose .awc-button:hover {
        background: #facc15;
        transform: translateY(-2px);
      }
    }

    #about-why-choose a:focus-visible {
      outline: 2px solid #eab308;
      outline-offset: 4px;
    }

    /* TABLET */

    @media (max-width: 950px) {
      #about-why-choose .awc-layout {
        grid-template-columns: 1fr;
      }

      #about-why-choose .awc-feature {
        min-height: 350px;
      }

      #about-why-choose .awc-matrix {
        grid-template-rows: auto auto;
      }

      #about-why-choose .awc-card {
        min-height: 230px;
      }
    }

    /* MOBILE */

    @media (max-width: 640px) {
      #about-why-choose .awc-shell {
        padding-inline: 18px;
      }

      #about-why-choose .awc-header {
        margin-bottom: 28px;
      }

      #about-why-choose .awc-heading {
        font-size: clamp(27px, 7vw, 34px);
      }

      #about-why-choose .awc-lead {
        font-size: 13px;
      }

      #about-why-choose .awc-feature {
        min-height: 350px;
        padding: 24px;
      }

      #about-why-choose .awc-feature-statement {
        font-size: 28px;
      }

      #about-why-choose .awc-feature-copy {
        font-size: 13px;
      }

      #about-why-choose .awc-matrix {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto;
        gap: 11px;
      }

      #about-why-choose .awc-card {
        min-height: 205px;
        padding: 23px;
        gap: 30px;
      }

      #about-why-choose .awc-card h3 {
        font-size: 20px;
      }

      #about-why-choose .awc-footer {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 23px;
      }

      #about-why-choose .awc-button {
        width: 100%;
      }

      #about-why-choose .awc-outline {
        font-size: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #about-why-choose .awc-card,
      #about-why-choose .awc-button {
        transition: none;
      }

      #about-why-choose .awc-card:hover,
      #about-why-choose .awc-button:hover {
        transform: none;
      }
    }
  `}</style>

  {/* 10.01 — DECORATIVE BACKGROUND */}

  <div className="awc-outline" aria-hidden="true">
    VALUE
  </div>

  <div className="awc-shell">

    {/* 10.02 — EDITORIAL INTRODUCTION */}

    <AnimatedSection animation="fadeInUp" delay={0.08}>
      <header className="awc-header">
        <p className="awc-label">
          10 / WHY WORK WITH INCHTOMILEZ
        </p>

        <h2
          id="about-why-heading"
          className="awc-heading"
        >
          You Don't Need More Marketing Activity.
          You Need the Right Agency Behind It.
        </h2>

        <p className="awc-lead">
          Working with an agency should help you make
          sense of your marketing, not make it more
          complicated. The real value is having
          relevant expertise, clear priorities and
          a shared understanding of where your
          business wants to go.
        </p>
      </header>
    </AnimatedSection>

    {/* 10.03 — MAIN ASYMMETRIC LAYOUT */}

    <div className="awc-layout">

      {/* LEFT — THE CENTRAL PROPOSITION */}

      <article className="awc-feature">

        <div className="awc-feature-top">
          <span className="awc-feature-label">
            THE VALUE OF A CONNECTED AGENCY
          </span>

          <span className="awc-feature-index">
            01 / 05
          </span>
        </div>

        <div>
          <h3 className="awc-feature-statement">
            An Agency Should Help You See
            the Bigger Picture.
          </h3>

          <p className="awc-feature-copy">
            Business owners shouldn't have to
            manage every marketing discipline
            separately or struggle to connect
            conflicting recommendations.
          </p>

          <p className="awc-feature-copy mt-4">
            Our approach brings the different
            parts of marketing into one conversation,
            making it easier to plan, coordinate
            and make informed decisions.
          </p>
        </div>

        <div className="awc-feature-bottom">
          <p>
            Clearer direction. Connected thinking.
            More meaningful conversations.
          </p>
        </div>

      </article>

      {/* RIGHT — CLIENT VALUE MATRIX */}

      <div className="awc-matrix">

        {[
          {
            number: "02",
            title: "Clarity on What Matters",
            description:
              "Marketing involves countless choices. We help frame those decisions around the business challenge, audience and priorities — rather than choosing activities simply because they're popular."
          },
          {
            number: "03",
            title: "Expertise That Connects",
            description:
              "Creative, advertising, search and digital experiences influence one another. Thinking about them together helps reduce disconnected messaging and conflicting directions."
          },
          {
            number: "04",
            title: "A Business-First Perspective",
            description:
              "A campaign can look impressive without addressing the original problem. We believe recommendations should always return to the business objective that started the conversation."
          },
          {
            number: "05",
            title: "Room to Evolve",
            description:
              "Business priorities, customer expectations and platforms change. An agency relationship should leave room to review assumptions, adapt the approach and keep learning."
          }
        ].map((value) => (
          <article
            className="awc-card"
            key={value.number}
          >
            <div className="awc-card-top">
              <span className="awc-number">
                {value.number} / 05
              </span>

              <span
                className="awc-card-arrow"
                aria-hidden="true"
              >
                <ArrowRight />
              </span>
            </div>

            <div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </article>
        ))}

      </div>

    </div>

    {/* 10.04 — CLOSING CTA */}

    <AnimatedSection animation="fadeInUp" delay={0.12}>
      <div className="awc-footer">

        <div>
          <h3 className="awc-footer-title">
            The First Step Is Understanding Your Business.
          </h3>

          <p className="awc-footer-copy">
            Tell us where your brand stands today,
            what's changing and where you'd like
            to take it. We'll start with a conversation
            about the challenge.
          </p>
        </div>

        <Link
          to="/contact"
          className="awc-button"
        >
          Discuss Your Business
          <ArrowRight aria-hidden="true" />
        </Link>

      </div>
    </AnimatedSection>

  </div>

  {/* 10.05 — SECTION BOUNDARY */}

  <div
    className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06] pointer-events-none"
    aria-hidden="true"
  />

</section>

{/* ================= END SECTION 10 ================= */}













    </div>

  );




}
