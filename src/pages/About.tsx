import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Building, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  Target, 
  Globe, 
  Heart, 
  // Cpu, 
  Network, 
  Cable, 
  Camera,
  Zap,
  Truck,
  // Mail,
  Phone,
  MapPin,
  CheckCircle,
  TrendingUp,
  BarChart,
  Settings,
  Database
} from 'lucide-react';

const About: React.FC = () => {
  // Company values - Enhanced with more relevant content
  const companyValues = [
    {
      id: 1,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing and certification to ensure reliability and performance',
      icon: <ShieldCheck className="w-8 h-8" />,
      details: ['ISO Certified Products', 'Performance Testing', 'Warranty Coverage', 'Genuine Manufacturers']
    },
    {
      id: 2,
      title: 'Expert Knowledge',
      description: 'Certified professionals with years of experience in electronics and networking solutions',
      icon: <Award className="w-8 h-8" />,
      details: ['Certified Technicians', 'Continuous Training', 'Industry Certifications', 'Expert Consultation']
    },
    {
      id: 3,
      title: 'Timely Service',
      description: 'Efficient processes ensuring same-day delivery and prompt installation services',
      icon: <Clock className="w-8 h-8" />,
      details: ['Same-day Nairobi CBD', 'Installation Scheduling', 'Quick Response Time', 'Efficient Logistics']
    },
    {
      id: 4,
      title: 'Customer Support',
      description: 'Dedicated support team available 24/7 for technical assistance and after-sales service',
      icon: <Users className="w-8 h-8" />,
      details: ['24/7 Technical Support', 'Remote Assistance', 'On-site Maintenance', 'Customer Training']
    }
  ];

  // Our Journey Timeline - Updated to match your story
  const milestones = [
    {
      year: '2010',
      title: 'The Foundation',
      description: 'Started as a small electronics shop at Simba Centre, River Road, focusing on quality computer cables and networking accessories',
      icon: <Building className="w-6 h-6" />
    },
    {
      year: '2014',
      title: 'Official Registration',
      description: 'Formally registered as SHARKS CONNECTION HUB and expanded to offer CCTV installation and professional networking solutions',
      icon: <Target className="w-6 h-6" />
    },
    {
      year: '2018',
      title: 'Business Expansion',
      description: 'Added comprehensive electrical solutions, power backup systems, and established partnerships with international brands',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Digital Integration',
      description: 'Launched comprehensive business solutions platform integrating all electronics services under one roof',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  // Team members data - Enhanced
  const teamMembers = [
    {
      id: 1,
      name: 'JOSEPH KIMANI',
      role: 'Founder & Managing Director',
      description: '15+ years experience in electronics distribution and business management',
      expertise: 'Business Strategy & Operations',
      achievements: ['Established 2010', '500+ Business Clients', 'Industry Leader']
    },
    {
      id: 2,
      name: 'JOYCE Kimani',
      role: 'Technical Director',
      description: 'Certified network engineer with expertise in enterprise solutions and security systems',
      expertise: 'Network Infrastructure & Security',
      achievements: ['CCNP Certified', 'Security Systems Expert', 'Project Management']
    },
    {
      id: 3,
      name: 'DAVID KARANU',
      role: 'Operations Manager',
      description: '10+ years in logistics and supply chain management for electronics distribution',
      expertise: 'Supply Chain & Logistics',
      achievements: ['Efficiency Expert', 'Inventory Management', 'Delivery Optimization']
    },
    {
      id: 4,
      name: 'Grace Muthoni',
      role: 'Customer Relations Manager',
      description: 'Specialized in client relationship management and technical support coordination',
      expertise: 'Customer Success & Support',
      achievements: ['98% Satisfaction Rate', 'Support Team Lead', 'Client Training']
    }
  ];

  // Our Services - Showcasing expertise
  const ourServices = [
    {
      id: 1,
      title: 'Computer Cables & Connectivity',
      description: 'Premium network cables, HDMI, USB, and power solutions for reliable office connectivity',
      icon: <Cable className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'CCTV & Security Systems',
      description: 'Complete security solutions with professional installation and monitoring services',
      icon: <Camera className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Networking Infrastructure',
      description: 'Enterprise-grade networking equipment and professional installation services',
      icon: <Network className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Electrical Solutions',
      description: 'Power backup, surge protection, and comprehensive electrical installations',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-cyan-50/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl px-10 py-6 border-2 border-blue-100 shadow-sm">
                <Building className="w-7 h-7 text-blue-600" />
                <span className="text-lg font-bold text-blue-800">
                  About SHARKS CONNECTION HUB
                </span>
                <Award className="w-7 h-7 text-amber-500" />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Our Story & Commitment
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-700 mt-4 block">
                  Trusted Electronics Partner Since 2010
                </span>
              </h1>
              
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                SHARKS CONNECTION HUB has evolved from a small electronics shop to Nairobi's premier 
                supplier of professional electronics solutions. For over a decade, we've been committed 
                to powering businesses with reliable technology infrastructure and exceptional service.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-300 max-w-5xl mx-auto">
              {[
                { 
                  value: '15+', 
                  label: 'Years Experience', 
                  icon: <BarChart className="w-10 h-10" />,
                  description: 'Industry expertise'
                },
                { 
                  value: '500+', 
                  label: 'Business Clients', 
                  icon: <Database className="w-10 h-10" />,
                  description: 'Served across Kenya'
                },
                { 
                  value: '98%', 
                  label: 'Satisfaction Rate', 
                  icon: <Heart className="w-10 h-10" />,
                  description: 'Client retention'
                },
                { 
                  value: '24/7', 
                  label: 'Technical Support', 
                  icon: <Settings className="w-10 h-10" />,
                  description: 'Always available'
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-6 mx-auto text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-blue-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Clean Layout */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Vision</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our <span className="text-cyan-600">Mission</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower Kenyan businesses with reliable, high-quality electronics solutions 
                    that enhance productivity, security, and connectivity. We're committed to 
                    delivering exceptional value through premium products and professional services.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to be the trusted partner that businesses rely on for all their 
                    electronics needs, from basic cabling to complex networking infrastructure.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Customer-Centric Approach</h4>
                      <p className="text-gray-600">
                        Every decision we make is guided by our commitment to customer satisfaction 
                        and delivering solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl text-white">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our <span className="text-blue-600">Vision</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To become Kenya's most trusted and comprehensive electronics solutions provider, 
                    recognized for technical excellence, quality products, and unparalleled service 
                    across all major cities.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We envision a future where every Kenyan business has access to reliable, 
                    cutting-edge technology infrastructure that enables growth, innovation, and 
                    digital transformation.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Growth & Innovation</h4>
                      <p className="text-gray-600">
                        Continuously expanding our services and embracing new technologies to 
                        better serve the evolving needs of Kenyan businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values - Matching Homepage Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide every decision we make and every service we provide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value) => (
                <div key={value.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {value.details && (
                    <div className="space-y-2">
                      {value.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Clean Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Our Evolution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From humble beginnings to becoming Nairobi's trusted electronics partner
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((item, index) => (
                <div key={index} className="relative pl-16 pb-16 last:pb-0 group">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
                  <div className="text-3xl font-bold text-blue-600 mb-3">{item.year}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Milestone */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Looking Forward: 2024 & Beyond</h4>
                  <p className="text-gray-700">
                    We're expanding our services to include smart office solutions, sustainable energy products, 
                    and advanced networking technologies. Our commitment remains to innovation and excellence 
                    in serving Kenyan businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Professional Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Leadership Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate professionals dedicated to delivering exceptional electronics solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300">
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full mb-6 mx-auto">
                      <div className="text-3xl font-bold text-blue-600">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-blue-700 mb-2">Expertise</div>
                      <div className="text-sm text-gray-600">{member.expertise}</div>
                    </div>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Showcasing Expertise */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-6">
                <Settings className="w-5 h-5" />
                <span className="font-semibold">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive electronics solutions tailored to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ourServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Choose Us</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="space-y-8">
                  {[
                    "Genuine products with comprehensive manufacturer warranties",
                    "Same-day delivery service across Nairobi CBD",
                    "Professional installation by certified technicians",
                    "24/7 technical support and maintenance services",
                    "Customized solutions for business requirements",
                    "Competitive pricing with volume discounts",
                    "Regular product updates and technology training",
                    "Long-term partnership and support commitment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Nairobi Presence</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Main Office & Showroom</h4>
                      <p className="text-gray-300">
                        Simba Centre Building, River Road<br />
                        Office 001, Nairobi CBD
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <a href="tel:+254746273059" className="block text-gray-300 hover:text-cyan-300">
                          📞 0746 273 059
                        </a>
                        <a href="tel:+254740704281" className="block text-gray-300 hover:text-cyan-300">
                          📞 0740 704 281
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Service Coverage</h4>
                      <p className="text-gray-300">
                        Nairobi CBD • Westlands • Parklands • Upper Hill • Industrial Area
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Homepage */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 mb-8">
              <Target className="w-6 h-6 text-cyan-300" />
              <span className="text-lg font-semibold">Ready to Partner With Us?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Experience Professional Electronics Solutions
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Contact our experts today for customized solutions that meet your specific business requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/ContactPage"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Our Experts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;