import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "40700000000";
  const message = encodeURIComponent("Bună ziua! Aș dori mai multe informații despre serviciile de reparații.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
      aria-label="Contactează-ne pe WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  );
}
