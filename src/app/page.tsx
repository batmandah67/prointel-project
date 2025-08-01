import AboutSection from "./components/AboutSection";
import FeatureGrid from "./components/FeatureGrid";
import HeroCarousel from "./components/HeroCarousel";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeatureGrid />
      <AboutSection />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
    </main>
  );
}
