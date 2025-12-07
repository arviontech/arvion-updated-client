"use client";

import { useState, useEffect } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import GlassmorphismButton from "@/components/shared/GlassmorphismButton";
import { getAllPackages, Package } from "@/services/packages/PackageService";

export default function PackagesClient() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const data = await getAllPackages();
      setPackages(data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading packages...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Choose Your Perfect
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            {" "}
            Package
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transparent pricing with no hidden fees. Select the package that best
          fits your project requirements.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
              pkg.popular
                ? "bg-white shadow-2xl border-2 border-violet-200"
                : "bg-white/80 shadow-lg border border-gray-200"
            }`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              </div>
            )}

            {/* Package Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  {pkg.price}
                </span>
                <span className="text-gray-600">{pkg.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-auto">
              <GlassmorphismButton
                href="/contact"
                className={`w-full justify-center ${
                  pkg.popular
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600"
                    : ""
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassmorphismButton>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Package CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gray-600 mb-6">
            Every project is unique. Let&apos;s discuss your specific
            requirements and create a tailored solution.
          </p>
          <GlassmorphismButton href="/contact">
            Request Custom Quote
          </GlassmorphismButton>
        </div>
      </div>

      {packages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No packages available at the moment.</p>
        </div>
      )}
    </div>
  );
}
