import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, TrendingUp, Cpu, DollarSign, Layers } from "lucide-react";

export default function CoreMandatesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mandates = [
    {
      id: "modelling",
      title: "3-Statement Financial Modelling",
      index: "01",
      tagline: "Dynamic Operating Forecasts",
      desc: "Architecting integrated P&L, Balance Sheet, and Cash Flow models with dynamic debt sweeps, capacity schedules, and working capital feedback loops.",
      deliverables: [
        "Dynamic 5-Year Annual & Monthly Statement Integration",
        "Automated Balance Sheet Balancing with Cash Sweep",
        "Capex Depreciation, Working Capital & Debt Schedules",
        "Base, Bull, and Bear Scenario Toggles"
      ],
      highlightMetric: "12–18% Estimated EV Optimization",
      caseStudyLink: "/case-studies/three-statement-dcf"
    },
    {
      id: "valuation",
      title: "DCF & Comparable Company Valuation",
      index: "02",
      tagline: "Intrinsic & Market Pricing",
      desc: "Triangulating intrinsic Discounted Cash Flow (FCFF/FCFE) with peer trading multiples (EV/EBITDA, P/E) across normalized peer universes.",
      deliverables: [
        "Un-levered Free Cash Flow (FCFF) Discounting",
        "CAPM-derived WACC & Dual Terminal Value Models",
        "8-Peer Comparable Logistics Benchmarking",
        "Football Field Valuation Range Synthesis"
      ],
      highlightMetric: "8 Logistics Peers Benchmarked",
      caseStudyLink: "/case-studies/comparable-company-analysis"
    },
    {
      id: "fundraising",
      title: "Fundraising & Investor Readiness",
      index: "03",
      tagline: "Cap Tables & ARR Economics",
      desc: "Bridging technical product metrics (LLM compute tokens, seat pricing) with institutional VC expectations, dilution waterfalls, and runway projections.",
      deliverables: [
        "5-Year Bottom-up ARR & MRR Build-up",
        "AI Token Compute COGS Scaling & Gross Margin Model",
        "Cap Table Waterfall with Multi-round Dilution & ESOPs",
        "Investor Return Scenarios (MOIC & IRR Targets)"
      ],
      highlightMetric: "5-Year SaaS Operating Model",
      caseStudyLink: "/case-studies/ai-fundraising-model"
    },
    {
      id: "automation",
      title: "Python & Finance Automation",
      index: "04",
      tagline: "Programmatic Operations",
      desc: "Replacing manual spreadsheet friction with automated Python/Pandas data pipelines for high-volume reconciliation, FX conversions, and live MIS dashboards.",
      deliverables: [
        "14,000+ Multi-Currency Automated Reconciliation Engine",
        "Healthcare Claims & Receivables Tracking Dashboard",
        "Automated Monthly P&L Compilation (~8 Hours Saved)",
        "Automated Variance Tolerance Flags & Exceptions"
      ],
      highlightMetric: "14,000+ Txns / ~60% Time Saved",
      caseStudyLink: "/case-studies/reconciliation-automation"
    },
    {
      id: "working-capital",
      title: "Working Capital & Liquidity Diagnostics",
      index: "05",
      tagline: "Cash Conversion Optimization",
      desc: "Unlocking trapped operational cash flow by diagnosing Days Sales Outstanding (DSO), Days Inventory (DIO), and payables timing across operating units.",
      deliverables: [
        "Cash Conversion Cycle (CCC) Breakdown",
        "Receivables Aging & Collections Velocity Analysis",
        "Operating Cash Flow vs Net Income Reconciliation",
        "$500K+ Monthly Receivables Forecasting"
      ],
      highlightMetric: "$500K+ Receivables Visibility",
      caseStudyLink: "/case-studies/healthcare-finance-automation"
    }
  ];

  const current = mandates[activeIndex];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-[#0c0e12] border border-white/10 p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-500">
              <span>●</span>
              <span>CORE MANDATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Everything your capital strategy needs.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Hover or select an advisory mandate below to inspect detailed deliverables, methodologies, and documented outcomes.
          </p>
        </div>

        {/* Interactive 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left List */}
          <div className="lg:col-span-6 space-y-2">
            {mandates.map((m, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white/10 border border-white/20 shadow-lg text-white"
                      : "hover:bg-white/5 border border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className={`text-sm sm:text-base font-bold transition-transform group-hover:translate-x-1 ${
                      isSelected ? "text-rose-500" : "text-slate-500"
                    }`}>
                      ›
                    </span>
                    <span className="text-base sm:text-xl font-bold tracking-tight">
                      {m.title}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 font-bold">
                    ⁰{m.index}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Preview Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 space-y-6 backdrop-blur-xl">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
                  MANDATE SCOPE ⁰{current.index}
                </span>
                <span className="text-xs font-bold text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Scope Deliverables
                </span>
                {current.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-2 shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Demonstrated Result</span>
                  <span className="text-xs font-bold text-rose-400">{current.highlightMetric}</span>
                </div>

                <Link
                  to={current.caseStudyLink}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-4 py-2 rounded-full transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
