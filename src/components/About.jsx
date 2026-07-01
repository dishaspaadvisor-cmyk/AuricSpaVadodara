import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

export default function AboutSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="font-script text-3xl text-[#92242C]">We Welcome You</p>
          <h2 className="font-display mt-4 text-5xl font-bold leading-tight text-[#92242C] md:text-6xl">
             No.1 Spa in Vadodara
          </h2>
          <div className="mt-6 h-px w-28 bg-[#d7ad3a]" />
          <div className="mt-8 space-y-6 text-lg leading-9 text-black">
            <p>
              Auric Spa Vadodara offers a peaceful escape from everyday
              stress with professional massage therapies, hygienic treatment
              rooms, and caring staff who focus on comfort from arrival to
              completion.
            </p>
            <p>
              From Full Body Massage and Deep Tissue Therapy to Swedish, Thai,
              Oil, Jacuzzi and Couple Massage, every service is prepared for
              complete relaxation and rejuvenation.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${SITE.phoneCall}`} className="rounded-full border border-[#92242C] px-8 py-4 font-semibold text-black transition hover:text-black hover:bg-[#92242C]">
              Call Now
            </a>
            <a href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:brightness-110">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full border border-[#d7ad3a]/30" />
          <div className="relative overflow-hidden bg-zinc-900">
            <div className="relative h-[520px]">
              <Image src="/gallary/ga5.jpg" alt="Auric Spa Vadodara" fill className="object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
