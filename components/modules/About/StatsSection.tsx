'use client';

import Container from "@/components/shared/Container";
import { TrendingUp, Users, Briefcase, Award } from "lucide-react";

const StatsSection = () => {
    const stats = [
        {
            icon: Briefcase,
            value: "200+",
            label: "Projects Delivered",
            description: "Successfully completed projects across industries"
        },
        {
            icon: Users,
            value: "50+",
            label: "Happy Clients",
            description: "Trusted by businesses worldwide"
        },
        {
            icon: Award,
            value: "15+",
            label: "Awards Won",
            description: "Recognized for excellence in technology"
        },
        {
            icon: TrendingUp,
            value: "98%",
            label: "Client Satisfaction",
            description: "Consistently exceeding expectations"
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/50 rounded-full mb-4 border border-blue-700/30">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Our Impact</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Numbers That <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Speak</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Our track record of success and commitment to excellence
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Value */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </h3>

                                    {/* Label */}
                                    <p className="text-lg font-semibold text-white mb-1">
                                        {stat.label}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-gray-400">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default StatsSection;
