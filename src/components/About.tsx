import { motion } from "framer-motion";
import { Award, Users, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every interaction is guided by genuine care and empathy for our patients and their families.",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    description: "Our highly trained team maintains the highest standards of medical care and safety.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description: "We involve and support the entire family throughout the care journey.",
  },
  {
    icon: Award,
    title: "Integrity Always",
    description: "Transparent communication and ethical practices in everything we do.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4 relative z-10 w-full max-w-[100vw]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
              About Restorative Care
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Healing at Home, <span className="gradient-text">With Heart</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Restorative Care has been the trusted partner for families 
              across Central and South Texas. We believe that the best healing happens in 
              the comfort of home, surrounded by loved ones.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of dedicated nurses, therapists, and care specialists work together 
              to create personalized care plans that address each patient's unique needs. 
              From newborns to seniors, we're here for every stage of life.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Serving Texas</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Care Professionals</div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card rounded-2xl p-6 hover:shadow-glass-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
