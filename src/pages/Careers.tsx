import { motion } from "framer-motion";
import { MapPin, Clock, Percent } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";
import { Button } from "@/components/ui/button";

const APPLY_URL = "https://onboarding.restorativehealth.com/#!/login/";

const jobs = [
  {
    title: "Pediatric OT & OTA's",
    location: "San Antonio - Corpus Christi - McAllen - Austin",
    description: "Home health experience preferred, but not required.",
    employmentType: "Full Time/Part Time",
    payRate: "Negotiable",
  },
  {
    title: "Pediatric SLP & STA's",
    location: "San Antonio - Corpus Christi - McAllen - Austin",
    description: "Home health experience preferred, but not required.",
    employmentType: "Full Time/Part Time",
    payRate: "Negotiable",
  },
  {
    title: "Pediatric Private Duty RN's",
    location: "San Antonio - Corpus Christi - McAllen - Austin",
    description: "Trach/vent experience for some cases. Electronic documentation.",
    employmentType: "Full Time/Part Time",
    payRate: "Negotiable",
  },
  {
    title: "Pediatric Private Duty LVN",
    location: "San Antonio - Corpus Christi - McAllen - Austin",
    description: "Restorative Health Care has a variety of cases available full or part time. Trach/vent skills required for some cases. Electronic documentation.",
    employmentType: "Full Time/Part Time",
    payRate: "Negotiable",
  },
  {
    title: "Pediatrics PT & PTA's",
    location: "San Antonio - Corpus Christi - McAllen - Austin",
    description: "Home health visits for patients 1 month to 21 years of age. Electronic documentation.",
    employmentType: "Full Time/Part Time",
    payRate: "Per Visit",
  },
];

const benefits = [
  "Paid Time Off for eligible employees",
  "Full benefits package to include health, dental, vision and life insurance (company contributes program $180 per month towards health insurance cost)",
  "401K",
  "Short-Term Disability and other supplemental insurances through AFLAC",
  "Bereavement Leave",
];

const qualifications = [
  "Successful completion of a certified licensed nursing program or accredited state therapy",
  "Licensed Registered Nurse, HHA or therapist in the state of Texas",
  "Six (6) months to one (1) year of previous home health experience preferred",
  "Demonstrate knowledge and skills necessary to provide care and to communicate with the population served by the agency",
  "Ability to assess data reflecting the patient's status",
  "Interpret the appropriate information needed to identify each patient's requirements related to specific needs",
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />

      {/* Hero / Banner */}
      <section className="relative pt-20 sm:pt-24">
        <div className="relative h-[280px] sm:h-[360px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=500&fit=crop"
            alt="Healthcare professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-primary/20" />
          <div className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-8 md:pr-16">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground"
            >
              CAREERS
            </motion.h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
        </div>
      </section>

      {/* Employment Opportunities */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] max-h-[340px]"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop"
                alt="Healthcare team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 rounded-2xl p-6 sm:p-8 text-foreground"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                EMPLOYMENT OPPORTUNITIES
              </h2>
              <p className="text-sm font-medium text-foreground/80 mb-6">Your Career</p>
              <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                <p>
                  Restorative Health Care employs adult and pediatric RNs, LVNs, HHAs, and Physical, Occupational and Speech Therapists. We also provide positions for therapy assistants, social workers and administrative personnel.
                </p>
                <p>
                  Those who fill the health care positions will provide services requiring substantial and specialized nursing skills to adult and pediatric patients in accordance with the plan of care ordered by their physician. They will strive to maintain continuity of patient care by assisting in planning and exchanging information with other health professionals caring for the same patient. They will also promote and maintain patient health by teaching the patient and the family home nursing procedures and other care needs as appropriate to the patient's condition.
                </p>
                <p>
                  We are dedicated to a policy of nondiscrimination on any basis including race, age, gender, religion, disability, or national origin.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  asChild
                  className="bg-primary-foreground/15 text-foreground border-2 border-foreground/30 hover:bg-primary-foreground/25"
                >
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    APPLY NOW
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Jobs */}
      <section id="careers" className="py-16 sm:py-20">
        <div className="container px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">CURRENT JOBS</h2>
            <p className="text-muted-foreground mt-2">
              If you do not see your desired job please contact the Recruitment Department
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {jobs.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col border-l-4 border-l-accent"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 py-3 px-4 -mx-5 bg-accent/20 rounded-lg">
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Clock className="w-4 h-4" />
                      Employment Type: {job.employmentType}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Percent className="w-4 h-4" />
                      Pay Rate: {job.payRate}
                    </span>
                  </div>
                </div>
                <Button asChild className="rounded-t-none rounded-b-2xl w-full py-6" variant="hero">
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    APPLY
                  </a>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Qualifications */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2 mb-6">
                <span className="w-1 h-8 bg-primary rounded-full" />
                BENEFITS:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {benefits.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2 mb-6">
                <span className="w-1 h-8 bg-primary rounded-full" />
                QUALIFICATIONS:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {qualifications.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <CareCompanion />
    </div>
  );
}
