'use client';

import Container from "@/components/shared/Container";
import { Shield, Zap, Users, Award, Heart, Globe } from "lucide-react";

const CoreValues = () => {
    const values = [
        {
            icon: Shield,
            title: "Integrity",
            description: "We uphold the highest ethical standards in every project, ensuring transparency and trust with our clients.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "We constantly push boundaries, embracing new technologies and creative solutions to solve complex challenges.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe in the power of teamwork, working closely with clients and partners to achieve shared success.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We strive for perfection in every detail, delivering solutions that exceed expectations and set new standards.",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We are passionate about technology and its potential to transform lives and businesses for the better.",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "We aim to make a positive difference worldwide, helping businesses thrive in the global digital economy.",
            color: "from-cyan-500 to-cyan-600"
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Core Values</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What <span className="text-blue-600">Drives</span> Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our values define who we are and guide every decision we make
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>

                                {/* Decorative line */}
                                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;
