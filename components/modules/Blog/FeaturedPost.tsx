import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface FeaturedPostProps {
    post: {
        id: string;
        slug: string;
        title: string;
        excerpt: string;
        image: string;
        category: string;
        author: {
            name: string;
            avatar?: string;
        };
        publishedAt: string;
        readTime: string;
    };
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
    return (
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-72 lg:h-full min-h-[300px] overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Featured
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                    {/* Category */}
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4 w-fit">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#703eff] group-hover:to-[#0254b9] transition-all duration-300 leading-tight">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        {/* Author */}
                        <div className="flex items-center gap-2">
                            {post.author.avatar ? (
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="w-8 h-8 bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-white" />
                                </div>
                            )}
                            <span className="font-medium text-gray-700">{post.author.name}</span>
                        </div>

                        <span className="text-gray-300">|</span>

                        {/* Date */}
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{post.publishedAt}</span>
                        </div>

                        <span className="text-gray-300">|</span>

                        {/* Read Time */}
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg shadow-[#0254b9]/30 hover:shadow-xl hover:-translate-y-1 w-fit group/btn"
                    >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
