/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Headphones,
  Building2,
} from "lucide-react";
import { getContactInfo } from "@/services/contactInfo/ContactInfoService";

export default async function ContactServer() {
  let contactInfo;
  try {
    contactInfo = await getContactInfo();
  } catch (error: any) {
    // Fallback contact info
    contactInfo = {
      email: "arviontech@gmail.com",
      phone: "01207034372",
      address: "Rajshahi, Bangladesh",
    };
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Amazing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your ideas into reality? We&apos;re here to help
            you create exceptional digital experiences that drive results.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">Send us an email anytime</p>
              <a
                href={`mailto:${contactInfo?.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {contactInfo?.email}
              </a>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm</p>
              <a
                href={`tel:${contactInfo?.phone}`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                {contactInfo?.phone}
              </a>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-4">Come say hello at our office</p>
              <p className="text-green-600 font-medium">
                {contactInfo?.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Help You?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the service that best fits your needs, and we&apos;ll get
              back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Web Development",
                desc: "Custom websites and web applications",
              },
              {
                icon: Phone,
                title: "Mobile Apps",
                desc: "iOS and Android applications",
              },
              {
                icon: MessageCircle,
                title: "UI/UX Design",
                desc: "User interface and experience design",
              },
              {
                icon: Headphones,
                title: "Consulting",
                desc: "Technical consultation and strategy",
              },
              {
                icon: Building2,
                title: "E-commerce",
                desc: "Online stores and marketplaces",
              },
              {
                icon: MessageCircle,
                title: "Maintenance",
                desc: "Ongoing support and updates",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
