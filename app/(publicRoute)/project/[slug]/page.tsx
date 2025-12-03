import ProjectDetailsContent from '@/components/modules/ProjectDetails/ProjectDetailsContent';

// Valid project slugs will be validated dynamically
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return <ProjectDetailsContent slug={slug} />;
}
