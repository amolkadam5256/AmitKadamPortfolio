import React, { useState, useEffect, useRef } from 'react';

const ProfessionalHero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const imageRef = useRef(null);

  const fullText = "Amit Kadam – Equity Research Analyst & MBA Finance";
  const typingSpeed = 80;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      // Show rest of content after typing completes
      setTimeout(() => setShowContent(true), 300);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          {/* Name with Typing Animation */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              <span className="block min-h-[48px]">
                {displayedText}
                <span className="inline-block w-0.5 h-8 bg-[#000080] ml-1 animate-pulse"></span>
              </span>
            </h1>
            
            {/* Description - Appears after typing */}
            {showContent && (
              <div className="animate-fade-in">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                  Aspiring Equity Research Analyst specializing in{' '}
                  <span className="text-[#000080] font-medium">financial modeling</span>,{' '}
                  <span className="text-[#000080] font-medium">valuation</span>, and{' '}
                  <span className="text-[#000080] font-medium">market analysis</span>.
                </p>
              </div>
            )}
          </div>

          {/* Buttons - Appear after typing */}
          {showContent && (
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white font-medium py-3 px-6  transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm">
                <span className="text-lg">📞</span>
                <span>Contact Me</span>
              </button>
            </div>
          )}

          {/* Quick Stats - Appear after typing */}
          {showContent && (
            <div className="animate-fade-in-up grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-3  bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="text-lg font-bold text-[#000080]">5+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-3  bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="text-lg font-bold text-[#000080]">50+</div>
                <div className="text-xs text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-3  bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="text-lg font-bold text-[#000080]">100%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          )}
        </div>

        {/* Image Section - Appear after typing */}
        {showContent && (
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Main Image Container */}
              <div 
                ref={imageRef}
                className="relative bg-white  p-1 shadow-lg transform transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Amit Kadam - Professional Photo"
                  className="w-64 h-80 lg:w-80 lg:h-96 object-cover 
                   grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#000080] text-white p-3  shadow-lg">
                  <div className="text-xs font-semibold">Available for</div>
                  <div className="text-sm font-bold">New Projects</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalHero;