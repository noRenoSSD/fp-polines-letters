import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface EnvelopeProps {
  onClick: () => void;
}

const Envelope = ({ onClick }: EnvelopeProps) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Floating sparkles */}
      <motion.div
        className="absolute -top-8 -left-8 text-dusty-pink"
        animate={{ 
          y: [-5, 5, -5],
          rotate: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={24} />
      </motion.div>
      
      <motion.div
        className="absolute -top-4 -right-10 text-sage"
        animate={{ 
          y: [5, -5, 5],
          rotate: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-dusty-dark"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={16} fill="currentColor" />
      </motion.div>

      {/* Main envelope container */}
      <motion.div 
        className="animate-float"
        style={{ animationDuration: "3s" }}
      >
        <div className="relative w-64 h-44 sm:w-72 sm:h-48">
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-b from-dusty-pink to-dusty-dark rounded-2xl shadow-envelope overflow-hidden">
            {/* Envelope texture pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-1 bg-foreground/20 rounded" />
              <div className="absolute top-8 left-4 w-24 h-1 bg-foreground/20 rounded" />
              <div className="absolute top-12 left-4 w-20 h-1 bg-foreground/20 rounded" />
            </div>
          </div>

          {/* Envelope flap (triangle) */}
          <div 
            className="absolute top-0 left-0 right-0 h-24 overflow-hidden"
            style={{ 
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-secondary-light to-dusty-pink" />
          </div>

          {/* Inner shadow for depth */}
          <div 
            className="absolute top-0 left-0 right-0 h-24 opacity-30"
            style={{ 
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              background: "linear-gradient(180deg, transparent 0%, hsl(var(--dusty-pink-dark)) 100%)"
            }}
          />

          {/* Heart seal */}
          <motion.div 
            className="absolute top-12 left-1/2 -translate-x-1/2 z-10"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center shadow-lg">
              <Heart size={20} className="text-primary-foreground" fill="currentColor" />
            </div>
          </motion.div>

          {/* Bottom fold line */}
          <div className="absolute bottom-8 left-4 right-4 h-px bg-foreground/10" />
        </div>
      </motion.div>

      {/* Tap hint */}
      <motion.p 
        className="text-center mt-8 text-muted-foreground text-sm font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Ketuk untuk membuka ✨
      </motion.p>
    </motion.div>
  );
};

export default Envelope;
