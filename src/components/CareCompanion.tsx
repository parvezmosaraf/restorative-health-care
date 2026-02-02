import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickActions = [
  { label: "Find a service", icon: "🔍" },
  { label: "Refer a patient", icon: "📋" },
  { label: "Contact us", icon: "📞" },
];

const greetings = [
  "Hi there! I'm your Care Companion 💚",
  "How can I help you find the right care today?",
];

export function CareCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: greetings[0], isBot: true },
    { text: greetings[1], isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for reaching out! Our care specialists are available 24/7. For immediate assistance, call 1-800-CARE or use the contact form above. Is there anything specific I can help you find?",
          isBot: true,
        },
      ]);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setMessages((prev) => [...prev, { text: action, isBot: false }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = "";
      if (action.includes("service")) {
        response = "We offer Skilled Nursing, Physical Therapy, Occupational Therapy, Pediatric Care, Geriatric Care, and Disease Management. Which service interests you?";
      } else if (action.includes("Refer")) {
        response = "To refer a patient, you can use our intake form above, or call our referral line at 1-800-CARE. Our team will guide you through the process!";
      } else {
        response = "You can reach us 24/7 at 1-800-CARE, or fill out the contact form above. We typically respond within 1 hour during business hours!";
      }
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-400 shadow-glow flex items-center justify-center group ${
          isOpen ? "hidden" : ""
        }`}
      >
        {/* Breathing Ring */}
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        
        {/* Avatar */}
        <div className="relative animate-breathe">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 glass-card rounded-xl px-4 py-2 whitespace-nowrap hidden group-hover:block"
        >
          <span className="text-sm font-medium">Need help? Chat with me!</span>
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] glass-card rounded-3xl shadow-glass-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-teal-400 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-breathe">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Care Companion</h3>
                  <div className="flex items-center gap-1 text-primary-foreground/80 text-xs">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Always here to help
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.isBot
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Actions */}
              {messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {quickActions.map((action) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickAction(action.label)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors text-sm"
                    >
                      <span>{action.icon}</span>
                      <span>{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 h-11 rounded-xl"
                />
                <Button type="submit" size="icon" variant="hero" className="h-11 w-11 rounded-xl">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-2">
                <Sparkles className="w-3 h-3 inline mr-1" />
                AI-powered assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
