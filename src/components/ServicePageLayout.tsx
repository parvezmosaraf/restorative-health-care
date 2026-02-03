import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";

interface ServicePageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ServicePageLayout({ title, description, children }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16">
        <div className="container px-4 relative z-10 w-full max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-8 mt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-lg text-muted-foreground mb-10">{description}</p>
            )}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Ready to get started?</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <Link to="/#contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+12107378090">(210) 737-8090</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <CareCompanion />
    </div>
  );
}
