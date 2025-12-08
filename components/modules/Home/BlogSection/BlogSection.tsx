'use client';

import { useState, useEffect } from 'react';
import { getAllBlogs, Blog } from '@/services/blogs/BlogService';
import BlogCard from './BlogCard';
import BlogCardLoadingSkeleton from './BlogCardLoadingSkeleton';
import { AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';
import GlassmorphismButton from '@/components/shared/GlassmorphismButton';

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
        <section id="blog" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Our Blog
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Latest News & <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Insights</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Stay updated with the latest trends in technology, design, and development.
                        </p>
                    </div>

                    {/* View All Link (Desktop) */}
                    <div className="hidden md:block">
                        <GlassmorphismButton
                            href="/blog"
                            size="md"
                            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            className="hover:scale-105"
                        >
                            View All Articles
                        </GlassmorphismButton>
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
                                Failed to Load Blogs
                            </h3>
                            <p className="text-red-700 mb-6 font-semibold"
                                style={{
                                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
                                }}>{error}</p>
                            <button
                                onClick={fetchBlogs}
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
                                <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20" />
                                <RefreshCw className="w-4 h-4 relative z-10 text-red-600" />
                                <span className="relative z-10 text-red-600">Try Again</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Blogs Grid */}
                {!loading && !error && blogs.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <BlogCard key={blog._id} blog={blog} index={index} />
                        ))}
                    </div>
                )}

                {/* View All Link (Mobile) */}
                <div className="mt-12 text-center md:hidden">
                    <GlassmorphismButton
                        href="/blog"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        className="hover:scale-105"
                    >
                        View All Articles
                    </GlassmorphismButton>
                </div>
            </Container>
        </section>
    );
}
