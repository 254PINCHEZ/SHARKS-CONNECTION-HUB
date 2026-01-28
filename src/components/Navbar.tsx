import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/myphoto..jpeg"; // Corrected import path

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "HDMI Cable 1-5m", category: "computerCables", path: "/computerCables" },
    { id: 2, name: "VGA Cable 1-5m", category: "computerCables", path: "/computerCables" },
    { id: 3, name: "2GB Snake Cable", category: "computerCables", path: "/computerCables" },
    { id: 4, name: "UConn Wireless", category: "Accessories", path: "/Accessories" },
    { id: 5, name: "Botes MP AA", category: "Accessories", path: "/Accessories" },
    { id: 6, name: "Cat 6 Cable 30m", category: "computerCables", path: "/computerCables" },
    { id: 7, name: "HD Casing", category: "CCTVCameras", path: "/CCTVCameras" },
    { id: 8, name: "Bal Astro", category: "ElectricalElectronics", path: "/ElectricalElectronics" },
    { id: 9, name: "Marken", category: "ElectricalElectronics", path: "/ElectricalElectronics" },
    { id: 10, name: "CCTV Camera", category: "CCTVCameras", path: "/CCTVCameras" },
    { id: 11, name: "Computer Accessories", category: "Accessories", path: "/Accessories" },
    { id: 12, name: "Electrical Components", category: "ElectricalElectronics", path: "/ElectricalElectronics" },
  ];

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/computerCables", label: "Computer Cables" },
    { to: "/Accessories", label: "Accessories" },
    { to: "/CCTVCameras", label: "CCTV Cameras" },
    { to: "/ElectricalElectronics", label: "Electrical Electronics" },
    { to: "/ContactPage", label: "Contact" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleProductSelect = (product: any) => {
    navigate(product.path);
    setSearchQuery("");
    setShowResults(false);
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      handleProductSelect(searchResults[0]);
    }
  };

  const handleStaffPortalClick = () => {
    navigate("/ContactPage");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={logoImage} 
                    alt="SHARKS CONNECTION HUB Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight leading-tight">
                  <span className="text-white">SHARKS</span>{" "}
                  <span className="text-blue-400">CONNECTION HUB</span>
                </span>
                <span className="text-xs font-medium text-gray-400">
                  Simba Centre, River Road
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-2.5 font-medium text-sm transition-all duration-200 rounded-lg group ${
                    location.pathname === item.to
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.to && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowResults(true)}
                    className="pl-10 pr-4 py-2.5 w-64 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                  />
                  <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </form>

                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full mt-1 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                    <div className="p-2 border-b border-gray-700">
                      <p className="text-xs text-gray-400 font-semibold">Search Results ({searchResults.length})</p>
                    </div>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                        className="w-full text-left p-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-white">{product.name}</p>
                            <p className="text-xs text-gray-400 capitalize">{product.category}</p>
                          </div>
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {showResults && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="absolute top-full mt-1 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 p-4">
                    <p className="text-sm text-gray-300">No products found for "{searchQuery}"</p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleStaffPortalClick}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center gap-2 border border-blue-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Staff Portal
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-700 bg-gray-900">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block px-4 py-3.5 rounded-lg font-medium transition-all ${
                      location.pathname === item.to
                        ? "bg-gray-800 text-blue-400 border-l-4 border-blue-500"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {location.pathname === item.to && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowResults(true)}
                    className="w-full px-4 py-3 pl-11 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                  />
                  <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {showResults && searchResults.length > 0 && (
                  <div className="bg-gray-800 border border-gray-700 rounded-lg max-h-48 overflow-y-auto">
                    <div className="p-2 border-b border-gray-700">
                      <p className="text-xs text-gray-400 font-semibold">Search Results ({searchResults.length})</p>
                    </div>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                        className="w-full text-left p-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      >
                        <p className="text-sm font-medium text-white">{product.name}</p>
                        <p className="text-xs text-gray-400 capitalize">{product.category}</p>
                      </button>
                    ))}
                  </div>
                )}

                {showResults && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-300">No products found for "{searchQuery}"</p>
                  </div>
                )}
                
                <div className="text-center text-sm text-gray-400 pt-4">
                  <div className="mb-3 p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Simba Centre Building, River Road</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    handleStaffPortalClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-lg shadow flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Staff Portal
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </>
  );
};

export default Navbar;