'use client';

import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";

const BlogNewsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setEmail('');

        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#703eff] via-[#5f2de0] to-[#0254b9]" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Stay Updated with Our Newsletter
                </h2>

                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                    Get the latest articles, insights, and updates delivered straight to your inbox.
                    Join 5,000+ subscribers who never miss a post.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    {status === 'success' ? (
                        <div className="flex items-center justify-center gap-3 py-4 px-6 bg-white/10 backdrop-blur-sm rounded-full text-white">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <span className="font-medium">Thank you! You&apos;re now subscribed.</span>
                        </div>
                    ) : (
                        <div className="relative group">
                            <div className="absolute inset-0 bg-white rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/60 focus:outline-none"
                                    disabled={status === 'loading'}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex items-center gap-2 px-8 py-3 m-1.5 bg-white text-[#703eff] font-semibold rounded-full hover:bg-gray-100 transition-all disabled:opacity-70"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Subscribing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Subscribe</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </form>

                {/* Privacy note */}
                <p className="mt-4 text-sm text-white/60">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default BlogNewsletter;
