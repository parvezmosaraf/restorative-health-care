import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustTicker } from "@/components/TrustTicker";
import { ServiceHub } from "@/components/ServiceHub";
import { About } from "@/components/About";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { IntakeForm } from "@/components/IntakeForm";
import { HomeHealthServicesSection } from "@/components/HomeHealthServicesSection";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <TrustTicker />
      <ServiceHub />
      <About />
      <IntakeForm />
      <HomeHealthServicesSection />
      <ServiceAreaMap />
      <Footer />
      <CareCompanion />
    </div>
  );
};

export default Index;
