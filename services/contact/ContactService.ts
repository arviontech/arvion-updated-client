import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    budget?: string;
    message: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    try {
        await axios.post(`${API_BASE_URL}/contact`, data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to send message');
        }
        throw new Error('An unexpected error occurred');
    }
};
