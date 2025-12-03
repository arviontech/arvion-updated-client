'use client';

import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, Calendar } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    category: string;
    date: string;
    status: 'Published' | 'Draft' | 'Scheduled';
    views: number;
}

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([
        {
            id: 1,
            title: 'The Future of Web Development in 2024',
            excerpt: 'Explore the latest trends and technologies shaping the future of web development...',
            author: 'John Doe',
            category: 'Technology',
            date: '2024-11-15',
            status: 'Published',
            views: 1250
        },
        {
            id: 2,
            title: '10 Essential UI/UX Design Principles',
            excerpt: 'Learn the fundamental principles that every designer should know...',
            author: 'Jane Smith',
            category: 'Design',
            date: '2024-11-20',
            status: 'Published',
            views: 890
        },
        {
            id: 3,
            title: 'Building Scalable Cloud Applications',
            excerpt: 'A comprehensive guide to building applications that scale in the cloud...',
            author: 'Mike Johnson',
            category: 'Cloud',
            date: '2024-11-25',
            status: 'Draft',
            views: 0
        },
        {
            id: 4,
            title: 'SEO Best Practices for 2024',
            excerpt: 'Boost your search rankings with these proven SEO strategies...',
            author: 'Sarah Williams',
            category: 'Marketing',
            date: '2024-12-01',
            status: 'Scheduled',
            views: 0
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const statusColors = {
        'Published': 'bg-green-100 text-green-700',
        'Draft': 'bg-gray-100 text-gray-700',
        'Scheduled': 'bg-blue-100 text-blue-700'
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            setPosts(posts.filter(p => p.id !== id));
        }
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
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30"
                >
                    <Plus className="w-5 h-5" />
                    New Post
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Total Posts</p>
                    <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Published</p>
                    <p className="text-2xl font-bold text-green-600">
                        {posts.filter(p => p.status === 'Published').length}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Drafts</p>
                    <p className="text-2xl font-bold text-gray-600">
                        {posts.filter(p => p.status === 'Draft').length}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Total Views</p>
                    <p className="text-2xl font-bold text-blue-600">
                        {posts.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
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
                                    Title
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Author
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Views
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredPosts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-semibold text-gray-900">{post.title}</div>
                                            <div className="text-sm text-gray-500 mt-1 line-clamp-1">{post.excerpt}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-700">{post.author}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                            {post.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{post.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[post.status]}`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-gray-700">
                                            <Eye className="w-4 h-4" />
                                            <span className="text-sm font-medium">{post.views.toLocaleString()}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
