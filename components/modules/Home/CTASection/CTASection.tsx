import Image from 'next/image';
import { Code2, Users, ArrowRight } from 'lucide-react';
import Container from '@/components/shared/Container';

const CTASection = () => {
    const services = [
        {
            icon: <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: 'Product Development',
            description: 'We transform your vision into actionable tech solutions. From concept to launch and beyond, we deliver disciplined execution with agile processes and full transparency.',
            offerings: [
                'MVP Development',
                'Integrated Business Automation',
                'End-End Tailored Software Development'
            ]
        },
        {
            icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
            title: 'Team Extension',
            description: 'Tight deadlines, shifting scopes, rapid scaling—we offer team augmentation by embedding engineers who speak your stack, move at your speed, and align with your culture.',
            offerings: [
                'Dedicated Development Team',
                'Staff Augmentation',
                'Technical Consulting'
            ]
        }
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/bg-blue-wave.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-blue-900/80 to-slate-900/85" />
            </div>

            {/* Content */}
            <Container className="relative">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                            Let&apos;s Create Something Extraordinary!
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-4">
                        Building Tomorrow&apos;s Solutions,{' '}
                        <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">Today</span>
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                        At Arvion Tech, we deliver reliable solutions to complex problems with global expertise and hands-on care, wherever you are.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Service Card */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/20 rounded-xl mb-4 sm:mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 sm:mb-8">
                                    {service.description}
                                </p>

                                {/* Offerings List */}
                                <div className="space-y-3">
                                    {service.offerings.map((offering, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group/item cursor-pointer"
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover/item:translate-x-1 transition-transform shrink-0" />
                                            <span className="text-sm sm:text-base font-medium">{offering}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-400/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 sm:mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white rounded-full font-semibold text-base sm:text-lg transition-all shadow-2xl shadow-[#0254b9]/30 hover:shadow-[#0254b9]/40 hover:scale-105"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;
