'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { X, Upload, Trash2, Plus } from 'lucide-react';
import { projectService, CreateProjectData, Technology } from '@/services/projects/ProjectService';
import { toast } from 'sonner';

interface ProjectFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    editProject?: any; // For edit functionality
}

const ProjectFormModal = ({ isOpen, onClose, onSuccess, editProject }: ProjectFormModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [skills, setSkills] = useState<Technology[]>([]);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<CreateProjectData>({
        slug: '',
        title: '',
        description: '',
        live: '',
        technologies: [],
        forSale: false,
    });

    // Fetch skills on mount
    useEffect(() => {
        if (isOpen) {
            fetchSkills();
            if (editProject) {
                // Populate form for editing
                setFormData({
                    slug: editProject.slug,
                    title: editProject.title,
                    description: editProject.description,
                    live: editProject.live || '',
                    technologies: editProject.technologies.map((t: Technology) => t._id),
                    forSale: editProject.forSale,
                });
            }
        }
    }, [isOpen, editProject]);

    const fetchSkills = async () => {
        try {
            const data = await projectService.getAllSkills();
            setSkills(data);
        } catch (error) {
            toast.error('Failed to fetch technologies');
        }
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData({
            ...formData,
            title,
            slug: projectService.generateSlug(title),
        });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        if (selectedImages.length + files.length > 10) {
            toast.error('Maximum 10 images allowed');
            return;
        }

        setSelectedImages([...selectedImages, ...files]);

        // Create previews
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews(prev => [...prev, reader.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index: number) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const toggleTechnology = (techId: string) => {
        setFormData(prev => ({
            ...prev,
            technologies: prev.technologies.includes(techId)
                ? prev.technologies.filter(id => id !== techId)
                : [...prev.technologies, techId],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.description || formData.technologies.length === 0) {
            toast.error('Please fill in all required fields');
            return;
        }

        if (selectedImages.length === 0 && !editProject) {
            toast.error('Please upload at least one image');
            return;
        }

        setIsLoading(true);
        try {
            if (editProject) {
                await projectService.updateProject(editProject._id, formData, selectedImages);
                toast.success('Project updated successfully');
            } else {
                await projectService.createProject(formData, selectedImages);
                toast.success('Project created successfully');
            }
            onSuccess();
            onClose();
        } catch (error: any) {
            toast.error(error.message || 'Failed to save project');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {editProject ? 'Edit Project' : 'Create New Project'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {/* Title & Slug */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={handleTitleChange}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter project title"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Slug (URL) *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="project-slug"
                            />
                            <p className="text-xs text-gray-500 mt-1">Auto-generated from title</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Description * (HTML supported)
                        </label>
                        <textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Enter project description (HTML tags allowed)"
                        />
                        <p className="text-xs text-gray-500 mt-1">You can use HTML tags like &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, etc.</p>
                    </div>

                    {/* Live URL */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Live URL (Optional)
                        </label>
                        <input
                            type="url"
                            value={formData.live}
                            onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://example.com"
                        />
                    </div>

                    {/* Technologies */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Technologies * (Select at least one)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-lg border border-gray-200">
                            {skills.map((skill) => (
                                <button
                                    key={skill._id}
                                    type="button"
                                    onClick={() => toggleTechnology(skill._id)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all text-left relative ${formData.technologies.includes(skill._id)
                                        ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                        }`}
                                >
                                    {skill.icon ? (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-6 h-6 object-contain"
                                        />
                                    ) : (
                                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                            {skill.name.charAt(0)}
                                        </div>
                                    )}
                                    <span className={`text-sm font-medium ${formData.technologies.includes(skill._id) ? 'text-blue-700' : 'text-gray-700'}`}>
                                        {skill.name}
                                    </span>
                                    {formData.technologies.includes(skill._id) && (
                                        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Selected: {formData.technologies.length} {formData.technologies.length === 1 ? 'technology' : 'technologies'}
                        </p>
                    </div>

                    {/* Images Upload */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Project Images * (Max 10)
                        </label>

                        <div className="space-y-3">
                            {/* Upload Button */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={selectedImages.length >= 10}
                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Upload className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700 font-medium">
                                    Click to upload images ({selectedImages.length}/10)
                                </span>
                            </button>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="hidden"
                            />

                            {/* Image Previews */}
                            {imagePreviews.length > 0 && (
                                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                                    {imagePreviews.map((preview, index) => (
                                        <div key={index} className="relative group">
                                            <img
                                                src={preview}
                                                alt={`Preview ${index + 1}`}
                                                className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* For Sale */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="forSale"
                            checked={formData.forSale}
                            onChange={(e) => setFormData({ ...formData, forSale: e.target.checked })}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="forSale" className="text-sm font-medium text-gray-700">
                            Mark this project as "For Sale"
                        </label>
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    {editProject ? 'Updating...' : 'Creating...'}
                                </>
                            ) : (
                                <>
                                    <Plus className="w-5 h-5" />
                                    {editProject ? 'Update Project' : 'Create Project'}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectFormModal;
