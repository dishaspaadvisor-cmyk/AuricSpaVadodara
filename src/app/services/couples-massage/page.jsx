import Image from "next/image";
import { Phone, CheckCircle, Clock, Star,MessageCircle, Heart } from "lucide-react";

export const metadata = {
  title: "Couples Massage in Vadodara",
  description:
    "Enjoy a relaxing Couples Massage in Vadodara Gujarat. Share a luxurious spa experience with your partner in a peaceful and romantic environment.",
};

export default function CouplesMassagePage() {
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
              Couples Massage
              <span className="block text-white">
                in Vadodara
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
              Relax, reconnect, and enjoy a luxurious spa experience with your
              partner in a peaceful private room. Perfect for anniversaries,
              birthdays, date nights, and special occasions.
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
                href="https://wa.me/918655700242"
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
              src="/gallary/2.jpg"
              alt="Potli Massage Therapy"
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <span className="text-[#92242C] font-semibold uppercase">
              Shared Relaxation Experience
            </span>

            <h2 className="text-4xl text-[#92242C] font-bold mt-3 mb-6">
              What is Couples Massage?
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Couples Massage allows two people to enjoy massage therapy
              together in the same room. Whether you're celebrating a special
              occasion or simply looking to relax together, this experience
              combines luxury, comfort, and wellness in a peaceful atmosphere.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Relax together in a private room</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Perfect for couples and special occasions</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Relieves stress and muscle tension</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#92242C]" size={20} />
                <span className="text-black">Creates a memorable spa experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#92242C] text-4xl font-bold mb-14">
            Benefits of Couples Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Heart className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-[#92242C] text-xl mb-3">
                Quality Time Together
              </h3>
              <p className="text-black">
                Share a relaxing and enjoyable experience with your partner.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-[#92242C] text-xl mb-3">
                Stress Relief
              </h3>
              <p className="text-black">
                Helps both partners feel relaxed and refreshed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#92242C] mb-4" size={32} />
              <h3 className="font-bold text-[#92242C] text-xl mb-3">
                Special Experience
              </h3>
              <p className="text-black">
                Ideal for anniversaries, birthdays, and romantic occasions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Session Duration */}
      <section className="py-20 bg-[#faf7f4]">
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
            the ultimate couples relaxation experience.
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