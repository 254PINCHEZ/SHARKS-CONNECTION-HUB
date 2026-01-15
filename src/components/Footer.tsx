import React from 'react'
import { Cpu, Shield, Truck, Headphones, Phone, Mail, MapPin } from 'lucide-react'
import { Network, Cable, Wrench, Tag, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16 px-6 mt-20 border-t border-blue-800/30">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND & SHOP INFO */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
              <Cpu size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              <span className="text-cyan-300">SHARKS</span>
              <span className="text-white">COLLECTION</span>
              {/* <span className="text-blue-300">HUB</span> */}
            </h2>
          </div>
          <p className="leading-relaxed text-gray-400">
            Your trusted partner for networking devices, computer components, 
            and quality cables in Nairobi. Professional solutions for businesses and individuals.
          </p>
          <div className="flex items-center gap-3 mt-4 text-sm text-cyan-200">
            <Shield size={16} />
            <span>1-Year Warranty on All Products</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-cyan-200">
            <Truck size={16} />
            <span>Same-Day Nairobi Delivery</span>
          </div>
        </div>

        {/* PRODUCT CATEGORIES */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50 flex items-center">
            <Cpu size={20} className="mr-2 text-cyan-300" />
            Shop Categories
          </h6>
          <ul className="space-y-3">
            <li>
              <a href="/networking" className="hover:text-cyan-300 transition flex items-center">
                <Network size={16} className="mr-2" />
                Networking Devices
              </a>
            </li>
            <li>
              <a href="/computer-components" className="hover:text-cyan-300 transition flex items-center">
                <Cpu size={16} className="mr-2" />
                Computer Components
              </a>
            </li>
            <li>
              <a href="/cables" className="hover:text-cyan-300 transition flex items-center">
                <Cable size={16} className="mr-2" />
                Cables & Connectors
              </a>
            </li>
            <li>
              <a href="/tools" className="hover:text-cyan-300 transition flex items-center">
                <Wrench size={16} className="mr-2" />
                Tools & Accessories
              </a>
            </li>
            <li>
              <a href="/brands" className="hover:text-cyan-300 transition flex items-center">
                <Tag size={16} className="mr-2" />
                Brands (TP-Link, Cisco, D-Link)
              </a>
            </li>
          </ul>
        </div>

        {/* NAIROBI CONTACT & SUPPORT */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50 flex items-center">
            <Headphones size={20} className="mr-2 text-cyan-300" />
            Nairobi Support
          </h6>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone size={18} className="mr-3 text-cyan-400 mt-1" />
              <div>
                <p className="font-medium">Sales & Support</p>
                <a href="tel:+254700123456" className="text-gray-400 hover:text-cyan-300 transition">
                  +254 700 123 456
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <Mail size={18} className="mr-3 text-cyan-400 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:sales@nairobielectrotech.co.ke" className="text-gray-400 hover:text-cyan-300 transition">
                  sales@nairobielectrotech.co.ke
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-cyan-400 mt-1" />
              <div>
                <p className="font-medium">Nairobi Location</p>
                <p className="text-gray-400">Biashara Street, CBD<br/>Nairobi, Kenya</p>
              </div>
            </li>
            <li className="mt-6">
              <p className="font-medium text-white mb-2">Business Hours</p>
              <p className="text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sun: Closed</p>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS & LEGAL */}
        <div>
          <h6 className="text-lg font-bold text-white mb-6 pb-2 border-b border-blue-700/50">
            Quick Links
          </h6>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold text-cyan-300 mb-3">Company</h6>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-cyan-300 transition">About Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-cyan-300 transition">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-cyan-300 transition">Blog & Tech Tips</a></li>
                <li><a href="/wholesale" className="text-gray-400 hover:text-cyan-300 transition">Wholesale Inquiries</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-3">Support</h6>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-400 hover:text-cyan-300 transition">FAQs</a></li>
                <li><a href="/technical-support" className="text-gray-400 hover:text-cyan-300 transition">Technical Support</a></li>
                <li><a href="/warranty" className="text-gray-400 hover:text-cyan-300 transition">Warranty Claims</a></li>
                <li><a href="/returns" className="text-gray-400 hover:text-cyan-300 transition">Returns & Refunds</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-800/30">
            <h6 className="font-semibold text-cyan-300 mb-3">Legal</h6>
            <div className="flex flex-wrap gap-4">
              <a href="/terms" className="text-gray-400 hover:text-cyan-300 transition text-sm">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 hover:text-cyan-300 transition text-sm">Privacy Policy</a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-300 transition text-sm">Cookie Policy</a>
            </div>
          </div>

          {/* PAYMENT METHODS */}
          <div className="mt-6">
            <p className="font-medium text-white mb-2">Payment Methods</p>
            <div className="flex gap-2">
              <div className="bg-gray-800 px-3 py-1 rounded text-sm">M-Pesa</div>
              <div className="bg-gray-800 px-3 py-1 rounded text-sm">Visa</div>
              <div className="bg-gray-800 px-3 py-1 rounded text-sm">Cash</div>
              <div className="bg-gray-800 px-3 py-1 rounded text-sm">Bank</div>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & SOCIAL */}
      <div className="mt-16 pt-8 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nairobi ElectroTech • All Rights Reserved • KE VAT No: P051XXXXXX
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Certified Reseller of TP-Link, Cisco, D-Link, and other leading brands
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-300 transition">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-cyan-300 transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-cyan-300 transition">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-300 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-cyan-300 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

// Import additional icons needed


export default Footer