'use client';

const DevelopmentStepsSection = () => {
    const steps = [
        {
            number: "01",
            title: "Research & Discovery",
            description: "We conduct user research, competitive analysis, and stakeholder interviews to understand your users' needs and business goals."
        },
        {
            number: "02",
            title: "Information Architecture",
            description: "We organize content and define user flows to create a logical, intuitive structure for your digital product."
        },
        {
            number: "03",
            title: "Wireframing & Prototyping",
            description: "We create low and high-fidelity prototypes to validate concepts and gather feedback before visual design."
        },
        {
            number: "04",
            title: "Visual Design",
            description: "We craft beautiful, on-brand interfaces with attention to typography, color, spacing, and visual hierarchy."
        },
        {
            number: "05",
            title: "Usability Testing",
            description: "We test designs with real users to identify pain points and optimize the experience before development."
        },
        {
            number: "06",
            title: "Design Handoff & Support",
            description: "We provide developers with detailed specs, assets, and ongoing support to ensure pixel-perfect implementation."
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Our Design <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A user-centered approach to creating exceptional digital experiences that solve real problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
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

                            <span className="relative text-4xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-6 block z-10">
                                {step.number}
                            </span>
                            <h3 className="relative text-xl font-bold text-gray-900 mb-3 z-10">
                                {step.title}
                            </h3>
                            <p className="relative text-gray-800 leading-relaxed font-semibold z-10">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="relative rounded-3xl overflow-hidden text-white p-8 md:p-12 lg:p-16 text-center"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3)',
                    }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Elevate Your User Experience?
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Let&apos;s discuss your design needs and how we can create intuitive, beautiful experiences that your users will love.
                        </p>
                        <button className="px-8 py-4 text-gray-700 font-semibold rounded-full transition-all"
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 1)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
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
