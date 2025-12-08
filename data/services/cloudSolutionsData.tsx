import { ServiceDetailData } from './types';

export const cloudSolutionsData: ServiceDetailData = {
    slug: 'cloud-solutions',

    hero: {
        breadcrumb: 'CLOUD SOLUTIONS',
        title: {
            line1: 'Scalable, Secure',
            highlight: 'Cloud Infrastructure',
            line2: 'for Modern Businesses Ready to Scale'
        },
        description: 'We architect, deploy, and manage cloud solutions on AWS, Azure, and Google Cloud that reduce costs, improve performance, and enable your business to scale effortlessly.',
        image: '/assets/services/Cloud.jpg',
        imageAlt: 'Cloud Solutions Architecture'
    },

    services: {
        badge: 'Our Cloud Expertise',
        title: 'Comprehensive Cloud Services',
        description: 'From migration to optimization, we handle every aspect of your cloud journey.',
        items: [
            {
                title: 'Cloud Migration',
                description: 'Seamlessly migrate your applications and data to AWS, Azure, or Google Cloud with zero downtime.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                )
            },
            {
                title: 'Infrastructure as Code',
                description: 'Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistency.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                )
            },
            {
                title: 'DevOps & CI/CD',
                description: 'Implement automated pipelines with Jenkins, GitLab CI, and GitHub Actions for rapid deployment.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                )
            },
            {
                title: 'Containerization',
                description: 'Deploy scalable applications with Docker and Kubernetes for efficient resource utilization.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                )
            },
            {
                title: 'Serverless Architecture',
                description: 'Build cost-effective applications with AWS Lambda, Azure Functions, and Google Cloud Functions.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Cloud Security',
                description: 'Implement robust security with IAM, encryption, VPCs, and compliance monitoring.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            }
        ]
    },

    industries: {
        badge: 'Empowering Every Sector',
        title: 'Making Real Impact With Industry-Specific Solutions',
        description: '',
        items: [
            {
                title: 'SaaS Companies',
                description: 'Multi-tenant cloud infrastructure with auto-scaling and global distribution.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                )
            },
            {
                title: 'E-commerce',
                description: 'High-availability infrastructure for peak traffic handling and fast checkout.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                )
            },
            {
                title: 'Healthcare',
                description: 'HIPAA-compliant cloud solutions with data encryption and audit trails.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )
            },
            {
                title: 'Fintech',
                description: 'PCI-DSS compliant infrastructure with real-time transaction processing.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Media & Entertainment',
                description: 'CDN-powered content delivery for streaming and large file distribution.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Education',
                description: 'Scalable learning platforms with video streaming and real-time collaboration.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'IoT & Manufacturing',
                description: 'Edge computing and data pipelines for real-time device monitoring.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            },
            {
                title: 'Startups',
                description: 'Cost-optimized infrastructure that scales with your growth trajectory.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            }
        ]
    },

    whyChooseUs: {
        badge: 'YOUR GO-TO TECH PARTNER',
        title: 'Why Team Up with Arvion Tech for Cloud Excellence',
        subtitle: 'Our cloud expertise, automation-first approach, and commitment to security make us your strategic partner for cloud transformation.',
        features: [
            {
                title: 'Multi-Cloud Expertise',
                description: 'Certified architects with deep expertise in AWS, Azure, and Google Cloud Platform, ensuring you choose the right platform for your needs.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                )
            },
            {
                title: 'Cost Optimization',
                description: 'We analyze your cloud spend and implement strategies to reduce costs by 30-50% through right-sizing, reserved instances, and automation.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Security First',
                description: 'We implement defense-in-depth strategies with encryption, IAM policies, network segmentation, and continuous compliance monitoring.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            },
            {
                title: 'Auto-Scaling Infrastructure',
                description: 'We design elastic architectures that automatically scale resources up or down based on demand, ensuring optimal performance and cost.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                )
            },
            {
                title: '24/7 Monitoring & Support',
                description: 'Proactive monitoring with CloudWatch, Azure Monitor, and Stackdriver, plus round-the-clock support to ensure uptime and rapid incident response.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Disaster Recovery',
                description: 'We implement backup strategies, failover mechanisms, and multi-region deployments to ensure business continuity and data protection.',
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                )
            }
        ]
    },

    process: {
        badge: 'Our Process',
        title: 'Our Cloud Transformation Process',
        description: 'A proven methodology to migrate and optimize your infrastructure in the cloud with minimal disruption.',
        steps: [
            {
                step: 1,
                title: 'Cloud Assessment',
                description: 'We analyze your current infrastructure, workloads, and business requirements to design the optimal cloud strategy.'
            },
            {
                step: 2,
                title: 'Architecture Design',
                description: 'We create a detailed cloud architecture blueprint with security, scalability, and cost optimization in mind.'
            },
            {
                step: 3,
                title: 'Migration Planning',
                description: 'We develop a phased migration plan to minimize downtime and risk during the transition to the cloud.'
            },
            {
                step: 4,
                title: 'Implementation',
                description: 'We provision infrastructure, migrate workloads, and configure services using Infrastructure as Code for consistency.'
            },
            {
                step: 5,
                title: 'Testing & Validation',
                description: 'We perform comprehensive testing to ensure performance, security, and functionality meet your requirements.'
            },
            {
                step: 6,
                title: 'Optimization & Support',
                description: 'We continuously monitor, optimize costs, and provide ongoing support to ensure peak performance.'
            }
        ]
    },

    faq: {
        badge: 'Common Questions',
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about our cloud solutions and services.',
        questions: [
            {
                question: 'Which cloud platform is best for my business?',
                answer: 'The choice depends on your specific needs. AWS offers the broadest service catalog, Azure integrates seamlessly with Microsoft products, and Google Cloud excels in data analytics and machine learning. We help you evaluate and choose the right platform based on your requirements, existing tech stack, and budget.'
            },
            {
                question: 'How long does cloud migration take?',
                answer: 'Migration timelines vary based on complexity. A simple lift-and-shift migration can take 2-4 weeks, while a complete re-architecture may take 3-6 months. We create a phased migration plan to minimize disruption and ensure a smooth transition.'
            },
            {
                question: 'Will moving to the cloud save me money?',
                answer: 'Yes, when done correctly. Cloud migration can reduce infrastructure costs by 30-50% through pay-as-you-go pricing, eliminating hardware maintenance, and auto-scaling. We optimize your cloud spend through right-sizing, reserved instances, and automated resource management.'
            },
            {
                question: 'How do you ensure cloud security?',
                answer: 'We implement multi-layered security including encryption at rest and in transit, IAM policies, VPCs, security groups, DDoS protection, and continuous monitoring. We also ensure compliance with standards like SOC 2, HIPAA, and PCI-DSS based on your industry requirements.'
            },
            {
                question: 'What happens if there\'s downtime during migration?',
                answer: 'We design migration strategies to minimize or eliminate downtime. For critical systems, we use blue-green deployments, canary releases, or parallel running to ensure zero downtime. We also schedule migrations during low-traffic periods and have rollback plans ready.'
            },
            {
                question: 'Do you provide ongoing cloud management?',
                answer: 'Yes, we offer managed cloud services including 24/7 monitoring, performance optimization, security updates, cost management, and incident response. We act as your extended cloud operations team to ensure your infrastructure runs smoothly.'
            }
        ]
    }
};
