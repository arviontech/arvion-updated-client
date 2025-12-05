'use client';

import BlogCard, { BlogPost } from "./BlogCard";
import { useState } from "react";

// Sample blog posts data
const samplePosts: BlogPost[] = [
    {
        id: '1',
        slug: 'future-of-web-development-2024',
        title: 'The Future of Web Development: Trends to Watch in 2024',
        excerpt: 'Explore the cutting-edge technologies and frameworks that are shaping the future of web development, from AI-powered tools to edge computing.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        category: 'Development',
        author: { name: 'Sarah Chen' },
        publishedAt: 'Dec 1, 2024',
        readTime: '8 min read',
    },
    {
        id: '2',
        slug: 'design-systems-scalable-products',
        title: 'Building Design Systems for Scalable Products',
        excerpt: 'Learn how to create and maintain design systems that scale with your product, ensuring consistency and efficiency across your team.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
        category: 'Design',
        author: { name: 'Michael Torres' },
        publishedAt: 'Nov 28, 2024',
        readTime: '6 min read',
    },
    {
        id: '3',
        slug: 'ai-transforming-business-operations',
        title: 'How AI is Transforming Business Operations',
        excerpt: 'Discover practical applications of artificial intelligence in modern businesses and how to implement AI solutions effectively.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        category: 'AI & ML',
        author: { name: 'Dr. Emily Watson' },
        publishedAt: 'Nov 25, 2024',
        readTime: '10 min read',
    },
    {
        id: '4',
        slug: 'react-performance-optimization',
        title: 'Advanced React Performance Optimization Techniques',
        excerpt: 'Master the art of building lightning-fast React applications with these proven performance optimization strategies.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        category: 'Development',
        author: { name: 'Alex Johnson' },
        publishedAt: 'Nov 22, 2024',
        readTime: '7 min read',
    },
    {
        id: '5',
        slug: 'ux-research-methods-startups',
        title: 'Essential UX Research Methods for Startups',
        excerpt: 'A comprehensive guide to conducting effective user research on a startup budget without compromising quality.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
        category: 'Design',
        author: { name: 'Lisa Park' },
        publishedAt: 'Nov 18, 2024',
        readTime: '5 min read',
    },
    {
        id: '6',
        slug: 'cloud-architecture-best-practices',
        title: 'Cloud Architecture Best Practices for 2024',
        excerpt: 'Navigate the complexities of cloud infrastructure with proven architectural patterns and cost optimization strategies.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        category: 'Technology',
        author: { name: 'David Kim' },
        publishedAt: 'Nov 15, 2024',
        readTime: '9 min read',
    },
];

interface BlogGridProps {
    category?: string;
}

const BlogGrid = ({ category = 'all' }: BlogGridProps) => {
    const [visiblePosts, setVisiblePosts] = useState(6);

    const filteredPosts = category === 'all'
        ? samplePosts
        : samplePosts.filter(post => post.category.toLowerCase().replace(' & ', '-').replace(' ', '-') === category);

    const displayedPosts = filteredPosts.slice(0, visiblePosts);
    const hasMore = visiblePosts < filteredPosts.length;

    const loadMore = () => {
        setVisiblePosts(prev => prev + 6);
    };

    return (
        <section className="py-12">
            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {/* Empty State */}
            {displayedPosts.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-600">Try selecting a different category</p>
                </div>
            )}

            {/* Load More Button */}
            {hasMore && (
                <div className="text-center mt-12">
                    <button
                        onClick={loadMore}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#703eff] border-2 border-[#703eff] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#703eff] hover:to-[#0254b9] hover:text-white hover:border-transparent transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        Load More Articles
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default BlogGrid;
