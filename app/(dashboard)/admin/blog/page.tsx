'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, Calendar, X, Upload, Loader2, FileText } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    Blog
} from '@/services/blogs/BlogService';
import DeleteConfirmationModal from '@/components/ui/DeleteConfirmationModal';

export default function BlogPage() {
    const [posts, setPosts] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<Blog | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Delete Modal State
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState<Blog | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        blogTitle: '',
        content: '',
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await getAllBlogs(1, 100);
            setPosts(response.data);
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
            toast.error('Failed to load blog posts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.blogTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

        if (!formData.blogTitle || !formData.content) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            setSubmitting(true);

            const submitData = {
                blogTitle: formData.blogTitle,
                content: formData.content,
                blogImage: selectedImage ? [selectedImage] : undefined
            };

            if (editingPost) {
                await updateBlog(editingPost._id, submitData);
                toast.success('Blog post updated successfully');
            } else {
                if (!selectedImage) {
                    toast.error('Please select a cover image');
                    return;
                }
                await createBlog({ ...submitData, blogImage: [selectedImage] });
                toast.success('Blog post created successfully');
            }

            setIsModalOpen(false);
            resetForm();
            fetchPosts();
        } catch (error) {
            console.error('Failed to save blog post:', error);
            toast.error('Failed to save blog post');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteClick = (post: Blog) => {
        setPostToDelete(post);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!postToDelete) return;

        try {
            setIsDeleting(true);
            await deleteBlog(postToDelete._id);
            setDeleteModalOpen(false);
            setPostToDelete(null);
            fetchPosts();
            toast.success('Blog post deleted successfully');
        } catch (error) {
            console.error('Failed to delete blog post:', error);
            toast.error('Failed to delete blog post');
        } finally {
            setIsDeleting(false);
        }
    };

    const openEditModal = (post: Blog) => {
        setEditingPost(post);
        setFormData({
            blogTitle: post.blogTitle,
            content: post.content,
        });
        setImagePreview(post.blogImage?.[0] || null);
        setIsModalOpen(true);
    };

    const resetForm = () => {
        setEditingPost(null);
        setFormData({
            blogTitle: '',
            content: '',
        });
        setSelectedImage(null);
        setImagePreview(null);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
                    <p className="text-gray-600">Manage blog posts and articles</p>
                </div>
                <button
                    onClick={() => {
                        resetForm();
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30"
                >
                    <Plus className="w-5 h-5" />
                    New Post
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Total Posts</p>
                    <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">This Month</p>
                    <p className="text-2xl font-bold text-blue-600">
                        {posts.filter(p => new Date(p.createdAt).getMonth() === new Date().getMonth()).length}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Total Images</p>
                    <p className="text-2xl font-bold text-purple-600">
                        {posts.reduce((acc, curr) => acc + (curr.blogImage?.length || 0), 0)}
                    </p>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Posts Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Post Details
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                                        Loading posts...
                                    </td>
                                </tr>
                            ) : filteredPosts.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        No blog posts found. Create one to get started.
                                    </td>
                                </tr>
                            ) : (
                                filteredPosts.map((post) => (
                                    <tr key={post._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                                                    {post.blogImage && post.blogImage.length > 0 ? (
                                                        <Image
                                                            src={post.blogImage[0]}
                                                            alt={post.blogTitle}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                            <FileText className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 line-clamp-1">{post.blogTitle}</div>
                                                    <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                                                        {post.content.replace(/<[^>]+>/g, '').slice(0, 60)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-gray-700">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {new Date(post.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => openEditModal(post)}
                                                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(post)}
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
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

            {/* Create/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingPost ? 'Edit Blog Post' : 'Create New Post'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
                            {/* Image Upload */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Cover Image</label>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                        {imagePreview ? (
                                            <Image
                                                src={imagePreview}
                                                alt="Preview"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <FileText className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition-all">
                                            <div className="text-center">
                                                <Upload className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                                                <span className="text-sm text-gray-600 font-medium">Click to upload image</span>
                                            </div>
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

                            {/* Title Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Post Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.blogTitle}
                                    onChange={(e) => setFormData({ ...formData, blogTitle: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter post title"
                                />
                            </div>

                            {/* Content Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Content (HTML supported)</label>
                                <textarea
                                    required
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-64 resize-none font-mono text-sm"
                                    placeholder="<p>Write your blog content here...</p>"
                                />
                                <p className="text-xs text-gray-500">
                                    You can use HTML tags for formatting.
                                </p>
                            </div>

                            <div className="pt-4 flex gap-3 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
                                >
                                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {editingPost ? 'Update Post' : 'Publish Post'}
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
                title="Delete Blog Post"
                message="Are you sure you want to delete this post? This action cannot be undone."
                itemName={postToDelete?.blogTitle}
                isLoading={isDeleting}
            />
        </div>
    );
}
