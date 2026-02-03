import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, User, Heart, MapPin, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  {
    id: 1,
    title: "Who needs care?",
    subtitle: "Let's start with the basics",
    icon: User,
  },
  {
    id: 2,
    title: "What type of care?",
    subtitle: "Select all that apply",
    icon: Heart,
  },
  {
    id: 3,
    title: "Where are you located?",
    subtitle: "We serve Central & South Texas",
    icon: MapPin,
  },
];

const careTypes = [
  { id: "adult-geriatric", label: "Adult/Geriatric Services", icon: "👴" },
  { id: "pediatric", label: "Pediatric Services", icon: "👶" },
  { id: "disease-management", label: "Disease Management Program", icon: "❤️" },
];

export function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: "",
    relationship: "",
    careTypes: [] as string[],
    zipCode: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCareTypeToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      careTypes: prev.careTypes.includes(id)
        ? prev.careTypes.filter((t) => t !== id)
        : [...prev.careTypes, id],
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.patientName.trim() !== "";
      case 2:
        return formData.careTypes.length > 0;
      case 3:
        return formData.zipCode.trim() !== "" && formData.phone.trim() !== "";
      default:
        return false;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-primary w-[600px] h-[600px] top-0 right-0 opacity-20" />
      <div className="orb orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-15" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Find the <span className="gradient-text">Right Care</span> for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
            We are available 24 hours a day, 7 days a week. A physician referral is required to initiate home health, but you have the freedom to choose the home health provider that best suits your needs — we hope that you will request Restorative Health Care by name.
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Answer a few quick questions and we'll connect you with a care specialist.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  animate={{
                    scale: currentStep === step.id ? 1.1 : 1,
                    backgroundColor:
                      currentStep >= step.id
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted))",
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                >
                  {isSubmitted || currentStep > step.id ? (
                    <Check className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <span className={currentStep >= step.id ? "text-primary-foreground" : "text-muted-foreground"}>
                      {step.id}
                    </span>
                  )}
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full transition-colors duration-300 ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <motion.div
            layout
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    A care specialist will reach out within 24 hours to discuss your needs.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setFormData({ patientName: "", relationship: "", careTypes: [], zipCode: "", phone: "" });
                    }}
                  >
                    Start Over
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                      {(() => {
                        const Icon = steps[currentStep - 1].icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{steps[currentStep - 1].title}</h3>
                      <p className="text-muted-foreground text-sm">{steps[currentStep - 1].subtitle}</p>
                    </div>
                  </div>

                  {/* Step Content */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Patient's Name</label>
                        <Input
                          value={formData.patientName}
                          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                          placeholder="Enter patient's name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Relationship</label>
                        <Input
                          value={formData.relationship}
                          onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                          placeholder="e.g., Son, Daughter, Spouse, Self"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="grid grid-cols-2 gap-3">
                      {careTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCareTypeToggle(type.id)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.careTypes.includes(type.id)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className="text-2xl mb-2 block">{type.icon}</span>
                          <span className="font-medium text-sm">{type.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP Code</label>
                        <Input
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          placeholder="Enter your ZIP code"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 555-5555"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 ? (
                      <Button
                        variant="ghost"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {currentStep < 3 ? (
                      <Button
                        variant="hero"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!canProceed()}
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        variant="hero"
                        onClick={handleSubmit}
                        disabled={!canProceed()}
                      >
                        Submit Request
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
