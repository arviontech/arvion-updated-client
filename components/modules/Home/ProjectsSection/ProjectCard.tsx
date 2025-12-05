import Image from 'next/image';
import Link from 'next/link';
import { Project, extractPlainText } from '@/services/projects/ProjectService';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    // Extract plain text from HTML description for preview
    const descriptionPreview = extractPlainText(project.description, 150);

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                {project.images && project.images.length > 0 ? (
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-100 to-cyan-100">
                        <span className="text-4xl font-bold text-blue-600">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project.title}
                </h3>

                {/* Description Preview */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {descriptionPreview}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech) => (
                        <div
                            key={tech._id}
                            className="group/tech relative"
                            title={tech.name}
                        >
                            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors border border-gray-200">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                    {project.technologies.length > 6 && (
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm border border-blue-200">
                            +{project.technologies.length - 6}
                        </div>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                    <Link
                        href={`/project/${project.slug}`}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-[#0254b9]/30 hover:-translate-y-1"
                    >
                        View Details
                    </Link>
                    <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-white text-[#703eff] font-semibold rounded-full border-2 border-[#703eff] hover:bg-gradient-to-r hover:from-[#703eff] hover:to-[#0254b9] hover:text-white hover:border-transparent transition-all"
                        title="View Live Project"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
