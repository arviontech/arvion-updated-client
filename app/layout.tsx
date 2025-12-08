import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { Toaster } from "sonner";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Arvion Tech - Premium Web Development & Digital Solutions",
  description: "Leading web development company specializing in modern web applications, mobile apps, UI/UX design, and digital solutions. Transform your business with cutting-edge technology and expert development services.",
  keywords: ['web development', 'mobile app development', 'ui ux design', 'digital solutions', 'software company', 'arvion tech'],
  authors: [{ name: 'Arvion Tech' }],
  creator: 'Arvion Tech',
  publisher: 'Arvion Tech',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arviontech.com',
    siteName: 'Arvion Tech',
    title: 'Arvion Tech - Premium Web Development & Digital Solutions',
    description: 'Transform your business with cutting-edge web development and digital solutions',
    images: [
      {
        url: 'https://arviontech.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arvion Tech - Web Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvion Tech - Premium Web Development & Digital Solutions',
    description: 'Transform your business with cutting-edge web development and digital solutions',
    images: ['https://arviontech.com/og-image.jpg'],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Arvion Tech",
  "url": "https://arviontech.com",
  "logo": "https://arviontech.com/logo.png",
  "description": "Leading web development company specializing in modern web applications, mobile apps, UI/UX design, and digital solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rajshahi",
    "addressCountry": "Bangladesh"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+8801207034372",
    "contactType": "customer service",
    "email": "arviontech@gmail.com"
  },
  "sameAs": [
    "https://facebook.com/arviontech",
    "https://twitter.com/arviontech",
    "https://linkedin.com/company/arviontech"
  ],
  "services": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "SEO Optimization",
    "AI & Machine Learning"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.arviontech.com" />
        <meta name="description" content="Leading web development company specializing in modern web applications, mobile apps, UI/UX design, and digital solutions. Transform your business with cutting-edge technology and expert development services." />
        <meta name="keywords" content="web development, mobile app development, ui ux design, digital solutions, software company, arvion tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
