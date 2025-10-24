import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaChartLine, 
  FaFileAlt, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaTimes,
  FaArrowRight,
  FaChartBar,
  FaDollarSign,
  FaChartPie
} from "react-icons/fa";

const InquiryForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    "Equity Research",
    "Financial Modeling",
    "Investment Analysis",
    "Valuation Services",
    "Market Research",
    "Financial Consulting",
    "Other Financial Analysis"
  ];

  const budgetRanges = [
    "Less than ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "More than ₹1,00,000"
  ];

  const timelines = [
    "Within 1 week",
    "1-2 weeks",
    "2-4 weeks",
    "1-2 months",
    "Flexible timeline"
  ];

  // Show button after component mounts
  useEffect(() => {
    setIsButtonVisible(true);
  }, []);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFormOpen && !event.target.closest('.inquiry-form-container') && !event.target.closest('.inquiry-now-button')) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFormOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("access_key", "your-web3form-access-key-here");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you for your inquiry! I'll get back to you within 24 hours.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: ""
        });

        // Auto close form after success
        setTimeout(() => {
          setIsFormOpen(false);
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const VerticalInquiryButton = () => (
    <AnimatePresence>
      {isButtonVisible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          whileHover={{ x: -8, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormOpen(true)}
          className="inquiry-now-button fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-b from-[#000080] to-[#1a1a8a] text-white py-4 px-2 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-l-2 border-[#FFD700]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <div className="flex items-center justify-center space-y-1">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mb-0.5"
            />
            <span className="font-bold text-[10px] tracking-widest uppercase group-hover:text-[#FFD700] transition-colors duration-300">
              Inquiry Now
            </span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mt-0.5"
            >
              <FaArrowRight className="text-[#FFD700] transform rotate-90 text-xs" />
            </motion.div>
          </div>
          
          {/* Animated border */}
          <motion.div
            animate={{ height: [0, 15, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute left-0 top-1/2 w-0.5 bg-[#FFD700] transform -translate-y-1/2"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <VerticalInquiryButton />

      {/* Slide-in Form */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  z-[60]"
            />
            
            {/* Form */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="inquiry-form-container fixed right-0 top-0 h-full w-full sm:w-96 lg:w-80 xl:w-96 bg-white z-[70] overflow-y-auto shadow-2xl border-l border-gray-200"
            >
              {/* Form Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#000080] to-[#1a1a8a] px-6 py-4 z-[80] shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white mb-1">Quick Inquiry</h2>
                    <p className="text-[#FFD700] text-xs">Let's discuss your project</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsFormOpen(false)}
                    className="text-white hover:text-[#FFD700] transition-colors duration-200 p-1"
                  >
                    <FaTimes className="text-sm" />
                  </motion.button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Personal Information */}
                  <div>
                    <label className="block text-xs font-semibold text-[#000080] mb-2 uppercase tracking-wide">
                      <FaUser className="inline mr-1 text-[10px]" />
                      Your Info
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Full Name *"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Email *"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#000080] mb-2 uppercase tracking-wide">
                      <FaChartLine className="inline mr-1 text-[10px]" />
                      Service
                    </label>
                    <div className="space-y-3">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800"
                      >
                        <option value="">Select service *</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800"
                      >
                        <option value="">Budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-semibold text-[#000080] mb-2 uppercase tracking-wide">
                      <FaClock className="inline mr-1 text-[10px]" />
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                      placeholder="Company (optional)"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#000080] mb-2 uppercase tracking-wide">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#000080] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
                      placeholder="Briefly describe your project requirements..."
                    />
                  </div>
                </div>

                {/* Submit Section */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-[#000080] to-[#1a1a8a] text-white py-3 px-6 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin border-2 border-white border-t-transparent w-4 h-4 mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2 text-xs" />
                          SEND INQUIRY
                        </>
                      )}
                    </motion.button>
                    
                    <div className="text-xs text-gray-500 text-center flex items-center justify-center">
                      <FaShieldAlt className="mr-1 text-[#000080] text-[10px]" />
                      Secure & confidential
                    </div>
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 border-l-2 ${
                        submitStatus === "success" 
                          ? "bg-green-50 border-green-500 text-green-700" 
                          : "bg-red-50 border-red-500 text-red-700"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {submitStatus === "success" ? (
                          <FaCheckCircle className="text-green-500 text-sm flex-shrink-0 mt-0.5" />
                        ) : (
                          <FaExclamationCircle className="text-red-500 text-sm flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-semibold text-xs">
                            {submitStatus === "success" ? "Success!" : "Error"}
                          </p>
                          <p className="text-xs mt-0.5">{submitMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default InquiryForm;