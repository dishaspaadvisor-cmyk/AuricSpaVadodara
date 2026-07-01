import ABoutHero from "@/components/AboutHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonial";
import Services from "@/components/Services"
import MapSection from "@/components/MapSection";
export default function AboutPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#F3EEF0] text-black antialiased min-h-screen">
       <ABoutHero />
       <About />
       <Services />
       <Testimonials />
       <MapSection /> 
      </main>
    </>
  );
}
