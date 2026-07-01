
"use client";

import Image from "next/image";

// ==========================================
// 1. DATA SOURCE
// ==========================================
const services = [
  {
    name: "Thai Massage",
    image: "/gallary/2.jpg",
  },
  {
    name: "Body Massage",
    image: "/gallary/1.jpg",
  },
  {
    name: "Sandwich Massage",
    image: "/gallary/3.jpg",
  },
  {
    name: "Couples Massage",
    image: "/gallary/ga4.jpg",
  },
  {
    name: "Hot Stone Massage",
    image: "/gallary/6.jpg",
  },
  {
    name: "Deep Tissue Massage",
    image: "/gallary/ga5.jpg",
  },
  {
    name: "Swedish Massage",
    image: "/gallary/ga7.jpg",
  },
  {
    name: "Aromatherapy Massage",
    image: "/gallary/ga8.jpg",
  },
];

// ==========================================
// 2. MODULAR COMPONENT: GALLERY CARD
// ==========================================
const GalleryCard = ({ service, phone, whatsapp }) => {
  return (
    <div className="group relative h-[380px] w-full overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer">
      
      {/* Background Image with Zoom Effect */}
      <Image
        src={service.image}
        alt={service.name}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
      />
    

      {/* Service Name Label */}
      <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-white text-2xl font-serif font-medium tracking-wide">
          {service.name}
        </h3>
        <div className="h-[2px] w-12 bg-[#c6a86c] mt-3 transition-all duration-500 group-hover:w-full"></div>
      </div>

      {/* Hover Action Buttons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
        <div className="flex gap-4 transform translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
          
          {/* Call Button */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 bg-white/95 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#92242C] hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:bg-[#1ebd57] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
};


// 3. MAIN COMPONENT

export default function ServiceGallery() {
  const phone = "+918655700242"; 
  const whatsapp = "918655700243"; 

  return (
    <section className="py-24 bg-[#FAF9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[#92242C]/10 text-[#92242C] font-semibold uppercase tracking-[4px] text-xs py-2 px-6 rounded-full mb-6">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl text-[#92242C] font-serif font-bold mb-6">
           Luxury Spa Gallery
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience the finest wellness and relaxation therapies designed
            to rejuvenate your body, mind, and soul. Take a look at our tranquil spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <GalleryCard 
              key={index} 
              service={service} 
              phone={phone} 
              whatsapp={whatsapp} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}