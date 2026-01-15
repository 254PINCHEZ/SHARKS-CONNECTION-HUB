import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cpu, Network, Shield, Target, Users, Globe, Award, Clock, Truck, CheckCircle, Heart } from 'lucide-react';

const About: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'James Kariuki',
      role: 'Founder & CEO',
      description: '15+ years in networking and IT infrastructure',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      expertise: 'Network Architecture'
    },
    {
      id: 2,
      name: 'Sarah Mwangi',
      role: 'Technical Director',
      description: 'Certified Cisco & Microsoft Solutions Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      expertise: 'Enterprise Solutions'
    },
    {
      id: 3,
      name: 'David Omondi',
      role: 'Sales & Operations Manager',
      description: '10+ years in electronics distribution',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      expertise: 'Business Development'
    },
    {
      id: 4,
      name: 'Grace Wanjiru',
      role: 'Customer Support Lead',
      description: 'IT Support Specialist & Network Consultant',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      expertise: 'Technical Support'
    }
  ];

  // Company values
  const companyValues = [
    {
      id: 1,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing before dispatch',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Expert Knowledge',
      description: 'Certified professionals providing technical consultation',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Timely Delivery',
      description: 'Same-day delivery within Nairobi CBD',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Customer Support',
      description: '24/7 technical support for all products',
      icon: <Users className="w-8 h-8" />
    }
  ];

  // Timeline/milestones
  const milestones = [
    {
      year: '2015',
      title: 'Humble Beginnings',
      description: 'Started as a small computer repair shop in Nairobi CBD'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Became authorized reseller for TP-Link and D-Link'
    },
    {
      year: '2019',
      title: 'Professional Services',
      description: 'Launched enterprise networking solutions division'
    },
    {
      year: '2021',
      title: 'Online Presence',
      description: 'Launched e-commerce platform serving all of Nairobi'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded Best Electronics Supplier in Nairobi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-200">Our Story & Vision</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Powering Nairobi's
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              As Nairobi's leading electronics supplier, we've been at the forefront of providing 
              cutting-edge networking solutions, computer components, and reliable cables to 
              businesses and individuals across Kenya since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-cyan-600">Mission</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses and individuals across Kenya with reliable, high-quality 
                  networking and computer solutions that drive productivity and innovation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're committed to bridging the digital divide by making professional-grade 
                  electronics accessible and affordable to everyone in Nairobi and beyond.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Customer-Centric Approach</h4>
                    <p className="text-gray-600">
                      Every decision we make is guided by our commitment to customer satisfaction 
                      and technical excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Vision</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become East Africa's most trusted partner for networking and computer 
                  solutions, recognized for our technical expertise, quality products, and 
                  exceptional customer service.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a digitally connected Kenya where every business has access to 
                  reliable technology infrastructure that enables growth and innovation.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Regional Expansion</h4>
                    <p className="text-gray-600">
                      Expanding our reach to serve more cities across East Africa while 
                      maintaining our commitment to quality and service excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-cyan-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at Nairobi ElectroTech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value) => (
              <div key={value.id} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming Nairobi's trusted electronics partner
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-cyan-600">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate professionals dedicated to providing exceptional technical solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-cyan-200 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-cyan-600 text-sm font-medium">
                    <Cpu className="w-4 h-4" />
                    {member.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Nairobi ElectroTech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What sets us apart in the competitive electronics market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  "Genuine products with manufacturer warranty",
                  "Same-day delivery across Nairobi",
                  "Free technical consultation and support",
                  "Competitive pricing with volume discounts",
                  "Bulk order capabilities for businesses",
                  "Custom networking solutions for enterprises",
                  "Regular product training and workshops",
                  "After-sales support and maintenance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Nairobi Presence</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-bold">Main Showroom</h4>
                    <p className="text-gray-300 text-sm">Biashara Street, CBD Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                    <Network className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-bold">Enterprise Division</h4>
                    <p className="text-gray-300 text-sm">Westlands, Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-bold">Delivery Coverage</h4>
                    <p className="text-gray-300 text-sm">All Nairobi & Major Towns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted <span className="text-blue-600">Brands</span> We Partner With
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authorized reseller of leading global electronics brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['TP-Link', 'Cisco', 'D-Link', 'Samsung', 'Corsair', 'UGreen'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-900">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Power Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Digital Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Partner with Nairobi's most trusted electronics supplier for all your networking 
              and computer needs. Experience the difference of working with experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Today
              </Link>
              <Link 
                to="/products"
                className="group border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  Browse Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
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