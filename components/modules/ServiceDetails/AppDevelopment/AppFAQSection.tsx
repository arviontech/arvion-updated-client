'use client';

import { useState } from 'react';

const AppFAQSection = () => {
    const faqs = [
        {
            question: "Do you build apps for both iOS and Android?",
            answer: "Yes, we specialize in both native development (Swift for iOS, Kotlin for Android) and cross-platform solutions (React Native, Flutter) to reach users on all devices."
        },
        {
            question: "How long does it take to develop a mobile app?",
            answer: "A simple app can take 3-4 months, while more complex applications with custom backends and advanced features may take 6-9 months or more. We provide a detailed timeline after the discovery phase."
        },
        {
            question: "Will you help upload the app to the App Store and Play Store?",
            answer: "Absolutely. We handle the entire submission process, including preparing assets, descriptions, and ensuring compliance with Apple and Google guidelines for a smooth approval."
        },
        {
            question: "Do you provide maintenance after the app is launched?",
            answer: "Yes, we offer ongoing maintenance and support packages to ensure your app stays compatible with new OS versions, remains secure, and continues to perform optimally."
        },
        {
            question: "Who owns the code after the project is complete?",
            answer: "You do. Once the project is completed and paid for, you have full ownership of the source code and all intellectual property rights."
        },
        {
            question: "Can you update an existing mobile app?",
            answer: "Yes, we can take over existing codebases to fix bugs, improve performance, add new features, or completely refactor the app with modern technologies."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about our mobile app development services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-200"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-600 border-blue-600 text-white' : 'text-gray-400'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppFAQSection;
