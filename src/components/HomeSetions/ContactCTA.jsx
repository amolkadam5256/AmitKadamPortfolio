import React from 'react';

const ContactCTA = () => {
  return (
    <div className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 backdrop-blur-[1px]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.1]"
             style={{
               backgroundImage: `linear-gradient(#000080 1px, transparent 1px),
                                linear-gradient(90deg, #000080 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 opacity-10">
          <div className="w-full h-full bg-[#000080] rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/5 w-28 h-28 opacity-10">
          <div className="w-full h-full bg-[#000080] rounded-full blur-xl"></div>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#000080] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#000080] opacity-10"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 border border-[#000080]/20">
          <div className="w-1.5 h-1.5 bg-[#000080] rounded-full"></div>
          <span className="text-[#000080] text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
          <div className="w-1.5 h-1.5 bg-[#000080] rounded-full"></div>
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
          Available for{' '}
          <span className="font-normal bg-gradient-to-r from-[#000080] to-blue-600 bg-clip-text text-transparent">
            New Projects
          </span>
          <br />
          Let's Work Together
        </h3>
        
        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
          Ready to bring your investment analysis projects to life with professional equity research 
          and financial modeling expertise.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* Phone */}
          <a 
            href="tel:+918956506020"
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 border border-gray-200 hover:border-[#000080] hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[240px]"
          >
            <div className="w-10 h-10 bg-[#000080] flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
              <span className="text-white text-lg">📞</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Phone</p>
              <p className="text-base font-semibold text-gray-900 group-hover:text-[#000080] transition-colors duration-300">
                +91 89565 06020
              </p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:amitkadam1562@gmail.com"
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 border border-gray-200 hover:border-[#000080] hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[240px]"
          >
            <div className="w-10 h-10 bg-[#000080] flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
              <span className="text-white text-lg">✉️</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="text-base font-semibold text-gray-900 group-hover:text-[#000080] transition-colors duration-300 break-all">
                amitkadam1562@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {/* Call to Action Button */}
          <button className="
            group relative bg-[#000080] text-white font-semibold py-4 px-10 
            hover:bg-blue-700 transition-all duration-300 
            transform hover:scale-105 hover:shadow-lg
            flex items-center gap-3 justify-center
            border border-[#000080] overflow-hidden
            min-w-[200px]
          ">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Button Content */}
            <span className="relative text-sm">Start a Project</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          
          {/* Secondary Button */}
          <button className="
            group relative bg-white text-[#000080] font-semibold py-4 px-10 
            hover:bg-[#000080] hover:text-white transition-all duration-300 
            transform hover:scale-105 hover:shadow-lg
            flex items-center gap-3 justify-center
            border border-[#000080] overflow-hidden
            min-w-[200px]
          ">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000080]/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Button Content */}
            <span className="relative text-sm">Download Resume</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        {/* Availability Status */}
        <div className="mt-8 pt-6 border-t border-[#000080]/10">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-800 text-xs font-semibold">Currently available for new projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;