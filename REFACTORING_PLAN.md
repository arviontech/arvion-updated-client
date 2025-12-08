# Service Details Page Refactoring Plan

## 🎯 Goal
Convert 6 separate service detail pages into **1 reusable dynamic page** with data-driven content.

---

## 📊 Current vs Proposed Architecture

### **CURRENT (42 files)**
```
components/modules/ServiceDetails/
├── WebDevelopment/
│   ├── WebDevelopmentPage.tsx
│   ├── HeroSection.tsx
│   ├── StandOutSection.tsx
│   ├── IndustrySolutionsSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── ChallengesSection.tsx
│   ├── DevelopmentStepsSection.tsx
│   └── FAQSection.tsx
├── AppDevelopment/ (6 files)
├── CloudSolutions/ (6 files)
├── UiUx/ (5 files)
├── Seo/ (6 files)
└── AiMachineLearning/ (6 files)
```

### **PROPOSED (15 files)**
```
components/shared/ServiceDetail/
├── ServiceDetailPage.tsx         # Main reusable page
├── HeroSection.tsx               # Reusable hero
├── FeatureGridSection.tsx        # Reusable feature grid
├── IndustrySolutionsSection.tsx  # Reusable industry grid
├── ProcessSection.tsx            # Reusable process steps
└── FAQSection.tsx                # Reusable FAQ

data/services/
├── types.ts                      # TypeScript interfaces
├── webDevelopmentData.tsx        # Web dev data
├── appDevelopmentData.tsx        # App dev data
├── cloudSolutionsData.tsx        # Cloud data
├── uiUxData.tsx                  # UI/UX data
├── seoData.tsx                   # SEO data
├── aiMachineLearningData.tsx     # AI/ML data
└── index.ts                      # Export all data
```

---

## 🏗️ Implementation Structure

### **1. Data Layer (`data/services/`)**

#### `types.ts`
```typescript
export interface ServiceDetailData {
  slug: string;
  hero: HeroData;
  industries: IndustriesData;
  whyChooseUs: WhyChooseUsData;
  process?: ProcessData;
  faq: FAQData;
  // ... optional sections
}
```

#### `index.ts` (Central export)
```typescript
import { webDevelopmentData } from './webDevelopmentData';
import { appDevelopmentData } from './appDevelopmentData';
import { cloudSolutionsData } from './cloudSolutionsData';
import { uiUxData } from './uiUxData';
import { seoData } from './seoData';
import { aiMachineLearningData } from './aiMachineLearningData';

export const servicesData = {
  'web-development': webDevelopmentData,
  'app-development': appDevelopmentData,
  'cloud-solutions': cloudSolutionsData,
  'ui-ux-design': uiUxData,
  'seo-optimization': seoData,
  'ai-machine-learning': aiMachineLearningData,
};

export type ServiceSlug = keyof typeof servicesData;
```

---

### **2. Reusable Components**

#### `ServiceDetailPage.tsx`
```typescript
'use client';

import { ServiceDetailData } from '@/data/services/types';
import HeroSection from './HeroSection';
import FeatureGridSection from './FeatureGridSection';
import IndustrySolutionsSection from './IndustrySolutionsSection';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQSection';

interface Props {
  data: ServiceDetailData;
}

export default function ServiceDetailPage({ data }: Props) {
  return (
    <main className="bg-white">
      <HeroSection data={data.hero} />

      {/* Render optional sections conditionally */}
      {data.standOut && (
        <FeatureGridSection
          data={data.standOut}
          variant="standout"
        />
      )}

      {data.platforms && (
        <FeatureGridSection
          data={data.platforms}
          variant="platforms"
        />
      )}

      {data.services && (
        <FeatureGridSection
          data={data.services}
          variant="services"
        />
      )}

      <IndustrySolutionsSection data={data.industries} />

      <FeatureGridSection
        data={data.whyChooseUs}
        variant="why-choose-us"
      />

      {data.process && <ProcessSection data={data.process} />}

      {data.challenges && (
        <FeatureGridSection
          data={data.challenges}
          variant="challenges"
        />
      )}

      <FAQSection data={data.faq} />
    </main>
  );
}
```

#### `HeroSection.tsx` (Reusable)
```typescript
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroData } from '@/data/services/types';

interface Props {
  data: HeroData;
}

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-3 text-sm font-medium text-gray-500 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                COMPANY
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="/#services" className="hover:text-blue-600 transition-colors">
                SERVICES
              </Link>
              <span className="text-gray-300">/</span>
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent px-3 py-1 rounded-full text-xs tracking-wide font-bold">
                {data.breadcrumb}
              </span>
            </nav>

            {/* Dynamic Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              {data.title.line1} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                {data.title.highlight}
              </span>
              <br className="hidden lg:block" />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold mt-2 block">
                {data.title.line2}
              </span>
            </h1>

            {/* Dynamic Description */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-white font-semibold rounded-full transition-all">
                Get Started
              </button>
              <button className="px-8 py-4 text-gray-700 font-semibold rounded-full transition-all">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Dynamic Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### `FeatureGridSection.tsx` (Reusable for multiple section types)
```typescript
'use client';

import { ServiceSectionData } from '@/data/services/types';

interface Props {
  data: ServiceSectionData;
  variant: 'standout' | 'platforms' | 'services' | 'why-choose-us' | 'challenges';
}

export default function FeatureGridSection({ data, variant }: Props) {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
              {data.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-4 text-lg text-gray-600">{data.subtitle}</p>
          )}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item: any, index: number) => (
            <div key={index} className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### **3. Page Implementation**

#### `app/(publicRoute)/[serviceSlug]/page.tsx` (Dynamic route)
```typescript
import { servicesData, ServiceSlug } from '@/data/services';
import ServiceDetailPage from '@/components/shared/ServiceDetail/ServiceDetailPage';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    serviceSlug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    serviceSlug: slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const { serviceSlug } = params;
  const serviceData = servicesData[serviceSlug as ServiceSlug];

  if (!serviceData) {
    notFound();
  }

  return <ServiceDetailPage data={serviceData} />;
}
```

---

## ✅ Benefits

### **Code Reduction**
- **Before:** 42 component files
- **After:** ~15 files (7 data files + 6-8 reusable components)
- **Savings:** ~65% reduction

### **Maintainability**
- ✅ Single source of truth for each service
- ✅ Changes to structure only need updating in one place
- ✅ Easy to add new services (just add a data file)
- ✅ Consistent styling across all services

### **Type Safety**
- ✅ TypeScript interfaces ensure data consistency
- ✅ Compile-time validation of service data
- ✅ Autocomplete for all data fields

### **Developer Experience**
- ✅ Adding a new service = creating one data file
- ✅ No need to duplicate component logic
- ✅ Easier testing (test components once)
- ✅ Clear separation of data and presentation

---

## 📝 Migration Steps

1. **Create data structure**
   - ✅ Create `data/services/types.ts`
   - ✅ Create `data/services/webDevelopmentData.tsx` (example)
   - Create remaining 5 service data files
   - Create `data/services/index.ts`

2. **Create reusable components**
   - Create `components/shared/ServiceDetail/ServiceDetailPage.tsx`
   - Create `components/shared/ServiceDetail/HeroSection.tsx`
   - Create `components/shared/ServiceDetail/FeatureGridSection.tsx`
   - Create `components/shared/ServiceDetail/IndustrySolutionsSection.tsx`
   - Create `components/shared/ServiceDetail/ProcessSection.tsx`
   - Create `components/shared/ServiceDetail/FAQSection.tsx`

3. **Update routing**
   - Create dynamic route: `app/(publicRoute)/[serviceSlug]/page.tsx`
   - Remove old individual service pages

4. **Test & validate**
   - Test all 6 services load correctly
   - Verify SEO metadata
   - Check responsive design
   - Validate TypeScript compilation

5. **Cleanup**
   - Delete old `components/modules/ServiceDetails/` folder
   - Update any links pointing to old routes

---

## 🚀 Next Steps

Would you like me to:
1. ✅ Complete the remaining 5 service data files?
2. ✅ Create all the reusable component files?
3. ✅ Set up the dynamic routing?
4. ✅ Test the implementation?

Let me know and I'll proceed with the refactoring!
