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

export interface PackageResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: Package | Package[];
}

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
};

export const getAllPackages = async (): Promise<Package[]> => {
    try {
        const response = await axios.get<PackageResponse>(`${API_BASE_URL}/packages`);
        return Array.isArray(response.data.data) ? response.data.data : [];
    } catch (error) {
        console.error('Error fetching packages:', error);
        return [];
    }
};

export const getPackageById = async (id: string): Promise<Package | null> => {
    try {
        const response = await axios.get<PackageResponse>(`${API_BASE_URL}/packages/${id}`);
        return response.data.data as Package;
    } catch (error) {
        console.error('Error fetching package:', error);
        return null;
    }
};

export const createPackage = async (packageData: CreatePackageData): Promise<Package | null> => {
    try {
        const response = await axios.post<PackageResponse>(
            `${API_BASE_URL}/packages`,
            packageData,
            { headers: getAuthHeaders() }
        );
        return response.data.data as Package;
    } catch (error) {
        console.error('Error creating package:', error);
        throw error;
    }
};

export const updatePackage = async (id: string, packageData: Partial<CreatePackageData>): Promise<Package | null> => {
    try {
        const response = await axios.put<PackageResponse>(
            `${API_BASE_URL}/packages/${id}`,
            packageData,
            { headers: getAuthHeaders() }
        );
        return response.data.data as Package;
    } catch (error) {
        console.error('Error updating package:', error);
        throw error;
    }
};

export const deletePackage = async (id: string): Promise<boolean> => {
    try {
        await axios.delete(`${API_BASE_URL}/packages/${id}`, {
            headers: getAuthHeaders()
        });
        return true;
    } catch (error) {
        console.error('Error deleting package:', error);
        return false;
    }
};
