/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/shared/Container";
import Image from "next/image";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllTeams, TeamMember } from "@/services/team/TeamService";

const TeamSection = () => {
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 5000)
        );

        const response = (await Promise.race([
          getAllTeams(1, 100),
          timeoutPromise,
        ])) as any;

        setTeams(response.data);
      } catch (error) {
        console.error("Teams API not available or timed out:", error);
        // Set empty array as fallback
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <div className="h-8 w-32 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-2xl h-96 animate-pulse"
              />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-blue-600">Experts</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate team of innovators, designers, and developers dedicated
            to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teams.length > 0 ? (
            teams.map((member) => (
              <div
                key={member._id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white/30" />
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links - visible on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Social links removed - not supported by backend */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">
                    {member.role}
                  </p>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors pointer-events-none" />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Team information will be available soon.
              </p>
            </div>
          )}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Want to join our team?
              </h3>
              <p className="text-gray-600">
                We&apos;re always looking for talented individuals
              </p>
            </div>
            <a
              href="#careers"
              className="px-6 py-3 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg whitespace-nowrap"
            >
              View Openings
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
