import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Skilled Nursing", href: "#" },
    { name: "Physical Therapy", href: "#" },
    { name: "Occupational Therapy", href: "#" },
    { name: "Pediatric Care", href: "#" },
    { name: "Geriatric Care", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "News & Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Patient Portal", href: "#" },
    { name: "Physician Referrals", href: "#" },
    { name: "Insurance Info", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Restorative<span className="text-primary">Care</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Compassionate, quality home health care for Central and South Texas families. 
              Medicare & Medicaid certified, ACHC accredited.
            </p>
            <div className="space-y-3">
              <a href="tel:+18001234567" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                1-800-CARE (1-800-227-3)
              </a>
              <a href="mailto:info@restorativecare.com" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@restorativecare.com
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                San Antonio, TX
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Restorative Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                HIPAA Compliance
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
