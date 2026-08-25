import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsDark() {
  const testimonials = [
    {
      quote: "Amit has an exceptional ability to deconstruct complex multi-currency ledger data into clean, automated Python pipelines. His reconciliation model eliminated days of repetitive spreadsheet work.",
      author: "Advisory Mandate Lead",
      role: "Capital Markets & Asset Management",
      rating: 5
    },
    {
      quote: "The 3-statement model and DCF valuation were structured with institutional rigor. His working capital suggestion note gave our executive team clear levers to target enterprise value expansion.",
      author: "Chief Financial Officer",
      role: "Precision Engineering Manufacturing",
      rating: 5
    },
    {
      quote: "In an AI startup, typical SaaS templates fail to capture token compute COGS and inference scaling. Amit built an operating model that resonated directly with tier-1 venture capital investors.",
      author: "Founder & CEO",
      role: "AI / LLM Customer Intelligence Platform",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-[#0c0e12] border border-white/10 p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-500">
              <span>●</span>
              <span>STAKEHOLDER FEEDBACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Why finance leaders value this approach.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Delivering clarity over complexity, institutional financial rigor, and automated operational efficiency.
          </p>
        </div>

        {/* 3 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-rose-500">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-rose-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.author}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {t.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
