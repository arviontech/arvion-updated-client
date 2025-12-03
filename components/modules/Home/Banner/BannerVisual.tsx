import Image from 'next/image';

const BannerVisual = () => {
    // Tech icons configuration with orbital positions
    const techIcons = [
        // Inner orbit - faster rotation
        { src: '/assets/tech-icon/atom.png', size: 50, orbit: 'inner', delay: 0, blur: false },
        { src: '/assets/tech-icon/typescript.png', size: 45, orbit: 'inner', delay: 2, blur: false },
        { src: '/assets/tech-icon/nextjs1.png', size: 48, orbit: 'inner', delay: 4, blur: false },
        { src: '/assets/tech-icon/nodejs1.png', size: 46, orbit: 'inner', delay: 6, blur: false },

        // Middle orbit - medium rotation
        { src: '/assets/tech-icon/html (1).png', size: 40, orbit: 'middle', delay: 1, blur: false },
        { src: '/assets/tech-icon/css-3 (1).png', size: 40, orbit: 'middle', delay: 3, blur: false },
        { src: '/assets/tech-icon/mongodb1.png', size: 42, orbit: 'middle', delay: 5, blur: false },
        { src: '/assets/tech-icon/docker1.png', size: 44, orbit: 'middle', delay: 7, blur: false },

        // Outer orbit - slower rotation with blur
        { src: '/assets/tech-icon/aws1.png', size: 35, orbit: 'outer', delay: 0.5, blur: true },
        { src: '/assets/tech-icon/Postgresql1.png', size: 38, orbit: 'outer', delay: 2.5, blur: true },
        { src: '/assets/tech-icon/Redis1.png', size: 36, orbit: 'outer', delay: 4.5, blur: true },
        { src: '/assets/tech-icon/tailwind1.jpg', size: 37, orbit: 'outer', delay: 6.5, blur: true },
    ];

    return (
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Floating tech elements */}
            <div className="relative w-full h-full">

                {/* Main central element - 3D Animated Shape with Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 z-10">
                    <div className="relative w-full h-full animate-float">
                        {/* Central gradient orb background */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl" />

                        {/* Rotating rings with tech orbit paths */}
                        <div className="absolute inset-8 border-2 border-dashed border-blue-500/20 rounded-full animate-spin-slow" />
                        <div className="absolute inset-16 border-2 border-dotted border-blue-400/15 rounded-full animate-spin-reverse" />

                        {/* Glowing gradient ring around the cube */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56">
                            <div className="relative w-full h-full animate-spin-slow">
                                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-linear-to-r from-blue-400 via-purple-500 to-blue-600 opacity-60 blur-sm"
                                    style={{
                                        background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.6) 0%, rgba(168, 85, 247, 0.6) 50%, rgba(59, 130, 246, 0.6) 100%)',
                                        maskImage: 'linear-gradient(transparent 40%, black 45%, black 55%, transparent 60%)',
                                        WebkitMaskImage: 'linear-gradient(transparent 40%, black 45%, black 55%, transparent 60%)'
                                    }}
                                />
                            </div>
                        </div>

                        {/* 3D Rotating Crystal Clear Cube with Gradient Glowing Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative w-32 h-32 lg:w-36 lg:h-36" style={{ perspective: '800px' }}>
                                {/* Cube container that rotates - text is INSIDE and rotates WITH it */}
                                <div className="w-full h-full" style={{
                                    transformStyle: 'preserve-3d',
                                    animation: 'rotate3d 8s linear infinite'
                                }}>
                                    {/* Crystal Clear Cube faces - Transparent like glass */}
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/40"
                                        style={{ transform: 'translateZ(64px)' }} />
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/30"
                                        style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/25"
                                        style={{ transform: 'rotateY(180deg) translateZ(64px)' }} />
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/30"
                                        style={{ transform: 'rotateY(-90deg) translateZ(64px)' }} />
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/35"
                                        style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
                                    <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-blue-400/25"
                                        style={{ transform: 'rotateX(-90deg) translateZ(64px)' }} />

                                    {/* Glowing "Arvion Tech" Text - Centered in 3D space, rotates WITH cube */}
                                    <div className="absolute inset-0 flex items-center justify-center"
                                        style={{
                                            transform: 'translateZ(0px)',
                                            transformStyle: 'preserve-3d'
                                        }}>
                                        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                                            {/* Blue to cyan glow layers */}
                                            <div className="absolute -inset-6 blur-2xl bg-blue-500/50 rounded-full animate-pulse-slow" />
                                            <div className="absolute -inset-4 blur-xl bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                                            <div className="absolute -inset-2 blur-lg bg-blue-300/40 rounded-full" />

                                            {/* Text with gradient glowing effect - blue to cyan */}
                                            <div className="relative text-center px-3" style={{ transformStyle: 'preserve-3d' }}>
                                                <div className="text-lg lg:text-xl font-bold whitespace-nowrap"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.9)) drop-shadow(0 0 40px rgba(6, 182, 212, 0.6)) brightness(1.5)',
                                                        animation: 'glow-pulse 2s ease-in-out infinite'
                                                    }}>
                                                    Arvion
                                                </div>
                                                <div className="text-base lg:text-lg font-bold whitespace-nowrap mt-1"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        filter: 'drop-shadow(0 0 15px rgba(37, 99, 235, 0.8)) drop-shadow(0 0 30px rgba(8, 145, 178, 0.5)) brightness(1.5)',
                                                        animation: 'glow-pulse 2s ease-in-out infinite',
                                                        animationDelay: '0.3s'
                                                    }}>
                                                    Tech
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orbiting Tech Icons - Inner Orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] animate-orbit-slow">
                    {techIcons.filter(icon => icon.orbit === 'inner').map((icon, index) => (
                        <div
                            key={`inner-${index}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotate(${index * (360 / 4)}deg) translateX(180px) rotate(-${index * (360 / 4)}deg)`,
                                animationDelay: `${icon.delay}s`,
                            }}
                        >
                            <div className="relative group animate-float-icon">
                                {/* Icon glow effect */}
                                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all duration-300" />

                                {/* Icon container with glassmorphism */}
                                <div className="relative bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/50 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                                    <Image
                                        src={icon.src}
                                        alt="Tech icon"
                                        width={icon.size}
                                        height={icon.size}
                                        className="rounded-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Orbiting Tech Icons - Middle Orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] lg:w-[750px] lg:h-[750px] animate-orbit-medium">
                    {techIcons.filter(icon => icon.orbit === 'middle').map((icon, index) => (
                        <div
                            key={`middle-${index}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotate(${index * (360 / 4)}deg) translateX(260px) rotate(-${index * (360 / 4)}deg)`,
                                animationDelay: `${icon.delay}s`,
                            }}
                        >
                            <div className="relative group animate-float-icon-delayed">
                                {/* Icon glow effect */}
                                <div className="absolute inset-0 bg-purple-400/15 rounded-full blur-lg group-hover:bg-purple-500/30 transition-all duration-300" />

                                {/* Icon container */}
                                <div className="relative bg-white/85 backdrop-blur-sm rounded-full p-2 shadow-md border border-white/40 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={icon.src}
                                        alt="Tech icon"
                                        width={icon.size}
                                        height={icon.size}
                                        className="rounded-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Orbiting Tech Icons - Outer Orbit (with blur) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[900px] lg:h-[900px] animate-orbit-reverse opacity-60">
                    {techIcons.filter(icon => icon.orbit === 'outer').map((icon, index) => (
                        <div
                            key={`outer-${index}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotate(${index * (360 / 4)}deg) translateX(340px) rotate(-${index * (360 / 4)}deg)`,
                                animationDelay: `${icon.delay}s`,
                            }}
                        >
                            <div className="relative group animate-float-slow">
                                {/* Icon container with blur */}
                                <div className="relative bg-white/70 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-white/30 group-hover:scale-105 transition-all duration-300">
                                    <Image
                                        src={icon.src}
                                        alt="Tech icon"
                                        width={icon.size}
                                        height={icon.size}
                                        className="rounded-full object-contain opacity-80"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating UI Cards - Enhanced */}
                <div className="absolute top-12 left-8 w-48 h-32 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/50 p-4 animate-float-delayed hover:shadow-2xl transition-shadow duration-300">
                    <div className="space-y-2">
                        <div className="h-3 bg-linear-to-r from-blue-500 to-blue-600 rounded w-3/4" />
                        <div className="h-2 bg-gray-200 rounded w-full" />
                        <div className="h-2 bg-gray-200 rounded w-5/6" />
                        <div className="flex gap-2 mt-3">
                            <div className="h-6 w-6 bg-blue-100 rounded shadow-sm" />
                            <div className="h-6 w-6 bg-blue-100 rounded shadow-sm" />
                            <div className="h-6 w-6 bg-blue-100 rounded shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* Code snippet card - Enhanced */}
                <div className="absolute md:bottom-16 bottom-10  right-8 md:w-56 md:h-36 w-48 h-28 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 p-4 animate-float-slow hover:shadow-blue-500/20 transition-shadow duration-300">
                    <div className="space-y-2 font-mono text-xs">
                        <div className="flex gap-2">
                            <span className="text-purple-400">const</span>
                            <span className="text-blue-300">tech</span>
                            <span className="text-gray-400">=</span>
                        </div>
                        <div className="pl-4 text-green-400">&quot;innovation&quot;</div>
                        <div className="h-2 bg-gray-700 rounded w-3/4 mt-3" />
                        <div className="h-2 bg-gray-700 rounded w-2/3" />
                    </div>
                </div>

                {/* Floating geometric shapes - Enhanced */}
                <div className="absolute top-24 right-12 w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg animate-float rotate-12 opacity-80" />
                <div className="absolute bottom-32 left-16 w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-full shadow-lg animate-float-delayed opacity-70" />

                {/* Glowing dots - Connection points */}
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-300" />
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-500" />
            </div>
        </div>
    );
};

export default BannerVisual;
