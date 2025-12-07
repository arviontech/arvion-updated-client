import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface Subscription {
    _id?: string;
    email: string;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface SubscriptionResponse {
    success: boolean;
    message: string;
    data: Subscription;
}

export interface SubscriptionsResponse {
    success: boolean;
    message: string;
    data: Subscription[];
}

/**
 * Subscribe to newsletter
 */
export const subscribe = async (email: string): Promise<Subscription> => {
    try {
        const response = await axios.post<SubscriptionResponse>(
            `${API_BASE_URL}/subscriptions`,
            { email }
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to subscribe');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get all subscriptions
 */
export const getAllSubscriptions = async (): Promise<Subscription[]> => {
    try {
        const response = await axios.get<SubscriptionsResponse>(
            `${API_BASE_URL}/subscriptions`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch subscriptions');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete subscription
 */
export const deleteSubscription = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/subscriptions/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete subscription');
        }
        throw new Error('An unexpected error occurred');
    }
};
