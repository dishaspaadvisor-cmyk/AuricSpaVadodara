"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/siteConfig";

const services = [
  {
    title: "Four Hand Massage",
    description:
      "Two therapists work in harmony to deliver the deepest relaxation and restore balance from head to toe.",
    image: "/other/ot5.png",
    label: "Dual Therapist",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Release stubborn knots and tension with firm, targeted strokes designed for lasting muscle relief.",
    image: "/other/ot2.png",
    label: "Deep Relief",
  },
  {
    title: "Chocolate Massage",
    description:
      "Nourish your skin and soothe your senses with warm cocoa therapy made for pure indulgence.",
    image: "/other/ot3.png",
    label: "Sensory Treat",
  },
  {
    title: "Thai Massage",
    description:
      "Ancient stretching and acupressure techniques improve flexibility, circulation, and full-body wellness.",
    image: "/other/ot4.png",
    label: "Traditional Healing",
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
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[32px] border border-[#e9dfd3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] bg-[#f8f3ee]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="space-y-6 px-6 py-8 sm:px-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#92242C]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href={call}
                    className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full border border-[#92242C] bg-white px-4 py-3 text-sm font-semibold text-[#92242C] transition hover:bg-[#92242C] hover:text-white"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebd57]"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp
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