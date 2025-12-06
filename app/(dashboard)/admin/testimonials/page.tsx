'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Pencil, Trash2, X, Upload, Loader2, User, Star } from 'lucide-react';
import {
    getAllTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
    Testimonial
} from '@/services/testimonials/TestimonialService';
import { toast } from 'sonner';

import DeleteConfirmationModal from '@/components/ui/DeleteConfirmationModal';

export default function TestimonialManagementPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        review: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Delete Modal State
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [testimonialToDelete, setTestimonialToDelete] = useState<Testimonial | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const response = await getAllTestimonials(1, 100);
            setTestimonials(response.data);
        } catch (error) {
            console.error('Failed to fetch testimonials:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            if (editingTestimonial) {
                await updateTestimonial(editingTestimonial._id, formData, selectedImage || undefined);
            } else {
                if (!selectedImage) {
                    toast.error('Please select an image');
                    return;
                }
                await createTestimonial(formData, selectedImage);
            }
            setIsModalOpen(false);
            setIsModalOpen(false);
            resetForm();
            fetchTestimonials();
            toast.success(editingTestimonial ? 'Testimonial updated successfully' : 'Testimonial added successfully');
        } catch (error) {
            console.error('Failed to save testimonial:', error);
            toast.error('Failed to save testimonial');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteClick = (testimonial: Testimonial) => {
        setTestimonialToDelete(testimonial);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!testimonialToDelete) return;

        try {
            setIsDeleting(true);
            await deleteTestimonial(testimonialToDelete._id);
            setDeleteModalOpen(false);
            setTestimonialToDelete(null);
            fetchTestimonials();
            toast.success('Testimonial deleted successfully');
        } catch (error) {
            console.error('Failed to delete testimonial:', error);
            toast.error('Failed to delete testimonial');
        } finally {
            setIsDeleting(false);
        }
    };

    const openEditModal = (testimonial: Testimonial) => {
        setEditingTestimonial(testimonial);
        setFormData({
            name: testimonial.name,
            title: testimonial.title,
            review: testimonial.review,
            date: testimonial.date
        });
        setImagePreview(testimonial.image);
        setIsModalOpen(true);
    };

    const resetForm = () => {
        setEditingTestimonial(null);
        setFormData({
            name: '',
            title: '',
            review: '',
            date: new Date().toISOString().split('T')[0]
        });
        setSelectedImage(null);
        setImagePreview(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
                    <p className="text-gray-600">Manage client testimonials</p>
                </div>
                <button
                    onClick={() => {
                        resetForm();
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Testimonial
                </button>
            </div>

            {/* Testimonial List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                                        Loading...
                                    </td>
                                </tr>
                            ) : testimonials.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        No testimonials found. Add one to get started.
                                    </td>
                                </tr>
                            ) : (
                                testimonials.map((testimonial) => (
                                    <tr key={testimonial._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                                    {testimonial.image ? (
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                            <User className="w-5 h-5" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
                                                "{testimonial.review}"
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => openEditModal(testimonial)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(testimonial)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {/* Image Upload */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Client Photo</label>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                                        {imagePreview ? (
                                            <Image
                                                src={imagePreview}
                                                alt="Preview"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <User className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Upload className="w-4 h-4 mr-2 text-gray-500" />
                                            <span className="text-sm text-gray-600">Change Photo</span>
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Client Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="e.g. John Doe"
                                />
                            </div>

                            {/* Title Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Title / Designation</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="e.g. CEO, Tech Solutions"
                                />
                            </div>

                            {/* Review Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Review</label>
                                <textarea
                                    required
                                    value={formData.review}
                                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32 resize-none"
                                    placeholder="Write the testimonial here..."
                                />
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {editingTestimonial ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <DeleteConfirmationModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Testimonial"
                message="Are you sure you want to delete this testimonial? This action cannot be undone."
                itemName={testimonialToDelete?.name}
                isLoading={isDeleting}
            />
        </div>
    );
}
