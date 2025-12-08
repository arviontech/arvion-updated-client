import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateServiceSEOMetadata } from '@/services/navigation/NavigationService';
import { getServiceData, getAllServiceSlugs } from '@/data/services';
import ServiceDetailPage from '@/components/shared/ServiceDetail/ServiceDetailPage';

// Generate static params for SSG optimization
export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((serviceSlug) => ({
        serviceSlug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }): Promise<Metadata> {
    const { serviceSlug } = await params;
    const serviceData = getServiceData(serviceSlug);

    if (!serviceData) {
        return {
            title: 'Service Not Found | Arvion Tech'
        };
    }

    return generateServiceSEOMetadata(serviceSlug);
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
    const { serviceSlug } = await params;
    const serviceData = getServiceData(serviceSlug);

    // If service data doesn't exist, show 404
    if (!serviceData) {
        notFound();
    }

    // Render the dynamic service detail page with the appropriate data
    return <ServiceDetailPage data={serviceData} />;
}
