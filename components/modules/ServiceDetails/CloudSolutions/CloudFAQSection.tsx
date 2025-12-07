'use client';

import { useState } from 'react';

const CloudFAQSection = () => {
    const faqs = [
        {
            question: "Which cloud platform is best for my business?",
            answer: "The choice depends on your specific needs. AWS offers the broadest service catalog, Azure integrates seamlessly with Microsoft products, and Google Cloud excels in data analytics and machine learning. We help you evaluate and choose the right platform based on your requirements, existing tech stack, and budget."
        },
        {
            question: "How long does cloud migration take?",
            answer: "Migration timelines vary based on complexity. A simple lift-and-shift migration can take 2-4 weeks, while a complete re-architecture may take 3-6 months. We create a phased migration plan to minimize disruption and ensure a smooth transition."
        },
        {
            question: "Will moving to the cloud save me money?",
            answer: "Yes, when done correctly. Cloud migration can reduce infrastructure costs by 30-50% through pay-as-you-go pricing, eliminating hardware maintenance, and auto-scaling. We optimize your cloud spend through right-sizing, reserved instances, and automated resource management."
        },
        {
            question: "How do you ensure cloud security?",
            answer: "We implement multi-layered security including encryption at rest and in transit, IAM policies, VPCs, security groups, DDoS protection, and continuous monitoring. We also ensure compliance with standards like SOC 2, HIPAA, and PCI-DSS based on your industry requirements."
        },
        {
            question: "What happens if there's downtime during migration?",
            answer: "We design migration strategies to minimize or eliminate downtime. For critical systems, we use blue-green deployments, canary releases, or parallel running to ensure zero downtime. We also schedule migrations during low-traffic periods and have rollback plans ready."
        },
        {
            question: "Do you provide ongoing cloud management?",
            answer: "Yes, we offer managed cloud services including 24/7 monitoring, performance optimization, security updates, cost management, and incident response. We act as your extended cloud operations team to ensure your infrastructure runs smoothly."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                {/* Decorative frosted glass shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}>
                </div>
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
                        Everything you need to know about our cloud solutions and services.
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
                                <span className="text-lg font-semibold text-gray-900 pr-8 relative z-10">
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
                                <div className="relative p-6 pt-0 text-gray-800 leading-relaxed font-semibold z-10">
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

export default CloudFAQSection;
