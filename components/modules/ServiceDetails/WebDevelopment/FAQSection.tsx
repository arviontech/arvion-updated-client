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
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Common Questions
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Frequently Asked <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-semibold">
                        Got questions? We&apos;ve got answers. Here is what our clients usually ask.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden transition-all duration-300"
                            style={{
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                border: openIndex === index ? '1px solid rgba(6, 182, 212, 0.25)' : '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: openIndex === index
                                    ? '0 10px 40px rgba(6, 182, 212, 0.12), 0 6px 20px rgba(139, 92, 246, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.35)'
                                    : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            {/* Gradient background layer */}
                            <div className="absolute inset-0 rounded-xl -z-10"
                                style={{
                                    background: index % 2 === 0
                                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                }}>
                            </div>

                            {/* White transparent layer */}
                            <div className="absolute inset-0 rounded-xl -z-[9]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                }}>
                            </div>

                            <button
                                className="relative w-full flex items-center justify-between p-6 text-left transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8 relative z-10"
                                    style={{
                                    }}>
                                    {faq.question}
                                </span>
                                <span className={`relative z-10 shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    style={{
                                        background: openIndex === index
                                            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)'
                                            : 'rgba(255, 255, 255, 0.4)',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: openIndex === index
                                            ? '1px solid rgba(6, 182, 212, 0.3)'
                                            : '1px solid rgba(255, 255, 255, 0.6)',
                                    }}>
                                    <svg className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="relative p-6 pt-0 text-gray-800 leading-relaxed font-semibold z-10"
                                    style={{
                                    }}>
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
