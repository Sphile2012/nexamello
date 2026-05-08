import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import GlobalBanner from "../components/GlobalBanner";
import AddOnsSection from "../components/AddOnsSection";
import ValueSection from "../components/ValueSection";
import ProcessSection from "../components/ProcessSection";
import ContactSection from "../components/ContactSection";
import HostingSection from "../components/HostingSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
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
    </div>
  );
}
