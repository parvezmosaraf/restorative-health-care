import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const serviceAreas = [
  "San Antonio",
  "Austin",
  "New Braunfels",
  "Seguin",
  "San Marcos",
  "Kyle",
  "Buda",
  "Lockhart",
  "Gonzales",
  "Luling",
  "La Vernia",
  "Floresville",
];

export function ServiceAreaMap() {
  return (
    <section id="areas" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Stylized Texas Map */}
              <div className="aspect-square relative">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Texas Outline (simplified) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M50,50 L250,50 L280,100 L260,150 L280,200 L200,280 L150,250 L100,280 L50,200 L30,150 Z"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="opacity-30"
                  />
                  
                  {/* Service Area Highlight */}
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    cx="150"
                    cy="180"
                    r="60"
                    fill="url(#serviceGradient)"
                    className="opacity-30"
                  />
                  
                  {/* Pulsing Center Points */}
                  {[
                    { cx: 130, cy: 200, label: "San Antonio" },
                    { cx: 160, cy: 140, label: "Austin" },
                    { cx: 145, cy: 170, label: "San Marcos" },
                  ].map((city, i) => (
                    <g key={i}>
                      <motion.circle
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.2 }}
                        cx={city.cx}
                        cy={city.cy}
                        r="8"
                        fill="hsl(var(--primary))"
                      />
                      <motion.circle
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        cx={city.cx}
                        cy={city.cy}
                        r="12"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />
                    </g>
                  ))}
                  
                  <defs>
                    <radialGradient id="serviceGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Labels */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="absolute top-1/2 left-1/4 transform -translate-x-1/2"
                >
                  <div className="glass-card rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap">
                    San Antonio
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.7 }}
                  className="absolute top-1/3 right-1/4 transform translate-x-1/2"
                >
                  <div className="glass-card rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap">
                    Austin
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
              <MapPin className="w-4 h-4" />
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving <span className="gradient-text">Central & South Texas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our dedicated team provides quality home health care across the greater 
              San Antonio and Austin metropolitan areas, reaching families in both 
              urban centers and rural communities.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
