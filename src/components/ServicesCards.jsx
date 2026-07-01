"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const massages = [
  {
    title: "Thai Massage",
    slug: "thai-massage",
    src: "/services/11.png",
    alt: "Thai Massage",
    discription:
      "Experience ultimate relaxation with sensual Thai massage in Vadodara. Let warm, gel-based body-to-body therapy melt away stress and awaken your senses in pure bliss.",
  },
  {
    title: "Body to body Massage",
    slug: "body-to-body-massage",
    src: "/services/12.png",
    alt: "Body Massage",
    discription:
      "Indulge in a sensual and relaxing body to body massage by skilled therapists. Enjoy smooth gliding motions, soothing touch, and a deeply intimate experience that melts away stress and tension.",
  },
  {
    title: "Deep Tissue Massage",
    slug: "deep-tissue-massage",
    src: "/services/13.png",
    alt: "Deep Tissue Massage",
    discription:
      "A Deep Tissue massage offers ultimate relaxation, combining soothing body techniques with a sensual finale. Discreet, luxurious, and deeply satisfying, it’s the perfect escape for stress relief and personal indulgence.",
  },
  {
    title: "Swedish Massage",
    slug: "swedish-massage",
    src: "/services/14.png",
    alt: "Swedish Massage",
    discription:
      "Experience ultimate relaxation with premium Swedish massage in Vadodara. Our professional therapists offer soothing touch therapy designed to relieve stress, rejuvenate your body, and elevate your senses.",
  },
  {
    title: "Nuru Massage",
    slug: "nuru-massage",
    src: "/services/15.png",
    alt: "Hot Stone Massage",
    discription:
      "Experience ultimate relaxation with sensual Nuru massage in Vadodara. Let warm, gel-based body-to-body therapy melt away stress and awaken your senses in pure bliss",
  },
  {
    title: "Couples Massage",
    slug: "couples-massage",
    src: "/services/16.png",
    alt: "Couples Massage",
    discription:
      "Enjoy a peaceful couple massage experience designed to relax partners together in a calming and luxurious spa environment.",
  },
];

export default function MassageOffered() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[5px] text-[#92242C] font-semibold">
            Luxury Spa Services
          </span>

          <h2 className="text-4xl md:text-5xl text-[#92242C] font-bold mt-4">
            Our Premium Massage Services
          </h2>

          <p className="text-black max-w-3xl mx-auto mt-6 leading-8">
            Discover luxurious massage therapies designed to relax your body,
            reduce stress, and restore your natural energy.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={900}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {massages.map((item) => (
            <SwiperSlide key={item.slug}>
              <Link href={`/services/${item.slug}`}>
                <div className="group flex flex-col items-center text-center px-3">

                  {/* IMAGE */}
                  <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden rounded-full border border-neutral-200 transition duration-500 group-hover:border-[#92242C]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-black text-2xl font-semibold mt-6 group-hover:text-[#92242C] transition">
                    {item.title}
                  </h3>

                  {/* SUB TITLE */}
                  <p className="text-[#92242C] text-2xl mt-1">
                    Auric Spa Vadodara
                  </p>

                  {/* DESCRIPTION (FIXED) */}
                  <p className="text-black text-lg mt-3 leading-6 line-clamp-3 max-w-[260px]">
                    {item.discription}
                  </p>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Pagination Style */}
      <style jsx global>{`
        .swiper-pagination {
          margin-top: 40px;
          position: relative;
        }

        .swiper-pagination-bullet {
          background: #bbb;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #92242C;
          width: 28px;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
}