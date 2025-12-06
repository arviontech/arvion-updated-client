'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FolderKanban,
    Package,
    ShoppingBag,
    FileText,
    Code,
    ChevronLeft,
    ChevronRight,
    Users,
    Quote
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        {
            label: 'Dashboard',
            href: '/admin',
            icon: LayoutDashboard,
        },
        {
            label: 'Teams',
            href: '/admin/teams',
            icon: Users,
        },
        {
            label: 'Skills',
            href: '/admin/skills',
            icon: Code,
        },
        {
            label: 'Projects',
            href: '/admin/projects',
            icon: FolderKanban,
        },
        {
            label: 'Packages',
            href: '/admin/packages',
            icon: Package,
        },
        {
            label: 'Shop',
            href: '/admin/shop',
            icon: ShoppingBag,
        },
        {
            label: 'Blog',
            href: '/admin/blog',
            icon: FileText,
        },
        {
            label: 'Testimonials',
            href: '/admin/testimonials',
            icon: Quote,
        },
    ];

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40 ${isCollapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Logo Section */}
            <Link href="/" className="h-20 flex items-center justify-center border-b border-gray-200 px-4 hover:bg-gray-50 transition-colors">
                {!isCollapsed ? (
                    <Image
                        src="/assets/arvion-logo.png"
                        alt="Arvion Tech"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        A
                    </div>
                )}
            </Link>

            {/* Navigation Menu */}
            <nav className="flex-1 px-3 py-6 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                        >
                            <Icon
                                className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                                    }`}
                            />
                            {!isCollapsed && (
                                <span className="font-medium">{item.label}</span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Collapse Toggle Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-24 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-md"
            >
                {isCollapsed ? (
                    <ChevronRight className="w-3 h-3" />
                ) : (
                    <ChevronLeft className="w-3 h-3" />
                )}
            </button>
        </aside>
    );
};

export default Sidebar;
