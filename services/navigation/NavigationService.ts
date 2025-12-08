import { Metadata } from 'next';

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceItem extends NavigationItem {
  icon: string;
  keywords: string[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: string[];
  };
}

// Static navigation data for SSG
export const getNavigationData = () => {
  const services: ServiceItem[] = [
    {
      label: 'Web Development',
      href: '/web-development',
      description: 'Modern, scalable web applications with cutting-edge technologies',
      icon: 'Globe',
      keywords: ['web development', 'react', 'nextjs', 'javascript', 'typescript', 'frontend', 'backend']
    },
    {
      label: 'App Development',
      href: '/app-development', 
      description: 'Native iOS & Android mobile applications',
      icon: 'Smartphone',
      keywords: ['mobile app', 'ios', 'android', 'react native', 'flutter', 'mobile development']
    },
    {
      label: 'UI/UX Design',
      href: '/ui-ux-design',
      description: 'User-centered design solutions that convert',
      icon: 'Palette',
      keywords: ['ui design', 'ux design', 'user interface', 'user experience', 'figma', 'design system']
    },
    {
      label: 'Cloud Solutions',
      href: '/cloud-solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: 'Cloud',
      keywords: ['cloud computing', 'aws', 'azure', 'google cloud', 'devops', 'infrastructure']
    },
    {
      label: 'SEO Optimization',
      href: '/seo-optimization',
      description: 'Boost your search rankings and organic traffic',
      icon: 'TrendingUp',
      keywords: ['seo', 'search engine optimization', 'google ranking', 'organic traffic', 'digital marketing']
    },
    {
      label: 'AI & Machine Learning',
      href: '/ai-machine-learning',
      description: 'Intelligent automation and AI-powered solutions',
      icon: 'Brain',
      keywords: ['artificial intelligence', 'machine learning', 'ai development', 'automation', 'data science']
    }
  ];

  const navItems: NavigationItem[] = [
    { label: 'Projects', href: '/projects' },
    { label: 'Packages', href: '/packages' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' }
  ];

  return { services, navItems };
};

// SEO metadata generator
export const generateSEOMetadata = (page: string): Metadata => {
  const baseUrl = 'https://arviontech.com';
  const companyName = 'Arvion Tech';
  
  const seoData: Record<string, SEOData> = {
    home: {
      title: `${companyName} - Premium Web Development & Digital Solutions`,
      description: 'Leading web development company specializing in modern web applications, mobile apps, UI/UX design, and digital solutions. Transform your business with cutting-edge technology and expert development services.',
      keywords: ['web development', 'mobile app development', 'ui ux design', 'digital solutions', 'software company'],
      openGraph: {
        title: `${companyName} - Premium Web Development & Digital Solutions`,
        description: 'Transform your business with cutting-edge web development and digital solutions',
        url: baseUrl,
        images: [`${baseUrl}/og-image.jpg`]
      }
    },
    projects: {
      title: `Our Projects - ${companyName}`,
      description: 'Explore our portfolio of successful web development projects, mobile applications, and digital solutions. See how we help businesses grow with technology through innovative design and development.',
      keywords: ['portfolio', 'web development projects', 'case studies', 'client work'],
      openGraph: {
        title: `Our Projects - ${companyName}`,
        description: 'Explore our portfolio of successful digital solutions',
        url: `${baseUrl}/projects`,
        images: [`${baseUrl}/projects-og.jpg`]
      }
    },
    about: {
      title: `About Us - ${companyName}`,
      description: 'Learn about Arvion Tech, our mission, values, and expert team. We are passionate about delivering innovative digital solutions that drive business success and growth through technology.',
      keywords: ['about arvion tech', 'company info', 'team', 'mission', 'values'],
      openGraph: {
        title: `About Us - ${companyName}`,
        description: 'Learn about our mission and expert team',
        url: `${baseUrl}/about`,
        images: [`${baseUrl}/about-og.jpg`]
      }
    },
    contact: {
      title: `Contact Us - ${companyName}`,
      description: 'Get in touch with Arvion Tech for your next project. Free consultation available. Let us discuss how we can help grow your business with custom web development and digital solutions.',
      keywords: ['contact', 'get quote', 'consultation', 'hire developers'],
      openGraph: {
        title: `Contact Us - ${companyName}`,
        description: 'Get in touch for your next project',
        url: `${baseUrl}/contact`,
        images: [`${baseUrl}/contact-og.jpg`]
      }
    },
    blog: {
      title: `Blog - ${companyName}`,
      description: 'Stay updated with the latest web development trends, tutorials, and insights from Arvion Tech experts. Learn about modern technologies, best practices, and industry innovations.',
      keywords: ['web development blog', 'tech tutorials', 'programming tips', 'technology insights'],
      openGraph: {
        title: `Blog - ${companyName}`,
        description: 'Latest web development insights and tutorials',
        url: `${baseUrl}/blog`,
        images: [`${baseUrl}/blog-og.jpg`]
      }
    },
    packages: {
      title: `Service Packages - ${companyName}`,
      description: 'Choose from our carefully crafted service packages designed to meet different business needs. Transparent pricing for web development, mobile apps, and comprehensive digital solutions.',
      keywords: ['service packages', 'pricing', 'web development packages', 'digital solutions pricing'],
      openGraph: {
        title: `Service Packages - ${companyName}`,
        description: 'Transparent pricing for digital solutions',
        url: `${baseUrl}/packages`,
        images: [`${baseUrl}/packages-og.jpg`]
      }
    },
    shop: {
      title: `Shop - ${companyName}`,
      description: 'Browse our collection of premium web templates, digital products, and ready-to-use solutions. High-quality products for developers and businesses looking for professional designs.',
      keywords: ['web templates', 'digital products', 'premium themes', 'ready solutions'],
      openGraph: {
        title: `Shop - ${companyName}`,
        description: 'Premium web templates and digital products',
        url: `${baseUrl}/shop`,
        images: [`${baseUrl}/shop-og.jpg`]
      }
    }
  };

  return {
    title: seoData[page]?.title || `${companyName}`,
    description: seoData[page]?.description || 'Premium web development and digital solutions',
    keywords: seoData[page]?.keywords || [],
    openGraph: {
      title: seoData[page]?.openGraph.title || `${companyName}`,
      description: seoData[page]?.openGraph.description || 'Premium web development and digital solutions',
      url: seoData[page]?.openGraph.url || baseUrl,
      images: seoData[page]?.openGraph.images || [`${baseUrl}/og-image.jpg`],
      siteName: companyName,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData[page]?.openGraph.title || `${companyName}`,
      description: seoData[page]?.openGraph.description || 'Premium web development and digital solutions',
      images: seoData[page]?.openGraph.images || [`${baseUrl}/og-image.jpg`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: seoData[page]?.openGraph.url || baseUrl,
    }
  };
};

// Generate service-specific SEO metadata
export const generateServiceSEOMetadata = (serviceSlug: string): Metadata => {
  const { services } = getNavigationData();
  const service = services.find(s => s.href === `/${serviceSlug}`);
  
  if (!service) {
    return generateSEOMetadata('home');
  }

  const baseUrl = 'https://arviontech.com';
  const companyName = 'Arvion Tech';

  return {
    title: `${service.label} - ${companyName}`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.label} - ${companyName}`,
      description: service.description,
      url: `${baseUrl}${service.href}`,
      images: [`${baseUrl}${service.href}-og.jpg`],
      siteName: companyName,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.label} - ${companyName}`,
      description: service.description,
      images: [`${baseUrl}${service.href}-og.jpg`]
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}${service.href}`,
    }
  };
};
