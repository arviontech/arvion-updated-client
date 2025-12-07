"use client";

import React, { useEffect, useState } from 'react';
import { getAllSkills, Skill, Skill_Category } from '@/services/skills/SkillService';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import SkillCard from './SkillCard';

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
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gray-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                {/* Decorative frosted glass shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}
                />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Towards Innovation
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Skilled In Top Tech Stacks</span>{' '}
                        Committed
                        <br className="hidden sm:block" />
                        To Your Project&apos;s Success
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={cn(
                                "relative px-6 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300",
                                activeTab === category
                                    ? ""
                                    : ""
                            )}
                            style={activeTab === category ? {
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                border: '1px solid rgba(6, 182, 212, 0.25)',
                                boxShadow: '0 4px 16px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
                            } : {
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                background: 'rgba(255, 255, 255, 0.2)',
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== category) {
                                    e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.15)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== category) {
                                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                }
                            }}
                        >
                            <span className={cn(
                                "relative z-10",
                                activeTab === category
                                    ? "bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
                                    : "text-gray-700"
                            )}
                            style={{
                                textShadow: activeTab === category ? '' : '0 1px 2px rgba(255, 255, 255, 0.8)'
                            }}>
                                {category}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="max-w-2xl mx-auto">
                        <div className="rounded-xl p-8 text-center"
                            style={{
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                border: '1px solid rgba(239, 68, 68, 0.25)',
                                boxShadow: '0 8px 32px rgba(239, 68, 68, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                                background: 'linear-gradient(135deg, rgba(254, 226, 226, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
                            }}>
                            <p className="text-red-700 font-semibold"
                                style={{
                                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
                                }}>{error}</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredSkills.map((skill, index) => (
                            <SkillCard
                                key={skill._id}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </div>
                )}

                {filteredSkills.length === 0 && !loading && !error && (
                    <div className="text-center py-10">
                        <p className="text-gray-600 font-semibold"
                            style={{
                                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                            }}>
                            No skills found for this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SkillSection;
