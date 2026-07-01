import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/siteConfig";

export default function GalleryHeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero1.png"
        alt="Relax Spa Gallery"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-[#92242C]/20 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#92242C]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center text-white">

          {/* Badge */}
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
            Our Luxury Gallery
          </span>

        

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Explore Our
            <span className="block text-[#92242C]">
              Luxury Spa Experience
            </span>
          </h1>

          

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="inline-flex items-center gap-3 rounded-full bg-[#92242C] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#7b1d24]"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#1fb85a]"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}