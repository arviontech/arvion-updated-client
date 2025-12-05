'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Building2, ArrowRight, CheckCircle } from 'lucide-react';
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
            value: 'info@arviontech.com',
            href: 'mailto:info@arviontech.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Mon-Fri from 9am to 6pm',
            value: '+1 (234) 567-890',
            href: 'tel:+1234567890',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            description: 'Come say hello at our office',
            value: '123 Tech Street, Silicon Valley, CA 94025',
            href: 'https://maps.google.com',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            description: 'Our business hours',
            value: 'Mon - Fri: 9:00 AM - 6:00 PM',
            href: null,
            color: 'from-orange-500 to-amber-500'
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
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-float" />
                <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-10 animate-float-delayed" />

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6 shadow-lg shadow-blue-500/10">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            We&apos;re Here to Help
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Let&apos;s{' '}
                            <span className="bg-gradient-to-r from-[#703eff] to-[#0254b9] bg-clip-text text-transparent">
                                Start a Conversation
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something amazing together.
                        </p>

                        {/* Quick Features */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-lg flex items-center justify-center">
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                                        <p className="text-xs text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info) => (
                            <div
                                key={info.title}
                                className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <info.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{info.description}</p>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.title === 'Visit Us' ? '_blank' : undefined}
                                        rel={info.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group/link"
                                    >
                                        {info.value}
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                ) : (
                                    <span className="text-gray-700 font-medium text-sm">{info.value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                                    <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                                </div>

                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <p className="font-semibold text-green-800">Message sent successfully!</p>
                                            <p className="text-sm text-green-600">We&apos;ll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Company Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                                                placeholder="+1 (234) 567-890"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    {/* Service & Budget Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                                Service Interested In <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-700"
                                            >
                                                <option value="">Select a service</option>
                                                {services.map(service => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-700"
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
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400 resize-none"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-xl hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
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
                            <div className="relative bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-3xl p-8 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                                <div className="relative">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Prefer to Talk?</h3>
                                    <p className="text-blue-100 mb-6 leading-relaxed">
                                        Schedule a free consultation call with our team to discuss your project requirements.
                                    </p>
                                    <Link
                                        href="#meeting"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#703eff] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Book a Free Call
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Response Guarantee */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Quick Response Guarantee</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    We value your time. Expect a response within <span className="font-semibold text-green-600">24 hours</span> on all business days. For urgent inquiries, call us directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Visit our office or schedule a meeting. We&apos;re located in the heart of Silicon Valley.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-200">
                        {/* Map Placeholder with Gradient Overlay */}
                        <div className="relative h-[400px] bg-gradient-to-br from-blue-100 via-gray-100 to-purple-100">
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
                            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#703eff] to-[#0254b9] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Arvion Tech HQ</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            123 Tech Street, Silicon Valley<br />CA 94025, United States
                                        </p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm mt-2"
                                        >
                                            Get Directions
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Ideas Into Reality?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                        Join hundreds of businesses that have trusted Arvion Tech to build their digital solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#meeting"
                            className="px-8 py-4 bg-gradient-to-r from-[#703eff] to-[#0254b9] text-white font-semibold rounded-full hover:from-[#5f2de0] hover:to-[#0148a3] transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
                        >
                            Schedule a Meeting
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/projects"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
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
