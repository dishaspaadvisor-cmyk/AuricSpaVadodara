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
  
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.address || !form.notes) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_key: "frm_auric_spa_vadodara_436268",
            name: form.name,
            phone: form.phone,
            address: form.address,
            notes: form.notes,
            submitted_from_url: window.location.href,
          }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Submission failed");
      }

      setStatus(
        "Your enquiry has been sent successfully. We will contact you soon.",
      );
      setForm({ name: "", phone: "", email: "", address: "", notes: "" });
    } catch (error) {
      console.error(error);
      setStatus(
        "Unable to submit the enquiry. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
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
                 <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className={inputClass}
            />
  <input
  name="phone"
  value={form.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({
      ...prev,
      phone: value,
    }));
  }}
  type="tel"
  placeholder="Phone Number"
  maxLength={10}
  inputMode="numeric"
  className={inputClass}
/>     
        <input
  name="address"
  value={form.address}
  onChange={(e) => {
    const value = e.target.value;

    // Block URLs
    const urlRegex =
      /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|in|org|net|co|io|gov|edu|xyz|biz|info|me))/i;

    if (urlRegex.test(value)) {
      return; // Don't allow URLs
    }

    setForm((prev) => ({
      ...prev,
      address: value,
    }));
  }}
  type="text"
  placeholder="Your Address"
  maxLength={100}
  autoComplete="off"
  className={inputClass}
/>
           <textarea
  name="notes"
  value={form.notes}
  onChange={(e) => {
    const value = e.target.value;

    // Block URLs
    const urlRegex =
      /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|in|org|net|co|io|gov|edu|xyz|biz|info|me))/i;

    if (urlRegex.test(value)) {
      return; // Don't allow URLs
    }

    setForm((prev) => ({
      ...prev,
      notes: value,
    }));
  }}
  rows={6}
  placeholder="Write your message"
  className={inputClass}
/>
            {status ? <p className="text-sm text-black/80">{status}</p> : null}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#4D3F33] px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#3a4526] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}
