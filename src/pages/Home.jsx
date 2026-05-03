import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AddOnsSection from "../components/AddOnsSection";
import ValueSection from "../components/ValueSection";
import ProcessSection from "../components/ProcessSection";
import ContactSection from "../components/ContactSection";
import HostingSection from "../components/HostingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

// Free-to-use Unsplash images (no API key required)
const HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80";
const SERVICES_IMAGE = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ServicesSection />
      <HostingSection />
      <TestimonialsSection />
      <ProcessSection />
      <AddOnsSection />
      <ValueSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
