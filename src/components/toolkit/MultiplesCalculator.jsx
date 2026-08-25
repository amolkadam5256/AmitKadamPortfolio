import React, { useState } from "react";
import { BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export default function MultiplesCalculator() {
  const [targetRevenue, setTargetRevenue] = useState(85); // $M
  const [targetEbitda, setTargetEbitda] = useState(14.5); // $M
  const [targetNetIncome, setTargetNetIncome] = useState(8.2); // $M
  const [peerEvEbitda, setPeerEvEbitda] = useState(11.2); // multiple
  const [peerPe, setPeerPe] = useState(22.0); // multiple
  const [targetNetDebt, setTargetNetDebt] = useState(12); // $M

  // Calculated valuations
  const impliedEvFromEbitda = targetEbitda * peerEvEbitda;
  const impliedEquityFromEv = impliedEvFromEbitda - targetNetDebt;

  const impliedEquityFromPe = targetNetIncome * peerPe;
  const impliedEvFromPe = impliedEquityFromPe + targetNetDebt;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
            Relative Valuation
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            Comparable Multiples Benchmarking Calculator
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <BarChart3 className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Target Company Metrics ($M) & Peer Multiples
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Target EBITDA ($M)
              </label>
              <input
                type="number"
                value={targetEbitda}
                onChange={(e) => setTargetEbitda(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Peer Median EV/EBITDA (x)
              </label>
              <input
                type="number"
                step="0.1"
                value={peerEvEbitda}
                onChange={(e) => setPeerEvEbitda(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Target Net Income ($M)
              </label>
              <input
                type="number"
                value={targetNetIncome}
                onChange={(e) => setTargetNetIncome(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Peer Median P/E (x)
              </label>
              <input
                type="number"
                step="0.1"
                value={peerPe}
                onChange={(e) => setPeerPe(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Target Net Debt ($M)
              </label>
              <input
                type="number"
                value={targetNetDebt}
                onChange={(e) => setTargetNetDebt(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Output Comparison */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Implied Valuation Outputs
          </h4>

          {/* EV/EBITDA Output */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
              <span>METHOD 1: EV/EBITDA MULTIPLE ({peerEvEbitda}x)</span>
              <span className="text-blue-700 font-bold">Capital Neutral</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Implied Enterprise Value (EV):</span>
              <span className="font-bold text-slate-900 text-base">${impliedEvFromEbitda.toFixed(2)}M</span>
            </div>
            <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-200/60">
              <span className="text-slate-600">Implied Equity Value (EV - Debt):</span>
              <span className="font-bold text-emerald-600 text-lg">${impliedEquityFromEv.toFixed(2)}M</span>
            </div>
          </div>

          {/* P/E Output */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
              <span>METHOD 2: P/E MULTIPLE ({peerPe}x)</span>
              <span className="text-indigo-700 font-bold">Equity Centric</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Implied Equity Value:</span>
              <span className="font-bold text-slate-900 text-base">${impliedEquityFromPe.toFixed(2)}M</span>
            </div>
            <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-200/60">
              <span className="text-slate-600">Implied Enterprise Value:</span>
              <span className="font-bold text-indigo-600 text-lg">${impliedEvFromPe.toFixed(2)}M</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500">
            Triangulating EV/EBITDA and P/E multiples helps identify discrepancies caused by leverage and non-operating income differences.
          </p>
        </div>

      </div>
    </div>
  );
}
