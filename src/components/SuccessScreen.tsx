import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Users, Heart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const SuccessScreen = () => {
  const whatsappAdminLink = "https://wa.me/6281317688307?text=Halo%20Admin,%20aku%20tertarik%20join%20FP%20Polines";

  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Success header */}
      <motion.div 
        className="text-center mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 bg-sage-light rounded-full mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="text-sage" size={40} />
        </motion.div>

        <h1 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
          Terima kasih sudah mendaftar!
        </h1>
        <p className="text-muted-foreground text-sm">
          Kami sangat senang kamu bergabung 💚
        </p>
      </motion.div>

      {/* Action cards */}
      <div className="space-y-4">
        {/* Join WA Community */}
        <motion.div 
          className="bg-card rounded-3xl p-5 shadow-card border border-border/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sage-light rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="text-sage" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg text-foreground mb-1">Gabung Komunitas</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Masuk ke grup WhatsApp utama untuk info terbaru
              </p>
              <Button
                variant="outline"
                className="w-full rounded-xl border-sage text-sage hover:bg-sage-light/50 py-5"
                onClick={() => window.open("#", "_blank")}
              >
                <MessageCircle size={18} className="mr-2" />
                Join Komunitas WA
                <ExternalLink size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Verification section */}
        <motion.div 
          className="bg-gradient-to-br from-dusty-light/50 to-sage-light/30 rounded-3xl p-5 shadow-soft border border-dusty-pink/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-dusty-pink/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Heart className="text-dusty-dark" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg text-foreground mb-1">Grup Khusus Perempuan</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Ingin masuk grup diskusi khusus perempuan? Verifikasi dulu ya.
              </p>
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-sage to-sage-dark hover:opacity-90 text-primary-foreground py-5"
                onClick={() => window.open(whatsappAdminLink, "_blank")}
              >
                <MessageCircle size={18} className="mr-2" />
                Chat Admin FP
                <ExternalLink size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-dusty-light/50 px-4 py-2 rounded-full">
          <Heart size={14} className="text-dusty-dark" fill="currentColor" />
          <span className="text-xs font-medium text-dusty-dark">Ladies Only Event</span>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4">
          © 2025 Forum Perempuan Polines
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;
