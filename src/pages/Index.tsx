import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustTicker } from "@/components/TrustTicker";
import { ServiceHub } from "@/components/ServiceHub";
import { About } from "@/components/About";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { IntakeForm } from "@/components/IntakeForm";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustTicker />
      <ServiceHub />
      <About />
      <ServiceAreaMap />
      <IntakeForm />
      <Footer />
      <CareCompanion />
    </div>
  );
};

export default Index;
