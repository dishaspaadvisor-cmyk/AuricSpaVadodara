import Image from "next/image";
import { SITE } from "@/lib/siteConfig";

const welcomeImages = [
  {
    src: "/other/o13.jpg",
    alt: "Luxury Spa Room",
  },
  {
    src: "/other/ot1.jpg",
    alt: "Professional Spa Therapist",
  },
  {
    src: "/other/ot2.webp",
    alt: "Relaxing Massage Therapy",
  },
];

export default function WelcomeSection() {
  return (
    <section
      id="about"
      className="bg-white py-20 text-black overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <span
              className="inline-block rounded-full border px-5 py-2 text-sm uppercase tracking-[0.25em]"
              style={{
                borderColor: SITE.brand,
                color: SITE.brand,
              }}
            >
              Welcome To
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Relax Spa
              <br />
              <span style={{ color: SITE.brand }}>Vadodara</span>
            </h2>

            <div
              className="mt-6 h-1 w-24 rounded-full"
              style={{ background: SITE.brand }}
            />

            <p className="mt-8 text-lg leading-8 text-black">
              Auric Spa Vadodara offers luxury massage therapies designed to
              relax your body, refresh your mind and restore your energy. Our
              experienced therapists provide a peaceful environment with premium
              wellness services.
            </p>

            <p className="mt-6 text-lg leading-8 text-black">
              Choose from Thai Massage, Swedish Massage, Aroma Therapy, Deep
              Tissue Massage, Couple Spa and Full Body Massage in a clean,
              hygienic and relaxing atmosphere.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-4 font-semibold text-white transition hover:scale-105"
                style={{
                  background: SITE.brand,
                }}
              >
                Book Appointment
              </a>

              <a
                href={`tel:${SITE.phoneCall}`}
                className="rounded-full border border-[#92242C] px-8 py-4 transition hover:bg-[#92242C] hover:text-black"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={welcomeImages[0].src}
                  alt={welcomeImages[0].alt}
                  width={600}
                  height={700}
                  className="h-[380px] w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={welcomeImages[1].src}
                  alt={welcomeImages[1].alt}
                  width={600}
                  height={400}
                  className="h-[220px] w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={welcomeImages[2].src}
                  alt={welcomeImages[2].alt}
                  width={600}
                  height={900}
                  className="h-[620px] w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
