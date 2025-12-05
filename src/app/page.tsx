"use client";

import { useState, useEffect } from "react";
import {
  Truck,
  Package,
  Thermometer,
  AlertCircle,
  Box,
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  Flag,
  MapPin,
  Mail,
  Calendar,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Send,
  Shield,
  Phone,
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      icon: Truck,
      title: "Dry Van",
      description:
        "Standard enclosed trailers for general freight, protecting your cargo from weather and theft during transit.",
    },
    {
      icon: Package,
      title: "Flatbed",
      description:
        "Open trailers for oversized loads, construction materials, machinery, and cargo that needs crane loading.",
    },
    {
      icon: Thermometer,
      title: "Refrigerated (Reefer)",
      description:
        "Temperature-controlled trailers for perishables, pharmaceuticals, and any cargo requiring climate management.",
    },
    {
      icon: AlertCircle,
      title: "Specialized Freight",
      description:
        "Custom solutions for hazmat, heavy haul, and unique cargo requirements with proper permits and equipment.",
    },
    {
      icon: Box,
      title: "Dry Bulk",
      description:
        "Pneumatic and hopper trailers for agricultural products, chemicals, and bulk commodities.",
    },
    {
      icon: Car,
      title: "Auto Transport",
      description:
        "Car carriers for vehicle transport - from single units to full loads of new or used automobiles.",
    },
  ];

  const whyUs = [
    {
      icon: CheckCircle,
      title: "Vetted Carrier Network",
      description:
        "Every carrier in our network is verified, insured, and meets our strict safety standards.",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description:
        "Know where your freight is at all times with live GPS updates and proactive communication.",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description:
        "Fair, transparent pricing with no hidden fees. We negotiate hard so you get the best value.",
    },
    {
      icon: Flag,
      title: "Load Securement Experts",
      description:
        "Whether heavy equipment or fresh produce, we ensure your freight is secured and safe.",
    },
  ];

  const commodities = [
    "General Freight",
    "Fresh Produce",
    "Building Materials",
    "Machinery",
    "Metal Products",
    "Refrigerated Food",
    "Motor Vehicles",
    "Farm Supplies",
    "Paper Products",
    "Grain & Feed",
    "Construction",
    "Beverages",
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span
                className={`font-bold text-xl ${
                  scrolled ? "text-[#1e3a5f]" : "text-white"
                }`}
              >
                KHCL Logistics
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className={`font-medium transition-opacity hover:opacity-80 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#why-us"
                className={`font-medium transition-opacity hover:opacity-80 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className={`font-medium transition-opacity hover:opacity-80 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    scrolled ? "text-[#1e3a5f]" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    scrolled ? "text-[#1e3a5f]" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-gray-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block text-gray-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="block text-gray-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-orange-500 text-white rounded-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] relative overflow-hidden flex items-center">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
              Licensed &amp; Bonded Freight Broker
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Freight,
              <br />
              <span className="text-orange-500">Delivered Right.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              KHCL Logistics connects shippers with reliable carriers across the
              USA. From dry van to specialized freight, we handle it all with
              precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">48</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider mt-1">
                  States Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider mt-1">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider mt-1">
                  Commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <div className="bg-[#0f2744] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>
                MC# <strong className="text-white">123853</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>
                USDOT# <strong className="text-white">3177936</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <strong className="text-white">Licensed &amp; Bonded</strong>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>
                Florence, <strong className="text-white">Mississippi</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Freight Solutions for Every Need
            </h2>
            <p className="text-lg text-gray-600">
              From temperature-sensitive goods to oversized equipment, we have
              the expertise and carrier network to move your freight safely and
              on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Why KHCL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
                Built on Trust,
                <br />
                Driven by Results
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We don&apos;t just move freight - we build partnerships. Our
                commitment to communication, reliability, and fair pricing sets
                us apart in an industry where those qualities matter most.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">We Move What Matters</h3>
              <p className="text-blue-100 mb-8">
                Our diverse experience spans across industries and commodity
                types:
              </p>
              <div className="flex flex-wrap gap-2">
                {commodities.map((commodity, index) => (
                  <span
                    key={index}
                    className="bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm"
                  >
                    {commodity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] relative overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Ship?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a competitive quote within hours. Our team is standing by to
            handle your next load with the care and professionalism it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href="tel:"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
                Let&apos;s Move Your Freight
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Have a load that needs moving? Questions about our services?
                We&apos;re here to help. Reach out and one of our logistics
                experts will get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] mb-1">Location</h4>
                    <p className="text-gray-600">Florence, Mississippi</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] mb-1">Email</h4>
                    <a
                      href="mailto:dispatch@khcllogistics.com"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      dispatch@khcllogistics.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8AM - 6PM CST
                      <br />
                      Emergency: 24/7 Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                Request a Quote
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you with a
                competitive rate.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Origin City/State
                    </label>
                    <input
                      type="text"
                      placeholder="Dallas, TX"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination City/State
                    </label>
                    <input
                      type="text"
                      placeholder="Atlanta, GA"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Type
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-white">
                    <option value="">Select equipment type...</option>
                    <option value="dry-van">Dry Van</option>
                    <option value="flatbed">Flatbed</option>
                    <option value="reefer">Refrigerated (Reefer)</option>
                    <option value="dry-bulk">Dry Bulk</option>
                    <option value="auto">Auto Transport</option>
                    <option value="specialized">Specialized / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Load Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Commodity, weight, dimensions, pickup date, any special requirements..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Submit Request
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2744] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <span className="font-bold text-xl">KHCL Logistics</span>
              </a>
              <p className="text-white/70 max-w-xs">
                Your trusted freight brokerage partner. Moving freight across
                America with reliability, integrity, and competitive rates.
              </p>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Get a Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Dry Van
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Flatbed
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Refrigerated
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    Specialized Freight
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; 2024 KHCL Logistics LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/50 text-sm">
              <span>MC# 123853</span>
              <span>USDOT# 3177936</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-orange-600 hover:-translate-y-1 ${
          showScrollTop
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}
