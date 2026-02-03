import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Building2, Briefcase, Clock } from "lucide-react";

const companyImages = [
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
    alt: "Caregiver with senior at home",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    alt: "Children together",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
    alt: "Healthcare professional with patient",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      {/* Section title */}
      <div className="container px-4 pt-16 sm:pt-20 pb-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          <span className="text-primary">ABOUT </span>
          <span className="text-accent">US</span>
        </motion.h2>
      </div>

      {/* OUR COMPANY: left text, right three images */}
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary">OUR COMPANY</h3>
            <p className="text-muted-foreground leading-relaxed">
              Restorative Health Care provides a stable employment environment for Nurses and Therapist to practice their profession.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Due to the Nurse / Therapist / Patient oriented philosophy, the company was able to recruit top nursing and management talent. The company was an immediate success and now has over 300 clinical and patient care employees.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Restorative admitted its first patient in June 2000, and as of 2019, has an active Patient census with approximately 700 patients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Restorative Health Care (RHC) has four locations in South Texas to provide you a full range of Pediatric Nursing and Therapy Services at home. We are conveniently located in San Antonio, McAllen, Corpus Christi, and Austin. Please{" "}
              <Link to="/#contact" className="text-primary font-semibold underline hover:no-underline">
                contact us
              </Link>{" "}
              for additional information about how we can help your childcare needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-end gap-0"
          >
            {companyImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg w-full max-w-sm -mt-8 first:mt-0"
                style={{ zIndex: companyImages.length - i }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-48 sm:h-56 object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* PATIENT PHILOSOPHY: left icon, right dark teal block */}
      <div className="grid lg:grid-cols-2 min-h-[320px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-muted/50 flex items-center justify-center p-8 sm:p-12"
        >
          <Building2 className="w-32 h-32 sm:w-40 sm:h-40 text-primary" strokeWidth={1.5} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">PATIENT PHILOSOPHY</h3>
          <p className="text-primary-foreground/95 leading-relaxed text-sm sm:text-base">
            Restorative Health Care (RHC) provides home health services that promote the client's value of life, utilizing skilled clinical resources to minimize negative illness and disability outcomes and to maximize each clients potential level-of-independent functioning while restoring, maintaining, and promoting client health. We develop plans of care for each individual client that create an opportunity for improved physiological, safety, self-esteem, and self-actualization outcomes. Our client's and their family's personal beliefs, values, and rights are factors when determining our client's service needs. We believe that patient education leads to improved independence, faster recovery, higher levels of satisfaction, and reduced hospitalization. We provide services regardless of race, creed, color or age.
          </p>
        </motion.div>
      </div>

      {/* OUR MISSION: left target icon, right yellow block */}
      <div className="grid lg:grid-cols-2 min-h-[280px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-muted/50 flex items-center justify-center p-8 sm:p-12"
        >
          <Target className="w-32 h-32 sm:w-40 sm:h-40 text-primary" strokeWidth={1.5} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-amber-200 dark:bg-amber-300/80 text-neutral-900 p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">OUR MISSION</h3>
          <p className="text-neutral-800 dark:text-neutral-900 leading-relaxed text-sm sm:text-base">
            To improve our client and employee quality of life by creating an organization that provides cost effective, competent, compassionate, high quality care and uncompromising internal and external service excellence.
          </p>
        </motion.div>
      </div>

      {/* MANAGEMENT PHILOSOPHY: left light blue block, right icon */}
      <div className="grid lg:grid-cols-2 min-h-[280px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-sky-100 dark:bg-sky-200/60 text-foreground p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">MANAGEMENT PHILOSOPHY</h3>
          <p className="text-muted-foreground dark:text-neutral-800 leading-relaxed text-sm sm:text-base">
            The management philosophy for Restorative Health Care (RHC) is summarized as Quality Patient Care, Long-Term Employee Satisfaction, and Long-Term Stakeholder Value.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-muted/50 flex items-center justify-center gap-6 p-8 sm:p-12"
        >
          <Briefcase className="w-24 h-24 sm:w-28 sm:h-28 text-primary" strokeWidth={1.5} />
          <Clock className="w-20 h-20 sm:w-24 sm:h-24 text-primary" strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
}
