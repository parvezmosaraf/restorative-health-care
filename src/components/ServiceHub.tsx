import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    slug: "adult-geriatric-services",
    path: "/services/adult-geriatric",
    title: "Adult/Geriatric Services",
    description: "Compassionate, comprehensive care for adults and seniors in the comfort of home.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=min",
    imageAlt: "Senior care and adult health services",
  },
  {
    slug: "pediatric-services",
    path: "/services/pediatric",
    title: "Pediatric Services",
    description: "Specialized care for infants, children, and adolescents—delivered with warmth and expertise.",
    image: "https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=800&h=500&fit=min",
    imageAlt: "Pediatric and child health care",
  },
  {
    slug: "disease-management",
    path: "/services/disease-management",
    title: "Disease Management Program",
    description: "Structured programs to help manage chronic conditions and improve quality of life.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=min",
    imageAlt: "Disease management and chronic care",
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
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-primary w-[500px] h-[500px] top-0 right-0 opacity-20" />

      <div className="container px-4 relative z-10 w-full max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Comprehensive <span className="gradient-text">Home Health</span> Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-0">
            From adult and geriatric care to pediatric services and disease management—delivered with compassion in the comfort of home.
          </p>
          <Link
            to="/patient-services"
            className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            View all service options
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid max-w-6xl mx-auto w-full min-w-0"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              className="service-card group min-w-0 overflow-visible flex flex-col"
            >
              <Link
                to={service.path}
                className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl overflow-visible"
              >
                <div className="rounded-t-2xl overflow-hidden mb-4 aspect-[16/9] bg-muted flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="min-w-0 pl-[2px] flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
