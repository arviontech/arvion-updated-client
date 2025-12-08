import { ServiceDetailData } from './types';

export const webDevelopmentData: ServiceDetailData = {
    slug: 'web-development',

    hero: {
        breadcrumb: 'WEB DEVELOPMENT',
        title: {
            line1: 'Building',
            highlight: 'Modular Web Architectures',
            line2: 'for Scalable, Secure, and High-Performance Digital Platforms'
        },
        description: 'Our solutions are engineered for flexibility enabling seamless integration, rapid iteration, and sustained reliability to support evolving business needs and user expectations—making us a trusted Web Development Outsourcing Company for scalable digital growth.',
        image: '/assets/services/Web-development.jpg',
        imageAlt: 'Web Development Architecture'
    },

    standOut: {
        badge: 'Our Strengths',
        title: 'What Makes Us Stand Out',
        subtitle: 'We don\'t just write code; we build digital legacies. Here is why partnering with us is a game-changer.',
        items: [
            {
                title: 'Agile Methodology',
                description: 'We adapt to change rapidly, delivering value in iterative sprints to ensure your project evolves with your needs.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                )
            },
            {
                title: 'Transparent Communication',
                description: 'Stay in the loop with regular updates, open channels, and a dedicated project manager for your peace of mind.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )
            },
            {
                title: 'Top-Tier Talent',
                description: 'Work with the top 1% of developers, designers, and strategists who are passionate about crafting excellence.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                )
            },
            {
                title: 'Scalable Architecture',
                description: 'Future-proof your business with robust codebases designed to handle growth and high traffic effortlessly.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            }
        ]
    },

    industries: {
        badge: 'INDUSTRIES WE SERVE',
        title: 'Web Solutions Across Industries',
        description: 'Tailored web development for diverse sectors',
        items: [
            {
                title: 'E-commerce',
                description: 'Scalable online stores with seamless checkout flows and inventory management.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Edtech',
                description: 'Interactive learning management systems and virtual classroom solutions.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Healthtech',
                description: 'HIPAA-compliant telemedicine platforms and patient management systems.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Real Estate',
                description: 'Property listing portals with virtual tours and advanced search capabilities.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                )
            },
            {
                title: 'Hospitality',
                description: 'Booking engines and guest experience management platforms for hotels.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                )
            },
            {
                title: 'Fintech',
                description: 'Secure banking portals, payment gateways, and financial dashboards.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Manufacturing',
                description: 'Supply chain management tools and industrial IoT dashboards.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            },
            {
                title: 'Entertainment',
                description: 'Streaming platforms, event ticketing systems, and media portals.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'YOUR GO-TO TECH PARTNER',
        title: 'Why Team Up with Arvion Tech for Web Dev Domination',
        subtitle: 'Our obsession with precision, modern frameworks, and outcome-focused builds makes Arvion your strategic partner for future-ready web experiences that drive growth, resilience, and ROI.',
        features: [
            {
                title: 'Custom Web App Build',
                description: 'We build slick, custom-made web apps according to your business\'s unique needs, maxing out performance and user experience.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                )
            },
            {
                title: 'UX-Centric Web Design',
                description: 'From Figma to production, we craft pixel-perfect interfaces rooted in UX heuristics and behavioral data, driving retention, conversions, and intuitive navigation.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                )
            },
            {
                title: 'Tech Stack Agnostic',
                description: 'Our team is tech agnostic, choosing and building with right tech, for future-proof, scalable, modular and business oriented digital platforms.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            },
            {
                title: 'API Architecture and Integration',
                description: 'We engineer robust, RESTful or GraphQL APIs that connect your digital ecosystem, enabling frictionless data exchange, system orchestration, and service interoperability.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )
            },
            {
                title: 'SaaS Development',
                description: 'From MVPs to multi-tenant SaaS products, we deliver cloud-native, subscription-ready platforms with CI/CD pipelines, role-based access, and dynamic scalability baked in.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                )
            },
            {
                title: 'CMS Development',
                description: 'We deploy customizable CMS platforms (WordPress, Strapi, Contentful) tailored to your publishing flow — putting you in full control of updates, SEO, and multichannel delivery.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                )
            }
        ]
    },

    challenges: {
        badge: 'Solutions That Work',
        title: 'Common Business Challenges We Solve',
        description: 'We identify and eliminate the technical roadblocks standing between you and your business goals.',
        items: [
            {
                title: 'Outdated Websites Limiting Growth',
                description: 'Legacy systems that can\'t keep up with modern market demands or user expectations.',
                solution: 'We modernize your stack with scalable, future-proof technologies.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Low Conversion Rates',
                description: 'Poor user experience and checkout flows that cause customers to abandon their carts.',
                solution: 'We optimize UX/UI and streamline user journeys to boost conversions.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                )
            },
            {
                title: 'Security Vulnerabilities',
                description: 'Weak defenses that leave your business and customer data exposed to threats.',
                solution: 'We implement enterprise-grade security protocols and regular audits.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                )
            },
            {
                title: 'Lack of Scalability',
                description: 'Architectures that crash or slow down when traffic spikes or business grows.',
                solution: 'We build cloud-native solutions designed to scale effortlessly.',
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'How We Work',
        title: 'Our Development Process',
        description: 'A transparent, structured approach to bringing your vision to life, from concept to launch and beyond.',
        steps: [
            {
                step: 1,
                title: 'Discovery & Strategy',
                description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive roadmap.'
            },
            {
                step: 2,
                title: 'UI/UX Design',
                description: 'Our designers craft intuitive, high-fidelity prototypes that align with your brand and ensure a seamless user experience.'
            },
            {
                step: 3,
                title: 'Development',
                description: 'We build your solution using modern, scalable technologies, following clean code practices and agile methodologies.'
            },
            {
                step: 4,
                title: 'Testing & QA',
                description: 'Rigorous testing across devices and browsers ensures your application is bug-free, secure, and performance-optimized.'
            },
            {
                step: 5,
                title: 'Deployment & Launch',
                description: 'We handle the smooth deployment of your application to production, ensuring zero downtime and a successful launch.'
            },
            {
                step: 6,
                title: 'Maintenance & Support',
                description: 'Our partnership doesn\'t end at launch. We provide ongoing support, updates, and optimization to keep you ahead.'
            }
        ]
    },

    faq: {
        badge: 'Common Questions',
        title: 'Frequently Asked Questions',
        description: 'Got questions? We\'ve got answers. Here is what our clients usually ask.',
        questions: [
            {
                question: 'How long does it take to build a custom web application?',
                answer: 'The timeline varies based on complexity. A simple website might take 4-6 weeks, while a complex SaaS platform could take 3-6 months. We provide detailed timelines during our discovery phase.'
            },
            {
                question: 'What technologies do you specialize in?',
                answer: 'We are experts in modern stacks including React, Next.js, Node.js, Python/Django, and cloud platforms like AWS and Azure. We choose the best tech for your specific needs.'
            },
            {
                question: 'Do you provide post-launch support and maintenance?',
                answer: 'Yes, we offer comprehensive maintenance packages that include security updates, performance monitoring, and feature enhancements to keep your application running smoothly.'
            },
            {
                question: 'How do you ensure the security of my web application?',
                answer: 'Security is built-in from day one. We follow OWASP best practices, implement secure authentication, conduct regular code reviews, and perform penetration testing.'
            },
            {
                question: 'Can you help migrate our legacy system to a modern stack?',
                answer: 'Absolutely. We specialize in legacy modernization, carefully planning the migration to ensure data integrity and minimal downtime while upgrading your technology.'
            },
            {
                question: 'What is your pricing model?',
                answer: 'We offer flexible engagement models including fixed-price for well-defined projects and time-and-materials for evolving requirements. We\'ll help you choose the best fit.'
            }
        ]
    }
};
