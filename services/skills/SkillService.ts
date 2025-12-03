import { API_BASE_URL } from '@/nextConfig';
import axios from 'axios';

export const Skill_Category = {
    Web: 'Web',
    Mobile: 'Mobile',
    DevOps: 'DevOps',
    Database: 'Database',
    Cloud: 'Cloud',
    Tools: 'Tools',
    Other: 'Other',
} as const;

export type SkillCategory = keyof typeof Skill_Category;

export interface Skill {
    _id: string;
    name: string;
    category: SkillCategory;
    icon: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateSkillData {
    name: string;
    category: SkillCategory;
}

class SkillService {
    /**
     * Get all skills with optional category filter
     */
    async getAllSkills(category?: string): Promise<Skill[]> {
        try {
            const response = await axios.get<{ data: Skill[] }>(
                `${API_BASE_URL}/skills`,
                {
                    params: { category }
                }
            );
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Failed to fetch skills');
            }
            throw new Error('An unexpected error occurred');
        }
    }

    /**
     * Create a new skill
     */
    async createSkill(data: CreateSkillData, icon: File): Promise<Skill> {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('category', data.category);
            formData.append('icon', icon);

            const response = await axios.post<{ data: Skill }>(
                `${API_BASE_URL}/skills`,
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
                throw new Error(error.response?.data?.message || 'Failed to create skill');
            }
            throw new Error('An unexpected error occurred');
        }
    }

    /**
     * Delete a skill by ID
     */
    async deleteSkill(id: string): Promise<void> {
        try {
            await axios.delete(`${API_BASE_URL}/skills/${id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Failed to delete skill');
            }
            throw new Error('An unexpected error occurred');
        }
    }
}

export const skillService = new SkillService();
