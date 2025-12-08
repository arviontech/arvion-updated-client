"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, Project } from "@/services/projects/ProjectService";
import {
  ExternalLink,
  ArrowLeft,
  Calendar,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/shared/Container";
import GlassmorphismButton from "@/components/shared/GlassmorphismButton";

interface ProjectDetailsContentProps {
  slug: string;
}

export default function ProjectDetailsContent({
  slug,
}: ProjectDetailsContentProps) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const fetchProject = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjectBySlug(slug);
      setProject(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load project");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-white to-violet-500/5" />
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back Button Skeleton */}
          <div className="h-8 sm:h-9 md:h-10 w-32 sm:w-36 md:w-40 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full mb-6 sm:mb-8 animate-pulse" />

          {/* Hero Section Skeleton */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="h-8 sm:h-9 md:h-10 w-36 sm:w-40 md:w-48 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full animate-pulse" />
              <div className="h-10 sm:h-12 md:h-14 lg:h-16 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-lg w-full sm:w-5/6 md:w-3/4 animate-pulse" />
              <div className="h-8 sm:h-9 md:h-10 w-32 sm:w-36 md:w-40 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-lg animate-pulse" />
              <div className="space-y-3 sm:space-y-4">
                <div className="h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-cyan-50 to-violet-50 border border-cyan-200/50 rounded-full animate-pulse" />
                <div className="flex gap-2 sm:gap-2.5 lg:gap-3 flex-wrap">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 sm:h-9 md:h-10 w-20 sm:w-22 md:w-24 bg-white/50 backdrop-blur-sm border border-gray-200/60 rounded-lg sm:rounded-xl animate-pulse"
                    />
                  ))}
                </div>
              </div>
              <div className="h-11 sm:h-12 md:h-14 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 rounded-full w-44 sm:w-48 md:w-52 animate-pulse" />
            </div>
            <div className="h-48 sm:h-56 md:h-72 lg:h-[400px] bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl animate-pulse order-first lg:order-last" />
          </div>

          {/* Content Skeleton */}
          <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-3 sm:space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-3 sm:h-3.5 md:h-4 bg-gray-300/30 rounded w-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-white to-orange-500/5" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/60 backdrop-blur-sm border border-red-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full mb-4 sm:mb-5 md:mb-6">
              <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-2 sm:mb-3">
              {error || "Project Not Found"}
            </h3>
            <p className="text-red-700 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg">
              {error
                ? "Unable to load project details."
                : "The project you're looking for doesn't exist."}
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <GlassmorphismButton
                as="button"
                onClick={() => router.back()}
                variant="secondary"
                size="sm"
                leftIcon={<ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                className="hover:scale-105"
              >
                Go Back
              </GlassmorphismButton>
              {error && (
                <GlassmorphismButton
                  as="button"
                  onClick={fetchProject}
                  variant="primary"
                  size="sm"
                  leftIcon={<RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  className="hover:scale-105"
                >
                  Try Again
                </GlassmorphismButton>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-white to-violet-500/5" />
      </div>

      <Container>
        {/* Back Button */}
        <GlassmorphismButton
          as="button"
          onClick={() => router.back()}
          variant="secondary"
          size="sm"
          leftIcon={<ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          className="mb-6 sm:mb-8 hover:scale-105 relative z-10"
        >
          Back to Projects
        </GlassmorphismButton>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Left: Project Info */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 w-fit">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Project Showcase
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/40 backdrop-blur-sm rounded-lg border border-gray-200/50 text-gray-700 w-fit shadow-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                {new Date(project.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>

            {/* Technologies */}
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-cyan-50 to-violet-50 rounded-full border border-cyan-200/50 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech._id}
                    className="group relative"
                    style={{
                      backdropFilter: 'blur(10px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                    }}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 bg-white/50 rounded-lg sm:rounded-xl border border-gray-200/60 hover:border-cyan-400 hover:bg-white/70 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="object-contain sm:w-5 sm:h-5"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <GlassmorphismButton
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                rightIcon={<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="hover:scale-105"
              >
                View Live Project
              </GlassmorphismButton>
            </div>
          </div>

          {/* Right: Main Image */}
          <div className="relative order-first lg:order-last">
            <div
              className="relative h-48 sm:h-56 md:h-72 lg:h-[400px] xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50"
              style={{
                backdropFilter: 'blur(10px) saturate(180%)',
                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
              }}
            >
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[selectedImage]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-100 to-violet-100">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-12 sm:h-16 md:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all shadow-sm hover:shadow-md ${
                      selectedImage === index
                        ? "border-cyan-500 ring-2 ring-cyan-200 shadow-lg"
                        : "border-gray-200 hover:border-cyan-300 bg-white/50"
                    }`}
                    style={{
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)',
                    }}
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
        <div className="relative mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
          {/* Background decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 rounded-2xl sm:rounded-3xl" />

          <div className="relative bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-3 sm:mb-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Project Details
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Project <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Overview</span>
              </h2>
            </div>

            {/* Description Content */}
            <div
              className="prose prose-sm max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-3 prose-headings:mt-6 sm:prose-headings:mb-4 sm:prose-headings:mt-8
                prose-h1:text-xl prose-h1:sm:text-2xl prose-h1:lg:text-3xl
                prose-h2:text-lg prose-h2:sm:text-xl prose-h2:lg:text-2xl
                prose-h3:text-base prose-h3:sm:text-lg prose-h3:lg:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-5 lg:prose-p:mb-6 prose-p:text-xs
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
                prose-ul:space-y-1.5 prose-ul:my-4 sm:prose-ul:space-y-2 sm:prose-ul:my-5 lg:prose-ul:my-6
                prose-ol:space-y-1.5 prose-ol:my-4 sm:prose-ol:space-y-2 sm:prose-ol:my-5 lg:prose-ol:my-6
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-xs
                prose-li:marker:text-cyan-500
                prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-gray-50/50 prose-blockquote:py-2 prose-blockquote:px-3 sm:prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-xs
                prose-code:text-violet-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 sm:prose-code:px-2 sm:prose-code:py-1 prose-code:rounded prose-code:text-xs
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-3 sm:prose-pre:rounded-xl sm:prose-pre:p-4 prose-pre:text-xs
                prose-img:rounded-lg prose-img:shadow-lg sm:prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
