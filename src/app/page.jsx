
import Services from "@/components/Services";
import OurGallery from "@/components/OurGallerry";
import Testimonials from "@/components/Testimonial";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import OfferCards from "@/components/OfferCards";
import MapSection from "@/components/MapSection"
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-black text-white antialiased min-h-screen">
        <Hero />
        <WelcomeSection />
        <ServicesCards />
        <Services />
        <OurGallery />
         <OfferCards /> 
        <Testimonials />
        <WhyChooseUs />
        <MapSection /> 
      </main>
    </>
  );
}
