import { ServiceDetailData } from './types';

export const aiMachineLearningData: ServiceDetailData = {
    slug: 'ai-machine-learning',

    hero: {
        breadcrumb: 'AI & MACHINE LEARNING',
        title: {
            line1: 'Intelligent Solutions',
            highlight: 'Powered by AI & ML',
            line2: 'to Automate, Predict, and Transform Your Business'
        },
        description: 'We build custom AI solutions including intelligent chatbots, RAG applications, predictive analytics, and machine learning models that drive efficiency and innovation.',
        image: '/assets/services/artificial-intelligence.jpg',
        imageAlt: 'AI & Machine Learning Solutions'
    },

    services: {
        badge: 'Our AI/ML Expertise',
        title: 'Comprehensive AI & ML Services',
        subtitle: 'From intelligent chatbots to predictive analytics, we build AI solutions that solve real business problems.',
        items: [
            {
                title: 'AI Chatbots',
                description: 'Intelligent conversational AI with natural language understanding, context awareness, and 24/7 customer support automation.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )
            },
            {
                title: 'RAG Applications',
                description: 'Retrieval-Augmented Generation systems that combine your knowledge base with LLMs for accurate, context-aware responses.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Predictive Analytics',
                description: 'Machine learning models that forecast trends, customer behavior, and business outcomes with high accuracy.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                )
            },
            {
                title: 'Computer Vision',
                description: 'Image and video analysis for object detection, facial recognition, quality control, and visual search.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                )
            },
            {
                title: 'NLP & Sentiment Analysis',
                description: 'Natural language processing for text classification, sentiment detection, and automated content moderation.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                )
            },
            {
                title: 'Recommendation Systems',
                description: 'Personalized product, content, and service recommendations using collaborative and content-based filtering.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                )
            }
        ]
    },

    industries: {
        badge: 'Empowering Every Sector',
        title: 'Making Real Impact With Industry-Specific Solutions',
        description: 'AI & ML solutions tailored to transform diverse industries',
        items: [
            {
                title: 'E-commerce',
                description: 'Product recommendations, dynamic pricing, and chatbot customer service.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Healthcare',
                description: 'Medical image analysis, patient risk prediction, and diagnostic assistance.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Finance',
                description: 'Fraud detection, algorithmic trading, and credit risk assessment.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Manufacturing',
                description: 'Predictive maintenance, quality control, and supply chain optimization.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            },
            {
                title: 'Marketing',
                description: 'Customer segmentation, churn prediction, and campaign optimization.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                )
            },
            {
                title: 'Customer Service',
                description: 'AI chatbots, ticket routing, and sentiment analysis for support teams.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )
            },
            {
                title: 'HR & Recruitment',
                description: 'Resume screening, candidate matching, and employee attrition prediction.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                )
            },
            {
                title: 'Real Estate',
                description: 'Property valuation, market trend analysis, and lead scoring.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'YOUR GO-TO TECH PARTNER',
        title: 'Why Team Up with Arvion Tech for AI & ML Innovation',
        subtitle: 'Our expertise in machine learning, deep learning, and AI engineering makes us your strategic partner for intelligent automation.',
        features: [
            {
                title: 'Custom AI Solutions',
                description: 'We don\'t use one-size-fits-all models. Every AI solution is custom-built for your specific use case, data, and business requirements.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                )
            },
            {
                title: 'Production-Ready Models',
                description: 'We deploy ML models that are optimized, scalable, and production-ready with monitoring, versioning, and continuous improvement.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                )
            },
            {
                title: 'Latest AI Technologies',
                description: 'We leverage cutting-edge frameworks like TensorFlow, PyTorch, LangChain, and OpenAI GPT to build state-of-the-art solutions.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Data Privacy & Security',
                description: 'Your data is encrypted, anonymized when needed, and handled with strict compliance to GDPR, HIPAA, and industry standards.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                )
            },
            {
                title: 'Explainable AI',
                description: 'We build transparent models with interpretability, so you understand how decisions are made and can trust the AI\'s recommendations.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            },
            {
                title: 'Continuous Learning',
                description: 'Our AI models improve over time with retraining pipelines, A/B testing, and feedback loops to maintain peak performance.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'How We Work',
        title: 'Our AI/ML Development Process',
        description: 'A systematic approach to building AI solutions that deliver measurable business value.',
        steps: [
            {
                step: 1,
                title: 'Problem Definition',
                description: 'We identify the business problem, define success metrics, and determine if AI/ML is the right solution for your needs.'
            },
            {
                step: 2,
                title: 'Data Collection & Preparation',
                description: 'We gather, clean, and prepare your data, ensuring quality and relevance for model training.'
            },
            {
                step: 3,
                title: 'Model Development',
                description: 'We experiment with different algorithms, train models, and optimize hyperparameters for best performance.'
            },
            {
                step: 4,
                title: 'Model Evaluation',
                description: 'We rigorously test models using validation sets, A/B testing, and real-world scenarios to ensure accuracy.'
            },
            {
                step: 5,
                title: 'Deployment & Integration',
                description: 'We deploy models to production with APIs, monitoring dashboards, and seamless integration into your systems.'
            },
            {
                step: 6,
                title: 'Monitoring & Improvement',
                description: 'We continuously monitor performance, retrain models with new data, and implement improvements based on feedback.'
            }
        ]
    },

    faq: {
        badge: 'Common Questions',
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about our AI & Machine Learning services.',
        questions: [
            {
                question: 'What\'s the difference between AI and Machine Learning?',
                answer: 'AI (Artificial Intelligence) is the broader concept of machines performing tasks intelligently. Machine Learning is a subset of AI where systems learn from data without explicit programming. Deep Learning is a further subset using neural networks.'
            },
            {
                question: 'How much data do I need for a machine learning project?',
                answer: 'It depends on the problem complexity. Simple models may work with hundreds of examples, while deep learning typically needs thousands to millions. We can also use transfer learning and data augmentation to work with smaller datasets.'
            },
            {
                question: 'Can you build a custom chatbot for my business?',
                answer: 'Absolutely! We build intelligent chatbots using GPT, LangChain, and RAG (Retrieval-Augmented Generation) that can answer questions from your knowledge base, handle customer support, and integrate with your existing systems.'
            },
            {
                question: 'What is a RAG application and why do I need it?',
                answer: 'RAG (Retrieval-Augmented Generation) combines your proprietary data with large language models to provide accurate, context-aware responses. It\'s perfect for customer support, internal knowledge bases, and document Q&A without hallucinations.'
            },
            {
                question: 'How long does it take to build an AI solution?',
                answer: 'Timelines vary based on complexity. A simple chatbot or classification model can take 4-8 weeks, while complex systems like recommendation engines or computer vision applications may take 3-6 months including data preparation and testing.'
            },
            {
                question: 'Will the AI model continue to improve over time?',
                answer: 'Yes! We implement continuous learning pipelines that retrain models with new data, monitor performance metrics, and make improvements based on real-world feedback to ensure your AI stays accurate and relevant.'
            }
        ]
    }
};
