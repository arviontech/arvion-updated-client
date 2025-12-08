import BannerContent from "./BannerContent";
import BannerVisual from "./BannerVisual";
import Container from "@/components/shared/Container";


const BannerSection = () => {
    return (
        <section className="relative lg:min-h-screen pt-16 sm:pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-10 sm:top-20 -left-10 sm:-left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-400/10 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px]" />
            </div>

            {/* Content Container */}
            <Container className="relative py-8 sm:py-10 md:py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <BannerContent />

                    {/* Right: Hero Visual */}
                    <BannerVisual />
                </div>
            </Container>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default BannerSection;
