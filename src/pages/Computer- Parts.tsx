import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type ComputerPart = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  type: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'hdd' | 'motherboard' | 'psu' | 'cooling';
  brand: string;
  stock: number;
  rating: number;
  specs: {
    key: string;
    value: string;
  }[];
};

// Computer parts data with Unsplash images
const computerParts: ComputerPart[] = [
  {
    id: 1,
    title: 'Intel Core i7-13700K Processor',
    description: '13th Gen Intel Core i7 Processor, 16 Cores (8P+8E), Up to 5.4 GHz, 30MB Cache, LGA1700.',
    price: 45999,
    originalPrice: 52999,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'cpu',
    brand: 'Intel',
    stock: 15,
    rating: 4.9,
    specs: [
      { key: 'Cores/Threads', value: '16 Cores / 24 Threads' },
      { key: 'Base Clock', value: '3.4 GHz' },
      { key: 'Boost Clock', value: '5.4 GHz' },
      { key: 'Socket', value: 'LGA1700' },
      { key: 'Cache', value: '30MB' }
    ]
  },
  {
    id: 2,
    title: 'Samsung 1TB NVMe SSD 980 PRO',
    description: 'PCIe 4.0 M.2 Internal Gaming SSD with Heatsink, Sequential Read/Write up to 7,000/5,100 MB/s.',
    price: 18999,
    originalPrice: 21999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'ssd',
    brand: 'Samsung',
    stock: 42,
    rating: 4.7,
    specs: [
      { key: 'Capacity', value: '1TB' },
      { key: 'Interface', value: 'PCIe 4.0 NVMe' },
      { key: 'Read Speed', value: '7,000 MB/s' },
      { key: 'Write Speed', value: '5,100 MB/s' },
      { key: 'Form Factor', value: 'M.2 2280' }
    ]
  },
  {
    id: 3,
    title: 'Corsair Vengeance LPX 32GB RAM',
    description: 'DDR4 3200MHz C16 Desktop Memory Kit (2x16GB), XMP 2.0, Aluminum Heat Spreader.',
    price: 14999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'ram',
    brand: 'Corsair',
    stock: 31,
    rating: 4.8,
    specs: [
      { key: 'Capacity', value: '32GB (2×16GB)' },
      { key: 'Speed', value: 'DDR4 3200MHz' },
      { key: 'Timing', value: 'CL16' },
      { key: 'Voltage', value: '1.35V' },
      { key: 'XMP', value: '2.0' }
    ]
  },
  {
    id: 4,
    title: 'NVIDIA GeForce RTX 4070 Ti',
    description: '12GB GDDR6X, DLSS 3, Ray Tracing, Ada Lovelace Architecture, 4K Gaming Ready.',
    price: 129999,
    originalPrice: 149999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'gpu',
    brand: 'NVIDIA',
    stock: 7,
    rating: 4.9,
    specs: [
      { key: 'Memory', value: '12GB GDDR6X' },
      { key: 'Core Clock', value: '2310 MHz' },
      { key: 'Memory Bus', value: '192-bit' },
      { key: 'Power', value: '285W' },
      { key: 'Ports', value: '3× DP, 1× HDMI' }
    ]
  },
  {
    id: 5,
    title: 'ASUS ROG Strix B760-F Gaming',
    description: 'LGA1700 ATX Motherboard, PCIe 5.0, DDR5, 14+1 Power Stages, WiFi 6E, 2.5Gb LAN.',
    price: 32999,
    originalPrice: 38999,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'motherboard',
    brand: 'ASUS',
    stock: 12,
    rating: 4.7,
    specs: [
      { key: 'Socket', value: 'LGA1700' },
      { key: 'Chipset', value: 'Intel B760' },
      { key: 'Form Factor', value: 'ATX' },
      { key: 'Memory', value: 'DDR5 (4 slots)' },
      { key: 'WiFi', value: 'WiFi 6E' }
    ]
  },
  {
    id: 6,
    title: 'Corsair RM850x Power Supply',
    description: '850W 80 Plus Gold Certified Fully Modular PSU, Zero RPM Fan Mode, 10-Year Warranty.',
    price: 18999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1587202372631-9d5d8c62f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'psu',
    brand: 'Corsair',
    stock: 23,
    rating: 4.8,
    specs: [
      { key: 'Wattage', value: '850W' },
      { key: 'Efficiency', value: '80 Plus Gold' },
      { key: 'Modular', value: 'Fully Modular' },
      { key: 'Fan', value: '135mm' },
      { key: 'Warranty', value: '10 Years' }
    ]
  },
  {
    id: 7,
    title: 'Noctua NH-D15 CPU Cooler',
    description: 'Dual-Tower Premium Air Cooler, 2× NF-A15 140mm Fans, 6 Heatpipes, for Intel/AMD.',
    price: 11999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1587202372631-9d5d8c62f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'cooling',
    brand: 'Noctua',
    stock: 18,
    rating: 4.9,
    specs: [
      { key: 'Type', value: 'Air Cooler' },
      { key: 'Fans', value: '2× 140mm' },
      { key: 'Heatpipes', value: '6' },
      { key: 'Socket Support', value: 'Intel/AMD' },
      { key: 'Height', value: '165mm' }
    ]
  },
  {
    id: 8,
    title: 'WD Black 4TB HDD',
    description: '4TB 3.5" Internal Hard Drive, 7200 RPM, 256MB Cache, for Gaming and High-Performance PCs.',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'hdd',
    brand: 'Western Digital',
    stock: 35,
    rating: 4.6,
    specs: [
      { key: 'Capacity', value: '4TB' },
      { key: 'RPM', value: '7200' },
      { key: 'Cache', value: '256MB' },
      { key: 'Interface', value: 'SATA 6Gb/s' },
      { key: 'Form Factor', value: '3.5"' }
    ]
  },
  {
    id: 9,
    title: 'AMD Ryzen 7 7800X3D',
    description: '8-Core 16-Thread Processor, 5.0 GHz Boost Clock, 96MB L3 Cache, AM5 Socket, 3D V-Cache.',
    price: 48999,
    originalPrice: 55999,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'cpu',
    brand: 'AMD',
    stock: 9,
    rating: 4.8,
    specs: [
      { key: 'Cores/Threads', value: '8 Cores / 16 Threads' },
      { key: 'Base Clock', value: '4.2 GHz' },
      { key: 'Boost Clock', value: '5.0 GHz' },
      { key: 'Socket', value: 'AM5' },
      { key: 'L3 Cache', value: '96MB' }
    ]
  },
  {
    id: 10,
    title: 'Crucial P5 Plus 2TB SSD',
    description: 'PCIe 4.0 NVMe M.2 SSD, Read up to 6600MB/s, Write up to 5000MB/s, with Thermal Guard.',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'ssd',
    brand: 'Crucial',
    stock: 28,
    rating: 4.7,
    specs: [
      { key: 'Capacity', value: '2TB' },
      { key: 'Interface', value: 'PCIe 4.0 NVMe' },
      { key: 'Read Speed', value: '6,600 MB/s' },
      { key: 'Write Speed', value: '5,000 MB/s' },
      { key: 'Warranty', value: '5 Years' }
    ]
  },
  {
    id: 11,
    title: 'G.Skill Trident Z5 RGB 64GB',
    description: 'DDR5 6000MHz CL30 Memory Kit (2×32GB), RGB Lighting, Intel XMP 3.0 Ready.',
    price: 34999,
    originalPrice: 41999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'ram',
    brand: 'G.Skill',
    stock: 11,
    rating: 4.8,
    specs: [
      { key: 'Capacity', value: '64GB (2×32GB)' },
      { key: 'Speed', value: 'DDR5 6000MHz' },
      { key: 'Timing', value: 'CL30' },
      { key: 'RGB', value: 'Yes' },
      { key: 'XMP', value: '3.0' }
    ]
  },
  {
    id: 12,
    title: 'NZXT Kraken Z73 RGB',
    description: '360mm AIO Liquid CPU Cooler, LCD Display, RGB Fans, CAM Software Controlled.',
    price: 26999,
    originalPrice: 32999,
    image: 'https://images.unsplash.com/photo-1587202372631-9d5d8c62f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'cooling',
    brand: 'NZXT',
    stock: 8,
    rating: 4.7,
    specs: [
      { key: 'Type', value: 'AIO Liquid Cooler' },
      { key: 'Radiator', value: '360mm' },
      { key: 'Fans', value: '3× 120mm RGB' },
      { key: 'Display', value: '2.36" LCD' },
      { key: 'Socket Support', value: 'Intel/AMD' }
    ]
  }
];

const partTypes = [
  { id: 'all', name: 'All Parts', icon: '💻' },
  { id: 'cpu', name: 'Processors', icon: '⚡' },
  { id: 'gpu', name: 'Graphics Cards', icon: '🎮' },
  { id: 'ram', name: 'Memory', icon: '🧠' },
  { id: 'ssd', name: 'SSD Storage', icon: '💾' },
  { id: 'hdd', name: 'HDD Storage', icon: '💿' },
  { id: 'motherboard', name: 'Motherboards', icon: '🔌' },
  { id: 'psu', name: 'Power Supplies', icon: '🔋' },
  { id: 'cooling', name: 'Cooling', icon: '❄️' }
];

const brands = ['All', 'Intel', 'AMD', 'NVIDIA', 'Samsung', 'Corsair', 'ASUS', 'Western Digital', 'Crucial', 'G.Skill', 'Noctua', 'NZXT'];

const ComputerParts: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter products
  const filteredParts = computerParts.filter(part => {
    const matchesType = selectedType === 'all' || part.type === selectedType;
    const matchesBrand = selectedBrand === 'All' || part.brand === selectedBrand;
    const matchesSearch = searchQuery === '' || 
      part.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesBrand && matchesSearch;
  });

  // Sort products
  const sortedParts = [...filteredParts].sort((a, b) => {
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
      case 'cpu': return '⚡';
      case 'gpu': return '🎮';
      case 'ram': return '🧠';
      case 'ssd': return '💾';
      case 'hdd': return '💿';
      case 'motherboard': return '🔌';
      case 'psu': return '🔋';
      case 'cooling': return '❄️';
      default: return '💻';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'cpu': return 'Processor';
      case 'gpu': return 'Graphics Card';
      case 'ram': return 'Memory';
      case 'ssd': return 'SSD';
      case 'hdd': return 'Hard Drive';
      case 'motherboard': return 'Motherboard';
      case 'psu': return 'Power Supply';
      case 'cooling': return 'Cooling';
      default: return 'Computer Part';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Computer Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">💻</span>
              <span className="text-sm font-medium">Premium Computer Components</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Computer Parts
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              High-performance processors, graphics cards, memory, storage, and more. 
              Build or upgrade your PC with our premium selection of computer components.
            </p>
            
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="Search computer parts..."
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
        {/* Quick Stats Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{computerParts.length}+</div>
              <div className="text-sm text-purple-200">Premium Parts</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm text-purple-200">Leading Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-purple-200">In Stock Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-sm text-purple-200">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredParts.length} Computer Parts
              </h2>
              <p className="text-gray-600">Premium components for gaming, workstations, and everyday computing</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Part Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {partTypes.map(type => (
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

          {/* Quick Filter Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {partTypes.filter(t => t.id !== 'all').map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{type.icon}</span>
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {sortedParts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedParts.map(part => (
              <div key={part.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {getTypeIcon(part.type)}
                    </span>
                  </div>
                  {part.stock === 0 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">Out of Stock</span>
                    </div>
                  )}
                  {part.stock > 0 && part.stock < 10 && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                      Low Stock
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{part.title}</h3>
                    {renderStars(part.rating)}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="font-medium bg-gray-100 px-3 py-1 rounded-lg text-sm">{part.brand}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{getTypeName(part.type)}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{part.description}</p>
                  
                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {part.specs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-500">{spec.key}: </span>
                        <span className="font-medium text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        KES {part.price.toLocaleString()}
                        {part.originalPrice && (
                          <span className="text-sm font-normal text-gray-500 line-through ml-2">
                            KES {part.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {part.stock > 10 ? 'In Stock' : `${part.stock} left`}
                      </div>
                    </div>
                    <button 
                      disabled={part.stock === 0}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        part.stock > 0
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {part.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Computer Parts Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any computer parts matching your criteria. Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedBrand('All');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* PC Building Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete PC Building Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Need help building your dream PC? We offer complete PC building services with professional assembly and testing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gaming PCs</h3>
              <p className="text-gray-600 mb-4">High-performance gaming rigs with the latest GPUs and fast processors.</p>
              <div className="text-sm text-purple-600 font-semibold">Starting from KES 89,999</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workstations</h3>
              <p className="text-gray-600 mb-4">Powerful workstations for video editing, 3D rendering, and development.</p>
              <div className="text-sm text-purple-600 font-semibold">Starting from KES 129,999</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assembly Service</h3>
              <p className="text-gray-600 mb-4">Professional PC assembly, cable management, and stress testing.</p>
              <div className="text-sm text-purple-600 font-semibold">KES 4,999 Service Fee</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Need Help Building Your PC?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our PC building experts can help you choose the right components and assemble your dream computer.
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="group bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
              >
                <span>Get Free PC Consultation</span>
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

export default ComputerParts;