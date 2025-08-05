import AboutSection from "../components/AboutSection";
import FeatureGrid from "../components/FeatureGrid";
import FreeConsultationSection from "../components/FreeConsultationSection";
import HeroCarousel from "../components/HeroCarousel";
import HeroSection from "../components/HeroSection";
import OurPartners from "../components/OurPartners";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeatureGrid />
      <AboutSection />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <StatsSection />
      <FreeConsultationSection />
      <OurPartners />
    </main>
  );
}
