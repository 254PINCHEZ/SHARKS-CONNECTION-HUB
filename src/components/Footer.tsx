import React from 'react'
import { 
  Building, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  Phone, 
  Mail, 
  MapPin,
  Cable,
  Camera,
  Wifi,
  Zap,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Award,
  CheckCircle,
  Globe
} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16 px-4 md:px-6 mt-20 border-t border-blue-800/30">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND & BUSINESS INFO */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl">
              <Building size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              <span className="text-white">SHARKS</span>
              <span className="text-cyan-300">CONNECTION</span>
              <span className="text-blue-300 block text-lg">HUB</span>
            </h2>
          </div>
          
          <p className="leading-relaxed text-gray-400 text-sm">
            Your trusted partner for professional electronics solutions in Nairobi. 
            Premium computer cables, CCTV systems, networking equipment, and electrical 
            solutions for businesses since 2010.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-cyan-200">
              <ShieldCheck size={16} className="text-green-400" />
              <span>Certified Quality Products</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-cyan-200">
              <Truck size={16} className="text-blue-400" />
              <span>Same-Day Nairobi CBD Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-cyan-200">
              <Award size={16} className="text-amber-400" />
              <span>15+ Years Industry Experience</span>
            </div>
          </div>
        </div>

        {/* OUR SOLUTIONS */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50 flex items-center">
            <Globe size={20} className="mr-2 text-cyan-300" />
            Professional Solutions
          </h6>
          <ul className="space-y-4">
            <li>
              <a href="/computer-cables" className="hover:text-cyan-300 transition flex items-center group">
                <Cable size={16} className="mr-2 text-blue-400" />
                <span className="group-hover:translate-x-1 transition-transform">Computer Cables & Connectivity</span>
              </a>
            </li>
            <li>
              <a href="/cctv-systems" className="hover:text-cyan-300 transition flex items-center group">
                <Camera size={16} className="mr-2 text-purple-400" />
                <span className="group-hover:translate-x-1 transition-transform">CCTV & Security Systems</span>
              </a>
            </li>
            <li>
              <a href="/networking" className="hover:text-cyan-300 transition flex items-center group">
                <Wifi size={16} className="mr-2 text-green-400" />
                <span className="group-hover:translate-x-1 transition-transform">Networking Infrastructure</span>
              </a>
            </li>
            <li>
              <a href="/electrical-solutions" className="hover:text-cyan-300 transition flex items-center group">
                <Zap size={16} className="mr-2 text-amber-400" />
                <span className="group-hover:translate-x-1 transition-transform">Electrical & Power Solutions</span>
              </a>
            </li>
            <li>
              <a href="/professional-installation" className="hover:text-cyan-300 transition flex items-center group">
                <CheckCircle size={16} className="mr-2 text-cyan-400" />
                <span className="group-hover:translate-x-1 transition-transform">Professional Installation Services</span>
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT & SUPPORT */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50 flex items-center">
            <Headphones size={20} className="mr-2 text-cyan-300" />
            Contact & Support
          </h6>
          <ul className="space-y-5">
            <li className="flex items-start group">
              <Phone size={18} className="mr-3 text-cyan-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-white">Business Inquiries</p>
                <div className="space-y-1 mt-1">
                  <a href="tel:+254746273059" className="text-gray-400 hover:text-cyan-300 transition block">
                    📞 0746 273 059
                  </a>
                  <a href="tel:+254740704281" className="text-gray-400 hover:text-cyan-300 transition block">
                    📞 0740 704 281
                  </a>
                </div>
              </div>
            </li>
            
            <li className="flex items-start group">
              <Mail size={18} className="mr-3 text-cyan-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-white">Email Address</p>
                <a href="mailto:kimanijoseph8963@gmail.com" className="text-gray-400 hover:text-cyan-300 transition block mt-1">
                  kimanijoseph8963@gmail.com
                </a>
              </div>
            </li>
            
            <li className="flex items-start group">
              <MapPin size={18} className="mr-3 text-cyan-400 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium text-white">Business Location</p>
                <p className="text-gray-400 mt-1">
                  Simba Centre Building, River Road<br />
                  Office 001, Nairobi CBD
                </p>
              </div>
            </li>
            
            <li className="mt-6">
              <div className="flex items-start">
                <Clock size={18} className="mr-3 text-cyan-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-2">Business Hours</p>
                  <div className="space-y-1 text-gray-400">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: By Appointment</p>
                    <p className="text-cyan-300 text-sm font-medium">Emergency Support: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS & COMPANY */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50">
            Quick Links
          </h6>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h6 className="font-semibold text-cyan-300 mb-3">Company</h6>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Our Story
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold text-cyan-300 mb-3">Support</h6>
              <ul className="space-y-2">
                <li>
                  <a href="/technical-support" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="/installation" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Installation Services
                  </a>
                </li>
                <li>
                  <a href="/warranty" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Warranty Information
                  </a>
                </li>
                <li>
                  <a href="/business-quote" className="text-gray-400 hover:text-cyan-300 transition flex items-center group">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Request Business Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* PAYMENT METHODS */}
          <div className="mt-8 pt-6 border-t border-blue-800/30">
            <p className="font-medium text-white mb-3">Accepted Payment Methods</p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700">
                M-Pesa
              </div>
              {/* <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700">
                Visa/MasterCard
              </div> */}
              <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700">
                Bank Transfer
              </div>
              <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700">
                Cash
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="mt-6 pt-6 border-t border-blue-800/30">
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <a href="/terms" className="hover:text-cyan-300 transition">Terms of Service</a>
              <a href="/privacy" className="hover:text-cyan-300 transition">Privacy Policy</a>
              <a href="/cookies" className="hover:text-cyan-300 transition">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & SOCIAL */}
      <div className="mt-16 pt-8 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SHARKS CONNECTION HUB • All Rights Reserved
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Professional Electronics Solutions • Established 2010 • Nairobi, Kenya
            </p>
            <p className="text-gray-600 text-xs mt-1">
              VAT No: P051XXXXXX • Business License: 2023/XXXXX
            </p>
          </div>
          
          <div className="flex items-center gap-1">
            <p className="text-gray-500 text-sm mr-4 hidden md:block">Connect With Us:</p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="text-gray-400 hover:text-pink-400 transition hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-400 hover:text-blue-300 transition hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                className="text-gray-400 hover:text-red-400 transition hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* BACK TO TOP */}
        <div className="text-center mt-8">
          <a 
            href="#top" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-300 transition text-sm"
          >
            <span>Back to Top</span>
            <ChevronRight size={16} className="rotate-90" />
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer