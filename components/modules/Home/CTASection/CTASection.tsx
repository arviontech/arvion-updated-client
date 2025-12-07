'use client';

import { Code2, Users, ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';
import Image from 'next/image';
import GlassmorphismButton from '@/components/shared/GlassmorphismButton';

const CTASection = () => {
    const services = [
        {
            icon: <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: 'Product Development',
            description: 'We transform your vision into actionable tech solutions. From concept to launch and beyond, we deliver disciplined execution with agile processes and full transparency.',
            offerings: [
                'MVP Development',
                'Integrated Business Automation',
                'End-End Tailored Software Development'
            ]
        },
        {
            icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: 'Team Extension',
            description: 'Tight deadlines, shifting scopes, rapid scaling—we offer team augmentation by embedding engineers who speak your stack, move at your speed, and align with your culture.',
            offerings: [
                'Dedicated Development Team',
                'Staff Augmentation',
                'Technical Consulting'
            ]
        }
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gray-50">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/3 via-white to-violet-500/3" />


                {/* Frosted glass background elements - positioned away from card areas */}
                {/* Top area - above cards */}
                <div className="absolute -top-10 sm:-top-20 left-[10%] sm:left-[20%] w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-3xl transform -rotate-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                    }}
                />

                {/* Bottom area - below cards */}
                <div className="absolute -bottom-16 sm:-bottom-32 left-[15%] sm:left-[25%] w-64 sm:w-80 md:w-96 h-48 sm:h-64 md:h-72 rounded-3xl transform rotate-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                    }}
                />

                {/* Far right accent */}
                <div className="hidden sm:block absolute top-[15%] -right-10 sm:-right-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full"
                    style={{
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(25px)',
                        WebkitBackdropFilter: 'blur(25px)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                    }}
                />

                {/* Decorative outer shapes */}
                <div className="absolute -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 w-64 sm:w-96 md:w-lg h-64 sm:h-96 md:h-128 rounded-full border border-violet-400/8"></div>
                <div className="absolute -top-24 sm:-top-40 -left-24 sm:-left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full border border-cyan-400/8"></div>
            </div>

            {/* Content */}
            <Container className="relative">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Let&apos;s Create Something Extraordinary!
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
                        Building Tomorrow&apos;s Solutions,{' '}
                        <span className="bg-linear-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Today</span>
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        At Arvion Tech, we deliver reliable solutions to complex problems with global expertise and hands-on care, wherever you are.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative">
                    {/* Gradient layer under cards */}
                    <div className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-3xl pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
                            filter: 'blur(60px)',
                            zIndex: 0,
                        }}
                    />
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative z-10"
                        >
                            {/* Service Card - Glassmorphism */}
                            <div
                                className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    border: '1px solid rgba(255, 255, 255, 0.25)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.25)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(6, 182, 212, 0.12), 0 6px 20px rgba(139, 92, 246, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.35)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)';
                                }}
                            >
                                {/* Gradient background layer */}
                                <div className="absolute inset-0 -z-10"
                                    style={{
                                        background: index === 0
                                            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                            : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                    }}
                                />
                                {/* White transparent layer */}
                                <div className="absolute inset-0 -z-9"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                    }}
                                />

                                {/* Decorative Element Image */}
                                <div className={`absolute ${index === 0 ? '-bottom-16 -right-12 w-64 h-64' : '-bottom-16 -right-4 w-64 h-64'} opacity-50 pointer-events-none z-0`}
                                    style={index === 0 ? { transform: 'scaleX(-1)' } : {}}>
                                    <Image
                                        src={index === 0 ? "/assets/element-2.png" : "/assets/element-3.png"}
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.25)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        boxShadow: '0 4px 16px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                    }}>
                                    <div className="text-cyan-600">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4" style={{
                                    textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                                }}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6 sm:mb-8 font-semibold" style={{
                                    textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                                }}>
                                    {service.description}
                                </p>

                                {/* Offerings List */}
                                <div className="space-y-3">
                                    {service.offerings.map((offering, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 text-gray-900 hover:text-cyan-600 transition-colors group/item cursor-pointer"
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 group-hover/item:translate-x-1 transition-transform shrink-0" />
                                            <span className="text-sm sm:text-base font-bold" style={{
                                                textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)'
                                            }}>{offering}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 sm:mt-16">
                    <GlassmorphismButton
                        href="/contact"
                        size="lg"
                        rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        className="hover:scale-105"
                    >
                        Start Your Project
                    </GlassmorphismButton>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;
