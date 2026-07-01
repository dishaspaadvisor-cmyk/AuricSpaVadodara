"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { SITE } from "../lib/siteConfig";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 md:right-6">
     <a
  href={`https://wa.me/${SITE.phoneWhatsApp.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(
    "Hi, I got your contact from Auric Spa Vadodara."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp Relax Spa"
  className="grid h-14 w-14 place-items-center rounded-full border-4 border-white/80 bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:h-16 md:w-16"
>
  <FaWhatsapp size={31} />
</a>

      <a
        href={`tel:${SITE.phoneCall}`}
        aria-label="Call Relax Spa"
        className="grid h-14 w-14 place-items-center rounded-full border-4 border-white/80 bg-[#92242C] text-white shadow-2xl transition hover:scale-110 md:h-16 md:w-16"
      >
        <Phone size={30} />
      </a>
    </div>
  );
}
