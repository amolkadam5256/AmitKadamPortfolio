import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { insightsData } from "../../data/insights";

export default function EditorialInsights() {
  const articles = insightsData.slice(0, 3);

  const gradients = [
    "from-slate-900 via-slate-800 to-indigo-950",
    "from-slate-900 via-slate-800 to-emerald-950",
    "from-slate-900 via-slate-800 to-rose-950"
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600">
            <span>●</span>
            <span>PUBLICATIONS & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Stories, strategies, and financial thinking.
          </h2>
        </div>

        <Link
          to="/insights"
          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 shrink-0 group"
        >
          <span>View all articles</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 3 Magazine Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <Link
            key={art.id}
            to={`/insights/${art.slug}`}
            className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group overflow-hidden"
          >
            <div className="space-y-4">
              
              {/* Thumbnail Visual Block */}
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} p-6 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-102 transition-transform`}>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 bg-black/40 px-2.5 py-1 rounded-full w-fit">
                  {art.category}
                </span>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono">{art.readTime}</span>
                  <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-rose-600 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-950 group-hover:text-rose-600 transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>{art.date}</span>
              <span className="font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                Read Breakdown →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
