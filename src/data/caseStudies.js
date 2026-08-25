/**
 * Amit Kadam - Complete 6 Institutional Case Studies
 * Directly mapped to authentic engagements from CapSurge and Capstone project.
 */

export const caseStudiesData = [
  {
    id: "reconciliation-automation",
    slug: "reconciliation-automation",
    title: "Multi-Currency Financial Reconciliation Automation",
    subtitle: "Automating 14,000+ multi-currency transaction reconciliations for a Singapore-based Asset Management Client",
    sector: "Asset Management & Capital Markets",
    clientContext: "Singapore-based Asset Management Client (Anonymized)",
    duration: "CapSurge Advisory Engagement",
    role: "Lead Financial Automation & Data Analyst",
    tagline: "Reduced manual reconciliation cycle time by ~60% across 15+ global accounts using Python & Advanced Excel.",
    heroMetrics: [
      { label: "Transactions Processed", value: "14,000+", change: "Multi-Currency" },
      { label: "Cycle Time Reduction", value: "~60%", change: "From 12h to ~4.5h" },
      { label: "Global Accounts", value: "15+", change: "Across SG/US/UK/IN" },
      { label: "Mismatch Detection", value: "100%", change: "Automated Flags" }
    ],
    tools: ["Python (Pandas)", "Advanced Excel", "Power Query", "VBA/Macros", "Multi-Currency FX Tables"],
    problem: `A Singapore-based asset management client handled high-frequency portfolio trades and cash movements across 15+ global custodian and broker accounts in USD, SGD, EUR, and GBP. Manual monthly reconciliation of 14,000+ ledger entries in spreadsheets caused significant operational bottlenecks, delayed monthly reporting, and introduced risk of currency conversion mismatch.`,
    objective: `Design an end-to-end automated reconciliation engine capable of standardizing disparate data formats, calculating live FX adjustments, cross-matching trade logs against custodian bank feeds, and generating audit-ready variance reports with zero human manual matching.`,
    approach: [
      "Extracted raw unstructured trade logs, custodian settlement statements, and bank cash reports into an automated ingestion pipeline.",
      "Engineered automated data-cleaning scripts in Python (Pandas) to normalize timestamp formats, transaction identifiers, and brokerage fees.",
      "Built a multi-tier matching algorithm: Tier 1 (Exact Unique Trade ID Match), Tier 2 (Fuzzy Amount + Settlement Date Window Match), and Tier 3 (Split Settlement & Fee Discrepancy Flagging).",
      "Integrated real-time FX conversion lookups to eliminate discrepancy noise caused by cross-currency timing differences.",
      "Automated summary dashboard generation in Excel with conditional variance thresholds and CFO sign-off views."
    ],
    workflow: [
      { step: "01", name: "Raw Ingestion", desc: "14,000+ multi-source statements imported via automated scripts." },
      { step: "02", name: "Data Cleaning", desc: "Standardization of currency formats, dates, and trade reference IDs." },
      { step: "03", name: "Matching Logic", desc: "Multi-parameter automated matching between client ledgers and custodian feeds." },
      { step: "04", name: "Variance Detection", desc: "Automated isolation of unmatched items, timing differences, and fee deductions." },
      { step: "05", name: "Account Reporting", desc: "Structured account-level variance breakdown across 15+ institutional accounts." },
      { step: "06", name: "Management Review", desc: "CFO-ready exception reporting with automated drill-down paths." }
    ],
    financialConcepts: [
      "Multi-Currency FX Accounting & Settlement Timing",
      "Asset Management Ledger Reconciliation",
      "Internal Controls & Variance Threshold Governance",
      "Audit Trail & Custodian Account Verification"
    ],
    chartData: [
      { name: "Raw Data Ingestion", manualHours: 3.5, automatedHours: 0.2 },
      { name: "Format Normalization", manualHours: 2.8, automatedHours: 0.1 },
      { name: "Trade Matching", manualHours: 4.2, automatedHours: 0.4 },
      { name: "FX Adjustment", manualHours: 2.0, automatedHours: 0.2 },
      { name: "Variance Reporting", manualHours: 2.5, automatedHours: 0.3 }
    ],
    results: [
      "Engineered automated pipeline processing 14,000+ transactions in seconds rather than days.",
      "Reduced manual reconciliation time by ~60%, freeing up senior analysts for investment strategy.",
      "Delivered structured variance reports identifying mismatches across 15+ global client accounts.",
      "Eliminated recurring human data entry errors and established strict variance tolerance thresholds."
    ],
    keyTakeaway: "Finance automation is most impactful when domain financial knowledge (FX spreads, trade settlement cycles) is combined with programmatic data pipelines (Python/Pandas)."
  },

  {
    id: "three-statement-dcf",
    slug: "three-statement-dcf",
    title: "3-Statement Financial Model & DCF Valuation",
    subtitle: "Comprehensive integrated financial modelling and intrinsic valuation for an Engineering Product Manufacturer",
    sector: "Industrial & Precision Engineering",
    clientContext: "Engineering Product Manufacturing Company (CapSurge Client)",
    duration: "CapSurge Advisory Mandate",
    role: "Financial Modeller & Valuation Analyst",
    tagline: "Constructed integrated 3-statement model and DCF valuation recommending operational & capital levers to improve estimated Enterprise Value by 12–18%.",
    heroMetrics: [
      { label: "Model Architecture", value: "3-Statement", change: "Dynamic Integration" },
      { label: "Forecast Horizon", value: "5 Years", change: "Monthly + Annual" },
      { label: "Estimated EV Upside", value: "12–18%", change: "Recommendation Note" },
      { label: "Valuation Methodology", value: "DCF (FCFF)", change: "WACC & Sensitivity" }
    ],
    tools: ["Advanced Excel (Dynamic Financial Modelling)", "DCF Valuation Framework", "Scenario & Sensitivity Tables", "Capital Structure Optimization"],
    problem: `A mid-market precision engineering manufacturer was preparing for institutional capital structuring and expansion funding. The company lacked a unified financial model connecting operating capacity, working capital cycles, and debt amortization to long-term cash generation and enterprise value.`,
    objective: `Build a dynamic 3-statement model (Income Statement, Balance Sheet, Cash Flow Statement) integrated with revenue driver schedules, capex depreciation schedules, debt waterfalls, and a rigorous Discounted Cash Flow (DCF) valuation with sensitivity matrices.`,
    approach: [
      "Deconstructed historical financials (3 years) to establish normalized baseline margins, working capital cycles (DSO, DIO, DPO), and asset turnover.",
      "Constructed dynamic revenue build-up based on machine utilization, average order value (AOV), and capacity addition scenarios.",
      "Linked the 3 statements dynamically with automated balance sheet balancing via cash/revolver sweep logic.",
      "Calculated Free Cash Flow to Firm (FCFF) incorporating projected NOPAT, depreciation, working capital delta, and growth capex.",
      "Determined Weighted Average Cost of Capital (WACC) using CAPM for cost of equity and synthetic rating approach for cost of debt.",
      "Delivered a strategic suggestion note recommending working capital tightening (reducing DSO by 14 days) and debt refinancing to unlock an estimated 12–18% improvement in Enterprise Value."
    ],
    workflow: [
      { step: "01", name: "Historical Normalization", desc: "Adjusted 3-year historical statements for non-recurring operational items." },
      { step: "02", name: "Operating Schedules", desc: "Built depreciation, working capital, payroll, and debt schedules." },
      { step: "03", name: "3-Statement Integration", desc: "Connected P&L, Balance Sheet, and Cash Flow with dynamic feedback loops." },
      { step: "04", name: "FCFF Calculation", desc: "Projected un-levered free cash flows across 5-year forecast horizon." },
      { step: "05", name: "WACC & Terminal Value", desc: "Estimated discount rate and dual terminal values (Gordon Growth & Exit Multiple)." },
      { step: "06", name: "Value Optimization Note", desc: "Drafted strategic suggestions indicating estimated 12–18% EV improvement potential." }
    ],
    financialConcepts: [
      "Integrated 3-Statement Dynamic Modelling",
      "Free Cash Flow to Firm (FCFF) & Terminal Value (Perpetuity vs Multiple)",
      "WACC (CAPM, Beta Unlevering/Relevering, After-tax Debt Cost)",
      "Working Capital Optimization & Capital Allocation"
    ],
    chartData: [
      { year: "FY24 (A)", revenue: 100, ebitda: 14.5, fcff: 6.2 },
      { year: "FY25 (E)", revenue: 118, ebitda: 18.2, fcff: 8.4 },
      { year: "FY26 (E)", revenue: 139, ebitda: 22.8, fcff: 11.5 },
      { year: "FY27 (E)", revenue: 165, ebitda: 28.5, fcff: 15.8 },
      { year: "FY28 (E)", revenue: 195, ebitda: 35.1, fcff: 21.0 }
    ],
    results: [
      "Delivered fully dynamic 5-year 3-statement model with automated scenario toggles (Base, Bull, Bear).",
      "Computed robust intrinsic DCF valuation supported by dual-variable sensitivity tables (WACC vs Terminal Growth).",
      "Formulated strategic written suggestion note detailing concrete levers to achieve estimated 12–18% EV improvement.",
      "Equipped management with clear understanding of debt capacity and covenant thresholds for upcoming financing."
    ],
    disclaimer: "Note: The 12–18% figure represents an analytical recommendation model of estimated potential value improvement based on working capital and capital structure optimization, not a guarantee or realized historical return."
  },

  {
    id: "comparable-company-analysis",
    slug: "comparable-company-analysis",
    title: "Comparable Company Analysis & Valuation Benchmarking",
    subtitle: "Relative valuation and peer benchmarking across 8 logistics and supply chain players",
    sector: "Logistics & Supply Chain Solutions",
    clientContext: "Regional Logistics & Express Freight Provider",
    duration: "CapSurge Advisory Engagement",
    role: "Valuation & Benchmarking Analyst",
    tagline: "Constructed comprehensive peer benchmarking model for 8 comparable companies across EV/EBITDA and P/E multiples to anchor strategic pricing.",
    heroMetrics: [
      { label: "Peers Benchmarked", value: "8 Companies", change: "Logistics Sector" },
      { label: "Multiples Evaluated", value: "EV/EBITDA, P/E", change: "LTM & NTM" },
      { label: "Operational Metrics", value: "5+ KPIs", change: "Fleet, Margins, ROCE" },
      { label: "Valuation Output", value: "Multiples Matrix", change: "Quartile Analysis" }
    ],
    tools: ["Excel Financial Analysis", "Screener.in / Market Databases", "Peer Multiples Normalization", "Valuation Football Field Chart"],
    problem: `A growth-stage logistics provider required strategic clarity on their market valuation ahead of partner buyout negotiations and institutional growth capital discussions. The company needed an objective, defensible benchmark comparing their operational efficiency and valuation multiples against direct publicly traded peers.`,
    objective: `Build a institutional Comparable Company Analysis (CCA) model evaluating 8 logistics players, normalizing for exceptional items, debt structures, and lease accounting (IFRS 16), and establishing an implied valuation range based on median and 25th-75th quartile multiples.`,
    approach: [
      "Selected an 8-company peer universe sharing similar freight volume characteristics, fleet operating models, and domestic footprint.",
      "Extracted and standardized LTM (Last Twelve Months) and Forward metrics: Revenue, Gross Margin, EBITDA, EBIT, Net Income, Net Debt, and Minority Interest.",
      "Calculated Enterprise Value (EV) and Equity Value for each peer, factoring in capitalized operating leases and cash equivalents.",
      "Computed trading multiples: EV/Sales, EV/EBITDA, P/E, and PEG ratios, standardizing for outlier distortions.",
      "Cross-referenced operational KPIs (EBITDA margin %, Asset Turnover, Return on Capital Employed) to explain premium vs discount valuations across peers.",
      "Constructed a valuation range (Football Field) contextualizing the target firm's target valuation."
    ],
    workflow: [
      { step: "01", name: "Peer Universe Selection", desc: "Filtered 20+ logistics candidates down to 8 true operational comparables." },
      { step: "02", name: "Financial Data Gathering", desc: "Compiled audited annual filings and quarterly earnings reports." },
      { step: "03", name: "Metric Normalization", desc: "Adjusted for one-off asset sales, lease liabilities, and forex adjustments." },
      { step: "04", name: "Multiples Calculation", desc: "Computed Enterprise Value and Equity Value multiples (EV/EBITDA, P/E)." },
      { step: "05", name: "Operational Benchmarking", desc: "Correlated margin profiles with multiple expansion/contraction." },
      { step: "06", name: "Valuation Synthesis", desc: "Established implied target valuation bounds for advisory discussion." }
    ],
    financialConcepts: [
      "Enterprise Value vs Equity Value Bridge",
      "Multiple Normalization & Capital Structure Adjustments",
      "LTM vs NTM EV/EBITDA & P/E Multiples",
      "Regression between EBITDA Margins and Trading Multiples"
    ],
    chartData: [
      { peer: "Peer A", evEbitda: 14.2, pe: 28.5, margin: 18.2 },
      { peer: "Peer B", evEbitda: 12.8, pe: 24.1, margin: 16.0 },
      { peer: "Peer C", evEbitda: 11.5, pe: 21.0, margin: 14.5 },
      { peer: "Peer D (Median)", evEbitda: 10.8, pe: 19.5, margin: 13.8 },
      { peer: "Peer E", evEbitda: 9.6, pe: 17.2, margin: 12.1 },
      { peer: "Peer F", evEbitda: 8.9, pe: 15.0, margin: 11.0 },
      { peer: "Target (Implied)", evEbitda: 10.2, pe: 18.5, margin: 13.2 }
    ],
    results: [
      "Completed rigorous benchmarking across 8 peer logistics companies with quartile breakdown.",
      "Identified that target firm's superior EBITDA margin justified a modest premium over lower-quartile peers.",
      "Delivered clear sensitivity matrices showing enterprise valuation across various multiple realizations.",
      "Provided founders with defensible negotiating anchor for transaction structuring."
    ],
    keyTakeaway: "Comparable Company Analysis is only as good as the normalization process; superficial multiples without operational context lead to mispriced transactions."
  },

  {
    id: "ai-fundraising-model",
    slug: "ai-fundraising-model",
    title: "Financial Modelling & Investor Pitch Deck for AI/LLM SaaS",
    subtitle: "5-Year operating projections, unit economics, and investor return scenarios for a Customer Review Intelligence Platform",
    sector: "B2B SaaS / Artificial Intelligence",
    clientContext: "AI/LLM Customer Review Intelligence Platform",
    duration: "CapSurge Advisory Mandate",
    role: "Financial Modeller & Pitch Strategy Analyst",
    tagline: "Modelled 5-year revenue trajectory, token/compute cost structure, and investor dilution scenarios for an AI product fundraising round.",
    heroMetrics: [
      { label: "Forecast Period", value: "5 Years", change: "ARR & MRR Build-up" },
      { label: "Unit Economics", value: "CAC / LTV", change: "Payback Period Model" },
      { label: "Cost Modelling", value: "Compute & LLM", change: "Token-Level COGS" },
      { label: "Investor Scenarios", value: "Cap Table", change: "Dilution & IRR Matrix" }
    ],
    tools: ["Financial Modelling (SaaS Metrics)", "Cap Table & Dilution Schedules", "Pitch Deck Synthesis", "Investor Return Modeling (IRR/MOIC)"],
    problem: `An early-stage AI startup providing LLM-driven customer sentiment analysis and review intelligence needed to raise institutional seed/Series A funding. Traditional SaaS financial templates failed to capture their cost of goods sold (API tokens, fine-tuning GPU compute, vector indexing) and tiered token-usage pricing tiers.`,
    objective: `Develop a comprehensive 5-year operating model reflecting AI unit economics, customer tier progression, headcount scale-up, gross margin expansion, runway analysis, and cap table dilution scenarios for prospective VC investors.`,
    approach: [
      "Architected bottom-up revenue build based on 3 customer tiers (Starter, Growth, Enterprise), monthly churn rates, expansion revenue (NDR), and seat-based pricing.",
      "Built dynamic COGS model incorporating LLM token costs, cloud infrastructure, and human-in-the-loop quality audit costs.",
      "Structured detailed OpEx schedules covering engineering hires, sales quota-capacity models, and CAC payback cycles.",
      "Modelled monthly cash burn, gross/net runway, and minimum capital requirement to reach Cash Flow Breakeven.",
      "Engineered cap table scenario matrix illustrating founder dilution, ESOP pool creation, and investor MOIC/IRR across 3 exit valuation multiples."
    ],
    workflow: [
      { step: "01", name: "SaaS & AI Metrics Definition", desc: "Defined ARPU, Net Revenue Retention (NRR), CAC, and Token COGS." },
      { step: "02", name: "Revenue Build-Up", desc: "Designed bottom-up tier-based ARR trajectory across 60 months." },
      { step: "03", name: "AI Compute Cost Structure", desc: "Modelled API token volume scaling and GPU infrastructure optimization." },
      { step: "04", name: "Cash Runway & Burn", desc: "Calculated monthly net burn to pinpoint optimal funding round size." },
      { step: "05", name: "Cap Table & Dilution", desc: "Created multi-round financing dilution and ESOP allocation waterfall." },
      { step: "06", name: "Pitch Deck Integration", desc: "Synthesized financial schedules into clean, investor-ready deck slides." }
    ],
    financialConcepts: [
      "SaaS Unit Economics (LTV/CAC, Magic Number, Rule of 40, NDR)",
      "AI Infrastructure Cost Modelling (Inference vs Training COGS)",
      "Working Capital Runway & Net Burn Management",
      "Cap Table Dilution Waterfall & Investor Return Modelling (MOIC/IRR)"
    ],
    chartData: [
      { year: "Year 1", arr: 0.25, grossMargin: 62, netBurn: -0.45 },
      { year: "Year 2", arr: 0.95, grossMargin: 68, netBurn: -0.65 },
      { year: "Year 3", arr: 2.80, grossMargin: 74, netBurn: -0.30 },
      { year: "Year 4", arr: 6.50, grossMargin: 78, netBurn: 0.85 },
      { year: "Year 5", arr: 12.40, grossMargin: 81, netBurn: 2.90 }
    ],
    results: [
      "Constructed 5-year operating model bridging AI technical metrics with institutional VC requirements.",
      "Accurately quantified capital requirement and runway buffers to prevent premature down-rounds.",
      "Delivered dynamic cap table model showing founder equity preservation under varying valuation terms.",
      "Prepared pitch deck narrative with clean data visualizations enabling engaging investor discussions."
    ],
    keyTakeaway: "In AI companies, financial models must articulate technical cost scaling (token economics) just as clearly as customer acquisition economics."
  },

  {
    id: "healthcare-finance-automation",
    slug: "healthcare-finance-automation",
    title: "Healthcare Finance & Claims Workflow Automation",
    subtitle: "AI-driven operational workflow automation, P&L dashboarding, and $500K+ monthly receivables forecasting",
    sector: "US Healthcare / Therapy Services",
    clientContext: "US-Based Healthcare Therapy Provider",
    duration: "CapSurge Advisory Mandate",
    role: "Finance Operations & Automation Specialist",
    tagline: "Reduced operational processing time by ~40% and eliminated ~8 hours of manual monthly P&L reporting while tracking $500K+ in receivables.",
    heroMetrics: [
      { label: "Monthly Receivables", value: "$500K+", change: "Full Cash Visibility" },
      { label: "Cycle Time Reduction", value: "~40%", change: "Claims & MIS Ops" },
      { label: "Reporting Hours Saved", value: "~8 Hours", change: "Per Monthly Cycle" },
      { label: "Variance Tracking", value: "Real-Time", change: "Live Claims Feed" }
    ],
    tools: ["Python Automation", "P&L Management Dashboards", "Claims Aging Analysis", "Automated Cash Forecasting"],
    problem: `A US-based healthcare therapy provider faced severe working capital visibility issues due to slow claims adjudication by insurance payors, manual monthly P&L consolidation taking ~8 hours per cycle, and operational bottlenecks in tracking $500K+ in monthly receivables across multiple clinics.`,
    objective: `Collaborate with tech and finance teams to implement an automated financial workflow covering claims processing validation, claims-based cash flow forecasting, and a real-time P&L management dashboard with automated variance alerts.`,
    approach: [
      "Mapped the entire healthcare revenue cycle: Patient Intake → Treatment Billing → Insurance Claim Filing → Denial/Adjudication → Cash Receipt.",
      "Designed an automated claims-based cash flow forecasting model predicting weekly collections based on historical payor payment velocity.",
      "Engineered automated monthly P&L dashboard replacing ~8 hours of manual spreadsheet compilation with live data feeds.",
      "Established automated variance flags for claims aging over 60/90/120 days, enabling targeted collections follow-up on $500K+ receivables.",
      "Collaborated cross-functionally to streamline operational handoffs, achieving ~40% reduction in end-to-end processing time."
    ],
    workflow: [
      { step: "01", name: "Claims Generation", desc: "Captures billing codes and patient therapy session records." },
      { step: "02", name: "Automated Validation", desc: "Pre-submission error checking to reduce initial insurance denial rates." },
      { step: "03", name: "Receivables Tracking", desc: "Live monitoring of $500K+ monthly claims across aging buckets." },
      { step: "04", name: "Cash Forecast Engine", desc: "Predictive collection forecasting based on payor adjudication lag." },
      { step: "05", name: "P&L Consolidation", desc: "Automated monthly P&L report generation eliminating ~8 hours of work." },
      { step: "06", name: "Executive MIS", desc: "Clinic-level profitability and collection efficiency dashboards." }
    ],
    financialConcepts: [
      "Healthcare Revenue Cycle Management (RCM)",
      "Claims Aging & Working Capital Lock-up Analysis",
      "Cash Flow Timing vs Accrual P&L Recognition",
      "Management Information Systems (MIS) Automation"
    ],
    chartData: [
      { bucket: "Current (0-30d)", amount: 310, collectedPct: 92 },
      { bucket: "31-60 Days", amount: 125, collectedPct: 78 },
      { bucket: "61-90 Days", amount: 48, collectedPct: 54 },
      { bucket: "90+ Days", amount: 22, collectedPct: 28 }
    ],
    results: [
      "Eliminated ~8 hours of manual P&L reporting per monthly financial close cycle.",
      "Reduced operational processing time across claims and finance workflows by ~40%.",
      "Provided leadership with crystal-clear daily visibility over $500K+ in monthly receivables.",
      "Significantly accelerated cash conversion by identifying stalled claims before 60-day aging."
    ],
    keyTakeaway: "In healthcare services, cash flow predictability relies entirely on mastering the claims denial-to-collection conversion pipeline."
  },

  {
    id: "marico-equity-research",
    slug: "marico-equity-research",
    title: "Institutional Equity Research: Marico Ltd. (FMCG Sector)",
    subtitle: "32-Slide comprehensive investment research report with DuPont analysis, ROCE (47.9%), and Corporate Governance Scoring",
    sector: "Fast-Moving Consumer Goods (FMCG)",
    clientContext: "Institutional-Grade Capstone Equity Research Project",
    duration: "Academic & Capstone Research",
    role: "Lead Equity Research Analyst",
    tagline: "Authored 32-slide research report evaluating Marico's competitive moats, ROCE (47.9%), ROE (41.7%), and capital allocation governance.",
    heroMetrics: [
      { label: "Report Depth", value: "32 Slides", change: "Institutional Grade" },
      { label: "Return on Equity (ROE)", value: "41.7%", change: "DuPont Analyzed" },
      { label: "Return on Capital (ROCE)", value: "47.9%", change: "Capital Efficiency" },
      { label: "Macro Datasets", value: "4 Sources", change: "IMF, IBEF, CRISIL, Statista" }
    ],
    tools: ["Financial Statement Analysis", "DuPont 3-Stage / 5-Stage Framework", "Macroeconomic Data Synthesis", "Corporate Governance Scorecard"],
    problem: `Evaluating whether FMCG giant Marico Ltd. could sustain premium valuation multiples amidst rural demand softness, copra input cost volatility, and aggressive direct-to-consumer (D2C) premiumization competition.`,
    objective: `Conduct a rigorous fundamental equity research analysis covering macro tailwinds, Porter's five forces, 5-year financial statement autopsy, DuPont breakdown of ROE/ROCE, working capital red flags, and board governance quality.`,
    approach: [
      "Synthesized macroeconomic and consumption indicators from IMF, IBEF, CRISIL, and Statista to build industry baseline.",
      "Evaluated core brand moats (Parachute, Saffola, Nihar) against emerging D2C challenger brands.",
      "Performed comprehensive 5-year financial statement analysis, calculating growth CAGRs, gross margins, and operating leverage.",
      "Executed 3-stage DuPont decomposition proving that high ROE (41.7%) was driven by superior asset turnover and net margins rather than financial leverage.",
      "Identified working capital dynamics, noting receivable days and distribution channel inventory buildup.",
      "Constructed a structured corporate governance score assessing board independence, auditor tenure, related-party transactions, and dividend payout discipline."
    ],
    workflow: [
      { step: "01", name: "Macro & Sector", desc: "Analyzed rural consumption trends, inflation data, and raw material cycles." },
      { step: "02", name: "Business Model", desc: "Evaluated distribution moat across 5.8M+ retail outlets in India." },
      { step: "03", name: "Financial Autopsy", desc: "Audited 5-year P&L, Balance Sheet, and Free Cash Flow generation." },
      { step: "04", name: "DuPont Deconstruction", desc: "Decomposed ROE (41.7%) and ROCE (47.9%) into operational drivers." },
      { step: "05", name: "Working Capital Check", desc: "Scrutinized debtor days, inventory turnover, and distributor credit terms." },
      { step: "06", name: "Governance & Thesis", desc: "Assessed capital allocation and finalized 32-slide investment deck." }
    ],
    financialConcepts: [
      "DuPont 3-Stage & 5-Stage ROE / ROCE Decomposition",
      "Working Capital Red Flags in FMCG Distribution Networks",
      "Corporate Governance Quality & Capital Allocation Discipline",
      "Commodity Input Cycles (Copra) vs Retail Price Elasticity"
    ],
    chartData: [
      { metric: "ROE (%)", value: 41.7, benchmark: 24.5 },
      { metric: "ROCE (%)", value: 47.9, benchmark: 28.0 },
      { metric: "EBITDA Margin (%)", value: 19.8, benchmark: 17.2 },
      { metric: "Dividend Payout (%)", value: 72.0, benchmark: 50.0 },
      { metric: "Debt/Equity (x)", value: 0.08, benchmark: 0.45 }
    ],
    results: [
      "Authored 32-slide institutional-grade equity research deck presented to finance faculty and peers.",
      "Demonstrated that Marico's capital-light model and strong pricing power delivered exceptional 47.9% ROCE.",
      "Highlighted key risk factors: Copra raw material cycles and slow rural FMCG volume recovery.",
      "Showcased rigorous equity research methodology ready for buy-side and sell-side roles."
    ],
    disclaimer: "Educational & analytical capstone research. This analysis does not constitute real-time investment advice or a recommendation to buy/sell securities."
  }
];
