import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/#about" },
  { name: "Patient Services", to: "/#services" },
  { name: "Careers", to: "/careers" },
  { name: "Contact Us", to: "/#contact" },
];

function isLinkActive(pathname: string, hash: string, to: string): boolean {
  if (to === "/") return pathname === "/" && !hash;
  if (to === "/careers") return pathname === "/careers";
  if (to.startsWith("/#")) {
    const linkHash = to.slice(1);
    return pathname === "/" && hash === linkHash;
  }
  return false;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname === "/" && !hash) e.preventDefault();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 py-2 sm:px-4 sm:py-3 md:py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 flex items-center justify-between gap-2 dark:bg-white/75 dark:border-neutral-200/70 dark:shadow-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0 flex-shrink">
            <img src="/logo.png" alt="Restorative Health Care" className="h-8 w-auto sm:h-10 md:h-12 max-h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, hash, link.to);
              const isHome = link.to === "/";
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={isHome ? handleHomeClick : undefined}
                  className={`transition-colors duration-200 font-medium ${
                    active
                      ? "text-primary dark:text-[hsl(174,62%,32%)] font-semibold"
                      : "text-foreground dark:text-neutral-800 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+12107378090" className="flex items-center gap-2 text-primary font-semibold dark:text-[hsl(174,62%,28%)] dark:font-bold">
              <Phone className="w-4 h-4" />
              <span>(210) 737-8090</span>
            </a>
            <ThemeToggle />
            <Button variant="hero" size="default" asChild>
              <Link to="/#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors dark:text-neutral-800 dark:hover:bg-neutral-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 glass-card rounded-2xl p-6 dark:bg-white/75 dark:border-neutral-200/70 dark:shadow-md"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const active = isLinkActive(pathname, hash, link.to);
                  const isHome = link.to === "/";
                  const handleClick = (e: React.MouseEvent) => {
                    if (isHome) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      if (pathname === "/" && !hash) e.preventDefault();
                    }
                    setIsOpen(false);
                  };
                  return (
                    <Link
                      key={link.name}
                      to={link.to}
                      onClick={handleClick}
                      className={`transition-colors duration-200 font-medium py-2 ${
                        active
                          ? "text-primary dark:text-[hsl(174,62%,32%)] font-semibold"
                          : "text-foreground dark:text-neutral-800 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <hr className="border-border dark:border-neutral-200" />
                <div className="flex items-center justify-between py-2">
                  <a href="tel:+12107378090" className="flex items-center gap-2 text-primary font-semibold dark:text-[hsl(174,62%,28%)] dark:font-bold">
                    <Phone className="w-4 h-4" />
                    <span>(210) 737-8090</span>
                  </a>
                  <ThemeToggle />
                </div>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/#contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
