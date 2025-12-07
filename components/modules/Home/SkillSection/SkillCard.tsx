'use client';

import Image from 'next/image';
import { Skill } from '@/services/skills/SkillService';

interface SkillCardProps {
    skill: Skill;
    index?: number;
}

const SkillCard = ({ skill, index = 0 }: SkillCardProps) => {
    return (
        <div
            className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-4 text-center"
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
            <div className="absolute inset-0 rounded-xl -z-10"
                style={{
                    background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                }}
            />

            {/* White transparent layer */}
            <div className="absolute inset-0 rounded-xl -z-[9]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />

            {/* Icon Container */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center z-10">
                {skill.icon ? (
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
                        }} />
                )}
            </div>

            {/* Skill Name */}
            <h3 className="text-gray-900 font-bold text-sm sm:text-base group-hover:text-cyan-600 transition-colors relative z-10"
                style={{
                    textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}>
                {skill.name}
            </h3>
        </div>
    );
};

export default SkillCard;
