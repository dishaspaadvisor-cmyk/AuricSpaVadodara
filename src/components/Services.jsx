"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

// 1. Updated the services array to include unique descriptions for each massage type
const services = [
  {
    title: "Four Hand Massage",
    description: "Experience the ultimate relaxation as two therapists work in perfect synchronization, easing tension and promoting deep tranquility.",
  },
  {
    title: "Deep Tissue Massage",
    description: "Targeting deeper layers of muscle and connective tissue to relieve chronic aches, stiffness, and built-up body tension.",
  },
  {
    title: "Chocolate Massage",
    description: "Indulge your senses with a luxurious, antioxidant-rich cocoa treatment that deeply nourishes the skin and relaxes the mind.",
  },
  {
    title: "Thai Massage",
    description: "An ancient healing art combining acupressure and assisted stretching to improve flexibility, relieve joint tension, and balance energy.",
  },
];

export default function ServicesSection() {
  const wa = `https://wa.me/${SITE.phoneWhatsApp.replace(/\D/g, "")}`;
  const call = `tel:${SITE.phoneCall}`;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#faf8f5] py-20"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-lg font-medium tracking-widest uppercase text-[#8B7355]">
            Our Premium Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#92242C] md:text-5xl">
            Best Spa Treatments in Vadodara
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Our team (Model images are only for advertisement purposes).
            Experience luxury massage therapies performed by trained
            professionals in a relaxing atmosphere.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* 2. Updated the map function to use the new object structure */}
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-[#e9dfd3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#F5EFE8] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#8B7355]">
                    Premium Therapy
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-[#92242C]">
                    {service.title}
                  </h3>

                  {/* 3. Rendering the unique description here */}
                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">Auric Spa Vadodara</p>
                  <p className="font-semibold text-[#92242C]">
                    Certified Therapist
                  </p>
                </div>

                <div className="flex gap-2">
                  {/* CALL BUTTON */}
                  <a
                    href={call}
                    className="flex items-center gap-2 rounded-full border border-[#92242C] px-4 py-2 text-sm font-semibold text-[#92242C] transition hover:bg-[#92242C] hover:text-white"
                  >
                    <Phone size={16} />
                    Call
                  </a>

                  {/* WHATSAPP BUTTON */}
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#92242C] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#463d37]"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}