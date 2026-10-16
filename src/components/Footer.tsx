import { Link } from 'react-router';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Star,
  Globe,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';

import logoAvatar from 'figma:asset/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png';
import logoText from 'figma:asset/291b7319b5121f776c225ad4d66462f7385e5e1e.png';

import { ROUTES, routeTo } from '../config/routes';

export function Footer() {
  const [email, setEmail] = useState('');

  /**
   * Keep footer links aligned with the same canonical route system
   * used by App.tsx, Navigation.tsx, sitemap generation and SEO.
   */
  const services = [
    {
      name: 'Digital Marketing',
      path: routeTo.service('digital-marketing'),
    },
    {
      name: 'Advertising',
      path: routeTo.service('advertising'),
    },
    {
      name: 'Ecommerce Marketing',
      path: routeTo.service('ecommerce-marketing'),
    },
    {
      name: 'Branding & Identity',
      path: routeTo.service('branding-identity'),
    },
    {
      name: 'Web Design & Development',
      path: routeTo.service('web-design-development'),
    },
    {
      name: 'Graphic Design',
      path: routeTo.service('graphic-design'),
    },
    {
      name: 'Software Development',
      path: routeTo.service('software-development'),
    },
    {
      name: 'Video & Media Production',
      path: routeTo.service('video-media-production'),
    },
  ] as const;

  const industries = [
    {
      name: 'Healthcare',
      path: routeTo.industry('healthcare'),
    },
    {
      name: 'Technology',
      path: routeTo.industry('technology'),
    },
    {
      name: 'Education',
      path: routeTo.industry('education'),
    },
    {
      name: 'Real Estate',
      path: routeTo.industry('real-estate'),
    },
    {
      name: 'Retail',
      path: routeTo.industry('retail'),
    },
    {
      name: 'Finance',
      path: routeTo.industry('finance'),
    },
    {
      name: 'Hospitality',
      path: routeTo.industry('hospitality'),
    },
    {
      name: 'Automotive',
      path: routeTo.industry('automotive'),
    },
  ] as const;

  const quickLinks = [
    {
      name: 'About Us',
      path: ROUTES.about,
    },
    {
      name: 'Services',
      path: ROUTES.services,
    },
    {
      name: 'Industries',
      path: ROUTES.industries,
    },
    {
      name: 'Blogs',
      path: ROUTES.blogs,
    },
    {
      name: 'FAQs',
      path: ROUTES.faqs,
    },
    {
      name: 'Contact Us',
      path: ROUTES.contact,
    },
  ] as const;

  const legalLinks = [
    {
      name: 'Privacy Policy',
      path: ROUTES.privacyPolicy,
    },
    {
      name: 'Terms of Service',
      path: ROUTES.termsOfService,
    },
    {
      name: 'Cookie Policy',
      path: ROUTES.cookiePolicy,
    },
    {
      name: 'Disclaimer',
      path: ROUTES.disclaimer,
    },
    {
      name: 'Refund Policy',
      path: ROUTES.refundPolicy,
    },
  ] as const;

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/inchtomilez',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/inchtomilez',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/inchtomilez',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/inchtomilez',
      color: 'hover:text-sky-500',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@inchtomilez',
      color: 'hover:text-red-500',
    },
  ] as const;

  const stats = [
    {
      icon: Users,
      value: '96+',
      label: 'Clients Served',
    },
    {
      icon: TrendingUp,
      value: '74+',
      label: 'Marketing Campaigns',
    },
    {
      icon: Award,
      value: '7',
      label: 'Years Experience',
    },
    {
      icon: Globe,
      value: '13+',
      label: 'International Campaigns',
    },
  ] as const;

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return;
    }

    /**
     * Newsletter submission is intentionally kept client-side for now,
     * matching the existing footer behaviour.
     *
     * When a newsletter API/provider is connected later, submit
     * normalizedEmail there before clearing the field.
     */
    console.log('Newsletter subscription:', normalizedEmail);

    setEmail('');
  };

  return (
    <footer className="bg-[var(--background)] mt-32">
      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="text-center">
                  <Icon
                    className="w-8 h-8 mx-auto mb-3 text-[var(--foreground)]"
                    aria-hidden="true"
                  />

                  <div className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1">
                    {stat.value}
                  </div>

                  <p className="text-[0.8125rem] text-[var(--muted-foreground)]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER CONTENT
      ====================================================== */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* =================================================
              COMPANY INFO
          ================================================== */}

          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link
                to={ROUTES.home}
                className="flex items-center gap-3 mb-4 w-fit"
                aria-label="Inchtomilez home"
              >
                <img
                  src={logoAvatar}
                  alt="Inchtomilez Digital Marketing And Advertising Agency"
                  className="h-12 w-auto"
                />

                <img
                  src={logoText}
                  alt="Inchtomilez"
                  className="h-12 w-auto"
                />
              </Link>

              <p className="text-[0.9375rem] leading-relaxed text-[var(--foreground)] opacity-80 mb-4">
                Transforming Brands into Market Leaders
              </p>

              <p className="text-[0.8125rem] leading-relaxed text-[var(--muted-foreground)] mb-6">
                Leading digital marketing and advertising agency with offices
                in Indore and Pune, India. We combine data-driven strategies
                with creative excellence to deliver exceptional results.
              </p>
            </div>

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="space-y-5 mb-8">
              {/* Email */}

              <div className="flex items-start gap-3 text-[0.8125rem] text-[var(--muted-foreground)]">
                <Mail
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-[var(--foreground)]"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:hello@inchtomilez.com"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    hello@inchtomilez.com
                  </a>

                  <a
                    href="mailto:support@inchtomilez.com"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    support@inchtomilez.com
                  </a>
                </div>
              </div>

              {/* Indore Office */}

              <div className="pt-2">
                <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] mb-3">
                  Indore — Vijay Nagar Office
                </p>

                <div className="flex items-start gap-3 text-[0.8125rem] text-[var(--muted-foreground)] mb-2">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[var(--foreground)]"
                    aria-hidden="true"
                  />

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Vijay+Nagar+Indore+Madhya+Pradesh+452010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors leading-relaxed"
                  >
                    Vijay Nagar, Indore,
                    <br />
                    Madhya Pradesh 452010, India
                  </a>
                </div>

                <div className="flex items-start gap-3 text-[0.8125rem] text-[var(--muted-foreground)]">
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[var(--foreground)]"
                    aria-hidden="true"
                  />

                  <a
                    href="tel:+919009970709"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +91 90099 70709
                  </a>
                </div>
              </div>

              {/* Pune Office */}

              <div className="pt-3">
                <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] mb-3">
                  Pune — Nashik Phata Office
                </p>

                <div className="flex items-start gap-3 text-[0.8125rem] text-[var(--muted-foreground)] mb-2">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[var(--foreground)]"
                    aria-hidden="true"
                  />

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=855+Gera%27s+Imperium+Gateway+Nashik+Phata+Pimpri+Chinchwad+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors leading-relaxed"
                  >
                    855, Gera&apos;s Imperium Gateway,
                    <br />
                    Nashik Phata, Pimpri-Chinchwad,
                    <br />
                    Maharashtra, India
                  </a>
                </div>

                <div className="flex items-start gap-3 text-[0.8125rem] text-[var(--muted-foreground)]">
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[var(--foreground)]"
                    aria-hidden="true"
                  />

                  <a
                    href="tel:+919009979600"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +91 90099 79600
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <div>
              <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] opacity-90 mb-3">
                Follow Us
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                      aria-label={`Follow Inchtomilez on ${social.name}`}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <h2 className="text-lg font-medium text-[var(--foreground)] mb-6">
              Services
            </h2>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-[0.8125rem] text-[var(--muted-foreground)] hover:text-yellow-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      aria-hidden="true"
                    />

                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              INDUSTRIES
          ================================================== */}

          <div>
            <h2 className="text-lg font-medium text-[var(--foreground)] mb-6">
              Industries
            </h2>

            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.path}>
                  <Link
                    to={industry.path}
                    className="text-[0.8125rem] text-[var(--muted-foreground)] hover:text-yellow-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      aria-hidden="true"
                    />

                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              QUICK + LEGAL LINKS
          ================================================== */}

          <div>
            <h2 className="text-lg font-medium text-[var(--foreground)] mb-6">
              Quick Links
            </h2>

            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[0.8125rem] text-[var(--muted-foreground)] hover:text-yellow-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      aria-hidden="true"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h2 className="text-lg font-medium text-white mb-6">
                Legal
              </h2>

              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[0.8125rem] text-white/60 hover:text-yellow-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =================================================
              NEWSLETTER
          ================================================== */}

          <div>
            <h2 className="text-lg font-medium text-white mb-6">
              Newsletter
            </h2>

            <p className="text-[0.8125rem] text-white/60 mb-6 leading-relaxed">
              Subscribe to get the latest marketing insights, industry trends,
              and exclusive offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-[0.8125rem] placeholder:text-white/40 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold group"
              >
                Subscribe

                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </button>
            </form>

            <p className="text-[0.75rem] text-white/40 mt-4">
              By subscribing, you agree to our{' '}
              <Link
                to={ROUTES.privacyPolicy}
                className="hover:text-yellow-500 transition-colors"
              >
                Privacy Policy
              </Link>{' '}
              and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[0.8125rem] text-white/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Inchtomilez Digital Marketing And Advertising Agency.
              All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-[0.8125rem] text-white/60">
              <span>
                Made with ❤️ in Indore &amp; Pune, India
              </span>

              <span className="hidden md:inline" aria-hidden="true">
                •
              </span>

              <span>
                Trusted by 50+ Brands
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
