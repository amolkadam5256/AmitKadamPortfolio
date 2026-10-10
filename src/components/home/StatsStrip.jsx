import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function StatsStrip() {
  const stats = [
  {
    "value": "52,000+",
    "label": "Vendor Transactions",
    "sublabel": "Logistics vendor reconciliation dataset"
  },
  {
    "value": "24,000+",
    "label": "Intercompany Transactions",
    "sublabel": "India–US accounting reconciliations"
  },
  {
    "value": "94–95%",
    "label": "Automated Reconciliation",
    "sublabel": "Reported matching performance across logistics engagements"
  },
  {
    "value": "90%+",
    "label": "Manual Work Reduced",
    "sublabel": "US healthcare finance reporting automation"
  }
];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-slate-200">
      
      {/* Small Category Label */}
      <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-8">
        <span>●</span>
        <span>PROJECT HIGHLIGHTS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((st, idx) => (
          <div key={idx} className="space-y-2 group">
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              {st.value}
            </div>
            <div className="w-12 h-0.5 bg-rose-600 my-2 group-hover:w-full transition-all duration-300" />
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              {st.label}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {st.sublabel}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
