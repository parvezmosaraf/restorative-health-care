import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Printer, FileText, Facebook, AlertTriangle } from "lucide-react";

const footerNavLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/#about" },
  { name: "Patient Services", to: "/patient-services" },
  { name: "Careers", to: "/careers" },
  { name: "Contact Us", to: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container px-4 w-full max-w-[100vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_180px] gap-8 sm:gap-12 max-w-6xl mx-auto items-start">
          {/* Brand & Contact */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/favicon.png" alt="Restorative Health Care" className="h-12 w-auto" />
              <span className="text-lg font-semibold text-background leading-tight">
                Restorative Health Care
              </span>
            </Link>
            <div className="space-y-3 text-background/90">
              <a href="mailto:support@restorativehealth.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                support@restorativehealth.com
              </a>
              <a href="tel:+12107378090" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (210) 737-8090
              </a>
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 flex-shrink-0" aria-hidden />
                <span>(866) 653-2907</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  8600 Wurzbach Rd<br />
                  Building 700<br />
                  San Antonio, TX 78240
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-background/70 hover:text-primary transition-colors text-sm uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Option cards - right side, advanced small cards */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <Link
              to="/emergency-alerts"
              className="group flex items-center gap-3 rounded-xl border border-background/20 bg-background/10 p-3 shadow-sm hover:bg-background/20 hover:shadow-md hover:border-primary/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f] text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-sm font-semibold text-background group-hover:text-primary transition-colors">
                  Emergency Alerts
                </span>
                <span className="block text-xs text-background/70">Weather & warnings</span>
              </div>
            </Link>
            <Link
              to="/locations"
              className="group flex items-center gap-3 rounded-xl border border-background/20 bg-background/10 p-3 shadow-sm hover:bg-background/20 hover:shadow-md hover:border-primary/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f] text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-sm font-semibold text-background group-hover:text-primary transition-colors">
                  Location
                </span>
                <span className="block text-xs text-background/70">Our offices</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
              <Facebook className="w-4 h-4" />
            </a>
            <Link to="/privacy-policy" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Privacy Policy
            </Link>
          </div>
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Restorative Health Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
