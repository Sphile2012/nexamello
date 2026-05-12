import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%27d%20like%20a%20free%20consult%20%E2%80%94%204-page%20(R500)%20or%20full%20site%20quote.%20%F0%9F%91%8D"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 px-4 py-3 font-inter font-bold text-sm hover:bg-[#22c55e] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-5 h-5 flex-shrink-0" />
      <span className="hidden sm:inline">WhatsApp Us</span>
      {/* Pulse ring */}
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full animate-ping opacity-75" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full" />
    </motion.a>
  );
}
