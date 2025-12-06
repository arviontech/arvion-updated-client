'use client';

import { useState, useEffect } from 'react';
import { getAllProjects, Project } from '@/services/projects/ProjectService';
import ProjectCard from './ProjectCard';
import ProjectCardLoadingSkeleton from './ProjectCardLoadingSkeleton';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Container from '@/components/shared/Container';

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
        <section id="projects" className="py-16 lg:py-24 bg-gray-50">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                        Our Portfolio
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
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
                        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-red-900 mb-2">
                                Failed to Load Projects
                            </h3>
                            <p className="text-red-700 mb-6">{error}</p>
                            <button
                                onClick={fetchProjects}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && projects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
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
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-[#0254b9]/30 hover:-translate-y-1">
                            View All Projects
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}
