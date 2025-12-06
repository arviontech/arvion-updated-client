import BannerSection from "@/components/modules/Home/Banner/BannerSection";
import CTASection from "@/components/modules/Home/CTASection/CTASection";
import ServicesSection from "@/components/modules/Home/ServicesSection/ServicesSection";
import ProjectsSection from "@/components/modules/Home/ProjectsSection/ProjectsSection";
import SkillSection from "@/components/modules/Home/SkillSection/SkillSection";
import TeamSection from "@/components/modules/Home/TeamSection/TeamSection";
import TestimonialSection from "@/components/modules/Home/TestimonialSection/TestimonialSection";
import BlogSection from "@/components/modules/Home/BlogSection/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <CTASection />
      <ServicesSection />
      <SkillSection />

      <ProjectsSection />

      <TeamSection />
      <BlogSection />
      <TestimonialSection />

    </main>
  );
}
