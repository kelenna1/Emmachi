import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from '../assets/flour.jpeg';
import dangote from '../assets/dangote.png';
import bua from '../assets/bua.png';
import flour from '../assets/flourmills.png';
import yeastt from '../assets/yeast.avif';

const WHATSAPP_LINK = "https://wa.me/2348161220145?text=Hi%20Emmachi%20Imperial%2C%20I%27d%20like%20to%20learn%20more%20about%20a%20wholesale%20partnership.";

/* ─── Animated Counter Hook ─── */
function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

/* ─── Stat Card ─── */
function StatCard({ value, suffix = '', label }) {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="text-center px-6 py-4 md:py-0">
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-500 mt-1 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ─── About Page ─── */
const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ═══ SEO Meta Tags ═══ */}
      <Helmet>
        <title>About Emmachi Imperial — Our Story & Wholesale Network | Lagos, Nigeria</title>
        <meta name="description" content="Learn about Emmachi Imperial's mission to be Lagos's most trusted wholesale food distributor. 30+ years of experience, trusted partners including Dangote, BUA, and Golden Penny. Outlets in Iddo & Suru Alaba." />
        <link rel="canonical" href="https://emmachiimperial.com/about" />
        <meta property="og:title" content="About Emmachi Imperial — Our Story & Wholesale Network" />
        <meta property="og:description" content="30+ years distributing premium wholesale food ingredients across South-West Nigeria. Meet Emmachi Imperial." />
        <meta property="og:url" content="https://emmachiimperial.com/about" />
      </Helmet>

      {/* ==================== SECTION 1: IMMERSIVE HERO ==================== */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Emmachi Imperial warehouse operations"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-gray-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8" data-aos="fade-down">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-emerald-400 font-semibold">About Us</span>
          </nav>

          {/* Headline */}
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6"
              data-aos="fade-up"
            >
              <span>Since 1994</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Driving Excellence in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Wholesale
              </span>{' '}
              Distribution
            </h1>

            <p
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-10"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              For over three decades, Emmachi Imperial has been the backbone of supply for
              bakeries, food manufacturers, and retailers across Lagos and the South-West.
              No middlemen. No shortcuts. Just reliable wholesale, every time.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-[0.97]"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97]"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade into stats */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== FLOATING STATS COUNTER BAR ==================== */}
      <section className="relative z-20 -mt-16 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 px-6 py-8 md:py-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <StatCard value={30} suffix="+" label="Years of Legacy" />
              <StatCard value={50} suffix="+" label="Brands Partnered" />
              <StatCard value={10000} suffix="+" label="Deliveries Fulfilled" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: OUR STORY & PHILOSOPHY ==================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Large Typography Header */}
          <div className="mb-14 md:mb-20" data-aos="fade-up">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter leading-[0.85]">
              OUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                STORY
              </span>
            </h2>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Image */}
            <div className="relative" data-aos="fade-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                <img
                  src={heroImg}
                  alt="Emmachi Imperial warehouse and distribution operations"
                  className="w-full h-[340px] md:h-[460px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -right-4 md:-right-8 bg-gray-900 text-white px-5 py-4 rounded-2xl shadow-xl max-w-[200px] border border-gray-800"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="text-2xl md:text-3xl font-black">1994</div>
                <div className="text-[11px] text-gray-400 font-medium mt-0.5">Year Founded</div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="space-y-6 lg:pt-4" data-aos="fade-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-4">
                  <span>Our Philosophy</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Three decades of building trust, one delivery at a time.
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Emmachi Imperial Enterprises was founded in 1994 with a simple belief: that businesses
                deserve a supply partner they can count on. What started as a small-scale distribution
                outfit in Lagos has grown into one of the most trusted wholesale operations in the
                South-West, serving hundreds of bakeries, food manufacturers, and retailers.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Over three decades, we've built direct partnerships with major Nigerian manufacturers
                like Flour Mills of Nigeria, Dangote, BUA, and Honeywell. Our approach is straightforward:
                source directly, price fairly, and deliver consistently. No middlemen, no shortcuts.
              </p>

              {/* Milestone Timeline */}
              <div className="pt-4 space-y-4 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-emerald-700">94</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Founded in Lagos</div>
                    <div className="text-xs text-gray-500">Started as a small distribution outlet serving local bakeries.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-emerald-700">10s</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Scaled Across the South-West</div>
                    <div className="text-xs text-gray-500">Expanded operations to serve Lagos, Ogun, and neighbouring states.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-amber-700">24</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Award-Winning Distributor</div>
                    <div className="text-xs text-gray-500">Recognised as Top Bread Flour Customer for the Lagos Region by FMN and Honeywell.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: MISSION, VISION, VALUES ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14 md:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
              <span>What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Built on Principle,{' '}
              <span className="text-emerald-700">Driven by Purpose</span>
            </h2>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-aos="fade-up" data-aos-delay="80">

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-gray-200/70 p-8 md:p-10 relative overflow-hidden group hover:border-emerald-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To bridge the gap between top FMCG manufacturers and local businesses with
                  seamless, reliable wholesale supply. We exist to make sure bakeries, retailers,
                  and food producers never run out of the ingredients they need to keep running.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl border border-gray-200/70 p-8 md:p-10 relative overflow-hidden group hover:border-emerald-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-100 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To be the most trusted wholesale distribution partner in South-West Nigeria,
                  known for consistency, fair pricing, and a product range that covers every
                  essential ingredient a food business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-6 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Uncompromising Quality', desc: 'Every product sourced directly from verified manufacturers. No counterfeits, ever.' },
                { title: 'Real Wholesale Pricing', desc: 'Direct partnerships mean factory-level prices passed straight to you.' },
                { title: 'On-Time Logistics', desc: 'We show up when we say we will. Reliable delivery across Lagos and Ogun.' },
                { title: 'Customer First', desc: 'Your business growth is our business. We adapt to your supply needs.' },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200/70 p-6 hover:border-emerald-200 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="text-sm font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-8">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================== FINAL CTA ==================== */}
      <section className="py-20 md:py-28 bg-emerald-700 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Ready to scale your supply?
          </h2>
          <p className="text-emerald-100 text-lg md:text-xl mb-10">
            Join the hundreds of businesses that rely on us for consistent, well-priced wholesale ingredients.
          </p>
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-800 font-extrabold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Let's Talk Wholesale
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
