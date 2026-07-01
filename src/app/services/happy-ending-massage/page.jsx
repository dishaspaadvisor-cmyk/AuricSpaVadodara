import Image from "next/image";
import { Phone, CheckCircle, Clock,MessageCircle,  Star,
  Heart,
  Sparkles,
  Moon,
  Leaf, } from "lucide-react";

export const metadata = {
  title: "Happy Ending Massage Vadodara",
  description:
    "Experience Happy Ending Massage in Vadodara Gujarat. Relax your body and mind with essential oils and soothing massage techniques at yellow Spa.",
};

export default function AromatherapyMassagePage() {
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
                             Happy Ending Massage
                            </span>
                
                            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                              Expert Staff
                              <span className="block text-[#F5D6A0]">
                                Available 
                              </span>
                            </h1>
                
                            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
                             Experience unmatched pleasure with our discreet and professional massage services in Vadodara. 
                             Indulge in pure relaxation, sensual touch, and ultimate satisfaction with our expert therapists.
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
          <div>
            <Image
              src="/gallary/ga4.jpg"
              alt="Aromatherapy Spa Treatment"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-[#92242C] font-semibold uppercase">
              Essential Oil Therapy
            </span>

            <h2 className="text-[#92242C] text-4xl font-bold mt-3 mb-6">
              What is Happy Ending Massage?
            </h2>

            <p className="text-black leading-8 mb-6">
              A happy ending massage offers ultimate relaxation, combining soothing body techniques with a sensual finale.
              Discreet, luxurious, and deeply satisfying, it’s the perfect escape for stress relief and personal indulgence.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Relieves stress and anxiety</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Improves sleep quality</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Enhances mood and relaxation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Nourishes the skin with natural oils</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
     {/* ================= Benefits Section ================= */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#faf7f4] to-white py-24">

  {/* Background Blur */}
  <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#92242C]/10 blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#92242C]/10 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center gap-2 rounded-full bg-[#92242C]/10 px-5 py-2 text-[#92242C] font-semibold">
        <Sparkles size={18} />
        Premium Wellness
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#92242C]">
        Benefits of Happy Ending
      </h2>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        Experience the healing power of essential oils combined with
        therapeutic massage to relax your body, refresh your mind,
        and restore your overall well-being.
      </p>

    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Card 1 */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#92242C]/10 transition-all group-hover:bg-[#92242C]">

          <Heart
            size={32}
            className="text-[#92242C] group-hover:text-white"
          />

        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#92242C]">
          Stress Relief
        </h3>

        <p className="mb-6 text-gray-600 leading-7">
          Essential oils soothe the nervous system, reduce anxiety,
          and promote deep physical and mental relaxation.
        </p>

        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Reduces daily stress
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Relaxes muscles
            </span>
          </div>

        </div>

      </div>

      {/* Card 2 */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#92242C]/10 transition-all group-hover:bg-[#92242C]">

          <Moon
            size={32}
            className="text-[#92242C] group-hover:text-white"
          />

        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#92242C]">
          Better Sleep
        </h3>

        <p className="mb-6 text-gray-600 leading-7">
          Lavender and calming oils help improve sleep quality,
          allowing your body to recover naturally.
        </p>

        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Deep relaxation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Peaceful sleep
            </span>
          </div>

        </div>

      </div>

      {/* Card 3 */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#92242C]/10 transition-all group-hover:bg-[#92242C]">

          <Leaf
            size={32}
            className="text-[#92242C] group-hover:text-white"
          />

        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#92242C]">
          Mind & Body Wellness
        </h3>

        <p className="mb-6 text-gray-600 leading-7">
          Restore harmony between body and mind with natural essential
          oils that refresh your senses and improve overall wellness.
        </p>

        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Boosts mood
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-gray-700">
              Natural rejuvenation
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Session Duration */}
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
            Choose from 60 Minutes, 90 Minutes, or 120 Minutes sessions for a
            complete aromatherapy wellness experience.
          </p>

          <a
            href="tel:+918655700242"
            className="inline-flex items-center gap-2 bg-[#92242C]  text-white px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}