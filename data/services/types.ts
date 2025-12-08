import { ReactNode } from 'react';

// Base types for reusable components
export interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface Industry {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
    icon?: ReactNode;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Platform {
    name: string;
    description: string;
    icon: ReactNode;
}

export interface Challenge {
    title: string;
    description: string;
    solution: string;
    icon: ReactNode;
}

// Hero Section Data
export interface HeroData {
    breadcrumb: string; // e.g., "WEB DEVELOPMENT"
    title: {
        line1: string;
        highlight: string;
        line2: string;
    };
    description: string;
    image: string;
    imageAlt: string;
}

// Service-specific sections data
export interface ServiceSectionData {
    badge: string;
    title: string;
    subtitle?: string;
    description?: string;
    items: Feature[] | Platform[] | any[];
}

// Complete Service Page Data
export interface ServiceDetailData {
    slug: string;
    hero: HeroData;

    // Optional sections - only include if the service has them
    standOut?: ServiceSectionData;
    platforms?: ServiceSectionData;
    services?: ServiceSectionData;

    // Common sections (all services have these)
    industries: {
        badge: string;
        title: string;
        description: string;
        items: Industry[];
    };

    whyChooseUs: {
        badge: string;
        title: string;
        subtitle?: string;
        features: Feature[];
    };

    // Process section (most services have this)
    process?: {
        badge: string;
        title: string;
        description?: string;
        steps: ProcessStep[];
    };

    // Challenges section (only Web Dev has this)
    challenges?: {
        badge: string;
        title: string;
        description: string;
        items: Challenge[];
    };

    // FAQ section (all services have this)
    faq: {
        badge: string;
        title: string;
        description?: string;
        questions: FAQ[];
    };
}
