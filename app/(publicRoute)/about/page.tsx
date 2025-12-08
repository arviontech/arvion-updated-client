import { Metadata } from 'next';
import { generateSEOMetadata } from '@/services/navigation/NavigationService';
import AboutServer from "@/components/modules/About/AboutServer";
import AboutClient from "@/components/modules/About/AboutClient";

export const metadata: Metadata = generateSEOMetadata('about');

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutServer />
            <AboutClient />
        </main>
    );
}
