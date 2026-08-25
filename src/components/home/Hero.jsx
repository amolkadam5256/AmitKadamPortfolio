import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  Layers, 
  Building2,
  CheckCircle2,
  BarChart2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { profileData } from "../../data/profile";

export default function Hero() {
  const tickerItems = [
    "CapSurge Advisory",
    "Singapore Asset Management",
    "US Healthcare MIS",
    "Logistics Peer Benchmarking",
    "AI/LLM SaaS Unit Economics",
    "Marico Equity Research",
    "Autobat Accounts Operations",
    "3-Statement DCF Models",
    "14,000+ Transactions Reconciled"
  ];

  return (
    <section className="pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Immersive Dark Hero Container */}
      <div className="relative rounded-[2.5rem] bg-[#0c0e12] border border-white/10 shadow-2xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 -mt-20 w-[450px] h-[350px] bg-rose-600/15 rounded-full blur-3xl pointer-events-none animate-glow" />
        <div className="absolute bottom-0 left-1/4 -mb-20 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Structure */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-slate-300">
              Corporate Finance & Valuation Analyst • CapSurge
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Architecting the <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Next Generation
            </span>{" "}
            of Capital.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            I help founders, CFOs, and investment teams deconstruct business models, build institutional 3-statement models, execute DCF & comparable valuations, and automate high-volume finance operations.
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              to="/case-studies"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-xl shadow-rose-600/30 hover:scale-105"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Download Resume</span>
            </Link>
          </div>

          {/* Bottom Trust Telemetry Highlights */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Transactions
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 block">
                14,000+
              </span>
              <span className="text-[10px] text-emerald-400 font-medium block">
                ~60% time saved
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Estimated EV
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 block">
                12–18%
              </span>
              <span className="text-[10px] text-blue-400 font-medium block">
                Upside Levers
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Receivables
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 block">
                $500K+
              </span>
              <span className="text-[10px] text-purple-400 font-medium block">
                Monthly Visibility
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Capstone ROE
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 block">
                41.7%
              </span>
              <span className="text-[10px] text-rose-400 font-medium block">
                Marico Capstone
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Marquee Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 overflow-hidden relative">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap text-xs font-semibold text-slate-400 uppercase tracking-widest">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 shrink-0">
                <span className="text-rose-500">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
