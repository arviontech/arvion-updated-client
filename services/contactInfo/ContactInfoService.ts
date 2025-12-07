import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface ContactInfo {
    _id?: string;
    email: string;
    phone: string;
    address: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ContactInfoResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: ContactInfo;
}

/**
 * Get contact info
 */
export const getContactInfo = async (): Promise<ContactInfo | null> => {
    try {
        const response = await axios.get<ContactInfoResponse>(
            `${API_BASE_URL}/contact-info`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch contact info');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create contact info
 */
export const createContactInfo = async (data: Omit<ContactInfo, '_id'>): Promise<ContactInfo> => {
    try {
        const response = await axios.post<ContactInfoResponse>(
            `${API_BASE_URL}/contact-info`,
            data
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to create contact info');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update contact info
 */
export const updateContactInfo = async (id: string, data: Partial<ContactInfo>): Promise<ContactInfo> => {
    try {
        const response = await axios.patch<ContactInfoResponse>(
            `${API_BASE_URL}/contact-info/${id}`,
            data
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to update contact info');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete contact info
 */
export const deleteContactInfo = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/contact-info/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete contact info');
        }
        throw new Error('An unexpected error occurred');
    }
};
