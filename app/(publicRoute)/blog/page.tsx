import { Metadata } from 'next';
import { generateSEOMetadata } from '@/services/navigation/NavigationService';
import Container from '@/components/shared/Container';
import BlogClient from '@/components/modules/Blog/BlogClient';
import { getAllBlogs, type Blog } from '@/services/blogs/BlogService';

export const metadata: Metadata = generateSEOMetadata('blog');

export default async function BlogPage() {
    let initialBlogs: Blog[] = [];
    let initialMeta = {
        total: 0,
        totalPage: 1,
        page: 1,
        limit: 12
    };

    try {
        const response = await getAllBlogs(1, 12);
        initialBlogs = response.data;
        initialMeta = response.meta;
    } catch (error) {
        console.error('Failed to fetch initial blogs:', error);
    }

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <Container>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-[#703eff] rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#703eff] uppercase tracking-wide">Our Blog</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#703eff] to-[#0254b9]">Insights</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest web development trends, tutorials, and insights from our experts.
                    </p>
                </div>

                <BlogClient
                    initialBlogs={initialBlogs}
                    initialMeta={initialMeta}
                />
            </Container>
        </main>
    );
}
