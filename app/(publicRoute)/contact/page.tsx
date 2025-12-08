import { Metadata } from 'next';
import { generateSEOMetadata } from '@/services/navigation/NavigationService';
import ContactServer from '@/components/modules/Contact/ContactServer';
import ContactClient from '@/components/modules/Contact/ContactClient';

export const metadata: Metadata = generateSEOMetadata('contact');

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactServer />
            <ContactClient />
        </main>
    );
}
