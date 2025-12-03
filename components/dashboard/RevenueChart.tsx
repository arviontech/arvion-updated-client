'use client';

import { TrendingUp } from 'lucide-react';

const RevenueChart = () => {
    const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const revenue = [45000, 52000, 48000, 61000, 58000, 72000];
    const maxRevenue = Math.max(...revenue);

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Revenue Trend</h3>
                    <p className="text-sm text-gray-600 mt-1">Last 6 months performance</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+24%</span>
                </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between gap-3 h-64">
                {revenue.map((value, index) => {
                    const height = (value / maxRevenue) * 100;
                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                            <div className="relative w-full flex flex-col items-center">
                                {/* Tooltip on hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded mb-2 absolute -top-8">
                                    ${(value / 1000).toFixed(0)}k
                                </div>

                                {/* Bar */}
                                <div
                                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-500 cursor-pointer"
                                    style={{ height: `${height}%` }}
                                />
                            </div>

                            {/* Month label */}
                            <span className="text-sm text-gray-600 font-medium">{months[index]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RevenueChart;
