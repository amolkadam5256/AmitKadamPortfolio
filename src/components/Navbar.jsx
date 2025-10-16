import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown, FaChevronUp, FaPhone, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Equity Research", path: "/services/equity-research" },
        { name: "Financial Modeling", path: "/services/financial-modeling" },
        { name: "Investment Analysis", path: "/services/investment-analysis" },
        { name: "Valuation Services", path: "/services/valuation" },
        { name: "Market Research", path: "/services/market-research" },
        { name: "Financial Consulting", path: "/services/financial-consulting" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/in/amitkadam1562", 
      name: "LinkedIn"
    },
    { 
      icon: <FaGithub />, 
      url: "https://github.com/amitkadam1562", 
      name: "GitHub"
    },
    { 
      icon: <FaEnvelope />, 
      url: "mailto:amitkadam1562@gmail.com", 
      name: "Email"
    },
  ];

  // Check if current path is active
  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav ref={navbarRef} className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg" : "bg-white"}`}>
      <div className="w-full flex items-center justify-between px-4 py-0 md:px-6 md:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-2xl font-bold text-black">Amit Kadam</h1>
            <p className="text-xs text-gray-600 font-medium">Equity Research Analyst</p>
          </motion.div>
        </Link>

        {/* Hamburger */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          className="inline-flex items-center p-2 w-full h-10 justify-end text-gray-800 rounded-lg md:hidden focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `relative px-2 py-0 transition-all duration-300 ${isActive ? "text-black font-bold border-b-2 border-black" : "text-gray-700 hover:text-black"}`}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                    </>
                  )}
                </NavLink>
              ) : (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to={item.path} 
                    className={`flex items-center px-2 py-1 transition-all ${isActivePath(item.path) ? "text-black font-bold" : "text-gray-700 hover:text-black"}`}
                  >
                    {item.name}
                    <motion.span 
                      animate={{ rotate: isServicesOpen ? 180 : 0 }} 
                      className="ml-1"
                    >
                      {isServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </motion.span>
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }} 
                        className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50 border border-gray-200"
                      >
                        {item.dropdown.map((drop, idx) => (
                          <li key={idx}>
                            <NavLink 
                              to={drop.path} 
                              className={({ isActive }) => `block py-3 px-4 transition-all duration-300 border-b border-gray-100 last:border-b-0 ${isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100 hover:text-black"}`}
                            >
                              {drop.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact & Resume */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="/resume.pdf"
            download
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold hover:bg-gray-800 border border-black"
          >
            <FaFileDownload className="mr-2" />
            Resume
          </a>
          <a 
            href="tel:+918956506020" 
            className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold hover:bg-gray-100 border border-black"
          >
            <FaPhone className="mr-2" />
            Call
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: '100%' }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }} 
              className="fixed inset-0 bg-white z-50 pt-4 px-6 pb-5 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-black">Amit Kadam</h1>
                    <p className="text-xs text-gray-600">Equity Research Analyst</p>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded-full"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>
              
              <motion.ul 
                className="space-y-1 mt-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0">
                    {!item.dropdown ? (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => 
                          `block py-4 px-2 text-lg font-medium transition-all duration-300 ${
                            isActive ? "text-black bg-gray-100 font-bold" : "text-gray-700 hover:text-black hover:bg-gray-50"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <div className="py-4">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center justify-between w-full text-lg font-medium px-2 ${
                            isActivePath(item.path) ? "text-black font-bold" : "text-gray-700"
                          }`}
                        >
                          {item.name}
                          {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((drop, idx) => (
                                <li key={idx}>
                                  <NavLink
                                    to={drop.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setIsServicesOpen(false);
                                    }}
                                    className={({ isActive }) => 
                                      `block py-3 px-2 rounded-lg transition-all duration-300 ${
                                        isActive ? "text-black bg-gray-100 font-bold" : "text-gray-700 hover:text-black hover:bg-gray-50"
                                      }`
                                    }
                                  >
                                    {drop.name}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </motion.ul>

              {/* Mobile Contact */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                <a 
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center bg-black text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-lg border border-black"
                >
                  <FaFileDownload className="mr-3 text-lg" />
                  Download Resume
                </a>
                
                <a 
                  href="tel:+918956506020" 
                  className="flex items-center justify-center bg-white text-black px-6 py-4 rounded-lg shadow-lg font-semibold text-lg border border-black"
                >
                  <FaPhone className="mr-3 text-lg" />
                  +91 89565 06020
                </a>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center border border-gray-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Email */}
                <div className="text-center mt-4">
                  <a 
                    href="mailto:amitkadam1562@gmail.com"
                    className="text-black hover:text-gray-700 font-semibold transition-colors duration-300"
                  >
                    amitkadam1562@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;