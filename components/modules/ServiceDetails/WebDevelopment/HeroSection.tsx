'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                {/* Decorative frosted glass shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
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
                            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent px-3 py-1 rounded-full text-xs tracking-wide font-bold">WEB DEVELOPMENT</span>
                        </nav>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight animate-fade-in-up animation-delay-100">
                            Building <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500">
                                Modular Web Architectures
                            </span>
                            <br className="hidden lg:block" />
                            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold mt-2 block">
                                for Scalable, Secure, and High-Performance Digital Platforms
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
                            Our solutions are engineered for flexibility enabling seamless integration, rapid iteration, and sustained reliability to support evolving business needs and user expectations—making us a trusted Web Development Outsourcing Company for scalable digital growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                            <button className="px-8 py-4 text-white font-semibold rounded-full transition-all flex items-center gap-2"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                                    boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.4)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 text-gray-700 font-semibold rounded-full transition-all"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.5)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.6)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.6)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                View Portfolio
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
                                    src="/assets/services/Web-development.jpg"
                                    alt="Web Development Architecture"
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Technology</p>
                                    <p className="text-sm font-bold text-gray-900">Modern Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
