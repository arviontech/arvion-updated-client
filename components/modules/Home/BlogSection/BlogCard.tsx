'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Blog } from '@/services/blogs/BlogService';

interface BlogCardProps {
    blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
    // Format date
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Strip HTML tags for excerpt
    const excerpt = blog.content.replace(/<[^>]+>/g, '').slice(0, 120) + '...';

    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
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

                {/* Category Badge (Optional - can be added if backend supports it) */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full shadow-sm">
                        Tech
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formattedDate}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        5 min read
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${blog._id}`}>
                        {blog.blogTitle}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {excerpt}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                            {blog.authorImage ? (
                                <Image
                                    src={blog.authorImage}
                                    alt="Author"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <User className="w-4 h-4" />
                                </div>
                            )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">Admin</span>
                    </div>

                    {/* Read More Link */}
                    <Link
                        href={`/blog/${blog._id}`}
                        className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
