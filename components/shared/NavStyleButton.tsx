import Link from 'next/link';

interface NavStyleButtonProps {
    href: string;
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    noHoverBg?: boolean;
}

const NavStyleButton = ({
    href,
    children,
    leftIcon,
    rightIcon,
    size = 'md',
    className = '',
    noHoverBg = false
}: NavStyleButtonProps) => {
    const sizeClasses = {
        sm: 'px-5 py-2 text-[15px]',
        md: 'px-8 py-3 text-lg',
        lg: 'px-10 py-4 text-xl'
    };

    return (
        <Link
            href={href}
            className={`relative ${sizeClasses[size]} text-gray-700 hover:text-blue-600 font-semibold transition-all rounded-full overflow-hidden group inline-flex items-center justify-center gap-3 ${className}`}
        >
            {/* Animated gradient background on hover */}
            {!noHoverBg && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            )}

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
                {leftIcon}
                {children}
                {rightIcon}
            </span>
        </Link>
    );
};

export default NavStyleButton;
