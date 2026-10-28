import { useState, useMemo } from 'react';
import { Search, MessageCircle, ArrowRight, Package, Filter, Check, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Asset Imports
import fsugar from '../assets/fsugar.png';
import fflour from '../assets/fflour.png';
import frice from '../assets/frice.png';

// Real product images
import honeywellBakersDelight from '../assets/honeywell-bakers-delight.jpg';
import goldenPennyFlour from '../assets/golden-penny-flour.jpeg';
import stkRoyalYeast from '../assets/stk-royal-yeast.jpg';
import goldenPennySugar from '../assets/golden-penny-sugar.jpg';

const WHATSAPP_NUMBER = '2348028851717';

const PRODUCTS = [
  {
    id: 'sug-1',
    name: 'Dangote Refined Sugar',
    category: 'Sugar',
    badge: 'SUGAR',
    brand: 'Dangote',
    image: fsugar,
    description: 'Premium refined granulated sugar in 50kg wholesale bags. Ideal for bakeries, food processors, and commercial buyers.',
  },
  {
    id: 'sug-2',
    name: 'BUA Premium Sugar',
    category: 'Sugar',
    badge: 'SUGAR',
    brand: 'BUA',
    image: fsugar,
    description: 'High-purity refined sugar from BUA Sugar Refinery. Consistent quality for industrial food and beverage production.',
  },
  {
    id: 'sug-3',
    name: 'Golden Penny Sugar',
    category: 'Sugar',
    badge: 'SUGAR',
    brand: 'Golden Penny',
    image: goldenPennySugar,
    description: 'Fortified white refined sugar from Flour Mills of Nigeria. Trusted for commercial baking and confectionery.',
  },
  {
    id: 'flr-1',
    name: 'Golden Penny Prime Flour',
    category: 'Flour',
    badge: 'FLOUR',
    brand: 'Golden Penny',
    image: goldenPennyFlour,
    description: 'Versatile premium wheat flour in 50kg bags. Superior gluten content for bread, pastries, and general baking.',
  },
  {
    id: 'flr-2',
    name: "Honeywell Bakers' Delight Flour",
    category: 'Flour',
    badge: 'FLOUR',
    brand: 'Honeywell',
    image: honeywellBakersDelight,
    description: 'Specially formulated bread flour for high volume yield, excellent oven spring, and soft crumb structure.',
  },
  {
    id: 'flr-3',
    name: 'Pure Prima Wheat Flour',
    category: 'Flour',
    badge: 'FLOUR',
    brand: 'Dufil Prima',
    image: fflour,
    description: 'High-grade NAFDAC registered wheat flour (50kg). Perfect for commercial baking, snacks, and pasta production.',
  },
  {
    id: 'flr-4',
    name: 'Honeywell Mix and Bake Flour',
    category: 'Flour',
    badge: 'FLOUR',
    brand: 'Honeywell',
    image: null,
    description: 'Mix and Bake flour for commercial baking. Contact us for current pack sizes and pricing.',
  },
  {
    id: 'rce-1',
    name: 'Gata Rice',
    category: 'Rice',
    badge: 'RICE',
    brand: 'Gata',
    image: frice,
    description: '100% sortexed long grain white rice (50kg). Clean, stone-free, and high yielding for catering and retail.',
  },
  {
    id: 'rce-2',
    name: 'Mama Pride Rice',
    category: 'Rice',
    badge: 'RICE',
    brand: 'Mama Pride',
    image: frice,
    description: 'Premium parboiled long grain rice in 50kg bags. Consistent grain length, perfect for restaurants and food vendors.',
  },
  {
    id: 'yst-1',
    name: 'STK Royal Active Instant Dry Yeast',
    category: 'Yeast',
    badge: 'BAKING',
    brand: 'STK Royal',
    image: stkRoyalYeast,
    description: 'High fermentation active dry yeast for rapid dough rising and reliable proofing in commercial bakeries.',
  },
  {
    "id": "flr-5",
    "name": "Mama Gold Flour",
    "category": "Flour",
    "brand": "Mama Gold",
    "description": "Mama Gold flour for wholesale buyers. Ask our team for pack sizes and current prices.",
    "badge": "FLOUR",
    "image": null
  },
  {
    "id": "flr-6",
    "name": "Diamond Flour",
    "category": "Flour",
    "brand": "Diamond",
    "description": "Diamond flour for commercial baking. Contact us for current availability and pricing.",
    "badge": "FLOUR",
    "image": null
  },
  {
    "id": "yst-2",
    "name": "STK Royal Dough Conditioner/Improver",
    "category": "Yeast",
    "brand": "STK Royal",
    "description": "STK Royal dough conditioner/improver for commercial bakeries. Ask for pack sizes and current pricing.",
    "badge": "YEAST",
    "image": null
  },
  {
    "id": "mar-1",
    "name": "Taroona Margarine — 10kg Bucket",
    "category": "Margarine",
    "brand": "Taroona",
    "description": "Taroona margarine in a 10kg bucket for commercial baking and food production.",
    "badge": "MARGARINE",
    "image": null
  },
  {
    "id": "mar-2",
    "name": "Taroona Margarine — 10kg Carton",
    "category": "Margarine",
    "brand": "Taroona",
    "description": "Taroona margarine in a 10kg carton for wholesale buyers. Contact our team for current availability and pricing.",
    "badge": "MARGARINE",
    "image": null
  },
];

const CATEGORIES = ['All', 'Flour', 'Sugar', 'Yeast', 'Rice', 'Margarine'];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getWhatsAppUrl = (productName) => {
    const message = `Hi Emmachi Imperial, I am interested in placing a wholesale order for ${productName}. Please provide current availability and pricing.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">

      {/* ═══ SEO Meta Tags ═══ */}
      <Helmet>
        <title>Shop Wholesale — Flour, Sugar, Yeast, Rice & Margarine | Emmachi Imperial</title>
        <meta name="description" content="Browse Emmachi Imperial's wholesale product catalog. Flour, sugar, yeast, Gata Rice, Mama Pride Rice and Taroona margarine. Ask our Lagos team for current stock, prices and delivery options." />
        <link rel="canonical" href="https://emmachiimperial.com/shop" />
        <meta property="og:title" content="Wholesale Product Catalog | Emmachi Imperial" />
        <meta property="og:description" content="Flour, sugar, yeast, rice and margarine. Browse our full wholesale catalog and order via WhatsApp." />
        <meta property="og:url" content="https://emmachiimperial.com/shop" />

        {/* ═══ JSON-LD: Product Catalog ═══ */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: 'Emmachi Imperial Enterprises Wholesale Product Catalog',
          url: 'https://emmachiimperial.com/shop',
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map(({ name, brand, category, description }) => ({
            '@type': 'Product', name, brand: { '@type': 'Brand', name: brand }, category, description,
          })),
        })}</script>

        {/* ═══ JSON-LD: Breadcrumb ═══ */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://emmachiimperial.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Wholesale Catalog"
              }
            ]
          }
        `}</script>
      </Helmet>
      {/* ==================== HERO HEADER (Rectangular / Sharp Aesthetic) ==================== */}
      <section className="bg-gray-900 text-white pt-28 pb-14 md:pt-32 md:pb-20 relative overflow-hidden border-b-4 border-emerald-600">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Rectangular Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-5">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white font-bold">WHOLESALE CATALOG</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            Wholesale product catalogue
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-medium leading-relaxed">
            Wholesale baking ingredients, grains and food commodities. Contact our Lagos team for current stock, pricing and delivery options.
          </p>
        </div>
      </section>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Search & Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Search Box - Sharp Rectangular Styling */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by brand or name (e.g. Dangote, Flour, Rice)..."
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 text-gray-900 text-sm font-medium focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-bold text-gray-400 hover:text-gray-600"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Catalog Count Indicator */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 bg-white border border-gray-200 px-4 py-3 self-start md:self-auto shadow-sm">
            <Package className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Showing {filteredProducts.length} of {PRODUCTS.length} Products</span>
          </div>
        </div>

        {/* Category Filter Tabs - Rectangular Chips */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== PRODUCT GRID (Rectangular Cards) ==================== */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-2 border-gray-200 p-12 text-center my-8 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 uppercase">No products match your query</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or switching categories to browse our available items.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-gray-200 hover:border-emerald-600 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md group"
              >
                <div>
                  {/* Image Container - Sharp Rectangular Header */}
                  <div className="relative h-48 w-full bg-gray-100 border-b border-gray-200 overflow-hidden">
                    {product.image ? (<img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />) : (<div className="h-full flex flex-col items-center justify-center gap-3 px-6 text-center bg-emerald-50 text-emerald-800"><Package className="w-12 h-12" aria-hidden="true" /><span className="text-sm font-semibold">{product.name}</span></div>)}
                    
                    {/* Category Badge - Rectangular */}
                    <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-mono font-bold px-2.5 py-1 tracking-widest border border-gray-700 uppercase">
                      {product.badge}
                    </span>

                    {/* Wholesale Tag */}
                    <span className="absolute bottom-3 right-3 bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 tracking-wider uppercase">
                      Ask for pack sizes
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-5">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-1">
                      {product.brand}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Card Action - Sharp Rectangular WhatsApp Button */}
                <div className="p-5 pt-0">
                  <a
                    href={getWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm active:translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== BOTTOM INQUIRY BANNER (Rectangular Layout) ==================== */}
        <section className="mt-16 bg-gray-900 text-white border-l-8 border-emerald-500 p-8 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                CUSTOM WHOLESALE ORDERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
                Need bulk quantities or unlisted brands?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                We supply bakeries, hotels, institutions, and high-volume industrial food processors. Speak directly with our sales team for custom logistics and tiered volume pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Emmachi Imperial, I would like to make a custom bulk wholesale inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Sales</span>
              </a>
              <a
                href="tel:+2348028851717"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Us Direct</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
