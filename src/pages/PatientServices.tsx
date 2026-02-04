import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";
import { Button } from "@/components/ui/button";
import {
  Baby,
  Calendar,
  CreditCard,
  Stethoscope,
  ClipboardList,
  Heart,
} from "lucide-react";

type CategoryId =
  | "pediatric"
  | "adult-geriatric"
  | "payors"
  | "pediatric-specialty"
  | "disease-management"
  | "private-assisted";

const categories: { id: CategoryId; label: string; icon: React.ReactNode }[] = [
  { id: "pediatric", label: "Pediatric Services", icon: <Baby className="w-6 h-6" /> },
  { id: "adult-geriatric", label: "Adult/Geriatric Services", icon: <Calendar className="w-6 h-6" /> },
  { id: "payors", label: "Payors", icon: <CreditCard className="w-6 h-6" /> },
  { id: "pediatric-specialty", label: "Pediatric Specialty Services", icon: <Stethoscope className="w-6 h-6" /> },
  { id: "disease-management", label: "Disease Management Program", icon: <ClipboardList className="w-6 h-6" /> },
  { id: "private-assisted", label: "Private Assisted", icon: <Heart className="w-6 h-6" /> },
];

const pediatricItems = [
  "Private Duty Nursing",
  "Skilled Intermittent",
  "Therapy",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
];

const adultGeriatricItems = [
  "Skilled Nursing (RHC Adult)",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
  "Medical Social Work Services",
  "Home Health Aide",
  "Anodyne Therapy for Diabetic Neuropathy",
  "Cardiac Monitoring",
  "Infusion Therapy",
  "INRatio for Portable PT/INR",
  "Pediatric Hourly and Intermittent",
  "Private Duty Services",
  "Parental and Enteral Nutrition",
  "VitalStim for Dysphagia",
  "Coordination of Home Medical Equipment",
];

const payorsLeft = [
  "Aetna",
  "Aetna Medicaid",
  "Amerigroup",
  "BCBSTX",
  "BCBSTX Medicaid",
  "Christus Health Plan",
  "Community First",
  "Driscoll's Children Healthplan",
  "Humana",
  "Medicaid (Traditional & Star Kids)",
];

const payorsRight = [
  "Medicare",
  "Molina",
  "Sendero",
  "SmartCare Network",
  "Superior Health Plan (Star Kids & CHIP)",
  "Tricare",
  "United Healthcare",
  "United Community Plan",
  "Private pay",
];

const pediatricSpecialtyItems = [
  "Pediatric tracheotomy and ventilator care",
  "Pediatric infusion care",
  "Gastrostomy care and enteral feedings",
  "Pediatric Wound Vacs and wound care",
  "Pediatric VitalStim therapy",
  "Pediatric swallowing and feeding therapy",
  "Asthma teaching",
  "Parent teaching",
];

const diseaseManagementText =
  "Restorative Health Care (RHC) Adult Services: Congestive Pulmonary Disease Home health care is a covered benefit provided through public third-party payors such as Medicare and private third-party payors such as health insurance companies and managed care groups. Please contact Restorative Health Care for a list of participating preferred providers. In order for home care to be covered by either a public or private third-party it must be deemed medically necessary. Beneficiaries may have to meet certain coverage requirements. Private third-party payors have various plans and beneficiaries may contact their respective agents regarding coverage or Restorative Health Care may assist them.";

const privateAssistedItems = [
  "Comprehensive RN/LVN assessment with a review of body systems",
  "Vital signs, patient monitoring, patient measures",
  "Medication administration (oral, inhaled, topical, subcutaneous, intravenous, per gastrostomy or nasogastric tubes)",
  "Respiratory support (nebulized treatments, metered dose inhalers, ventilator support, BiPAPs, CPAPs, IPVs, pulmovests, chest percussion, tracheal/oral/pharyngeal suctioning, tracheostomy care)",
  "Intermittent catheterizations, indwelling catheter insertion and care",
  "Enteral feedings, gastrostomy care, nutritional support",
  "Mobility assistance, home exercise programs (active/passive range of motion)",
  "Family caregiver teaching and support",
];

function ContentPanel({ categoryId }: { categoryId: CategoryId }) {
  const getDetailLink = () => {
    if (categoryId === "pediatric") return { to: "/services/pediatric", label: "MORE ABOUT SERVICE" };
    if (categoryId === "adult-geriatric") return { to: "/services/adult-geriatric", label: "MORE ABOUT SERVICE" };
    if (categoryId === "disease-management" || categoryId === "private-assisted")
      return { to: "/services/disease-management", label: "MORE ABOUT SERVICE" };
    return null;
  };

  const link = getDetailLink();

  return (
    <div className="rounded-2xl bg-primary/90 dark:bg-primary/95 text-primary-foreground p-6 sm:p-8 shadow-lg min-h-[280px] flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide mb-4">
        {categories.find((c) => c.id === categoryId)?.label}
      </h3>
      <div className="flex-1 text-primary-foreground/95 text-sm sm:text-base leading-relaxed">
        <AnimatePresence mode="wait">
          {categoryId === "pediatric" && (
            <motion.ul
              key="pediatric"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 list-disc pl-5"
            >
              {pediatricItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          )}
          {categoryId === "adult-geriatric" && (
            <motion.ul
              key="adult-geriatric"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 list-disc pl-5"
            >
              {adultGeriatricItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          )}
          {categoryId === "payors" && (
            <motion.div
              key="payors"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2"
            >
              <ul className="space-y-1.5 list-disc pl-5">
                {payorsLeft.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul className="space-y-1.5 list-disc pl-5">
                {payorsRight.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
          {categoryId === "pediatric-specialty" && (
            <motion.ul
              key="pediatric-specialty"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 list-disc pl-5"
            >
              {pediatricSpecialtyItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          )}
          {categoryId === "disease-management" && (
            <motion.p
              key="disease-management"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              {diseaseManagementText}
            </motion.p>
          )}
          {categoryId === "private-assisted" && (
            <motion.ul
              key="private-assisted"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 list-disc pl-5"
            >
              {privateAssistedItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {link && (
        <div className="mt-6 pt-4 border-t border-primary-foreground/20">
          <Button variant="secondary" size="sm" className="text-primary bg-primary-foreground/15 hover:bg-primary-foreground/25 border-0" asChild>
            <Link to={link.to}>{link.label}</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default function PatientServices() {
  const [selected, setSelected] = useState<CategoryId>("pediatric");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-amber-500/10 dark:from-primary/20 dark:to-amber-500/5" />
        <div className="container px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex-1 w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-muted shrink-0">
            <img
              src="https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=800&h=600&fit=crop"
              alt="Care and support"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">OUR </span>
              <span className="text-amber-600 dark:text-amber-500">SERVICE</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Explore our patient services and programs. Select a category below to view details.
            </p>
          </div>
        </div>
      </section>

      {/* Category grid + content */}
      <section className="py-12 sm:py-16 pb-20">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Category tiles */}
            <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelected(cat.id)}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    selected === cat.id
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-600 text-foreground font-semibold shadow-md"
                      : "border-border bg-card hover:border-primary/50 hover:bg-muted/50 text-muted-foreground"
                  }`}
                >
                  <span className="flex-shrink-0 text-primary">{cat.icon}</span>
                  <span className="text-sm font-medium leading-tight">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="lg:col-span-2">
              <ContentPanel categoryId={selected} />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/#contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CareCompanion />
    </div>
  );
}
