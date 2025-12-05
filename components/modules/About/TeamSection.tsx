'use client';

import Container from "@/components/shared/Container";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

const TeamSection = () => {
    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "/assets/team/team-1.jpg",
            bio: "Visionary leader with 15+ years in tech innovation",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Michael Chen",
            role: "CTO",
            image: "/assets/team/team-2.jpg",
            bio: "Expert in cloud architecture and AI systems",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Design",
            image: "/assets/team/team-3.jpg",
            bio: "Award-winning UX designer and creative director",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "David Kim",
            role: "Lead Developer",
            image: "/assets/team/team-4.jpg",
            bio: "Full-stack expert specializing in scalable solutions",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Team</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Meet the <span className="text-blue-600">Experts</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A passionate team of innovators, designers, and developers dedicated to your success
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                {/* Placeholder gradient for missing images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white/30">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Social links - visible on hover */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <a
                                        href={member.social.linkedin}
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                                    >
                                        <Twitter className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium text-sm mb-2">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {member.bio}
                                </p>
                            </div>

                            {/* Decorative border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <div className="text-center mt-12 lg:mt-16">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Want to join our team?</h3>
                            <p className="text-gray-600">We're always looking for talented individuals</p>
                        </div>
                        <a
                            href="#careers"
                            className="px-6 py-3 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg whitespace-nowrap"
                        >
                            View Openings
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TeamSection;
