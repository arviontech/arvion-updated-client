'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiShield } from 'react-icons/fi';
import { login } from '@/services/auth/AuthService';

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({ email: '', password: '', general: '' });

        // Validation
        let hasError = false;
        const newErrors = { email: '', password: '', general: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            hasError = true;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email';
            hasError = true;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            hasError = true;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        // API call
        setIsLoading(true);
        try {
            const response = await login({ email, password });

            // Cookies are set automatically by the backend
            // Redirect to dashboard on success
            router.push('/admin');
        } catch (error) {
            setErrors({
                email: '',
                password: '',
                general: error instanceof Error ? error.message : 'Login failed. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Login Form */}
                <div className="order-2 lg:order-1 animate-fade-in">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                            <FiShield className="w-4 h-4" />
                            Secure Login
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Welcome{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                                Back
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Sign in to access your account and continue your journey with Arvion Tech
                        </p>
                    </div>

                    {/* General Error Message */}
                    {errors.general && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                            <p className="text-red-700 text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {errors.general}
                            </p>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiMail className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3.5 bg-white border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                                        } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1 animate-fade-in">
                                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiLock className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full pl-12 pr-12 py-3.5 bg-white border ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                                        } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1 animate-fade-in">
                                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                                />
                                <span className="ml-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 px-6 bg-gradient-to-r from-[#703eff] to-[#0254b9] hover:from-[#5f2de0] hover:to-[#0148a3] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Right: Illustration/Image Section */}
                <div className="order-1 lg:order-2 animate-fade-in animation-delay-300">
                    {/* Decorative background blob */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

                        {/* Main Card with illustration - REDUCED SHADOWS */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white/50 backdrop-blur-sm p-2">
                            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 p-12 aspect-square flex items-center justify-center">
                                {/* Icon-based illustration */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Central Shield Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl shadow-md flex items-center justify-center animate-float-slow">
                                        <FiShield className="w-16 h-16 text-blue-600" />
                                    </div>

                                    {/* Orbiting Elements */}
                                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center animate-float">
                                        <FiLock className="w-8 h-8 text-cyan-500" />
                                    </div>
                                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center animate-float-delayed">
                                        <FiMail className="w-8 h-8 text-blue-500" />
                                    </div>

                                    {/* Decorative circles */}
                                    <div className="absolute top-12 right-12 w-24 h-24 border-2 border-blue-200 rounded-full animate-pulse-slow opacity-50" />
                                    <div className="absolute bottom-12 left-12 w-20 h-20 border-2 border-cyan-200 rounded-full animate-pulse-slow opacity-50" style={{ animationDelay: '1s' }} />
                                </div>
                            </div>

                            {/* Floating Stats Badge - REDUCED SHADOW */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center gap-3 animate-float-slow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Security</p>
                                    <p className="text-sm font-bold text-gray-900">256-bit Encryption</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Cards - REDUCED SHADOW */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Secure Access</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-2xl font-bold text-cyan-600 mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">
                    By signing in, you agree to our{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}
