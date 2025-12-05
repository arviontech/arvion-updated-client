'use client';

import Container from "@/components/shared/Container";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail, Calendar } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <Container className="relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <MessageCircle className="w-4 h-4 text-blue-200" />
                        <span className="text-sm font-semibold text-blue-100 uppercase tracking-wide">Let's Talk</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Start Your{" "}
                        <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                            Digital Journey?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how we can help transform your ideas into reality.
                        Get a free consultation with our experts today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                        >
                            <Mail className="w-5 h-5" />
                            Get in Touch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#meeting"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a Meeting
                        </Link>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="text-2xl font-bold text-white mb-1">24/7</div>
                            <p className="text-blue-100 text-sm">Support Available</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="text-2xl font-bold text-white mb-1">1 Hour</div>
                            <p className="text-blue-100 text-sm">Response Time</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="text-2xl font-bold text-white mb-1">Free</div>
                            <p className="text-blue-100 text-sm">Initial Consultation</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;
