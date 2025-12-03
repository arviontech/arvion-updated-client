'use client';

import { CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';

const ActivityFeed = () => {
    const activities = [
        {
            id: 1,
            type: 'success',
            icon: CheckCircle,
            title: 'New project launched',
            description: 'E-commerce platform for TechCorp',
            time: '2 hours ago',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            id: 2,
            type: 'info',
            icon: Clock,
            title: 'Meeting scheduled',
            description: 'Client review meeting with Startup Inc',
            time: '4 hours ago',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            id: 3,
            type: 'warning',
            icon: AlertCircle,
            title: 'Payment pending',
            description: 'Invoice #1234 awaiting approval',
            time: '6 hours ago',
            color: 'text-amber-600',
            bgColor: 'bg-amber-50'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'New user registered',
            description: 'john.doe@example.com joined the platform',
            time: '8 hours ago',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            id: 5,
            type: 'info',
            icon: Clock,
            title: 'Project milestone reached',
            description: 'Mobile app development 75% complete',
            time: '1 day ago',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
    ];

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                        <div
                            key={activity.id}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <div className={`w-10 h-10 rounded-lg ${activity.bgColor} flex items-center justify-center shrink-0`}>
                                <Icon className={`w-5 h-5 ${activity.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                                    {activity.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-1 truncate">
                                    {activity.description}
                                </p>
                                <span className="text-xs text-gray-500">{activity.time}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActivityFeed;
