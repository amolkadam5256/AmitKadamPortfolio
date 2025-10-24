import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaFileDownload,
  FaArrowRight
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryColor = "#000080"; // Navy Blue
  const secondaryColor = "#FFD700"; // Gold
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [message, setMessage] = useState("");

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/", icon: <FaArrowRight className="text-xs" /> },
        { name: "About", path: "/about", icon: <FaArrowRight className="text-xs" /> },
        { name: "Portfolio", path: "/portfolio", icon: <FaArrowRight className="text-xs" /> },
        { name: "Services", path: "/services", icon: <FaArrowRight className="text-xs" /> },
        { name: "Blog", path: "/blog", icon: <FaArrowRight className="text-xs" /> },
        { name: "Contact", path: "/contact", icon: <FaArrowRight className="text-xs" /> }
      ]
    },
    {
      title: "My Services",
      links: [
        { name: "Equity Research", path: "/services/equity-research" },
        { name: "Financial Modeling", path: "/services/financial-modeling" },
        { name: "Investment Analysis", path: "/services/investment-analysis" },
        { name: "Valuation Services", path: "/services/valuation" },
        { name: "Market Research", path: "/services/market-research" },
        { name: "Financial Consulting", path: "/services/financial-consulting" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/in/amitkadam1562", 
      color: "#0077B5", 
      name: "LinkedIn" 
    },
    { 
      icon: <FaGithub />, 
      url: "https://github.com/amitkadam1562", 
      color: "#333333", 
      name: "GitHub" 
    },
    { 
      icon: <FaEnvelope />, 
      url: "mailto:amitkadam1562@gmail.com", 
      color: "#EA4335", 
      name: "Email" 
    },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-xs" />, 
      text: "Maharashtra, India", 
      color: primaryColor 
    },
    { 
      icon: <FaPhone className="text-xs" />, 
      text: "+91 89565 06020", 
      color: secondaryColor,
      href: "tel:+918956506020"
    },
    { 
      icon: <FaEnvelope className="text-xs" />, 
      text: "amitkadam1562@gmail.com", 
      color: "#6B7280",
      href: "mailto:amitkadam1562@gmail.com"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setMessage("Subscribed successfully! I'll keep you updated.");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800 relative border-t border-gray-200">
      {/* Top Border */}
      <div className="h-0.5 bg-gradient-to-r from-[#000080] via-[#FFD700] to-[#000080]"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#000080]">Amit Kadam</h2>
            <p className="text-sm text-[#FFD700] font-semibold">Equity Research Analyst & MBA Finance</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aspiring Equity Research Analyst specializing in financial modeling, valuation, 
            and market analysis. Passionate about investment research and helping investors 
            make data-driven decisions.
          </p>
          
          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#FFD700] text-[#000080] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#e6c200] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <FaFileDownload className="mr-2" />
            Download Resume
          </motion.a>

          {/* Contact Info */}
          <div className="space-y-2">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ x: 3 }}
                className="flex items-start space-x-2 group cursor-pointer text-sm"
              >
                <div 
                  className="p-1.5 rounded-full text-white mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-gray-600 group-hover:text-[#000080] transition-colors duration-200">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links Sections */}
        {footerSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#000080]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li 
                  key={linkIndex}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-[#FFD700] transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.icon && <span className="mr-1.5">{link.icon}</span>}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3 text-[#000080]">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Get insights on market trends and investment opportunities
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 w-full rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#000080] text-sm transition-all duration-200"
                required
                disabled={isSubmitting}
              />
              <motion.button 
                type="submit" 
                className="px-4 py-2 bg-gradient-to-r from-[#000080] to-[#1a1a8a] text-white rounded hover:shadow transition-all duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe to Insights"}
              </motion.button>
            </form>
            
            {submitStatus && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-2 p-2 rounded text-xs flex items-center space-x-1 ${
                  submitStatus === "success" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus === "success" ? (
                  <FaCheckCircle className="flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="flex-shrink-0" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3 text-[#000080]">
              Connect With Me
            </h3>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 hover:shadow transition-all duration-200"
                  style={{ color: social.color }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    color: "white"
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 text-sm">
              © {currentYear} <span className="text-[#000080] font-semibold">Amit Kadam</span>. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link 
              to="/privacy" 
              className="text-gray-600 hover:text-[#FFD700] transition-colors duration-200 text-xs"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-600 hover:text-[#FFD700] transition-colors duration-200 text-xs"
            >
              Terms
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-[#FFD700] transition-colors duration-200 text-xs"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;