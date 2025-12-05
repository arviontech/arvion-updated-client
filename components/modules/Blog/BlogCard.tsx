import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, User } from "lucide-react";

export interface BlogPost {
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
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
                        {post.category}
                    </span>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-[#703eff]" />
                </div>
            </Link>

            {/* Content */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#703eff] group-hover:to-[#0254b9] transition-all duration-300 line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {post.author.avatar ? (
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-9 h-9 bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                        </div>
                    )}
                    <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                        <p className="text-xs text-gray-500">Author</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
