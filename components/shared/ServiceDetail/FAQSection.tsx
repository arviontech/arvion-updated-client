'use client';

import { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

interface Props {
    data: {
        badge: string;
        title: string;
        description?: string;
        questions: FAQ[];
    };
}

export default function FAQSection({ data }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            {data.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {data.title.split('Questions').map((part, index) => {
                            if (index === 0) {
                                return <span key={index}>{part}</span>;
                            }
                            return (
                                <span key={index}>
                                    <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                        Questions
                                    </span>
                                </span>
                            );
                        })}
                    </h2>
                    {data.description && (
                        <p className="text-lg text-gray-600 font-semibold">
                            {data.description}
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    {data.questions.map((faq, index) => (
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
                            <div className="absolute inset-0 rounded-xl -z-10"
                                style={{
                                    background: index % 2 === 0
                                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                }}>
                            </div>

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
}
