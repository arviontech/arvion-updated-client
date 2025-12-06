'use client';

import { useState, useEffect } from 'react';
import { getAllBlogs, Blog } from '@/services/blogs/BlogService';
import BlogCard from './BlogCard';
import BlogCardLoadingSkeleton from './BlogCardLoadingSkeleton';
import { AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/shared/Container';

export default function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getAllBlogs(1, 3); // Get first 3 blogs
            setBlogs(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blogs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // If no blogs and no error/loading, don't render the section
    if (!loading && !error && blogs.length === 0) {
        return null;
    }

    return (
        <section id="blog" className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                            Our Blog
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                            Latest News & <span className="text-blue-600">Insights</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Stay updated with the latest trends in technology, design, and development.
                        </p>
                    </div>

                    {/* View All Link (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all group shadow-sm hover:shadow-md"
                        >
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BlogCardLoadingSkeleton count={3} />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-red-900 mb-2">
                                Failed to Load Blogs
                            </h3>
                            <p className="text-red-700 mb-6">{error}</p>
                            <button
                                onClick={fetchBlogs}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Blogs Grid */}
                {!loading && !error && blogs.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                )}

                {/* View All Link (Mobile) */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all group shadow-sm"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
