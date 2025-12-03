'use client';

import { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How long does it take to build a custom web application?",
            answer: "The timeline varies based on complexity. A simple website might take 4-6 weeks, while a complex SaaS platform could take 3-6 months. We provide detailed timelines during our discovery phase."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We are experts in modern stacks including React, Next.js, Node.js, Python/Django, and cloud platforms like AWS and Azure. We choose the best tech for your specific needs."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes, we offer comprehensive maintenance packages that include security updates, performance monitoring, and feature enhancements to keep your application running smoothly."
        },
        {
            question: "How do you ensure the security of my web application?",
            answer: "Security is built-in from day one. We follow OWASP best practices, implement secure authentication, conduct regular code reviews, and perform penetration testing."
        },
        {
            question: "Can you help migrate our legacy system to a modern stack?",
            answer: "Absolutely. We specialize in legacy modernization, carefully planning the migration to ensure data integrity and minimal downtime while upgrading your technology."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible engagement models including fixed-price for well-defined projects and time-and-materials for evolving requirements. We'll help you choose the best fit."
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
                        Got questions? We&apos;ve got answers. Here is what our clients usually ask.
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

export default FAQSection;
