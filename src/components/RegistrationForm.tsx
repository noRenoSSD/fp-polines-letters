import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  onBack: () => void;
  onSuccess: () => void;
}

const RegistrationForm = ({ onBack, onSuccess }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    namaPanggilan: "",
    jurusan: "",
    prodi: "",
    kontak: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.namaLengkap || !formData.namaPanggilan || !formData.jurusan || !formData.prodi || !formData.kontak) {
      toast({
        title: "Lengkapi semua data",
        description: "Semua field wajib diisi ya!",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("namaLengkap", formData.namaLengkap);
      formDataToSend.append("namaPanggilan", formData.namaPanggilan);
      formDataToSend.append("jurusan", formData.jurusan);
      formDataToSend.append("prodi", formData.prodi);
      formDataToSend.append("kontak", formData.kontak);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxlDkKeJAj_cTzu7fEza9LZL_S9GwFWK6BoLMMFrebRCb7UEwH9xCqRPvwpnOnifKpD/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      // Since no-cors doesn't give us a response, we assume success
      onSuccess();
    } catch (error) {
      toast({
        title: "Terjadi kesalahan",
        description: "Coba lagi dalam beberapa saat ya.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputFields = [
    { name: "namaLengkap", label: "Nama Lengkap", placeholder: "Masukkan nama lengkapmu", type: "text" },
    { name: "namaPanggilan", label: "Nama Panggilan", placeholder: "Nama yang biasa dipanggil", type: "text" },
    { name: "jurusan", label: "Jurusan", placeholder: "Contoh: Teknik Elektro", type: "text" },
    { name: "prodi", label: "Prodi", placeholder: "Contoh: D3 Teknik Telekomunikasi", type: "text" },
    { name: "kontak", label: "Kontak (WhatsApp)", placeholder: "08xxxxxxxxxx", type: "tel" },
  ];

  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back button */}
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ArrowLeft size={18} />
        <span className="text-sm">Kembali</span>
      </motion.button>

      <motion.div 
        className="bg-card rounded-3xl p-6 shadow-card border border-border/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-serif text-2xl text-foreground mb-2">Daftar Sekarang</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Isi data dirimu untuk bergabung di acara kami
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Label htmlFor={field.name} className="text-sm font-medium text-foreground mb-1.5 block">
                {field.label}
              </Label>
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="rounded-xl border-border bg-background/50 focus:border-sage focus:ring-sage/20 py-5"
                disabled={isLoading}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="pt-2"
          >
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 rounded-2xl text-base font-medium bg-gradient-to-r from-sage to-sage-dark hover:opacity-90 text-primary-foreground shadow-soft transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Kirim Pendaftaran
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RegistrationForm;
