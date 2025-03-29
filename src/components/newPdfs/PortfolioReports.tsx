import React from "react";
import { useFormik } from "formik";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const PortfolioReport = () => {
  const formik = useFormik({
    initialValues: {
      title: "InfraCredit",
      subtitle: "Securing Infrastructure Finance",
      reportTitle: "PORTFOLIO REPORT",
      year: "2024",
      issueDate: "30TH SEPTEMBER 2024",

      portfolioSummary: {
        counterparties: 19,
        sectors: 9,
        exposure: "NGN 209.08",
        sectorDistribution: [
          { sector: "Off-grid power", amount: "N18.46", percentage: "8.8%" },
          { sector: "On-grid power", amount: "N23.86", percentage: "11.4%" },
          { sector: "Transportation", amount: "N34.00", percentage: "16.3%" },
          { sector: "Logistics", amount: "N53.00", percentage: "25.3%" },
          { sector: "Gas-to-Power", amount: "N16.09", percentage: "7.7%" },
          {
            sector: "Gas-to-Clean Cooking",
            amount: "N15.00",
            percentage: "7.2%",
          },
          { sector: "Manufacturing", amount: "N19.58", percentage: "9.4%" },
          { sector: "ICT/Telecoms", amount: "N10.59", percentage: "5.1%" },
          { sector: "Renewable Energy", amount: "N3.37", percentage: "1.6%" },
          { sector: "Green Housing", amount: "N5.13", percentage: "2.5%" },
          { sector: "Healthcare", amount: "N10.00", percentage: "4.8%" },
        ],
        ratingDistribution: [
          { rating: "A-", amount: "N80.44", percentage: "38.5%" },
          { rating: "BBB+", amount: "N32.57", percentage: "15.6%" },
          { rating: "BBB", amount: "N64.01", percentage: "30.6%" },
          { rating: "BBB-", amount: "N10.59", percentage: "5.1%" },
          { rating: "BB+", amount: "N21.47", percentage: "10.3%" },
        ],
        portfolioAtGlance: {
          aggregateSize: "NGN 209.08bn",
          weightedAverageTenor: "8.54YEARS (102.50Months)",
          averageRating: "BBB",
          performance: "Performing",
          capitalization: "$ 196m",
          grossLeverage: "0.69x",
          reguarantees: "NGN 6514bn",
          netLeverage: "0.45x",
          targetLeverage: "1.4x – 2.5x",
          grossCapitalLeverage: "794x",
          netCapitalLeverage: "5.21x",
          netLeverageExcluding: "2.37x",
          stressAssets: "0.07x",
          watchlistAssets: "0.18x",
        },
      },

      keyPortfolioIndices: [
        {
          name: "Viathan Group (Viathan)",
          principal: "6.72",
          maturity: "Dec-27",
          currentRating: "BB+",
          ratingAgency: "Internal",
          reserveRequired: "1.23",
          reserveActual: "0.00*",
          securityCoverageRequired: "1.25",
          securityCoverageActual: "2.91",
          seniorDebtCovenant: "2.5",
          seniorDebtActual: "2.1",
          dscrCovenant: "1.2",
          dscrActual: "1.2",
          debtToEquityCovenant: "NA",
          debtToEquityActual: "NA",
        },
        // More counterparties would be added here
      ],

      capitalAdequacy: {
        summary: [
          "InfraCredit total guarantee portfolio stand at NGN 209.08billion",
          "All previous coupons have been funded via operating cash flows.",
          "Macros instability have continued to drive up costs and despite the essentiality of services driving revenues and resilience, consumer purchasing power continues to shrink.",
          "However, for the more stressed assets (like TSL) we may see a potential call on the guarantee in the next 12 months unless they are able to raise some equity to plug the working capital gap.",
          "Outlook is considered stable",
        ],
        keyUpdates: [
          {
            company: "Viathan Funding Plc (Viathan)",
            updates: [
              "Total receivables expected from Lagos State Government and Qgun State Government stand at a combined NGN 3.4bn",
              "3 Engines IPL1 GG4, IPL1 GG3 and IPL2 GG1, have been partially overhauled and back in operation.",
              "The board credit committee has approved an additional NGN 15bn limit to provide a guarantee to the Bank of Industry (BOI) for new facilities to Viathan.",
            ],
          },
          // More company updates would be added here
        ],
      },

      portfolioOutlook: {
        companies: [
          {
            name: "Viathan Funding Plc",
            rating: "BB+",
            exposure: "6,719,727,087",
            outlook: [
              "Watchlist (Stressed)",
              "Watchlist (Stressed)",
              "Watchlist (Stressed)",
              "Watchlist (Stressed)",
              "Watchlist (Stressed)",
            ],
          },
          // More companies would be added here
        ],
        pressurePoints: [
          "Viathan: The refinance of the Bond is key to sustainability.",
          "VI Power: The close out of the new NGN 10bn bridge is key to operationalizing the LC.",
          "TSL: The payment account is funded for the coupon payment falling due October 6th 2024.",
        ],
      },
    },
    onSubmit: (values) => {
      console.log("Form data submitted", values);
      // Here you would typically send the data to an API
    },
  });

  // Data for charts
  const sectorData = formik.values.portfolioSummary.sectorDistribution.map(
    (item) => ({
      name: item.sector,
      value: parseFloat(item.amount.replace("N", "")),
    }),
  );

  const ratingData = formik.values.portfolioSummary.ratingDistribution.map(
    (item) => ({
      name: item.rating,
      value: parseFloat(item.amount.replace("N", "")),
    }),
  );

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  return (
    <div
      className="portfolio-report"
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        {/* Header Section */}
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              style={{
                border: "1px solid #ddd",
                padding: "5px",
                width: "300px",
              }}
            />
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            <input
              type="text"
              name="subtitle"
              value={formik.values.subtitle}
              onChange={formik.handleChange}
              style={{
                border: "1px solid #ddd",
                padding: "5px",
                width: "400px",
              }}
            />
          </p>
          <div
            style={{
              borderTop: "1px solid #000",
              borderBottom: "1px solid #000",
              padding: "10px 0",
              margin: "20px 0",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                letterSpacing: "5px",
              }}
            >
              <input
                type="text"
                name="reportTitle"
                value={formik.values.reportTitle}
                onChange={formik.handleChange}
                style={{
                  border: "1px solid #ddd",
                  padding: "5px",
                  width: "300px",
                  textAlign: "center",
                }}
              />
            </h2>
          </div>
          <h3 style={{ fontSize: "20px" }}>
            <input
              type="text"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              style={{
                border: "1px solid #ddd",
                padding: "5px",
                width: "100px",
                textAlign: "center",
              }}
            />
          </h3>
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            <strong>ISSUE DATE</strong>
            <br />
            <input
              type="text"
              name="issueDate"
              value={formik.values.issueDate}
              onChange={formik.handleChange}
              style={{
                border: "1px solid #ddd",
                padding: "5px",
                width: "200px",
                textAlign: "center",
              }}
            />
          </p>
        </header>

        {/* Portfolio Summary Section */}
        <section
          style={{
            marginBottom: "30px",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            SECTION I PORTFOLIO SUMMARY
          </h2>
          <p style={{ marginBottom: "15px" }}>
            The Guarantee Portfolio covered in this report for the period ended
            30th September 2024 consists of
            <input
              type="number"
              name="portfolioSummary.counterparties"
              value={formik.values.portfolioSummary.counterparties}
              onChange={formik.handleChange}
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            counterparties, distributed across
            <input
              type="number"
              name="portfolioSummary.sectors"
              value={formik.values.portfolioSummary.sectors}
              onChange={formik.handleChange}
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            sectors. These amount to a combined exposure of
            <input
              type="text"
              name="portfolioSummary.exposure"
              value={formik.values.portfolioSummary.exposure}
              onChange={formik.handleChange}
              style={{
                width: "100px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            billion.
          </p>

          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            PORTFOLIO SNAPSHOT
          </h3>
          <p>Portfolio size (N209.08bn)</p>

          <div style={{ display: "flex", gap: "30px", margin: "20px 0" }}>
            <div style={{ flex: 1 }}>
              <h4>Sector Distribution</h4>
              <PieChart width={400} height={400}>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {sectorData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div style={{ marginTop: "20px" }}>
                {formik.values.portfolioSummary.sectorDistribution.map(
                  (item, index) => (
                    <div key={index} style={{ marginBottom: "5px" }}>
                      <input
                        type="text"
                        name={`portfolioSummary.sectorDistribution[${index}].sector`}
                        value={item.sector}
                        onChange={formik.handleChange}
                        style={{
                          width: "200px",
                          border: "1px solid #ddd",
                          padding: "3px",
                          marginRight: "5px",
                        }}
                      />
                      <input
                        type="text"
                        name={`portfolioSummary.sectorDistribution[${index}].amount`}
                        value={item.amount}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                          marginRight: "5px",
                        }}
                      />
                      <input
                        type="text"
                        name={`portfolioSummary.sectorDistribution[${index}].percentage`}
                        value={item.percentage}
                        onChange={formik.handleChange}
                        style={{
                          width: "50px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </div>
                  ),
                )}
                <button
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "portfolioSummary.sectorDistribution",
                      [
                        ...formik.values.portfolioSummary.sectorDistribution,
                        { sector: "", amount: "", percentage: "" },
                      ],
                    );
                  }}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Add Sector
                </button>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <h4>Rating Distribution</h4>
              <PieChart width={400} height={400}>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {ratingData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div style={{ marginTop: "20px" }}>
                {formik.values.portfolioSummary.ratingDistribution.map(
                  (item, index) => (
                    <div key={index} style={{ marginBottom: "5px" }}>
                      <input
                        type="text"
                        name={`portfolioSummary.ratingDistribution[${index}].rating`}
                        value={item.rating}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                          marginRight: "5px",
                        }}
                      />
                      <input
                        type="text"
                        name={`portfolioSummary.ratingDistribution[${index}].amount`}
                        value={item.amount}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                          marginRight: "5px",
                        }}
                      />
                      <input
                        type="text"
                        name={`portfolioSummary.ratingDistribution[${index}].percentage`}
                        value={item.percentage}
                        onChange={formik.handleChange}
                        style={{
                          width: "50px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </div>
                  ),
                )}
                <button
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "portfolioSummary.ratingDistribution",
                      [
                        ...formik.values.portfolioSummary.ratingDistribution,
                        { rating: "", amount: "", percentage: "" },
                      ],
                    );
                  }}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Add Rating
                </button>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            PORTFOLIO AT A GLANCE
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
            }}
          >
            <div>
              <label>Aggregate Portfolio size: </label>
              <input
                type="text"
                name="portfolioSummary.portfolioAtGlance.aggregateSize"
                value={
                  formik.values.portfolioSummary.portfolioAtGlance.aggregateSize
                }
                onChange={formik.handleChange}
                style={{
                  width: "150px",
                  border: "1px solid #ddd",
                  padding: "3px",
                }}
              />
            </div>
            <div>
              <label>Weighted average tenor (principal): </label>
              <input
                type="text"
                name="portfolioSummary.portfolioAtGlance.weightedAverageTenor"
                value={
                  formik.values.portfolioSummary.portfolioAtGlance
                    .weightedAverageTenor
                }
                onChange={formik.handleChange}
                style={{
                  width: "150px",
                  border: "1px solid #ddd",
                  padding: "3px",
                }}
              />
            </div>
            <div>
              <label>Average Portfolio Credit Rating: </label>
              <input
                type="text"
                name="portfolioSummary.portfolioAtGlance.averageRating"
                value={
                  formik.values.portfolioSummary.portfolioAtGlance.averageRating
                }
                onChange={formik.handleChange}
                style={{
                  width: "50px",
                  border: "1px solid #ddd",
                  padding: "3px",
                }}
              />
            </div>
            <div>
              <label>Portfolio Performance: </label>
              <input
                type="text"
                name="portfolioSummary.portfolioAtGlance.performance"
                value={
                  formik.values.portfolioSummary.portfolioAtGlance.performance
                }
                onChange={formik.handleChange}
                style={{
                  width: "100px",
                  border: "1px solid #ddd",
                  padding: "3px",
                }}
              />
            </div>
            {/* Add more portfolio at glance fields as needed */}
          </div>
        </section>

        {/* Key Portfolio Indices Section */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            SECTION II KEY PORTFOLIO INDICES
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Counterparty
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Principal (NGN'Billion)
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Maturity Date
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Current Rating
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Rating Agency
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reserve Required
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reserve Actual
                  </th>
                </tr>
              </thead>
              <tbody>
                {formik.values.keyPortfolioIndices.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].name`}
                        value={item.name}
                        onChange={formik.handleChange}
                        style={{
                          width: "150px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].principal`}
                        value={item.principal}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].maturity`}
                        value={item.maturity}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].currentRating`}
                        value={item.currentRating}
                        onChange={formik.handleChange}
                        style={{
                          width: "50px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].ratingAgency`}
                        value={item.ratingAgency}
                        onChange={formik.handleChange}
                        style={{
                          width: "100px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].reserveRequired`}
                        value={item.reserveRequired}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="text"
                        name={`keyPortfolioIndices[${index}].reserveActual`}
                        value={item.reserveActual}
                        onChange={formik.handleChange}
                        style={{
                          width: "80px",
                          border: "1px solid #ddd",
                          padding: "3px",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={() => {
              formik.setFieldValue("keyPortfolioIndices", [
                ...formik.values.keyPortfolioIndices,
                {
                  name: "",
                  principal: "",
                  maturity: "",
                  currentRating: "",
                  ratingAgency: "",
                  reserveRequired: "",
                  reserveActual: "",
                  securityCoverageRequired: "",
                  securityCoverageActual: "",
                  seniorDebtCovenant: "",
                  seniorDebtActual: "",
                  dscrCovenant: "",
                  dscrActual: "",
                  debtToEquityCovenant: "",
                  debtToEquityActual: "",
                },
              ]);
            }}
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Counterparty
          </button>
        </section>

        {/* Capital Adequacy Section */}
        <section
          style={{
            marginBottom: "30px",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            CAPITAL ADEQUACY
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>SUMMARY</h3>
            {formik.values.capitalAdequacy.summary.map((item, index) => (
              <div key={index} style={{ marginBottom: "8px" }}>
                <input
                  type="text"
                  name={`capitalAdequacy.summary[${index}]`}
                  value={item}
                  onChange={formik.handleChange}
                  style={{
                    width: "90%",
                    border: "1px solid #ddd",
                    padding: "5px",
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                formik.setFieldValue("capitalAdequacy.summary", [
                  ...formik.values.capitalAdequacy.summary,
                  "",
                ]);
              }}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Summary Point
            </button>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              KEY PORTFOLIO UPDATES
            </h3>
            {formik.values.capitalAdequacy.keyUpdates.map(
              (company, companyIndex) => (
                <div key={companyIndex} style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontSize: "16px", marginBottom: "5px" }}>
                    <input
                      type="text"
                      name={`capitalAdequacy.keyUpdates[${companyIndex}].company`}
                      value={company.company}
                      onChange={formik.handleChange}
                      style={{
                        width: "400px",
                        border: "1px solid #ddd",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    />
                  </h4>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    {company.updates.map((update, updateIndex) => (
                      <li key={updateIndex} style={{ marginBottom: "5px" }}>
                        <input
                          type="text"
                          name={`capitalAdequacy.keyUpdates[${companyIndex}].updates[${updateIndex}]`}
                          value={update}
                          onChange={formik.handleChange}
                          style={{
                            width: "90%",
                            border: "1px solid #ddd",
                            padding: "5px",
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      const newUpdates = [
                        ...formik.values.capitalAdequacy.keyUpdates,
                      ];
                      newUpdates[companyIndex].updates.push("");
                      formik.setFieldValue(
                        "capitalAdequacy.keyUpdates",
                        newUpdates,
                      );
                    }}
                    style={{
                      marginTop: "5px",
                      padding: "5px 10px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Add Update
                  </button>
                </div>
              ),
            )}
            <button
              type="button"
              onClick={() => {
                formik.setFieldValue("capitalAdequacy.keyUpdates", [
                  ...formik.values.capitalAdequacy.keyUpdates,
                  {
                    company: "",
                    updates: [""],
                  },
                ]);
              }}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Company Update
            </button>
          </div>
        </section>

        {/* Portfolio Outlook Section */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            PORTFOLIO OUTLOOK ASSESSMENT
          </h2>

          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Counterparty
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Rating
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Exposure (NGN)
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Sep-24
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Dec-24
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Mar-25
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Jun-25
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Sep-25
                  </th>
                </tr>
              </thead>
              <tbody>
                {formik.values.portfolioOutlook.companies.map(
                  (company, index) => (
                    <tr key={index}>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <input
                          type="text"
                          name={`portfolioOutlook.companies[${index}].name`}
                          value={company.name}
                          onChange={formik.handleChange}
                          style={{
                            width: "150px",
                            border: "1px solid #ddd",
                            padding: "3px",
                          }}
                        />
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <input
                          type="text"
                          name={`portfolioOutlook.companies[${index}].rating`}
                          value={company.rating}
                          onChange={formik.handleChange}
                          style={{
                            width: "50px",
                            border: "1px solid #ddd",
                            padding: "3px",
                          }}
                        />
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <input
                          type="text"
                          name={`portfolioOutlook.companies[${index}].exposure`}
                          value={company.exposure}
                          onChange={formik.handleChange}
                          style={{
                            width: "120px",
                            border: "1px solid #ddd",
                            padding: "3px",
                          }}
                        />
                      </td>
                      {company.outlook.map((outlookItem, outlookIndex) => (
                        <td
                          key={outlookIndex}
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          <input
                            type="text"
                            name={`portfolioOutlook.companies[${index}].outlook[${outlookIndex}]`}
                            value={outlookItem}
                            onChange={formik.handleChange}
                            style={{
                              width: "120px",
                              border: "1px solid #ddd",
                              padding: "3px",
                            }}
                          />
                        </td>
                      ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={() => {
              formik.setFieldValue("portfolioOutlook.companies", [
                ...formik.values.portfolioOutlook.companies,
                {
                  name: "",
                  rating: "",
                  exposure: "",
                  outlook: ["", "", "", "", ""],
                },
              ]);
            }}
            style={{
              marginBottom: "20px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Company
          </button>

          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Key Pressure Points
            </h3>
            {formik.values.portfolioOutlook.pressurePoints.map(
              (point, index) => (
                <div key={index} style={{ marginBottom: "8px" }}>
                  <input
                    type="text"
                    name={`portfolioOutlook.pressurePoints[${index}]`}
                    value={point}
                    onChange={formik.handleChange}
                    style={{
                      width: "90%",
                      border: "1px solid #ddd",
                      padding: "5px",
                    }}
                  />
                </div>
              ),
            )}
            <button
              type="button"
              onClick={() => {
                formik.setFieldValue("portfolioOutlook.pressurePoints", [
                  ...formik.values.portfolioOutlook.pressurePoints,
                  "",
                ]);
              }}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Pressure Point
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            marginTop: "50px",
            padding: "20px",
            borderTop: "1px solid #ddd",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
            InfraCredit Contact
          </h3>
          <p style={{ marginBottom: "5px" }}>info@infracredit.ng</p>
          <p style={{ marginBottom: "5px" }}>www.infracredit.ng</p>
          <p style={{ marginBottom: "5px" }}>
            linkedin.com/company/InfraCredit
          </p>
          <p style={{ marginBottom: "5px" }}>@InfraCredit</p>
          <p style={{ marginBottom: "5px" }}>vimeo.com/InfraCredit</p>
        </footer>

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          >
            Save Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioReport;
