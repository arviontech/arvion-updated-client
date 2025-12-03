import HeroSection from "./HeroSection";
import StandOutSection from "./StandOutSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ChallengesSection from "./ChallengesSection";
import DevelopmentStepsSection from "./DevelopmentStepsSection";
import FAQSection from "./FAQSection";


export default function WebDevelopmentPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <StandOutSection />
            <IndustrySolutionsSection />
            <WhyChooseUsSection />
            <ChallengesSection />
            <DevelopmentStepsSection />
            <FAQSection />
        </main>
    );
}
