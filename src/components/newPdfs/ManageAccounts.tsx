import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const ManagementAccounts = () => {
  const [isEditable, setIsEditable] = useState(false);

  const initialValues = {
    // Cover Page
    cover: {
      header: "InfraCredit\nSecuring Infrastructure Finance",
      title: "MANAGEMENT REPORT\nSEPTEMBER2024",
    },

    // Financial Highlights (Page 2)
    financialHighlights: {
      statementOfProfitOrLoss: [
        "Gross revenue N18.79 billion, compared to N8.33 billion in 2023 September (126% YOY growth) and budget of N16.97 billion for the period ended 30th September 2024.",
        "Net total income: N11.65 billion (excluding exchange differences) compared to N5.33 billion in 2023 September (119% YOY growth).",
        // ... other profit/loss statements
      ],
      statementOfFinancialPosition: [
        "Total assets: N323.17 billion as at 30th September 2024 compared to N143.00 billion in September 2023 representing 126% YOY growth.",
        "Investment securities: N278.88 billion (excluding bank balances of N33.23 billion) compared to N131.24 billion in September 2023 representing 112% YOY growth.",
        // ... other financial position statements
      ],
    },

    // Financial Report (Page 3)
    financialReport: {
      overview:
        "As at 30th September 2024, InfraCredit generated gross revenue of N18.79 billion representing 11% of the budgeted gross revenue of N16.97 billion for the period.",
      figures: [
        {
          title:
            "Gross revenue Vs. profit or loss (excluding net exchange gains)",
          values: ["N18,792 m", "N7,515 m"],
        },
        {
          title: "Gross revenue composition",
          values: ["Guarantee fees: N3,789 m", "Investment income: N15,003 m"],
        },
      ],
    },

    // Profit or Loss Variance Analysis (Page 5)
    varianceAnalysis: {
      table: [
        {
          metric: "Gross revenue",
          actual2024: "18,792",
          budget2024: "16,966",
          // ... other columns
        },
        // ... other rows
      ],
    },

    // Statement of Financial Position (Page 7)
    financialPosition: {
      table: [
        {
          item: "Cash and cash equivalents",
          sept24: "33,233",
          sept23: "2,101",
          growth: "1481%",
        },
        // ... other rows
      ],
    },

    // OPEX Analysis (Page 8)
    opexAnalysis: {
      table: [
        {
          detail: "Staff costs",
          actualYTD: "2,410",
          annualBudget: "2,837",
          // ... other columns
        },
        // ... other rows
      ],
    },

    // Financial Ratios (Page 9-10)
    financialRatios: {
      table: [
        {
          ratio: "Guarantee portfolio growth",
          ytdActual: "9%",
          ytdBudget: "37%",
          // ... other columns
        },
        // ... other rows
      ],
      analysis: [
        "Actual debt to capital ratio was 42.7% as against budget of 37.5% for the period ended 30th September 2024.",
        // ... other analysis points
      ],
    },

    // Financial Projections (Page 11-12)
    financialProjections: {
      profitOrLoss: [
        {
          metric: "Gross revenue",
          projection: "26,578",
          budget: "24,332",
          // ... other columns
        },
        // ... other rows
      ],
      opexProjection: [
        {
          detail: "Staff costs",
          projection: "3,557",
          budget: "2,837",
          // ... other columns
        },
        // ... other rows
      ],
    },

    // Investment Portfolio (Page 13)
    investmentPortfolio: {
      description:
        "As at 30th September 2024, InfraCredit held a total investment portfolio of N278.88 billion...",
      composition: [
        { name: "FGN Eurobonds", value: "N245.98 billion", percentage: "88%" },
        // ... other items
      ],
    },

    // Guarantees Pipeline (Page 14-17)
    guaranteesPipeline: {
      categories: [
        {
          name: "Green (≥80%)",
          amount: "N153.10 billion",
          percentage: "20%",
          criteria: [
            "Transaction has obtained Credit Committee approval with Fee Letter signed",
            // ... other criteria
          ],
        },
        // ... other categories
      ],
      dealsTable: [
        {
          sn: 1,
          deal: "GLNG",
          sector: "Gas-to-Power",
          size: "4.00",
        },
        // ... other deals
      ],
    },

    // Footer (Page 18)
    footer:
      "www.infracredit.ng\nlinkedin.com/company/infraCredit\n@InfraCredit",
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    setIsEditable(false);
  };

  const renderEditableField = (fieldName, value, isTextArea = false) => {
    const style = {
      width: "100%",
      boxSizing: "border-box",
      padding: "8px",
      margin: "4px 0",
      border: isEditable ? "1px solid #ddd" : "none",
      borderRadius: "4px",
      backgroundColor: isEditable ? "#fff" : "transparent",
      fontFamily: "inherit",
      fontSize: "inherit",
    };

    if (isEditable) {
      return (
        <Field
          as={isTextArea ? "textarea" : "input"}
          name={fieldName}
          style={{ ...style, resize: isTextArea ? "vertical" : "none" }}
        />
      );
    }
    return <div style={{ ...style, whiteSpace: "pre-wrap" }}>{value}</div>;
  };

  const renderTable = (tableData, fieldPrefix) => {
    return (
      <table
        style={{ width: "100%", borderCollapse: "collapse", margin: "15px 0" }}
      >
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((header) => (
              <th
                key={header}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {renderEditableField(
                  `${fieldPrefix}.headers.${header}`,
                  header,
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <FieldArray name={`${fieldPrefix}.rows`}>
            {() =>
              tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(row).map(([key, value]) => (
                    <td
                      key={key}
                      style={{ border: "1px solid #ddd", padding: "10px" }}
                    >
                      {renderEditableField(
                        `${fieldPrefix}.rows.${rowIndex}.${key}`,
                        value,
                      )}
                    </td>
                  ))}
                </tr>
              ))
            }
          </FieldArray>
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <button
        onClick={() => setIsEditable(!isEditable)}
        style={{
          padding: "10px 15px",
          backgroundColor: isEditable ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {isEditable ? "Cancel Editing" : "Edit Report"}
      </button>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            {/* Cover Page */}
            <div
              style={{
                padding: "40px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {renderEditableField("cover.header", values.cover.header, true)}
              </h1>
              <div style={{ fontSize: "18px", whiteSpace: "pre-wrap" }}>
                {renderEditableField("cover.title", values.cover.title, true)}
              </div>
            </div>

            {/* Financial Highlights (Page 2) */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
              }}
            >
              <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {renderEditableField(
                  "financialHighlights.title",
                  "Financial Highlights as at 30th September 2024",
                )}
              </h1>

              <h2 style={{ fontSize: "18px", marginTop: "20px" }}>
                {renderEditableField(
                  "financialHighlights.profitOrLossTitle",
                  "Statement of profit or loss",
                )}
              </h2>

              <FieldArray name="financialHighlights.statementOfProfitOrLoss">
                {() => (
                  <ul style={{ paddingLeft: "20px" }}>
                    {values.financialHighlights.statementOfProfitOrLoss.map(
                      (item, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                          {renderEditableField(
                            `financialHighlights.statementOfProfitOrLoss.${index}`,
                            item,
                            true,
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </FieldArray>

              <h2 style={{ fontSize: "18px", marginTop: "20px" }}>
                {renderEditableField(
                  "financialHighlights.financialPositionTitle",
                  "Statement of financial position",
                )}
              </h2>

              <FieldArray name="financialHighlights.statementOfFinancialPosition">
                {() => (
                  <ul style={{ paddingLeft: "20px" }}>
                    {values.financialHighlights.statementOfFinancialPosition.map(
                      (item, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                          {renderEditableField(
                            `financialHighlights.statementOfFinancialPosition.${index}`,
                            item,
                            true,
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </FieldArray>

              <div
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  fontSize: "12px",
                }}
              >
                {renderEditableField(
                  "page2Footer",
                  "2 MANAGEMENT REPORT\nSEPTEMBER 2024",
                  true,
                )}
              </div>
            </div>

            {/* Financial Report (Page 3) */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
              }}
            >
              <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {renderEditableField(
                  "financialReport.title",
                  "Financial Report for the Period ended 30th September 2024",
                )}
              </h1>

              <p style={{ marginBottom: "15px" }}>
                {renderEditableField(
                  "financialReport.overview",
                  values.financialReport.overview,
                  true,
                )}
              </p>

              <FieldArray name="financialReport.figures">
                {() =>
                  values.financialReport.figures.map((figure, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
                        {renderEditableField(
                          `financialReport.figures.${index}.title`,
                          figure.title,
                        )}
                      </h3>
                      <FieldArray
                        name={`financialReport.figures.${index}.values`}
                      >
                        {() => (
                          <ul style={{ paddingLeft: "20px" }}>
                            {figure.values.map((value, valueIndex) => (
                              <li key={valueIndex}>
                                {renderEditableField(
                                  `financialReport.figures.${index}.values.${valueIndex}`,
                                  value,
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </FieldArray>
                    </div>
                  ))
                }
              </FieldArray>

              <div
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  fontSize: "12px",
                }}
              >
                {renderEditableField(
                  "page3Footer",
                  "InfraCredit 3 MANAGEMENT REPORT SEPTEMBER 2024",
                  true,
                )}
              </div>
            </div>

            {/* Continue with other pages following the same pattern */}

            {/* Footer Page (Page 18) */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <div style={{ whiteSpace: "pre-wrap" }}>
                {renderEditableField("footer", values.footer, true)}
              </div>
            </div>

            {isEditable && (
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <button
                  type="submit"
                  style={{
                    padding: "12px 25px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Save Changes
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ManagementAccounts;
