import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Popup from "../components/Popup";

const siteUrl = "https://auricspavadodara.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Auric Spa Vadodara | Best Luxury Spa & Body Massage Centre in Vadodara",
    template: "%s | Auric Spa Vadodara",
  },

  description:
    "Experience premium spa and massage services at Auric Spa Vadodara. Enjoy full body massage, deep tissue massage, Swedish massage, aromatherapy, couples massage, and wellness therapies in Vadodara, Gujarat.",

  keywords: [
    "Spa in Vadodara",
    "Best Spa in Vadodara",
    "Luxury Spa Vadodara",
    "Massage Centre Vadodara",
    "Body Massage Vadodara",
    "Couple Massage Vadodara",
    "Swedish Massage Vadodara",
    "Deep Tissue Massage Vadodara",
    "Thai Massage Vadodara",
    "Aromatherapy Massage Vadodara",
    "Spa Near Me",
    "Wellness Spa Vadodara",
    "Relaxation Spa",
    "Spa Gujarat",
    "Auric Spa Vadodara",
  ],

  authors: [
    {
      name: "Auric Spa Vadodara",
    },
  ],

  creator: "Auric Spa Vadodara",

  publisher: "Auric Spa Vadodara",

  applicationName: "Auric Spa Vadodara",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/auriclogo.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
        <Popup />
        
      </body>
    </html>
  );
}
