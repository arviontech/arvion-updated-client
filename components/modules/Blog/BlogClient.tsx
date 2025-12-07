'use client';

import { useState, useEffect } from 'react';
import { getAllBlogs, type Blog } from '@/services/blogs/BlogService';
import BlogCard from '../Home/BlogSection/BlogCard';
import BlogCardLoadingSkeleton from '../Home/BlogSection/BlogCardLoadingSkeleton';
import { AlertCircle, RefreshCw, Search, FolderOpen, Grid3X3, List, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

// Blog categories for sidebar filter
const blogCategories = [
    { id: 'all', name: 'All Articles' },
    { id: 'tech', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business' },
    { id: 'tutorials', name: 'Tutorials' },
];

interface BlogClientProps {
    initialBlogs: Blog[];
    initialMeta: {
        total: number;
        totalPage: number;
        page: number;
        limit: number;
    };
}

export default function BlogClient({ initialBlogs, initialMeta }: BlogClientProps) {
    const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
    const [meta, setMeta] = useState(initialMeta);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const fetchBlogs = async (page: number = 1, search: string = '', category: string = 'all') => {
        try {
            setLoading(true);
            setError(null);
            
            // Build search query including category if not 'all'
            let searchQuery = search;
            if (category !== 'all') {
                searchQuery = search ? `${search} ${category}` : category;
            }
            
            const response = await getAllBlogs(page, 12, searchQuery);
            setBlogs(response.data);
            setMeta(response.meta);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blogs');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchBlogs(1, searchTerm, selectedCategory);
    };

    const handlePageChange = (page: number) => {
        fetchBlogs(page, searchTerm, selectedCategory);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        fetchBlogs(1, searchTerm, categoryId);
    };

    // Remove client-side filtering since we're doing it server-side
    const filteredBlogs = blogs;

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
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#703eff]/20 focus:border-[#703eff] transition-all"
                        />
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <FolderOpen className="w-5 h-5 text-[#703eff]" />
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {blogCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg shadow-[#0254b9]/20'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="font-medium">{category.name}</span>
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

            {/* Main Content */}
            <div className="flex-1">
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600">
                        {loading ? 'Loading...' : (
                            <>Showing <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> of <span className="font-semibold text-gray-900">{meta.total}</span> articles</>
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
                        <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-red-900 mb-2">Failed to Load Blogs</h3>
                        <p className="text-red-700 mb-6">{error}</p>
                        <button
                            onClick={() => fetchBlogs(1, searchTerm, selectedCategory)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Try Again
                        </button>
                    </div>
                )}

                {/* No Results */}
                {!loading && !error && filteredBlogs.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* Grid View */}
                {!loading && !error && filteredBlogs.length > 0 && viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <BlogCard key={blog._id} blog={blog} index={index} />
                        ))}
                    </div>
                )}

                {/* List View */}
                {!loading && !error && filteredBlogs.length > 0 && viewMode === 'list' && (
                    <div className="space-y-6">
                        {filteredBlogs.map((blog, index) => (
                            <div key={blog._id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                                <BlogCard blog={blog} index={index} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && meta.totalPage > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                            onClick={() => handlePageChange(meta.page - 1)}
                            disabled={meta.page === 1}
                            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        {Array.from({ length: meta.totalPage }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-xl font-medium transition-all ${
                                    page === meta.page
                                        ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg'
                                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => handlePageChange(meta.page + 1)}
                            disabled={meta.page === meta.totalPage}
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
