import Link from 'next/link';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import GlassmorphismButton from '@/components/shared/GlassmorphismButton';
import NavStyleButton from '@/components/shared/NavStyleButton';
import GlassmorphismContainer from '@/components/shared/GlassmorphismContainer';

const BannerContent = () => {
    return (
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Your Trusted Partner In Every Step
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                We Build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#703eff] to-[#0254b9]">
                    Digital Experiences
                </span>{' '}
                That Drive Growth.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Arvion Tech is your trusted partner for{' '}
                <span className="font-semibold text-gray-900">Web Development</span>,{' '}
                <span className="font-semibold text-gray-900">UI/UX</span>,{' '}
                <span className="font-semibold text-gray-900">SaaS Solutions</span> &{' '}
                <span className="font-semibold text-gray-900">Digital Innovation</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
                {/* Get In Touch - Glassmorphism Button */}
                <GlassmorphismButton
                    href="/contact"
                    size="md"
                    leftIcon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                    rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                    className="hover:scale-105 w-auto"
                >
                    Get In Touch
                </GlassmorphismButton>

                {/* Book a Meeting - Navbar Style Button in Glassmorphism Container */}
                <GlassmorphismContainer className="w-auto">
                    <NavStyleButton
                        href="/contact"
                        size="md"
                        leftIcon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                        rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                        noHoverBg={true}
                        className="w-auto"
                    >
                        Book a Meeting
                    </NavStyleButton>
                </GlassmorphismContainer>
            </div>

            {/* Trust indicators */}
            {/* <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">500+</span> Happy Clients
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">4.9/5</span> Rating
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default BannerContent;
