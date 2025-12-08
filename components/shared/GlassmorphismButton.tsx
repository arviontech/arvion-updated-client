import Link from 'next/link';

interface BaseProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

interface LinkButtonProps extends BaseProps {
    as?: 'link';
    href: string;
    target?: string;
    rel?: string;
    onClick?: never;
}

interface ButtonProps extends BaseProps {
    as: 'button';
    href?: never;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

type GlassmorphismButtonProps = LinkButtonProps | ButtonProps;

const GlassmorphismButton = ({
    children,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    className = '',
    as = 'link',
    ...props
}: GlassmorphismButtonProps) => {
    const sizeClasses = {
        sm: 'px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 text-xs sm:text-sm md:text-[15px]',
        md: 'px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg',
        lg: 'px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-base sm:text-lg md:text-xl'
    };

    const baseClasses = `relative ${sizeClasses[size]} rounded-full font-semibold transition-all shadow-sm hover:shadow-md overflow-hidden group backdrop-blur-xl animate-shadow-pulse inline-flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 ${
        variant === 'primary' ? 'text-gray-900' : 'text-gray-900'
    } ${className}`;

    const content = (
        <>
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
        </>
    );

    if (as === 'button') {
        const { onClick, type = 'button' } = props as ButtonProps;
        return (
            <button
                type={type}
                onClick={onClick}
                className={baseClasses}
            >
                {content}
            </button>
        );
    }

    const { href, target, rel } = props as LinkButtonProps;
    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className={baseClasses}
        >
            {content}
        </Link>
    );
};

export default GlassmorphismButton;
