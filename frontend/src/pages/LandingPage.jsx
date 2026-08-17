import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Award, Truck, Shield, CheckCircle, Banknote, Package, MessageCircle, MapPin, Phone, Clock, Mail } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import ThreeDCarousel from '../components/ThreeDCarousel';
import ProductCarousel from '../components/ProductCarousel';
import BentoGrid from '../components/BentoGrid';
import heroImg from '../assets/emmachi-land.jpg';
import awardImg from '../assets/Award.png';
import load from '../assets/flour.jpeg';
import dangote from '../assets/dangote.png';
import bua from '../assets/bua.png';
import mama from '../assets/mama.jpeg';
import business from '../assets/Business.jpeg';
import Sugar from '../assets/fsugar.png';
import flour from '../assets/flourmills.png';
import fflour from '../assets/fflour.png';
import frice from '../assets/frice.png';
import foil from '../assets/foil.png';
import fspag from '../assets/fspag.png';
import yeastt from '../assets/yeast.avif';
import yeast from '../assets/yeast.jpg';
import nono from '../assets/nono.jpg';
import oil from '../assets/oil.png';
import spices from '../assets/spices.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WHATSAPP_LINK = "https://wa.me/2348161220145?text=Hi%20Emmachi%20Imperial%2C%20I%27d%20like%20to%20place%20an%20order.";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const partners = [
    { name: 'Dangote', logo: dangote },
    { name: 'BUA', logo: bua },
    { name: 'Mama Gold', logo: mama },
    { name: 'Flour Mills', logo: flour },
    { name: 'STK Royal', logo: yeastt },
  ];

  const products = [
    {
      name: 'Premium Rice',
      badge: 'RICE',
      description: 'Wholesale rice from trusted brands like Mama Africa and Royal Stallion, available in 50kg bags for bulk buyers.',
      image: frice,
      whatsappText: "I'd like to order Premium Rice in bulk. Please send current prices."
    },
    {
      name: 'Refined Sugar',
      badge: 'SUGAR',
      description: 'Premium refined sugar from BUA, Dangote, and Golden Penny. Ideal for bakeries, beverage production, and confectionery.',
      image: Sugar,
      whatsappText: "I'd like to place a wholesale order for Refined Sugar."
    },
    {
      name: 'Baking Flour',
      badge: 'FLOUR',
      description: 'High-quality wheat flour from Golden Penny, Honeywell, and Prima. Perfect for commercial baking and food production.',
      image: fflour,
      whatsappText: "I'd like to order Baking Flour in bulk. Please send available brands and prices."
    },
    {
      name: 'Vegetable Oil',
      badge: 'OIL',
      description: "Kings, Devon Kings, and Turkey vegetable oil available in jerrycans and drums for restaurants, bakeries, and food businesses.",
      image: foil,
      whatsappText: "Please send pricing for Vegetable Oil in bulk quantities."
    },
    {
      name: 'Spaghetti',
      badge: 'PASTA',
      description: 'Golden Penny and Dangote spaghetti in wholesale cartons. Consistent supply for retailers and food distributors.',
      image: fspag,
      whatsappText: "I'd like to order Spaghetti in bulk. What brands and quantities are available?"
    },
  ];

  const highlights = [
    { icon: <Award className="w-6 h-6 text-emerald-600" />, title: "Quality Assured", text: "Every product meets strict international food safety standards." },
    { icon: <Truck className="w-6 h-6 text-emerald-600" />, title: "Reliable Delivery", text: "On-time, safe logistics and delivery anywhere across Nigeria." },
    { icon: <Shield className="w-6 h-6 text-emerald-600" />, title: "Trusted Partner", text: "Building reliable relationships with 1,000+ businesses over 30 years." },
    { icon: <Banknote className="w-6 h-6 text-emerald-600" />, title: "Competitive Pricing", text: "Direct manufacturer partnerships guarantee the best wholesale rates." },
    { icon: <Package className="w-6 h-6 text-emerald-600" />, title: "Bulk Supply", text: "Scalable fulfillment to handle any commercial quantity seamlessly." },
    { icon: <MessageCircle className="w-6 h-6 text-emerald-600" />, title: "Instant Support", text: "Fast and easy bulk ordering directly through our WhatsApp channel." }
  ];

  const stats = [
    { number: '30+', label: 'Years Experience' },
    { number: '50+', label: 'Products' },
    { number: '99.9%', label: 'Quality Rate' },
  ];

  return (
    <div className="overflow-hidden">

      {/* ═══ SEO Meta Tags ═══ */}
      <Helmet>
        <title>Emmachi Imperial — Premium Wholesale Food Ingredients in Lagos, Nigeria</title>
        <meta name="description" content="Emmachi Imperial distributes premium wholesale sugar, flour, rice, pasta, cooking oil and spices across South-West Nigeria. Trusted partners: Dangote, BUA, Golden Penny. Same-day delivery from Lagos." />
        <link rel="canonical" href="https://emmachiimperial.com/" />
        <meta property="og:title" content="Emmachi Imperial — Premium Wholesale Food Ingredients in Lagos" />
        <meta property="og:description" content="Wholesale sugar, flour, rice, pasta, cooking oil & spices. Dangote, BUA, Golden Penny. Same-day Lagos delivery." />
        <meta property="og:url" content="https://emmachiimperial.com/" />

        {/* ═══ JSON-LD: WholesaleStore (Business Identity) ═══ */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WholesaleStore",
            "@id": "https://emmachiimperial.com/#business",
            "name": "Emmachi Imperial",
            "alternateName": "Emmachi Imperial Nigeria",
            "description": "Premium wholesale distributor of sugar, flour, rice, pasta, cooking oil, yeast, and spices across South-West Nigeria. Serving bakeries, restaurants, and food manufacturers since 1994.",
            "url": "https://emmachiimperial.com",
            "telephone": "+2348161220145",
            "email": "emmachi2025@gmail.com",
            "foundingDate": "1994",
            "image": "https://emmachiimperial.com/emmachi.svg",
            "logo": {
              "@type": "ImageObject",
              "url": "https://emmachiimperial.com/emmachi.svg"
            },
            "address": [
              {
                "@type": "PostalAddress",
                "name": "Emmachi Imperial — Iddo Outlet",
                "streetAddress": "Heyden trailer park, Iddo underbridge",
                "addressLocality": "Iddo, Lagos",
                "addressRegion": "Lagos",
                "addressCountry": "NG"
              },
              {
                "@type": "PostalAddress",
                "name": "Emmachi Imperial — Suru Outlet",
                "streetAddress": "A40, Army Mammy Market",
                "addressLocality": "Suru Alaba, Lagos",
                "addressRegion": "Lagos",
                "addressCountry": "NG"
              }
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 6.5244,
                "longitude": 3.3792
              },
              "geoRadius": "200000"
            },
            "priceRange": "$$",
            "currenciesAccepted": "NGN",
            "paymentAccepted": "Cash, Bank Transfer",
            "knowsAbout": [
              "Wholesale sugar distribution",
              "Wholesale flour distribution",
              "Wholesale rice distribution",
              "Wholesale cooking oil",
              "Wholesale spaghetti and pasta",
              "Wholesale yeast and baking supplies",
              "Food commodity trading in Nigeria"
            ],
            "brand": [
              { "@type": "Brand", "name": "Dangote" },
              { "@type": "Brand", "name": "BUA" },
              { "@type": "Brand", "name": "Golden Penny" },
              { "@type": "Brand", "name": "Honeywell" },
              { "@type": "Brand", "name": "Mama Africa" },
              { "@type": "Brand", "name": "STK Royal" }
            ],
            "sameAs": []
          }
        `}</script>

        {/* ═══ JSON-LD: WebSite (Sitelinks Search) ═══ */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Emmachi Imperial",
            "url": "https://emmachiimperial.com",
            "publisher": {
              "@id": "https://emmachiimperial.com/#business"
            }
          }
        `}</script>
      </Helmet>

      {/* ==================== HERO SECTION - Split cinematic style ==================== */}
      <section className="hero-cinematic min-h-screen flex items-center relative">
        {/* Background image with slow zoom */}
        <div className="hero-cinematic-bg">
          <img src={heroImg} alt="Emmachi Imperial distribution warehouse" />
        </div>

        {/* Green gradient overlay */}
        <div className="hero-cinematic-overlay"></div>

        {/* Content */}
        <div className="hero-cinematic-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Big Bold Headline & Categories Subheading */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Reliable<br/>
                Distribution<br/>
                <span className="text-yellow-300">You Can Trust</span>
              </h1>
              <div className="text-xs md:text-sm font-semibold tracking-widest text-white/50 uppercase pt-4 border-t border-white/10 max-w-md">
                Flour \ Sugar \ Rice \ Oil \ Spaghetti
              </div>
            </div>

            {/* Right Column: Description & Horizontal Buttons */}
            <div className="lg:col-span-5 space-y-8 lg:pl-6" data-aos="fade-left" data-aos-delay="200">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                For over three decades, we have proudly supplied high-quality food ingredients and industrial raw materials to bakeries, manufacturers, and businesses across Nigeria.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {/* Secondary Button: Outline Contact Us */}
                <Link
                  to="/shop"
                  className="px-6 py-3 border border-white hover:border-white/80 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 decoration-none"
                >
                  Browse Products
                </Link>

                {/* Primary Button: White background with WhatsApp Green Icon */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-full text-sm font-bold shadow-lg hover:shadow-white/5 transition-all duration-300 decoration-none"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Stats Bar at the bottom of the Hero Section */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mt-16 pt-8 border-t border-white/15" data-aos="fade-up" data-aos-delay="400">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-2xl md:text-3xl font-extrabold text-yellow-300">{stat.number}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== RECOGNITION & EXCELLENCE SECTION ==================== */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with Award Badge Overlay */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative">
                <div className="rounded-3xl shadow-xl overflow-hidden bg-gray-50 border border-gray-100 p-2">
                  <img
                    src={awardImg}
                    alt="Emmachi Imperial Enterprises B2B Sales Awards - Top Bread Flour Customer Lagos Region"
                    className="w-full h-80 md:h-[440px] object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating Award Badge */}
                <div 
                  className="absolute -bottom-6 -right-2 md:-right-6 bg-amber-500 text-white p-4 md:p-5 rounded-2xl shadow-2xl max-w-[240px] border-2 border-white"
                  data-aos="zoom-in" 
                  data-aos-delay="300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-5 h-5 text-yellow-100" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-100">Official Recognition</span>
                  </div>
                  <div className="text-lg font-extrabold leading-tight">Top Bread Flour Customer</div>
                  <div className="text-xs text-amber-100 mt-1 font-medium">Lagos Region (2023–2025)</div>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Milestones */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6" data-aos="fade-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Industry Recognition</span>
                </div>
                <div className="relative inline-block pb-2">
                  <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    <ShinyText 
                      text="Award-Winning Excellence in FMCG Distribution"
                      color="#0f172a"
                      shineColor="#10b981"
                      speed={2.5}
                      spread={140}
                    />
                  </h2>
                  {/* Subtle Arc Stroke Accent */}
                  <svg className="absolute -bottom-1 left-0 w-full h-4 text-emerald-500/50" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                    <path d="M 0 6 Q 100 20 200 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                At Emmachi Imperial Enterprises, our commitment to reliability and scale has not gone unnoticed. We are proud to be consecutively recognized as the <strong className="text-gray-900 font-bold">Top Bread Flour Customer for the Lagos Region</strong> by <strong className="text-gray-900 font-bold">FMN</strong> and <strong className="text-gray-900 font-bold">Honeywell</strong> for the <strong className="text-gray-900 font-bold">2023/24</strong> and <strong className="text-gray-900 font-bold">2024/25</strong> B2B Sales years. These milestones reflect our deep market penetration, unwavering consistency, and dedication to bridging the gap between premium FMCG manufacturers and local businesses.
              </p>

              {/* Achievement Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl font-black text-emerald-700">2023–2025</div>
                  <div className="text-xs text-gray-600 font-medium mt-0.5">Consecutive Award Winner</div>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl font-black text-emerald-700">Lagos Region</div>
                  <div className="text-xs text-gray-600 font-medium mt-0.5">#1 Bread Flour Customer</div>
                </div>
              </div>

              {/* Link to About Page */}
              <div className="pt-2">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800 transition-all duration-300 group decoration-none"
                >
                  <span>Learn more about our journey & vision</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== BRANDS WE DISTRIBUTE SECTION (Marquee Carousel) ==================== */}
      <section id="partners" className="py-20 bg-gray-50/70 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Direct Manufacturer Partnerships</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Brands We Distribute
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 font-normal">
              Direct partnerships with Nigeria's leading FMCG manufacturers guarantee 100% authentic products and consistent bulk supply.
            </p>
          </div>
        </div>

        {/* 3D Auto-Scrolling Brand Carousel */}
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-4">
          <ThreeDCarousel items={partners} speed={1.4} />
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS SECTION - Creative Carousel ==================== */}
      <ProductCarousel products={products} speed={1.2} />

      {/* ==================== HIGHLIGHTS / WHY CHOOSE US ==================== */}
      <BentoGrid />

      {/* ==================== CONTACT & LOCATIONS ==================== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
              <span>Get in Touch</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Visit Us or Place an Order
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto">
              Walk in, call, or message us on WhatsApp, whatever works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

            {/* Left - Contact Info */}
            <div className="bg-white rounded-2xl border border-gray-200/70 p-6 md:p-8 space-y-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>

              <div className="space-y-5">
                {/* Phone */}
                <a href="tel:+2348161220145" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Phone</div>
                    <div className="text-sm text-gray-500 group-hover:text-emerald-700 transition-colors">+234 816 122 0145</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/2348161220145" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-500 group-hover:text-emerald-700 transition-colors">Message us directly</div>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:emmachi2025@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Email</div>
                    <div className="text-sm text-gray-500 group-hover:text-emerald-700 transition-colors">emmachi2025@gmail.com</div>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Business Hours</div>
                    <div className="text-sm text-gray-500">Mon – Sat: 8:00 AM – 6:00 PM</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348161220145"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.97] mt-2"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.98-.365-1.739-.767-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.559 4.14 1.554 5.882l-1.655 6.05 6.257-1.639c1.696.93 3.639 1.463 5.72 1.465 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Right - Locations */}
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">

              {/* Location 1: Iddo */}
              <div className="bg-white rounded-2xl border border-gray-200/70 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-gray-900">Iddo Outlet</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">Iddo</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Heyden trailer park, Iddo underbridge, Iddo, Lagos
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Heyden+trailer+park+Iddo+underbridge+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-3 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2: Suru Alaba */}
              <div className="bg-white rounded-2xl border border-gray-200/70 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-gray-900">Suru Outlet</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">Suru Alaba</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      A40, army mammy market, Suru Alaba
                    </p>
                    <a
                      href="https://www.google.com/maps/search/A40+army+mammy+market+Suru+Alaba+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-3 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA BANNER ==================== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.08),transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight" data-aos="fade-up">
            Ready to Place Your Order?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="80">
            Whether you need 50 bags or 500, we've got you covered. Reach out however works best for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" data-aos="fade-up" data-aos-delay="150">
            {/* Primary: WhatsApp */}
            <a
              href="https://wa.me/2348161220145"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-[0.97]"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.98-.365-1.739-.767-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.559 4.14 1.554 5.882l-1.655 6.05 6.257-1.639c1.696.93 3.639 1.463 5.72 1.465 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
              </svg>
              Order on WhatsApp
            </a>

            {/* Secondary: Browse Products */}
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm rounded-xl shadow-lg transition-all duration-200 active:scale-[0.97]"
            >
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Tertiary: Call */}
            <a
              href="tel:+2348161220145"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        {/* Simple minimal SVG icon */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default LandingPage;