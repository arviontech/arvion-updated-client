'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin,  Send, MessageCircle, Headphones, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const services = [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'Cloud Solutions',
        'SEO Optimization',
        'AI & Machine Learning',
        'Custom Software',
        'Consulting'
    ];

    const budgetRanges = [
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000+'
    ];

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Send us an email anytime',
            value: 'arviontech@gmail.com',
            href: 'mailto:arviontech@gmail.com',
            color: 'from-violet-500 to-purple-500'
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Mon-Fri from 9am to 6pm',
            value: '01207034372',
            href: 'tel:01207034372',
            color: 'from-cyan-500 to-blue-500'
        }
    ];

    const features = [
        {
            icon: MessageCircle,
            title: 'Quick Response',
            description: 'We respond within 24 hours'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Round the clock assistance'
        },
        {
            icon: Building2,
            title: 'Enterprise Ready',
            description: 'Scalable solutions for all sizes'
        }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Toast Notification */}
            {isSubmitted && (
                <div
                    className="fixed top-24 right-6 z-[100] p-5 rounded-2xl flex items-start gap-4 shadow-2xl animate-slide-in-right max-w-md"
                    style={{
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
                        animation: 'slideInRight 0.4s ease-out, fadeOut 0.3s ease-in 4.7s forwards'
                    }}
                >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                            background: 'rgba(255, 255, 255, 0.25)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-white text-lg mb-1">Message Sent Successfully!</h3>
                        <p className="text-white/90 text-sm font-medium leading-relaxed">
                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-white/80 hover:text-white transition-colors flex-shrink-0"
                        aria-label="Close notification"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-50">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Subtle Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                    {/* Decorative frosted glass shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            border: '1px solid rgba(6, 182, 212, 0.15)',
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                            filter: 'blur(60px)'
                        }}>
                    </div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            border: '1px solid rgba(139, 92, 246, 0.15)',
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                            filter: 'blur(60px)'
                        }}>
                    </div>
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                We&apos;re Here to Help
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Let&apos;s{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                Start a Conversation
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-800 font-semibold mb-10 leading-relaxed">
                            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something amazing together.
                        </p>

                        {/* Quick Features */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        backdropFilter: 'blur(15px) saturate(180%)',
                                        WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                                    }}>
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)'
                                        }}>
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                                        <p className="text-xs text-gray-800 font-semibold">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <div
                                key={info.title}
                                className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    border: '1px solid rgba(255, 255, 255, 0.25)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                {/* Gradient background layer */}
                                <div className="absolute inset-0 rounded-2xl -z-10"
                                    style={{
                                        background: index % 2 === 0
                                            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)'
                                            : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                                    }}>
                                </div>

                                {/* White transparent layer */}
                                <div className="absolute inset-0 rounded-2xl -z-[9]"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                    }}>
                                </div>

                                <div className={`relative w-14 h-14 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 z-10`}>
                                    <info.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="relative text-lg font-bold text-gray-900 mb-1 z-10">{info.title}</h3>
                                <p className="relative text-sm text-gray-800 font-semibold mb-3 z-10">{info.description}</p>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.title === 'Visit Us' ? '_blank' : undefined}
                                        rel={info.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                                        className="relative bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-semibold text-sm flex items-center gap-1 group/link z-10"
                                    >
                                        {info.value}
                                        <ArrowRight className="w-4 h-4 text-cyan-600 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                ) : (
                                    <span className="relative text-gray-900 font-semibold text-sm z-10">{info.value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />

                    <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                            filter: 'blur(60px)'
                        }}>
                    </div>
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-3xl p-8 lg:p-10 transition-all duration-300"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    border: '1px solid rgba(255, 255, 255, 0.25)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.3)',
                                }}>
                                {/* Gradient background layer */}
                                <div className="absolute inset-0 rounded-3xl -z-10"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
                                    }}>
                                </div>

                                {/* White transparent layer */}
                                <div className="absolute inset-0 rounded-3xl -z-[9]"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                                    }}>
                                </div>

                                <div className="relative mb-8 z-10">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                                    <p className="text-gray-800 font-semibold">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="relative space-y-6 z-10">
                                    {/* Name & Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Company Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                                placeholder="+1 (234) 567-890"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {/* Service & Budget Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Service Interested In <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                            >
                                                <option value="">Select a service</option>
                                                {services.map(service => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-semibold text-gray-800 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all font-semibold text-gray-900"
                                                style={{
                                                    backdropFilter: 'blur(10px) saturate(180%)',
                                                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                    background: 'rgba(255, 255, 255, 0.4)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map(range => (
                                                    <option key={range} value={range}>{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                                            Project Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3.5 rounded-xl focus:outline-none transition-all placeholder:text-gray-400 resize-none font-semibold text-gray-900"
                                            style={{
                                                backdropFilter: 'blur(10px) saturate(180%)',
                                                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                                                background: 'rgba(255, 255, 255, 0.4)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 text-white font-semibold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Side Info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Schedule a Call CTA */}
                            <div className="relative rounded-3xl p-8 text-white overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                }}>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            background: 'rgba(255, 255, 255, 0.2)',
                                        }}>
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Prefer to Talk?</h3>
                                    <p className="text-white/90 mb-6 leading-relaxed font-semibold">
                                        Schedule a free consultation call with our team to discuss your project requirements.
                                    </p>
                                    <Link
                                        href="#meeting"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.95)',
                                        }}
                                    >
                                        <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                                            Book a Free Call
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-cyan-600" />
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Response Guarantee */}
                            <div className="rounded-3xl p-8"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                                    border: '1px solid rgba(16, 185, 129, 0.25)',
                                    boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                                }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Quick Response Guarantee</h3>
                                </div>
                                <p className="text-gray-800 leading-relaxed font-semibold">
                                    We value your time. Expect a response within <span className="font-bold text-green-600">24 hours</span> on all business days. For urgent inquiries, call us directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                        <p className="text-gray-800 font-semibold max-w-2xl mx-auto">
                            Visit our office or schedule a meeting. We&apos;re located in the heart of Silicon Valley.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden"
                        style={{
                            backdropFilter: 'blur(15px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                        }}>
                        {/* Map Placeholder with Gradient Overlay */}
                        <div className="relative h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.11512221668!2d-122.10795!3d37.4135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c5b5c08af1%3A0x68dc6e9b4dd8d29c!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Arvion Tech Office Location"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Location Card Overlay */}
                            <div className="absolute bottom-6 left-6 rounded-2xl p-6 max-w-xs"
                                style={{
                                    backdropFilter: 'blur(15px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                                }}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                                        }}>
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Arvion Tech HQ</h4>
                                        <p className="text-sm text-gray-800 font-semibold leading-relaxed">
                                            123 Tech Street, Silicon Valley<br />CA 94025, United States
                                        </p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent font-semibold text-sm mt-2"
                                        >
                                            Get Directions
                                            <ArrowRight className="w-4 h-4 text-cyan-600" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Ideas Into Reality?
                    </h2>
                    <p className="text-white/90 text-lg font-semibold max-w-2xl mx-auto mb-10">
                        Join hundreds of businesses that have trusted Arvion Tech to build their digital solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#meeting"
                            className="px-8 py-4 font-semibold rounded-full transition-all flex items-center gap-2"
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                            }}
                        >
                            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                                Schedule a Meeting
                            </span>
                            <ArrowRight className="w-5 h-5 text-cyan-600" />
                        </Link>
                        <Link
                            href="/projects"
                            className="px-8 py-4 text-white font-semibold rounded-full transition-all"
                            style={{
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
