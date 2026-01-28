import React from 'react';
import { Phone, MapPin, Mail, MessageCircle, ShoppingBag, Camera, Zap, Clock } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your project structure

const ContactPage = () => {
  const phoneNumber = "0746273059";
  const secondaryPhone = "0740704281";
  const whatsappNumber = "0746273059";
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Sharks Connection Hub, I would like to inquire about your products.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-teal-500 text-white py-10 px-4 shadow-lg mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <ShoppingBag className="w-10 h-10" />
            SHARKS CONNECTION HUB
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-4 max-w-3xl mx-auto">
            Dealers in Computer Cables, Accessories, CCTV Camera, Electrical & Electronics
          </p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <MapPin className="w-5 h-5" />
            <span>Simba Centre Building, River Road</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Contact Information */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            We're here to help you with all your computer cables, accessories, CCTV cameras, 
            and electrical needs. Reach out to us through any of the following channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Contact */}
            <div className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <div className="space-y-1 mb-2">
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="block text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                  >
                    {phoneNumber}
                  </a>
                  <a 
                    href={`tel:${secondaryPhone}`} 
                    className="block text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                  >
                    {secondaryPhone}
                  </a>
                </div>
                <p className="text-gray-500 text-sm italic">Available during business hours</p>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="flex gap-4 p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-md">
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us directly on WhatsApp for quick responses
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 p-6 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
              <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="w-7 h-7 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Shop</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Simba Centre Building</p>
                  <p>River Road</p>
                  <p>Nairobi, Kenya</p>
                </div>
                <p className="text-gray-500 text-sm italic mt-3">Ask for JOSE (COSTA)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 bg-pink-50 rounded-xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-md">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-pink-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">
                  For detailed inquiries and quotations
                </p>
                <a 
                  href="mailto:kimanijoseph8963@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  kimanijoseph8963@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cables & Accessories */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cables & Accessories</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  HDMI Cables (1-5m)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  VGA Cables
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Cat6 Network Cables
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  USB Cables
                </li>
              </ul>
            </div>

            {/* CCTV & Security */}
            <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">CCTV & Security</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  CCTV Cameras
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  HD Casings
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Security System Accessories
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Installation Services
                </li>
              </ul>
            </div>

            {/* Electronics */}
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Electronics</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Wireless Connectors
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Batteries (AA/AAA)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Electronic Components
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Power Adapters
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WhatsApp Quick Action */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="opacity-90">Chat with us on WhatsApp for instant support</p>
              </div>
            </div>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Chat on WhatsApp Now
            </button>
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Business Hours</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-700">Monday - Friday</span>
              <span className="font-bold text-blue-600">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-700">Saturday</span>
              <span className="font-bold text-blue-600">9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-700">Sunday</span>
              <span className="font-bold text-blue-600">10:00 AM - 2:00 PM</span>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-200 pt-6">
            <p className="text-gray-500 italic">Accounts are due on demand • E&OE</p>
            <p className="text-gray-400 text-sm mt-2">Your trusted partner for quality computer and electronic solutions</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Sharks Connection Hub. All rights reserved.
          </p>
          <p className="text-gray-500">
            Simba Centre Building, River Road | Tel: {phoneNumber} / {secondaryPhone}
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <span>Computer Cables</span>
            <span>•</span>
            <span>CCTV Cameras</span>
            <span>•</span>
            <span>Electronics</span>
            <span>•</span>
            <span>Accessories</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;