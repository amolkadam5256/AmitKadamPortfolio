import React, { useState } from "react";
import { PieChart, TrendingUp, CheckCircle2 } from "lucide-react";

export default function DupontCalculator() {
  const [netIncome, setNetIncome] = useState(15);
  const [revenue, setRevenue] = useState(100);
  const [totalAssets, setTotalAssets] = useState(75);
  const [shareholdersEquity, setShareholdersEquity] = useState(40);

  // DuPont 3-stage breakdown
  const netProfitMargin = revenue > 0 ? (netIncome / revenue) : 0;
  const assetTurnover = totalAssets > 0 ? (revenue / totalAssets) : 0;
  const financialLeverage = shareholdersEquity > 0 ? (totalAssets / shareholdersEquity) : 0;

  const roe = netProfitMargin * assetTurnover * financialLeverage * 100;
  const roa = totalAssets > 0 ? (netIncome / totalAssets) * 100 : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
            Fundamental Analysis
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            DuPont 3-Stage ROE Decomposition
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <PieChart className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Financial Statement Inputs ($M)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Net Income ($M)
              </label>
              <input
                type="number"
                value={netIncome}
                onChange={(e) => setNetIncome(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Total Revenue ($M)
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
                Total Assets ($M)
              </label>
              <input
                type="number"
                value={totalAssets}
                onChange={(e) => setTotalAssets(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Shareholders' Equity ($M)
              </label>
              <input
                type="number"
                value={shareholdersEquity}
                onChange={(e) => setShareholdersEquity(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* DuPont Triad Output */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Deconstructed Drivers
          </h4>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block uppercase">1. Margin</span>
              <span className="text-base font-bold text-slate-900 mt-1 block">{(netProfitMargin * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-slate-400">Net Margin</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block uppercase">2. Turnover</span>
              <span className="text-base font-bold text-slate-900 mt-1 block">{assetTurnover.toFixed(2)}x</span>
              <span className="text-[10px] text-slate-400">Asset Turnover</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block uppercase">3. Leverage</span>
              <span className="text-base font-bold text-slate-900 mt-1 block">{financialLeverage.toFixed(2)}x</span>
              <span className="text-[10px] text-slate-400">Equity Multiplier</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 text-white flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-400 block uppercase tracking-wider">
                Overall Return on Equity (ROE)
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block">
                ROA: {roa.toFixed(1)}% | Leverage Magnification: {financialLeverage.toFixed(2)}x
              </span>
            </div>
            <span className="text-3xl font-extrabold text-emerald-400">
              {roe.toFixed(1)}%
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-normal">
            DuPont analysis separates operational excellence (margins & asset turnover) from capital structure risk (debt leverage).
          </p>
        </div>

      </div>
    </div>
  );
}
