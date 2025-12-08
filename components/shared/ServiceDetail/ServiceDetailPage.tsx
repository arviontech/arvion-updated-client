'use client';

import { ServiceDetailData } from '@/data/services/types';
import HeroSection from './HeroSection';
import FeatureGridSection from './FeatureGridSection';
import IndustrySolutionsSection from './IndustrySolutionsSection';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQSection';
import ChallengesSection from './ChallengesSection';

interface Props {
    data: ServiceDetailData;
}

export default function ServiceDetailPage({ data }: Props) {
    return (
        <main className="bg-white">
            {/* Hero Section - Always present */}
            <HeroSection data={data.hero} />

            {/* Stand Out Section - Optional */}
            {data.standOut && (
                <FeatureGridSection
                    data={data.standOut}
                    columns={4}
                />
            )}

            {/* Platforms Section - Optional (for App Development) */}
            {data.platforms && (
                <FeatureGridSection
                    data={data.platforms}
                    columns={3}
                />
            )}

            {/* Services Section - Optional (for Cloud, SEO, AI/ML) */}
            {data.services && (
                <FeatureGridSection
                    data={data.services}
                    columns={3}
                />
            )}

            {/* Industry Solutions Section - Always present */}
            <IndustrySolutionsSection data={data.industries} />

            {/* Why Choose Us Section - Always present */}
            <FeatureGridSection
                data={{
                    badge: data.whyChooseUs.badge,
                    title: data.whyChooseUs.title,
                    subtitle: data.whyChooseUs.subtitle,
                    items: data.whyChooseUs.features
                }}
                columns={3}
            />

            {/* Challenges Section - Optional (Web Development has this) */}
            {data.challenges && (
                <ChallengesSection data={data.challenges} />
            )}

            {/* Process Section - Optional (most services have this) */}
            {data.process && (
                <ProcessSection data={data.process} />
            )}

            {/* FAQ Section - Always present */}
            <FAQSection data={data.faq} />
        </main>
    );
}
