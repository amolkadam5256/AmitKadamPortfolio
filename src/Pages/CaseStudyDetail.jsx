import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import { caseStudiesData } from "../data/caseStudies";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Activity, 
  BookOpen, 
  ShieldAlert,
  Download,
  Share2,
  Building2,
  FileSpreadsheet
} from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudiesData.find((s) => s.slug === slug || s.id === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const iconsMap = {
    "reconciliation-automation": Layers,
    "three-statement-dcf": TrendingUp,
    "comparable-company-analysis": BarChart3,
    "ai-fundraising-model": Cpu,
    "healthcare-finance-automation": Activity,
    "marico-equity-research": BookOpen
  };

  const Icon = iconsMap[study.id] || Layers;

  // Find index for next / prev navigation
  const currentIndex = caseStudiesData.findIndex((s) => s.slug === study.slug);
  const prevStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null;

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title={`${study.title} | Financial Case Study`}
        description={study.subtitle}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link & Breadcrumbs */}
        <div className="flex items-center justify-between">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to All Case Studies</span>
          </Link>

          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
            {study.sector}
          </span>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-xs">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {study.clientContext}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Mandate Duration: {study.duration}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {study.subtitle}
          </p>

          {/* 4 Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            {study.heroMetrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                  {m.label}
                </span>
                <span className="text-2xl font-extrabold text-slate-900 mt-1 block">
                  {m.value}
                </span>
                <span className="text-xs text-blue-600 font-medium mt-0.5 block">
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Tools Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Methodologies & Tools:
            </span>
            {study.tools.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Objective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mr-2" />
              The Business Problem
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2" />
              Strategic Objective
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {study.objective}
            </p>
          </div>
        </div>

        {/* 6-Step Execution Pipeline */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900">
            Analytical & Operational Workflow
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.workflow.map((w, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                    Step {w.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {w.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Methodology Approach */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Implementation Methodology
          </h2>
          <div className="space-y-3">
            {study.approach.map((app, idx) => (
              <div key={idx} className="flex items-start text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Measurable Impact */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2" />
            Deliverables & Measurable Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {study.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {res}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <strong>Key Analyst Takeaway:</strong> {study.keyTakeaway}
          </div>
        </div>

        {/* Disclaimer / Notice if present */}
        {study.disclaimer && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>{study.disclaimer}</p>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {prevStudy ? (
            <Link
              to={`/case-studies/${prevStudy.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-left transition-all"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                ← Previous Mandate
              </span>
              <span className="text-sm font-bold text-slate-900 line-clamp-1 mt-0.5">
                {prevStudy.title}
              </span>
            </Link>
          ) : <div />}

          {nextStudy && (
            <Link
              to={`/case-studies/${nextStudy.slug}`}
              className="w-full sm:w-auto p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-right transition-all"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Next Mandate →
              </span>
              <span className="text-sm font-bold text-slate-900 line-clamp-1 mt-0.5">
                {nextStudy.title}
              </span>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
