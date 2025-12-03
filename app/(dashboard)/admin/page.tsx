'use client';

import { useState, useEffect } from 'react';
import {
    Plus,
    Users,
    FileText,
    Settings,
    DollarSign,
    TrendingUp,
    Users as UsersIcon,
    FolderKanban,
    ArrowUpRight,
    ArrowDownRight,
    Briefcase,
    Wrench
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import { statsService, DashboardStats } from '@/services/stats/StatsService';

const DashboardAdminPage = () => {
    const [stats, setStats] = useState<DashboardStats>({
        totalProjects: 0,
        totalUsers: 0,
        totalSkills: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const data = await statsService.getDashboardStats();
            setStats(data);
        } catch (error: any) {
            console.error('Failed to fetch stats:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const statsCards = [
        {
            label: 'Total Revenue',
            value: '$0', // Placeholder
            change: '+0%',
            trend: 'up',
            icon: DollarSign,
            color: 'from-blue-500 to-blue-600',
            bg: 'bg-blue-50',
            textColor: 'text-blue-600'
        },
        {
            label: 'Active Users',
            value: stats.totalUsers.toLocaleString(),
            change: '+12.3%',
            trend: 'up',
            icon: Users,
            color: 'from-indigo-500 to-indigo-600',
            bg: 'bg-indigo-50',
            textColor: 'text-indigo-600'
        },
        {
            label: 'Total Projects',
            value: stats.totalProjects.toLocaleString(),
            change: '+8.1%',
            trend: 'up',
            icon: Briefcase,
            color: 'from-violet-500 to-violet-600',
            bg: 'bg-violet-50',
            textColor: 'text-violet-600'
        },
        {
            label: 'Total Skills',
            value: stats.totalSkills.toLocaleString(),
            change: '+5.2%',
            trend: 'up',
            icon: Wrench,
            color: 'from-emerald-500 to-emerald-600',
            bg: 'bg-emerald-50',
            textColor: 'text-emerald-600'
        }
    ];

    const quickActions = [
        {
            label: 'Add Project',
            icon: Plus,
            href: '#add-project',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            label: 'Manage Users',
            icon: Users,
            href: '#manage-users',
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            label: 'View Reports',
            icon: FileText,
            href: '#reports',
            gradient: 'from-indigo-500 to-indigo-600'
        },
        {
            label: 'Settings',
            icon: Settings,
            href: '#settings',
            gradient: 'from-gray-500 to-gray-600'
        },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your projects today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                                    {isLoading ? '...' : stat.value}
                                </h3>
                            </div>
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg shadow-blue-500/20`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className={`flex items-center text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                } bg-green-50 px-2 py-1 rounded-full`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {stat.change}
                            </span>
                            <span className="text-xs text-gray-400">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts & Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart - Takes 2 columns */}
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>

                {/* Quick Actions Panel */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        {quickActions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                        {action.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Activity Feed - Full Width */}
            <div>
                <ActivityFeed />
            </div>

            {/* Project Status Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Status Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-900">In Progress</span>
                            <span className="text-xs text-blue-700 bg-blue-200 px-2 py-1 rounded">48%</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-900">75</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-green-900">Completed</span>
                            <span className="text-xs text-green-700 bg-green-200 px-2 py-1 rounded">35%</span>
                        </div>
                        <p className="text-2xl font-bold text-green-900">55</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-amber-900">Pending</span>
                            <span className="text-xs text-amber-700 bg-amber-200 px-2 py-1 rounded">12%</span>
                        </div>
                        <p className="text-2xl font-bold text-amber-900">19</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900">On Hold</span>
                            <span className="text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded">5%</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdminPage;