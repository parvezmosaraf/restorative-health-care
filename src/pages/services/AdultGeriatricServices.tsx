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

const geriatricFaq = [
  {
    question: "WHO QUALIFIES FOR GERIATRIC HOME HEALTH?",
    answer: (
      <>
        <p className="mb-3">Most Americans over the age 65 are eligible for the federal Medicare program. To obtain home health services:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>A physician must make the determination that medical care at home is necessary</li>
          <li>An individual must require at least one of the following on a part time or intermittent basis: skilled nursing care, physical therapy, speech-language therapy, or occupational therapy as an add on therapy</li>
          <li>An individual must be homebound and generally unable to leave the house without assistance. Homebound implies that leaving home requires a considerable and taxing effort, although leaving home for medical treatment or occasional short non-medical trips (such as for haircuts or religious services) do not usually disqualify the individual</li>
        </ul>
      </>
    ),
  },
  {
    question: "WHAT IS THE PROCESS FOR STARTING CARE FOR GERIATRIC PATIENTS?",
    answer: (
      <p className="text-muted-foreground">
        The doctor will refer a patient to home care for an evaluation. An intake office staff member will verify the patient's information, i.e. Medicare eligibility, address, etc. and will then enter the patient into the Point of Care software. The workflow will be routed to the scheduler for the initial admission to be scheduled. The scheduler determines where the patient lives and which nurse or therapist can evaluate him. The visit is synced to the clinician in the field who then accepts or declines the visit. Once the visit is accepted the clinician calls the patient to confirm the appointment and goes to conduct the admission. The admission is a clinical assessment from head to toe and includes an evaluation of the surroundings in the home. Generally, an assessment takes up to 2 hours. Once the assessment is complete, it's synced back to the office where it is reviewed by the Clinical Field Staff Supervisor and the Director Of Nursing. It is then faxed out to the physician's office for review and signature.
      </p>
    ),
  },
  {
    question: "WHAT TYPES OF SERVICES ARE PROVIDED TO GERIATRIC PATIENTS AND WHAT IS TREATED?",
    answer: (
      <>
        <p className="mb-3 text-muted-foreground">
          Although this list is not all of the types of services performed in the home, a patient who needs skilled nursing may need a clinician to do some of the following types of things:
        </p>
        <ul className="space-y-4 text-muted-foreground">
          <li>
            <strong className="text-foreground">Wound Care</strong> – The wound may be either a post surgical wound or an ulcer of some sort. The clinician may be directed to use a "wound vac" to help the healing process.
          </li>
          <li>
            <strong className="text-foreground">Home Infusion Therapy</strong> – The administration of medication to patients in their own home. Patients and doctors find the convenience and comfort of being at home very appealing. Patients can often return to their normal routines.
          </li>
          <li>
            <strong className="text-foreground">Disease Management</strong> – Simply put, nurses can intervene in the home to help prevent the exacerbation and additional complications for patients who have diseases like COPD, CHF, Asthma or Diabetes.
          </li>
          <li>
            <strong className="text-foreground">Therapy Services</strong> – A patient may need different forms of therapy. Therapy services include: physical therapy, occupational therapy, and speech therapy. Individuals who need therapy may have conditions such as CVA, after-care of a fracture, abnormality of gait, and dysphasia. Restorative Health Care's management team can provide additional information on qualifying co-morbidities in relation to the respective therapy.
          </li>
          <li>
            <strong className="text-foreground">Medical Social Work</strong> – A patient may need a medical social worker to provide community linkage for services such as meals on wheels, transportation, housing, medication assistance, and referral assistance for additional community services.
          </li>
          <li>
            <strong className="text-foreground">Home Health Aide</strong> – Although patients must have a skilled need to qualify for home care often they need assistance with activities of daily living such as bathing, light meal preparation, and light housekeeping. This service does not qualify as a skilled need so patients who need only home health aide services would not be eligible for Medicare reimbursed home health care.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "HOW MANY GERIATRIC PATIENTS DOES RESTORATIVE HEALTH CARE (RHC) TAKE CARE OF?",
    answer: (
      <p className="text-muted-foreground">
        From its San Antonio (Central Texas) office, Restorative Health Care (RHC) services approximately 350 to 400 adult patients at any point. Restorative Health Care (RHC) does about 60,000 adult visits per year, 12,000 of which are therapy. In one year's time Restorative Health Care (RHC) will service as many as 2,000 patients in its Central Texas office.
      </p>
    ),
  },
];

const AdultGeriatricServices = () => (
  <ServicePageLayout
    title="Geriatric Home Health Services"
    description="Compassionate, comprehensive care for adults and seniors in the comfort of home."
  >
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8"
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {geriatricFaq.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="rounded-xl border border-border bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800/50 overflow-hidden"
          >
            <AccordionTrigger className="px-5 py-4 text-left font-semibold text-foreground hover:no-underline hover:bg-amber-100/80 dark:hover:bg-amber-900/30 [&[data-state=open]]:bg-amber-100/80 dark:[&[data-state=open]]:bg-amber-900/30">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 pt-0 text-base leading-relaxed">
              {item.answer}
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

export default AdultGeriatricServices;
