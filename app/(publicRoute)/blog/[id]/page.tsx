import BlogDetailsContent from '@/components/modules/BlogDetails/BlogDetailsContent';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return <BlogDetailsContent id={id} />;
}
