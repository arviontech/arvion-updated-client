'use client';

import { Bell, User, ChevronDown, Settings } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const DashboardHeader = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const pathname = usePathname();

    const getPageTitle = () => {
        if (pathname === '/admin') return 'Dashboard';
        if (pathname === '/admin/projects') return 'Projects';
        if (pathname === '/admin/packages') return 'Packages';
        if (pathname === '/admin/shop') return 'Shop';
        if (pathname === '/admin/blog') return 'Blog';
        if (pathname === '/admin/skills') return 'Skills';
        return 'Dashboard';
    };

    return (
        <header className="sticky top-0 h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-30 shadow-sm">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h2>
                <p className="text-sm text-gray-500 mt-0.5">Welcome back, Admin</p>
            </div>

            <div className="flex items-center gap-3">
                {/* Notifications */}
                <button className="relative p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* Settings */}
                <button className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Settings className="w-5 h-5 text-gray-600" />
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-gray-200"></div>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center ring-2 ring-blue-100">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left hidden lg:block">
                            <p className="text-sm font-semibold text-gray-800">Admin User</p>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {showProfileMenu && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                <p className="text-xs text-gray-500 mt-0.5">admin@arviontech.com</p>
                            </div>
                            <a href="#profile" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <User className="w-4 h-4" />
                                My Profile
                            </a>
                            <a href="#settings" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <Settings className="w-4 h-4" />
                                Settings
                            </a>
                            <hr className="my-2 border-gray-100" />
                            <a href="#logout" className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
