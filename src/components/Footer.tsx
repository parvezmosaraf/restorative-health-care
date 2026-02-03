import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, Facebook } from "lucide-react";

const footerNavLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/#about" },
  { name: "Patient Services", to: "/#services" },
  { name: "Careers", to: "/careers" },
  { name: "Contact Us", to: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container px-4 w-full max-w-[100vw]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Restorative Health Care" className="h-12 w-auto" />
              <span className="text-lg font-semibold text-background leading-tight">
                RESTORATIVE<br />HEALTH CARE
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
              <div className="flex items-start gap-3">
                <span className="text-background/70 mt-0.5">Fax</span>
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

          {/* Navigation */}
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Privacy Policy
            </a>
          </div>
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Restorative Health Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
