import React, { useState } from 'react';

const ProfessionalSummary = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "CFA Level I Candidate",
      issuer: "CFA Institute",
      date: "2024",
      description: "Chartered Financial Analyst Level I candidate, demonstrating expertise in investment analysis, portfolio management, and ethical standards.",
      skills: ["Investment Analysis", "Portfolio Management", "Ethical Standards", "Financial Reporting"],
      certificateImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
      credentialId: "CFA-L1-2024-001"
    },
    {
      id: 2,
      title: "Financial Modeling & Valuation",
      issuer: "Wall Street Prep",
      date: "2023",
      description: "Advanced financial modeling techniques including DCF modeling, LBO analysis, merger models, and company valuation methodologies.",
      skills: ["DCF Modeling", "LBO Analysis", "Merger Models", "Valuation Techniques"],
      certificateImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      credentialId: "WSP-FMV-2023-045"
    },
    {
      id: 3,
      title: "NISM Research Analyst",
      issuer: "NISM",
      date: "2022",
      description: "Certified Research Analyst with expertise in equity research, financial statement analysis, and regulatory framework understanding.",
      skills: ["Equity Research", "Financial Analysis", "Regulatory Framework", "Research Methodology"],
      certificateImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      credentialId: "NISM-RA-XII-2022-789"
    }
  ];

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Summary
            </h1>
            <div className="w-20 h-1 bg-[#000080] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education Section */}
              <div className="group bg-gradient-to-br from-white to-blue-50  p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100">
                <div className="flex items-start mb-4">
                  <div className="bg-[#000080] text-white p-3  mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v9" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Educational Background</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Holding an <span className="text-[#000080] font-semibold">MBA in Finance</span> from 
                      <span className="text-[#000080] font-semibold"> University of Mumbai</span>, my academic journey 
                      provided a strong foundation in financial analysis, investment strategies, and economic principles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Journey Section */}
              <div className="group bg-gradient-to-br from-white to-blue-50  p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100">
                <div className="flex items-start mb-4">
                  <div className="bg-[#000080] text-white p-3  mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">My Journey into Equity Research</h2>
                    <p className="text-gray-700 leading-relaxed">
                      My passion for equity research ignited during my MBA program, where I discovered the power of 
                      <span className="text-[#000080] font-semibold"> fundamental analysis</span> and 
                      <span className="text-[#000080] font-semibold"> company valuation</span>. The ability to uncover 
                      hidden value and understand business models fascinated me, leading to a dedicated career in 
                      financial markets analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="group bg-gradient-to-br from-white to-blue-50  p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100">
                <div className="flex items-start mb-4">
                  <div className="bg-[#000080] text-white p-3  mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Investment Philosophy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      I believe in <span className="text-[#000080] font-semibold">data-driven investment decisions</span> 
                      backed by rigorous research and long-term value creation. My approach combines 
                      <span className="text-[#000080] font-semibold"> quantitative analysis</span> with 
                      <span className="text-[#000080] font-semibold"> qualitative insights</span> to identify companies 
                      with sustainable competitive advantages and growth potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Certifications & Highlights */}
            <div className="space-y-6">
              {/* Certifications Card */}
              <div className="bg-gradient-to-b from-[#000080] to-blue-900  p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <button
                      key={cert.id}
                      onClick={() => setSelectedCert(cert)}
                      className="w-full flex items-center bg-white/10  p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-medium text-left">{cert.title}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-white  p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-blue-50  hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 mx-auto mb-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div className="text-[#000080] font-semibold text-sm">Financial Modeling</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50  hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 mx-auto mb-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div className="text-[#000080] font-semibold text-sm">Company Valuation</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50  hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 mx-auto mb-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div className="text-[#000080] font-semibold text-sm">Industry Research</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50  hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 mx-auto mb-2 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-[#000080] font-semibold text-sm">Investment Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white  max-w-4xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#000080] to-blue-900 p-6 text-white ">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
                  <p className="text-blue-100">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-blue-200 transition-colors duration-200 p-2  hover:bg-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Certificate Image */}
              <div className="bg-gray-50  p-4 border-2 border-dashed border-gray-200">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Certificate Preview</h3>
                  <p className="text-sm text-gray-600">Credential ID: {selectedCert.credentialId}</p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} Certificate`}
                    className="w-full max-w-md h-64 object-cover  shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-zoom-in"
                  />
                </div>
                <div className="text-center mt-4">
                  <button className="text-[#000080] hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Certificate
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Details Section */}
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Certificate Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm font-medium text-gray-600">Issuer</span>
                        <span className="text-sm font-semibold text-[#000080]">{selectedCert.issuer}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm font-medium text-gray-600">Issue Date</span>
                        <span className="text-sm font-semibold text-[#000080]">{selectedCert.date}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-blue-100">
                        <span className="text-sm font-medium text-gray-600">Credential ID</span>
                        <span className="text-sm font-semibold text-[#000080]">{selectedCert.credentialId}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium text-gray-600">Status</span>
                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 ">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Competencies</h3>
                    <div className="grid gap-2">
                      {selectedCert.skills.map((skill, index) => (
                        <div key={index} className="flex items-center p-2 bg-white  border border-blue-100">
                          <svg className="w-4 h-4 text-[#000080] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white border border-gray-200  p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedCert.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <button className="bg-[#000080] text-white px-6 py-3  hover:bg-blue-800 transition-all duration-300 font-semibold transform hover:scale-105 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Full Certificate
                </button>
                <button
                  onClick={closeModal}
                  className="border border-gray-300 text-gray-700 px-6 py-3  hover:bg-gray-50 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalSummary;