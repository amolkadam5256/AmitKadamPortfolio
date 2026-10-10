import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from "recharts";
import { caseStudiesData } from "../data/caseStudies";
import { valuationDetails } from "../data/valuationDetails";
import ComparableDashboard from "../components/ComparableDashboard";
import HistoricalFinanceDashboard from "../components/HistoricalFinanceDashboard";
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
  const valuation = valuationDetails[slug];
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

        {/* Source-backed financial dashboard inside the existing case-study structure */}
        {study.chartData?.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Financial Performance Dashboard</h2>
              <p className="text-xs text-slate-500 mt-2">Revenue and EBITDA (₹ crore). E denotes forecast; Industrial IoT figures are illustrative assumptions.</p>
            </div>
            <div className="h-80 w-full" role="img" aria-label="Revenue and EBITDA by financial year in crore rupees">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={study.chartData} margin={{ top: 15, right: 12, left: 4, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{fontSize:11}} />
                  <YAxis tick={{fontSize:11}} />
                  <Tooltip formatter={(value) => [Number(value).toFixed(2) + " Cr"]} />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#2563eb" radius={[4,4,0,0]} />
                  <Line dataKey="ebitda" name="EBITDA" stroke="#059669" strokeWidth={2.5} dot={{r:3}} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500">Source: supplied financial model, P&L statement. Values displayed to two decimal places.</p>
          </div>
        )}

        {valuation && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">DCF Valuation & Cash Flow Dashboard</h2>
              <p className="text-xs text-slate-500 mt-2">Workbook valuation · INR crore · projected FCFF (FY2026–FY2031)</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["Enterprise Value", "₹" + valuation.enterpriseValueCr.toFixed(2) + " Cr"],
                ["Equity Value", "₹" + valuation.equityValueCr.toFixed(2) + " Cr"],
                ["WACC", valuation.waccPct.toFixed(2) + "%"],
                ["Terminal Growth", valuation.terminalGrowthPct.toFixed(2) + "%"]
              ].map(([label,value]) => (
                <div key={label} className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">{value}</div>
                </div>
              ))}
            </div>
            <div className="w-full h-72" role="img" aria-label="Forecast free cash flows to the firm by year">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={valuation.fcffCr.map((v, i) => ({year: "FY" + (26 + i) + "E", fcff: v}))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
                  <XAxis dataKey="year" tick={{fontSize:11}} />
                  <YAxis tick={{fontSize:11}} />
                  <Tooltip formatter={v => [Number(v).toFixed(2) + " Cr", "FCFF"]} />
                  <Bar dataKey="fcff" name="Forecast FCFF" fill="#2563eb" radius={[4,4,0,0]}/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {valuation.scenarios && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">Valuation Scenarios — Equity Value</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {valuation.scenarios.map(sc => (
                    <div key={sc.name} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <p className="text-xs font-semibold text-slate-600">{sc.name} Case</p>
                      <p className="mt-1 text-lg font-bold text-slate-900">₹{sc.equityCr.toFixed(2)} Cr</p>
                      <p className="mt-1 text-xs text-slate-500">{sc.assumptions}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Modelled scenarios are hypothetical valuations, not predicted transaction proceeds.</p>
              </div>
            )}
            {valuation.sensitivity && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">DCF Sensitivity — Enterprise Value</h3>
                <p className="text-xs text-slate-500">₹ crore · rows represent terminal growth assumptions; columns represent WACC assumptions</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full text-xs text-right tabular-nums">
                    <thead><tr className="bg-slate-100"><th className="text-left px-3 py-2">Growth / WACC</th>{valuation.sensitivity.wacc.map(w=><th key={w} className="px-3 py-2">{w}%</th>)}</tr></thead>
                    <tbody>{valuation.sensitivity.growth.map((g,i)=><tr key={g} className="border-t border-slate-100"><th className="text-left px-3 py-2">{g}%</th>{valuation.sensitivity.evCr[i].map((value,j)=><td key={j} className="px-3 py-2">{value.toFixed(2)}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
            )}
            <p className="text-xs text-slate-500">Source: uploaded PadCare Labs model, Valuation worksheet. Model assumptions are not guaranteed outcomes.</p>
          </div>
        )}

        <HistoricalFinanceDashboard studyId={study.slug} />

        {study.slug === "manufacturing-a-comparables" && <ComparableDashboard />}

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
