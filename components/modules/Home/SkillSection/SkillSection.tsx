"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllSkills, Skill, Skill_Category } from '@/services/skills/SkillService';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const categories = Object.keys(Skill_Category) as (keyof typeof Skill_Category)[];

const SkillSection = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<keyof typeof Skill_Category>('Web');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await getAllSkills();
                setSkills(data);
            } catch (err) {
                console.error('Failed to fetch skills:', err);
                setError('Failed to load skills');
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const filteredSkills = skills.filter(skill => skill.category === activeTab);

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background Image - Reusing from CTASection for consistency */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/bg-blue-wave.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                        Towards Innovation
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        <span className="text-white">Skilled In Top Tech Stacks</span>{' '}
                        Committed
                        <br className="hidden sm:block" />
                        To Your Project&apos;s Success
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 border-b border-white/10 pb-1">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={cn(
                                "relative pb-4 text-sm sm:text-base font-medium transition-colors duration-300",
                                activeTab === category
                                    ? "text-blue-400"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            {category}
                            {activeTab === category && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-10">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredSkills.map((skill) => (
                            <div
                                key={skill._id}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center"
                            >
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                                    {/* Assuming icon is a URL. If it's a file path, might need adjustment */}
                                    {/* Using a fallback or checking if it's an image URL */}
                                    {skill.icon ? (
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={64}
                                            height={64}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-700 rounded-full" />
                                    )}
                                </div>
                                <h3 className="text-white font-medium text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}

                {filteredSkills.length === 0 && !loading && !error && (
                    <div className="text-center text-slate-400 py-10">
                        No skills found for this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default SkillSection;
