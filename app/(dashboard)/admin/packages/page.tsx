'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { getAllPackages, deletePackage, Package } from '@/services/packages/PackageService';

const PackagesPage = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const data = await getAllPackages();
            setPackages(data);
        } catch (error) {
            console.error('Error fetching packages:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this package?')) {
            const success = await deletePackage(id);
            if (success) {
                setPackages(packages.filter(p => p._id !== id));
            }
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Packages</h1>
                    <p className="text-gray-600">Manage service packages and pricing</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all shadow-lg shadow-blue-500/30">
                    <Plus className="w-5 h-5" />
                    Add Package
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search packages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className={`bg-white rounded-xl p-6 shadow-sm border-2 hover:shadow-lg transition-all ${
                            pkg.popular ? 'border-blue-500' : 'border-gray-100'
                        }`}
                    >
                        {pkg.popular && (
                            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-4">
                                POPULAR
                            </span>
                        )}

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                            <span className="text-gray-500">{pkg.period}</span>
                        </div>

                        <div className="space-y-3 mb-6">
                            {pkg.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                <Edit2 className="w-4 h-4" />
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(pkg._id)}
                                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredPackages.length === 0 && !loading && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No packages found.</p>
                </div>
            )}
        </div>
    );
};

export default PackagesPage;
