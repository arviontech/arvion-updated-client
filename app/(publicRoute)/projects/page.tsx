import { Metadata } from 'next';
import { generateSEOMetadata } from '@/services/navigation/NavigationService';
import Container from '@/components/shared/Container';
import ProjectsClient from '@/components/modules/Projects/ProjectsClient';
import { getAllProjects, type Project } from '@/services/projects/ProjectService';

export const metadata: Metadata = generateSEOMetadata('projects');

export default async function ProjectsPage() {
    let initialProjects: Project[] = [];
    let initialMeta = {
        total: 0,
        totalPage: 1,
        page: 1,
        limit: 10
    };

    try {
        const response = await getAllProjects(1, 10);
        initialProjects = response.data;
        initialMeta = response.meta;
    } catch (error) {
        console.error('Failed to fetch initial projects:', error);
    }

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <Container>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-[#703eff] rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#703eff] uppercase tracking-wide">Our Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#703eff] to-[#0254b9]">Projects</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our portfolio of successful web development projects, mobile applications, and digital solutions that have helped businesses grow.
                    </p>
                </div>

                <ProjectsClient
                    initialProjects={initialProjects}
                    initialMeta={initialMeta}
                />
            </Container>
        </main>
    );
}
