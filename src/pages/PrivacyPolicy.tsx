import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24">
        <div className="relative h-[200px] sm:h-[260px] overflow-hidden bg-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            >
              Privacy Policy
            </motion.h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary mt-0 mb-6">
              NOTICE OF PRIVACY PRACTICES FOR PROTECTED HEALTH INFORMATION
            </h2>

            <p>
              Our agency is required by law to maintain the privacy of protected health information, to provide you adequate notice of your rights and our legal duties and privacy practices with respect to protected health information and to notify affected individuals following a breach of unsecured protected health information. [45 CFR § 164.520]. We will use or disclose protected health information in a manner that is consistent with this notice.
            </p>

            <p>
              The agency maintains a record (paper/electronic file) of the information we receive and collect about you and of the care we provide to you. This record includes physicians' orders, assessments, medication lists, clinical progress notes and billing information.
            </p>

            <p>
              As required by law, the agency maintains policies and procedures about our work practices, including how we coordinate care and services provided to our patients. These policies and procedures include how we create, receive, access, transmit, maintain and protect the confidentiality of all health information in our workforce and with contracted business associates and/or subcontractors; security of the agency building and electronic files; and how we educate staff on privacy of patient information.
            </p>

            <p>
              As our patient, information about you must be used and disclosed to other parties for purposes of treatment, payment and health care operations. Examples of information that must be disclosed:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Treatment:</strong> Providing, coordinating or managing health care and related services, consultation between health care providers relating to a patient or referral of a patient for health care from one provider to another. For example, we meet on a regular basis to discuss how to coordinate for patients and to schedule visits.
              </li>
              <li>
                <strong>Payment:</strong> Billing and collecting for services provided, determining plan eligibility and coverage, utilization review (UR), precertification, medical necessity review. For example, occasionally the insurance company requests a copy of the medical record is sent to them for coverage review prior to paying the bill.
              </li>
              <li>
                <strong>Health Care Operations:</strong> Central agency, administrative and business functions, quality assurance/improvement activities; medical review, auditing functions; developing clinical guidelines; determining the competence or qualifications of health care professionals; evaluating agency performance; conducting training programs with students or new employees; licensing survey, certification, accreditation and credentialing activities; internal auditing; and certain fundraising activities and with your authorization, marketing activities. For example, our agency periodically holds clinical record review meetings where the consulting professional of our record review committee will audit clinical records for meeting professional standards and utilization review.
              </li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              Uses and disclosures that do not require your consent
            </h3>
            <p>
              The following uses and disclosures do not require your consent, and include, but are not limited to, a release of information contained in financial records and/or medical records, including information concerning communicable diseases such as Human Immunodeficiency Virus (HIV) and Acquired Immunodeficiency Syndrome (AIDS), drug/alcohol abuse, psychiatric diagnosis and treatment and/or laboratory test results, medical history, treatment progress and/or any other related information as permitted by the state law to:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Your insurance company, self-funded or third-party health plan, Medicare, Medicaid or any other person or entity that may be responsible for paying or processing for payment any portion of your bill for services;</li>
              <li>Any person or entity affiliated with or representing us for purposes of administration, billing and quality and risk management;</li>
              <li>Any hospital, nursing home or other health care facility to which you may be admitted;</li>
              <li>Any assisted living or personal care facility of which you are a resident;</li>
              <li>Any physician providing you the care;</li>
              <li>Licensing and accrediting bodies, including the information contained in the OASIS Data Set to the state agency acting as a representative of the Medicare/Medicaid program;</li>
              <li>Contact you to raise funds for the Agency, you will be given the right to opt out of receiving such communications;</li>
              <li>Any business associate or institutionally related foundation for the purpose of raising funds for the agency (information may include: demographics—name, address, contact information, age, gender, date of birth; dates of health care provided; department of services; treating physician; outcome information; and health insurance status). You will be given the right to opt out;</li>
              <li>Refill reminders for drugs, biologicals and/or drug delivery systems that have already been prescribed to you;</li>
              <li>Marketing communications promoting health products, services and information if the communication is made face to face with you or the only financial gain consists of a promotional gift of nominal value provided by the agency; and</li>
              <li>Other health care providers to initiate treatment.</li>
            </ol>

            <p className="mt-6">
              We are permitted to use or disclose information about you without consent or authorization in the following circumstances:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>In emergency treatment situations, if we attempt to obtain consent as soon as practicable after treatment;</li>
              <li>Where substantial barriers to communicating with you exist and we determine that the consent is clearly inferred from the circumstances;</li>
              <li>Where we are required by law to provide treatment and we are unable to obtain consent;</li>
              <li>Where the use or disclosure of medical information about you is required by federal, state or local law;</li>
            </ol>

            <p className="mt-4">
              Information to state or federal public health authorities as required by law to: prevent or control disease, injury or disability; report births and deaths; report child abuse or neglect; report reactions to medications or problems with products; notify persons of recalls of products they may be using; notify a person who may have been exposed to a disease or may be at risk for contracting or spreading a disease or condition; and notify the appropriate government authority if we believe a patient has been the victim of abuse, neglect or domestic violence (if you agree or where required or authorized by law);
            </p>

            <ol className="list-decimal pl-6 space-y-2" start={6}>
              <li>Health care oversight activities such as audits, investigations, inspections and licensure by a government health oversight agency as authorized by law to monitor the health care system; government programs and compliance with civil rights laws;</li>
              <li>To business associates regulated under HIPAA that work on our behalf under a contract that requires appropriate safeguards of protected health information.</li>
              <li>Certain judicial administrative proceedings in response to a court or administrative order, a subpoena, discovery request or other lawful process by someone else involved in the dispute, but only if efforts have been made to tell you about the request or to obtain an order from the Court protecting the information requested;</li>
              <li>Certain law enforcement purposes such as helping to determine whether a crime has occurred, to alert law enforcement to a crime on our premises or of your death if we suspect it resulted from criminal conduct, identify or locate a suspect, fugitive, material witness or missing person, or to comply with a court order or subpoena and other law enforcement purposes;</li>
              <li>To coroners, medical examiners and funeral directors, in certain circumstances, for example, to identify a deceased person, determine the cause of death or to assist in carrying out their duties;</li>
              <li>For cadaveric organ, eye or tissue donation purposes to communicate to organizations involved in procuring, banking or transplanting organs and tissues (e.g., if you are an organ donor);</li>
              <li>For certain research purposes under very select circumstances. We may use your health information for research. Before we disclose any of your health information for such research purposes, the project will be subject to an extensive approval process. We will usually request your written authorization before granting access to your individually identifiable health information;</li>
              <li>To avert a serious threat to health and safety: To prevent or lessen a serious and imminent threat to the health or safety of a particular person or the general public, such as when a person admits to participation in a violent crime or serious harm to a victim or is an escaped convict. Any disclosure, however, would only be to someone able to help prevent the threat;</li>
              <li>For specialized government functions, including military and veterans' activities, national security and intelligence activities, protective services for the President, foreign heads of state and others, medical suitability determinations, correctional institution and custodial situations; and</li>
              <li>For Workers' Compensation purposes: Workers' compensation or similar programs provide benefits for work-related injuries or illness.</li>
            </ol>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              Uses with your opportunity to agree or object
            </h3>
            <p>
              We are permitted to use or disclose information about you provided you are informed in advance and given the opportunity to individually agree to, prohibit, opt out or restrict the disclosure in the following circumstances:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Use of a directory (includes name, location, condition described in general terms) of individuals served by our Agency;</li>
              <li>Provide proof of immunization to a school that is required by state or other law to have such proof with agreement to disclosure by parent, guardian or other person acting in loco parentis if record is of an emancipated minor, and</li>
              <li>Provide a family member, relative, friend or other identified person, prior to, or after your death, the information relevant to such person's involvement in your care or payment for care; to notify a family member, relative, friend or other identified person of your location, general condition or death.</li>
            </ol>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              Other uses and disclosures
            </h3>
            <p>
              Other uses and disclosures not covered in this notice will be made only with your authorization. Authorization may be revoked, in writing, at any time, except in limited situations for the following disclosures:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Marketing of products or services or treatment alternatives that may be of benefit to you when we receive direct payment from a third party for making such communications;</li>
              <li>Psychotherapy notes under most circumstances, if applicable;</li>
              <li>Any sale of protected health information resulting in financial gain by the agency unless exception is met.</li>
            </ol>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              YOUR RIGHTS
            </h3>
            <p>You have the right, subject to certain conditions, to:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Request restrictions on uses and disclosures of your protected health information for treatment, payment or health care operations. However, we are not required to agree to any request restriction. Restrictions to which we agree will be documented. Agreements for further restrictions may, however be terminated under applicable circumstance; (e.g., emergency treatment). We must agree to your request to restrict disclosure of protected health information about you to a health plan if: 1) the disclosure is for the purpose of carrying out payment or health care operations and is not otherwise required by law, and 2) the protected health information pertains solely to a health care item or service for which you or someone on your behalf paid the covered entity in full. (164.522 Rights to request privacy protection for protected health information).
              </li>
              <li>
                Confidential communication of protected health information. We will arrange for you to receive protected health information by reasonable alternative means or at alternative locations. Your request must be in writing. We do not require an explanation for the request as a condition of providing communications on a confidential basis and will attempt to honor reasonable requests for confidential communications. If you request your protected health information to be transmitted directly to another person designated by you, your written request must be signed and clearly identify the designated person and where the copy of protected health information is to be sent.
              </li>
              <li>
                Inspect and obtain copies of protected health information that is maintained in a designated record set, except for psychotherapy notes, information compiled in reasonable anticipation of, or for use in, a civil, criminal or administrative action or proceeding, or protected health information that may not be disclosed under the Clinical Laboratory Improvements Amendments of 1988 [42 USC § 263a and 45 CFR § 493 (a) (2)]. If you request a copy of your health information, we will charge a reasonable, cost-based fee that includes only the cost of labor for copying, supplies and postage, if applicable, in accordance with applicable state and federal regulations. If the requested protected health information is maintained electronically and you request an electronic copy, we will provide access in an electronic format you request, if readily producible, or if not, in a readable electronic form and format mutually agreed upon. If we deny access to protected health information, you will receive a timely, written denial in plain language that explains the basis for the denial, your review rights and an explanation of how to exercise those rights. If we do not maintain the medical record, we will tell you where to request the protected health information.
              </li>
              <li>
                Request to amend protected health information for as long as the protected health information is maintained in the designated record set. A request to amend your record must be in writing and must include a reason to support the requested amendment. We will act on your request within sixty (60) days of receipt of the request. We may extend the time for such action by up to 30 days, if we provide you with a written explanation of the reasons for the delay and the date by which we will complete action on the request. We may deny the request for amendment if the information contained in the record was not created by us, unless you provide a reasonable basis for believing the originator of the information is no longer available to act on the requested amendment; is not part of the designated medical record set; would not be available for inspection under applicable laws and regulations; or the record is accurate and complete. If we deny your request for amendment, you will receive a timely, written denial in plain language that explains the basis for the denial, your rights to submit a statement disagreeing with the denial and an explanation of how to submit that statement.
              </li>
              <li>
                Receive an accounting of disclosures of protected health information made by our Agency for up to six (6) years prior to the date on which the accounting is requested for any reason other than for treatment, payment or health operations and other applicable exceptions. The written accounting includes the date of each disclosure, the name/address (if known) of the entity or person who received the protected health information, a brief description of the information disclosed and a brief statement of the purpose of the disclosure or a copy of the written request for disclosure. We will provide the accountings within 60 days of receipt of a written request. However, we may extend the time period for providing the accounting by 30 days if we provide you with a written statement of the reasons for the delay and the date by which you will receive the information. We will provide the first accounting you request during any 12-month period without charge. Subsequent accounting requests may be subject to a reasonable cost-based fee.
              </li>
              <li>
                Receive notification of any breach in the acquisition, access, use or disclosure of unsecured protected health information by the agency, its business associates and/or subcontractors.
              </li>
              <li>
                Obtain a paper copy of this notice, even if you had agreed to receive this notice electronically, from us upon request, subject to a reasonable cost-based fee.
              </li>
            </ol>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              COMPLAINTS
            </h3>
            <p>
              If you believe that your privacy rights have been violated, you may complain to the Agency or to the Secretary of the U.S. Department of Health and Human Services. There will be no retaliation against you for filing a complaint. The complaint should be filed in writing, and should state the specific incident(s) in terms of subject, date and other relevant matters. A complaint to the Secretary must be filed in writing within 180 days of when the act or omission complained of occurred, and must describe the acts or omissions believed to be in violation of applicable requirements [45 CFR § 160.306].
            </p>
            <p className="font-medium mt-4">
              For further information regarding filing a complaint, contact: Administrator/Privacy Official at (210) 737-8090, 7330 San Pedro Avenue, Suite 800, San Antonio, TX 78216.
            </p>

            <h3 className="text-lg font-bold text-foreground mt-10 mb-3">
              EFFECTIVE DATE
            </h3>
            <p>
              This notice is effective July 31, 2013. We are required to abide by the terms of the notice currently in effect, but we reserve the right to change these terms as necessary for all protected health information that we maintain. If we change the terms of this notice (while you are receiving service), we will promptly revise and distribute a revised notice to you as soon as practicable by mail, email (if you have agreed to electronic notice), hand delivery or by posting on our website.
            </p>
            <p className="font-medium mt-4">
              If you require further information about matters covered by this notice, please contact: Administrator; Phone: (210) 737-8090; 7330 San Pedro Avenue, Suite 800, San Antonio, TX 78216.
            </p>
          </motion.article>
        </div>
      </section>

      <Footer />
      <CareCompanion />
    </div>
  );
}
