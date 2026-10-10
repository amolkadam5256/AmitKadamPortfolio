import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { comparableDashboard as model } from "../data/comparableDashboard";

export default function ComparableDashboard() {
  const [tab,setTab] = useState("ranking");
  const rankings = model.rankings.map(([company,score,rank])=>({company,score:Number(score.toFixed(2)),rank}));
  const pillars = model.pillars.map(([pillar,score])=>({pillar,score:Number(score.toFixed(2))}));
  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div><h2 className="text-xl font-bold text-slate-900">Operational Comparables Dashboard</h2><p className="text-xs text-slate-500 mt-2">FY2025 weighted benchmarking · seven scored companies · supplied operational comparables model</p></div>
      <div className="flex flex-wrap gap-2">
        {[["ranking","Overall ranking"],["pillars","Pillar scores"],["metrics","Key metrics"]].map(([value,label])=><button key={value} onClick={()=>setTab(value)} aria-pressed={tab===value} className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors ${tab===value?"bg-slate-900 text-white border-slate-900":"bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"}`}>{label}</button>)}
      </div>
      {tab==="ranking" && <><p className="text-sm text-slate-700"><strong>PadCare Labs:</strong> 3rd of 7 · 59.71/100</p><div className="h-80 w-full"><ResponsiveContainer width="100%" height="100%"><BarChart layout="vertical" data={rankings} margin={{top:5,right:20,left:30,bottom:5}}><CartesianGrid strokeDasharray="3 3"/><XAxis type="number" domain={[0,100]}/><YAxis type="category" dataKey="company" width={145} tick={{fontSize:10}}/><Tooltip/><Bar dataKey="score" name="Weighted score" fill="#2563eb" radius={[0,4,4,0]}/></BarChart></ResponsiveContainer></div></>}
      {tab==="pillars" && <div className="h-72 w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={pillars} margin={{top:8,right:8,left:0,bottom:35}}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="pillar" angle={-25} textAnchor="end" interval={0} height={65} tick={{fontSize:10}}/><YAxis domain={[0,100]}/><Tooltip/><Bar dataKey="score" name="PadCare Labs score" fill="#2563eb" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer></div>}
      {tab==="metrics" && <div className="overflow-x-auto"><table className="min-w-full text-xs"><thead><tr className="bg-slate-100 text-slate-700"><th className="text-left p-3">Metric</th><th className="text-right p-3">PadCare Labs</th><th className="text-right p-3">Peer median</th></tr></thead><tbody>{model.comparisons.map(([metric,target,median,unit])=><tr key={metric} className="border-b border-slate-100"><td className="p-3 text-slate-800">{metric}</td><td className="p-3 text-right tabular-nums">{target.toFixed(2)} {unit}</td><td className="p-3 text-right tabular-nums">{median.toFixed(2)} {unit}</td></tr>)}</tbody></table></div>}
      <p className="text-xs text-slate-500">Ranking and pillar scores retain workbook methodology. Peer company names and PadCare Labs are displayed as provided in the supplied workbook. Scores reflect the workbook methodology.</p>
    </section>
  );
}
