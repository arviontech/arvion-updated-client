'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';
import { TeamMember } from '@/services/team/TeamService';

interface TeamCardProps {
    member: TeamMember;
    index?: number;
}

const TeamCard = ({ member, index = 0 }: TeamCardProps) => {
    return (
        <div
            className="relative w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            style={{
                backdropFilter: 'blur(15px) saturate(180%)',
                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.25)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(6, 182, 212, 0.12), 0 6px 20px rgba(139, 92, 246, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)';
            }}
        >
            {/* Gradient background layer */}
            <div className="absolute inset-0 -z-10"
                style={{
                    background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                }}
            />

            {/* White transparent layer */}
            <div className="absolute inset-0 -z-[9]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />

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
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors"
                    style={{
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                    {member.name}
                </h3>
                <p className="font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
                    style={{
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
                    }}>
                    {member.role}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
