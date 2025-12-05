import Link from "next/link";
import { TrendingUp, Tag, Twitter, Linkedin, Facebook } from "lucide-react";

const popularPosts = [
    {
        id: '1',
        title: 'The Future of Web Development: Trends to Watch in 2024',
        slug: 'future-of-web-development-2024',
        views: '2.4k',
    },
    {
        id: '2',
        title: 'Building Design Systems for Scalable Products',
        slug: 'design-systems-scalable-products',
        views: '1.8k',
    },
    {
        id: '3',
        title: 'How AI is Transforming Business Operations',
        slug: 'ai-transforming-business-operations',
        views: '1.5k',
    },
    {
        id: '4',
        title: 'Advanced React Performance Optimization',
        slug: 'react-performance-optimization',
        views: '1.2k',
    },
];

const tags = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'UI/UX',
    'Design', 'AI', 'Machine Learning', 'Cloud', 'DevOps',
    'Node.js', 'Python', 'CSS', 'Tailwind'
];

const BlogSidebar = () => {
    return (
        <aside className="space-y-8">
            {/* Popular Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-[#703eff]" />
                    <h3 className="text-lg font-bold text-gray-900">Popular Posts</h3>
                </div>
                <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="flex gap-4 group"
                        >
                            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#703eff]/10 to-[#0254b9]/10 rounded-lg flex items-center justify-center text-sm font-bold text-[#703eff]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#703eff] transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-500 mt-1">{post.views} views</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                    <Tag className="w-5 h-5 text-[#703eff]" />
                    <h3 className="text-lg font-bold text-gray-900">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/blog/tag/${tag.toLowerCase().replace(/[/.\s]/g, '-')}`}
                            className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-full hover:bg-gradient-to-r hover:from-[#703eff] hover:to-[#0254b9] hover:text-white transition-all"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#703eff]/5 to-[#0254b9]/5 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-sm text-gray-600 mb-5">Stay connected for the latest updates</p>
                <div className="flex gap-3">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
logSidebar;
