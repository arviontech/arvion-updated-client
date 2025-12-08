import { Metadata } from 'next';
import { generateSEOMetadata } from '@/services/navigation/NavigationService';
import Container from '@/components/shared/Container';
import PackagesClient from '@/components/modules/Packages/PackagesClient';

export const metadata: Metadata = generateSEOMetadata('packages');

export default function PackagesPage() {
    return (
        <section className="relative min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-blue-100/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-10 sm:top-20 -left-10 sm:-left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-400/10 rounded-full blur-3xl" />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>

            <Container className="relative">
                <PackagesClient />
            </Container>
        </section>
    );
}
