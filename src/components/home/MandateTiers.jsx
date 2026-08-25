import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function MandateTiers() {
  const [isRetainer, setIsRetainer] = useState(false);

  const tiers = [
    {
      id: "startup",
      name: "Startup & Seed Model",
      category: "Early-Stage",
      price: isRetainer ? "Advisory Retainer" : "Milestone-Based",
      desc: "Designed for early-stage founders preparing investor-ready 5-year operating models, unit economics, and pitch decks.",
      features: [
        "5-Year Dynamic ARR & MRR Operating Forecast",
        "SaaS / AI Unit Economics (LTV/CAC, Payback)",
        "Cap Table Dilution & Waterfall Schedules",
        "Investor-Ready Pitch Deck Financial Slides",
        "Assumptions Book & Scenario Toggles"
      ],
      popular: false,
      ctaText: "Discuss Startup Model"
    },
    {
      id: "advisory",
      name: "Valuation & 3-Statement",
      category: "Mid-Market / M&A",
      price: isRetainer ? "Dedicated Analyst" : "Full Mandate",
      desc: "Institutional 3-statement financial modelling, DCF intrinsic valuation, and peer multiples benchmarking for capital events.",
      features: [
        "Full Integrated P&L, Balance Sheet, Cash Flow",
        "DCF (FCFF) with WACC & Gordon Growth Terminal",
        "Comparable Company Analysis (8-Peer Universe)",
        "Strategic EV Optimization Suggestion Memo",
        "Sensitivity Tables (WACC vs Growth vs Margins)"
      ],
      popular: true,
      ctaText: "Request Advisory Mandate"
    },
    {
      id: "automation",
      name: "Finance Automation & MIS",
      category: "Enterprise / Ops",
      price: isRetainer ? "Ongoing Pipeline" : "Custom Implementation",
      desc: "Transforming high-volume ledger reconciliation, claims tracking, and monthly P&L close cycles via Python & Excel.",
      features: [
        "Python Multi-Currency Reconciliation Engine",
        "Healthcare / High-Volume Receivables Aging",
        "Automated Monthly P&L Reporting Compilation",
        "Real-Time Variance & Exception Thresholds",
        "Custom Executive MIS Dashboards"
      ],
      popular: false,
      ctaText: "Explore Automation Scope"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header & Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600">
            <span>●</span>
            <span>ENGAGEMENT SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Ready to scale your capital strategy?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Choose an advisory engagement structure tailored to your transaction, fundraising, or financial automation timeline.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center space-x-3 bg-slate-100 p-1.5 rounded-full border border-slate-200 shrink-0">
          <button
            onClick={() => setIsRetainer(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              !isRetainer ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Project-Based
          </button>
          <button
            onClick={() => setIsRetainer(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              isRetainer ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Ongoing Advisory
          </button>
        </div>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
              tier.popular
                ? "bg-white border-2 border-rose-600 shadow-2xl scale-102 lg:-translate-y-2"
                : "bg-white border border-slate-200 shadow-lg hover:border-slate-300"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-[10px] font-extrabold tracking-widest uppercase shadow-md">
                MOST POPULAR MANDATE
              </div>
            )}

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  {tier.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-950 mt-1">
                  {tier.name}
                </h3>
                <div className="text-xs font-bold text-rose-600 mt-2">
                  {tier.price}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {tier.desc}
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mr-2.5 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                  tier.popular
                    ? "bg-rose-600 text-white hover:bg-rose-500 shadow-rose-600/30"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
