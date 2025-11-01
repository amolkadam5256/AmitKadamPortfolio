import React, { useState, useEffect } from 'react';

const AboutPreview = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const fullText = "About Amit Kadam";
  const typingSpeed = 80;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-96 bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - All Content */}
        <div className="space-y-8">
          {/* Heading with Typing Animation */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="block min-h-[48px]">
                {displayedText}
                <span className="inline-block w-0.5 h-8 bg-[#000080] ml-2 animate-pulse"></span>
              </span>
            </h2>
          </div>

          {/* Creative Content - Appears after typing */}
          {showContent && (
            <div className="animate-fade-in space-y-8">
              {/* Main Description with Creative Layout */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#000080] opacity-20"></div>
                  <p className="text-lg text-gray-700 leading-relaxed font-light pl-4">
                    Passionate <span className="text-[#000080] font-semibold">Equity Research Analyst</span> with 
                    MBA in Finance, specializing in comprehensive financial analysis and investment strategy development.
                  </p>
                </div>

                {/* Key Expertise Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 border-l-4 border-[#000080] hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Modeling</h4>
                    <p className="text-sm text-gray-600">Advanced DCF, LBO, and M&A models</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 border-l-4 border-[#000080] hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Valuation Analysis</h4>
                    <p className="text-sm text-gray-600">Relative & intrinsic valuation methods</p>
                  </div>
                </div>
              </div>

              {/* Stats with Icons */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700">
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700">
                    <span className="text-white font-bold">50+</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Research Reports</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700">
                    <span className="text-white font-bold">15+</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Industries</div>
                </div>
              </div>

              {/* Read More Button */}
              <div className="animate-fade-in-up pt-4">
                <a 
                  href="/about" 
                  className="group inline-flex items-center gap-3 text-[#000080] font-semibold hover:text-white hover:bg-[#000080] py-3 px-8 border-2 border-[#000080] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span>Discover My Journey</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Creative College Images */}
        {showContent && (
          <div className="animate-fade-in relative">
            {/* Main Image Container */}
            <div className="relative grid grid-cols-2 gap-4">
              
              {/* Image 1 - Professional Headshot */}
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Professional Headshot"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Floating Tag */}
                <div className="absolute -bottom-3 -left-3 bg-[#000080] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                  Expert Analyst
                </div>
              </div>

              {/* Image 2 - Financial Workspace */}
              <div className="relative mt-8 group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Financial Analysis Workspace"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Floating Tag */}
                <div className="absolute -top-3 -right-3 bg-[#000080] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                  Research Desk
                </div>
              </div>

              {/* Image 3 - Market Data */}
              <div className="relative -mt-4 group col-span-2">
                <div className="aspect-[16/6] overflow-hidden bg-gray-100 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Market Data Analysis"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Floating Tag */}
                <div className="absolute -bottom-3 right-4 bg-[#000080] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                  Market Insights
                </div>
              </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#000080] opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#000080] opacity-20"></div>
          </div>
        )}
      </div>
    </div>
  );
};


export default AboutPreview;