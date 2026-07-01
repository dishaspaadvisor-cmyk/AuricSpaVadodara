"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleWhatsApp = () => {
    const message = `Auric Spa Vadodara Enquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.open(
      `https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full border border-black/10 bg-white/50 px-5 py-4 text-black outline-none transition placeholder:text-black focus:border-[#92242C]";

  return (
    <section id="contact" className="section-shell py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="font-script text-3xl text-[#92242C]">Contact Us</p>
          <h2 className="font-display mt-4 text-5xl font-bold text-[#92242C] md:text-6xl">
            Visit Relax Spa
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-black">
            Book a massage session or ask about therapies, timings and
            availability at our Vadodara Gujarat spa.
          </p>

          <div className="mt-10 grid gap-5">
            {[
              { icon: MapPin, title: "Address", text: SITE.address },
              { icon: Phone, title: "Phone", text: SITE.phoneCall },
              { icon: Mail, title: "Email", text: SITE.email },
              { icon: Clock, title: "Opening Hours", text: "Monday - Sunday, 10:00 AM - 10:00 PM" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-black/10 bg-white/[0.03] p-6">
                <div className="flex gap-4">
                  <Icon size={26} className="mt-1 text-[#92242C]" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-black">{title}</h3>
                    <p className="mt-2 leading-7 text-black/70">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-black/10 bg-white/[0.04] p-7 md:p-9">
          <h3 className="font-display mb-8 text-4xl font-bold text-[#92242C]">
            Book Appointment
          </h3>
          <div className="space-y-5">
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name" className={inputClass} />
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className={inputClass} />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Write your message" className={inputClass} />
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-3 bg-[#92242C] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#92242C]"
            >
              <MessageCircle size={22} />
              Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
