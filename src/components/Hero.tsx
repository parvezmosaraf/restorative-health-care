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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Background Gradient Orbs */}
      <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 opacity-40" />
      <div className="orb orb-accent w-[400px] h-[400px] bottom-20 -left-20 opacity-30" />
      <div className="orb orb-primary w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container relative z-10 px-4 w-full max-w-[100vw]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                <Button variant="outline" size="lg" className="sm:size-xl text-sm sm:text-base">
                  Refer a Patient
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

            {/* Right Content - Hero Image + Quality Care Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden md:block"
            >
              <div className="relative max-w-lg mx-auto w-full min-w-0">
                {/* Hero image - home health care / compassionate care */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl ring-1 ring-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=750&fit=crop"
                    alt="Compassionate home health care - nurse with patient"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Quality Care card overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-6 -left-4 right-4 md:right-0 glass-card rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border border-white/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Quality Care</h3>
                  <p className="text-sm text-muted-foreground">Medicare & Medicaid Certified</p>
                </motion.div>

                {/* Floating Badge - ACHC Accredited */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-4 right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 border border-accent/30 bg-accent/10"
                >
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground text-sm">ACHC Accredited</span>
                </motion.div>

                {/* Floating Badge - Bilingual Staff */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-24 left-0 glass-card rounded-xl px-3 py-2 flex items-center gap-2 border border-primary/30 bg-primary/10"
                >
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">Bilingual Staff</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
