"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../lib/siteConfig";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1480px] px-5 md:px-8">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-44 md:h-16 md:w-52">
            <Image
              src="/auriclogo.webp"
              alt={SITE.title}
              fill
              priority
              sizes="208px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 text-[15px] font-semibold uppercase tracking-wider text-black transition-none ${
                    active ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#92242C]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#92242C] px-5 text-sm font-semibold text-black"
            >
              <Phone size={17} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}?text=${encodeURIComponent(
                "Hi, I got your contact from Auric Spa Vadodara."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-300 text-black md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-[#F3F0F1] md:hidden">
          <div className="flex flex-col px-6 py-5">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-gray-200 py-4 text-base font-semibold uppercase tracking-wider text-black ${
                    active ? "text-[#92242C] underline underline-offset-8" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-6 grid gap-3">
              <a
                href={`tel:${SITE.phoneCall}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#92242C] px-5 py-3 font-semibold text-black"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}