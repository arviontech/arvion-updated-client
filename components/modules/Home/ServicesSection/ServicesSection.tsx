import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';

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
        <section className="relative py-16 lg:py-24 bg-linear-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What We <span className="text-blue-600">Offer</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions to transform your business and drive growth
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            href={`/${service.slug}`}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Service Number Badge */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-sm font-bold text-blue-600">0{service.id}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn More
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors pointer-events-none" />
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 lg:mt-16">
                    <p className="text-gray-600 mb-4">Need a custom solution?</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
                        Get in Touch
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection;
