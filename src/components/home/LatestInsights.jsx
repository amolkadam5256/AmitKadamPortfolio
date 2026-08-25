import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Tag, 
  TrendingUp, 
  Calendar 
} from "lucide-react";
import { insightsData } from "../../data/insights";

export default function LatestInsights() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
              Thought Leadership & Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Financial Insights & Analysis
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Breakdowns of corporate governance, cash conversion mechanics, DuPont analysis, and AI transformation.
            </p>
          </div>

          <Link
            to="/insights"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
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

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
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
    </section>
  );
}
