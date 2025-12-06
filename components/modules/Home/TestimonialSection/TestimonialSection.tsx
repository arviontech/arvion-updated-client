"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Quote, User } from 'lucide-react';
import { getAllTestimonials, Testimonial } from '@/services/testimonials/TestimonialService';
import Container from '@/components/shared/Container';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await getAllTestimonials(1, 6);
                setTestimonials(response.data);
            } catch (error) {
                console.error('Failed to fetch testimonials:', error);
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
        <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                        Testimonials
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                        What Our Clients <span className="text-blue-600">Say</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Don't just take our word for it. Here's what our partners have to say about their experience working with Arvion Tech.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial._id}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Quote className="w-6 h-6 fill-current" />
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "{testimonial.review}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                    {testimonial.image ? (
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            <User className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-blue-600 font-medium">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TestimonialSection;
