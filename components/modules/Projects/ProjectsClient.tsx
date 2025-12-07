/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import {
  Project,
  extractPlainText,
  getAllProjects,
} from "@/services/projects/ProjectService";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

// Project types for tab filter
const projectTypes = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "ui-ux", name: "UI/UX" },
  { id: "ecommerce", name: "E-Commerce" },
];

interface ProjectsClientProps {
  initialProjects: Project[];
  initialMeta: {
    total: number;
    totalPage: number;
    page: number;
    limit: number;
  };
}

export default function ProjectsClient({
  initialProjects,
  initialMeta,
}: ProjectsClientProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(initialMeta.page);
  const [totalPages, setTotalPages] = useState(initialMeta.totalPage);
  const [total, setTotal] = useState(initialMeta.total);
  const itemsPerPage = 10;

  // Fetch projects from API when page changes
  useEffect(() => {
    if (currentPage === 1 && projects === initialProjects) {
      return;
    }

    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllProjects(currentPage, itemsPerPage);
        setProjects(response.data);
        setTotalPages(response.meta.totalPage);
        setTotal(response.meta.total);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load projects"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage, projects, initialProjects]);

  // Filter projects by search and type
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      extractPlainText(project.description)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "all" ||
      project.title.toLowerCase().includes(selectedType) ||
      extractPlainText(project.description)
        .toLowerCase()
        .includes(selectedType);

    return matchesSearch && matchesType;
  });

  const handleFilterChange = (typeId: string) => {
    setSelectedType(typeId);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* All Filters in One Line */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Tabs - Left Side */}
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleFilterChange(type.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300"
              )}
              style={
                selectedType === type.id
                  ? {
                      backdropFilter: "blur(15px) saturate(180%)",
                      WebkitBackdropFilter: "blur(15px) saturate(180%)",
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                      boxShadow:
                        "0 4px 16px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
                      background:
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)",
                    }
                  : {
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      background: "rgba(255, 255, 255, 0.2)",
                    }
              }
            >
              <span
                className={cn(
                  "relative z-10",
                  selectedType === type.id
                    ? "bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent"
                    : "text-gray-700"
                )}
              >
                {type.name}
              </span>
            </button>
          ))}
        </div>

        {/* Search and View Toggle - Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#703eff]/20 focus:border-[#703eff] transition-all"
            />
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-white rounded-xl border border-gray-100 p-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <List className="w-4 h-4" />
              List
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-10 h-10 text-[#703eff] animate-spin" />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-16 bg-white rounded-2xl border border-red-100">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => setCurrentPage(1)}
            className="px-6 py-2 bg-[#703eff] text-white rounded-full hover:bg-[#5f2de0] transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

      {/* Grid View */}
      {!loading &&
        !error &&
        filteredProjects.length > 0 &&
        viewMode === "grid" && (
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        )}

      {/* List View */}
      {!loading &&
        !error &&
        filteredProjects.length > 0 &&
        viewMode === "list" && (
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        )}

      {/* Pagination */}
      {!loading && !error && filteredProjects.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl font-medium transition-all ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.max(totalPages, 1))
              )
            }
            disabled={currentPage >= Math.max(totalPages, 1)}
            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
