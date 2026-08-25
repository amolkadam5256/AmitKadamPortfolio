import React, { useState } from "react";
import SEO from "../components/common/SEO";
import { toolkitTools } from "../data/toolkit";
import DcfCalculator from "../components/toolkit/DcfCalculator";
import WorkingCapitalCalculator from "../components/toolkit/WorkingCapitalCalculator";
import DupontCalculator from "../components/toolkit/DupontCalculator";
import MultiplesCalculator from "../components/toolkit/MultiplesCalculator";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  PieChart, 
  BarChart3, 
  BookOpen,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export default function Toolkit() {
  const [activeTab, setActiveTab] = useState("dcf");

  const tabs = [
    { id: "dcf", name: "DCF Valuation", icon: TrendingUp },
    { id: "working-capital", name: "Working Capital & CCC", icon: Clock },
    { id: "dupont", name: "DuPont ROE Analysis", icon: PieChart },
    { id: "multiples", name: "EV/EBITDA & P/E Multiples", icon: BarChart3 },
  ];

  const currentTool = toolkitTools.find((t) => t.id === activeTab) || toolkitTools[0];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="Interactive Corporate Finance Toolkit & Valuation Calculators | Amit Kadam"
        description="Interactive suite of institutional financial calculators: DCF valuation, Working Capital & CCC, DuPont 3-stage ROE analysis, and EV/EBITDA multiples."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Models</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Finance Toolkit & Calculators
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Test real-world financial valuation and working capital scenarios in real-time. Built with institutional formulas used in corporate finance advisory.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Calculator Component */}
        <div className="space-y-8">
          {activeTab === "dcf" && <DcfCalculator />}
          {activeTab === "working-capital" && <WorkingCapitalCalculator />}
          {activeTab === "dupont" && <DupontCalculator />}
          {activeTab === "multiples" && <MultiplesCalculator />}

          {/* Educational Notes & Formula Explanation */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              Formula & Analytical Mechanics
            </h3>

            <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm">
              {currentTool.formula}
            </div>

            <div className="space-y-2 pt-2">
              {currentTool.educationalNotes.map((note, idx) => (
                <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
