"use client";

import { MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function MapSection() {
  return (
    <section className="section-shell py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Find Us
          </span>

          <h2 className="font-display mt-5 text-4xl font-bold text-[#92242C] md:text-5xl">
            Visit Auric Spa Vadodara
          </h2>
        </div>

        {/* Map Card */}
        <div
          className="overflow-hidden rounded-[32px] bg-white shadow-2xl"
          style={{
            border: `1px solid ${SITE.brand}20`,
          }}
        >
          {/* Address Bar */}
          <div
            className="flex items-center gap-3 border-b px-8 py-5"
            style={{
              borderColor: `${SITE.brand}20`,
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${SITE.brand}15`,
              }}
            >
              <MapPin size={22} color={SITE.brand} />
            </div>

            <div>
              <h3
                className="font-semibold text-lg"
                style={{ color: SITE.brand }}
              >
                Auric Spa Vadodara
              </h3>

              <p className="text-sm text-gray-600">
                Shop No. 101, 102, 103, 1st Floor, Red Coral: The Business Hub, Harni-Warasiya Ring Road, Near Gada Circle, Harni, Vadodara, Gujarat 390022
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[350px] md:h-[550px]">
            <iframe
              title="Auric Spa Vadodara Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14761.287045543735!2d73.1998634871582!3d22.341476399999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf88ef763965%3A0xc7ef57fd0f782171!2sAuric%20Spa%20(Spa%20In%20Vadodara)!5e0!3m2!1sen!2sin!4v1782719456705!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}