'use client';

import { useState } from "react";

const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'design', name: 'Design', count: 5 },
    { id: 'development', name: 'Development', count: 6 },
    { id: 'business', name: 'Business', count: 3 },
    { id: 'ai-ml', name: 'AI & ML', count: 2 },
];

interface BlogCategoriesProps {
    onCategoryChange?: (category: string) => void;
}

const BlogCategories = ({ onCategoryChange }: BlogCategoriesProps) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        if (onCategoryChange) onCategoryChange(categoryId);
    };

    return (
        <div className="py-6">
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`
                            px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                            ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg shadow-[#0254b9]/30'
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                            }
                        `}
                    >
                        {category.name}
                        <span className={`ml-2 text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-400'}`}>
                            ({category.count})
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogCategories;
