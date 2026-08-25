import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Cpu, DollarSign, Layers, CheckCircle2 } from "lucide-react";

export default function EditorialShowcase() {
  const pillars = [
    {
      id: "valuation",
      tag: "INTRINSIC & RELATIVE VALUATION",
      title: "3-Statement Modelling & DCF",
      subtitle: "Dynamic P&L, Balance Sheet, and Cash Flow with un-levered FCFF projections, CAPM WACC, and peer multiple benchmarking.",
      highlight: "12–18% EV Improvement Levers",
      bgGradient: "from-slate-900 via-slate-800 to-indigo-950",
      accent: "text-blue-400"
    },
    {
      id: "automation",
      tag: "FINANCE AUTOMATION & PIPELINES",
      title: "Python-Powered Reconciliation",
      subtitle: "Eliminating manual spreadsheet drag across 14,000+ multi-currency records and streamlining claims processing by ~40%.",
      highlight: "14,000+ Transactions Reconciled",
      bgGradient: "from-slate-900 via-slate-800 to-emerald-950",
      accent: "text-emerald-400"
    },
    {
      id: "fundraising",
      tag: "INVESTOR READINESS & M&A",
      title: "Capital Strategy & 5-Yr Forecasts",
      subtitle: "Structuring token COGS, SaaS ARR waterfalls, runway diagnostics, and investor returns (MOIC/IRR) for seed and growth rounds.",
      highlight: "$500K+ Monthly Receivables",
      bgGradient: "from-slate-900 via-slate-800 to-rose-950",
      accent: "text-rose-400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600">
            <span>●</span>
            <span>ABOUT AMIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            We build data-driven financial models to help founders & CFOs make smarter capital decisions.
          </h2>
        </div>

        <Link
          to="/about"
          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 shrink-0 group"
        >
          <span>Learn more about Amit</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 3 Visual Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((p, idx) => (
          <div
            key={p.id}
            className={`rounded-[2rem] bg-gradient-to-b ${p.bgGradient} p-8 text-white flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-white/10 relative overflow-hidden`}
          >
            {/* Top Tag */}
            <div className="space-y-4 relative z-10">
              <span className={`text-[10px] font-extrabold tracking-widest uppercase ${p.accent}`}>
                {p.tag}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {p.subtitle}
              </p>
            </div>

            {/* Bottom Highlight Strip */}
            <div className="pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Demonstrated Metric
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {p.highlight}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-rose-600 flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
