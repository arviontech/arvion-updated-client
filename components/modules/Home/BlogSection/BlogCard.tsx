'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Blog } from '@/services/blogs/BlogService';

interface BlogCardProps {
    blog: Blog;
    index?: number;
}

const BlogCard = ({ blog, index = 0 }: BlogCardProps) => {
    // Format date
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Strip HTML tags for excerpt
    const excerpt = blog.content.replace(/<[^>]+>/g, '').slice(0, 120) + '...';

    return (
        <article
            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            style={{
                backdropFilter: 'blur(15px) saturate(180%)',
                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.25)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(6, 182, 212, 0.12), 0 6px 20px rgba(139, 92, 246, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)';
            }}
        >
            {/* Gradient background layer */}
            <div className="absolute inset-0 -z-10"
                style={{
                    background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                }}
            />

            {/* White transparent layer */}
            <div className="absolute inset-0 -z-[9]"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                }}
            />
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                {blog.blogImage && blog.blogImage.length > 0 ? (
                    <Image
                        src={blog.blogImage[0]}
                        alt={blog.blogTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                        <span className="text-sm">No Image</span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-bold rounded-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(6, 182, 212, 0.3)',
                            boxShadow: '0 4px 16px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                        }}>
                        <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                            Tech
                        </span>
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative z-10">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 font-semibold"
                    style={{
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                        {formattedDate}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-violet-600" />
                        5 min read
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors"
                    style={{
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                    <Link href={`/blog/${blog._id}`}>
                        {blog.blogTitle}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-800 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-semibold"
                    style={{
                        textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                    }}>
                    {excerpt}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t flex items-center justify-between mt-auto"
                    style={{
                        borderColor: 'rgba(6, 182, 212, 0.1)'
                    }}>
                    {/* Author */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.3)',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                            }}>
                            {blog.authorImage ? (
                                <Image
                                    src={blog.authorImage}
                                    alt="Author"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-cyan-600" />
                                </div>
                            )}
                        </div>
                        <span className="text-sm font-bold text-gray-700"
                            style={{
                                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                            }}>Admin</span>
                    </div>

                    {/* Read More Link */}
                    <Link
                        href={`/blog/${blog._id}`}
                        className="flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent transition-all group/link"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-cyan-600" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
