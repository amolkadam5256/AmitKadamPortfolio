import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { experienceData } from "../data/experience";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Briefcase,
  Layers,
  Download
} from "lucide-react";

export default function Experience() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="Professional Experience & Advisory Mandates | Amit Kadam"
        description="Detailed track record of Amit Kadam at CapSurge advisory and Autobat Pvt. Ltd., covering financial modelling, DCF/CCA valuation, and finance automation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Experience & Mandates
            </h1>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Chronological track record of corporate finance advisory engagements, valuation models, investor readiness, and financial operations.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Printable Resume</span>
            </Link>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {exp.employmentType}
                    </span>
                    {exp.current && (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Current Role
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-700 mt-1">
                    <div className="flex items-center text-slate-900">
                      <Building2 className="w-4 h-4 text-blue-600 mr-1.5" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center text-slate-500 font-normal text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company Description & Summary */}
              <div className="py-6 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Mandate Context
                </p>
                <p className="text-xs text-slate-500 italic">
                  {exp.companyDescription}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Key Deliverables & Achievements */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Quantifiable Deliverables & Mandates
                </h3>
                <div className="space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Badges */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>Related Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
