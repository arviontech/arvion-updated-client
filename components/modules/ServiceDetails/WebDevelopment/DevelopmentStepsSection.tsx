'use client';

const DevelopmentStepsSection = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive roadmap."
        },
        {
            number: "02",
            title: "UI/UX Design",
            description: "Our designers craft intuitive, high-fidelity prototypes that align with your brand and ensure a seamless user experience."
        },
        {
            number: "03",
            title: "Development",
            description: "We build your solution using modern, scalable technologies, following clean code practices and agile methodologies."
        },
        {
            number: "04",
            title: "Testing & QA",
            description: "Rigorous testing across devices and browsers ensures your application is bug-free, secure, and performance-optimized."
        },
        {
            number: "05",
            title: "Deployment & Launch",
            description: "We handle the smooth deployment of your application to production, ensuring zero downtime and a successful launch."
        },
        {
            number: "06",
            title: "Maintenance & Support",
            description: "Our partnership doesn't end at launch. We provide ongoing support, updates, and optimization to keep you ahead."
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                {/* Decorative frosted glass shapes */}
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            How We Work
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Our Development <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
                        A transparent, structured approach to bringing your vision to life, from concept to launch and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
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
                            <div className="absolute inset-0 rounded-2xl -z-10"
                                style={{
                                    background: index % 2 === 0
                                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                }}>
                            </div>

                            {/* White transparent layer */}
                            <div className="absolute inset-0 rounded-2xl -z-[9]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                }}>
                            </div>

                            {/* Decorative circle */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                                }} />

                            <span className="relative text-4xl font-bold mb-6 block bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
                                style={{
                                }}>
                                {step.number}
                            </span>
                            <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors"
                                style={{
                                }}>
                                {step.title}
                            </h3>
                            <p className="relative text-gray-800 leading-relaxed font-semibold"
                                style={{
                                }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 text-center"
                    style={{
                        backdropFilter: 'blur(15px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                    }}>
                    {/* Gradient background layer */}
                    <div className="absolute inset-0 rounded-3xl -z-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
                        }}>
                    </div>

                    {/* White transparent layer */}
                    <div className="absolute inset-0 rounded-3xl -z-[9]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        }}>
                    </div>

                    {/* Decorative frosted glass shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                            filter: 'blur(60px)'
                        }} />
                    <div className="absolute bottom-0 left-0 w-64 h-64 -ml-16 -mb-16 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                            filter: 'blur(60px)'
                        }} />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                            style={{
                            }}>
                            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Digital Presence?</span>
                        </h2>
                        <p className="text-gray-800 text-lg mb-8 font-semibold">
                            Let&apos;s discuss your project and how we can help you achieve your business goals with our expert web development services.
                        </p>
                        <button className="px-8 py-4 font-bold rounded-full transition-all text-white"
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
                            Book a Meeting
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentStepsSection;
