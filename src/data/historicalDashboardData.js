/** Read-only historical data from uploaded financial-model Profit_Loss and Ratio_Analysis worksheets. Values INR crore, margin percent, days and x. */
export const historicalDashboardData = {
  "manufacturing-a-model": {
    "name": "PadCare Labs",
    "years": [
      "FY21",
      "FY22",
      "FY23",
      "FY24",
      "FY25"
    ],
    "pnl": {
      "revenue": [
        0.075723,
        0.3701635,
        1.61113482,
        5.8357592,
        13.175544
      ],
      "grossProfit": [
        0.075723,
        0.0294674,
        1.23873482,
        4.8975081,
        10.4643502
      ],
      "ebitda": [
        -0.2905435,
        -0.626631,
        -0.96692028,
        0.4990892,
        1.7364575
      ],
      "ebit": [
        -0.2932465,
        -0.6467643,
        -1.08869028,
        0.0006659,
        0.8695162
      ],
      "pat": [
        -0.0565767,
        -0.1860366,
        -0.54787688,
        0.0467311,
        1.4619175
      ]
    },
    "ratios": {
      "ebitdaMargin": [
        -383.69,
        -169.28,
        -60.01,
        8.55,
        13.18
      ],
      "patMargin": [
        -74.72,
        -50.26,
        -34.01,
        0.8,
        11.1
      ],
      "receivableDays": [
        8.53,
        153.37,
        117.13,
        110.52,
        117.52
      ],
      "inventoryDays": [
        0,
        74.09,
        251.67,
        34.52,
        19.06
      ],
      "payableDays": [
        69.73,
        75.09,
        84.77,
        87.97,
        108.39
      ],
      "currentRatio": [
        10.18,
        1.93,
        4.37,
        2.13,
        2.41
      ]
    }
  },
  "manufacturing-b-model": {
    "name": "Manufacturing Company B",
    "years": [
      "FY21",
      "FY22",
      "FY23",
      "FY24",
      "FY25"
    ],
    "pnl": {
      "revenue": [
        0.78595,
        1.4875,
        2.9835043,
        2.4622246,
        1.4329607
      ],
      "ebitda": [
        -0.15333,
        -0.73391,
        0.0000565,
        0.0930813,
        -0.5202108
      ],
      "pat": [
        -0.2296,
        -0.75732,
        -0.0376705,
        0.0520775,
        -0.5474579
      ]
    },
    "ratios": {
      "ebitdaMargin": [
        -19.51,
        -49.34,
        0.002,
        3.78,
        -36.3
      ],
      "patMargin": [
        -29.21,
        -50.91,
        -1.26,
        2.12,
        -38.2
      ],
      "receivableDays": [
        1631.14,
        758.57,
        213.11,
        78.12,
        30.65
      ],
      "inventoryDays": [
        858.54,
        511.82,
        752.87,
        4342.13,
        1732.58
      ],
      "payableDays": [
        1371.42,
        635.47,
        322.82,
        829.87,
        1961.43
      ],
      "currentRatio": [
        3.36,
        2.44,
        3.13,
        1.83,
        1.65
      ]
    }
  }
};
