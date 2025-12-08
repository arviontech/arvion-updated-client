import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface Package {
    _id: string;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    color: string;
    order?: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreatePackageData {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    color: string;
    order?: number;
}

/**
 * Get all packages
 */
export const getAllPackages = async (): Promise<Package[]> => {
    try {
        const response = await axios.get<{ data: Package[] }>(`${API_BASE_URL}/packages`);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch packages');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get a single package by ID
 */
export const getPackageById = async (id: string): Promise<Package> => {
    try {
        const response = await axios.get<{ data: Package }>(`${API_BASE_URL}/packages/${id}`);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch package');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create a new package
 */
export const createPackage = async (data: CreatePackageData): Promise<Package> => {
    try {
        const response = await axios.post<{ data: Package }>(
            `${API_BASE_URL}/packages`, 
            data,
            { withCredentials: true }
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to create package');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update a package by ID
 */
export const updatePackage = async (id: string, data: Partial<CreatePackageData>): Promise<Package> => {
    try {
        const response = await axios.put<{ data: Package }>(
            `${API_BASE_URL}/packages/${id}`, 
            data,
            { withCredentials: true }
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to update package');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete a package by ID
 */
export const deletePackage = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/packages/${id}`, { withCredentials: true });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete package');
        }
        throw new Error('An unexpected error occurred');
    }
};
