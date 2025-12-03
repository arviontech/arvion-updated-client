import BannerSection from "@/components/modules/Home/Banner/BannerSection";
import CTASection from "@/components/modules/Home/CTASection/CTASection";
import ServicesSection from "@/components/modules/Home/ServicesSection/ServicesSection";
import ProjectsSection from "@/components/modules/Home/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <CTASection />
      <ServicesSection />
      <ProjectsSection />

    </main>
  );
}
