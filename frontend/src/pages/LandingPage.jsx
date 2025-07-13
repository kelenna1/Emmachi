import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Truck, Shield, Star, CheckCircle } from 'lucide-react';
import load from '../assets/flour.jpeg';
import dangote from '../assets/dangote.png';
import bua from '../assets/bua.png';
import mama from '../assets/mama.jpeg';
import business from '../assets/Business.jpeg';
import Sugar from '../assets/Sugar.jpeg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const partners = [
    { name: 'Dangote', logo: dangote },
    { name: 'Bua', logo: bua },
    { name: 'Mama Gold', logo: mama },
    { name: 'Golden Penny', logo: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'STK Royal', logo: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const products = [
    {
      name: 'Premium Flour',
      description: 'High-quality wheat flour for professional baking',
      image: load,
      features: ['Grade A quality', 'Consistent texture', 'Bulk packaging available'],
    },
    {
      name: 'Refined Sugar',
      description: 'Pure cane sugar for commercial food production',
      image: Sugar,
      features: ['99.9% purity', 'Food grade', 'Various grain sizes'],
    },
    {
      name: 'Active Yeast',
      description: 'Fresh and dried yeast for all baking needs',
      image: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['High activity', 'Extended shelf life', 'Consistent performance'],
    },
  ];

  const testimonials = [
    {
      name: 'Chief Adebayo',
      company: 'Golden Crust Bakery',
      rating: 5,
      comment: 'Emmachi Imperial has been our trusted supplier for over 5 years. Their quality is unmatched and delivery is always on time.',
    },
    {
      name: 'Mrs. Okonkwo',
      company: 'Sweet Treats Ltd',
      rating: 5,
      comment: 'The quality of their flour transformed our bread production. Our customers notice the difference immediately.',
    },
    {
      name: 'Mr. Hassan',
      company: 'Northern Foods',
      rating: 5,
      comment: 'Professional service, competitive prices, and exceptional quality. They understand the needs of food manufacturers.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '1,000+', label: 'Business Partners' },
    { number: '50+', label: 'Premium Products' },
    { number: '99.9%', label: 'Quality Assurance' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Loading Screen */}
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000 opacity-0 pointer-events-none" id="loader">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-r from-gold-500 to-green-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-200 via-green-700 to-gold-200 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-200/20 to-green-300/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Ingredients for
                  <span className="text-white bg-clip-text bg-gradient-to-r from-gold-600 to-black">
                    {' '}Africa's Finest Bakers
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-black max-w-lg">
                  Your trusted partner for high-quality food ingredients in Nigeria.
                  Serving professional bakers, restaurants, and food manufacturers for over 10 years.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gold-500 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:from-gold-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
                >
                  Browse Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+2348034282951"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-50 transition-all duration-200"
                >
                  Call for Orders
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="text-2xl md:text-3xl font-bold text-gray-950">{stat.number}</div>
                    <div className="text-sm text-gray-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block" data-aos="fade-left">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-300/20 to-green-400/20 blur-sm mix-blend-overlay z-10"></div>
              <img
                src={load}
                alt="Premium baking ingredients"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src={business}
                alt="Food processing facility"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  About Emmachi Imperial
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  For over a decade, Emmachi Imperial has been Nigeria's trusted distributor of premium food ingredients.
                  Based in Lagos, we serve bakeries, restaurants, and food manufacturers across the nation with
                  uncompromising quality and reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Award className="w-4 h-4 text-gold-600" />, title: "Quality Assured", text: "Every product meets international food safety standards" },
                  { icon: <Truck className="w-4 h-4 text-green-600" />, title: "Reliable Delivery", text: "On-time delivery across Nigeria with proper handling" },
                  { icon: <Users className="w-4 h-4 text-gold-600" />, title: "Expert Support", text: "Professional consultation for your business needs" },
                  { icon: <Shield className="w-4 h-4 text-green-600" />, title: "Trusted Partner", text: "Long-term relationships with 1,000+ businesses" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-beige-50 rounded-lg">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 md:py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We work with Nigeria's leading food manufacturers to bring you the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8" data-aos="fade-up">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow hover:scale-105 duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-full h-12 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="h-8 md:h-10 object-contain" />
                  ) : (
                    <span className="text-xs md:text-sm text-gray-600 font-semibold">{partner.name}</span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-600 text-center">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Premium ingredients for all your food production needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{product.description}</p>
                  <ul className="space-y-1 md:space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12" data-aos="fade-up">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-2xl hover:bg-beige-50 transform hover:scale-105 transition-all duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-beige-100 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Serving 1,000+ businesses across Nigeria with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gold-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4" data-aos="fade-up">
            Ready to Partner with Us?
          </h2>
          <p className="text-base md:text-xl text-black/90 mb-6 md:mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join thousands of satisfied customers who trust Emmachi Imperial for their food ingredient needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-beige-50 transform hover:scale-105 transition-all duration-200"
            >
              Browse Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+2348034282951"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border-2 border-white text-black font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Call Now: +234 803 428 2951
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;