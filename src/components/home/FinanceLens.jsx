import React, { useState } from "react";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  PieChart, 
  BarChart3, 
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FinanceLens() {
  const [activeLens, setActiveLens] = useState("valuation");

  const lenses = [
    {
      id: "valuation",
      name: "Valuation Bridge",
      icon: TrendingUp,
      headline: "From Operational Drivers to Enterprise Value",
      summary: "Deconstructing how revenue growth, EBITDA margin expansion, and capital discipline translate into intrinsic Enterprise Value via DCF.",
      metrics: [
        { label: "Revenue Base", value: "$100M" },
        { label: "EBITDA Margin", value: "18.2%" },
        { label: "WACC Discount", value: "10.8%" },
        { label: "Target EV", value: "$142M" }
      ],
      steps: [
        { name: "Revenue Build-up", desc: "5-Year dynamic volume × pricing forecast." },
        { name: "NOPAT & FCFF", desc: "Tax-adjusted operating profit minus net reinvestment." },
        { name: "Discounting @ WACC", desc: "Reflecting cost of debt & equity under CAPM." },
        { name: "Enterprise Value", desc: "Sum of PV(FCFF) + Gordon Growth Terminal Value." }
      ],
      caseStudySlug: "three-statement-dcf",
      caseStudyTitle: "Explore 3-Statement & DCF Case Study"
    },
    {
      id: "cash-flow",
      name: "Cash Flow vs Profit",
      icon: DollarSign,
      headline: "Where Profit Gets Trapped Before Reaching the Bank",
      summary: "Accrual accounting can show surging profitability while working capital drains liquid reserves. Monitoring operating cash conversion is critical.",
      metrics: [
        { label: "Reported Net Income", value: "$15.0M" },
        { label: "Receivables Drag", value: "-$4.2M" },
        { label: "Inventory Build", value: "-$2.8M" },
        { label: "Actual OCF", value: "$8.0M" }
      ],
      steps: [
        { name: "Net Income (P&L)", desc: "Accounting earnings based on revenue recognition." },
        { name: "+ Non-Cash Items", desc: "Adding back depreciation & amortization schedules." },
        { name: "Δ Working Capital", desc: "Deducting cash locked in debtors & raw materials." },
        { name: "Operating Cash Flow", desc: "Actual liquid cash generated from core activities." }
      ],
      caseStudySlug: "healthcare-finance-automation",
      caseStudyTitle: "Explore Healthcare Cash Flow Case Study"
    },
    {
      id: "working-capital",
      name: "Working Capital & CCC",
      icon: Clock,
      headline: "The Cash Conversion Cycle Diagnostic",
      summary: "Optimizing the days capital remains tied up in operations from paying suppliers to collecting cash from customers.",
      metrics: [
        { label: "DSO (Debtor Days)", value: "54 Days" },
        { label: "DIO (Inventory)", value: "42 Days" },
        { label: "DPO (Supplier Days)", value: "38 Days" },
        { label: "Net CCC", value: "58 Days" }
      ],
      steps: [
        { name: "Days Sales Outstanding", desc: "Average days to collect customer accounts receivable." },
        { name: "+ Days Inventory", desc: "Days required to turn raw inventory into finished sales." },
        { name: "- Days Payable", desc: "Supplier credit window financing daily operations." },
        { name: "= Cash Conversion Cycle", desc: "Target reduction unlocks instant operating cash." }
      ],
      caseStudySlug: "reconciliation-automation",
      caseStudyTitle: "Explore Financial Automation Case Study"
    },
    {
      id: "peer-multiples",
      name: "Peer Benchmarking",
      icon: BarChart3,
      headline: "Comparable Company Multiples Analysis",
      summary: "Benchmarking operational performance, EBITDA margins, and trading multiples across an 8-peer universe to anchor strategic valuation.",
      metrics: [
        { label: "Peer Median EV/EBITDA", value: "10.8x" },
        { label: "Peer Median P/E", value: "19.5x" },
        { label: "EBITDA Margin Premium", value: "+2.4%" },
        { label: "Implied Target EV", value: "$95M" }
      ],
      steps: [
        { name: "Peer Filtering", desc: "Standardizing 8 comparable logistics operating models." },
        { name: "Multiple Normalization", desc: "Adjusting for lease debt (IFRS 16) & one-off gains." },
        { name: "Operational Correlation", desc: "Linking margin superiority to multiple expansion." },
        { name: "Valuation Range", desc: "Synthesizing 25th-75th percentile valuation bounds." }
      ],
      caseStudySlug: "comparable-company-analysis",
      caseStudyTitle: "Explore Peer Benchmarking Case Study"
    }
  ];

  const current = lenses.find((l) => l.id === activeLens) || lenses[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Signature Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Finance Lens
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Select an analytical dimension below to explore how corporate finance principles transform raw financial data into strategic decision-making.
          </p>
        </div>

        {/* Lens Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {lenses.map((lens) => {
            const Icon = lens.icon;
            const isActive = activeLens === lens.id;
            return (
              <button
                key={lens.id}
                onClick={() => setActiveLens(lens.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lens.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Lens Visual Panel */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Summary & Metric Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Analytical Methodology
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {current.metrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 text-left"
                  >
                    <span className="text-xs text-slate-400 block font-medium">
                      {metric.label}
                    </span>
                    <span className="text-xl font-bold text-white mt-1 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to={`/case-studies/${current.caseStudySlug}`}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
                >
                  <span>{current.caseStudyTitle}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Step-by-Step Flow Pipeline */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-700/80 rounded-xl p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Analytical Execution Pipeline
                </span>
                <span className="inline-flex items-center text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Institutional Framework
                </span>
              </div>

              <div className="space-y-4">
                {current.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/40 hover:border-slate-600 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {step.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Domain Focus: CapSurge Corporate Advisory</span>
                <Link to="/toolkit" className="text-blue-400 hover:underline">
                  Launch Interactive Calculator →
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
