import React, { useState } from 'react';

const ServicesSnapshot = () => {
    const [activeCard, setActiveCard] = useState(null);

    // Professional SVG Icons
    const ProfessionalIcons = {
        EquityResearch: ({ isActive }) => (
            <svg className={`w-8 h-8 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-[#000080]'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        FinancialModeling: ({ isActive }) => (
            <svg className={`w-8 h-8 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-[#000080]'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        InvestmentAnalysis: ({ isActive }) => (
            <svg className={`w-8 h-8 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-[#000080]'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        ValuationServices: ({ isActive }) => (
            <svg className={`w-8 h-8 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-[#000080]'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    };

    const services = [
        {
            id: 1,
            title: "Equity Research",
            icon: "EquityResearch",
            description: "In-depth fundamental analysis of companies and industries to identify investment opportunities",
            features: ["Company Analysis", "Industry Research", "Investment Thesis", "Risk Assessment"],
            stats: "500+ Reports"
        },
        {
            id: 2,
            title: "Financial Modeling",
            icon: "FinancialModeling",
            description: "Advanced financial models including DCF, LBO, and M&A analysis for strategic decision making",
            features: ["DCF Valuation", "LBO Models", "M&A Analysis", "Scenario Planning"],
            stats: "200+ Models"
        },
        {
            id: 3,
            title: "Investment Analysis",
            icon: "InvestmentAnalysis",
            description: "Comprehensive portfolio analysis and strategic investment recommendations for optimal returns",
            features: ["Portfolio Analysis", "Risk Management", "Performance Tracking", "Asset Allocation"],
            stats: "15+ Sectors"
        },
        {
            id: 4,
            title: "Valuation Services",
            icon: "ValuationServices",
            description: "Accurate business valuation using multiple methodologies for informed investment decisions",
            features: ["Relative Valuation", "Intrinsic Value", "Comparable Analysis", "Startup Valuation"],
            stats: "100+ Valuations"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Professional Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-0.5 bg-[#000080]"></div>
                        <span className="text-sm font-semibold text-[#000080] uppercase tracking-wider">Expertise</span>
                        <div className="w-12 h-0.5 bg-[#000080]"></div>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                        Professional Services
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Delivering comprehensive financial analysis and strategic insights to drive informed investment decisions
                        and maximize portfolio performance.
                    </p>
                </div>

                {/* Professional Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = ProfessionalIcons[service.icon];
                        const isActive = activeCard === service.id;

                        return (
                            <div
                                key={service.id}
                                className="group relative"
                                onMouseEnter={() => setActiveCard(service.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Subtle Hover Effect Container */}
                                <div className={`
                  absolute inset-0 bg-gradient-to-br from-[#000080] to-blue-800  
                  transition-all duration-500 ease-out
                  ${isActive ? 'opacity-5 scale-105' : 'opacity-0 scale-100'}
                `}></div>

                                {/* Main Card */}
                                <div className={`
                  relative h-full bg-white  p-8 border border-gray-200
                  transition-all duration-500 ease-out
                  ${isActive
                                        ? 'shadow-xl border-[#000080]/20 transform -translate-y-2'
                                        : 'shadow-sm hover:shadow-md hover:border-gray-300'}
                  overflow-hidden
                `}>

                                    {/* Professional Icon Badge */}
                                    <div className={`
                    w-16 h-16  mb-8 flex items-center justify-center
                    transition-all duration-500 border
                    ${isActive
                                            ? 'bg-[#000080] border-[#000080] scale-105'
                                            : 'bg-white border-gray-200 hover:border-[#000080]/30'}
                  `}>
                                        <IconComponent isActive={isActive} />
                                    </div>

                                    {/* Service Title */}
                                    <h3 className={`
                    text-2xl font-light text-gray-900 mb-4 transition-colors duration-300
                    ${isActive ? 'text-[#000080]' : ''}
                  `}>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`
                    text-gray-600 leading-relaxed mb-6 transition-colors duration-300
                    ${isActive ? 'text-gray-700' : ''}
                  `}>
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className={`
                          flex items-center text-sm transition-all duration-300
                          ${isActive
                                                        ? 'text-gray-800 transform translate-x-1'
                                                        : 'text-gray-500'}
                        `}
                                            >
                                                <div className={`
                          w-1.5 h-1.5  mr-3 transition-all duration-300
                          ${isActive ? 'bg-[#000080] scale-125' : 'bg-gray-400'}
                        `}></div>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Professional Stats Badge */}
                                    <div className={`
                    absolute bottom-2 left-8 right-8 py-3 px-4 
                    transition-all duration-500 border
                    ${isActive
                                            ? 'bg-[#000080] text-white border-[#000080]'
                                            : 'bg-gray-50 text-gray-600 border-gray-200'}
                  `}>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Completed</span>
                                            <span className="text-sm font-semibold">{service.stats}</span>
                                        </div>
                                    </div>

                                    {/* Subtle Hover Indicator */}
                                    <div className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2
                    w-16 h-0.5 bg-[#000080] transition-all duration-500
                    ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'}
                  `}></div>
                                </div>

                                {/* Professional Connection Line - Desktop Only */}
                                {index < services.length - 1 && (
                                    <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                                        <div className={`
                      w-8 h-0.5 bg-gray-300 transition-all duration-500
                      ${isActive ? 'bg-[#000080] opacity-100' : 'opacity-50'}
                    `}></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Professional CTA Section */}
                <div className="relative py-10 lg:py-10 mt-20 overflow-hidden">
                    {/* Background Image with Gradient Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 backdrop-blur-[2px]"></div>

                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Moving Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.02] animate-pulse"
                            style={{
                                backgroundImage: `linear-gradient(#000080 1px, transparent 1px),
                            linear-gradient(90deg, #000080 1px, transparent 1px)`,
                                backgroundSize: '60px 60px',
                                backgroundPosition: '0 0',
                                animation: 'gridMove 20s linear infinite'
                            }}>
                        </div>

                        {/* Floating Animated Circles */}
                        <div className="absolute top-1/4 left-1/6 w-24 h-24 opacity-10 animate-float">
                            <div className="w-full h-full bg-[#000080] rounded-full blur-2xl"></div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
                            <div className="w-full h-full bg-[#000080] rounded-full blur-2xl"></div>
                        </div>
                        <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
                            <div className="w-full h-full bg-[#000080] rounded-full blur-2xl"></div>
                        </div>

                        {/* Animated Data Points */}
                        <div className="absolute top-1/5 right-1/5">
                            <div className="flex space-x-2 opacity-20">
                                <div className="w-3 h-3 bg-[#000080] rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                                <div className="w-3 h-3 bg-[#000080] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div> 
                                <div className="w-3 h-3 bg-[#000080] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                            </div>
                        </div>

                        {/* Animated Chart Lines */}
                        <div className="absolute bottom-1/4 left-1/5 opacity-15">
                            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="animate-pulse">
                                <path
                                    d="M0,30 L20,15 L40,45 L60,22 L80,37 L100,20 L120,40"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                />
                            </svg>
                        </div>

                        {/* Corner Accents with Hover Effect */}
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#000080] opacity-10 transition-all duration-1000 hover:opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#000080] opacity-10 transition-all duration-1000 hover:opacity-30"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        {/* Section Badge */}
                        <div className="inline-flex items-center gap-3 mb-8 bg-white/80 backdrop-blur-sm px-6 py-3  border border-[#000080]/20 shadow-sm aline-center ">
                            <div className="w-2 h-2 bg-[#000080]  animate-pulse"></div>
                            <span className="text-[#000080] text-sm font-semibold uppercase tracking-wider">Get Started</span>
                            <div className="w-2 h-2 bg-[#000080]  animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight text-center">
                            Ready to Transform Your{' '}
                            <span className="font-normal bg-gradient-to-r from-[#000080] to-blue-600 bg-clip-text text-transparent">
                                Investment Strategy?
                            </span>
                        </h3>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Let's discuss how my professional services can help you achieve your financial objectives
                            with data-driven insights and strategic analysis.
                        </p>

                        {/* Interactive Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            {/* Primary Button */}
                            <button className="
        group relative bg-[#000080] text-white font-semibold py-5 px-12 
         hover:bg-blue-700 transition-all duration-500 
        transform hover:scale-105 hover:shadow-2xl
        flex items-center gap-4 justify-center
        border-2 border-[#000080] overflow-hidden
        min-w-[240px]
      ">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                {/* Button Content */}
                                <span className="relative text-base">Schedule Consultation</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            {/* Secondary Button */}
                            <button className="
        group relative bg-white text-[#000080] font-semibold py-5 px-12 
         hover:bg-[#000080] hover:text-white transition-all duration-500 
        transform hover:scale-105 hover:shadow-2xl
        flex items-center gap-4 justify-center
        border-2 border-[#000080] overflow-hidden
        min-w-[240px]
      ">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000080]/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                {/* Button Content */}
                                <span className="relative text-base">View Case Studies</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>

                        {/* Trust Indicator */}
                        <div className="mt-16 pt-8 border-t border-[#000080]/10">
                            <p className="text-gray-500 text-sm mb-6 font-medium">Trusted by professionals from leading institutions</p>
                            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-70">
                                <div className="text-gray-600 text-sm font-semibold hover:text-[#000080] transition-colors duration-300">HDFC AMC</div>
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full hidden sm:block"></div>
                                <div className="text-gray-600 text-sm font-semibold hover:text-[#000080] transition-colors duration-300">ICICI Securities</div>
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full hidden sm:block"></div>
                                <div className="text-gray-600 text-sm font-semibold hover:text-[#000080] transition-colors duration-300">IIM Bangalore</div>
                                <div className="w-1 h-1 bg-[#FFD700] rounded-full hidden sm:block"></div>
                                <div className="text-gray-600 text-sm font-semibold hover:text-[#000080] transition-colors duration-300">XLRI Jamshedpur</div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Animations */}
                    <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes gridMove {
      0% { background-position: 0 0; }
      100% { background-position: 60px 60px; }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
                </div>
            </div>
        </div>
    );
};

export default ServicesSnapshot;