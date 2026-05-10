import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GlobalBanner from "../components/GlobalBanner";
import ServicesSection from "../components/ServicesSection";
import HostingSection from "../components/HostingSection";
import ProcessSection from "../components/ProcessSection";
import AddOnsSection from "../components/AddOnsSection";
import ValueSection from "../components/ValueSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

// Lightweight hero image — no heavy background
const HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=60&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter overflow-x-hidden">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <GlobalBanner />
      <ServicesSection />
      <HostingSection />
      <ProcessSection />
      <AddOnsSection />
      <ValueSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      {/* Sticky WhatsApp — always visible */}
      <StickyWhatsApp />
    </div>
  );
}
