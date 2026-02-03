import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Patients Served" },
  { icon: Clock, value: "24/7", label: "Care Available" },
];

export function Hero() {
  return (
    <section className="relative min-h-0 md:min-h-[85vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 md:pb-12">
      {/* Background Gradient Orbs */}
      <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 opacity-40" />
      <div className="orb orb-accent w-[400px] h-[400px] bottom-20 -left-20 opacity-30" />
      <div className="orb orb-primary w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container relative z-10 px-4 w-full max-w-[100vw]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 mt-2 sm:mt-0"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Trusted Home Health Care in Central Texas
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              >
                Compassionate Care,{" "}
                <span className="gradient-text">Right at Home</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Expert nursing, therapy, and disease management services delivered with warmth and professionalism. From pediatric to geriatric care, we're here for every stage of life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button variant="hero" size="lg" className="sm:size-xl text-sm sm:text-base">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="outline" size="lg" className="sm:size-xl text-sm sm:text-base" asChild>
                  <Link to="/#contact">Refer a Patient</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image (full image, no card) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center"
            >
              <motion.img
                src="/big-family-near-hospital.png"
                alt="Compassionate home health care"
                className="max-w-full w-full h-full object-contain object-center"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
