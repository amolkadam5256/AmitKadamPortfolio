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
  title: "Corporate Finance Analyst",
  headline: "Corporate Finance Analyst | Financial Modelling & Valuation | FP&A | Reconciliation & AI-Enabled Finance",
  location: "Pune, Maharashtra, India",
  postalCode: "411052",
  phone: "+91 8956506020",
  email: "amitkadam1562@gmail.com",
  linkedin: "https://www.linkedin.com/in/amitkadam15",
  github: "https://github.com/amolkadam5256/AmitKadamPortfolio",
  portfolioUrl: "https://amit-kadam-portfolio-omega.vercel.app/",

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

  summary: `Corporate Finance Analyst with experience in financial modelling, valuation, fundraising support, FP&A, and strategic finance across manufacturing, technology, logistics, healthcare, and asset management. Developed integrated three-statement models, DCF and comparable-company valuations, five-year forecasts, and investor return analyses. Combines profitability, working capital, cash flow and capital structure analysis with Excel, Python, reconciliation automation and AI-enabled finance workflows.`,

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
    "id": "vendor-volume",
    "value": "52K+",
    "label": "Vendor Transactions",
    "sublabel": "Global logistics vendor reconciliation",
    "metricSource": "Resume 30 Sep 2026"
  },
  {
    "id": "intercompany",
    "value": "24K+",
    "label": "Intercompany Transactions",
    "sublabel": "India–US reconciliation",
    "metricSource": "Resume 30 Sep 2026"
  },
  {
    "id": "recon-rate",
    "value": "94–95%",
    "label": "Automated Reconciliation",
    "sublabel": "Logistics reconciliation engagements",
    "metricSource": "Resume 30 Sep 2026"
  },
  {
    "id": "automation",
    "value": "90%+",
    "label": "Manual Effort Reduced",
    "sublabel": "US healthcare reporting workflow",
    "metricSource": "Resume 30 Sep 2026"
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
