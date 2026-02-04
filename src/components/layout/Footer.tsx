import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/config/business";

const footerLinks = {
  services: [
    { href: "/internet-assistance", label: "Internet Assistance" },
    { href: "/cable-tv-assistance", label: "Cable TV Assistance" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/advertising-disclosure", label: "Advertising Disclosure" },
    { href: "/do-not-sell", label: "Do Not Sell My Personal Information" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-slate-dark">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-ocean-light to-accent bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">
                {BUSINESS.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Independent third-party service assistance startup for cable, internet, and streaming guidance. Launched in {BUSINESS.foundedYear}.
            </p>
            <div className="space-y-3">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{BUSINESS.phone}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 lg:mb-6 text-white">Services</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 lg:mb-6 text-white">Company</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 lg:mb-6 text-white">Legal</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer - CRITICAL FOR GOOGLE ADS COMPLIANCE */}
        <div className="mt-10 lg:mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gray-800/50 rounded-xl p-4 lg:p-6 mb-8">
            <h5 className="font-semibold text-sm mb-3 text-white">Important Disclaimer</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              {BUSINESS.disclaimer}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. All trademarks belong to their respective owners.</p>
            <p className="font-medium">{BUSINESS.shortDisclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
