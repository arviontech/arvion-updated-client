'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(80px)',
                        transform: 'translate(33%, -50%)'
                    }}>
                </div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(80px)',
                        transform: 'translate(-25%, 33%)'
                    }}>
                </div>
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Content (7 columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-3 text-sm font-medium text-gray-500 mb-8">
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                COMPANY
                            </Link>
                            <span className="text-gray-300">/</span>
                            <Link href="/#services" className="hover:text-blue-600 transition-colors">
                                SERVICES
                            </Link>
                            <span className="text-gray-300">/</span>
                            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent px-3 py-1 rounded-full text-xs tracking-wide font-bold">SEO OPTIMIZATION</span>
                        </nav>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
                            Dominate Search Rankings <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                Drive Organic Traffic
                            </span>
                            <br className="hidden lg:block" />
                            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold mt-2 block">
                                with Data-Driven SEO Strategies
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                            We optimize your website for search engines using proven strategies that increase visibility, drive qualified traffic, and convert visitors into customers.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="px-8 py-4 text-white font-bold rounded-full transition-all flex items-center gap-2"
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
                                }}
                            >
                                Get SEO Audit
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
                                View Results
                            </button>
                        </div>
                    </div>

                    {/* Right: Hero Image (5 columns) */}
                    <div className="lg:col-span-5 relative">
                        {/* Decorative background blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full -z-10"
                            style={{
                                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                filter: 'blur(60px)'
                            }}>
                        </div>

                        {/* Image Container with Glass Effect */}
                        <div className="relative rounded-2xl overflow-hidden p-2"
                            style={{
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                background: 'rgba(255, 255, 255, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                            }}>
                            <div className="relative rounded-xl overflow-hidden aspect-4/3 w-full">
                                <Image
                                    src="/assets/services/SEO.jpg"
                                    alt="SEO Optimization Strategy"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl flex items-center gap-3"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    background: 'rgba(255, 255, 255, 0.4)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                                }}>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: 'rgba(6, 182, 212, 0.15)',
                                        border: '1px solid rgba(6, 182, 212, 0.3)',
                                    }}>
                                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Growth</p>
                                    <p className="text-sm font-bold text-gray-900">Organic Traffic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
