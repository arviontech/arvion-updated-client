import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import DevelopmentStepsSection from "./DevelopmentStepsSection";
import FAQSection from "./FAQSection";

export default function UiUxPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <WhyChooseUsSection />
            <IndustrySolutionsSection />
            <DevelopmentStepsSection />
            <FAQSection />
        </main>
    );
}
