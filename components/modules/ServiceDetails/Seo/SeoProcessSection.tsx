'use client';

const SeoProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "SEO Audit & Analysis",
            description: "We conduct a comprehensive audit of your site's technical health, content, backlinks, and competitor landscape to identify opportunities."
        },
        {
            number: "02",
            title: "Keyword Research",
            description: "We identify high-value keywords with strong search intent that align with your business goals and target audience."
        },
        {
            number: "03",
            title: "On-Page Optimization",
            description: "We optimize your content, meta tags, headers, internal linking, and page structure for maximum relevance and crawlability."
        },
        {
            number: "04",
            title: "Technical SEO",
            description: "We fix technical issues like site speed, mobile-friendliness, structured data, and crawl errors to improve search engine accessibility."
        },
        {
            number: "05",
            title: "Content & Link Building",
            description: "We create SEO-optimized content and execute white-hat link building campaigns to build authority and trust."
        },
        {
            number: "06",
            title: "Monitor & Optimize",
            description: "We track rankings, traffic, and conversions, continuously refining strategies based on performance data and algorithm updates."
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
                        Our SEO <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to improving your search rankings and driving qualified organic traffic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl transition-all duration-300 group overflow-hidden hover:-translate-y-1"
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

                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full -z-[8] transition-all duration-300"
                                style={{
                                    background: 'rgba(6, 182, 212, 0.05)',
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
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                        boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
                    }}>
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-16 -mt-16"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            filter: 'blur(60px)',
                        }}>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-16 -mb-16"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            filter: 'blur(60px)',
                        }}>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Ready to Dominate Search Rankings?
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Let&apos;s discuss your SEO goals and how we can help you drive more organic traffic, leads, and revenue.
                        </p>
                        <button className="px-8 py-4 font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.8)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                            }}>
                            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                                Book a Meeting
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoProcessSection;
