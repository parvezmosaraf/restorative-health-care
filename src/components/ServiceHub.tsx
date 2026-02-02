import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Activity, 
  Baby, 
  Users, 
  Pill, 
  Syringe 
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    description: "RN & LVN care for wound management, IV therapy, medication administration, and chronic disease monitoring.",
    color: "from-primary to-teal-400",
    size: "bento-large",
  },
  {
    icon: Activity,
    title: "Physical Therapy",
    description: "Restore mobility and independence with personalized rehabilitation programs.",
    color: "from-blue-500 to-cyan-400",
    size: "",
  },
  {
    icon: Brain,
    title: "Occupational Therapy",
    description: "Regain daily living skills and cognitive function with expert guidance.",
    color: "from-purple-500 to-pink-400",
    size: "",
  },
  {
    icon: Heart,
    title: "Disease Management",
    description: "Comprehensive programs for diabetes, heart disease, COPD, and other chronic conditions.",
    color: "from-accent to-orange-400",
    size: "bento-tall",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized nursing and therapy for infants, children, and adolescents with complex medical needs.",
    color: "from-pink-500 to-rose-400",
    size: "",
  },
  {
    icon: Users,
    title: "Geriatric Care",
    description: "Compassionate care designed for the unique needs of seniors, promoting dignity and quality of life.",
    color: "from-amber-500 to-yellow-400",
    size: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function ServiceHub() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-primary w-[500px] h-[500px] top-0 right-0 opacity-20" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Home Health</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From skilled nursing to specialized therapies, we provide the full spectrum of care 
            your loved ones need—delivered with compassion in the comfort of home.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bento-grid max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`service-card group cursor-pointer ${service.size}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
