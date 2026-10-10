import React,{useState} from "react";
import {ResponsiveContainer,ComposedChart,Bar,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import {historicalDashboardData} from "../data/historicalDashboardData";

const format=(n,unit)=>unit==="Cr"?"₹"+n.toFixed(2)+" Cr":n.toFixed(2)+(unit==="%"?"%":unit==="days"?" days":"×");
export default function HistoricalFinanceDashboard({studyId}){
  const m=historicalDashboardData[studyId];
  const [view,setView]=useState("pnl");
  if(!m)return null;
  const rows=m.years.map((year,i)=>({year,...Object.fromEntries(Object.entries(m.pnl).map(([k,a])=>[k,a[i]]))}));
  const ratioRows=Object.entries(m.ratios);
  const fields=[["revenue","Revenue"],["grossProfit","Gross profit"],["ebitda","EBITDA"],["ebit","EBIT"],["pat","PAT"]].filter(([k])=>m.pnl[k]);
  return <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
    <div><h2 className="text-xl font-bold text-slate-900">Historical Financial Statements & Ratios</h2><p className="text-xs text-slate-500 mt-2">FY2021–FY2025 actuals in the supplied model · INR crore unless noted</p></div>
    <div className="flex gap-2 flex-wrap">{[["pnl","Profit & Loss"],["ratios","Financial Ratios"]].map(([v,label])=><button key={v} type="button" onClick={()=>setView(v)} aria-pressed={view===v} className={`px-3.5 py-2 rounded-lg text-xs font-semibold border ${view===v?"bg-slate-900 text-white border-slate-900":"bg-slate-50 text-slate-700 border-slate-200"}`}>{label}</button>)}</div>
    {view==="pnl"?<>
      <div className="h-72 w-full"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={rows} margin={{top:12,right:10,bottom:5,left:0}}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="year" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}}/><Tooltip formatter={(v)=>format(Number(v),"Cr")}/><Legend/><Bar dataKey="revenue" name="Revenue" fill="#2563eb" radius={[4,4,0,0]}/><Line dataKey="pat" name="PAT" stroke="#059669" strokeWidth={2.5}/></ComposedChart></ResponsiveContainer></div>
      <div className="overflow-x-auto"><table className="min-w-full text-xs"><thead><tr className="bg-slate-100"><th className="p-3 text-left">₹ crore</th>{m.years.map(y=><th key={y} className="p-3 text-right">{y}</th>)}</tr></thead><tbody>{fields.map(([key,label])=><tr key={key} className="border-b border-slate-100"><th className="p-3 text-left text-slate-700 font-medium">{label}</th>{m.pnl[key].map((n,i)=><td key={i} className="p-3 text-right tabular-nums">{n.toFixed(2)}</td>)}</tr>)}</tbody></table></div>
    </>:<div className="overflow-x-auto"><table className="min-w-full text-xs"><thead><tr className="bg-slate-100"><th className="p-3 text-left">Financial ratio</th>{m.years.map(y=><th key={y} className="p-3 text-right">{y}</th>)}</tr></thead><tbody>{ratioRows.map(([key,values])=>{const unit=key.toLowerCase().includes("margin")?"%":key.toLowerCase().includes("days")?"days":"x";const labels={ebitdaMargin:"EBITDA Margin",patMargin:"PAT Margin",receivableDays:"Receivable Days",inventoryDays:"Inventory Days",payableDays:"Payable Days",currentRatio:"Current Ratio"};return <tr key={key} className="border-b border-slate-100"><th className="p-3 text-left text-slate-700 font-medium">{labels[key]||key}</th>{values.map((n,i)=><td key={i} className="p-3 text-right tabular-nums">{format(n,unit)}</td>)}</tr>})}</tbody></table></div>}
    {studyId==="manufacturing-b-model"&&<p className="text-xs text-amber-800">Working-capital days include unusually high model-reported values and should be interpreted with caution.</p>}
    <p className="text-xs text-slate-500">Source: uploaded financial model — Profit_Loss and Ratio_Analysis worksheets. Read-only dashboard; figures rounded for presentation.</p>
  </section>;
}
