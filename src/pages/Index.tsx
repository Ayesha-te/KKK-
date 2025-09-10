import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FiltersBar from "@/components/FiltersBar";

import AboutSection from "@/components/AboutSection";
import CountdownTimer from "@/components/CountdownTimer";
import PricingSection from "@/components/PricingSection";
import MapSection from "@/components/MapSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import CustomerStoriesSection from "@/components/CustomerStoriesSection";
import CityHighlight from "@/components/CityHighlight";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import AYSDeveloperSection from "@/components/AYSDeveloperSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <HeroSection />
      {/* New filters bar directly under hero */}
      <FiltersBar />
      <AboutSection />
      <CountdownTimer />
      <PricingSection />
      <MapSection />
      <AmenitiesSection />
      <CustomerStoriesSection />
      {/* Added city/plots highlight above Contact section */}
      <CityHighlight />
      <AYSDeveloperSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
