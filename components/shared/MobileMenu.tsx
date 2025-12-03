'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    services: Service[];
    navItems: { label: string; href: string }[];
    companyItems: { label: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, services, navItems, companyItems }: MobileMenuProps) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                onClick={onClose}
            />

            {/* Slide-in Menu */}
            <div className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-out">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="p-6 space-y-1 overflow-y-auto max-h-[calc(100vh-88px)]">
                    {/* Services Accordion */}
                    <div>
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                        >
                            <span>Services</span>
                            {isServicesOpen ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>

                        {/* Services Submenu */}
                        {isServicesOpen && (
                            <div className="ml-2 mt-1 space-y-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.title}
                                        href={service.href}
                                        onClick={onClose}
                                        className="flex items-start gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                    >
                                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">{service.title}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{service.description}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Company Accordion */}
                    <div className="border-t border-gray-100 pt-1 mt-1">
                        <button
                            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                        >
                            <span>Company</span>
                            {isCompanyOpen ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>

                        {/* Company Submenu */}
                        {isCompanyOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                                {companyItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={onClose}
                                        className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                        <Link
                            href="#contact"
                            onClick={onClose}
                            className="block w-full text-center px-5 py-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-all"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="#meeting"
                            onClick={onClose}
                            className="block w-full text-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all shadow-lg shadow-blue-600/30"
                        >
                            Book a Meeting
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
