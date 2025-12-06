import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const RejectionScreen = () => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-card rounded-4xl p-8 shadow-card border border-border/50"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
            <Lock className="text-muted-foreground" size={32} />
          </div>
        </motion.div>

        <motion.h2 
          className="font-serif text-2xl text-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Maaf ya...
        </motion.h2>

        <motion.p 
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Kamu laki-laki, kamu ga diundang.
        </motion.p>

        <motion.div 
          className="mt-8 pt-6 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs text-muted-foreground italic">
            Forum Perempuan Polines adalah ruang aman khusus untuk perempuan.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RejectionScreen;
