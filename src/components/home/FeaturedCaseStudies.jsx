import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Activity, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";
import { caseStudiesData } from "../../data/caseStudies";

export default function FeaturedCaseStudies() {
  const iconsMap = {
    "reconciliation-automation": Layers,
    "three-statement-dcf": TrendingUp,
    "comparable-company-analysis": BarChart3,
    "ai-fundraising-model": Cpu,
    "healthcare-finance-automation": Activity,
    "marico-equity-research": BookOpen
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Selected Project Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Deep dives into valuation models, fundraising operating schedules, and financial operations automation.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <span>View All 6 Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => {
            const Icon = iconsMap[cs.id] || Layers;
            return (
              <div
                key={cs.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {cs.sector.split("/")[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      <Link to={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {cs.clientContext}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cs.problem}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    {cs.heroMetrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-500 block uppercase font-semibold">
                          {m.label}
                        </span>
                        <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.tools.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {cs.duration}
                  </span>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
