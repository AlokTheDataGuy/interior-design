import { waLink } from "@/lib/config";
import { Whatsapp } from "@/components/ui/Icons";

export default function WhatsAppFab() {
  const href = waLink("Hi, I'd like to inquire about a design for my space.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-[80] grid place-items-center w-14 h-14 rounded-full bg-[#25d366] text-white animate-wa-pop hover:scale-[1.08] transition-transform"
      style={{
        right: "clamp(16px, 2vw, 28px)",
        bottom: "clamp(16px, 2vw, 28px)",
        boxShadow: "0 10px 30px rgba(37,211,102,.35), 0 4px 10px rgba(0,0,0,.15)",
      }}
    >
      <span aria-hidden className="absolute -inset-1 rounded-full border border-[#25d366]/35 animate-wa-ring" />
      <Whatsapp />
    </a>
  );
}
