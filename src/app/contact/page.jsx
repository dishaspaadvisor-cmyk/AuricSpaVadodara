import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
export default function ContactPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#F3EEF0] text-black antialiased min-h-screen">
       <ContactHero />
       <ContactForm />
        <MapSection /> 
      </main>
    </>
  );
}
