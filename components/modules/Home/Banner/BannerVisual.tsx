'use client';

import Image from 'next/image';
import logo from '../../../../public/assets/arvion-logo.png';
import { useState } from 'react';

const BannerVisual = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // -15 to 15 degrees
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30; // -15 to 15 degrees
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div
            className="relative h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Floating tech elements */}
            <div className="relative w-full h-full">

                {/* Circular rings behind the cube */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* Ring 1 - Innermost */}
                    <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] rounded-full border-2 border-cyan-400/20 animate-ring-zoom"></div>

                    {/* Ring 2 - Middle */}
                    <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] rounded-full border-2 border-violet-400/15 animate-ring-zoom-delay-1"></div>

                    {/* Ring 3 - Outermost */}
                    <div className="absolute top-1/2 left-1/2 w-[48rem] h-[48rem] rounded-full border-2 border-cyan-400/10 animate-ring-zoom-delay-2"></div>
                </div>

                {/* Main central element - 3D Animated Shape with Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative animate-cube-pop">
                        {/* 3D Rotating Crystal Clear Cube */}
                        <div
                            className="relative w-48 h-48 lg:w-64 lg:h-64"
                            style={{
                                perspective: '1200px',
                                transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {/* Cube container that rotates */}
                            <div className="w-full h-full" style={{
                                transformStyle: 'preserve-3d',
                                animation: 'rotate3d 12s ease-in-out infinite',
                                willChange: 'transform',
                                backfaceVisibility: 'visible'
                            }}>
                                    {/* Crystal Clear Cube faces - All 6 faces */}
                                    {/* Front */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border-2 border-white/30 flex items-center justify-center overflow-hidden"
                                        style={{
                                            transform: 'translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15), 0 20px 80px rgba(139, 92, 246, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}>
                                        {/* White background layer */}
                                        <div className="absolute inset-0 bg-white/80 -z-10"></div>

                                        {/* Gradient layer */}
                                        <div className="absolute inset-0 -z-[9]" style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)'
                                        }}></div>

                                        {/* Decorative corner accents */}
                                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/40 z-0"></div>
                                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-violet-400/40 z-0"></div>
                                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-violet-400/40 z-0"></div>
                                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40 z-0"></div>

                                        {/* Grid pattern background */}
                                        <div className="absolute inset-0 opacity-10 z-0" style={{
                                            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}></div>

                                        <Image
                                            src={logo}
                                            alt="Arvion Tech"
                                            width={120}
                                            height={40}
                                            className="object-contain relative z-20"
                                        />
                                    </div>
                                    {/* Right */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center overflow-hidden p-6"
                                        style={{
                                            transform: 'rotateY(90deg) translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.15), 0 20px 80px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}>
                                        {/* White background layer */}
                                        <div className="absolute inset-0 bg-white/80 -z-10"></div>

                                        {/* Gradient layer */}
                                        <div className="absolute inset-0 -z-[9]" style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(6, 182, 212, 0.08) 100%)'
                                        }}></div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-violet-400/30 z-0"></div>
                                        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-2 border-cyan-400/20 z-0"></div>

                                        {/* Icon */}
                                        <div className="mb-3 relative z-20">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center border border-white/20">
                                                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-600 text-center relative z-20">
                                            SaaS Development
                                        </span>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center overflow-hidden p-6"
                                        style={{
                                            transform: 'rotateY(180deg) translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15), 0 20px 80px rgba(139, 92, 246, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}>
                                        {/* White background layer */}
                                        <div className="absolute inset-0 bg-white/80 -z-10"></div>

                                        {/* Gradient layer */}
                                        <div className="absolute inset-0 -z-[9]" style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)'
                                        }}></div>

                                        {/* Icon */}
                                        <div className="mb-3 relative z-20">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-white/20">
                                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                        </div>

                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600 text-center relative z-20">
                                            Web Solutions
                                        </span>
                                    </div>
                                    {/* Left */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center overflow-hidden p-6"
                                        style={{
                                            transform: 'rotateY(-90deg) translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.15), 0 20px 80px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}>
                                        {/* White background layer */}
                                        <div className="absolute inset-0 bg-white/80 -z-10"></div>

                                        {/* Gradient layer */}
                                        <div className="absolute inset-0 -z-[9]" style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(6, 182, 212, 0.08) 100%)'
                                        }}></div>

                                        {/* Icon */}
                                        <div className="mb-3 relative z-20">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center border border-white/20">
                                                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-600 text-center relative z-20">
                                            Digital Innovation
                                        </span>
                                    </div>
                                    {/* Top */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border border-gray-300/40"
                                        style={{
                                            transform: 'rotateX(90deg) translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15), 0 20px 80px rgba(139, 92, 246, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            background: 'rgba(255, 255, 255, 0.8)'
                                        }} />
                                    {/* Bottom */}
                                    <div className="absolute w-full h-full backdrop-blur-sm border border-gray-300/40"
                                        style={{
                                            transform: 'rotateX(-90deg) translateZ(128px)',
                                            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.15), 0 20px 80px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            background: 'rgba(255, 255, 255, 0.8)'
                                        }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerVisual;
