"use client";

import React, { useEffect, useState } from 'react';
import { getAllTeams, TeamMember } from '@/services/team/TeamService';
import Container from '@/components/shared/Container';
import TeamCard from './TeamCard';

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
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gray-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <Container className="mb-12 sm:mb-16 relative">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Our Team
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Crafting Long-Term <br /> <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Relationships</span>
                        </h2>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl pt-4">
                        At Arvion Tech, we see you as a partner, where your goals become our mission. Your success is the inspiration of our works, and your growth is the real measure of our achievements.
                    </p>
                </div>
            </Container>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused] py-10">
                    {marqueeList.map((member, index) => (
                        <TeamCard
                            key={`${member._id}-${index}`}
                            member={member}
                            index={index}
                        />
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
