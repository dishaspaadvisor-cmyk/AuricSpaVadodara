import Image from "next/image";
import { Phone, CheckCircle, Clock,MessageCircle, Star, Leaf } from "lucide-react";

export const metadata = {
  title: "Potli Massage in Vadodara",
  description:
    "Experience Potli Massage in Vadodara Gujarat. A traditional herbal therapy that relieves pain, improves circulation, and rejuvenates the body naturally.",
};

export default function PotliMassagePage() {
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
                   Potli Massage
                  </span>
      
                  <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Best Spa
                    <span className="block text-[#F5D6A0]">
                      in Vadodara
                    </span>
                  </h1>
      
                  <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
                   Experience deep relaxation and pleasure with our luxurious erotic massage in Vadodara.
                    Skilled therapists, serene ambiance, and unforgettable moments await. Rejuvenate your senses like never before!
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
          <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
            <Image
  src="/other/ot1.jpg"
  alt="Potli Massage Therapy"
  fill
  sizes="(max-width:768px)100vw,50vw"
  className="object-cover object-top transition-transform duration-700 hover:scale-105"
/>
          </div>

          <div className="text-[#92242C]">
            <span className="font-semibold uppercase">
              Ayurvedic Herbal Therapy
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              What is Potli Massage?
            </h2>

            <p className="text-black leading-8 mb-6">
              Potli Massage is a traditional Ayurvedic therapy where heated
              herbal pouches (Potli) are gently pressed and massaged over the
              body. The warmth and medicinal herbs help reduce pain, improve
              circulation, relieve stiffness, and rejuvenate the muscles.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Reduces joint and muscle pain</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Improves blood circulation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Relieves body stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Promotes natural healing and relaxation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-7xl text-[#92242C] mx-auto px-4">
          <h2 className="text-center text-4xl text-[#92242C] font-bold mb-14">
            Benefits of Potli Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Leaf className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Herbal Healing
              </h3>
              <p className="text-black">
                Natural herbs help rejuvenate muscles and tissues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Pain Relief
              </h3>
              <p className="text-black">
                Effective for muscle soreness, stiffness, and joint discomfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Deep Relaxation
              </h3>
              <p className="text-black">
                The warmth of herbal pouches provides a calming experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Duration */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock className="mx-auto text-[#92242C] mb-4" size={40} />

          <h2 className="text-4xl text-[#92242C] font-bold mb-4">
            Session Duration
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Available in 60 Minutes, 90 Minutes, and 120 Minutes sessions for
            complete herbal therapy and relaxation.
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