import React, { useState } from "react";
import { DollarSign, TrendingUp, HelpCircle, Calculator, CheckCircle2 } from "lucide-react";

export default function DcfCalculator() {
  const [initialFcff, setInitialFcff] = useState(10); // $ Millions
  const [growthRate1, setGrowthRate1] = useState(15); // % (Yr 1-3)
  const [growthRate2, setGrowthRate2] = useState(10); // % (Yr 4-5)
  const [wacc, setWacc] = useState(11.5); // %
  const [terminalGrowth, setTerminalGrowth] = useState(4.0); // %
  const [netDebt, setNetDebt] = useState(15); // $ Millions
  const [sharesCount, setSharesCount] = useState(10); // Million shares

  // Year-by-Year FCFF calculation
  const r = wacc / 100;
  const gTerm = terminalGrowth / 100;

  const fcffY1 = initialFcff * (1 + growthRate1 / 100);
  const fcffY2 = fcffY1 * (1 + growthRate1 / 100);
  const fcffY3 = fcffY2 * (1 + growthRate1 / 100);
  const fcffY4 = fcffY3 * (1 + growthRate2 / 100);
  const fcffY5 = fcffY4 * (1 + growthRate2 / 100);

  // Present values
  const pv1 = fcffY1 / Math.pow(1 + r, 1);
  const pv2 = fcffY2 / Math.pow(1 + r, 2);
  const pv3 = fcffY3 / Math.pow(1 + r, 3);
  const pv4 = fcffY4 / Math.pow(1 + r, 4);
  const pv5 = fcffY5 / Math.pow(1 + r, 5);

  const sumPvFcff = pv1 + pv2 + pv3 + pv4 + pv5;

  // Terminal Value Calculation (Gordon Growth Model)
  // Check if WACC > Terminal Growth
  const validDenominator = r > gTerm;
  const terminalValue = validDenominator 
    ? (fcffY5 * (1 + gTerm)) / (r - gTerm)
    : 0;
  const pvTerminalValue = terminalValue / Math.pow(1 + r, 5);

  const enterpriseValue = sumPvFcff + pvTerminalValue;
  const equityValue = enterpriseValue - netDebt;
  const targetSharePrice = sharesCount > 0 ? (equityValue / sharesCount) : 0;

  const tvPercentage = enterpriseValue > 0 ? ((pvTerminalValue / enterpriseValue) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
            Valuation Engine
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            Discounted Cash Flow (DCF) Calculator
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Model Assumptions
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Base Year FCFF ($M)
              </label>
              <input
                type="number"
                value={initialFcff}
                onChange={(e) => setInitialFcff(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                WACC Discount Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={wacc}
                onChange={(e) => setWacc(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Growth Rate Y1–Y3 (%)
              </label>
              <input
                type="number"
                step="0.5"
                value={growthRate1}
                onChange={(e) => setGrowthRate1(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Growth Rate Y4–Y5 (%)
              </label>
              <input
                type="number"
                step="0.5"
                value={growthRate2}
                onChange={(e) => setGrowthRate2(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Perpetual Terminal Growth (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={terminalGrowth}
                onChange={(e) => setTerminalGrowth(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Net Debt ($M)
              </label>
              <input
                type="number"
                value={netDebt}
                onChange={(e) => setNetDebt(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* 5-Year Cash Flow Strip */}
          <div className="pt-4">
            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Forecasted Un-levered FCFF ($M)
            </h5>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { y: "Y1", f: fcffY1, pv: pv1 },
                { y: "Y2", f: fcffY2, pv: pv2 },
                { y: "Y3", f: fcffY3, pv: pv3 },
                { y: "Y4", f: fcffY4, pv: pv4 },
                { y: "Y5", f: fcffY5, pv: pv5 }
              ].map((item, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-semibold text-slate-500">{item.y}</div>
                  <div className="font-bold text-slate-900">${item.f.toFixed(1)}</div>
                  <div className="text-[10px] text-slate-400">PV: ${item.pv.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Output Valuation Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
              Valuation Synthesis
            </span>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-800">
                <span className="text-slate-400">PV of 5-Yr Cash Flows:</span>
                <span className="font-bold">${sumPvFcff.toFixed(2)}M</span>
              </div>
              <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-800">
                <span className="text-slate-400">PV of Terminal Value:</span>
                <span className="font-bold">${pvTerminalValue.toFixed(2)}M ({tvPercentage}%)</span>
              </div>
              <div className="flex justify-between items-center text-base font-bold pt-1">
                <span className="text-blue-300">Enterprise Value (EV):</span>
                <span className="text-emerald-400 text-xl">${enterpriseValue.toFixed(2)}M</span>
              </div>
              <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-800">
                <span className="text-slate-400">Less Net Debt:</span>
                <span className="text-rose-400">-${netDebt.toFixed(2)}M</span>
              </div>
              <div className="flex justify-between items-center text-lg font-extrabold text-white pt-2">
                <span>Implied Equity Value:</span>
                <span className="text-blue-400 text-2xl">${equityValue.toFixed(2)}M</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="flex items-center text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              Gordon Growth Terminal Formula Active
            </div>
            <p className="text-[11px] text-slate-400">
              Terminal Value = [FCFF₅ × (1 + g)] / (WACC - g)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
