import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What domains and valuation methodologies does Amit specialize in?",
      a: "Amit specializes in corporate finance advisory, 3-statement integrated dynamic modelling, Discounted Cash Flow (DCF using FCFF and Gordon Growth terminal values), Comparable Company Analysis (EV/EBITDA, P/E normalization), working capital optimization (Cash Conversion Cycle diagnostics), and Python/Excel finance automation."
    },
    {
      q: "What live advisory experience does Amit have?",
      a: "Amit currently works at CapSurge (Corporate Financial Analyst, Jul 2026–Present; previously Corporate Finance Intern, Dec 2025–Jun 2026) supporting live corporate finance mandates across fundraising, valuation, M&A due diligence, and finance transformation. Prior to that, he completed an Accounts Internship at Autobat Pvt. Ltd. focusing on manufacturing ledgers and Tally ERP."
    },
    {
      q: "How does Amit approach financial reconciliation automation?",
      a: "By combining domain financial accounting knowledge with Python (Pandas) and advanced Excel. For example, for a Singapore-based asset management client, Amit engineered an automated multi-currency pipeline that processed 14,000+ transactions across 15+ global custodian accounts, cutting manual reconciliation time by approximately 60% with zero data entry mismatch."
    },
    {
      q: "What is Amit's academic background?",
      a: "Amit holds a Master of Business Administration (MBA) in Finance from Sinhgad Institute of Management (Affiliated to Savitribai Phule Pune University, CGPA: 8.50/10.00) and a Bachelor of Arts in Economics (Honours) from Bharati Vidyapeeth University, Pune (CGPA: 8.67/10.00)."
    },
    {
      q: "How can recruiters and clients get in touch with Amit?",
      a: "You can reach Amit directly via email at amitkadam1562@gmail.com, mobile/WhatsApp at +91 8956506020, through his official LinkedIn profile at linkedin.com/in/amitkadam15, or by submitting an inquiry via the Contact page on this portfolio."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600">
            <span>●</span>
            <span>FREQUENTLY ASKED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Got questions? <br />
            We've got answers.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
            Essential facts, methodologies, and background details regarding Amit's corporate finance advisory work and technical skills.
          </p>
        </div>

        {/* Right Accordion Stack */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
