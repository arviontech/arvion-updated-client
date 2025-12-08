import Container from '@/components/shared/Container';
import ServiceCard from './ServiceCard';
import GlassmorphismButton from '@/components/shared/GlassmorphismButton';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            slug: 'web-development',
            description: 'Build modern, scalable, and high-performance web applications tailored to your business needs.',
            image: '/assets/services/Web-development.jpg',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
        },
        {
            id: 2,
            title: 'App Development',
            slug: 'app-development',
            description: 'Create stunning mobile applications for iOS and Android with seamless user experiences.',
            image: '/assets/services/app-development.jpg',
            features: ['Cross-Platform', 'Native Performance', 'User-Centric']
        },
        {
            id: 3,
            title: 'UI/UX Design',
            slug: 'ui-ux-design',
            description: 'Design beautiful and intuitive interfaces that delight users and drive engagement.',
            image: '/assets/services/ui-ux.jpg',
            features: ['User Research', 'Prototyping', 'Design Systems']
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            slug: 'cloud-solutions',
            description: 'Deploy and manage your applications on secure, scalable cloud infrastructure.',
            image: '/assets/services/Cloud.jpg',
            features: ['AWS & Azure', 'Auto-Scaling', 'High Availability']
        },
        {
            id: 5,
            title: 'SEO Optimization',
            slug: 'seo-optimization',
            description: 'Boost your online visibility and drive organic traffic with expert SEO strategies.',
            image: '/assets/services/SEO.jpg',
            features: ['Keyword Research', 'On-Page SEO', 'Analytics']
        },
        {
            id: 6,
            title: 'AI & Machine Learning',
            slug: 'ai-machine-learning',
            description: 'Leverage cutting-edge AI and ML technologies to automate and innovate your business.',
            image: '/assets/services/artificial-intelligence.jpg',
            features: ['Predictive Analytics', 'Automation', 'Smart Solutions']
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What We <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Offer</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions to transform your business and drive growth
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 lg:mt-16">
                    <p className="text-gray-600 mb-6 text-lg">Need a custom solution?</p>
                    <GlassmorphismButton
                        href="/contact"
                        size="lg"
                        rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        className="hover:scale-105"
                    >
                        Get in Touch
                    </GlassmorphismButton>
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection;
