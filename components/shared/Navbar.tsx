'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from '../../public/assets/arvion-logo.png';
import Container from './Container';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const services = [
        {
            title: 'Web Development',
            href: '/web-development',
            description: 'Modern, scalable web applications',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: 'App Development',
            href: '/app-development',
            description: 'iOS & Android mobile apps',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'UI/UX Design',
            href: '/ui-ux-design',
            description: 'User-centered design solutions',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: 'Cloud Solutions',
            href: '/cloud-solutions',
            description: 'Scalable cloud infrastructure',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        },
        {
            title: 'SEO Optimization',
            href: '/seo-optimization',
            description: 'Boost your search rankings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'AI & Machine Learning',
            href: '/ai-machine-learning',
            description: 'Intelligent automation solutions',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        }
    ];

    const navItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Packages', href: '#packages' },
        { label: 'Shop', href: '/shop' },
    ];

    const companyItems = [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#blog' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
                <Container>
                    <div className="flex items-center justify-between h-20">

                        {/* Mobile: Hamburger Menu (Left) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Logo (Center on mobile, Left on desktop) */}
                        <Link href="/" >
                            <Image
                                src={logo}
                                alt="Arvion Tech"
                                width={120}
                                height={40}
                                className="h-12 w-auto object-contain md:-ml-4"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation Items */}
                        <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
                            {/* Services Mega Dropdown */}
                            <div className="relative group">
                                <button className="text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors flex items-center gap-1">
                                    Services
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Mega Dropdown Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.title}
                                                    href={service.href}
                                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-200 group/item"
                                                >
                                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                        {service.icon}
                                                    </div>
                                                    <div className="flex-1">
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
                                    className="text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Company Dropdown */}
                            <div className="relative group">
                                <button className="text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors flex items-center gap-1">
                                    Company
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {companyItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-5 py-2.5 text-[#703eff] border-2 border-[#703eff] rounded-full hover:bg-gradient-to-r hover:from-[#703eff] hover:to-[#0254b9] hover:text-white hover:border-transparent font-medium transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Get In Touch
                            </Link>
                            <Link
                                href="#meeting"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] font-medium transition-all shadow-lg shadow-[#0254b9]/30"
                            >
                                <Calendar className="w-4 h-4" />
                                Book a Meeting
                            </Link>
                        </div>

                        {/* Mobile: Action Icons (Right) */}
                        <div className="lg:hidden flex items-center gap-2">
                            <Link
                                href="/contact"
                                className="p-2.5 rounded-full border-2 border-[#703eff] text-[#703eff] hover:bg-gradient-to-r hover:from-[#703eff] hover:to-[#0254b9] hover:text-white hover:border-transparent transition-colors"
                                aria-label="Get in touch"
                            >
                                <Phone className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#meeting"
                                className="p-2.5 rounded-full bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white hover:from-[#5f2de0] hover:to-[#0148a3] transition-colors shadow-lg shadow-[#0254b9]/30"
                                aria-label="Book a meeting"
                            >
                                <Calendar className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </Container>
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
