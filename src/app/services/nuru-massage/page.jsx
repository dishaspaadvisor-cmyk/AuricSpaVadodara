import Image from "next/image";
import { Phone, CheckCircle, Clock, MessageCircle, Star } from "lucide-react";

export const metadata = {
  title: "Nuru Massage in Vadodara",
  description:
    "Experience Nuru Massage in Vadodara Gujarat. Relax tired muscles, improve circulation, and enjoy deep relaxation with heated stone therapy.",
};

export default function HotStoneMassagePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
     <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/other/he1.png"
          alt="Couples Massage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[#92242C] px-5 py-2 text-sm font-semibold text-white shadow-lg">
             Nuru Massage
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Best Nuru Massage
              <span className="block text-[#92242C]">
                in Vadodara
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
              Experience ultimate relaxation with sensual Nuru massage in Vadodara. Let warm, gel-based body-to-body therapy melt away stress and awaken your senses in pure bliss
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Call Button */}
              <a
                href="tel:+918655700242"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#92242C] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[#7d1f26] hover:scale-105"
              >
                <Phone size={20} />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918655700243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-green-500 bg-green-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-green-700 hover:scale-105"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

          
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
                       <Image
                       src="/gallary/1.jpg"
                       alt="Potli Massage Therapy"
                       fill
                       sizes="(max-width:768px)100vw,50vw"
                       className="object-cover object-top transition-transform duration-700 hover:scale-105"
                     />
                   </div>

          <div>
            <span className="text-[#92242C] font-semibold uppercase">
              Deep Relaxation Therapy
            </span>

            <h2 className="text-4xl text-[#92242C] font-bold mt-3 mb-6">
              What is Nuru Massage?
            </h2>

            <p className="text-gray-900 leading-8 mb-6">
             Originating from Japan, Nuru massage is a unique form of body-to-body therapy that utilizes a special,
             slippery gel made from Nori seaweed. This gel facilitates seamless, gliding movements, allowing for an 
             intimate and deeply relaxing experience. The term “Nuru” translates to “slippery” in Japanese, aptly describing the essence of this massage technique..
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Relieves muscle tension and stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Improves blood circulation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Promotes deep relaxation and stress relief</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Enhances overall wellness and comfort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#92242C] text-4xl font-bold mb-14">
            Benefits of Nuru Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-whlte p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-[#92242C] text-xl mb-3">
                Deep Muscle Relaxation
              </h3>
              <p className="text-black">
                Heat helps muscles relax faster than traditional massage alone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-[#92242C] text-xl mb-3">
                Better Blood Flow
              </h3>
              <p className="text-black">
                Encourages healthy circulation throughout the body.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl text-[#92242C] mb-3">
                Stress Reduction
              </h3>
              <p className="text-black">
                Provides a calming experience that reduces stress and anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duration & CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock
            className="mx-auto text-[#92242C] mb-4"
            size={40}
          />

          <h2 className="text-4xl text-[#92242C] font-bold mb-4">
            Session Duration
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Available in 60 Minutes, 90 Minutes, and 120 Minutes sessions for
            complete relaxation and rejuvenation.
          </p>

          <a
            href="tel:+918655700242"
            className="inline-flex items-center gap-2 bg-[#92242C] text-white px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}