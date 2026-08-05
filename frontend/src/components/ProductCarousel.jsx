import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '2348161220145';

const ProductCarousel = ({ products = [], speed = 1.0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isUserInteracting = useRef(false);
  const interactionTimeout = useRef(null);

  // Duplicate items for seamless infinite scroll (original + one clone set)
  const displayItems = [...products, ...products];

  // Pause auto-scroll during any user interaction, resume after a delay
  const pauseAutoScroll = useCallback(() => {
    isUserInteracting.current = true;
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, 2500); // resume 2.5s after user stops touching/hovering
  }, []);

  // CSS-driven infinite scroll using translateX on a wrapper
  // This avoids fighting with native scroll and snap
  useEffect(() => {
    const container = containerRef.current;
    if (!container || products.length === 0) return;

    let position = 0;

    const animate = () => {
      if (!isUserInteracting.current) {
        position += speed * 0.6;

        // When we've scrolled past the first set of cards, seamlessly reset
        const singleSetWidth = container.scrollWidth / 2;
        if (position >= singleSetWidth) {
          position = 0;
        }

        container.scrollLeft = position;
      } else {
        // Track where user scrolled to so we resume from there
        position = container.scrollLeft;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [speed, products.length]);

  // Track active card based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstElementChild?.offsetWidth || 280;
      const gap = 20; // gap-5 = 1.25rem = 20px
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveIndex(index % products.length);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [products.length]);

  // Get actual card scroll width for nav buttons
  const getCardScrollAmount = () => {
    const container = containerRef.current;
    if (!container || !container.firstElementChild) return 300;
    return container.firstElementChild.offsetWidth + 20; // card width + gap
  };

  const scrollTo = (direction) => {
    pauseAutoScroll();
    const amount = getCardScrollAmount();
    containerRef.current?.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const scrollToCard = (index) => {
    pauseAutoScroll();
    const amount = getCardScrollAmount();
    containerRef.current?.scrollTo({
      left: index * amount,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const getWhatsAppUrl = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Emmachi Imperial, ' + text)}`;

  return (
    <section
      id="products"
      className="py-16 md:py-20 bg-gray-50/40 border-b border-gray-100 relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 md:mb-12">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <span>Comprehensive Supply Network</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Product <span className="text-emerald-700">Categories</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-2.5 font-normal">
            Premium wholesale ingredients for bakeries, manufacturers, and food producers across Nigeria.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={containerRef}
          className="flex gap-5 pb-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => {
            clearTimeout(interactionTimeout.current);
            interactionTimeout.current = setTimeout(() => {
              isUserInteracting.current = false;
            }, 800);
          }}
          onTouchStart={pauseAutoScroll}
          onTouchEnd={() => {
            clearTimeout(interactionTimeout.current);
            interactionTimeout.current = setTimeout(() => {
              isUserInteracting.current = false;
            }, 2500);
          }}
        >
          {displayItems.map((product, index) => {
            const waOrderUrl = getWhatsAppUrl(product.whatsappText);
            const isOriginal = index < products.length;
            const itemKey = isOriginal ? `original-${index}` : `clone-${index}`;

            return (
              <div
                key={itemKey}
                className="group flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
              >
                {/* Product Card */}
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-emerald-500/40 transition-all duration-300 flex flex-col h-full overflow-hidden">

                  {/* Image */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2 py-1 rounded-lg border border-white/20 tracking-wide">
                      {product.badge}
                    </span>

                    {/* Bulk Ready */}
                    <span className="absolute bottom-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Bulk Ready
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-1.5 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="pt-3 mt-2">
                      <a
                        href={waOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] sm:text-xs shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.97]"
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.98-.365-1.739-.767-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.559 4.14 1.554 5.882l-1.655 6.05 6.257-1.639c1.696.93 3.639 1.463 5.72 1.465 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 text-gray-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
            onClick={() => scrollTo('left')}
            aria-label="Scroll left"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="flex gap-1.5 items-center">
            {products.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-emerald-600 w-5 sm:w-6'
                    : 'bg-gray-300 w-1.5 sm:w-2 hover:bg-emerald-400'
                }`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to ${products[index]?.name}`}
              />
            ))}
          </div>

          <button
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 text-gray-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
            onClick={() => scrollTo('right')}
            aria-label="Scroll right"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12" data-aos="fade-up">
          <a
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 bg-gray-900 text-white font-bold text-xs md:text-sm rounded-xl shadow-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <span>Explore Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;