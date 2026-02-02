import { motion } from "framer-motion";
import { Clock, Shield, Award, Heart, Phone, Star } from "lucide-react";

const tickerItems = [
  { icon: Clock, text: "24/7 Care Available" },
  { icon: Shield, text: "Medicare & Medicaid Certified" },
  { icon: Award, text: "ACHC Accredited" },
  { icon: Heart, text: "Compassionate Staff" },
  { icon: Phone, text: "Same-Day Consultations" },
  { icon: Star, text: "5-Star Patient Reviews" },
  { icon: Clock, text: "24/7 Care Available" },
  { icon: Shield, text: "Medicare & Medicaid Certified" },
  { icon: Award, text: "ACHC Accredited" },
  { icon: Heart, text: "Compassionate Staff" },
  { icon: Phone, text: "Same-Day Consultations" },
  { icon: Star, text: "5-Star Patient Reviews" },
];

export function TrustTicker() {
  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 text-primary-foreground"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">{item.text}</span>
            <span className="mx-4 opacity-30">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
