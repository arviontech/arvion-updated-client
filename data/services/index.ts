import { webDevelopmentData } from './webDevelopmentData';
import { appDevelopmentData } from './appDevelopmentData';
import { cloudSolutionsData } from './cloudSolutionsData';
import { uiUxData } from './uiUxData';
import { seoData } from './seoData';
import { aiMachineLearningData } from './aiMachineLearningData';
import { ServiceDetailData } from './types';

// Service data registry
export const servicesData: Record<string, ServiceDetailData> = {
    'web-development': webDevelopmentData,
    'app-development': appDevelopmentData,
    'cloud-solutions': cloudSolutionsData,
    'ui-ux-design': uiUxData,
    'seo-optimization': seoData,
    'ai-machine-learning': aiMachineLearningData,
};

// Type for service slugs
export type ServiceSlug = keyof typeof servicesData;

// Helper to get service data
export function getServiceData(slug: string): ServiceDetailData | null {
    return servicesData[slug] || null;
}

// Helper to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
    return Object.keys(servicesData);
}

// Export types
export * from './types';
