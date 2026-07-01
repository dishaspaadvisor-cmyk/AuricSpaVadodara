import Image from "next/image";
import {
  CheckCircle,
  Clock4,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const cards = [
  {
    title: "Professional Therapists",
    text: "Experienced and trained therapists focused on comfort, professionalism and relaxation.",
    image: "/other/other5.jpg",
    alt: "Professional spa therapists",
    icon: UserCheck,
    iconClassName: "text-[#92242C]",
    iconBgClassName: "bg-[#92242C]/10",
  },
  {
    title: "Clean & Hygienic Rooms",
    text: "Sanitized private rooms with fresh linens and premium hygiene standards for every guest.",
    image: "/other/other7.jpg",
    alt: "Clean luxury spa room",
    icon: ShieldCheck,
    iconClassName: "text-[#92242C]",
    iconBgClassName: "bg-[#92242C]/10",
  },
  {
    title: "Premium Spa Ambience",
    text: "Relax in a peaceful luxury atmosphere designed for complete wellness and stress relief.",
    image: "/other/other6.jpg",
    alt: "Premium spa ambience",
    icon: Sparkles,
    iconClassName: "text-[#92242C]",
    iconBgClassName: "bg-[#92242C]/10",
  },
  {
    title: "Affordable spa packages",
    text: "Book your preferred therapy within minutes by phone or WhatsApp.",
    image: "/gallary/ga8.jpg",
    alt: "Easy spa booking",
     icon: ShieldCheck,
    iconClassName: "text-[#92242C]",
    iconBgClassName: "bg-[#92242C]/10",
  },
];

const features = [
  {
    title: "Friendly Staff",
    text: "Professional hospitality",
    icon: HeartHandshake,
    iconClassName: "text-[#92242C]",
  },
  {
    title: "100% Hygiene",
    text: "Sanitized after every session",
    icon: CheckCircle,
    iconClassName: "text-green-600",
  },
  {
    title: "Open Daily",
    text: "10 AM - 10 PM",
    icon: Clock4,
    iconClassName: "text-[#92242C]",
  },
  {
    title: "Quick Booking",
    text: "Call or WhatsApp anytime",
    icon: Phone,
    iconClassName: "text-[#92242C]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-[#1d1616]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
  <span className="font-semibold uppercase tracking-widest text-[#92242C]">
    Why Choose Us
  </span>

  <h2 className="mt-4 text-3xl md:text-6xl font-bold text-[#92242C]">
    Why Choose Auric Spa
  </h2>

  <p className="mt-5 max-w-3xl mx-auto text-gray-900">
    We provide a luxurious, hygienic and relaxing spa experience.
  </p>
</div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                key={card.title}
              >
                <div className="relative h-72 overflow-hidden bg-[#f5ece4]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div className="p-5">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBgClassName}`}
                  >
                    <Icon className={card.iconClassName} />
                  </div>

                  <h3 className="text-xl font-bold text-[#92242C]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="flex items-center gap-4" key={feature.title}>
                  <Icon className={feature.iconClassName} size={34} />
                  <div>
                    <h4 className="font-bold text-[#1d1616]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
