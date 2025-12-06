import React from 'react';

interface BlogCardLoadingSkeletonProps {
    count?: number;
}

const BlogCardLoadingSkeleton = ({ count = 3 }: BlogCardLoadingSkeletonProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                >
                    {/* Image Skeleton */}
                    <div className="relative aspect-video bg-gray-200 animate-pulse" />

                    {/* Content Skeleton */}
                    <div className="p-6 space-y-4">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4">
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Title */}
                        <div className="space-y-2">
                            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Excerpt */}
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Footer */}
                        <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogCardLoadingSkeleton;
