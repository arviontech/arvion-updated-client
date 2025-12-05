'use client';

import Container from "@/components/shared/Container";
import { Search } from "lucide-react";
import { useState } from "react";

interface BlogHeroProps {
    onSearch?: (query: string) => void;
}

const BlogHero = ({ onSearch }: BlogHeroProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch) onSearch(searchQuery);
    };

    return (
        <section className="relative min-h-[50vh] pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-100/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <Container className="relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Blog</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                        Insights &{" "}
                        <span className="bg-gradient-to-r from-[#703eff] to-[#0254b9] bg-clip-text text-transparent">
                            Stories
                        </span>{" "}
                        from Our Team
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
                        Explore the latest trends in technology, design insights, development tips,
                        and industry best practices from our expert team.
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-xl mx-auto animate-fade-in animation-delay-500">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#703eff] to-[#0254b9] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden">
                                <div className="pl-5 text-gray-400">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search articles..."
                                    className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 m-2 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl rotate-12 opacity-20" />
                </div>
                <div className="absolute bottom-1/4 right-10 animate-float-delayed hidden lg:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-15" />
                </div>
            </Container>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default BlogHero;
