import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type NetworkingProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  type: 'router' | 'switch' | 'access-point' | 'modem' | 'extender';
  brand: string;
  stock: number;
  rating: number;
  specs: {
    key: string;
    value: string;
  }[];
};

// Networking products data with Unsplash images
const networkingProducts: NetworkingProduct[] = [
  {
    id: 1,
    title: 'TP-Link Archer AX73 WiFi 6 Router',
    description: 'Dual-Band Gigabit WiFi 6 Router with 8 High-Gain Antennas, 4K Streaming, MU-MIMO, OFDMA.',
    price: 15999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'router',
    brand: 'TP-Link',
    stock: 24,
    rating: 4.8,
    specs: [
      { key: 'WiFi Standard', value: 'WiFi 6 (802.11ax)' },
      { key: 'Speed', value: 'AX5400 Dual-Band' },
      { key: 'Coverage', value: 'Up to 3,000 sq. ft.' },
      { key: 'Antennas', value: '8 High-Gain' },
      { key: 'Ports', value: '1× 2.5 Gbps WAN, 4× Gigabit LAN' }
    ]
  },
  {
    id: 2,
    title: 'Cisco Catalyst 2960-L Switch',
    description: '24-Port Gigabit Ethernet Switch with PoE+, Layer 2 Smart Managed for Business Networks.',
    price: 45999,
    originalPrice: 52999,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'switch',
    brand: 'Cisco',
    stock: 8,
    rating: 4.9,
    specs: [
      { key: 'Ports', value: '24× Gigabit Ethernet' },
      { key: 'PoE+', value: 'Yes (370W total)' },
      { key: 'Management', value: 'Layer 2 Smart' },
      { key: 'Speed', value: '10/100/1000 Mbps' },
      { key: 'Warranty', value: 'Lifetime' }
    ]
  },
  {
    id: 3,
    title: 'Ubiquiti UniFi Dream Machine Pro',
    description: 'All-in-One Enterprise Security Gateway, Network Controller, and NVR with 8-Port Switch.',
    price: 78999,
    originalPrice: 89999,
    image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'router',
    brand: 'Ubiquiti',
    stock: 6,
    rating: 4.8,
    specs: [
      { key: 'Security Gateway', value: 'Yes' },
      { key: 'Network Controller', value: 'Built-in UniFi OS' },
      { key: 'Ports', value: '8× Gigabit' },
      { key: 'PoE', value: '8× PoE+ Ports' },
      { key: 'Throughput', value: '3.5 Gbps' }
    ]
  },
  {
    id: 4,
    title: 'D-Link DAP-1720 WiFi Mesh Extender',
    description: 'AC1750 Dual-Band WiFi Mesh Extender with Smart Signal Indicator, Gigabit Port, Easy Setup.',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'extender',
    brand: 'D-Link',
    stock: 18,
    rating: 4.5,
    specs: [
      { key: 'Standard', value: 'AC1750' },
      { key: 'Bands', value: 'Dual-Band (2.4GHz & 5GHz)' },
      { key: 'Coverage', value: 'Up to 1,500 sq. ft.' },
      { key: 'Ports', value: '1× Gigabit Ethernet' },
      { key: 'MU-MIMO', value: 'Yes' }
    ]
  },
  {
    id: 5,
    title: 'NETGEAR Nighthawk AX12 Router',
    description: 'WiFi 6 Router with 12-Stream, 6Gbps Speed, NETGEAR Armor Security, 4×4 MU-MIMO.',
    price: 28999,
    originalPrice: 34999,
    image: 'https://images.unsplash.com/photo-1592496008945-5a9ed5e255d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'router',
    brand: 'NETGEAR',
    stock: 12,
    rating: 4.7,
    specs: [
      { key: 'WiFi Standard', value: 'WiFi 6 (802.11ax)' },
      { key: 'Speed', value: 'AX6000 (6Gbps)' },
      { key: 'Streams', value: '12-Stream' },
      { key: 'Coverage', value: 'Up to 2,500 sq. ft.' },
      { key: 'Security', value: 'NETGEAR Armor' }
    ]
  },
  {
    id: 6,
    title: 'TP-Link Omada EAP225 Access Point',
    description: 'Ceiling Mount WiFi 5 Access Point, 867Mbps on 5GHz, PoE Powered, Cloud Managed.',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'access-point',
    brand: 'TP-Link',
    stock: 35,
    rating: 4.6,
    specs: [
      { key: 'WiFi Standard', value: 'WiFi 5 (802.11ac)' },
      { key: 'Speed', value: '867Mbps (5GHz)' },
      { key: 'Mounting', value: 'Ceiling/Wall' },
      { key: 'Power', value: '802.3af PoE' },
      { key: 'Management', value: 'Omada Cloud/SDN' }
    ]
  },
  {
    id: 7,
    title: 'HP 1820-24G Switch',
    description: '24-Port Gigabit Ethernet Switch, Plug-and-Play, Fanless Design, Limited Lifetime Warranty.',
    price: 21999,
    originalPrice: 26999,
    image: 'https://images.unsplash.com/photo-1598704687515-543767e4e81a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'switch',
    brand: 'HP',
    stock: 15,
    rating: 4.4,
    specs: [
      { key: 'Ports', value: '24× Gigabit Ethernet' },
      { key: 'Management', value: 'Web Managed' },
      { key: 'Design', value: 'Fanless (Silent)' },
      { key: 'VLAN Support', value: 'Yes (802.1Q)' },
      { key: 'Warranty', value: 'Limited Lifetime' }
    ]
  },
  {
    id: 8,
    title: 'ASUS RT-AX86U Gaming Router',
    description: 'Dual-Band WiFi 6 Gaming Router, Mobile Game Mode, 2.5G Port, Lifetime Internet Security.',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'router',
    brand: 'ASUS',
    stock: 9,
    rating: 4.8,
    specs: [
      { key: 'WiFi Standard', value: 'WiFi 6 (802.11ax)' },
      { key: 'Speed', value: 'AX5700' },
      { key: 'Gaming Port', value: '1× 2.5G WAN/LAN' },
      { key: 'Security', value: 'AiProtection Pro' },
      { key: 'Coverage', value: 'Up to 2,200 sq. ft.' }
    ]
  }
];

const productTypes = [
  { id: 'all', name: 'All Devices', icon: '📡' },
  { id: 'router', name: 'Routers', icon: '🛜' },
  { id: 'switch', name: 'Switches', icon: '🔀' },
  { id: 'access-point', name: 'Access Points', icon: '📶' },
  { id: 'extender', name: 'Extenders', icon: '📡' },
  { id: 'modem', name: 'Modems', icon: '🌐' }
];

const brands = ['All', 'TP-Link', 'Cisco', 'Ubiquiti', 'NETGEAR', 'D-Link', 'HP', 'ASUS'];

const Networking: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter products
  const filteredProducts = networkingProducts.filter(product => {
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesBrand && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'stock':
        return b.stock - a.stock;
      default:
        return a.id - b.id;
    }
  });

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'router': return '🛜';
      case 'switch': return '🔀';
      case 'access-point': return '📶';
      case 'extender': return '📡';
      case 'modem': return '🌐';
      default: return '📡';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Networking Equipment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">📡</span>
              <span className="text-sm font-medium">Professional Networking Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Networking Devices
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              High-performance routers, switches, access points, and extenders for homes and businesses.
              Build reliable networks with our premium networking equipment.
            </p>
            
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="Search networking devices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredProducts.length} Networking Products
              </h2>
              <p className="text-gray-600">Professional-grade networking equipment for every need</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Device Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {productTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.icon} {type.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Brand Filter */}
              <div>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              
              {/* Sort Filter */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="stock">Most in Stock</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {getTypeIcon(product.type)}
                    </span>
                  </div>
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{product.title}</h3>
                    {renderStars(product.rating)}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="font-medium bg-gray-100 px-3 py-1 rounded-lg text-sm">{product.brand}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className={`text-sm font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-amber-600'}`}>
                      {product.stock} in stock
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.specs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-500">{spec.key}: </span>
                        <span className="font-medium text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        KES {product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="text-sm font-normal text-gray-500 line-through ml-2">
                            KES {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <button 
                      disabled={product.stock === 0}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        product.stock > 0
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Networking Devices Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any networking devices matching your criteria. Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedBrand('All');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Networking Solutions Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Networking Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide complete networking solutions for homes, offices, and enterprise environments.
              Our experts can help you design and implement the perfect network setup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Networks</h3>
              <p className="text-gray-600">Enterprise-grade switches, routers, and access points for reliable business connectivity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Networks</h3>
              <p className="text-gray-600">High-performance routers and extenders for seamless WiFi coverage throughout your home.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Support</h3>
              <p className="text-gray-600">Technical consultation, installation services, and ongoing network support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Need a Custom Networking Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our networking experts can design and implement a complete solution for your home or business.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="group bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
              >
                <span>Get Free Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="tel:+254700123456" className="group border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg">
                <span>Call: +254 700 123 456</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Networking;