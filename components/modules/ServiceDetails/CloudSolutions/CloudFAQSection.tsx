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
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about our cloud solutions and services.
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

export default CloudFAQSection;
