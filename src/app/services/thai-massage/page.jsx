import Image from "next/image";
import { Phone, CheckCircle,MessageCircle, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Thai Massage in Vadodara",
  description:
    "Experience authentic Thai Massage in Vadodara. Relax your body, improve flexibility, and rejuvenate your mind with professional therapists.",
};

export default function ThaiMassagePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
                         <Image
                           src="/other/he1.png"
                           alt="Couples Massage"
                           fill
                           priority
                           sizes="100vw"
                           className="object-cover object-top"
                         />
                 
                 
                         {/* Content */}
                         <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 flex justify-center">
                           <div className="max-w-2xl mx-auto text-center">
                            
                 
                             <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                               Luxuary Spa
                               <span className="block text-white">
                                 in Vadodara
                               </span>
                             </h1>
                 
                             <p className="mt-6 text-lg md:text-xl leading-8 text-white">
                              Experience unmatched pleasure with our discreet and professional massage services in Vadodara. 
                              Indulge in pure relaxation, sensual touch, and ultimate satisfaction with our expert therapists.
                             </p>
                 
                             {/* Buttons */}
                             <div className="mt-10 flex flex-row flex-wrap justify-center items-center gap-4">
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

      {/* Content */}
      <section className="max-w-7xl text-[#92242C] mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/gallary/ga4.jpg"
              alt="Thai Massage Therapy"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-[#92242C] font-semibold uppercase">
              Traditional Wellness
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              What is Thai Massage?
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Thai Massage is an ancient healing therapy that combines
              acupressure, assisted stretching and rhythmic compression.
              It helps improve flexibility, reduce stress, relieve muscle
              tension and enhance overall well-being.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Improves flexibility and mobility</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Reduces stress and anxiety</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Relieves muscle tension</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span>Boosts energy and circulation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white text-[#92242C] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#92242C] text-4xl font-bold mb-14">
            Benefits of Thai Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Stress Relief
              </h3>
              <p className="text-black">
                Helps calm the mind and reduce daily stress levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Better Flexibility
              </h3>
              <p className="text-black">
                Improves body flexibility through assisted stretching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Improved Circulation
              </h3>
              <p className="text-black">
                Enhances blood flow and promotes overall wellness.
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

          <p className="text-black text-lg mb-10">
            Choose from 60 Minutes, 90 Minutes or 120 Minutes
            Thai Massage sessions.
          </p>

          <a
            href="tel:+918655700242"
            className="inline-flex items-center gap-2 bg-[#92242C] text-black px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}