import HeroSection from "./HeroSection";
import PlatformsSection from "./PlatformsSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import AppProcessSection from "./AppProcessSection";
import AppFAQSection from "./AppFAQSection";

export default function AppDevelopmentPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <PlatformsSection />
            <IndustrySolutionsSection />
            <WhyChooseUsSection />
            <AppProcessSection />
            <AppFAQSection />
        </main>
    );
}
