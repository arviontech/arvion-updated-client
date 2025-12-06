import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface Blog {
    _id: string;
    blogTitle: string;
    content: string;
    blogImage: string[];
    authorImage?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBlogData {
    blogTitle: string;
    content: string;
    blogImage?: File[];
    authorImage?: string;
}

export interface CreateBlogData {
    blogTitle: string;
    content: string;
    blogImage?: File[];
    authorImage?: string;
}

export interface BlogResponse {
    statusCode: number;
    success: boolean;
    message: string;
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
    data: Blog[];
}

/**
 * Get all blogs
 */
export const getAllBlogs = async (page: number = 1, limit: number = 10): Promise<BlogResponse> => {
    try {
        const response = await axios.get<BlogResponse>(
            `${API_BASE_URL}/blogs`,
            {
                params: { page, limit }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get a single blog by ID
 */
export const getBlogById = async (id: string): Promise<Blog> => {
    try {
        const response = await axios.get<{ data: Blog }>(
            `${API_BASE_URL}/blogs/${id}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch blog');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create a new blog
 */
export const createBlog = async (data: CreateBlogData): Promise<Blog> => {
    try {
        const formData = new FormData();
        formData.append('blogTitle', data.blogTitle);
        formData.append('content', data.content);

        if (data.blogImage && data.blogImage.length > 0) {
            data.blogImage.forEach((file) => {
                formData.append('blogImage', file);
            });
        }

        const response = await axios.post<{ data: Blog }>(
            `${API_BASE_URL}/blogs`,
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
            throw new Error(error.response?.data?.message || 'Failed to create blog');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update a blog by ID
 */
export const updateBlog = async (id: string, data: Partial<CreateBlogData>): Promise<Blog> => {
    try {
        const formData = new FormData();
        if (data.blogTitle) formData.append('blogTitle', data.blogTitle);
        if (data.content) formData.append('content', data.content);

        if (data.blogImage && data.blogImage.length > 0) {
            data.blogImage.forEach((file) => {
                formData.append('blogImage', file);
            });
        }

        const response = await axios.patch<{ data: Blog }>(
            `${API_BASE_URL}/blogs/${id}`,
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
            throw new Error(error.response?.data?.message || 'Failed to update blog');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete a blog by ID
 */
export const deleteBlog = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/blogs/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete blog');
        }
        throw new Error('An unexpected error occurred');
    }
};
