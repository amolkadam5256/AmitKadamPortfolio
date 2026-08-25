import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { caseStudiesData } from "../data/caseStudies";
import { 
  TrendingUp, 
  Layers, 
  BarChart3, 
  Cpu, 
  Activity, 
  BookOpen, 
  ArrowRight, 
  Filter,
  CheckCircle2
} from "lucide-react";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Asset Management",
    "Precision Engineering",
    "Logistics",
    "AI / SaaS",
    "Healthcare",
    "FMCG Research"
  ];

  const filteredStudies = selectedCategory === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(cs => cs.sector.toLowerCase().includes(selectedCategory.toLowerCase()) || cs.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const iconsMap = {
    "reconciliation-automation": Layers,
    "three-statement-dcf": TrendingUp,
    "comparable-company-analysis": BarChart3,
    "ai-fundraising-model": Cpu,
    "healthcare-finance-automation": Activity,
    "marico-equity-research": BookOpen
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="Institutional Case Studies & Financial Mandates | Amit Kadam"
        description="Explore 6 deep-dive case studies across financial reconciliation automation, 3-statement DCF models, logistics peer benchmarking, AI SaaS fundraising, healthcare MIS, and Marico equity research."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Advisory & Capstone Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Financial Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed breakdowns of financial modelling architectures, valuation frameworks, Python-driven automation engines, and institutional equity research.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1" />
            Filter Sector:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Grid Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((cs) => {
            const Icon = iconsMap[cs.id] || Layers;
            return (
              <div
                key={cs.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
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
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      <Link to={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h2>
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

                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {cs.duration}
                  </span>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    <span>Read Full Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
