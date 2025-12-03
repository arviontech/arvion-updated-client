const WhyChooseUsSection = () => {
    const features = [
        {
            title: "Multi-Cloud Expertise",
            description: "Certified architects with deep expertise in AWS, Azure, and Google Cloud Platform, ensuring you choose the right platform for your needs.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        },
        {
            title: "Cost Optimization",
            description: "We analyze your cloud spend and implement strategies to reduce costs by 30-50% through right-sizing, reserved instances, and automation.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Security First",
            description: "We implement defense-in-depth strategies with encryption, IAM policies, network segmentation, and continuous compliance monitoring.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Auto-Scaling Infrastructure",
            description: "We design elastic architectures that automatically scale resources up or down based on demand, ensuring optimal performance and cost.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            title: "24/7 Monitoring & Support",
            description: "Proactive monitoring with CloudWatch, Azure Monitor, and Stackdriver, plus round-the-clock support to ensure uptime and rapid incident response.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Disaster Recovery",
            description: "We implement backup strategies, failover mechanisms, and multi-region deployments to ensure business continuity and data protection.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">YOUR GO-TO TECH PARTNER</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                        Why Team Up with Arvion Tech for <br className="hidden sm:block" />
                        <span className="text-blue-400">Cloud Excellence</span>
                    </h2>
                    <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
                        Our cloud expertise, automation-first approach, and commitment to security make us your strategic partner for cloud transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-slate-700/50 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
