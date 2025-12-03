const PlatformsSection = () => {
    const platforms = [
        {
            title: "Native iOS Development",
            description: "We craft premium iOS applications using Swift and SwiftUI that deliver exceptional performance and leverage the full power of the Apple ecosystem.",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.06.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.08-1.53z" />
                </svg>
            ),
            features: ["Swift & SwiftUI", "iOS SDK", "App Store Optimization"]
        },
        {
            title: "Native Android Development",
            description: "Our Android experts build robust, scalable apps using Kotlin and Jetpack Compose that run smoothly across the fragmented Android device landscape.",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.0745 13.8533 7.5 12 7.5s-3.5902.5745-5.1364 1.4501L4.8413 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
            ),
            features: ["Kotlin & Java", "Jetpack Compose", "Material Design"]
        },
        {
            title: "Cross-Platform Solutions",
            description: "We develop versatile apps using React Native and Flutter that offer near-native performance while reducing development time and cost.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            features: ["React Native", "Flutter", "Single Codebase"]
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                        Comprehensive <span className="text-blue-600">Mobile Solutions</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we have the expertise to deliver.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {platform.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {platform.description}
                            </p>
                            <ul className="space-y-3">
                                {platform.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformsSection;
