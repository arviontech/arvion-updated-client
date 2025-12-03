const ChallengesSection = () => {
    const challenges = [
        {
            title: "Outdated Websites Limiting Growth",
            description: "Legacy systems that can't keep up with modern market demands or user expectations.",
            solution: "We modernize your stack with scalable, future-proof technologies.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Low Conversion Rates",
            description: "Poor user experience and checkout flows that cause customers to abandon their carts.",
            solution: "We optimize UX/UI and streamline user journeys to boost conversions.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Security Vulnerabilities",
            description: "Weak defenses that leave your business and customer data exposed to threats.",
            solution: "We implement enterprise-grade security protocols and regular audits.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Lack of Scalability",
            description: "Architectures that crash or slow down when traffic spikes or business grows.",
            solution: "We build cloud-native solutions designed to scale effortlessly.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Common Business <span className="text-blue-600">Challenges We Solve</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We identify and eliminate the technical roadblocks standing between you and your business goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="flex gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                                    {challenge.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                <p className="text-gray-600 mb-4">{challenge.description}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {challenge.solution}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;
