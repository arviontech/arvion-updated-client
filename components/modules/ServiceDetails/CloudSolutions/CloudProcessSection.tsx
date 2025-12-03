const CloudProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Cloud Assessment",
            description: "We analyze your current infrastructure, workloads, and business requirements to design the optimal cloud strategy."
        },
        {
            number: "02",
            title: "Architecture Design",
            description: "We create a detailed cloud architecture blueprint with security, scalability, and cost optimization in mind."
        },
        {
            number: "03",
            title: "Migration Planning",
            description: "We develop a phased migration plan to minimize downtime and risk during the transition to the cloud."
        },
        {
            number: "04",
            title: "Implementation",
            description: "We provision infrastructure, migrate workloads, and configure services using Infrastructure as Code for consistency."
        },
        {
            number: "05",
            title: "Testing & Validation",
            description: "We perform comprehensive testing to ensure performance, security, and functionality meet your requirements."
        },
        {
            number: "06",
            title: "Optimization & Support",
            description: "We continuously monitor, optimize costs, and provide ongoing support to ensure peak performance."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Cloud <span className="text-blue-600">Transformation Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A proven methodology to migrate and optimize your infrastructure in the cloud with minimal disruption.
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
                            Ready to Move to the Cloud?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Let&apos;s discuss your cloud strategy and how we can help you reduce costs, improve performance, and scale effortlessly.
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

export default CloudProcessSection;
