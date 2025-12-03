import { notFound } from 'next/navigation';
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

// Service metadata for SEO
const serviceMetadata: Record<string, { title: string; description: string }> = {
    'web-development': {
        title: 'Web Development Services | Arvion Tech',
        description: 'Build modern, scalable, and high-performance web applications with Arvion Tech. Expert web development services for your business.'
    },
    'app-development': {
        title: 'App Development Services | Arvion Tech',
        description: 'Create stunning mobile applications for iOS and Android with seamless user experiences.'
    },
    'ui-ux-design': {
        title: 'UI/UX Design Services | Arvion Tech',
        description: 'Design beautiful and intuitive interfaces that delight users and drive engagement.'
    },
    'cloud-solutions': {
        title: 'Cloud Solutions | Arvion Tech',
        description: 'Deploy and manage your applications on secure, scalable cloud infrastructure.'
    },
    'seo-optimization': {
        title: 'SEO Optimization Services | Arvion Tech',
        description: 'Boost your online visibility and drive organic traffic with expert SEO strategies.'
    },
    'ai-machine-learning': {
        title: 'AI & Machine Learning Services | Arvion Tech',
        description: 'Leverage cutting-edge AI and ML technologies to automate and innovate your business.'
    }
};

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }) {
    const { serviceSlug } = await params;

    if (!validServices.includes(serviceSlug)) {
        return {
            title: 'Service Not Found | Arvion Tech'
        };
    }

    return serviceMetadata[serviceSlug];
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
