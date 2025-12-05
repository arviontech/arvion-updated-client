'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, Project } from '@/services/projects/ProjectService';
import { ExternalLink, ArrowLeft, Calendar, AlertCircle, RefreshCw } from 'lucide-react';

interface ProjectDetailsContentProps {
    slug: string;
}

export default function ProjectDetailsContent({ slug }: ProjectDetailsContentProps) {
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);

    const fetchProject = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getProjectBySlug(slug);
            setProject(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load project');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [slug]);

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-white pt-24 pb-16">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button Skeleton */}
                    <div className="h-10 w-32 bg-gray-200 rounded-lg mb-8 animate-pulse" />

                    {/* Hero Section Skeleton */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="h-12 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
                            </div>
                            <div className="flex gap-4">
                                <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse" />
                                <div className="h-12 bg-gray-200 rounded-lg w-32 animate-pulse" />
                            </div>
                        </div>
                        <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
                    </div>

                    {/* Content Skeleton */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error || !project) {
        return (
            <div className="min-h-screen bg-white pt-24 pb-16">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                        <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-red-900 mb-2">
                            {error || 'Project Not Found'}
                        </h3>
                        <p className="text-red-700 mb-6">
                            {error ? 'Unable to load project details.' : 'The project you\'re looking for doesn\'t exist.'}
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
                                    onClick={fetchProject}
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
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Projects
                </button>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left: Project Info */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            {project.title}
                        </h1>

                        <div className="flex items-center gap-4 text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <div
                                        key={tech._id}
                                        className="group/tech relative"
                                    >
                                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-[#0254b9]/30 hover:-translate-y-1"
                            >
                                View Live Project
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Main Image */}
                    <div className="relative">
                        <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            {project.images && project.images.length > 0 ? (
                                <Image
                                    src={project.images[selectedImage]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-100 to-cyan-100">
                                    <span className="text-6xl font-bold text-blue-600">{project.title.charAt(0)}</span>
                                </div>
                            )}
                        </div>

                        {/* Image Thumbnails */}
                        {project.images && project.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-3 mt-4">
                                {project.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? 'border-blue-600 ring-2 ring-blue-200'
                                            : 'border-gray-200 hover:border-blue-400'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Description */}
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                </div>
            </div>
        </div>
    );
}
