import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    change: number;
    icon: LucideIcon;
    gradientFrom: string;
    gradientTo: string;
}

const StatsCard = ({ title, value, change, icon: Icon, gradientFrom, gradientTo }: StatsCardProps) => {
    const isPositive = change >= 0;

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{value}</h3>
                    <div className="flex items-center gap-1">
                        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositive ? '+' : ''}{change}%
                        </span>
                        <span className="text-gray-500 text-sm">from last month</span>
                    </div>
                </div>
                <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    style={{
                        boxShadow: `0 8px 16px -4px rgba(37, 99, 235, 0.3)`
                    }}
                >
                    <Icon className="w-7 h-7 text-white" />
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
