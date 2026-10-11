import React from "react";
import SEO from "../components/common/SEO";
import { profileData } from "../data/profile";
import { experienceData } from "../data/experience";
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
              Amit Kadam — Corporate Finance Analyst | CV (September 2026)
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
              Corporate Finance Analyst with experience in financial modelling, valuation, fundraising support, FP&A and strategic finance. Developed integrated three-statement models, DCF and comparable-company valuations, five-year forecasts, investor return analyses and AI-enabled finance workflows across manufacturing, technology, logistics, healthcare, and asset management sectors, supporting valuation, peer benchmarking, strategic analysis, and management decision-making. Strong skills in financial analysis, Excel, and Python-based finance automation.
            </p>
          </div>

          {/* Professional Experience — derived from latest September 2026 CV */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">EXPERIENCE</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start gap-3 text-xs text-slate-900">
                <div><strong>CapSurge Consulting Private Limited</strong><div className="font-medium">Corporate Financial Analyst</div><div className="text-slate-600">Corporate Finance Intern</div></div>
                <div className="text-right shrink-0"><div>Jul 2026 – Present</div><div className="text-slate-600">Dec 2025 – Jun 2026</div></div>
              </div>
              <p className="text-[11px] text-slate-500">Pune, India</p>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-outside pl-4">
                <li>Built integrated three-statement models, DCF and comparable-company valuations, five-year projections, and enterprise-value analysis across manufacturing and sustainability-focused sectors.</li>
                <li>Designed weighted peer benchmarking across growth, profitability, operating efficiency, working capital, returns and balance-sheet metrics.</li>
                <li>Managed US healthcare monthly P&amp;L, weekly operational dashboards, MIS and rolling 13-week cash-flow forecasting; supported automation reducing manual work by <strong>90%+</strong>.</li>
                <li>Designed multi-currency investment reconciliation and reporting covering managed accounts, bonds, structured notes and pooled investments.</li>
                <li>Supported fundraising modelling, investor materials and investment analysis for an AI-based technology business.</li>
                <li>Supported financial and commercial analysis of African EV and charging infrastructure engagements.</li>
                <li>Led weighted competitive benchmarking of approximately <strong>12 logistics technology competitors</strong>.</li>
                <li>Developed vendor and intercompany reconciliation solutions covering approximately <strong>52,000 vendor</strong> and <strong>24,000 India–US transactions</strong>, achieving approximately <strong>94–95%</strong> automatic reconciliation.</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-start gap-3 text-xs text-slate-900"><strong>Finance Intern — Autobat Pvt. Ltd.</strong><span className="shrink-0">May 2025 – Jul 2025</span></div>
              <p className="text-[11px] text-slate-500">Pune, India</p>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-outside pl-4">
                <li>Analysed production costs, operating expenses and working-capital movements across inventory, receivables and payables for management reporting.</li>
                <li>Supported financial statements, GST-compliant accounting records and management reports using Tally ERP.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills — September 2026 CV */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-900 pb-1">SKILLS</h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p><strong>Financial Modelling &amp; Valuation:</strong> Three-statement modelling, DCF, comparable-company analysis, forecasting, scenario and sensitivity analysis, financial statement analysis.</p>
              <p><strong>Corporate Finance &amp; FP&amp;A:</strong> Budgeting and forecasting, 13-week cash-flow forecasting, working-capital analysis, MIS and management reporting, fundraising support, strategic finance, peer benchmarking.</p>
              <p><strong>Finance Automation &amp; Reconciliation:</strong> Investment, vendor and intercompany reconciliation, exception management, financial controls, workflow automation, AI-enabled finance automation.</p>
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
                  Class X: 8.2 CGPA · Class XII: 82%
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
