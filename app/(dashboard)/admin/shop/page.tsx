'use client';

import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Package } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    stock: number;
    image: string;
    status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const ShopPage = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Premium Web Template',
            category: 'Templates',
            price: '$49',
            stock: 150,
            image: '🎨',
            status: 'In Stock'
        },
        {
            id: 2,
            name: 'UI Kit Bundle',
            category: 'Design Assets',
            price: '$79',
            stock: 8,
            image: '📦',
            status: 'Low Stock'
        },
        {
            id: 3,
            name: 'SEO Tools Package',
            category: 'Tools',
            price: '$99',
            stock: 0,
            image: '🔧',
            status: 'Out of Stock'
        },
        {
            id: 4,
            name: 'WordPress Plugin',
            category: 'Plugins',
            price: '$29',
            stock: 200,
            image: '🔌',
            status: 'In Stock'
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const statusColors = {
        'In Stock': 'bg-green-100 text-green-700',
        'Low Stock': 'bg-amber-100 text-amber-700',
        'Out of Stock': 'bg-red-100 text-red-700'
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop</h1>
                    <p className="text-gray-600">Manage products and inventory</p>
                </div>
                <button
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30"
                >
                    <Plus className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">In Stock</p>
                    <p className="text-2xl font-bold text-green-600">
                        {products.filter(p => p.status === 'In Stock').length}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Low Stock</p>
                    <p className="text-2xl font-bold text-amber-600">
                        {products.filter(p => p.status === 'Low Stock').length}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Out of Stock</p>
                    <p className="text-2xl font-bold text-red-600">
                        {products.filter(p => p.status === 'Out of Stock').length}
                    </p>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Product
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">{product.image}</div>
                                            <div className="font-semibold text-gray-900">{product.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-700">{product.category}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-700 font-medium">{product.price}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-700">{product.stock} units</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[product.status]}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
