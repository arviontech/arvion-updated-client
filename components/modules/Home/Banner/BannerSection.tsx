import BannerContent from "./BannerContent";
import BannerVisual from "./BannerVisual";


const BannerSection = () => {
    return (
        <section className="relative min-h-screen pt-20 overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-blue-100/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <BannerContent />

                    {/* Right: Hero Visual */}
                    <BannerVisual />
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
        </section>
    );
};

export default BannerSection;
