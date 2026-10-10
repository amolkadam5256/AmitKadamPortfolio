export const valuationDetails = {
  "manufacturing-a-model": {
    "enterpriseValueCr": 40.24348107,
    "equityValueCr": 38.74095277,
    "waccPct": 18.58904724,
    "terminalGrowthPct": 5,
    "fcffCr": [
      -1.830653,
      -0.706819,
      0.976832,
      3.783103,
      7.901981,
      11.608541
    ],
    "scenarios": [{"name":"Bear","equityCr":20.1914323767,"assumptions":"WACC 20%, growth 3%, FCFF ×0.70"},{"name":"Base","equityCr":38.7409527692,"assumptions":"Model base case"},{"name":"Bull","equityCr":76.0343701893,"assumptions":"WACC 16%, growth 6%, FCFF ×1.30"}],
    "sensitivity": {
      "wacc": [
        14,
        16,
        17,
        18,
        19,
        20,
        22
      ],
      "growth": [
        3,
        4,
        5,
        6,
        7
      ],
      "evCr": [
        [
          59.66,
          46.89,
          41.97,
          37.77,
          34.14,
          30.99,
          25.8
        ],
        [
          65.14,
          50.43,
          44.88,
          40.19,
          36.17,
          32.71,
          27.06
        ],
        [
          71.84,
          54.62,
          48.28,
          42.97,
          38.49,
          34.65,
          28.46
        ],
        [
          80.22,
          59.64,
          52.29,
          46.23,
          41.16,
          36.87,
          30.04
        ],
        [
          90.98,
          65.78,
          57.1,
          50.07,
          44.28,
          39.44,
          31.83
        ]
      ]
    }
  }
};
