/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./Container";
import {
  getContactInfo,
  ContactInfo,
} from "@/services/contactInfo/ContactInfoService";
import { subscribe } from "@/services/subscription/SubscriptionService";
import {
  getAllSocialLinks,
  SocialLink,
} from "@/services/socialLinks/SocialLinksService";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo();
        setContactInfo(data);
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    };

    const fetchSocialLinks = async () => {
      try {
        const data = await getAllSocialLinks();
        setSocialLinks(data);
      } catch (error) {
        console.error("Social links API not available:", error);
        // Set empty array as fallback
        setSocialLinks([]);
      }
    };

    fetchContactInfo();
    fetchSocialLinks();
  }, []);

  // Fallback contact info
  const displayContact = contactInfo || {
    email: "info@arviontech.com",
    phone: "+1 (234) 567-890",
    address: "123 Tech Street, Silicon Valley\nCA 94025, United States",
  };
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);

      try {
        await subscribe(email);
        setIsSubscribed(true);
        setEmail("");
        // Auto-hide toast after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
      } catch (error: any) {
        alert(error.message || "Failed to subscribe");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const services = [
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },
    { label: "UI/UX Design", href: "/ui-ux-design" },
    { label: "Cloud Solutions", href: "/cloud-solutions" },
    { label: "SEO Optimization", href: "/seo-optimization" },
    { label: "AI & Machine Learning", href: "/ai-machine-learning" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "#careers" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
  ];

  const resources = [
    { label: "Documentation", href: "#docs" },
    { label: "Help Center", href: "#help" },
    { label: "Community", href: "#community" },
    { label: "Webinars", href: "#webinars" },
    { label: "API Reference", href: "#api" },
    { label: "Status", href: "#status" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR Compliance", href: "#gdpr" },
  ];

  return (
    <>
      {/* Toast Notification */}
      {isSubscribed && (
        <div
          className="fixed top-24 right-6 z-[100] p-5 rounded-2xl flex items-start gap-4 shadow-2xl animate-slide-in-right max-w-md"
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "0 20px 60px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
            animation:
              "slideInRight 0.4s ease-out, fadeOut 0.3s ease-in 4.7s forwards",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg mb-1">
              Successfully Subscribed!
            </h3>
            <p className="text-white/90 text-sm font-medium leading-relaxed">
              Thank you for subscribing to our newsletter. You&apos;ll receive
              tech insights and updates in your inbox.
            </p>
          </div>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white/80 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <footer className="relative bg-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-white to-violet-500/3" />
        </div>

        <Container className="relative">
          {/* Newsletter Section */}
          <div
            className="py-12 border-b"
            style={{ borderColor: "rgba(6, 182, 212, 0.1)" }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Newsletter
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                    Stay Updated
                  </span>
                </h3>
                <p
                  className="text-gray-600 text-sm md:text-base font-semibold"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                >
                  Subscribe to our newsletter for the latest tech insights,
                  updates, and exclusive offers.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-gray-900 placeholder:text-gray-400 font-semibold"
                      style={{
                        backdropFilter: "blur(10px) saturate(180%)",
                        WebkitBackdropFilter: "blur(10px) saturate(180%)",
                        background: "rgba(255, 255, 255, 0.5)",
                      }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group text-white disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)",
                      boxShadow: "0 4px 16px rgba(6, 182, 212, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px rgba(6, 182, 212, 0.4)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(6, 182, 212, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="hidden sm:inline">Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Subscribe</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info - Spans 2 columns on lg */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/assets/arvion-logo.png"
                  alt="Arvion Tech"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p
                className="text-gray-600 text-sm leading-relaxed mb-6 font-semibold"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                Empowering businesses with cutting-edge technology solutions. We
                transform ideas into exceptional digital experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`mailto:${displayContact.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                    }}
                  >
                    <Mail className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                  >
                    {displayContact.email}
                  </span>
                </a>
                <a
                  href={`tel:${displayContact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                    }}
                  >
                    <Phone className="w-4 h-4 text-violet-600" />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                  >
                    {displayContact.phone}
                  </span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                    }}
                  >
                    <MapPin className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span
                    className="text-sm leading-relaxed font-semibold"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                  >
                    {displayContact.address.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          displayContact.address.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                className="font-bold text-lg mb-6 text-gray-900"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-cyan-600 transition-colors text-sm flex items-center gap-2 group font-semibold"
                      style={{
                        textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all text-cyan-600" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="font-bold text-lg mb-6 text-gray-900"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-cyan-600 transition-colors text-sm flex items-center gap-2 group font-semibold"
                      style={{
                        textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all text-cyan-600" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                className="font-bold text-lg mb-6 text-gray-900"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-cyan-600 transition-colors text-sm flex items-center gap-2 group font-semibold"
                      style={{
                        textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all text-cyan-600" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4
                className="font-bold text-lg mb-6 text-gray-900"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-cyan-600 transition-colors text-sm flex items-center gap-2 group font-semibold"
                      style={{
                        textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all text-cyan-600" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="py-8 border-t"
            style={{ borderColor: "rgba(6, 182, 212, 0.1)" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <p
                className="text-gray-600 text-sm text-center md:text-left font-semibold"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                © {new Date().getFullYear()}{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent font-bold">
                  Arvion Tech
                </span>
                . All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  // Map icon names to actual icon components
                  const getIcon = (iconName: string) => {
                    switch (iconName.toLowerCase()) {
                      case 'facebook':
                        return Facebook;
                      case 'twitter':
                        return Twitter;
                      case 'linkedin':
                        return Linkedin;
                      case 'instagram':
                        return Instagram;
                      case 'github':
                        return Github;
                      default:
                        return Globe; // fallback icon
                    }
                  };
                  
                  const Icon = getIcon(social.icon);
                  return (
                    <a
                      key={social?.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      style={{
                        background: "rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border =
                          "1px solid rgba(6, 182, 212, 0.4)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border =
                          "1px solid rgba(6, 182, 212, 0.2)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon className="w-5 h-5 text-cyan-600 group-hover:text-violet-600 transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-cyan-600 transition-colors group font-semibold"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                <span>Back to top</span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                  }}
                >
                  <ArrowRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform text-cyan-600" />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
