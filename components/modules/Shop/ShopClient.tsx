'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Eye, Filter, Grid3X3, List, Search, Tag, ChevronLeft, ChevronRight, BadgeCheck, Loader2 } from 'lucide-react';
import { getProjectsForSale, Project, extractPlainText } from '@/services/projects/ProjectService';

// Categories for sidebar filter
const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'saas', name: 'SaaS Templates' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'dashboard', name: 'Admin Dashboards' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'mobile', name: 'Mobile Apps' },
];

// Price ranges
const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-100', name: 'Under $100' },
    { id: '100-500', name: '$100 - $500' },
    { id: '500-1000', name: '$500 - $1000' },
    { id: 'over-1000', name: 'Over $1000' },
];

interface ShopClientProps {
    initialProducts: Project[];
    initialMeta: {
        total: number;
        totalPage: number;
        page: number;
        limit: number;
    };
}

export default function ShopClient({ initialProducts, initialMeta }: ShopClientProps) {
    const [products, setProducts] = useState<Project[]>(initialProducts);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(initialMeta.page);
    const [totalPages, setTotalPages] = useState(initialMeta.totalPage);
    const [total, setTotal] = useState(initialMeta.total);
    const itemsPerPage = 6;

    // Fetch products from API
    useEffect(() => {
        // Skip fetch if it's the first page and we have initial data
        if (currentPage === 1 && products === initialProducts) {
            return;
        }

        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getProjectsForSale(currentPage, itemsPerPage);
                setProducts(response.data);
                setTotalPages(response.meta.totalPage);
                setTotal(response.meta.total);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]);

    // Filter products
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            extractPlainText(product.description).toLowerCase().includes(searchQuery.toLowerCase());

        let matchesPrice = true;
        const price = product.price || 0;
        if (selectedPrice === 'under-100') matchesPrice = price < 100;
        else if (selectedPrice === '100-500') matchesPrice = price >= 100 && price <= 500;
        else if (selectedPrice === '500-1000') matchesPrice = price > 500 && price <= 1000;
        else if (selectedPrice === 'over-1000') matchesPrice = price > 1000;

        return matchesSearch && matchesPrice;
    });

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
                <div className="sticky top-28 space-y-6">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#703eff]/20 focus:border-[#703eff] transition-all"
                        />
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Filter className="w-5 h-5 text-[#703eff]" />
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg shadow-[#0254b9]/20'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Tag className="w-5 h-5 text-[#703eff]" />
                            Price Range
                        </h3>
                        <div className="space-y-2">
                            {priceRanges.map((range) => (
                                <button
                                    key={range.id}
                                    onClick={() => { setSelectedPrice(range.id); setCurrentPage(1); }}
                                    className={`w-full px-4 py-2.5 rounded-xl text-left transition-all ${selectedPrice === range.id
                                        ? 'bg-[#703eff]/10 text-[#703eff] font-medium'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {range.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${viewMode === 'grid'
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${viewMode === 'list'
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <List className="w-4 h-4" />
                                List
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Products Grid/List */}
            <div className="flex-1">
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600">
                        {loading ? 'Loading...' : (
                            <>Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> of <span className="font-semibold text-gray-900">{total}</span> products</>
                        )}
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-[#703eff] animate-spin" />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-red-100">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={() => setCurrentPage(1)}
                            className="px-6 py-2 bg-[#703eff] text-white rounded-full hover:bg-[#5f2de0] transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredProducts.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* Grid View */}
                {!loading && !error && filteredProducts.length > 0 && viewMode === 'grid' && (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#703eff]/30"
                            >
                                {/* Product Image */}
                                <div className="relative h-52 overflow-hidden bg-gray-100">
                                    {product.images && product.images.length > 0 ? (
                                        <Image
                                            src={product.images[0]}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#703eff]/10 to-[#0254b9]/10">
                                            <span className="text-4xl font-bold text-[#703eff]">{product.title.charAt(0)}</span>
                                        </div>
                                    )}

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {/* Add logic for new/featured if available in API */}
                                        <span className="px-2.5 py-1 bg-[#703eff] text-white text-xs font-semibold rounded-full">
                                            Premium
                                        </span>
                                    </div>

                                    {/* Discount Badge */}
                                    {product.originalPrice && product.price && product.originalPrice > product.price && (
                                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                        </div>
                                    )}

                                    {/* Quick Actions */}
                                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/shop/${product.slug}`}
                                            className="p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <Eye className="w-4 h-4 text-gray-700" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#703eff] transition-colors line-clamp-1">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {extractPlainText(product.description, 100)}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {product.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech._id}
                                                className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-gray-900">${product.price || 0}</span>
                                            {product.originalPrice && product.price && product.originalPrice > product.price && (
                                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                        <Link
                                            href={`/shop/${product.slug}`}
                                            className="px-4 py-2 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
                                        >
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* List View */}
                {!loading && !error && filteredProducts.length > 0 && viewMode === 'list' && (
                    <div className="space-y-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#703eff]/30"
                            >
                                {/* Product Image */}
                                <div className="relative w-72 shrink-0 overflow-hidden bg-gray-100">
                                    {product.images && product.images.length > 0 ? (
                                        <Image
                                            src={product.images[0]}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#703eff]/10 to-[#0254b9]/10">
                                            <span className="text-4xl font-bold text-[#703eff]">{product.title.charAt(0)}</span>
                                        </div>
                                    )}

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2.5 py-1 bg-[#703eff] text-white text-xs font-semibold rounded-full">
                                            Premium
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#703eff] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {extractPlainText(product.description, 150)}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {product.technologies.map((tech) => (
                                            <div key={tech._id} className="flex items-center gap-1.5 text-sm text-gray-600">
                                                <BadgeCheck className="w-4 h-4 text-green-500" />
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & Actions */}
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-gray-900">${product.price || 0}</span>
                                            {product.originalPrice && product.price && product.originalPrice > product.price && (
                                                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                        <Link
                                            href={`/shop/${product.slug}`}
                                            className="px-6 py-2.5 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:shadow-lg transition-all"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-xl font-medium transition-all ${currentPage === page
                                    ? 'bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white shadow-lg'
                                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.max(totalPages, 1)))}
                            disabled={currentPage >= Math.max(totalPages, 1)}
                            className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
