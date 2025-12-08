'use client';

interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

interface Props {
    data: {
        badge: string;
        title: string;
        description?: string;
        steps: ProcessStep[];
    };
}

export default function ProcessSection({ data }: Props) {
    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            {data.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {data.title.split(' ').map((word, index) => {
                            if (word === 'Process' || word === 'Workflow' || word === 'Steps') {
                                return (
                                    <span key={index} className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                        {word}{' '}
                                    </span>
                                );
                            }
                            return word + ' ';
                        })}
                    </h2>
                    {data.description && (
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
                            {data.description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {data.steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            style={{
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.25)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(6, 182, 212, 0.12), 0 6px 20px rgba(139, 92, 246, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.35)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)';
                            }}
                        >
                            <div className="absolute inset-0 rounded-2xl -z-10"
                                style={{
                                    background: index % 2 === 0
                                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                }}>
                            </div>

                            <div className="absolute inset-0 rounded-2xl -z-[9]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                }}>
                            </div>

                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                                }} />

                            <span className="relative text-4xl font-bold mb-6 block bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                                {String(step.step).padStart(2, '0')}
                            </span>
                            <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="relative text-gray-800 leading-relaxed font-semibold">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 text-center"
                    style={{
                        backdropFilter: 'blur(15px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                    }}>
                    <div className="absolute inset-0 rounded-3xl -z-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
                        }}>
                    </div>

                    <div className="absolute inset-0 rounded-3xl -z-[9]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        }}>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">Digital Presence?</span>
                        </h2>
                        <p className="text-gray-800 text-lg mb-8 font-semibold">
                            Let&apos;s discuss your project and how we can help you achieve your business goals with our expert services.
                        </p>
                        <button className="px-8 py-4 font-bold rounded-full transition-all text-white"
                            style={{
                                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                                boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.4)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.3)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                            Book a Meeting
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
