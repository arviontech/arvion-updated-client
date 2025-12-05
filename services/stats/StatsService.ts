import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface DashboardStats {
    totalProjects: number;
    totalUsers: number;
    totalSkills: number;
    // totalBlogs: number; // Add when backend supports it
    // revenue: number; // Add when backend supports it
}

/**
 * Get dashboard statistics
 */
export const getDashboardStats = async (): Promise<DashboardStats> => {
    try {
        const response = await axios.get<{ data: DashboardStats }>(
            `${API_BASE_URL}/stats`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch dashboard stats');
        }
        throw new Error('An unexpected error occurred');
    }
};
