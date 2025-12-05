import Container from '@/components/shared/Container';
import ShopClient from '@/components/modules/Shop/ShopClient';
import { getProjectsForSale, type Project } from '@/services/projects/ProjectService';

export const metadata = {
    title: 'Shop | Arvion Tech',
    description: 'Premium readymade solutions to kickstart your next project. Save time and launch faster.',
};

export default async function ShopPage() {
    // Fetch initial data on the server
    let initialProducts: Project[] = [];
    let initialMeta = {
        total: 0,
        totalPage: 1,
        page: 1,
        limit: 6
    };

    try {
        const response = await getProjectsForSale(1, 6);
        initialProducts = response.data;
        initialMeta = response.meta;
    } catch (error) {
        console.error('Failed to fetch initial products:', error);
        // We'll let the client component handle the empty state or re-fetch if needed
    }

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <Container>
                {/* Page Header - Server Side Rendered */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <div className="w-2 h-2 bg-[#703eff] rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#703eff] uppercase tracking-wide">Premium Products</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#703eff] to-[#0254b9]">Shop</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Premium readymade solutions to kickstart your next project. Save time and launch faster.
                    </p>
                </div>

                {/* Interactive Content - Client Side Hydrated */}
                <ShopClient
                    initialProducts={initialProducts}
                    initialMeta={initialMeta}
                />
            </Container>
        </main>
    );
}
