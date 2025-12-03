import HeroSection from "./HeroSection";
import CloudServicesSection from "./CloudServicesSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CloudProcessSection from "./CloudProcessSection";
import CloudFAQSection from "./CloudFAQSection";

export default function CloudSolutionsPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <CloudServicesSection />
            <IndustrySolutionsSection />
            <WhyChooseUsSection />
            <CloudProcessSection />
            <CloudFAQSection />
        </main>
    );
}
