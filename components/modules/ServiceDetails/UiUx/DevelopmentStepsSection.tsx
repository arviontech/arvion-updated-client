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
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Design <span className="text-blue-600">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A user-centered approach to creating exceptional digital experiences that solve real problems.
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
                            Ready to Elevate Your User Experience?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Let&apos;s discuss your design needs and how we can create intuitive, beautiful experiences that your users will love.
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

export default DevelopmentStepsSection;
