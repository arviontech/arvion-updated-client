"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { getAllTeams, TeamMember } from '@/services/team/TeamService';
import Container from '@/components/shared/Container';

const TeamSection = () => {
    const [teams, setTeams] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await getAllTeams(1, 100);
                setTeams(response.data);
            } catch (error) {
                console.error('Failed to fetch teams:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    // If no teams, don't render the section or render empty state
    if (!loading && teams.length === 0) {
        return null;
    }

    // Duplicate the list for seamless scrolling
    // If list is small, duplicate more times to fill width
    const marqueeList = teams.length > 0 ? [...teams, ...teams, ...teams, ...teams] : [];

    return (
        <section className="py-16 sm:py-20 lg:py-28 overflow-hidden">
            <Container className="mb-12 sm:mb-16">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="max-w-xl">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                            Our Team
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                            Crafting Long-Term <br /> <span className="text-blue-600">Relationships</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-xl pt-4">
                        At Arvion Tech, we see you as a partner, where your goals become our mission. Your success is the inspiration of our works, and your growth is the real measure of our achievements.
                    </p>
                </div>
            </Container>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused] py-10">
                    {marqueeList.map((member, index) => (
                        <div
                            key={`${member._id}-${index}`}
                            className="relative w-[300px] sm:w-[340px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-[300px] sm:h-[340px] overflow-hidden bg-gray-100">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 group-hover:scale-105 transition-transform duration-500">
                                        <Users className="w-20 h-20 text-slate-400" />
                                    </div>
                                )}

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center bg-white relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TeamSection;
