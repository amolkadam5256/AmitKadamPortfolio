import React from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { experienceData } from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
              Professional Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Experience & Mandates
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Track record across boutique corporate advisory and manufacturing accounts operations.
            </p>
          </div>

          <Link
            to="/experience"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <span>View Full Career Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:w-0.5 before:bg-slate-200 before:content-['']">
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 shadow-md flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Role Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {exp.employmentType}
                      </span>
                      <div className="flex items-center text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>

                    <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 mt-1">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 text-xs font-normal">{exp.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {exp.achievements.slice(0, 2).map((ach, achIdx) => (
                        <div key={achIdx} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span className="leading-normal">{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.slice(0, 4).map((sk, skIdx) => (
                        <span
                          key={skIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
