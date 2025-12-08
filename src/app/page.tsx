"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  ExternalLink,
  LogIn,
  Award,
  Warehouse,
  BarChart3,
  Users,
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
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="KHCL Logistics"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className={`font-medium transition-colors hover:text-[#00A0D2] ${
                  scrolled ? "text-[#5A5A5A]" : "text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#why-us"
                className={`font-medium transition-colors hover:text-[#00A0D2] ${
                  scrolled ? "text-[#5A5A5A]" : "text-white"
                }`}
              >
                Why Us
              </a>
              <a
                href="#about"
                className={`font-medium transition-colors hover:text-[#00A0D2] ${
                  scrolled ? "text-[#5A5A5A]" : "text-white"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`font-medium transition-colors hover:text-[#00A0D2] ${
                  scrolled ? "text-[#5A5A5A]" : "text-white"
                }`}
              >
                Contact
              </a>
              <a
                href="https://freightflow-tms.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors hover:text-[#00A0D2] flex items-center gap-1 ${
                  scrolled ? "text-[#5A5A5A]" : "text-white"
                }`}
              >
                Client Portal
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#00A0D2] text-white rounded-lg font-semibold hover:bg-[#0088B5] transition-colors"
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
                    scrolled ? "text-[#5A5A5A]" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    scrolled ? "text-[#5A5A5A]" : "text-white"
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
                className="block text-[#5A5A5A] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block text-[#5A5A5A] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#about"
                className="block text-[#5A5A5A] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-[#5A5A5A] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://freightflow-tms.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#00A0D2] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                Client Portal
              </a>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-[#00A0D2] text-white rounded-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden flex items-center">
        {/* Decorative swoosh element inspired by logo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[80%] h-[60%] opacity-10">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <path
                d="M0,200 Q200,50 400,100 T800,50"
                fill="none"
                stroke="#A89F91"
                strokeWidth="120"
                strokeLinecap="round"
              />
              <path
                d="M0,300 Q200,150 400,200 T800,150"
                fill="none"
                stroke="#A89F91"
                strokeWidth="80"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#00A0D2] rounded-full animate-pulse-dot" />
              Licensed &amp; Bonded Freight Broker
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Freight,
              <br />
              <span className="text-[#00A0D2]">Delivered Right.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              KHCL Logistics connects shippers with reliable carriers across the
              USA. From dry van to specialized freight, we handle it all with
              precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A0D2] text-white rounded-lg font-semibold hover:bg-[#0088B5] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00A0D2]/30"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-[#A89F91] rounded-lg font-semibold hover:bg-[#A89F91]/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00A0D2]">48</div>
                <div className="text-sm text-[#A89F91] uppercase tracking-wider mt-1">
                  States Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00A0D2]">24/7</div>
                <div className="text-sm text-[#A89F91] uppercase tracking-wider mt-1">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00A0D2]">100%</div>
                <div className="text-sm text-[#A89F91] uppercase tracking-wider mt-1">
                  Commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <div className="bg-[#111111] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00A0D2]" />
              <span>
                MC# <strong className="text-white">123853</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00A0D2]" />
              <span>
                USDOT# <strong className="text-white">3177936</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00A0D2]" />
              <strong className="text-white">Licensed &amp; Bonded</strong>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00A0D2]" />
              <span>
                Florence, <strong className="text-white">Mississippi</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#00A0D2]/10 text-[#00A0D2] px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5A5A5A] mb-4">
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#5A5A5A] to-[#3D3D3D] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#00A0D2] group-hover:to-[#0088B5] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#5A5A5A] mb-3">
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
              <span className="inline-block bg-[#00A0D2]/10 text-[#00A0D2] px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Why KHCL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5A5A5A] mb-6">
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
                    <div className="w-12 h-12 bg-[#00A0D2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#00A0D2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#5A5A5A] mb-1">
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

            <div className="bg-gradient-to-br from-[#5A5A5A] to-[#3D3D3D] rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Decorative taupe swoosh */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path
                    d="M400,0 Q300,100 350,200 T400,400"
                    fill="none"
                    stroke="#A89F91"
                    strokeWidth="60"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">We Move What Matters</h3>
                <p className="text-gray-300 mb-8">
                  Our diverse experience spans across industries and commodity
                  types:
                </p>
                <div className="flex flex-wrap gap-2">
                  {commodities.map((commodity, index) => (
                    <span
                      key={index}
                      className="bg-[#A89F91]/30 backdrop-blur px-4 py-2 rounded-full text-sm border border-[#A89F91]/30"
                    >
                      {commodity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Founder Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo/Visual Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5A5A5A] to-[#3D3D3D] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path
                      d="M0,200 Q100,100 200,200 T400,100"
                      fill="none"
                      stroke="#A89F91"
                      strokeWidth="40"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto bg-[#00A0D2] rounded-full flex items-center justify-center mb-6">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">J. Seal</h3>
                  <p className="text-[#00A0D2] font-semibold mb-4">Founder & President</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
                      18+ Years Experience
                    </span>
                    <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
                      Logistics Expert
                    </span>
                  </div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00A0D2]/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#00A0D2]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#5A5A5A]">18+</p>
                    <p className="text-sm text-gray-500">Years in Logistics</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00A0D2]/10 rounded-xl flex items-center justify-center">
                    <Warehouse className="w-6 h-6 text-[#00A0D2]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#5A5A5A]">Hands-On</p>
                    <p className="text-sm text-gray-500">Operations Expert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-block bg-[#00A0D2]/10 text-[#00A0D2] px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Meet The Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5A5A5A] mb-6">
                Nearly Two Decades of
                <br />
                <span className="text-[#00A0D2]">Real-World Experience</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                KHCL Logistics isn&apos;t run from behind a desk—it&apos;s built on
                almost 20 years of hands-on experience in the trenches of supply chain
                and logistics operations.
              </p>
              <p className="text-gray-600 mb-8">
                From managing warehouse floors to optimizing freight flow, from organizing
                inventory systems to streamlining material movement—our founder has done it all.
                This deep operational knowledge means we understand your challenges from the
                inside out, not just on paper.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#00A0D2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5A5A5A]">Freight Movement</h4>
                    <p className="text-sm text-gray-500">End-to-end material flow optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#00A0D2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Warehouse className="w-5 h-5 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5A5A5A]">Warehouse Operations</h4>
                    <p className="text-sm text-gray-500">Layout, organization & efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#00A0D2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5A5A5A]">Inventory Management</h4>
                    <p className="text-sm text-gray-500">Systems that work in the real world</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#00A0D2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5A5A5A]">Supply Chain</h4>
                    <p className="text-sm text-gray-500">Complete logistics coordination</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#5A5A5A] text-white p-6 rounded-2xl">
                <p className="italic text-white/90 mb-4">
                  &quot;When you work with KHCL, you&apos;re not getting someone who just
                  learned logistics from a textbook. You&apos;re getting decades of real
                  experience—someone who&apos;s loaded trucks, managed warehouses, and
                  understands exactly what it takes to get your freight where it needs to be.&quot;
                </p>
                <p className="text-[#00A0D2] font-semibold">— J. Seal, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#5A5A5A] to-[#3D3D3D] relative overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#00A0D2] rounded-full opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,50 Q300,0 600,50 T1200,50"
              fill="none"
              stroke="#A89F91"
              strokeWidth="40"
            />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Ship?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get a competitive quote within hours. Our team is standing by to
            handle your next load with the care and professionalism it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A0D2] text-white rounded-lg font-semibold hover:bg-[#0088B5] transition-all hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href="tel:"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-[#A89F91] rounded-lg font-semibold hover:bg-[#A89F91]/20 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Client Portal CTA */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00A0D2] to-[#0088B5] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-white text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  Powered by FreightFlow
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Already a KHCL Customer?
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  Log in to FreightFlow to track your shipments in real-time, view documents,
                  and stay updated on all your active loads.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://freightflow-tms.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#00A0D2] rounded-xl font-semibold hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <LogIn className="w-5 h-5" />
                  Track Your Loads
                </a>
                <a
                  href="https://freightflow-tms.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About FreightFlow
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block bg-[#00A0D2]/10 text-[#00A0D2] px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5A5A5A] mb-4">
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
                    <MapPin className="w-6 h-6 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5A5A5A] mb-1">Location</h4>
                    <p className="text-gray-600">Florence, Mississippi</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5A5A5A] mb-1">Email</h4>
                    <a
                      href="mailto:dispatch@khcllogistics.com"
                      className="text-gray-600 hover:text-[#00A0D2] transition-colors"
                    >
                      dispatch@khcllogistics.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#00A0D2]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#5A5A5A] mb-1">Hours</h4>
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
              <h3 className="text-xl font-bold text-[#5A5A5A] mb-2">
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination City/State
                    </label>
                    <input
                      type="text"
                      placeholder="Atlanta, GA"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Type
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all bg-white">
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A0D2] focus:ring-4 focus:ring-[#00A0D2]/10 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A0D2] text-white rounded-xl font-semibold hover:bg-[#0088B5] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00A0D2]/30"
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
      <footer className="bg-[#3D3D3D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.jpg"
                  alt="KHCL Logistics"
                  width={140}
                  height={45}
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-white/70 max-w-xs">
                Your trusted freight brokerage partner. Moving freight across
                America with reliability, integrity, and competitive rates.
              </p>
            </div>
            <div>
              <h4 className="text-[#00A0D2] font-semibold uppercase tracking-wider text-sm mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Get a Quote
                  </a>
                </li>
                <li>
                  <a
                    href="https://freightflow-tms.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors inline-flex items-center gap-1"
                  >
                    Client Portal (FreightFlow)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#00A0D2] font-semibold uppercase tracking-wider text-sm mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Dry Van
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Flatbed
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
                  >
                    Refrigerated
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#00A0D2] transition-colors"
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
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#00A0D2] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-[#0088B5] hover:-translate-y-1 ${
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
