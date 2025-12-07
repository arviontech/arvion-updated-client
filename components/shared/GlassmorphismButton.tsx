import Link from 'next/link';

interface GlassmorphismButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

const GlassmorphismButton = ({
    href,
    children,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    className = ''
}: GlassmorphismButtonProps) => {
    const sizeClasses = {
        sm: 'px-6 py-2.5 text-[15px]',
        md: 'px-8 py-3 text-lg',
        lg: 'px-10 py-4 text-xl'
    };

    return (
        <Link
            href={href}
            className={`relative ${sizeClasses[size]} rounded-full font-semibold transition-all shadow-sm hover:shadow-md overflow-hidden group backdrop-blur-xl animate-shadow-pulse inline-flex items-center justify-center gap-3 ${
                variant === 'primary' ? 'text-gray-900' : 'text-gray-900'
            } ${className}`}
        >
            {/* Gradient border effect */}
            <span className="absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px'
            }} />

            {/* Animated gradient background with glassmorphism */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 bg-[length:200%_100%] animate-gradient" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
                {leftIcon}
                {children}
                {rightIcon}
            </span>
        </Link>
    );
};

export default GlassmorphismButton;
