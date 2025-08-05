import FreeConsultationSection from "@/components/FreeConsultationSection";
import ServicesBanner from "./components/ServicesBanner";
import ServicesGrid from "./components/ServicesGrid";
import FeatureGrid from "@/components/FeatureGrid";
import HeroSection from "@/components/HeroSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesBanner />
      <ServicesGrid />
      <HeroSection />
      <FreeConsultationSection />
      <FeatureGrid />
    </main>
  );
}
