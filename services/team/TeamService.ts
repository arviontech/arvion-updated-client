import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export interface TeamMember {
    _id: string;
    name: string;
    role: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    links: {
        self: { href: string; method: string };
        update: { href: string; method: string };
        delete: { href: string; method: string };
    };
}

export interface TeamResponse {
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
    data: TeamMember[];
}

export interface CreateTeamData {
    name: string;
    role: string;
}

/**
 * Get all team members with pagination
 */
export const getAllTeams = async (page: number = 1, limit: number = 10): Promise<TeamResponse> => {
    try {
        const response = await axios.get<TeamResponse>(
            `${API_BASE_URL}/teams`,
            {
                params: { page, limit }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch team members');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Get a single team member by ID
 */
export const getTeamById = async (id: string): Promise<TeamMember> => {
    try {
        const response = await axios.get<{ data: TeamMember }>(
            `${API_BASE_URL}/teams/${id}`
        );
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch team member');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Create a new team member
 */
export const createTeam = async (data: CreateTeamData, image: File): Promise<TeamMember> => {
    try {
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('role', data.role);
        formData.append('team-images', image);

        const response = await axios.post<{ data: TeamMember }>(
            `${API_BASE_URL}/teams`,
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
            throw new Error(error.response?.data?.message || 'Failed to create team member');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Update a team member by ID
 */
export const updateTeam = async (id: string, data: Partial<CreateTeamData>, image?: File): Promise<TeamMember> => {
    try {
        const formData = new FormData();

        if (data.name) formData.append('name', data.name);
        if (data.role) formData.append('role', data.role);
        if (image) formData.append('team-images', image);

        const response = await axios.patch<{ data: TeamMember }>(
            `${API_BASE_URL}/teams/${id}`,
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
            throw new Error(error.response?.data?.message || 'Failed to update team member');
        }
        throw new Error('An unexpected error occurred');
    }
};

/**
 * Delete a team member by ID
 */
export const deleteTeam = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/teams/${id}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to delete team member');
        }
        throw new Error('An unexpected error occurred');
    }
};
