import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RespiratorySection from "@/components/sections/RespiratorySection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductVariantsSection from "@/components/sections/ProductVariantsSection";
import HowToUseSection from "@/components/sections/HowToUseSection";
import PurchaseSection from "@/components/sections/PurchaseSection";
import AvailabilitySection from "@/components/sections/AvailabilitySection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RespiratorySection />
        <BenefitsSection />
        <ProductVariantsSection />
        <HowToUseSection />
        <PurchaseSection />
        <AvailabilitySection />
        <ContactSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
