'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Grid3X3, List, Search, FolderOpen, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Project, extractPlainText, getAllProjects } from '@/services/projects/ProjectService';

// Project types for sidebar filter
const projectTypes = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
];

interface ProjectsClientProps {
    initialProjects: Project[];
    initialMeta: {
        total: number;
        totalPage: number;
        page: number;
        limit: number;
    };
}

export default function ProjectsClient({ initialProjects, initialMeta }: ProjectsClientProps) {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(initialMeta.page);
    const [totalPages, setTotalPages] = useState(initialMeta.totalPage);
    const [total, setTotal] = useState(initialMeta.total);
    const itemsPerPage = 10;

    // Fetch projects from API when page changes
    useEffect(() => {
        // If it's the first page and we have initial data matching page 1, don't refetch
        if (currentPage === 1 && projects === initialProjects) {
            return;
        }

        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getAllProjects(currentPage, itemsPerPage);
                setProjects(response.data);
                setTotalPages(response.meta.totalPage);
                setTotal(response.meta.total);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [currentPage]);

    // Filter projects by search and type
    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            extractPlainText(project.description).toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Reset to page 1 when filter changes
    const handleFilterChange = (typeId: string) => {
        setSelectedType(typeId);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
                <div className="sticky top-28 space-y-6">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#703eff]/20 focus:border-[#703eff] transition-all"
                        />
                    </div>

                    {/* Project Types */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <FolderOpen className="w-5 h-5 text-[#703eff]" />
                            Project Types
                        </h3>
                        <div className="space-y-2">
                            {projectTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => handleFilterChange(type.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedType === type.id
                                        ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg shadow-[#0254b9]/20'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="font-medium">{type.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${viewMode === 'grid'
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${viewMode === 'list'
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <List className="w-4 h-4" />
                                List
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Projects Grid/List */}
            <div className="flex-1">
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600">
                        {loading ? 'Loading...' : (
                            <>Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> of <span className="font-semibold text-gray-900">{total}</span> projects</>
                        )}
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-[#703eff] animate-spin" />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-red-100">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={() => setCurrentPage(1)}
                            className="px-6 py-2 bg-[#703eff] text-white rounded-full hover:bg-[#5f2de0] transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredProjects.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* Grid View */}
                {!loading && !error && filteredProjects.length > 0 && viewMode === 'grid' && (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project._id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#703eff]/30"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    {project.images && project.images.length > 0 ? (
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#703eff]/10 to-[#0254b9]/10">
                                            <span className="text-4xl font-bold text-[#703eff]">{project.title.charAt(0)}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Quick Actions */}
                                    {project.live && (
                                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                className="p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 text-gray-700" />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#703eff] transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {extractPlainText(project.description, 100)}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech._id}
                                                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Details */}
                                    <Link
                                        href={`/project/${project.slug}`}
                                        className="inline-flex items-center gap-2 text-[#703eff] font-semibold hover:gap-3 transition-all"
                                    >
                                        View Details
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* List View */}
                {!loading && !error && filteredProjects.length > 0 && viewMode === 'list' && (
                    <div className="space-y-4">
                        {filteredProjects.map((project) => (
                            <div
                                key={project._id}
                                className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#703eff]/30"
                            >
                                {/* Project Image */}
                                <div className="relative w-64 shrink-0 overflow-hidden bg-gray-100">
                                    {project.images && project.images.length > 0 ? (
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#703eff]/10 to-[#0254b9]/10">
                                            <span className="text-4xl font-bold text-[#703eff]">{project.title.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#703eff] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {extractPlainText(project.description, 150)}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech._id}
                                                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-4">
                                        <Link
                                            href={`/project/${project.slug}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                                        >
                                            View Details
                                        </Link>
                                        {project.live && (
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#703eff] font-medium transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-xl font-medium transition-all ${currentPage === page
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg'
                                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.max(totalPages, 1)))}
                            disabled={currentPage >= Math.max(totalPages, 1)}
                            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
