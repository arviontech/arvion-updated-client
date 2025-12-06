'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const services = [
        { label: 'Web Development', href: '/web-development' },
        { label: 'App Development', href: '/app-development' },
        { label: 'UI/UX Design', href: '/ui-ux-design' },
        { label: 'Cloud Solutions', href: '/cloud-solutions' },
        { label: 'SEO Optimization', href: '/seo-optimization' },
        { label: 'AI & Machine Learning', href: '/ai-machine-learning' },
    ];

    const company = [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Careers', href: '#careers' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact Us', href: '#contact' },
    ];

    const resources = [
        { label: 'Documentation', href: '#docs' },
        { label: 'Help Center', href: '#help' },
        { label: 'Community', href: '#community' },
        { label: 'Webinars', href: '#webinars' },
        { label: 'API Reference', href: '#api' },
        { label: 'Status', href: '#status' },
    ];

    const legal = [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'GDPR Compliance', href: '#gdpr' },
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <Container className="relative">
                {/* Newsletter Section */}
                <div className="py-12 border-b border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                Stay Updated
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Subscribe to our newsletter for the latest tech insights, updates, and exclusive offers.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="relative">
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2 group"
                                >
                                    <span className="hidden sm:inline">Subscribe</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            {isSubscribed && (
                                <p className="absolute -bottom-8 left-0 text-sm text-green-400 animate-fade-in">
                                    ✓ Successfully subscribed!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info - Spans 2 columns on lg */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/arvion-logo.png"
                                alt="Arvion Tech"
                                width={150}
                                height={50}
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering businesses with cutting-edge technology solutions.
                            We transform ideas into exceptional digital experiences.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="mailto:info@arviontech.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                                <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm">info@arviontech.com</span>
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                                <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-sm">+1 (234) 567-890</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <div className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-sm leading-relaxed">
                                    123 Tech Street, Silicon Valley<br />CA 94025, United States
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
                        <ul className="space-y-3">
                            {services.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
                        <ul className="space-y-3">
                            {resources.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {legal.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-700/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Arvion Tech</span>. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} group`}
                                    >
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                        >
                            <span>Back to top</span>
                            <div className="w-8 h-8 bg-gray-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                                <ArrowRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Trust Badges / Certifications (Optional) */}
                <div className="pb-8 pt-4 border-t border-gray-700/30">
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>ISO 27001 Certified</span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>SOC 2 Type II</span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>GDPR Compliant</span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>PCI DSS Compliant</span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
