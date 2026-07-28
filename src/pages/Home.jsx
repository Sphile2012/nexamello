import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PremiumSections from "../components/PremiumSections";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden antialiased">
      <Navbar />
      <HeroSection />
      <PremiumSections />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
