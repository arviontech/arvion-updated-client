const AiProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Problem Definition",
            description: "We identify the business problem, define success metrics, and determine if AI/ML is the right solution for your needs."
        },
        {
            number: "02",
            title: "Data Collection & Preparation",
            description: "We gather, clean, and prepare your data, ensuring quality and relevance for model training."
        },
        {
            number: "03",
            title: "Model Development",
            description: "We experiment with different algorithms, train models, and optimize hyperparameters for best performance."
        },
        {
            number: "04",
            title: "Model Evaluation",
            description: "We rigorously test models using validation sets, A/B testing, and real-world scenarios to ensure accuracy."
        },
        {
            number: "05",
            title: "Deployment & Integration",
            description: "We deploy models to production with APIs, monitoring dashboards, and seamless integration into your systems."
        },
        {
            number: "06",
            title: "Monitoring & Improvement",
            description: "We continuously monitor performance, retrain models with new data, and implement improvements based on feedback."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our AI/ML <span className="text-blue-600">Development Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to building AI solutions that deliver measurable business value.
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
                            Ready to Harness the Power of AI?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Let&apos;s discuss your AI/ML needs and how we can help you automate processes, predict outcomes, and drive innovation.
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

export default AiProcessSection;
