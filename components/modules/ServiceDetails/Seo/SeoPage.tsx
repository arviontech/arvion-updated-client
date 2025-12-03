
import SeoServicesSection from "./SeoServicesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import SeoProcessSection from "./SeoProcessSection";
import SeoFAQSection from "./SeoFAQSection";
import HeroSection from "./HeroSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";


export default function SeoPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <SeoServicesSection />
            <IndustrySolutionsSection />
            <WhyChooseUsSection />
            <SeoProcessSection />
            <SeoFAQSection />
        </main>
    );
}
