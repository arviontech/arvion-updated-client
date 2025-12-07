'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    features: string[];
    index?: number;
}

const ServiceCard = ({
    id,
    title,
    slug,
    description,
    image,
    features,
    index = 0
}: ServiceCardProps) => {
    return (
        <Link
            href={`/${slug}`}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            style={{
                animationDelay: `${index * 100}ms`,
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
            <div className="absolute inset-0 -z-10"
                style={{
                    background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                }}
            />

            {/* White transparent layer */}
            <div className="absolute inset-0 -z-[9]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />

            {/* Image Container */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 relative z-10 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors"
                    style={{
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 mb-4 line-clamp-3 font-semibold"
                    style={{
                        textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                    }}>
                    {description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {features.slice(0, 3).map((feature, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-lg font-bold text-gray-700 h-fit"
                            style={{
                                background: 'rgba(255, 255, 255, 0.4)',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.6)',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1" />

                {/* Learn More Link */}
                <div className="flex justify-end mt-4">
                    <div className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                        Learn More
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
