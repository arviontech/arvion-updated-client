'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus, Search, Trash2, Upload, X, Wrench } from 'lucide-react';
import { getAllSkills, createSkill, deleteSkill, Skill, Skill_Category, SkillCategory } from '@/services/skills/SkillService';
import { toast } from 'sonner';

const SkillsPage = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // Form State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Web' as SkillCategory,
    });
    const [selectedIcon, setSelectedIcon] = useState<File | null>(null);
    const [iconPreview, setIconPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    useEffect(() => {
        fetchSkills();
    }, [selectedCategory]);

    useEffect(() => {
        const filtered = skills.filter(skill =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSkills(filtered);
    }, [searchQuery, skills]);

    const fetchSkills = async () => {
        setIsLoading(true);
        try {
            const category = selectedCategory === 'All' ? undefined : selectedCategory;
            const data = await getAllSkills(category);
            setSkills(data);
            setFilteredSkills(data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch skills');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (skill: Skill) => {
        if (!confirm(`Are you sure you want to delete "${skill.name}"?`)) return;

        try {
            await deleteSkill(skill._id);
            toast.success('Skill deleted successfully');
            fetchSkills();
        } catch (error: any) {
            toast.error(error.message || 'Failed to delete skill');
        }
    };

    const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedIcon(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setIconPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !selectedIcon) {
            toast.error('Please provide a name and an icon');
            return;
        }

        setIsSubmitting(true);
        try {
            await createSkill(formData, selectedIcon);
            toast.success('Skill created successfully');
            setShowModal(false);
            resetForm();
            fetchSkills();
        } catch (error: any) {
            toast.error(error.message || 'Failed to create skill');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({ name: '', category: 'Web' });
        setSelectedIcon(null);
        setIconPreview(null);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills & Technologies</h1>
                    <p className="text-gray-600">Manage technologies available for projects</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30"
                >
                    <Plus className="w-5 h-5" />
                    Add Skill
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4">
                {/* Search Bar */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === 'All'
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        All
                    </button>
                    {Object.keys(Skill_Category).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            {isLoading ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading skills...</p>
                    </div>
                </div>
            ) : filteredSkills.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                    <Wrench className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">No skills found</p>
                    <p className="text-gray-500 mt-2">Add your first technology to get started</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredSkills.map((skill) => (
                        <div key={skill._id} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all group relative">
                            <button
                                onClick={() => handleDelete(skill)}
                                className="absolute top-2 right-2 p-1.5 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                                title="Delete Skill"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-3">
                                    {skill.icon ? (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-gray-400">
                                            {skill.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md mt-1 font-medium">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Skill Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Add New Skill</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Skill Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g. React, Python"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value as SkillCategory })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {Object.keys(Skill_Category).map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Icon *
                                </label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
                                >
                                    {iconPreview ? (
                                        <img
                                            src={iconPreview}
                                            alt="Preview"
                                            className="w-full h-full object-contain p-4"
                                        />
                                    ) : (
                                        <>
                                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                            <span className="text-sm text-gray-500">Click to upload icon</span>
                                        </>
                                    )}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleIconChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Skill'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsPage;
