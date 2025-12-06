import { motion } from "framer-motion";
import { Heart, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface GenderGateProps {
  onSelect: (gender: "male" | "female") => void;
}

const GenderGate = ({ onSelect }: GenderGateProps) => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="bg-card rounded-4xl p-8 shadow-card border border-border/50"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Decorative header */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center">
            <Sparkles className="text-sage" size={28} />
          </div>
        </motion.div>

        <motion.h2 
          className="font-serif text-2xl text-center text-foreground mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Siapakah kamu?
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Kami ingin mengenalmu lebih dekat
        </motion.p>

        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            variant="outline"
            className="w-full py-6 rounded-2xl text-base font-medium border-2 border-border hover:border-muted-foreground hover:bg-muted transition-all duration-300"
            onClick={() => onSelect("male")}
          >
            Laki-laki
          </Button>

          <Button
            className="w-full py-6 rounded-2xl text-base font-medium bg-gradient-to-r from-sage to-sage-dark hover:opacity-90 text-primary-foreground transition-all duration-300 shadow-soft"
            onClick={() => onSelect("female")}
          >
            <Heart size={18} className="mr-2" />
            Perempuan
          </Button>
        </motion.div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-dusty-pink"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GenderGate;
