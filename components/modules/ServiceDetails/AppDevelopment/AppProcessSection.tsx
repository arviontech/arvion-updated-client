'use client';

const AppProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description: "We analyze your app idea, target audience, and market competition to define a winning mobile strategy."
        },
        {
            number: "02",
            title: "UI/UX Design",
            description: "We create intuitive wireframes and stunning visual designs that adhere to iOS Human Interface and Material Design guidelines."
        },
        {
            number: "03",
            title: "App Development",
            description: "Our developers write clean, efficient code using the latest technologies to bring your mobile app to life."
        },
        {
            number: "04",
            title: "Testing & QA",
            description: "We perform rigorous testing on real devices to ensure your app is bug-free, responsive, and performs well under load."
        },
        {
            number: "05",
            title: "App Store Launch",
            description: "We handle the complex submission process for the Apple App Store and Google Play Store, ensuring compliance and approval."
        },
        {
            number: "06",
            title: "Maintenance & Growth",
            description: "We monitor app performance, fix issues, and release updates to keep your users engaged and your app competitive."
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-white to-cyan-500/3" />
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
                        Our Mobile <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Development Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
                        A proven, streamlined workflow designed to take your mobile app from concept to the top of the charts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group p-8 rounded-2xl transition-all duration-300 overflow-hidden"
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

                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full"
                                style={{
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
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
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                        }}>
                    </div>

                    {/* White transparent layer */}
                    <div className="absolute inset-0 rounded-3xl -z-[9]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        }}>
                    </div>

                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-16 -mt-16"
                        style={{
                            background: 'rgba(6, 182, 212, 0.1)',
                            filter: 'blur(60px)'
                        }}>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-16 -mb-16"
                        style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            filter: 'blur(60px)'
                        }}>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Have an App Idea? Let&apos;s Build It!
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Turn your vision into a reality with our expert mobile app development team. Schedule a free consultation today.
                        </p>
                        <button
                            className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
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
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppProcessSection;
