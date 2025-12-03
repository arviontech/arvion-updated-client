

interface ProjectCardSkeletonProps {
    count?: number;
}

export default function ProjectCardLoadingSkeleton({ count = 3 }: ProjectCardSkeletonProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
                >
                    {/* Image Skeleton */}
                    <div className="relative h-64 bg-gray-200" />

                    {/* Content Skeleton */}
                    <div className="p-6">
                        {/* Title */}
                        <div className="h-7 bg-gray-200 rounded-lg w-3/4 mb-4" />

                        {/* Description */}
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-5/6" />
                            <div className="h-4 bg-gray-200 rounded w-4/6" />
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-8 w-8 bg-gray-200 rounded-lg" />
                            ))}
                        </div>

                        {/* Button */}
                        <div className="h-12 bg-gray-200 rounded-lg w-full" />
                    </div>
                </div>
            ))}
        </>
    );
}
