import GalleryHero from "@/components/GalleryHero";
import OurGallery from "@/components/OurGallerry";
export default function GalleryPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#F3EEF0] text-black antialiased min-h-screen">
      <GalleryHero />
      <OurGallery />
      </main>
    </>
  );
}
