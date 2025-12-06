import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import GenderGate from "@/components/GenderGate";
import RejectionScreen from "@/components/RejectionScreen";
import InvitationContent from "@/components/InvitationContent";
import RegistrationForm from "@/components/RegistrationForm";
import SuccessScreen from "@/components/SuccessScreen";

type Phase = "envelope" | "gate" | "rejected" | "invitation" | "registration" | "success";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("envelope");

  const handleEnvelopeClick = () => {
    setPhase("gate");
  };

  const handleGenderSelect = (gender: "male" | "female") => {
    if (gender === "male") {
      setPhase("rejected");
    } else {
      setPhase("invitation");
    }
  };

  const handleRegister = () => {
    setPhase("registration");
  };

  const handleBack = () => {
    setPhase("invitation");
  };

  const handleSuccess = () => {
    setPhase("success");
  };

  return (
    <main className="min-h-screen bg-gradient-warm overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-sage-light/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-40 h-40 bg-dusty-pink/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sage-light/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <AnimatePresence mode="wait">
          {phase === "envelope" && (
            <motion.div
              key="envelope"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.5, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Envelope onClick={handleEnvelopeClick} />
            </motion.div>
          )}

          {phase === "gate" && (
            <motion.div
              key="gate"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <GenderGate onSelect={handleGenderSelect} />
            </motion.div>
          )}

          {phase === "rejected" && (
            <motion.div
              key="rejected"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <RejectionScreen />
            </motion.div>
          )}

          {phase === "invitation" && (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <InvitationContent onRegister={handleRegister} />
            </motion.div>
          )}

          {phase === "registration" && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <RegistrationForm onBack={handleBack} onSuccess={handleSuccess} />
            </motion.div>
          )}

          {phase === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full"
            >
              <SuccessScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Index;
