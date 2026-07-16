import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GlobalBanner from "../components/GlobalBanner";
import ServicesSection from "../components/ServicesSection";
import HostingSection from "../components/HostingSection";
import ProcessSection from "../components/ProcessSection";
import AddOnsSection from "../components/AddOnsSection";
import ValueSection from "../components/ValueSection";
import TrustBadgesSection from "../components/TrustBadgesSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GlobalBanner />
      <TrustBadgesSection />
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
