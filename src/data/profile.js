/**
 * Amit Kadam - Core Profile & Entity Data Model
 * Primary Source of Truth based on verified Resume & LinkedIn material.
 * 
 * TODO / Verification Notes:
 * - CapSurge current designation is 'Corporate Financial Analyst' (Jul 2026–Present) on latest resume, 
 *   and 'Corporate Finance Intern' (Dec 2025–Present) on earlier profile.
 * - MBA Institution: Sinhgad Institute of Management, affiliated with Savitribai Phule Pune University (2024–2026).
 */

export const profileData = {
  name: "Amit Kadam",
  pronouns: "He/Him",
  title: "Corporate Finance Professional",
  headline: "Corporate Finance | Financial Modelling | Valuation | Fundraising | M&A | Finance Automation",
  location: "Pune, Maharashtra, India",
  postalCode: "411052",
  phone: "+91 8956506020",
  email: "amitkadam1562@gmail.com",
  linkedin: "https://www.linkedin.com/in/amitkadam15",
  github: "https://github.com/amolkadam5256/AmitKadamPortfolio",
  portfolioUrl: "https://amitkadam.vercel.app",

  currentRole: {
    title: "Corporate Financial Analyst",
    company: "CapSurge",
    companyType: "Boutique Corporate Finance Advisory Firm",
    startDate: "Jul 2026",
    endDate: "Present",
    internshipStartDate: "Dec 2025",
    internshipEndDate: "Jun 2026",
    location: "Pune District, Maharashtra, India",
    focus: "Fundraising, Financial Modelling, Valuation, Capital Structuring, M&A Advisory & AI Automation"
  },

  summary: `I am an MBA in Finance with a background in Economics (B.A. Hons), working in corporate finance advisory at CapSurge. My professional focus is understanding how capital allocation, valuation, and transaction structures impact real businesses beyond static spreadsheets. My experience spans financial modelling, DCF and comparable company valuation, fundraising advisory, working capital optimization, and Python/Excel-based finance automation across manufacturing, SaaS/AI, logistics, healthcare, and asset management.`,

  philosophy: {
    quote: "Clarity over complexity: translating financial numbers into strategic decisions that drive real enterprise value.",
    principles: [
      {
        title: "Cash Flow Over Accounting Profit",
        description: "Revenue is vanity, profit is sanity, but cash flow is reality. I prioritize operating cash conversion, receivable aging, and working capital cycles."
      },
      {
        title: "Triangulated Valuation",
        description: "DCF provides intrinsic value, Comparable Companies anchor market realities, and Precedent Transactions reflect strategic deal premiums."
      },
      {
        title: "Automated Precision",
        description: "Eliminating manual reconciliation and reporting friction via Python and advanced Excel so finance teams focus on strategic decision-making."
      },
      {
        title: "Rigorous Due Diligence",
        description: "Reverse-engineering business models, unit economics, and corporate governance to uncover red flags before capital is committed."
      }
    ]
  },

  targetAudiences: [
    {
      role: "Finance Recruiters & Investment Banks",
      pitch: "Equipped with institutional-grade financial modelling, DCF/CCA valuation, DuPont analysis, and transaction memo preparation."
    },
    {
      role: "Founders & CFOs",
      pitch: "Supporting investor-ready 5-year operating models, working capital diagnostics, AI-driven MIS automation, and fundraising collateral."
    },
    {
      role: "Private Equity & Venture Capital",
      pitch: "Evaluating unit economics, growth runways, peer multiple benchmarking, and downside scenario testing."
    }
  ],

  stats: [
    {
      id: "transactions",
      value: "14,000+",
      label: "Transactions Reconciled",
      sublabel: "Multi-currency automated pipeline for Singapore AMC",
      metricSource: "Resume — CapSurge Engagement"
    },
    {
      id: "time-reduction",
      value: "~60%",
      label: "Reconciliation Time Saved",
      sublabel: "Excel + Python automation across 15+ global client accounts",
      metricSource: "Resume — CapSurge Engagement"
    },
    {
      id: "peers-benchmarked",
      value: "8 Peers",
      label: "Logistics Companies Benchmarked",
      sublabel: "Multiples analysis across EV/EBITDA, P/E, and EBITDA margins",
      metricSource: "Resume — CapSurge Engagement"
    },
    {
      id: "receivables-tracked",
      value: "$500K+",
      label: "Monthly Receivables Tracked",
      sublabel: "Healthcare claims automation & cash flow forecasting",
      metricSource: "Resume — CapSurge Engagement"
    },
    {
      id: "healthcare-time",
      value: "~40%",
      label: "Process Cycle Reduction",
      sublabel: "End-to-end AI automation for claims & MIS reporting",
      metricSource: "Resume — CapSurge Engagement"
    },
    {
      id: "research-deck",
      value: "32 Slides",
      label: "Institutional Equity Research",
      sublabel: "Marico Ltd. FMCG Capstone (DuPont, ROCE 47.9%, ROE 41.7%)",
      metricSource: "Resume — Capstone Project"
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA) – Finance",
      institution: "Sinhgad Institute of Management (Affiliated to Savitribai Phule Pune University)",
      period: "2024 – 2026",
      score: "CGPA: 8.50 / 10.00",
      highlights: ["Corporate Finance", "Investment Analysis", "Financial Derivatives", "Capital Markets & Valuation"]
    },
    {
      degree: "Bachelor of Arts (B.A. Hons) – Economics",
      institution: "Bharati Vidyapeeth University, Pune",
      period: "2021 – 2024",
      score: "CGPA: 8.67 / 10.00",
      highlights: ["Macroeconomics & Monetary Policy", "Microeconomic Theory", "Econometrics & Quantitative Techniques", "Public Finance"]
    },
    {
      degree: "Higher Secondary & Secondary Education (CBSE)",
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      period: "Completed",
      score: "HSC: 82% | SSC: 79%",
      highlights: ["Academic Excellence", "Analytical & Quantitative Foundation"]
    }
  ],

  languages: [
    { name: "English", proficiency: "Full Professional" },
    { name: "Hindi", proficiency: "Native / Bilingual" },
    { name: "Marathi", proficiency: "Native / Bilingual" }
  ]
};
