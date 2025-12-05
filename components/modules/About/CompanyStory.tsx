'use client';

import Container from "@/components/shared/Container";
import Image from "next/image";
import { Target, Lightbulb, Rocket } from "lucide-react";

const CompanyStory = () => {
    const milestones = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and success in the digital age."
        },
        {
            icon: Lightbulb,
            title: "Our Vision",
            description: "To be the global leader in digital transformation, setting the standard for excellence in technology innovation and client success."
        },
        {
            icon: Rocket,
            title: "Our Approach",
            description: "We combine deep technical expertise with creative thinking to deliver solutions that are not just functional, but truly exceptional."
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main large image */}
                            <div className="col-span-2 relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/services/Cloud.jpg"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                            </div>
                            {/* Smaller images */}
                            <div className="relative h-40 lg:h-52 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/services/artificial-intelligence.jpg"
                                    alt="Innovation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-40 lg:h-52 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/services/Web-development.jpg"
                                    alt="Development"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">5+</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">Years</p>
                                    <p className="text-sm text-gray-600">of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:pl-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Story</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Pioneering <span className="text-blue-600">Digital Excellence</span> Since Day One
                        </h2>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Founded with a vision to bridge the gap between technology and business success,
                            Arvion Tech has grown into a trusted partner for companies seeking digital transformation.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our journey began with a simple belief: that every business deserves access to
                            world-class technology solutions. Today, we continue to push the boundaries of
                            what's possible, helping our clients thrive in an ever-evolving digital landscape.
                        </p>

                        {/* Mission, Vision, Approach */}
                        <div className="space-y-6">
                            {milestones.map((milestone, index) => {
                                const Icon = milestone.icon;
                                return (
                                    <div key={index} className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#703eff] group-hover:to-[#0254b9] transition-all duration-300">
                                            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{milestone.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CompanyStory;
