import { ServiceDetailData } from './types';

export const uiUxData: ServiceDetailData = {
    slug: 'ui-ux-design',

    hero: {
        breadcrumb: 'UI/UX DESIGN',
        title: {
            line1: 'Crafting Intuitive',
            highlight: 'User-Centered Designs',
            line2: 'that Delight Users and Drive Business Growth'
        },
        description: 'We design beautiful, functional, and human-centric digital experiences. From wireframing to high-fidelity prototyping, we ensure every interaction is meaningful and every pixel serves a purpose.',
        image: '/assets/services/ui-ux.jpg',
        imageAlt: 'UI/UX Design Process'
    },

    industries: {
        badge: 'Empowering Every Sector',
        title: 'Making Real Impact With Industry-Specific Solutions',
        description: 'Tailored UI/UX design solutions for diverse sectors',
        items: [
            {
                title: 'SaaS Platforms',
                description: 'Intuitive dashboards and workflows for subscription-based software products.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                )
            },
            {
                title: 'E-commerce',
                description: 'Conversion-optimized product pages and checkout experiences that drive sales.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Fintech',
                description: 'Trust-building interfaces for banking, payments, and financial management tools.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Healthcare',
                description: 'Patient-centric designs for telemedicine, health records, and wellness apps.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Education',
                description: 'Engaging learning experiences with clear navigation and progress tracking.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Enterprise Software',
                description: 'Complex workflows simplified through thoughtful information architecture.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            },
            {
                title: 'Mobile Apps',
                description: 'Touch-optimized interfaces that feel natural on iOS and Android devices.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                )
            },
            {
                title: 'Marketing Websites',
                description: 'High-converting landing pages with compelling visual storytelling.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'YOUR TRUSTED TECH PARTNER',
        title: 'Choose Arvion for Your UI/UX Solutions',
        subtitle: 'Arvion is your trusted place for UI/UX solutions, bringing fresh designs, pro skills, and a focus on your goals.',
        features: [
            {
                title: 'User-Centered Design',
                description: 'We craft intuitive, scalable interfaces that enhance usability, boost conversions, and align tightly with your business objectives.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )
            },
            {
                title: 'Agile Prototyping',
                description: 'Rapid iteration cycles powered by stakeholder feedback and data-driven testing accelerate time to market without sacrificing quality.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Scalable Design Systems',
                description: 'Our modular UI frameworks adapt effortlessly to evolving product needs, ensuring consistency across platforms and devices.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                )
            },
            {
                title: 'Global Accessibility',
                description: 'We rigorously implement WCAG 2.1 and Section 508 standards to build inclusive, compliant, and multilingual experiences.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                )
            },
            {
                title: 'Data-Driven UX Optimization',
                description: 'Leveraging tools like Hotjar, Maze, and Crazy Egg, we analyze real user behavior to refine flows and maximize engagement.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            },
            {
                title: 'Advanced Toolset',
                description: 'Figma for collaboration and design systems and prototyping, InVision and Framer for high-fidelity mockups, plus design tokens for consistent styling.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'Our Process',
        title: 'Our Design Process',
        description: 'A user-centered approach to creating exceptional digital experiences that solve real problems.',
        steps: [
            {
                step: 1,
                title: 'Research & Discovery',
                description: 'We conduct user research, competitive analysis, and stakeholder interviews to understand your users\' needs and business goals.'
            },
            {
                step: 2,
                title: 'Information Architecture',
                description: 'We organize content and define user flows to create a logical, intuitive structure for your digital product.'
            },
            {
                step: 3,
                title: 'Wireframing & Prototyping',
                description: 'We create low and high-fidelity prototypes to validate concepts and gather feedback before visual design.'
            },
            {
                step: 4,
                title: 'Visual Design',
                description: 'We craft beautiful, on-brand interfaces with attention to typography, color, spacing, and visual hierarchy.'
            },
            {
                step: 5,
                title: 'Usability Testing',
                description: 'We test designs with real users to identify pain points and optimize the experience before development.'
            },
            {
                step: 6,
                title: 'Design Handoff & Support',
                description: 'We provide developers with detailed specs, assets, and ongoing support to ensure pixel-perfect implementation.'
            }
        ]
    },

    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions',
        description: 'Insights into our design process and how we can help your business grow.',
        questions: [
            {
                question: 'How will UI & UX consulting services help my product or service?',
                answer: 'Expert UI/UX consulting identifies friction points in your user journey, optimizes flows for better conversion, and ensures your product meets user needs effectively, directly impacting customer satisfaction and ROI.'
            },
            {
                question: 'How do I choose the best UI/UX consultancy service?',
                answer: 'Look for a partner with a proven portfolio, a clear user-centered methodology, and experience in your industry. They should prioritize data-driven decisions and transparent communication throughout the design process.'
            },
            {
                question: 'How do I choose the best UI/UX prototyping service?',
                answer: 'Select a service that offers rapid iteration, uses modern tools like Figma or Protopie, and provides interactive prototypes that closely mimic the final product for effective user testing and stakeholder buy-in.'
            },
            {
                question: 'Why does my business need a UX audit service?',
                answer: 'A UX audit reveals usability issues, accessibility gaps, and performance bottlenecks that may be hurting your retention rates. It provides actionable insights to improve your product\'s overall health and user experience.'
            },
            {
                question: 'How will your design system services align with our brand identity?',
                answer: 'We build design systems that are extensions of your brand. By codifying your visual language, typography, and components, we ensure consistency, scalability, and brand integrity across all your digital touchpoints.'
            }
        ]
    }
};
