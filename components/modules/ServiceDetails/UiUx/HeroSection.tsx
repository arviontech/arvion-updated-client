import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Content (7 columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-3 text-sm font-medium text-gray-500 mb-8 animate-fade-in-up">
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                COMPANY
                            </Link>
                            <span className="text-gray-300">/</span>
                            <Link href="/#services" className="hover:text-blue-600 transition-colors">
                                SERVICES
                            </Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs tracking-wide">UI/UX DESIGN</span>
                        </nav>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight animate-fade-in-up animation-delay-100">
                            Crafting Intuitive <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500">
                                User-Centered Designs
                            </span>
                            <br className="hidden lg:block" />
                            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold mt-2 block">
                                that Delight Users and Drive Business Growth
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
                            We design beautiful, functional, and human-centric digital experiences. From wireframing to high-fidelity prototyping, we ensure every interaction is meaningful and every pixel serves a purpose.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-[#0254b9]/30 hover:-translate-y-1 flex items-center gap-2">
                                Start Your Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all hover:-translate-y-1">
                                View Design Portfolio
                            </button>
                        </div>
                    </div>

                    {/* Right: Hero Image (5 columns) */}
                    <div className="lg:col-span-5 relative animate-fade-in-up animation-delay-400">
                        {/* Decorative background blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

                        {/* Image Container with Glass Effect */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm p-2">
                            <div className="relative rounded-xl overflow-hidden aspect-4/3 w-full">
                                <Image
                                    src="/assets/services/ui-ux.jpg"
                                    alt="UI/UX Design Process"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-slow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Focus</p>
                                    <p className="text-sm font-bold text-gray-900">User Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
