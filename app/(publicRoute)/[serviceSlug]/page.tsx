import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateServiceSEOMetadata } from '@/services/navigation/NavigationService';
import WebDevelopmentPage from '@/components/modules/ServiceDetails/WebDevelopment/WebDevelopmentPage';
import AppDevelopmentPage from '@/components/modules/ServiceDetails/AppDevelopment/AppDevelopmentPage';
import UiUxPage from '@/components/modules/ServiceDetails/UiUx/UiUxPage';
import CloudSolutionsPage from '@/components/modules/ServiceDetails/CloudSolutions/CloudSolutionsPage';
import SeoPage from '@/components/modules/ServiceDetails/Seo/SeoPage';
import AiMachineLearningPage from '@/components/modules/ServiceDetails/AiMachineLearning/AiMachineLearningPage';

// Valid service slugs
const validServices = [
    'web-development',
    'app-development',
    'ui-ux-design',
    'cloud-solutions',
    'seo-optimization',
    'ai-machine-learning'
];

// Generate static params for SSG optimization
export async function generateStaticParams() {
    return validServices.map((serviceSlug) => ({
        serviceSlug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }): Promise<Metadata> {
    const { serviceSlug } = await params;

    if (!validServices.includes(serviceSlug)) {
        return {
            title: 'Service Not Found | Arvion Tech'
        };
    }

    return generateServiceSEOMetadata(serviceSlug);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ serviceSlug: string }> }) {
    const { serviceSlug } = await params;

    // Validate service slug
    if (!validServices.includes(serviceSlug)) {
        notFound();
    }

    // Render appropriate service component based on slug
    switch (serviceSlug) {
        case 'web-development':
            return <WebDevelopmentPage />;
        case 'app-development':
            return <AppDevelopmentPage />;
        case 'ui-ux-design':
            return <UiUxPage />;
        case 'cloud-solutions':
            return <CloudSolutionsPage />;
        case 'seo-optimization':
            return <SeoPage />;
        case 'ai-machine-learning':
            return <AiMachineLearningPage />;
        default:
            notFound();
    }
}
