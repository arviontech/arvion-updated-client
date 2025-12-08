import { ServiceDetailData } from './types';

export const seoData: ServiceDetailData = {
    slug: 'seo-optimization',

    hero: {
        breadcrumb: 'SEO OPTIMIZATION',
        title: {
            line1: 'Dominate Search Rankings',
            highlight: 'Drive Organic Traffic',
            line2: 'with Data-Driven SEO Strategies'
        },
        description: 'We optimize your website for search engines using proven strategies that increase visibility, drive qualified traffic, and convert visitors into customers.',
        image: '/assets/services/SEO.jpg',
        imageAlt: 'SEO Optimization Strategy'
    },

    services: {
        badge: 'Our SEO Expertise',
        title: 'Comprehensive SEO Services',
        description: 'From technical optimization to content strategy, we cover every aspect of search engine optimization.',
        items: [
            {
                title: 'Technical SEO',
                description: 'Site speed optimization, mobile-friendliness, structured data, and crawlability improvements.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                )
            },
            {
                title: 'On-Page SEO',
                description: 'Keyword research, content optimization, meta tags, and internal linking strategies.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            },
            {
                title: 'Off-Page SEO',
                description: 'Link building, brand mentions, guest posting, and authority building campaigns.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                )
            },
            {
                title: 'Local SEO',
                description: 'Google Business Profile optimization, local citations, and geo-targeted content.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                )
            },
            {
                title: 'Content Strategy',
                description: 'SEO-driven content planning, topic clusters, and conversion-focused copywriting.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                )
            },
            {
                title: 'Analytics & Reporting',
                description: 'Google Analytics setup, rank tracking, and monthly performance reports with insights.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            }
        ]
    },

    industries: {
        badge: 'Empowering Every Sector',
        title: 'Making Real Impact With Industry-Specific Solutions',
        description: 'Tailored SEO strategies for diverse sectors',
        items: [
            {
                title: 'E-commerce',
                description: 'Product page optimization, category structure, and conversion-focused SEO.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Local Businesses',
                description: 'Google Business optimization and local search dominance strategies.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                )
            },
            {
                title: 'SaaS Companies',
                description: 'Feature-based content, comparison pages, and demo conversion optimization.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                )
            },
            {
                title: 'Healthcare',
                description: 'Medical content optimization with E-A-T focus and local patient acquisition.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Real Estate',
                description: 'Property listing optimization and neighborhood-focused content strategies.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                )
            },
            {
                title: 'Legal Services',
                description: 'Practice area content, case study optimization, and local attorney rankings.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                )
            },
            {
                title: 'Education',
                description: 'Course page optimization, student acquisition, and program visibility.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Hospitality',
                description: 'Hotel and restaurant visibility with booking-focused optimization.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'YOUR GO-TO TECH PARTNER',
        title: 'Why Team Up with Arvion Tech for SEO Success',
        subtitle: 'Our proven methodologies, transparent reporting, and commitment to ethical practices make us your strategic partner for sustainable organic growth.',
        features: [
            {
                title: 'Proven Track Record',
                description: 'We\'ve helped 100+ businesses achieve first-page rankings with measurable ROI. Our strategies are backed by real results and case studies.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                )
            },
            {
                title: 'White-Hat Techniques',
                description: 'We follow Google\'s guidelines strictly, using only ethical, sustainable SEO practices that protect your site from penalties and algorithm updates.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            },
            {
                title: 'Data-Driven Approach',
                description: 'Every decision is backed by data from Google Analytics, Search Console, and industry-leading SEO tools like Ahrefs and SEMrush.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            },
            {
                title: 'Transparent Reporting',
                description: 'Monthly reports with clear metrics: organic traffic, keyword rankings, backlink growth, and conversion tracking with actionable insights.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            },
            {
                title: 'Holistic Strategy',
                description: 'We don\'t just optimize for search engines—we optimize for users. Our approach combines technical SEO, content, and UX for maximum impact.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                )
            },
            {
                title: 'Ongoing Optimization',
                description: 'SEO is not set-and-forget. We continuously monitor, test, and refine strategies to adapt to algorithm changes and stay ahead of competitors.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'Our Process',
        title: 'Our SEO Process',
        description: 'A systematic approach to improving your search rankings and driving qualified organic traffic.',
        steps: [
            {
                step: 1,
                title: 'SEO Audit & Analysis',
                description: 'We conduct a comprehensive audit of your site\'s technical health, content, backlinks, and competitor landscape to identify opportunities.'
            },
            {
                step: 2,
                title: 'Keyword Research',
                description: 'We identify high-value keywords with strong search intent that align with your business goals and target audience.'
            },
            {
                step: 3,
                title: 'On-Page Optimization',
                description: 'We optimize your content, meta tags, headers, internal linking, and page structure for maximum relevance and crawlability.'
            },
            {
                step: 4,
                title: 'Technical SEO',
                description: 'We fix technical issues like site speed, mobile-friendliness, structured data, and crawl errors to improve search engine accessibility.'
            },
            {
                step: 5,
                title: 'Content & Link Building',
                description: 'We create SEO-optimized content and execute white-hat link building campaigns to build authority and trust.'
            },
            {
                step: 6,
                title: 'Monitor & Optimize',
                description: 'We track rankings, traffic, and conversions, continuously refining strategies based on performance data and algorithm updates.'
            }
        ]
    },

    faq: {
        badge: 'Common Questions',
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about our SEO optimization services.',
        questions: [
            {
                question: 'How long does it take to see SEO results?',
                answer: 'SEO is a long-term strategy. You\'ll typically see initial improvements in 3-4 months, with significant results in 6-12 months. The timeline depends on your industry competitiveness, current site health, and the scope of optimization needed.'
            },
            {
                question: 'What\'s the difference between on-page and off-page SEO?',
                answer: 'On-page SEO involves optimizing elements on your website (content, meta tags, site structure), while off-page SEO focuses on external factors like backlinks, brand mentions, and social signals that build your site\'s authority.'
            },
            {
                question: 'Do you guarantee first-page rankings?',
                answer: 'No reputable SEO agency can guarantee specific rankings, as search algorithms are constantly evolving. However, we guarantee to follow best practices, provide transparent reporting, and work diligently to improve your visibility and organic traffic.'
            },
            {
                question: 'How do you measure SEO success?',
                answer: 'We track multiple KPIs including organic traffic growth, keyword rankings, backlink quality, domain authority, conversion rates, and ROI. Monthly reports show progress across all metrics with actionable insights.'
            },
            {
                question: 'Will SEO work for my local business?',
                answer: 'Absolutely! Local SEO is highly effective for businesses serving specific geographic areas. We optimize your Google Business Profile, build local citations, and create location-specific content to help you dominate local search results.'
            },
            {
                question: 'What happens if I stop SEO services?',
                answer: 'SEO requires ongoing effort to maintain and improve rankings. If you stop, competitors will continue optimizing, algorithm updates may affect your site, and your rankings may gradually decline. We recommend continuous optimization for sustained results.'
            }
        ]
    }
};
