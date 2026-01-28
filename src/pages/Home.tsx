import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  // ShieldCheck, 
  Truck, 
  Headphones, 
  Wifi, 
  // Cable, 
  Camera,
  Zap,
  Building,
  Users,
  Award,
  Phone,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
  CheckCircle,
  TrendingUp,
  // Cpu,
  // Smartphone,
  // Server,
  // Battery,
  Star,
  Package,
  Navigation
} from 'lucide-react';

const Home: React.FC = () => {
  // Google Maps URL with your coordinates
  const googleMapsUrl = "https://maps.google.com/maps?q=-1.2841131,36.8299597&z=17&hl=en";
  
  // Featured Business Solutions
  const businessSolutions = [
    {
      id: 1,
      title: 'Office Networking Infrastructure',
      description: 'Complete setup of routers, switches, and wireless networks for seamless connectivity',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['High-speed connectivity', 'Secure network design', 'Scalable solutions']
    },
    {
      id: 2,
      title: 'Business Security Systems',
      description: 'Professional CCTV installation with remote monitoring and access control',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      benefits: ['24/7 surveillance', 'Remote access', 'Professional installation']
    },
    {
      id: 3,
      title: 'Power Management Solutions',
      description: 'UPS systems and surge protection to keep your business running during outages',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      benefits: ['Power backup', 'Equipment protection', 'Energy efficiency']
    }
  ];

  // Client Success Stories
  const successStories = [
    {
      id: 1,
      client: 'Tech Solutions Ltd',
      industry: 'IT Services',
      testimonial: 'Their networking infrastructure setup transformed our office connectivity. Professional service from start to finish.',
      rating: 5,
      project: 'Complete office network upgrade'
    },
    {
      id: 2,
      client: 'Retail Chain Kenya',
      industry: 'Retail',
      testimonial: 'The CCTV system installation across our 5 stores has significantly improved security and management.',
      rating: 5,
      project: 'Multi-location security system'
    },
    {
      id: 3,
      client: 'Corporate Offices Nairobi',
      industry: 'Corporate',
      testimonial: 'Reliable power backup solutions that have saved us countless hours during Nairobi power outages.',
      rating: 4,
      project: 'Enterprise power management'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto">
            {/* Animated Welcome Badge */}
            <div className="flex justify-center mb-10 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full px-8 py-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <Building className="w-6 h-6 text-blue-600 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-lg font-semibold text-blue-700">
                  Your Trusted Electronics Partner in Nairobi
                </span>
                <Award className="w-6 h-6 text-amber-500" />
              </div>
            </div>
            
            {/* Main Hero Content */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                  Professional Electronics
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-700 mt-4">
                  Solutions for Kenyan Businesses
                </span>
              </h1>
              
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Transform your business with premium electronics infrastructure – from seamless networking 
                to reliable power solutions and comprehensive security systems.
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  to="/ContactPage" 
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-lg py-5 px-12 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Headphones className="relative w-6 h-6" />
                  <span className="relative">Get Professional Consultation</span>
                  <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Rated 4.9/5 by 200+ businesses</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200 max-w-4xl mx-auto">
              {[
                { 
                  value: '500+', 
                  label: 'Business Solutions', 
                  icon: <Package className="w-7 h-7" />,
                  highlight: true
                },
                { 
                  value: '24/7', 
                  label: 'Support Ready', 
                  icon: <Headphones className="w-7 h-7" />,
                  highlight: false
                },
                { 
                  value: '98%', 
                  label: 'Satisfaction Rate', 
                  icon: <Users className="w-7 h-7" />,
                  highlight: true
                },
                { 
                  value: '2hrs', 
                  label: 'CBD Response', 
                  icon: <Clock className="w-7 h-7" />,
                  highlight: false
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 mx-auto transition-all duration-300 ${stat.highlight ? 'bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 group-hover:from-blue-100 group-hover:to-cyan-100' : 'bg-gray-50 text-gray-600 group-hover:bg-gray-100'}`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Spotlight */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Business Solutions Spotlight</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Business Technology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive electronics solutions designed to enhance productivity, security, and reliability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessSolutions.map((solution) => (
                <div key={solution.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"></div>
                  <div className="relative p-8 h-full">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      <h4 className="text-sm font-semibold text-gray-700">Key Benefits:</h4>
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                    >
                      <span>Get Custom Solution</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Location Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Visit Our Business</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Nairobi Location</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Easily accessible from anywhere in Nairobi CBD. Visit us for personalized consultations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Location Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                          <Building className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Address</h4>
                        <p className="text-gray-600">
                          Simba Centre Building<br />
                          River Road, Nairobi CBD<br />
                          Office 001
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Landmark: Opposite Biashara Street</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h4>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: By Appointment Only</p>
                          <p className="text-blue-600 font-medium text-sm mt-2">Emergency Support: 24/7 Available</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Before Visiting</h4>
                        <div className="space-y-2">
                          <a href="tel:+254746273059" className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                            📞 0746 273 059
                          </a>
                          <a href="tel:+254740704281" className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                            📞 0740 704 281
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Call to confirm availability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Transportation Tips */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Getting Here</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        <Navigation className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Matatu Routes</div>
                        <div className="text-xs text-gray-600">Biashara Street Stage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        <Truck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Parking</div>
                        <div className="text-xs text-gray-600">Secure parking nearby</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Link Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Find Us on Google Maps</h3>
                    <p className="text-gray-300 mb-6">
                      Click the button below to open our exact location in Google Maps for turn-by-turn navigation.
                    </p>
                    
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full"
                    >
                      <Navigation className="w-6 h-6" />
                      <span className="text-lg">Open in Google Maps</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="mt-6 p-4 bg-white/10 rounded-lg">
                      <p className="text-sm text-gray-300">
                        📍 Coordinates: -1.2841131, 36.8299597<br />
                        🎯 Zoom Level: 17 (Street View Available)
                      </p>
                    </div>
                  </div>
                  
                  {/* Map Preview - Non-interactive */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white font-semibold">SHARKS CONNECTION HUB</p>
                        <p className="text-gray-300 text-sm">Simba Centre, River Road</p>
                        <p className="text-cyan-300 text-xs mt-2">Click "Open in Google Maps" for directions</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Email Inquiry</div>
                    <div className="text-xs text-gray-500 mt-1">Get quick response</div>
                  </Link>
                  
                  <a 
                    href="tel:+254746273059"
                    className="bg-white border border-gray-200 hover:border-green-300 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Call Directly</div>
                    <div className="text-xs text-gray-500 mt-1">For immediate help</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-cyan-50 text-cyan-700 px-6 py-3 rounded-full mb-6">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Client Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Businesses Across Kenya</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{story.client}</h4>
                      <p className="text-sm text-gray-600">{story.industry}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < story.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{story.testimonial}"</p>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500">Project:</div>
                    <div className="text-sm font-medium text-blue-600">{story.project}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 mb-8">
                <Headphones className="w-6 h-6 text-cyan-300" />
                <span className="text-lg font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Discuss Your Project</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Contact our experts for a personalized consultation and quote
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Information */}
              <div>
                <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Business Location</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Simba Centre Building, River Road<br />
                        Office 001, Nairobi CBD
                      </p>
                      <div className="mt-3">
                        <a 
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          <span>Get Directions on Google Maps</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Direct Contact</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Primary Contact</div>
                          <a href="tel:+254746273059" className="block text-xl font-semibold text-gray-300 hover:text-cyan-300 transition-colors">
                            📞 0746 273 059
                          </a>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Alternate Line</div>
                          <a href="tel:+254740704281" className="block text-lg font-medium text-gray-300 hover:text-cyan-300 transition-colors">
                            📞 0740 704 281
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-6">Send Your Requirements</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Business Email"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors">
                      <option value="">Select Service Needed</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="cctv">CCTV & Security</option>
                      <option value="electrical">Electrical Solutions</option>
                      <option value="consultation">Professional Consultation</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Brief description of your requirements..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit & Get Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Home;