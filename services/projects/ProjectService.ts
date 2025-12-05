import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface Technology {
    _id: string;
    name: string;
    category: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    _id: string;
    slug: string;
    title: string;
    description: string; // HTML content from text editor
    live: string;
    technologies: Technology[];
    images: string[];
    forSale: boolean;
    price?: number;
    originalPrice?: number;
    createdAt: string;
    updatedAt: string;
    links: {
        self: { href: string; method: string };
        update: { href: string; method: string };
        delete: { href: string; method: string };
    };
}

export interface ProjectsResponse {
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
    data: Project[];
}

export interface CreateProjectData {
    slug: string;
    title: string;
    description: string;
    live?: string;
    technologies: string[];
    forSale?: boolean;
}

/**
 * Get all projects with pagination
 */
export const getAllProjects = async (page: number = 1, limit: number = 10): Promise<ProjectsResponse> => {
    try {
        const response = await axios.get<ProjectsResponse>(
            `${API_BASE_URL}/projects`,
            {
                params: { page, limit }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch projects');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get projects for sale with pagination
 */
export const getProjectsForSale = async (page: number = 1, limit: number = 10): Promise<ProjectsResponse> => {
    try {
        const response = await axios.get<ProjectsResponse>(
            `${API_BASE_URL}/projects`,
            {
                params: { page, limit, forSale: true }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch projects for sale');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get a single project by slug
 */
export const getProjectBySlug = async (slug: string): Promise<Project> => {
    try {
        const response = await axios.get<{ data: Project }>(
            `${API_BASE_URL}/projects/${slug}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch project');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get a single project by ID
 */
export const getProjectById = async (id: string): Promise<Project> => {
    try {
        const response = await axios.get<{ data: Project }>(
            `${API_BASE_URL}/projects/${id}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch project');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create a new project
 */
export const createProject = async (data: CreateProjectData, images: File[]): Promise<Project> => {
    try {
        const formData = new FormData();

        // Append project data
        formData.append('slug', data.slug);
        formData.append('title', data.title);
        formData.append('description', data.description);
        if (data.live) formData.append('live', data.live);
        formData.append('forSale', String(data.forSale || false));

        // Append technologies as JSON string array
        data.technologies.forEach(tech => {
            formData.append('technologies', tech);
        });

        // Append images
        images.forEach(image => {
            formData.append('project-images', image);
        });

        const response = await axios.post<{ data: Project }>(
            `${API_BASE_URL}/projects`,
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
            throw new Error(error.response?.data?.message || 'Failed to create project');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update a project by ID
 */
export const updateProject = async (id: string, data: Partial<CreateProjectData>, images?: File[]): Promise<Project> => {
    try {
        const formData = new FormData();

        // Append updated project data
        if (data.title) formData.append('title', data.title);
        if (data.description) formData.append('description', data.description);
        if (data.live) formData.append('live', data.live);
        if (data.forSale !== undefined) formData.append('forSale', String(data.forSale));

        // Append technologies if provided
        if (data.technologies) {
            data.technologies.forEach(tech => {
                formData.append('technologies', tech);
            });
        }

        // Append new images if provided
        if (images && images.length > 0) {
            images.forEach(image => {
                formData.append('project-images', image);
            });
        }

        const response = await axios.patch<{ data: Project }>(
            `${API_BASE_URL}/projects/${id}`,
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
            throw new Error(error.response?.data?.message || 'Failed to update project');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete a project by ID
 */
export const deleteProject = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/projects/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete project');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get all available technologies/skills
 */
export const getAllSkills = async (): Promise<Technology[]> => {
    try {
        const response = await axios.get<{ data: Technology[] }>(
            `${API_BASE_URL}/skills`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch skills');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Extract plain text from HTML description (for preview)
 */
export const extractPlainText = (htmlContent: string, maxLength: number = 200): string => {
    // Remove HTML tags
    const text = htmlContent.replace(/<[^>]*>/g, ' ');
    // Remove extra whitespace
    const cleanText = text.replace(/\s+/g, ' ').trim();
    // Truncate if needed
    if (cleanText.length > maxLength) {
        return cleanText.substring(0, maxLength) + '...';
    }
    return cleanText;
};

/**
 * Generate slug from title
 */
export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};
