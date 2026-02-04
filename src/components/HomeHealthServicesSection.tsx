import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stethoscope, TabletSmartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesInclude = [
  "Registered Nursing",
  "Licensed Vocational Nursing",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
  "Home Health Aide",
  "Medical Social Work",
];

export function HomeHealthServicesSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-muted/40 dark:bg-muted/20">
      <div className="container px-4 relative z-10 max-w-6xl mx-auto">
        {/* Home Health Services Include + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              HOME HEALTH SERVICES INCLUDE
            </h2>
            <ul className="space-y-3">
              {servicesInclude.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              We are a leading provider of home health services. Restorative Health Care delivers
              skilled nursing and therapy services in the comfort and privacy of your home. Your
              Restorative Health Care (RHC) nurse or therapist will tailor all services to your
              unique condition in accordance with your doctor's orders. Everything will be done
              with your doctor's orders, supervision, and approval.
            </p>
            <p>
              Our goal at Restorative Health Care (RHC) is to help the community with its health
              care needs. We service every aspect of the population, from infants to seniors,
              chronic conditions to preventative care, acute/episodic/chronic disease management.
              Restorative Health Care (RHC) can help. As a licensed home health agency, Restorative
              Health Care (RHC) can provide care for your father, mother, husband, wife, son, or
              daughter.
            </p>
          </motion.div>
        </div>

        {/* How We Can Help - Three blocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
            How We Can Help
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* After a doctor's visit - Yellow/amber */}
            <div className="rounded-2xl bg-amber-100 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-800/50 p-6 sm:p-8 flex flex-col">
              <p className="text-foreground text-sm sm:text-base leading-relaxed flex-1 mb-6">
                If your doctor suggested home health after a recent appointment, the Restorative
                Health Care (RHC) clinical team can help by professionally coordinating with your
                doctor to manage your condition. Together with you and your physician, we will
                develop goals and provide treatment in your home. Restorative Health Care (RHC)
                can help by teaching you to manage your disease and to identify changes in your
                symptoms that may indicate a worsening of your condition.
              </p>
              <div className="flex justify-center">
                <Button variant="hero" size="default" asChild>
                  <Link to="/#contact">Find Out More</Link>
                </Button>
              </div>
            </div>

            {/* After a hospitalization - Light blue */}
            <div className="rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <p className="text-foreground font-semibold uppercase tracking-wide mb-6 text-sm sm:text-base">
                After a hospitalization…
              </p>
              <div className="flex justify-center text-primary">
                <Stethoscope className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                We support your transition home with skilled nursing and therapy tailored to your
                recovery plan.
              </p>
            </div>

            {/* Contact us / Digital - Medium blue */}
            <div className="rounded-2xl bg-primary/20 dark:bg-primary/30 border border-primary/30 dark:border-primary/40 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <p className="text-foreground font-semibold uppercase tracking-wide mb-6 text-sm sm:text-base">
                Manage your care
              </p>
              <div className="flex justify-center text-primary mb-4">
                <TabletSmartphone className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Stay connected with your care team. We coordinate with your physician and keep
                you informed.
              </p>
              <Button variant="outline" size="default" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
