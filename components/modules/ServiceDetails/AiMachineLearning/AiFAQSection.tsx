'use client';

import { useState } from 'react';

const AiFAQSection = () => {
    const faqs = [
        {
            question: "What's the difference between AI and Machine Learning?",
            answer: "AI (Artificial Intelligence) is the broader concept of machines performing tasks intelligently. Machine Learning is a subset of AI where systems learn from data without explicit programming. Deep Learning is a further subset using neural networks."
        },
        {
            question: "How much data do I need for a machine learning project?",
            answer: "It depends on the problem complexity. Simple models may work with hundreds of examples, while deep learning typically needs thousands to millions. We can also use transfer learning and data augmentation to work with smaller datasets."
        },
        {
            question: "Can you build a custom chatbot for my business?",
            answer: "Absolutely! We build intelligent chatbots using GPT, LangChain, and RAG (Retrieval-Augmented Generation) that can answer questions from your knowledge base, handle customer support, and integrate with your existing systems."
        },
        {
            question: "What is a RAG application and why do I need it?",
            answer: "RAG (Retrieval-Augmented Generation) combines your proprietary data with large language models to provide accurate, context-aware responses. It's perfect for customer support, internal knowledge bases, and document Q&A without hallucinations."
        },
        {
            question: "How long does it take to build an AI solution?",
            answer: "Timelines vary based on complexity. A simple chatbot or classification model can take 4-8 weeks, while complex systems like recommendation engines or computer vision applications may take 3-6 months including data preparation and testing."
        },
        {
            question: "Will the AI model continue to improve over time?",
            answer: "Yes! We implement continuous learning pipelines that retrain models with new data, monitor performance metrics, and make improvements based on real-world feedback to ensure your AI stays accurate and relevant."
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
                        Everything you need to know about our AI & Machine Learning services.
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

export default AiFAQSection;
