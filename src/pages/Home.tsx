import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isFeatured: boolean;
  badge?: string;
  category: 'networking' | 'computer' | 'cables' | 'tools';
  brand: string;
  stock: number;
  isAvailable: boolean;
  rating: number;
};

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

// Product data with high-quality Unsplash images
const productData: Product[] = [
  {
    id: 1,
    title: 'TP-Link Archer AX73 WiFi 6 Router',
    description: 'Dual-Band Gigabit WiFi 6 Router with 8 High-Gain Antennas, 4K Streaming, MU-MIMO, OFDMA. Covers up to 3,000 sq. ft.',
    price: 15999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    badge: 'Best Seller',
    category: 'networking',
    brand: 'TP-Link',
    stock: 24,
    isAvailable: true,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Cisco Catalyst 2960-L Series Switch',
    description: '24-Port Gigabit Ethernet Switch with PoE+, Layer 2 Smart Managed, Ideal for Small Business Networks.',
    price: 45999,
    originalPrice: 52999,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    badge: 'Professional',
    category: 'networking',
    brand: 'Cisco',
    stock: 8,
    isAvailable: true,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Samsung 1TB NVMe SSD 980 PRO',
    description: 'PCIe 4.0 M.2 Internal Gaming SSD with Heatsink, Sequential Read/Write up to 7,000/5,100 MB/s.',
    price: 18999,
    originalPrice: 21999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    badge: 'Hot Deal',
    category: 'computer',
    brand: 'Samsung',
    stock: 42,
    isAvailable: true,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Cat 6 Ethernet Cable 50ft - Pack of 10',
    description: 'High-Speed Internet Cable, 550MHz, UTP, CM Rated, Snagless RJ45 Connectors, Blue.',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    badge: 'Bulk Pack',
    category: 'cables',
    brand: 'UGreen',
    stock: 156,
    isAvailable: true,
    rating: 4.6
  },
  {
    id: 5,
    title: 'D-Link DAP-1720 WiFi Mesh Extender',
    description: 'AC1750 Dual-Band WiFi Mesh Extender with Smart Signal Indicator, Gigabit Port, Easy Setup.',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    badge: 'New Arrival',
    category: 'networking',
    brand: 'D-Link',
    stock: 18,
    isAvailable: true,
    rating: 4.5
  },
  {
    id: 6,
    title: 'Corsair Vengeance LPX 32GB RAM',
    description: 'DDR4 3200MHz C16 Desktop Memory Kit (2x16GB), XMP 2.0, Aluminum Heat Spreader.',
    price: 14999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    badge: 'Gaming',
    category: 'computer',
    brand: 'Corsair',
    stock: 31,
    isAvailable: true,
    rating: 4.8
  }
];

const featuresData: FeatureItem[] = [
  {
    id: 1,
    title: 'Quality Guaranteed',
    description: 'All products come with 1-year warranty and genuine manufacturer certification.',
    icon: '🏆'
  },
  {
    id: 2,
    title: 'Same-Day Delivery',
    description: 'Free same-day delivery within Nairobi CBD for orders above KES 5,000.',
    icon: '🚚'
  },
  {
    id: 3,
    title: 'Expert Support',
    description: 'Free technical support and consultation for all networking and computer products.',
    icon: '👨‍💼'
  },
  {
    id: 4,
    title: 'Secure Payment',
    description: 'Multiple payment options including M-Pesa, Visa, and bank transfers with SSL security.',
    icon: '🔒'
  }
];

const Home: React.FC = () => {
  const featuredProducts = productData.filter(product => product.isFeatured);
  const popularProducts = productData.filter(product => !product.isFeatured);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Networking Equipment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-cyan-300">🏆</span>
              <span className="text-sm font-medium">Nairobi's Trusted Electronics Supplier</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Premium Electronics
              <span className="block text-cyan-400 mt-2">Solutions for Business</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              JOSE Electronics delivers cutting-edge networking devices, computer components, 
              and cables to power your digital transformation across Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Browse Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <span>Get Professional Quote</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-cyan-300">500+</div>
                <div className="text-sm text-gray-400">Quality Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300">24/7</div>
                <div className="text-sm text-gray-400">Technical Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">SHARKS COLLECTIONS HUB</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine quality products with exceptional service to deliver complete technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map(feature => (
              <div key={feature.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Premium selection of top-quality electronics equipment</p>
            </div>
            <Link 
              to="/products" 
              className="mt-4 md:mt-0 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-lg text-sm font-bold">
                    {product.category === 'networking' ? '📡 Networking' : 
                     product.category === 'computer' ? '💻 Computer' : '🔌 Cables'}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 pr-4">{product.title}</h3>
                    {renderStars(product.rating)}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="font-medium bg-gray-100 px-3 py-1 rounded-lg">{product.brand}</span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-sm">Stock: {product.stock}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-3xl font-bold text-green-600">
                        KES {product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="text-lg font-normal text-gray-500 line-through ml-2">
                            KES {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Free Nairobi Delivery</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Products</h2>
            <p className="text-gray-600">Best-selling electronics chosen by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.title}</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">{product.brand}</span>
                    {renderStars(product.rating)}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        KES {product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="text-sm font-normal text-gray-500 line-through ml-2">
                            {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Product Categories</h2>
            <p className="text-gray-600">Browse our comprehensive range of electronics products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/networking" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Networking"
                  className="w-full h-64 object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-4xl mb-4">📡</div>
                  <h3 className="text-2xl font-bold mb-3">Networking Devices</h3>
                  <p className="text-blue-200 mb-6">Routers, Switches, Access Points, Modems</p>
                  <div className="flex items-center text-cyan-300 group-hover:gap-2 transition-all duration-300">
                    <span>Explore Category</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/computer-components" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Computer Components"
                  className="w-full h-64 object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-3">Computer Components</h3>
                  <p className="text-blue-200 mb-6">RAM, SSDs, CPUs, Motherboards, Graphics Cards</p>
                  <div className="flex items-center text-cyan-300 group-hover:gap-2 transition-all duration-300">
                    <span>Explore Category</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/cables" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900 to-blue-900 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cables"
                  className="w-full h-64 object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-4xl mb-4">🔌</div>
                  <h3 className="text-2xl font-bold mb-3">Cables & Accessories</h3>
                  <p className="text-blue-200 mb-6">Ethernet, HDMI, USB, Power Cables, Connectors</p>
                  <div className="flex items-center text-cyan-300 group-hover:gap-2 transition-all duration-300">
                    <span>Explore Category</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contact our technical experts for personalized solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="group bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
              >
                <span>Contact Our Experts</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="/products"
                className="group border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg"
              >
                <span>Browse Full Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;