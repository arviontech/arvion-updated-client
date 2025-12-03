import HeroSection from "./HeroSection";
import AiServicesSection from "./AiServicesSection";
import AiProcessSection from "./AiProcessSection";
import AiFAQSection from "./AiFAQSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

export default function AiMachineLearningPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <AiServicesSection />
            <IndustrySolutionsSection />
            <WhyChooseUsSection />
            <AiProcessSection />
            <AiFAQSection />
        </main>
    );
}
