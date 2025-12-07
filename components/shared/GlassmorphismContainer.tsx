interface GlassmorphismContainerProps {
    children: React.ReactNode;
    className?: string;
}

const GlassmorphismContainer = ({ children, className = '' }: GlassmorphismContainerProps) => {
    return (
        <div className={`relative inline-flex bg-white/10 rounded-full backdrop-blur-xl shadow-sm overflow-hidden animate-shadow-pulse ${className}`}>
            {/* Gradient border effect */}
            <span className="absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px'
            }} />

            {children}
        </div>
    );
};

export default GlassmorphismContainer;
