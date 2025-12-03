export default function Loading() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Skeleton */}
            <div className="relative pt-24 pb-16 bg-linear-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb skeleton */}
                    <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-6" />

                    {/* Title skeleton */}
                    <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>

            {/* Content Sections Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                {/* Section 1 */}
                <div className="space-y-4">
                    <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-48 bg-gray-200 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                    <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                    <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-56 bg-gray-200 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
