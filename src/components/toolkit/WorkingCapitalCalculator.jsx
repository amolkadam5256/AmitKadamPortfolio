import React, { useState } from "react";
import { Clock, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";

export default function WorkingCapitalCalculator() {
  const [revenue, setRevenue] = useState(100); // Millions
  const [cogs, setCogs] = useState(65); // Millions
  const [receivables, setReceivables] = useState(18); // Accounts Receivable
  const [inventory, setInventory] = useState(14); // Inventory
  const [payables, setPayables] = useState(11); // Accounts Payable

  // Working Capital metrics
  const dso = revenue > 0 ? (receivables / revenue) * 365 : 0;
  const dio = cogs > 0 ? (inventory / cogs) * 365 : 0;
  const dpo = cogs > 0 ? (payables / cogs) * 365 : 0;
  const ccc = dso + dio - dpo;

  const nwc = receivables + inventory - payables;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
            Liquidity & Operations
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            Cash Conversion Cycle (CCC) & Working Capital Calculator
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Operational Inputs ($ Millions)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Annual Revenue ($M)
              </label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Cost of Goods Sold (COGS $M)
              </label>
              <input
                type="number"
                value={cogs}
                onChange={(e) => setCogs(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Accounts Receivable ($M)
              </label>
              <input
                type="number"
                value={receivables}
                onChange={(e) => setReceivables(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Inventory ($M)
              </label>
              <input
                type="number"
                value={inventory}
                onChange={(e) => setInventory(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Accounts Payable ($M)
              </label>
              <input
                type="number"
                value={payables}
                onChange={(e) => setPayables(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Output Diagnostic */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Cycle Analysis & Diagnostic
          </h4>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">DSO (Receivables)</span>
              <span className="text-lg font-bold text-slate-900 mt-1 block">{dso.toFixed(1)} Days</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">DIO (Inventory)</span>
              <span className="text-lg font-bold text-slate-900 mt-1 block">{dio.toFixed(1)} Days</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold block">DPO (Payables)</span>
              <span className="text-lg font-bold text-slate-900 mt-1 block">{dpo.toFixed(1)} Days</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Net Working Capital (NWC):</span>
              <span className="text-lg font-bold text-white">${nwc.toFixed(2)}M</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <div>
                <span className="text-xs font-semibold text-blue-400 block">Cash Conversion Cycle (CCC):</span>
                <span className="text-[11px] text-slate-400">DSO ({dso.toFixed(0)}d) + DIO ({dio.toFixed(0)}d) - DPO ({dpo.toFixed(0)}d)</span>
              </div>
              <span className="text-2xl font-extrabold text-emerald-400">{ccc.toFixed(1)} Days</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 bg-blue-50/60 border border-blue-100 p-3 rounded-lg flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              Reducing the cycle by just 10 days frees up approximately <strong>${((revenue / 365) * 10).toFixed(2)}M</strong> in immediate liquid operating cash without borrowing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
