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

            <div className="mt-10 flex flex-row flex-wrap items-center justify-start gap-4">
              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#92242C] px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-200 hover:bg-[#7a1c24]"
              >
                Book Appointment
              </a>

              <a
                href={`tel:${SITE.phoneCall}`}
                className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-[#92242C] bg-white px-6 py-4 text-sm font-semibold text-[#92242C] shadow-sm transition duration-200 hover:bg-[#92242C] hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>

                {/* RIGHT IMAGES */}
<div className="relative">
  {/* Mobile Layout */}
  <div className="grid gap-4 sm:hidden">
    {/* Large Image */}
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <Image
        src={welcomeImages[2].src}
        alt={welcomeImages[2].alt}
        width={700}
        height={700}
        className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    {/* Two Small Images */}
    <div className="grid grid-cols-2 gap-4">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={welcomeImages[0].src}
          alt={welcomeImages[0].alt}
          width={500}
          height={500}
          className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={welcomeImages[1].src}
          alt={welcomeImages[1].alt}
          width={500}
          height={500}
          className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Tablet & Desktop Layout */}
  <div className="hidden sm:grid grid-cols-2 gap-5">
    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={welcomeImages[0].src}
          alt={welcomeImages[0].alt}
          width={700}
          height={800}
          className="h-[360px] md:h-[420px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={welcomeImages[1].src}
          alt={welcomeImages[1].alt}
          width={700}
          height={500}
          className="h-[220px] md:h-[250px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>

    <div className="flex items-center">
      <div className="overflow-hidden rounded-3xl shadow-xl w-full">
        <Image
          src={welcomeImages[2].src}
          alt={welcomeImages[2].alt}
          width={700}
          height={1000}
          className="h-[590px] md:h-[690px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
