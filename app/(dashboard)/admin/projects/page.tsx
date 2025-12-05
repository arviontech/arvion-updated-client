'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink, Calendar } from 'lucide-react';
import { getAllProjects, deleteProject, Project } from '@/services/projects/ProjectService';
import { toast } from 'sonner';
import ProjectFormModal from '@/components/dashboard/ProjectFormModal';

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.slug.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProjects(filtered);
    }, [searchQuery, projects]);

    const fetchProjects = async () => {
        setIsLoading(true);
        try {
            const response = await getAllProjects(1, 100);
            setProjects(response.data);
            setFilteredProjects(response.data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch projects');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (project: Project) => {
        if (!confirm(`Are you sure you want to delete "${project.title}"?`)) return;

        try {
            await deleteProject(project._id);
            toast.success('Project deleted successfully');
            fetchProjects();
        } catch (error: any) {
            toast.error(error.message || 'Failed to delete project');
        }
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setShowModal(true);
    };

    const handleAddNew = () => {
        setEditingProject(null);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditingProject(null);
    };

    const handleFormSuccess = () => {
        fetchProjects();
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
                    <p className="text-gray-600">Manage your portfolio projects</p>
                </div>
                <button
                    onClick={handleAddNew}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30"
                >
                    <Plus className="w-5 h-5" />
                    Add Project
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Projects Table */}
            {isLoading ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading projects...</p>
                    </div>
                </div>
            ) : filteredProjects.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                    <p className="text-gray-600 text-lg">No projects found</p>
                    <p className="text-gray-500 mt-2">Create your first project to get started</p>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Project
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Technologies
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredProjects.map((project) => (
                                    <tr key={project._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {project.images[0] && (
                                                    <img
                                                        src={project.images[0]}
                                                        alt={project.title}
                                                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                                                    />
                                                )}
                                                <div>
                                                    <div className="font-semibold text-gray-900 mb-1">
                                                        {project.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {project.slug}
                                                    </div>
                                                    {project.live && (
                                                        <a
                                                            href={project.live}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1"
                                                        >
                                                            <ExternalLink className="w-3 h-3" />
                                                            View Live
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech._id}
                                                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${project.forSale
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {project.forSale ? 'For Sale' : 'Portfolio'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {new Date(project.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(project)}
                                                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                                                    title="Edit Project"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(project)}
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                                                    title="Delete Project"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Project Form Modal */}
            <ProjectFormModal
                isOpen={showModal}
                onClose={handleModalClose}
                onSuccess={handleFormSuccess}
                editProject={editingProject}
            />
        </div>
    );
};

export default ProjectsPage;
