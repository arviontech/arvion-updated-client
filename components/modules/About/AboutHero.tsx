'use client';

import Container from "@/components/shared/Container";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const AboutHero = () => {
    return (
        <section className="relative min-h-[70vh] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <Container className="relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">About Us</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                        We Build the{" "}
                        <span className="bg-gradient-to-r from-[#703eff] to-[#0254b9] bg-clip-text text-transparent">
                            Future
                        </span>{" "}
                        of Digital Innovation
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
                        At Arvion Tech, we're passionate about transforming ideas into exceptional digital experiences.
                        Our team of experts combines creativity with cutting-edge technology to deliver solutions that drive growth.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-500">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg shadow-[#0254b9]/30 hover:shadow-xl hover:-translate-y-1"
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button className="inline-flex items-center gap-3 px-6 py-4 text-gray-700 font-semibold hover:text-blue-600 transition-colors group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                <Play className="w-5 h-5 text-blue-600 ml-1" />
                            </div>
                            Watch Our Story
                        </button>
                    </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl rotate-12 opacity-20" />
                </div>
                <div className="absolute bottom-1/4 right-10 animate-float-delayed hidden lg:block">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-15" />
                </div>
            </Container>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default AboutHero;
