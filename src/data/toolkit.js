/**
 * Amit Kadam - Interactive Finance Toolkit
 * Config, formulas, and step-by-step mathematical models for interactive calculators.
 */

export const toolkitTools = [
  {
    id: "dcf",
    name: "DCF Intrinsic Valuation Calculator",
    shortName: "DCF Valuation",
    category: "Valuation",
    description: "Calculate Enterprise Value and Equity Value using Free Cash Flow to Firm (FCFF), WACC, and Gordon Growth Terminal Value.",
    formula: "Enterprise Value = Sum of PV(FCFF) + PV(Terminal Value)",
    defaultInputs: {
      initialFcff: 10, // in Millions
      growthRate1: 15, // Year 1-3 growth %
      growthRate2: 10, // Year 4-5 growth %
      wacc: 11.5, // Discount rate %
      terminalGrowth: 4.0, // Perpetual growth rate %
      netDebt: 15, // Net Debt (Total Debt - Cash)
      sharesCount: 10 // Million shares
    },
    educationalNotes: [
      "FCFF represents the cash generated from core operations available to all capital providers (equity and debt holders) after paying taxes, reinvesting in working capital, and funding capital expenditures.",
      "Terminal Value typically accounts for 60%–80% of total Enterprise Value in a high-growth company. A small change in terminal growth or WACC dramatically swings intrinsic value.",
      "Equity Value = Enterprise Value - Total Debt + Cash & Equivalents - Minority Interest."
    ]
  },
  {
    id: "working-capital",
    name: "Cash Conversion Cycle (CCC) & Working Capital Calculator",
    shortName: "Working Capital & CCC",
    category: "Corporate Finance",
    description: "Evaluate operational liquidity and cash trapped in the operating cycle via Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payables Outstanding (DPO).",
    formula: "Cash Conversion Cycle (CCC) = DSO + DIO - DPO",
    defaultInputs: {
      revenue: 100, // Millions
      cogs: 65, // Millions
      receivables: 18, // Accounts Receivable
      inventory: 14, // Inventory
      payables: 11 // Accounts Payable
    },
    educationalNotes: [
      "A lower (or negative) CCC means the business finances its operations through supplier credit, requiring minimal external working capital financing.",
      "DSO = (Accounts Receivable / Revenue) × 365. High DSO indicates delayed client collections.",
      "DIO = (Inventory / COGS) × 365. High DIO indicates excessive stockpiling or slow inventory turns.",
      "DPO = (Accounts Payable / COGS) × 365. High DPO indicates favorable supplier credit terms."
    ]
  },
  {
    id: "dupont",
    name: "DuPont 3-Stage ROE Decomposition",
    shortName: "DuPont ROE Analysis",
    category: "Financial Analysis",
    description: "Decompose Return on Equity (ROE) into Net Profit Margin (Profitability), Asset Turnover (Operational Efficiency), and Financial Leverage (Equity Multiplier).",
    formula: "ROE = Net Profit Margin × Asset Turnover × Financial Leverage",
    defaultInputs: {
      netIncome: 15, // Millions
      revenue: 100, // Millions
      totalAssets: 75, // Millions
      shareholdersEquity: 40 // Millions
    },
    educationalNotes: [
      "Net Profit Margin = Net Income / Revenue (Measures pricing power and cost control).",
      "Asset Turnover = Revenue / Total Assets (Measures how efficiently the company deploys assets to generate sales).",
      "Financial Leverage = Total Assets / Shareholders' Equity (Measures the degree of debt magnification).",
      "Sustainable high ROE driven by asset turnover and net margins is far higher quality than ROE inflated by excessive debt leverage."
    ]
  },
  {
    id: "multiples",
    name: "Comparable Valuation Multiples Benchmarking",
    shortName: "EV/EBITDA & P/E Multiples",
    category: "Valuation",
    description: "Determine implied target Enterprise Value and Equity Value using peer benchmark EV/EBITDA and P/E trading multiples.",
    formula: "Implied EV = Target EBITDA × Peer Median EV/EBITDA Multiple",
    defaultInputs: {
      targetRevenue: 85, // Millions
      targetEbitda: 14.5, // Millions
      targetNetIncome: 8.2, // Millions
      peerEvEbitda: 11.2, // Peer multiple
      peerPe: 22.0, // Peer P/E multiple
      targetNetDebt: 12 // Millions
    },
    educationalNotes: [
      "EV/EBITDA is capital-structure neutral, making it the preferred multiple for cross-company comparisons with differing debt levels and tax regimes.",
      "P/E ratio reflects equity valuation directly but is distorted by leverage, interest expenses, and non-operating income.",
      "Always normalize EBITDA for non-recurring expenses before applying peer multiples."
    ]
  }
];
