/**
 * Amit Kadam - Comprehensive Skill Taxonomy
 * Grouped categorically without arbitrary percentage bars.
 */

export const skillCategories = [
  {
    id: "modelling-valuation",
    title: "Financial Modelling & Valuation",
    description: "Intrinsic and relative valuation methodologies for transaction advisory and strategic planning.",
    skills: [
      { name: "3-Statement Financial Modelling", level: "Core Expertise", desc: "Dynamic integration of P&L, Balance Sheet, and Cash Flow with automated sweeps." },
      { name: "Discounted Cash Flow (DCF)", level: "Core Expertise", desc: "FCFF / FCFE modeling, WACC determination via CAPM, and dual terminal value logic." },
      { name: "Comparable Company Analysis (CCA)", level: "Core Expertise", desc: "Peer multiple normalization across EV/EBITDA, P/E, P/B, and operational KPIs." },
      { name: "Precedent Transactions Analysis", level: "Proficient", desc: "Control premium analysis and transaction multiple benchmarking." },
      { name: "LBO & Debt Capacity Basics", level: "Working Knowledge", desc: "Leverage structuring, debt paydown waterfalls, and minimum IRR evaluation." },
      { name: "Scenario & Sensitivity Analysis", level: "Core Expertise", desc: "Data tables, Monte Carlo/tornado sensitivity on growth, WACC, and margins." }
    ]
  },
  {
    id: "corporate-finance-advisory",
    title: "Corporate Finance & Capital Advisory",
    description: "Capital structuring, fundraising advisory, and transaction due diligence.",
    skills: [
      { name: "Fundraising & Investor Collateral", level: "Core Expertise", desc: "Crafting investor-ready financial models, pitch narratives, and data room schedules." },
      { name: "Capital Structuring & Debt Advisory", level: "Proficient", desc: "Optimizing cost of capital, debt service coverage (DSCR), and covenant buffers." },
      { name: "M&A Advisory Support", level: "Proficient", desc: "Target benchmarking, synergy identification, and financial due diligence support." },
      { name: "Working Capital Optimization", level: "Core Expertise", desc: "Cash Conversion Cycle (DSO, DIO, DPO) diagnostics and cash flow unlocking." },
      { name: "Unit Economics & SaaS Metrics", level: "Core Expertise", desc: "LTV/CAC, Magic Number, Rule of 40, Net Retention (NDR), and Token COGS." },
      { name: "Corporate Governance Analysis", level: "Proficient", desc: "Board independence, auditor scrutiny, related-party review, and capital allocation." }
    ]
  },
  {
    id: "data-automation",
    title: "Data Analysis & Finance Automation",
    description: "Modern programmatic pipelines transforming manual spreadsheets into real-time MIS engines.",
    skills: [
      { name: "Advanced Microsoft Excel", level: "Expert", desc: "Dynamic arrays, Power Query, complex nested logic, financial macros, and modeling." },
      { name: "Python for Finance (Pandas)", level: "Proficient", desc: "Automated multi-source ledger reconciliation, FX conversion, and data cleaning." },
      { name: "Financial Dashboarding & MIS", level: "Core Expertise", desc: "Automated monthly P&L views, live variance flags, and CFO executive summaries." },
      { name: "Variance Reporting & Analysis", level: "Core Expertise", desc: "Budget vs Actuals, price-volume-mix (PVM) variance, and exception flags." },
      { name: "Tally ERP & Accounting Systems", level: "Proficient", desc: "Ledger verification, GST compliance reporting, and journal entry auditing." },
      { name: "AI Tools in Finance", level: "Proficient", desc: "Prompt engineering for financial research, document extraction, and workflow acceleration." }
    ]
  },
  {
    id: "research-market-intelligence",
    title: "Research & Market Intelligence",
    description: "Macroeconomic synthesis, institutional equity research, and sector benchmarking.",
    skills: [
      { name: "Fundamental Equity Research", level: "Core Expertise", desc: "Comprehensive 32-slide institutional capstone research on FMCG sector." },
      { name: "DuPont 3 & 5-Stage Analysis", level: "Core Expertise", desc: "Deconstructing ROE into operating margin, asset turnover, and leverage." },
      { name: "Financial Statement Auditing", level: "Core Expertise", desc: "Scrutinizing notes to accounts, cash flow vs net profit divergence, and accruals." },
      { name: "Market Research Tools", level: "Proficient", desc: "Screener.in, NSE/BSE Filings, Yahoo Finance, Statista, CRISIL, IMF Data." }
    ]
  }
];
