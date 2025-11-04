import React, { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
  const [showContent, setShowContent] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-6 py-25 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          {/* Name without Typing Animation */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              <span className="block">
                Amit Kadam Equity Research & Finance Enthusiast | MBA Finance Student
              </span>
            </h1>

            {/* Bio Section */}
            {showContent && (
              <div className="animate-fade-in space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                  I'm an <span className="text-[#000080] font-medium">MBA Finance graduate</span> and a passionate 
                  <span className="text-[#000080] font-medium"> Equity Research Analyst</span> with over 
                  <span className="text-[#000080] font-medium"> 5 years of experience</span> in 
                  <span className="text-[#000080] font-medium"> financial modeling</span>, 
                  <span className="text-[#000080] font-medium"> valuation</span>, and 
                  <span className="text-[#000080] font-medium"> market research</span>.
                </p>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                  My mission is to help <span className="text-[#000080] font-medium">investors</span> and 
                  <span className="text-[#000080] font-medium"> organizations</span> make informed, data-driven 
                  investment decisions through deep market insights and analytical precision.
                </p>
              </div>
            )}
          </div>

          {/* Buttons */}
          {showContent && (
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="#contact"
                className="group border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white font-medium py-3 px-6 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <span className="text-lg">📞</span>
                <span>Contact Me</span>
              </a>
              <a 
                href="/about"
                className="group border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium py-3 px-6 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <span className="text-lg">📄</span>
                <span>View Profile</span>
              </a>
            </div>
          )}

          {/* Quick Stats */}
          {showContent && (
            <div className="animate-fade-in-up grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-3 bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded">
                <div className="text-lg font-bold text-[#000080]">5+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-3 bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded">
                <div className="text-lg font-bold text-[#000080]">50+</div>
                <div className="text-xs text-gray-600">Financial Models</div>
              </div>
              <div className="text-center p-3 bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded">
                <div className="text-lg font-bold text-[#000080]">15+</div>
                <div className="text-xs text-gray-600">Industries Covered</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Professional Image */}
        {showContent && (
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div 
                ref={imageRef}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Amit Kadam - Professional Portrait"
                  className="w-64 h-80 lg:w-80 lg:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#000080] text-white px-4 py-2 shadow-lg">
                  <div className="text-xs font-semibold">Let's Talk</div>
                  <div className="text-sm font-bold">New Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AboutMe;