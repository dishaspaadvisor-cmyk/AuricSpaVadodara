"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Neel Bhatt",
    location: "Vadodara",
    review:
      "Had an amazing Balinese massage here. The rooms and facilities were luxurious, the massage was incredibly relaxing, and the staff members were very sweet and professional. Highly recommended for anyone looking for a premium spa experience.",
  },
  {
    name: "Rahul Sharma",
    location: "Vadodara",
    review:
      "One of the best spa experiences I've ever had. The therapists were highly skilled, the ambience was peaceful, and the hygiene standards were excellent. Definitely visiting again.",
  },
  {
    name: "Priya Verma",
    location: "Mumbai",
    review:
      "Beautiful interiors, professional therapists and excellent customer service. The Swedish massage was extremely relaxing and worth every penny. Highly recommended.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-shell relative overflow-hidden py-20 md:py-24">
      {/* Decorative Circles */}
      <div className="absolute -left-12 bottom-0 hidden h-72 w-72 rotate-12 rounded-full border border-white/10 md:block" />
      <div className="absolute -right-20 top-24 hidden h-80 w-80 rotate-12 rounded-full border border-[#92242C]/15 md:block" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="mandala" aria-hidden="true" />

        <p className="font-script mt-2 text-3xl text-[#92242C]">
          Testimonials
        </p>

        <h2 className="font-display mt-4 text-5xl font-bold text-[#92242C] md:text-6xl">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="mt-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="pb-16">
                {/* Stars */}
                <div className="flex justify-center gap-2 text-[#92242C]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={28}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="font-display mx-auto mt-8 max-w-4xl text-xl italic leading-relaxed text-black md:text-3xl">
                  "{item.review}"
                </blockquote>

                {/* Name */}
                <h3 className="font-display mt-10 text-3xl font-bold text-[#92242C]">
                  {item.name}
                </h3>

                <p className="mt-2 text-base text-black">
                  {item.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Style */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 10px;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: 0.3s;
        }

        .swiper-pagination-bullet-active {
          background: #92242C;
          border-color: #92242C;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}