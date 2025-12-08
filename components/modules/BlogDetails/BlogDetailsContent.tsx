"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getBlogById, Blog } from "@/services/blogs/BlogService";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/shared/Container";

interface BlogDetailsContentProps {
  id: string;
}

export default function BlogDetailsContent({ id }: BlogDetailsContentProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogById(id);
      setBlog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blog post");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button Skeleton */}
          <div className="h-10 w-32 bg-gray-200 rounded-lg mb-8 animate-pulse" />

          {/* Header Skeleton */}
          <div className="space-y-6 mb-12">
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex gap-6">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="aspect-video w-full bg-gray-200 rounded-2xl mb-12 animate-pulse" />

          {/* Content Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded w-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">
              {error || "Blog Post Not Found"}
            </h3>
            <p className="text-red-700 mb-6">
              {error
                ? "Unable to load blog details."
                : "The article you're looking for doesn't exist."}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              {error && (
                <button
                  onClick={fetchBlog}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white py-32">
      <Container>
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
            <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">
              Technology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.blogTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-100 pb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                {blog.authorImage ? (
                  <Image
                    src={blog.authorImage}
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">Author</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200 hidden sm:block" />

            {/* Date */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-50 rounded-full text-gray-500">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Published</p>
                <p className="text-xs text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200 hidden sm:block" />

            {/* Read Time */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-50 rounded-full text-gray-500">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Read Time</p>
                <p className="text-xs text-gray-500">5 min read</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        {blog.blogImage && blog.blogImage.length > 0 && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src={blog.blogImage[0]}
              alt={blog.blogTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </Container>
    </article>
  );
}
