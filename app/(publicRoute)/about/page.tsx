import AboutHero from "@/components/modules/About/AboutHero";
import CompanyStory from "@/components/modules/About/CompanyStory";
import CoreValues from "@/components/modules/About/CoreValues";
import TeamSection from "@/components/modules/About/TeamSection";
import StatsSection from "@/components/modules/About/StatsSection";
import CTASection from "@/components/modules/About/CTASection";

export const metadata = {
    title: 'About Us | Arvion Tech - Innovative Technology Solutions',
    description: 'Learn about Arvion Tech, our mission, values, and the team behind our innovative technology solutions. We transform ideas into exceptional digital experiences.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <CompanyStory />
            <CoreValues />
            <StatsSection />
            <TeamSection />
            <CTASection />
        </main>
    );
}
