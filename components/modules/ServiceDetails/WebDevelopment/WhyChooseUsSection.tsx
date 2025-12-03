const WhyChooseUsSection = () => {
    const features = [
        {
            title: "Custom Web App Build",
            description: "We build slick, custom-made web apps according to your business's unique needs, maxing out performance and user experience.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "UX-Centric Web Design",
            description: "From Figma to production, we craft pixel-perfect interfaces rooted in UX heuristics and behavioral data, driving retention, conversions, and intuitive navigation.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: "Tech Stack Agnostic",
            description: "Our team is tech agnostic, choosing and building with right tech, for future-proof, scalable, modular and business oriented digital platforms.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "API Architecture and Integration",
            description: "We engineer robust, RESTful or GraphQL APIs that connect your digital ecosystem, enabling frictionless data exchange, system orchestration, and service interoperability.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "SaaS Development",
            description: "From MVPs to multi-tenant SaaS products, we deliver cloud-native, subscription-ready platforms with CI/CD pipelines, role-based access, and dynamic scalability baked in.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        },
        {
            title: "CMS Development",
            description: "We deploy customizable CMS platforms (WordPress, Strapi, Contentful) tailored to your publishing flow — putting you in full control of updates, SEO, and multichannel delivery.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
                        <span className="text-blue-400">Web Dev Domination</span>
                    </h2>
                    <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
                        Our obsession with precision, modern frameworks, and outcome-focused builds makes Arvion your strategic partner for future-ready web experiences that drive growth, resilience, and ROI.
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
