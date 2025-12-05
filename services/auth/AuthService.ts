import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        user: {
            email: string;
            message: string;
        };
    };
}

/**
 * Login user - cookies are set automatically by backend
 */
export const login = async (data: LoginData): Promise<AuthResponse> => {
    try {
        const response = await axios.post<AuthResponse>(
            `${API_BASE_URL}/auth/signin`,
            data,
            {
                withCredentials: true, // Important: allows cookies to be set
            }
        );

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Logout user - clears cookies on backend
 */
export const logout = async (): Promise<void> => {
    try {
        await axios.post(
            `${API_BASE_URL}/auth/logout`,
            {},
            {
                withCredentials: true,
            }
        );
    } catch (error) {
        console.error('Logout error:', error);
        // Even if backend fails, we should redirect
    }
};

/**
 * Check if user is authenticated by checking if cookies exist
 * This is a client-side check only
 */
export const isAuthenticated = (): boolean => {
    // In browser, check if cookies exist
    if (typeof document !== 'undefined') {
        return document.cookie.includes('accessToken');
    }
    return false;
};
