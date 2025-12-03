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
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our SEO <span className="text-blue-600">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to improving your search rankings and driving qualified organic traffic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300" />
                            <span className="relative text-4xl font-bold text-blue-600 mb-6 block">
                                {step.number}
                            </span>
                            <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="relative text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="relative rounded-3xl overflow-hidden bg-blue-600 text-white p-8 md:p-12 lg:p-16 text-center">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-800" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Dominate Search Rankings?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Let&apos;s discuss your SEO goals and how we can help you drive more organic traffic, leads, and revenue.
                        </p>
                        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Book a Meeting
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoProcessSection;
