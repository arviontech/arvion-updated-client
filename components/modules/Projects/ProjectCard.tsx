'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project, extractPlainText } from '@/services/projects/ProjectService';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    // Extract plain text from HTML description for preview
    const descriptionPreview = extractPlainText(project.description, 150);

    return (
        <div
            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
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
            <div className="absolute inset-0 -z-9"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />
            
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                {project.images && project.images.length > 0 ? (
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-100 to-cyan-100">
                        <span className="text-4xl font-bold text-blue-600">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-1"
                    style={{
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                    {project.title}
                </h3>

                {/* Description Preview */}
                <p className="text-gray-800 mb-6 line-clamp-3 leading-relaxed font-semibold"
                    style={{
                        textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                    }}>
                    {descriptionPreview}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech) => (
                        <div
                            key={tech._id}
                            className="group/tech relative"
                            title={tech.name}
                        >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.3)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    boxShadow: '0 2px 8px rgba(6, 182, 212, 0.1)',
                                }}>
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                    {project.technologies.length > 6 && (
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                            style={{
                                background: 'rgba(6, 182, 212, 0.15)',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                border: '1px solid rgba(6, 182, 212, 0.3)',
                                color: 'rgb(8, 145, 178)',
                            }}>
                            +{project.technologies.length - 6}
                        </div>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                    <Link
                        href={`/project/${project.slug}`}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all relative overflow-hidden group/btn"
                        style={{
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <span className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 bg-[length:200%_100%] animate-gradient" />
                        <span className="relative z-10 bg-linear-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-bold">
                            View Details
                        </span>
                    </Link>
                    {project.live && (
                        <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 rounded-full font-semibold transition-all"
                            title="View Live Project"
                            style={{
                                background: 'rgba(255, 255, 255, 0.3)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(6, 182, 212, 0.3)',
                                boxShadow: '0 4px 16px rgba(6, 182, 212, 0.1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <ExternalLink className="w-5 h-5 text-cyan-600" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
