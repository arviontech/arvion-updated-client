import { ServiceDetailData } from './types';

export const appDevelopmentData: ServiceDetailData = {
    slug: 'app-development',

    hero: {
        breadcrumb: 'APP DEVELOPMENT',
        title: {
            line1: 'Transforming Ideas into',
            highlight: 'Powerful Mobile Experiences',
            line2: 'for iOS, Android, and Cross-Platform Success'
        },
        description: 'We build feature-rich, high-performance mobile applications that engage users and drive business growth. From native iOS and Android apps to versatile cross-platform solutions, we deliver excellence on every screen.',
        image: '/assets/services/app-development.jpg',
        imageAlt: 'Mobile App Development'
    },

    platforms: {
        badge: 'Our Expertise',
        title: 'Comprehensive Mobile Solutions',
        subtitle: 'Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we have the expertise to deliver.',
        items: [
            {
                title: 'Native iOS Development',
                description: 'We craft premium iOS applications using Swift and SwiftUI that deliver exceptional performance and leverage the full power of the Apple ecosystem.',
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.06.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.08-1.53z" />
                    </svg>
                ),
                features: ['Swift & SwiftUI', 'iOS SDK', 'App Store Optimization']
            },
            {
                title: 'Native Android Development',
                description: 'Our Android experts build robust, scalable apps using Kotlin and Jetpack Compose that run smoothly across the fragmented Android device landscape.',
                icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.0745 13.8533 7.5 12 7.5s-3.5902.5745-5.1364 1.4501L4.8413 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                    </svg>
                ),
                features: ['Kotlin & Java', 'Jetpack Compose', 'Material Design']
            },
            {
                title: 'Cross-Platform Solutions',
                description: 'We develop versatile apps using React Native and Flutter that offer near-native performance while reducing development time and cost.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                ),
                features: ['React Native', 'Flutter', 'Single Codebase']
            }
        ]
    },

    industries: {
        badge: 'Empowering Every Sector',
        title: 'Making Real Impact With Industry-Specific Solutions',
        description: 'Tailored mobile app solutions for diverse sectors',
        items: [
            {
                title: 'Social Media',
                description: 'Engaging social platforms with real-time messaging, feeds, and community features.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                )
            },
            {
                title: 'E-commerce',
                description: 'Mobile shopping experiences with secure payments and seamless checkout flows.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Healthtech',
                description: 'HIPAA-compliant health apps for telemedicine, fitness tracking, and patient care.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Fintech',
                description: 'Secure banking apps, digital wallets, and investment platforms with encryption.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'On-Demand Services',
                description: 'Uber-like apps for ride-sharing, food delivery, and service marketplaces.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Education',
                description: 'Interactive learning apps with video streaming, quizzes, and progress tracking.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Entertainment',
                description: 'Streaming apps, gaming platforms, and media content delivery systems.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Travel & Hospitality',
                description: 'Booking apps for hotels, flights, and travel experiences with itinerary management.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'Why Choose Arvion',
        title: 'Your Partner for Mobile Excellence',
        subtitle: 'We combine technical expertise with creative innovation to build mobile apps that stand out in the crowded app store marketplace.',
        features: [
            {
                title: 'Performance-First Approach',
                description: 'We optimize every line of code to ensure your app runs smoothly, loads instantly, and consumes minimal battery and data.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Intuitive UX/UI Design',
                description: 'We design mobile-first interfaces that are not just visually stunning but also intuitive, ensuring high user retention and engagement.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )
            },
            {
                title: 'Scalable Architecture',
                description: 'Our apps are built to grow with your user base, handling millions of users without compromising performance or security.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            },
            {
                title: 'Robust Security',
                description: 'We implement enterprise-grade security measures, including data encryption and secure authentication, to protect your users\' data.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            },
            {
                title: 'Seamless Integration',
                description: 'We ensure your mobile app integrates perfectly with your existing backend systems, APIs, and third-party services.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                )
            },
            {
                title: 'Post-Launch Support',
                description: 'Our commitment extends beyond launch. We provide ongoing maintenance, updates, and analytics to ensure long-term success.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'Our Process',
        title: 'Our Mobile Development Process',
        description: 'A proven, streamlined workflow designed to take your mobile app from concept to the top of the charts.',
        steps: [
            {
                step: 1,
                title: 'Discovery & Strategy',
                description: 'We analyze your app idea, target audience, and market competition to define a winning mobile strategy.'
            },
            {
                step: 2,
                title: 'UI/UX Design',
                description: 'We create intuitive wireframes and stunning visual designs that adhere to iOS Human Interface and Material Design guidelines.'
            },
            {
                step: 3,
                title: 'App Development',
                description: 'Our developers write clean, efficient code using the latest technologies to bring your mobile app to life.'
            },
            {
                step: 4,
                title: 'Testing & QA',
                description: 'We perform rigorous testing on real devices to ensure your app is bug-free, responsive, and performs well under load.'
            },
            {
                step: 5,
                title: 'App Store Launch',
                description: 'We handle the complex submission process for the Apple App Store and Google Play Store, ensuring compliance and approval.'
            },
            {
                step: 6,
                title: 'Maintenance & Growth',
                description: 'We monitor app performance, fix issues, and release updates to keep your users engaged and your app competitive.'
            }
        ]
    },

    faq: {
        badge: 'Common Questions',
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about our mobile app development services.',
        questions: [
            {
                question: 'Do you build apps for both iOS and Android?',
                answer: 'Yes, we specialize in both native development (Swift for iOS, Kotlin for Android) and cross-platform solutions (React Native, Flutter) to reach users on all devices.'
            },
            {
                question: 'How long does it take to develop a mobile app?',
                answer: 'A simple app can take 3-4 months, while more complex applications with custom backends and advanced features may take 6-9 months or more. We provide a detailed timeline after the discovery phase.'
            },
            {
                question: 'Will you help upload the app to the App Store and Play Store?',
                answer: 'Absolutely. We handle the entire submission process, including preparing assets, descriptions, and ensuring compliance with Apple and Google guidelines for a smooth approval.'
            },
            {
                question: 'Do you provide maintenance after the app is launched?',
                answer: 'Yes, we offer ongoing maintenance and support packages to ensure your app stays compatible with new OS versions, remains secure, and continues to perform optimally.'
            },
            {
                question: 'Who owns the code after the project is complete?',
                answer: 'You do. Once the project is completed and paid for, you have full ownership of the source code and all intellectual property rights.'
            },
            {
                question: 'Can you update an existing mobile app?',
                answer: 'Yes, we can take over existing codebases to fix bugs, improve performance, add new features, or completely refactor the app with modern technologies.'
            }
        ]
    }
};
