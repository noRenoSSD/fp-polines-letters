import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, BookOpen, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

interface InvitationContentProps {
  onRegister: () => void;
}

const InvitationContent = ({ onRegister }: InvitationContentProps) => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-sage-light/50 px-4 py-2 rounded-full mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Heart size={16} className="text-sage" fill="currentColor" />
          <span className="text-sm font-medium text-sage-dark">Ladies Only</span>
        </motion.div>

        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-2">
          Kamu Diundang, <span className="text-gradient-warm">Puan!</span>
        </h1>
      </motion.div>

      {/* Description Card */}
      <motion.div 
        className="bg-card rounded-3xl p-6 shadow-card border border-border/30 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-dusty-light rounded-2xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="text-dusty-dark" size={24} />
          </div>
          <div>
            <h3 className="font-serif text-lg text-foreground mb-1">Forum Perempuan Polines</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ruang aman untuk perempuan mahasiswi Polines untuk membaca, berdiskusi, dan bertumbuh bersama.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users size={16} />
          <span>Komunitas perempuan yang mendukung</span>
        </div>
      </motion.div>

      {/* Event Details Card */}
      <motion.div 
        className="bg-gradient-to-br from-sage-light/30 to-dusty-light/30 rounded-3xl p-6 shadow-soft border border-sage/10 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-sage" />
          Lapak Buku FP Polines
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center shadow-sm">
              <CalendarDays size={18} className="text-sage" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tanggal</p>
              <p className="font-medium text-foreground">Minggu, 7 Desember 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center shadow-sm">
              <Clock size={18} className="text-dusty-dark" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Waktu</p>
              <p className="font-medium text-foreground">14.00 WIB</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center shadow-sm">
              <MapPin size={18} className="text-sage" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lokasi</p>
              <p className="font-medium text-foreground">GKT Polines, Lantai 1</p>
              <p className="text-xs text-muted-foreground">Gedung Kuliah Terpadu</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          onClick={onRegister}
          className="w-full py-6 rounded-2xl text-lg font-medium bg-gradient-to-r from-sage to-sage-dark hover:opacity-90 text-primary-foreground shadow-soft transition-all duration-300"
        >
          <Heart size={20} className="mr-2" />
          Tertarik Daftar
        </Button>
      </motion.div>

      {/* Footer note */}
      <motion.p 
        className="text-center text-xs text-muted-foreground mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Gratis & terbuka untuk semua mahasiswi Polines
      </motion.p>
    </motion.div>
  );
};

export default InvitationContent;
