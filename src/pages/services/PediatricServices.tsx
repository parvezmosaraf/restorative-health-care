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

const pediatricFaq = [
  {
    question: "WHAT IS PEDIATRIC PRIVATE DUTY NURSING?",
    answer: (
      <>
        <p className="mb-3 text-muted-foreground">
          Pediatric private duty nursing (PDN) is skilled nursing care provided to children from 0–21 years of age. It's for children who need individualized, continuous care over long & short term—they may be quadriplegic, have brain damage, or have been born with a chronic disease or condition requiring skilled clinical observations and ongoing medical treatment. They may be on special life-sustaining equipment and need nursing support. Caregivers and children are supported and taught to provide the care the child needs to stay at home. Private duty nursing is not meant to replace a parent as the primary caregiver.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Will help them to take care of their children at home</li>
          <li>Can help them learn and feel comfortable taking care of all their children</li>
          <li>Can help children learn to take care of themselves</li>
        </ul>
      </>
    ),
  },
  {
    question: "WHAT IS BILINGUAL PEDIATRIC NURSING AND THERAPIST SERVICES?",
    answer: (
      <>
        <p className="mb-3 text-muted-foreground">
          We provide pediatric therapy services by experienced professionals in:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-4">
          <li>Bilingual PDN services</li>
          <li>Ventilated Dependent, Spinal Cord Injury, CP, Frail-icity, Cardiac, Encephalitis, Congenital abnormalities, Seizure Disorders, Catastrophic Illness or Accident</li>
        </ul>
        <p className="font-semibold text-foreground mb-1">NURSING SKILLS INCLUDED</p>
        <p className="mb-3 text-muted-foreground">Wound Care, Ventilator Care, IV Therapy, Asthma Teaching, Gastrostomy Care, Patient & Caregiver Teaching</p>
        <p className="font-semibold text-foreground mb-1">SPEECH THERAPY</p>
        <p className="mb-3 text-muted-foreground">Therapy that assists patients in improving communication and feeding skills (Oral GI, DRD, Aspiration, Feeding, Complications, Speech Delay)</p>
        <p className="font-semibold text-foreground mb-1">OCCUPATIONAL THERAPY</p>
        <p className="mb-3 text-muted-foreground">Therapy that assists children to gain the functional skills they need for Fine Motor Skill Development, Independent Play and Self-Care, Self Care (ADL), Fine Motor Skill Delay, Loss of sensation skills</p>
        <p className="font-semibold text-foreground mb-1">PHYSICAL THERAPY</p>
        <p className="mb-3 text-muted-foreground">Therapy designed to help children reach full potential in gross motor skills such as Fine Motor Skills, Delays in Crawling, Walking & Standing, Low tone, Poor balance & Frequent Falls, or Injury</p>
        <p className="font-semibold text-foreground mb-1">WE ALSO TREAT</p>
        <p className="text-muted-foreground">Autism, Spina Bifida, Hydrocephalus, Dysphagia, Feeding Disorders, Degenerative Diseases, Developmental Delays, Disorders that disrupt Pulmonary Disorders, Broncho Pulmonary Dysplasia and Others.</p>
      </>
    ),
  },
  {
    question: "UNDER WHAT PROGRAM IS PDN AUTHORIZED?",
    answer: (
      <p className="text-muted-foreground">
        Private duty nursing is covered under the Comprehensive Care Program (CCP), which is Texas's name for the expanded program under Texas Health Steps. CCP covers nursing services for children from birth through 21 years old. The CCP program is a result of a Congressional mandate that took effect in 1995. Federal changes made in the Medicaid program under OBRA 89 allow children 20 years old and younger to be eligible for any medically necessary and appropriate health care services covered by Medicaid, regardless of the limitations of the state's Medicaid program. Texas Health Steps/CCP services include benefits and services not available to children under OBRA 89. PDN is not authorized for the purpose of providing childcare, housekeeping, activities of daily living, meals, or comprehensive case management beyond the service coordination that may be provided by the Team Physician in all cases.
      </p>
    ),
  },
  {
    question: "HOW IS A PRIVATE DUTY NURSING PROVIDER CHOSEN?",
    answer: (
      <p className="text-muted-foreground">
        A consumer is free to choose a home health agency or an independent registered nurse (RN) or licensed vocational nurse (LVN) who is an enrolled Medicaid provider. It is important to keep in mind the quality of the care the child receives and the abilities of the nurse when selecting a provider. Caring for a child with heavy medical needs—physical, respiratory, nutritional, therapy and emotional—often involves other people in the child's care (therapists, equipment and supplies providers, as well as school nursing), who should work as a team to plan for the at-home care the child will receive.
      </p>
    ),
  },
  {
    question: "HOW IS THE PATIENT SERVICED?",
    answer: (
      <p className="text-muted-foreground">
        A nurse, either an RN or an LVN, is assigned to the patient's home for a predetermined number of hours each week in daily shifts. The shifts are determined by the physician, the parent, and the case manager. Patients can be authorized for as little as 30 or 40 hours a week or up to 24 hours per day, 7 days per week, depending on the needs of the patient.
      </p>
    ),
  },
  {
    question: "HOW IS THE NUMBER OF PDN HOURS A PATIENT WILL RECEIVE DETERMINED?",
    answer: (
      <p className="text-muted-foreground">
        Many factors are considered in deciding how many PDN hours a child will receive. The child's physician will provide information on the specific treatments and medications the child needs and the family needs. The home provider will develop a plan of care for providing the nursing care. The number of hours that the child receives will be based on how often medical interventions need to be done, what maintenance care is to be given, how often a nurse needs to be present for assessment of the child, and how much help family members need in learning to manage the medical needs of their child.
      </p>
    ),
  },
  {
    question: "HOW MANY PEDIATRIC HOURS DOES RHC SERVE?",
    answer: (
      <p className="text-muted-foreground">
        Restorative Health Care (RHC) is one of the top providers of this service in South Texas.
      </p>
    ),
  },
  {
    question: "WHAT ROLE WILL EACH OF THE TEAM MEMBERS PLAY?",
    answer: (
      <p className="text-muted-foreground">
        The parent or caregiver is the ultimate decision maker for the patient and will have to provide some of the care the child needs. It is important that the parent/caregiver know the limits of the PDN nurse. They have the ultimate authority for the child and the responsibility to know what services are authorized and what is not. A case manager or a discharge planner from the hospital can provide all of the information needed about what services are authorized. The nurse provider should work with the parent/caregiver and the child's physician to develop a plan of care for the child. She should help the parent/caregiver learn the skills they will need to provide care for the child. If the company is no longer able to provide PDN services or if a scheduled shift will be missed, they should notify you as soon as possible. Finally, the child's physician, family and client must understand and respect the role of the PDN nurse. The parent/caregiver's household should recognize the parent/caregiver as the primary decision maker for the child.
      </p>
    ),
  },
];

const PediatricServices = () => (
  <ServicePageLayout
    title="Pediatric Private Duty Nursing"
    description="Specialized care for infants, children, and adolescents—delivered with warmth and expertise."
  >
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8"
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {pediatricFaq.map((item, index) => (
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

export default PediatricServices;
