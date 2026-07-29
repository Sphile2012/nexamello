import Navbar from "../components/Navbar";
import AgencyHero from "../components/agency/AgencyHero";
import AgencyServices from "../components/agency/AgencyServices";
import WhyChooseUs from "../components/agency/WhyChooseUs";
import AgencyProcess from "../components/agency/AgencyProcess";
import AgencyPricing from "../components/agency/AgencyPricing";
import AgencyCTA from "../components/agency/AgencyCTA";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden antialiased">
      <Navbar />
      <AgencyHero />
      <AgencyServices />
      <WhyChooseUs />
      <AgencyProcess />
      <AgencyPricing />
      <AgencyCTA />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
