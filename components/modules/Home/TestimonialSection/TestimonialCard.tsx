'use client';

import Image from 'next/image';
import { Quote, User } from 'lucide-react';
import { Testimonial } from '@/services/testimonials/TestimonialService';

interface TestimonialCardProps {
    testimonial: Testimonial;
    index?: number;
}

const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => {
    return (
        <div
            className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
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
            {/* Gradient background layer */}
            <div className="absolute inset-0 rounded-2xl -z-10"
                style={{
                    background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                }}
            />

            {/* White transparent layer */}
            <div className="absolute inset-0 rounded-2xl -z-[9]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />

            {/* Quote Icon */}
            <div className="mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                    }}>
                    <Quote className="w-6 h-6 text-cyan-600 fill-current" />
                </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-800 leading-relaxed italic mb-6 relative z-10 font-semibold"
                style={{
                    textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                }}>
                "{testimonial.review}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t relative z-10"
                style={{
                    borderColor: 'rgba(6, 182, 212, 0.1)'
                }}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0"
                    style={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                    }}>
                    {testimonial.image ? (
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-cyan-600">
                            <User className="w-6 h-6" />
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors"
                        style={{
                            textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                        }}>
                        {testimonial.name}
                    </h4>
                    <p className="text-sm font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                        {testimonial.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
