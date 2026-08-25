import React from "react";
import { profileData } from "../../data/profile";
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Globe, 
  Layers, 
  BarChart3,
  ShieldAlert
} from "lucide-react";

export default function ImpactMetrics() {
  const icons = [
    TrendingUp,
    Clock,
    Globe,
    BarChart3,
    Clock,
    Layers
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
              Verified Project Telemetry
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Quantifiable Impact Across Mandates
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs text-slate-500 max-w-md">
            All metrics reflect documented project deliverables, client automation results, and capstone research findings.
          </p>
        </div>

        {/* 6 Grid Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/60 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                    {stat.metricSource.split("—")[0]}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-slate-800 mt-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {stat.sublabel}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-slate-400">
                  <CheckCircle className="w-3 h-3 text-emerald-600 mr-1.5 shrink-0" />
                  <span className="line-clamp-1">{stat.metricSource}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
