"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function Popup({ delay = 9000 }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const closePopup = () => {
    setIsOpen(false);
  };

  const whatsappNumber = SITE.phoneWhatsApp.replace(/\D/g, "");
  const message =
    "Hi! I'm interested in your spa services. Can you share more details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4"
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-popup-title"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center text-gray-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#92242C]/40"
          aria-label="Close popup"
          type="button"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id="offer-popup-title" className="text-xl font-bold text-[#92242C]">
          {SITE.title}
        </h2>

        <div className="my-5">
          <p className="text-3xl font-bold text-green-600">20% OFF</p>
          <p className="mt-1 text-sm text-gray-500">Limited time spa offer</p>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
            className="block w-full rounded-lg bg-green-500 py-3 font-medium text-white transition hover:bg-green-600"
          >
            WhatsApp Now
          </a>

          <a
            href={`tel:${SITE.phoneCall}`}
            onClick={closePopup}
            className="block w-full rounded-lg bg-[#92242C] py-3 font-medium text-white transition hover:bg-[#7a1d24]"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
