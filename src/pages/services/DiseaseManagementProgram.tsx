import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pasSections = [
  {
    title: "PERSONAL ASSISTANCE SERVICES (PAS) PROGRAM DESCRIPTION",
    content: (
      <p className="text-muted-foreground">
        Restorative Health Care's Personal Assistance Services (PAS) are performed under the Licensed Home Health (LHH) category and although this class of licensure allows for skilled as well as unskilled agency caregivers, Restorative Health Care only provides skilled caregivers for this program. Skilled caregivers include RNs (registered nurses) and LVNs (licensed vocational nurses) who provide physician-directed skilled care to clients 21 years of age and older. Skilled care refers to "hands-on" interventions that are only allowed within the scope of practice of a nurse or therapist licensed in the State of Texas.
      </p>
    ),
  },
  {
    title: "EXAMPLES OF SKILLED CARE IN THE PRIVATE DUTY/PERSONAL ASSISTANCE SERVICES PROGRAM ARE AS FOLLOWS:",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Comprehensive RN (registered nurse)/LVN (licensed vocational nurse) assessment with a review of body systems</li>
        <li>Vital signs, patient monitoring, patient measures</li>
        <li>Medication administration (oral, inhaled, topical, subcutaneous, intravenous, per gastrostomy or nasogastric tubes)</li>
        <li>Respiratory support (nebulized treatments, metered dose inhalers, ventilator support, BiPAPs, CPAPs, PVs, pulse oximeters, chest percussion, tracheotomy care)</li>
        <li>Intermittent catheterizations, indwelling catheter insertion and care</li>
        <li>Enteral feedings, gastrostomy care, nutritional support</li>
        <li>Mobility assistance, home exercise programs (active/passive range of motion)</li>
        <li>Family caregiver teaching and support</li>
      </ul>
    ),
  },
  {
    title: "OUR PROGRAM FOCUS",
    content: (
      <p className="text-muted-foreground">
        This program has a primary focus of providing long-term continuous hourly care utilizing skilled caregivers and case manager oversight to clients who are chronic in nature and have ongoing skilled care needs. A physician-directed client plan of care is followed to ensure patient safety at home, prevent or minimize hospitalization and acute and emergent care services, prevent long term complications, and to use a team approach involving family caregivers and physicians to promote optimal health and patient stability. The duration and frequency of services is dependent upon client need, available funding, and available services. Typically, a patient who is cared for under the Restorative Health Care (RHC) Personal Assistance Services (PAS) program has had some catastrophic event resulting in their medical condition.
      </p>
    ),
  },
];

const DiseaseManagementProgram = () => (
  <ServicePageLayout
    title="Personal Assistance Services"
    description="Structured programs to help manage chronic conditions and improve quality of life."
  >
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8"
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Program Information</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {pasSections.map((item, index) => (
          <AccordionItem
            key={index}
            value={`section-${index}`}
            className="rounded-xl border border-border bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800/50 overflow-hidden"
          >
            <AccordionTrigger className="px-5 py-4 text-left font-semibold text-foreground hover:no-underline hover:bg-amber-100/80 dark:hover:bg-amber-900/30 [&[data-state=open]]:bg-amber-100/80 dark:[&[data-state=open]]:bg-amber-900/30">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 pt-0 text-base leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link to="/#services">MORE SERVICES</Link>
        </Button>
      </div>
    </motion.section>
  </ServicePageLayout>
);

export default DiseaseManagementProgram;
