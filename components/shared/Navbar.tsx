'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Globe, Smartphone, Palette, Cloud, TrendingUp, Brain } from 'lucide-react';
import MobileMenu from './MobileMenu';
import GlassmorphismButton from './GlassmorphismButton';
import logo from '../../public/assets/arvion-logo.png';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const services = [
        {
            title: 'Web Development',
            href: '/web-development',
            description: 'Modern, scalable web applications',
            icon: <Globe className="w-4 h-4" />,
        },
        {
            title: 'App Development',
            href: '/app-development',
            description: 'iOS & Android mobile apps',
            icon: <Smartphone className="w-4 h-4" />,
        },
        {
            title: 'UI/UX Design',
            href: '/ui-ux-design',
            description: 'User-centered design solutions',
            icon: <Palette className="w-4 h-4" />,
        },
        {
            title: 'Cloud Solutions',
            href: '/cloud-solutions',
            description: 'Scalable cloud infrastructure',
            icon: <Cloud className="w-4 h-4" />,
        },
        {
            title: 'SEO Optimization',
            href: '/seo-optimization',
            description: 'Boost your search rankings',
            icon: <TrendingUp className="w-4 h-4" />,
        },
        {
            title: 'AI & Machine Learning',
            href: '/ai-machine-learning',
            description: 'Intelligent automation solutions',
            icon: <Brain className="w-4 h-4" />,
        }
    ];

    const navItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Packages', href: '#packages' },
        { label: 'Shop', href: '/shop' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#blog' },
    ];

    const companyItems = [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#blog' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-3 sm:py-4 lg:py-5">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-white/30 rounded-full shadow-sm overflow-hidden animate-shadow-pulse">
                                {/* Gradient border effect */}
                                <span className="absolute inset-0 rounded-full" style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '1px'
                                }} />
                                <Image
                                    src={logo}
                                    alt="Arvion Tech"
                                    width={140}
                                    height={45}
                                    className="h-8 sm:h-9 md:h-10 w-auto object-contain relative z-10"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop: Center Navigation Pill */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                            <div className="relative flex items-center gap-1 px-3 py-2 bg-white/30 rounded-full shadow-sm overflow-visible animate-shadow-pulse">
                                {/* Gradient border effect */}
                                <span className="absolute inset-0 rounded-full pointer-events-none" style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '1px'
                                }} />
                                {/* Services Mega Dropdown */}
                                <div className="relative group">
                                    <button className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-all rounded-full flex items-center gap-1">
                                        Services
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mega Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="p-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        className="relative flex items-start gap-4 p-4 rounded-lg transition-all duration-200 group/item overflow-hidden"
                                                    >
                                                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 bg-[length:200%_100%] animate-gradient opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                        <div className="flex-1 relative z-10">
                                                            <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:text-blue-600 transition-colors">
                                                                {service.title}
                                                            </h3>
                                                            <p className="text-sm text-gray-600">
                                                                {service.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-all rounded-full"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Desktop: CTA Button */}
                        <div className="hidden lg:flex items-center">
                            <GlassmorphismButton href="/contact" size="sm">
                                Contact us
                            </GlassmorphismButton>
                        </div>

                        {/* Mobile: Hamburger Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                services={services}
                navItems={navItems}
                companyItems={companyItems}
            />
        </>
    );
};

export default Navbar;
