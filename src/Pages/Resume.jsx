import React from "react";
import SEO from "../components/common/SEO";
import { profileData } from "../data/profile";
import { experienceData } from "../data/experience";
import { caseStudiesData } from "../data/caseStudies";
import { 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  CheckCircle2,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import { LinkedInIcon } from "../components/common/Icons";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const maricoProject = caseStudiesData.find(cs => cs.id === "marico-equity-research");

  return (
    <div className="bg-slate-100 min-h-screen py-8 sm:py-12 lg:py-16">
      <SEO
        title="Resume & Curriculum Vitae | Amit Kadam"
        description="Official curriculum vitae of Amit Kadam — Corporate Financial Analyst specializing in financial modelling, DCF/CCA valuation, fundraising, and finance automation."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Action Header (Hidden when printing) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm no-print">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              Curriculum Vitae
            </span>
            <h1 className="text-lg font-bold text-slate-900">
              Amit Kadam — Corporate Finance Resume
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-700" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* The Printable A4 Resume Sheet */}
        <div className="print-container bg-white rounded-3xl sm:p-12 p-6 border border-slate-200 shadow-lg text-slate-900 space-y-7">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-200 space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase">
              AMIT KADAM
            </h2>
            <p className="text-xs font-medium text-slate-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>{profileData.phone}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-blue-700 hover:underline">
                {profileData.email}
              </a>
              <span>•</span>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <span>{profileData.location}</span>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">
              SUMMARY
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Corporate finance professional with experience in financial modelling, DCF and comparable company valuation, fundraising support, forecasting, working capital and cash flow analysis, capital structure and debt analysis, MIS, and CFO-level reporting. Worked across manufacturing, technology, logistics, healthcare, and asset management sectors, supporting valuation, peer benchmarking, strategic analysis, and management decision-making. Strong skills in financial analysis, Excel, and Python-based finance automation.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">
              EXPERIENCE
            </h3>

            {/* CapSurge */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                <div>
                  <span className="font-extrabold">Corporate Financial Analyst</span> – CapSurge
                  <div className="font-semibold text-slate-600">Corporate Finance Intern – CapSurge</div>
                </div>
                <div className="text-right">
                  <div>Jul 2026 – Present</div>
                  <div className="font-normal text-slate-500">Dec 2025 – Jun 2026</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 italic">Pune, India</div>

              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-outside pl-4">
                <li>
                  Engineered an Excel + Python-based automated reconciliation system for a Singapore-based AMC, processing <strong>14,000+ multi-currency transactions</strong> and reducing manual reconciliation time by <strong>~60%</strong>; delivered structured variance reports identifying mismatches across <strong>15+ global client accounts</strong>.
                </li>
                <li>
                  Built a full <strong>3-statement financial model</strong> (P&L, Balance Sheet, Cash Flow) for an engineering product manufacturing company; performed <strong>DCF valuation</strong> and delivered a written suggestion note recommending strategies to increase enterprise value by an estimated <strong>12–18%</strong>.
                </li>
                <li>
                  Constructed a comparable company analysis (CCA) and financial model for a logistics firm; benchmarked <strong>8 peer companies</strong> across EV/EBITDA and P/E multiples to support strategic decision-making.
                </li>
                <li>
                  Developed a financial model and pitch deck for an AI/LLM-based product company (customer review intelligence platform) assisting fundraising efforts; modelled 5-year revenue projections and investor return scenarios.
                </li>
                <li>
                  Designed an automated monthly P&L dashboard for a US healthcare client, eliminating <strong>~8 hours</strong> of manual reporting per cycle; integrated live data feeds and variance flags for management review.
                </li>
                <li>
                  Led financial and operational workflow automation for a US-based healthcare therapy provider; collaborated with the tech team to build an end-to-end AI automation tool covering claims processing, cash flow forecasting, and MIS reporting — reducing operational processing time by <strong>~40%</strong>.
                </li>
                <li>
                  Produced healthcare MIS dashboards and claims-based cash flow forecasts, enabling the client to track <strong>$500K+ in monthly receivables</strong> and improve collections cycle visibility.
                </li>
              </ul>
            </div>

            {/* Autobat */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                <div>
                  <span className="font-extrabold">Accounts Intern</span> – Autobat Pvt. Ltd.
                </div>
                <div>May 2025 – Jul 2025</div>
              </div>
              <div className="text-[11px] text-slate-500 italic">Pune, India</div>

              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-outside pl-4">
                <li>
                  Reconciled vendor and customer ledgers across <strong>500+ entries monthly</strong>; identified and resolved discrepancies in journal entries, improving ledger accuracy by <strong>15%</strong>.
                </li>
                <li>
                  Analysed production costs, expense trends, and working capital data to surface efficiency gaps; findings incorporated into monthly MIS reports presented to senior management.
                </li>
                <li>
                  Supported preparation of financial statements and management reporting using Tally ERP within a GST-compliant manufacturing environment.
                </li>
              </ul>
            </div>
          </div>

          {/* Capstone Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">
              PROJECTS
            </h3>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                <span>Equity Research Report – Marico Ltd. (FMCG Sector) | Capstone Project</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700 list-disc list-outside pl-4">
                <li>
                  Authored a <strong>32-slide institutional-grade equity research report</strong> on Marico Ltd.; integrated macro data from IMF, IBEF, CRISIL, and Statista to build an investment thesis supported by sector and competitive analysis.
                </li>
                <li>
                  Performed DuPont analysis, ratio analysis, and financial statement deep-dive; computed <strong>ROE of 41.7%</strong> and <strong>ROCE of 47.9%</strong> and identified red flags in receivables, working capital, and distribution operations.
                </li>
                <li>
                  Evaluated corporate governance, board composition, and capital allocation practices; assessed management quality and shareholder value creation through structured governance scoring.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Taxonomy */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">
              SKILLS
            </h3>
            <div className="space-y-1 text-xs text-slate-700">
              <p>
                <strong>Financial Modelling & Valuation:</strong> DCF Valuation, Comparable Company Analysis, 3-Statement Modelling, LBO Basics, Forecasting, Scenario Analysis, Sensitivity Analysis
              </p>
              <p>
                <strong>Data Analysis & Reporting:</strong> Excel (Advanced – PivotTables, Power Query, Macros), Python (Pandas, automation scripts), MIS Dashboards, Financial Dashboarding, Variance Reporting
              </p>
              <p>
                <strong>Research & Tools:</strong> Equity Research, Financial Statement Analysis, Ratio Analysis, Corporate Governance Assessment, Screener.in, NSE/BSE Portals, Yahoo Finance, Tally ERP, PowerPoint
              </p>
              <p>
                <strong>Core Competencies:</strong> Investment Analysis, Corporate Finance, Capital Markets, Data Interpretation, Stakeholder Reporting, Attention to Detail
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">
              EDUCATION
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong>MBA – Finance</strong> | Sinhgad Institute of Management, Pune University
                </div>
                <div className="text-right">
                  <strong>CGPA: 8.50 / 10.00</strong> • 2024 – 2026
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <strong>B.A. – Economics (Honours)</strong> | Bharati Vidyapeeth University, Pune
                </div>
                <div className="text-right">
                  <strong>CGPA: 8.67 / 10.00</strong> • 2021 – 2024
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <strong>SSC (X) & HSC (XII)</strong> – Jawahar Navodaya Vidyalaya | CBSE
                </div>
                <div className="text-right">
                  Percentage: 79%, 82%
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
