"use client";

import React, { useEffect, useState } from "react";
import {
  getAllTestimonials,
  Testimonial,
} from "@/services/testimonials/TestimonialService";
import Container from "@/components/shared/Container";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getAllTestimonials(1, 6);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (!loading && testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our partners
            have to say about their experience working with Arvion Tech.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
