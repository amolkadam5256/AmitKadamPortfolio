import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { insightsData } from "../data/insights";
import { 
  BookOpen, 
  Clock, 
  Tag, 
  ArrowRight, 
  Filter,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Corporate Finance",
    "Valuation & Analysis",
    "Governance & M&A",
    "Macro & Treasury",
    "Finance Automation"
  ];

  const filteredInsights = selectedCategory === "All"
    ? insightsData
    : insightsData.filter((art) => art.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="Finance Insights, Valuation & Corporate Governance | Amit Kadam"
        description="Thought leadership articles by Amit Kadam covering cash flow vs profit, 5 techniques of financial statement analysis, corporate governance, and AI in finance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Financial Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Financial Insights & Research
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Analytical breakdowns reverse-engineering business models, working capital cycles, corporate governance safeguards, and AI transformation in the finance function.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1" />
            Filter Category:
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

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between p-6 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {article.date}
                </span>
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
