import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface Testimonial {
    _id: string;
    name: string;
    title: string;
    review: string;
    image: string;
    date: string;
    createdAt: string;
    updatedAt: string;
}

export interface TestimonialResponse {
    statusCode: number;
    success: boolean;
    message: string;
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
        links: {
            self: string;
            first: string;
            last: string;
            next?: string;
            prev?: string;
        };
    };
    data: Testimonial[];
}

/**
 * Get all testimonials
 */
export const getAllTestimonials = async (page: number = 1, limit: number = 10): Promise<TestimonialResponse> => {
    try {
        const response = await axios.get<TestimonialResponse>(
            `${API_BASE_URL}/testimonials`,
            {
                params: { page, limit }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch testimonials');
        }
        throw new Error('An unexpected error occurred');
    }
};

export interface CreateTestimonialData {
    name: string;
    title: string;
    review: string;
    date: string;
}

/**
 * Get a single testimonial by ID
 */
export const getTestimonialById = async (id: string): Promise<Testimonial> => {
    try {
        const response = await axios.get<{ data: Testimonial }>(
            `${API_BASE_URL}/testimonials/${id}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch testimonial');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create a new testimonial
 */
export const createTestimonial = async (data: CreateTestimonialData, image: File): Promise<Testimonial> => {
    try {
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('title', data.title);
        formData.append('review', data.review);
        formData.append('date', data.date);
        formData.append('testimonialImage', image);

        const response = await axios.post<{ data: Testimonial }>(
            `${API_BASE_URL}/testimonials`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to create testimonial');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update a testimonial by ID
 */
export const updateTestimonial = async (id: string, data: Partial<CreateTestimonialData>, image?: File): Promise<Testimonial> => {
    try {
        const formData = new FormData();

        if (data.name) formData.append('name', data.name);
        if (data.title) formData.append('title', data.title);
        if (data.review) formData.append('review', data.review);
        if (data.date) formData.append('date', data.date);
        if (image) formData.append('testimonialImage', image);

        const response = await axios.patch<{ data: Testimonial }>(
            `${API_BASE_URL}/testimonials/${id}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to update testimonial');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete a testimonial by ID
 */
export const deleteTestimonial = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/testimonials/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete testimonial');
        }
        throw new Error('An unexpected error occurred');
    }
};
