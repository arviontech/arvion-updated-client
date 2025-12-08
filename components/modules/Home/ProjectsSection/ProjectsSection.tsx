'use client';

import { useState, useEffect } from 'react';
import { getAllProjects, Project } from '@/services/projects/ProjectService';
import ProjectCard from './ProjectCard';
import ProjectCardLoadingSkeleton from './ProjectCardLoadingSkeleton';
import { AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';
import GlassmorphismButton from '@/components/shared/GlassmorphismButton';

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getAllProjects(1, 6); // Get first 6 projects
            setProjects(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load projects');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Our Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Featured <span className="bg-linear-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our latest work and see how we transform ideas into powerful digital solutions.
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCardLoadingSkeleton count={6} />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="max-w-2xl mx-auto">
                        <div className="rounded-xl p-8 text-center"
                            style={{
                                backdropFilter: 'blur(15px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                border: '1px solid rgba(239, 68, 68, 0.25)',
                                boxShadow: '0 8px 32px rgba(239, 68, 68, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                                background: 'linear-gradient(135deg, rgba(254, 226, 226, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
                            }}>
                            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-red-900 mb-2"
                                style={{
                                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                                }}>
                                Failed to Load Projects
                            </h3>
                            <p className="text-red-700 mb-6 font-semibold"
                                style={{
                                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
                                }}>{error}</p>
                            <button
                                onClick={fetchProjects}
                                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all relative overflow-hidden group"
                                style={{
                                    backdropFilter: 'blur(15px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    boxShadow: '0 4px 16px rgba(239, 68, 68, 0.2)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.2)';
                                }}
                            >
                                <span className="absolute inset-0 bg-linear-to-r from-red-500/20 to-red-600/20" />
                                <RefreshCw className="w-4 h-4 relative z-10 text-red-600" />
                                <span className="relative z-10 text-red-600">Try Again</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && projects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project._id} project={project} index={index} />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && projects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Projects Yet</h3>
                        <p className="text-gray-600">Check back soon for our latest work!</p>
                    </div>
                )}

                {/* View All Projects Button */}
                {!loading && !error && projects.length > 0 && (
                    <div className="text-center mt-12 lg:mt-16">
                        <GlassmorphismButton
                            href="/projects"
                            size="lg"
                            rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            className="hover:scale-105"
                        >
                            View All Projects
                        </GlassmorphismButton>
                    </div>
                )}
            </Container>
        </section>
    );
}
