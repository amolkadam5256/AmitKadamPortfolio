import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Layers, Cpu, Activity, BarChart3, BookOpen } from "lucide-react";
import { caseStudiesData } from "../../data/caseStudies";

export default function FeaturedProjectsGrid() {
  const c1 = caseStudiesData.find(c => c.id === "reconciliation-automation");
  const c2 = caseStudiesData.find(c => c.id === "three-statement-dcf");
  const c3 = caseStudiesData.find(c => c.id === "ai-fundraising-model");
  const c4 = caseStudiesData.find(c => c.id === "healthcare-finance-automation");
  const c5 = caseStudiesData.find(c => c.id === "marico-equity-research");

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600">
          <span>●</span>
          <span>CASE STUDIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Featured projects & advisory mandates.
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Deconstructing real-world valuation models, multi-currency automation pipelines, and capital strategies.
        </p>
      </div>

      {/* Asymmetrical Editorial Grid */}
      <div className="space-y-8">
        
        {/* Row 1: Unequal 2-Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Reconciliation Automation (7 cols) */}
          <Link
            to={`/case-studies/${c1.slug}`}
            className="lg:col-span-7 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-800 p-8 sm:p-10 text-white flex flex-col justify-between min-h-[420px] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                  {c1.sector}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {c1.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                {c1.problem}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Transactions</span>
                  <span className="text-lg font-bold text-white block">14,000+</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Time Saved</span>
                  <span className="text-lg font-bold text-emerald-400 block">~60%</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                View Case Study →
              </span>
            </div>
          </Link>

          {/* Card 2: 3-Statement & DCF (5 cols) */}
          <Link
            to={`/case-studies/${c2.slug}`}
            className="lg:col-span-5 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border border-slate-800 p-8 sm:p-10 text-white flex flex-col justify-between min-h-[420px] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
                  {c2.sector}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {c2.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                {c2.problem}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Estimated EV Optimization</span>
                <span className="text-lg font-bold text-indigo-300 block">12–18% Upside</span>
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                View Model →
              </span>
            </div>
          </Link>

        </div>

        {/* Row 2: Full Width Hero Card (AI/LLM SaaS Model) */}
        <Link
          to={`/case-studies/${c3.slug}`}
          className="rounded-[2.5rem] bg-gradient-to-r from-[#0d0f12] via-slate-900 to-[#141820] border border-white/10 p-8 sm:p-12 text-white flex flex-col justify-between min-h-[360px] shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 group relative overflow-hidden block"
        >
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
                {c3.sector}
              </span>
              <span className="text-xs text-slate-400">CapSurge Advisory Mandate</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
              {c3.title}
            </h3>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              {c3.subtitle}
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Forecast Period</span>
              <span className="text-base font-bold text-white block">5-Year Projections</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Cost Scaling</span>
              <span className="text-base font-bold text-rose-400 block">Token Compute COGS</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Investor Returns</span>
              <span className="text-base font-bold text-white block">Cap Table Waterfall</span>
            </div>
            <div className="text-right flex items-center justify-end">
              <span className="text-xs font-bold text-rose-400 group-hover:text-rose-300 flex items-center">
                <span>Inspect Pitch Deck Model</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Row 3: 2 Asymmetrical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 4: Healthcare Finance (5 cols) */}
          <Link
            to={`/case-studies/${c4.slug}`}
            className="lg:col-span-5 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 border border-slate-800 p-8 sm:p-10 text-white flex flex-col justify-between min-h-[400px] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800">
                  {c4.sector}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {c4.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                {c4.problem}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Monthly Receivables</span>
                <span className="text-lg font-bold text-purple-300 block">$500K+ Tracked</span>
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                View MIS →
              </span>
            </div>
          </Link>

          {/* Card 5: Marico Equity Research (7 cols) */}
          <Link
            to={`/case-studies/${c5.slug}`}
            className="lg:col-span-7 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 border border-slate-800 p-8 sm:p-10 text-white flex flex-col justify-between min-h-[400px] shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
                  {c5.sector}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {c5.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                {c5.subtitle}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">ROCE / ROE</span>
                  <span className="text-lg font-bold text-amber-300 block">47.9% / 41.7%</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Report Depth</span>
                  <span className="text-lg font-bold text-white block">32 Slides</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                Read Research Deck →
              </span>
            </div>
          </Link>

        </div>

      </div>

      {/* Bottom Center Pill CTA */}
      <div className="mt-14 text-center">
        <Link
          to="/case-studies"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all hover:scale-105"
        >
          <span>View All 6 Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}
