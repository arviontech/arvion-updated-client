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
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Development <span className="text-blue-600">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A transparent, structured approach to bringing your vision to life, from concept to launch and beyond.
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
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Let&apos;s discuss your project and how we can help you achieve your business goals with our expert web development services.
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
