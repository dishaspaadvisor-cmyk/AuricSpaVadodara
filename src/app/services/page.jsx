import ServicesHeroSection from "@/components/ServicesHero";
import Services from "@/components/Services";
import ServicesCards from "@/components/ServicesCards"
export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-black text-white antialiased min-h-screen">
        <ServicesHeroSection />
        <ServicesCards />
        <Services />
      </main>
    </>
  );
}
