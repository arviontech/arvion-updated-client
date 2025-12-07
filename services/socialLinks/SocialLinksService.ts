import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface SocialLink {
    _id?: string;
    platform: string;
    url: string;
    icon: string;
    isActive: boolean;
    order: number;
}

export interface SocialLinksResponse {
    success: boolean;
    message: string;
    data: SocialLink[];
}

/**
 * Get all active social links
 */
export const getAllSocialLinks = async (): Promise<SocialLink[]> => {
    try {
        const response = await axios.get<SocialLinksResponse>(
            `${API_BASE_URL}/social-links`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch social links');
        }
        throw new Error('An unexpected error occurred');
    }
};
