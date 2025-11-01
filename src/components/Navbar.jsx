import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown, FaChevronUp, FaPhone, FaTimes, FaFileDownload, FaChartLine } from "react-icons/fa";

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
    <nav ref={navbarRef} className={`fixed w-full z-49 transition-all duration-500 ${scrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-white border-b border-gray-100"}`}>
      <div className="w-full flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-8 bg-[#000080]"></div>
              <div>
                <h1 className="text-2xl font-black text-[#000080] tracking-tight">AMIT KADAM</h1>
                <p className="text-xs text-[#FFD700] font-semibold tracking-widest uppercase">Equity Research Analyst</p>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Hamburger */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-full h-10 justify-end text-gray-800 md:hidden focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col space-y-1">
            <span className={`w-6 h-0.5 bg-[#000080] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#000080] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-6 h-0.5 bg-[#000080] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `relative px-4 py-2 transition-all duration-300 ${isActive ? "text-[#000080] font-bold bg-[#FFD700]" : "text-gray-700 hover:text-[#000080] hover:bg-gray-50"}`}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#000080]"
                          layoutId="navbar-indicator"
                        />
                      )}
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
                    className={`flex items-center px-4 py-2 transition-all ${isActivePath(item.path) ? "text-[#000080] font-bold bg-[#FFD700]" : "text-gray-700 hover:text-[#000080] hover:bg-gray-50"}`}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      className="ml-1"
                    >
                      {isServicesOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                    </motion.span>
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 top-full mt-1 w-64 bg-white shadow-2xl overflow-hidden z-50 border border-gray-200"
                      >
                        <div className="bg-[#000080] px-4 py-2 flex items-center space-x-2">
                          <FaChartLine className="text-[#FFD700] text-sm" />
                          <span className="text-white font-semibold text-sm">FINANCIAL SERVICES</span>
                        </div>
                        {item.dropdown.map((drop, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={drop.path}
                              className={({ isActive }) => `block py-3 px-4 transition-all duration-300 border-b border-gray-100 last:border-b-0 group ${isActive ? "bg-[#000080] text-white" : "text-gray-700 hover:bg-[#FFD700] hover:text-black"}`}
                            >
                              {({ isActive: isDropActive }) => (
                                <div className="flex items-center space-x-2">
                                  <div className={`w-1 h-4 ${isDropActive ? "bg-[#FFD700]" : "bg-transparent group-hover:bg-black"}`}></div>
                                  <span>{drop.name}</span>
                                </div>
                              )}
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
        <div className="hidden md:flex items-center space-x-2">

          <motion.a
            href="tel:+918956506020"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-[#FFD700] text-black px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-sm border border-[#FFD700] group"
          >
            <FaPhone className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            CALL
          </motion.a>
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
              {/* Header */}
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-black text-[#000080]">AMIT KADAM</h1>
                    <p className="text-xs text-[#FFD700] font-semibold uppercase">Equity Research Analyst</p>
                  </div>
                </Link>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaTimes className="text-gray-700" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <motion.ul
                className="space-y-0 mt-6"
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
                          `block py-4 px-2 text-lg font-medium transition-all duration-300 ${isActive ? "text-[#000080] bg-[#FFD700] font-bold border-l-4 border-[#000080]" : "text-gray-700 hover:text-[#000080] hover:bg-gray-50 border-l-4 border-transparent"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <div className="border-l-4 border-transparent">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center justify-between w-full text-lg font-medium px-2 py-4 ${isActivePath(item.path) ? "text-[#000080] font-bold border-l-4 border-[#000080]" : "text-gray-700 border-l-4 border-transparent"
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
                              className="bg-gray-50 overflow-hidden"
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
                                      `block py-3 px-6 transition-all duration-300 border-l-4 ${isActive ? "text-white bg-[#000080] font-bold border-[#FFD700]" : "text-gray-700 hover:text-black hover:bg-[#FFD700] border-transparent"
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
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center bg-[#000080] text-white px-6 py-4 shadow-lg font-bold text-lg border border-[#000080] w-full"
                >
                  <FaFileDownload className="mr-3 text-lg" />
                  DOWNLOAD RESUME
                </motion.a>

                <motion.a
                  href="tel:+918956506020"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center bg-[#FFD700] text-black px-6 py-4 shadow-lg font-bold text-lg border border-[#FFD700] w-full"
                >
                  <FaPhone className="mr-3 text-lg" />
                  +91 89565 06020
                </motion.a>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-100 hover:bg-[#FFD700] transition-colors duration-300 flex items-center justify-center border border-gray-300"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Email */}
                <div className="text-center mt-4">
                  <a
                    href="mailto:amitkadam1562@gmail.com"
                    className="text-[#000080] hover:text-[#FFD700] font-bold transition-colors duration-300 text-sm"
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