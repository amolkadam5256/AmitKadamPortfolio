import React from "react";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Layers, 
  Cpu, 
  BookOpen, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "3-Statement & DCF Valuation",
      desc: "Dynamic integration of Income Statement, Balance Sheet, and Cash Flow with un-levered FCFF projections and CAPM-derived WACC.",
      skills: ["Integrated 3-Statement", "FCFF / FCFE Projections", "WACC & CAPM", "Sensitivity Tables"]
    },
    {
      icon: BarChart3,
      title: "Comparable Company Analysis",
      desc: "Peer universe selection, multiple normalization (EV/EBITDA, P/E), quartile distribution, and valuation range synthesis.",
      skills: ["Peer Multiples", "IFRS 16 Lease Adjustments", "Football Field Visuals", "Quartile Benchmarking"]
    },
    {
      icon: DollarSign,
      title: "Fundraising & Investor Readiness",
      desc: "Constructing 5-year operating models, unit economics (CAC/LTV), cash runway forecasts, and cap table dilution waterfalls.",
      skills: ["ARR & Unit Economics", "Token COGS Cost Scaling", "Runway & Burn Modeling", "Investor Dilution / IRR"]
    },
    {
      icon: Cpu,
      title: "Finance & Workflow Automation",
      desc: "Automating high-volume transaction matching, FX conversion, claims validation, and monthly P&L reporting via Python and Excel.",
      skills: ["Python (Pandas)", "Advanced Excel / Power Query", "Reconciliation Logic", "Variance Alerts"]
    },
    {
      icon: Layers,
      title: "Working Capital Optimization",
      desc: "Diagnosing debtor collection velocity, inventory holding drag, and cash conversion cycle (CCC) levers to unlock trapped liquidity.",
      skills: ["DSO / DIO / DPO Analysis", "Receivables Aging", "Operating Cash Conversion", "Working Capital Lines"]
    },
    {
      icon: BookOpen,
      title: "Equity Research & Governance",
      desc: "Macroeconomic synthesis, 5-stage DuPont ROE decomposition, forensic accounting scrutiny, and board governance scorecards.",
      skills: ["DuPont Decomposition", "Governance Quality Scoring", "Forensic Accounting", "Sector Benchmarking"]
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Institutional Skill Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Corporate Finance Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Rigorous financial analysis frameworks deployed across client advisory mandates and transaction evaluations.
          </p>
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="space-y-1.5">
                    {cap.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            <span>Learn More About Amit's Methodology & Philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
