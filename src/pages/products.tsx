import React, { useState } from 'react';
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
  category: 'networking' | 'computer' | 'cables' | 'tools';
  brand: string;
  stock: number;
  rating: number;
  specs: {
    key: string;
    value: string;
  }[];
};

type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

// All products data with Unsplash images
const allProducts: Product[] = [
  {
    id: 1,
    title: 'TP-Link Archer AX73 WiFi 6 Router',
    description: 'Dual-Band Gigabit WiFi 6 Router with 8 High-Gain Antennas, 4K Streaming, MU-MIMO, OFDMA.',
    price: 15999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'networking',
    brand: 'TP-Link',
    stock: 24,
    rating: 4.8,
    specs: [
      { key: 'WiFi Standard', value: 'WiFi 6 (802.11ax)' },
      { key: 'Speed', value: 'AX5400 Dual-Band' },
      { key: 'Coverage', value: 'Up to 3,000 sq. ft.' },
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
    category: 'networking',
    brand: 'Cisco',
    stock: 8,
    rating: 4.9,
    specs: [
      { key: 'Ports', value: '24× Gigabit Ethernet' },
      { key: 'PoE+', value: 'Yes (370W)' },
      { key: 'Management', value: 'Layer 2 Smart' },
      { key: 'Warranty', value: 'Lifetime' }
    ]
  },
  {
    id: 3,
    title: 'Samsung 1TB NVMe SSD 980 PRO',
    description: 'PCIe 4.0 M.2 Internal Gaming SSD with Heatsink, Sequential Read/Write up to 7,000/5,100 MB/s.',
    price: 18999,
    originalPrice: 21999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'computer',
    brand: 'Samsung',
    stock: 42,
    rating: 4.7,
    specs: [
      { key: 'Capacity', value: '1TB' },
      { key: 'Interface', value: 'PCIe 4.0 NVMe' },
      { key: 'Read Speed', value: '7,000 MB/s' },
      { key: 'Write Speed', value: '5,100 MB/s' }
    ]
  },
  {
    id: 4,
    title: 'Cat 6 Ethernet Cable - 50ft Pack',
    description: 'High-Speed Internet Cable, 550MHz, UTP, CM Rated, Snagless RJ45 Connectors, Pack of 10.',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'cables',
    brand: 'UGreen',
    stock: 156,
    rating: 4.6,
    specs: [
      { key: 'Category', value: 'Cat 6' },
      { key: 'Length', value: '50 feet' },
      { key: 'Pack Quantity', value: '10 Cables' },
      { key: 'Speed', value: 'Up to 10 Gbps' }
    ]
  },
  {
    id: 5,
    title: 'D-Link WiFi Mesh Extender',
    description: 'AC1750 Dual-Band WiFi Mesh Extender with Smart Signal Indicator, Gigabit Port, Easy Setup.',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'networking',
    brand: 'D-Link',
    stock: 18,
    rating: 4.5,
    specs: [
      { key: 'Standard', value: 'AC1750' },
      { key: 'Bands', value: 'Dual-Band' },
      { key: 'Coverage', value: 'Up to 1,500 sq. ft.' },
      { key: 'Ports', value: '1× Gigabit' }
    ]
  },
  {
    id: 6,
    title: 'Corsair Vengeance LPX 32GB RAM',
    description: 'DDR4 3200MHz C16 Desktop Memory Kit (2x16GB), XMP 2.0, Aluminum Heat Spreader.',
    price: 14999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'computer',
    brand: 'Corsair',
    stock: 31,
    rating: 4.8,
    specs: [
      { key: 'Capacity', value: '32GB (2×16GB)' },
      { key: 'Speed', value: 'DDR4 3200MHz' },
      { key: 'Timing', value: 'CL16' },
      { key: 'Voltage', value: '1.35V' }
    ]
  },
  {
    id: 7,
    title: 'HDMI 2.1 Cable - 10ft (4K@120Hz)',
    description: 'High Speed HDMI Cable 48Gbps, Supports 4K@120Hz, 8K@60Hz, eARC, Dynamic HDR, Pack of 3.',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'cables',
    brand: 'Amazon Basics',
    stock: 89,
    rating: 4.4,
    specs: [
      { key: 'HDMI Version', value: '2.1' },
      { key: 'Length', value: '10 feet' },
      { key: 'Pack Quantity', value: '3 Cables' },
      { key: 'Max Resolution', value: '8K@60Hz' }
    ]
  },
  {
    id: 8,
    title: 'Network Cable Tester Kit',
    description: 'Professional Network Cable Tester with RJ45/RJ11 Connectors, Wire Mapping, and Continuity Check.',
    price: 6999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'tools',
    brand: 'Klein Tools',
    stock: 27,
    rating: 4.7,
    specs: [
      { key: 'Test Types', value: 'Continuity, Wire Map' },
      { key: 'Connectors', value: 'RJ45, RJ11' },
      { key: 'Battery', value: '9V (Included)' },
      { key: 'Warranty', value: '1 Year' }
    ]
  },
  {
    id: 9,
    title: 'Intel Core i7-13700K Processor',
    description: '13th Gen Intel Core i7 Processor, 16 Cores (8P+8E), Up to 5.4 GHz, 30MB Cache, LGA1700.',
    price: 45999,
    originalPrice: 52999,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'computer',
    brand: 'Intel',
    stock: 15,
    rating: 4.9,
    specs: [
      { key: 'Cores/Threads', value: '16 Cores / 24 Threads' },
      { key: 'Base Clock', value: '3.4 GHz' },
      { key: 'Boost Clock', value: '5.4 GHz' },
      { key: 'Socket', value: 'LGA1700' }
    ]
  },
  {
    id: 10,
    title: 'Ubiquiti UniFi Dream Machine Pro',
    description: 'All-in-One Enterprise Security Gateway, Network Controller, and NVR with 8-Port Switch.',
    price: 78999,
    originalPrice: 89999,
    image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'networking',
    brand: 'Ubiquiti',
    stock: 6,
    rating: 4.8,
    specs: [
      { key: 'Security Gateway', value: 'Yes' },
      { key: 'Network Controller', value: 'Built-in' },
      { key: 'Ports', value: '8× Gigabit' },
      { key: 'PoE', value: '8× PoE+ Ports' }
    ]
  }
];

const categories: Category[] = [
  { id: 'all', name: 'All Products', icon: '📦', count: allProducts.length },
  { id: 'networking', name: 'Networking', icon: '📡', count: allProducts.filter(p => p.category === 'networking').length },
  { id: 'computer', name: 'Computer Parts', icon: '💻', count: allProducts.filter(p => p.category === 'computer').length },
  { id: 'cables', name: 'Cables', icon: '🔌', count: allProducts.filter(p => p.category === 'cables').length },
  { id: 'tools', name: 'Tools', icon: '🛠️', count: allProducts.filter(p => p.category === 'tools').length }
];

const brands = ['All', 'TP-Link', 'Cisco', 'Samsung', 'Intel', 'Corsair', 'D-Link', 'Ubiquiti', 'UGreen'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest'];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<string>('Featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9;

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Rating':
        return b.rating - a.rating;
      case 'Newest':
        return b.id - a.id;
      default: // Featured
        return a.id - b.id;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Electronics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover premium networking devices, computer components, and cables from leading brands.
              Everything you need for your technology infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📦</span>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 text-sm font-semibold px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedBrand === brand
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Products Found</span>
                    <span className="font-bold text-blue-600">{filteredProducts.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">In Stock</span>
                    <span className="font-bold text-green-600">
                      {filteredProducts.filter(p => p.stock > 0).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-bold text-amber-600">
                      {(filteredProducts.reduce((acc, p) => acc + p.rating, 0) / filteredProducts.length || 0).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Showing {paginatedProducts.length} of {filteredProducts.length} Products
                  </h2>
                  {searchQuery && (
                    <p className="text-gray-600 mt-1">
                      Search results for: <span className="font-semibold">"{searchQuery}"</span>
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className="appearance-none bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {sortOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedProducts.map(product => (
                    <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {product.category === 'networking' ? '📡' : 
                             product.category === 'computer' ? '💻' : 
                             product.category === 'cables' ? '🔌' : '🛠️'}
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
                          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{product.title}</h3>
                          {renderStars(product.rating)}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-4">
                          <span className="font-medium bg-gray-100 px-3 py-1 rounded-lg text-sm">{product.brand}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className={`text-sm font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-amber-600'}`}>
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {product.specs.slice(0, 4).map((spec, index) => (
                            <div key={index} className="text-sm">
                              <span className="text-gray-500">{spec.key}: </span>
                              <span className="font-medium text-gray-800">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                          <div>
                            <div className="text-2xl font-bold text-green-600">
                              KES {product.price.toLocaleString()}
                              {product.originalPrice && (
                                <span className="text-lg font-normal text-gray-500 line-through ml-2">
                                  KES {product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">VAT Inclusive</div>
                          </div>
                          <button 
                            disabled={product.stock === 0}
                            className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Previous
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBrand('All');
                    setSearchQuery('');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Need Help Choosing Products?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our technical experts can help you select the right equipment for your specific needs.
              Get personalized recommendations today.
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

export default Products;