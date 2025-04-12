/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const PeopleReport = () => {
  // State for all editable data
  const [reportData, setReportData] = useState({
    title: "People Report",
    date: "October 2024",
    investors: [
      "Hapris Downsight Investments Authority",
      "GuarantCo",
      "KFW",
      "Alice Finance Corporation",
      "Infra",
      "AFRICA",
    ],
    workforce: {
      ftes: 36,
      starAcademy: 19,
      contractStaff: 12,
      total: 67,
    },
    hiringData: {
      quarterly: [
        { quarter: "Q1 2024", hires: 0 },
        { quarter: "Q2 2024", hires: 3 },
        { quarter: "Q3 2024", hires: 2 },
        { quarter: "Q4 2024", hires: 0 },
      ],
      positions: [
        { quarter: "Q1 2024", positions: "No new hires" },
        {
          quarter: "Q2 2024",
          positions:
            "Human Resources Manager, Head Environmental, Social and Governance (ESG) and Clean Energy Project Manager",
        },
        {
          quarter: "Q3 2024",
          positions:
            "Senior Associate O&S (Clean Energy) and Development Impact Manager",
        },
        { quarter: "Q4 2024", positions: "-" },
      ],
    },
    exits: [
      { quarter: "Q1 2024", exits: 1 },
      { quarter: "Q2 2024", exits: 1 },
      { quarter: "Q3 2024", exits: 3 },
      { quarter: "Q4 2024", exits: 0 },
    ],
    genderDistribution: {
      overall: { male: 49, female: 51 },
      ftes: { male: 50, female: 50 },
      junior: { male: 42, female: 58 },
      senior: { male: 64, female: 36 },
      seniorFtes: { male: 58, female: 42 },
    },
    departments: [
      "MD/CEO",
      "Legal",
      "Procurement",
      "Information Technology",
      "Chief Operating Officer",
      "Human Resources",
      "Strategy and New Products",
      "Technical Consultants",
      "Origination and Structuring",
      "Finance",
      "Deal Support Analysis",
      "Corporate Communications",
      "Credit Risk and Portfolio Management",
      "Administration",
      "Knowledge Management",
      "ESG & Impact",
    ],
    policyReview: {
      salaryAdjustment:
        "A company wide salary adjustment was approved by REMCO based on the outcome of the Remuneration Survey; it was implemented July 2024",
      surveyFeedback:
        "Internal survey/focus group sessions conducted to obtain feedback from employees regarding policy review on salary freeze and COLA implementation until 2027. Unanimous feedback suggests employees will be immediately disincentivized and resignations may occur as a result. Management recommends that REMCO reconsiders the proposed amendment",
    },
    performanceManagement: [
      "Developing KPIs and Performance Management – 2nd training session concluded for unit and department heads in August 2024",
      "360 Degree Framework to be presented by PWC.",
      "Awaiting feedback on Culture Survey draft from REMCO",
      "Continuous process improvement for SoPs across the Organisation. Ongoing discussion with Unit Heads regarding applicable measurement",
    ],
    employeeRelations: {
      security: "No security breach in Q3 2024",
      disciplinary: "1 disciplinary case in Q3 2024",
      grievance: "No grievance cases in Q3 2024",
      retreat:
        "2024 Staff Retreat – This was successfully done in July 2024 with the introduction of culture champions to continue to drive our values and implement initiatives that aid our culture transformation",
    },
    knowledgeManagement: {
      eLearning:
        "The Knowledge Management team remains committed to institutionalizing knowledge across the organization. Over the period we commenced the E-learning course conversion project, starting with the Credit Paper Writing module.",
      speakingEngagements:
        "In Q3, as part of our staff development activities, several employees participated in 11 speaking engagements at various industry events.",
      certifications:
        "An employee earned their EDGE certification, making them our internal EDGE Expert. Several team members enrolled in certification courses.",
      mentorship:
        "The Mentor4Growth program continues to run smoothly, with regular sessions held between mentors and mentees. 95% rating the program as highly effective and 5% as effective.",
      starAcademy:
        "Following the successful completion of Cohort 4, all 10 interns (6 females and 4 males) were absorbed into the organization and successfully transitioned to Analyst roles.",
      knowledgeExchange:
        "We organized a two-day session for the Securities and Exchange Commission (SEC) on Innovative Financing Products for Greenfield and Brownfield Projects.",
    },
  });

  // Handler for editing text fields
  const handleTextChange = (section:any, field:string, value:any) => {
    setReportData((prev) => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [field]: value,
      },
    }));
  };

  // Handler for editing numeric values
  const handleNumberChange = (section:any, field:string, value:any) => {
    const numValue = parseInt(value) || 0;
    setReportData((prev) => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [field]: numValue,
      },
    }));
  };

  // Handler for editing array items
  // const handleArrayItemChange = (section, index, value) => {
  //   setReportData((prev) => {
  //     const newArray = [...prev[section]];
  //     newArray[index] = value;
  //     return {
  //       ...prev,
  //       [section]: newArray,
  //     };
  //   });
  // };

  // Data for charts
  const genderData = [
    { name: "Male", value: reportData.genderDistribution.overall.male },
    { name: "Female", value: reportData.genderDistribution.overall.female },
  ];

  const fteGenderData = [
    { name: "Male", value: reportData.genderDistribution.ftes.male },
    { name: "Female", value: reportData.genderDistribution.ftes.female },
  ];

  const juniorGenderData = [
    { name: "Male", value: reportData.genderDistribution.junior.male },
    { name: "Female", value: reportData.genderDistribution.junior.female },
  ];

  const seniorGenderData = [
    { name: "Male", value: reportData.genderDistribution.senior.male },
    { name: "Female", value: reportData.genderDistribution.senior.female },
  ];

  const hiringTrendData = reportData.hiringData.quarterly.map((item) => ({
    name: item.quarter,
    hires: item.hires,
  }));

  const exitTrendData = reportData.exits.map((item) => ({
    name: item.quarter,
    exits: item.exits,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div
      className="people-report"
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "30px" }} >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          <input
            type="text"
            value={reportData.title}
            onChange={(e) =>
              setReportData({ ...reportData, title: e.target.value })
            }
            style={{ border: "1px solid #ddd", padding: "5px", width: "300px" }}
          />
        </h1>
        <h2 style={{ fontSize: "20px", color: "#555" }}>
          <input
            type="text"
            value={reportData.date}
            onChange={(e) =>
              setReportData({ ...reportData, date: e.target.value })
            }
            style={{ border: "1px solid #ddd", padding: "5px", width: "200px" }}
          />
        </h2>
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <p>
            <strong>InfraCredit is capitalised by</strong>
          </p>
          <ul>
            {reportData.investors.map((investor, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={investor}
                  onChange={(e) => {
                    const newInvestors = [...reportData.investors];
                    newInvestors[index] = e.target.value;
                    setReportData({ ...reportData, investors: newInvestors });
                  }}
                  style={{
                    border: "1px solid #ddd",
                    padding: "5px",
                    width: "400px",
                    margin: "5px 0",
                  }}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={() =>
              setReportData({
                ...reportData,
                investors: [...reportData.investors, ""],
              })
            }
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Investor
          </button>
        </div>
      </header>

      {/* Workforce Overview */}
      <div className="page">
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          People Operational Report – July to September 2024
        </h2>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>BACKGROUND</h3>
        <p style={{ marginBottom: "15px" }}>
          This report covers the third quarter (July to September) of the
          financial year 2024. The report highlights changes and progress in the
          People Department as well as the activities, work streams and progress
          made against key areas in our People Strategy and the update on wider
          organisation actions.
        </p>

        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Key Points</h3>
        <ul style={{ marginBottom: "15px" }}>
          <li>
            InfraCredit's workforce comprises
            <input
              type="number"
              value={reportData.workforce.ftes}
              onChange={(e) =>
                handleNumberChange("workforce", "ftes", e.target.value)
              }
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            full-time employees (FTEs),
            <input
              type="number"
              value={reportData.workforce.starAcademy}
              onChange={(e) =>
                handleNumberChange("workforce", "starAcademy", e.target.value)
              }
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            STAR ACADEMY analysts and
            <input
              type="number"
              value={reportData.workforce.contractStaff}
              onChange={(e) =>
                handleNumberChange("workforce", "contractStaff", e.target.value)
              }
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            individual project / term based-contract staff. Our total headcount
            as at date is
            <input
              type="number"
              value={reportData.workforce.total}
              onChange={(e) =>
                handleNumberChange("workforce", "total", e.target.value)
              }
              style={{
                width: "40px",
                border: "1px solid #ddd",
                padding: "3px",
                margin: "0 5px",
              }}
            />
            . We continue to retain use of individual contract staff to support
            workforce requirements.
          </li>
          <li>
            We continue to emphasize on some critical areas that are
            specifically aligned to the business strategy, this includes,
            Competency Framework, Culture and Value Reinforcement, Performance
            Management and Knowledge Management in particular skills development
            as key people strategies for attraction and retention. Further
            workstreams on various pillars continued within the period in
            alignment with the People Strategy.
          </li>
          <li>
            Continuous efforts towards staff engagement and training in 2024
            including opportunities for speaking engagements at stakeholder
            events.
          </li>
        </ul>
      </div>

      {/* Operational Overview */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Operational Overview
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            Recruitment
          </h3>
          <p>
            In line with identified needs of the business, we have continually
            sourced relevant talent as follows:
          </p>

          <div style={{ display: "flex", gap: "30px", margin: "20px 0" }}>
            <div>
              <h4>Hiring Trends</h4>
              <BarChart width={400} height={300} data={hiringTrendData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hires" fill="#8884d8" name="New Hires" />
              </BarChart>
              <table
                style={{
                  marginTop: "10px",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Quarter
                    </th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Hires
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.hiringData.quarterly.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {item.quarter}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <input
                          type="number"
                          value={item.hires}
                          onChange={(e) => {
                            const newHiringData = [
                              ...reportData.hiringData.quarterly,
                            ];
                            newHiringData[index].hires =
                              parseInt(e.target.value) || 0;
                            setReportData({
                              ...reportData,
                              hiringData: {
                                ...reportData.hiringData,
                                quarterly: newHiringData,
                              },
                            });
                          }}
                          style={{
                            width: "40px",
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

            <div>
              <h4>Positions Filled</h4>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Quarter
                    </th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Positions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.hiringData.positions.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {item.quarter}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <input
                          type="text"
                          value={item.positions}
                          onChange={(e) => {
                            const newPositions = [
                              ...reportData.hiringData.positions,
                            ];
                            newPositions[index].positions = e.target.value;
                            setReportData({
                              ...reportData,
                              hiringData: {
                                ...reportData.hiringData,
                                positions: newPositions,
                              },
                            });
                          }}
                          style={{
                            width: "300px",
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
          </div>

          <h4 style={{ marginTop: "20px" }}>
            Recruitment & Talent Acquisition Comments
          </h4>
          <textarea
            value="In alignment with recommendations of the Remuneration and Nomination Committee of the Board, we continue to engage talents for available positions notwithstanding recurring challenges faced with the war for talent and persistent economical changes in addition to the continued increase in cost of living."
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
              marginBottom: "15px",
            }}
            onChange={(e) => {}}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Exits</h3>
          <p>
            We experienced 1 full-time employee exit, and 2 contract staff exit
            for the period under review (Q3 2024)
          </p>

          <div style={{ width: "400px", margin: "20px 0" }}>
            <BarChart width={400} height={300} data={exitTrendData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="exits" fill="#ff6b6b" name="Employee Exits" />
            </BarChart>
            <table
              style={{
                marginTop: "10px",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Quarter
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Exits
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportData.exits.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {item.quarter}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input
                        type="number"
                        value={item.exits}
                        onChange={(e) => {
                          const newExits = [...reportData.exits];
                          newExits[index].exits = parseInt(e.target.value) || 0;
                          setReportData({
                            ...reportData,
                            exits: newExits,
                          });
                        }}
                        style={{
                          width: "40px",
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
        </div>
      </section>

      {/* Policy Review / Compensation Management */}
      <section
        style={{
          marginBottom: "30px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Policy Review / Compensation Management
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <textarea
            value={reportData.policyReview.salaryAdjustment}
            onChange={(e) =>
              handleTextChange(
                "policyReview",
                "salaryAdjustment",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "60px",
              border: "1px solid #ddd",
              padding: "8px",
              marginBottom: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <textarea
            value={reportData.policyReview.surveyFeedback}
            onChange={(e) =>
              handleTextChange("policyReview", "surveyFeedback", e.target.value)
            }
            style={{
              width: "100%",
              height: "100px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Performance Management
        </h3>
        <ul>
          {reportData.performanceManagement.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newPerformance = [...reportData.performanceManagement];
                  newPerformance[index] = e.target.value;
                  setReportData({
                    ...reportData,
                    performanceManagement: newPerformance,
                  });
                }}
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
          onClick={() =>
            setReportData({
              ...reportData,
              performanceManagement: [...reportData.performanceManagement, ""],
            })
          }
          style={{
            marginTop: "10px",
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Performance Item
        </button>

        <h3
          style={{ fontSize: "18px", marginTop: "15px", marginBottom: "10px" }}
        >
          Employee Relations (ER)
        </h3>
        <ul>
          <li>
            <strong>Security:</strong>
            <input
              type="text"
              value={reportData.employeeRelations.security}
              onChange={(e) =>
                handleTextChange(
                  "employeeRelations",
                  "security",
                  e.target.value,
                )
              }
              style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "5px",
                marginLeft: "5px",
              }}
            />
          </li>
          <li>
            <strong>Disciplinary cases:</strong>
            <input
              type="text"
              value={reportData.employeeRelations.disciplinary}
              onChange={(e) =>
                handleTextChange(
                  "employeeRelations",
                  "disciplinary",
                  e.target.value,
                )
              }
              style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "5px",
                marginLeft: "5px",
              }}
            />
          </li>
          <li>
            <strong>Grievance cases:</strong>
            <input
              type="text"
              value={reportData.employeeRelations.grievance}
              onChange={(e) =>
                handleTextChange(
                  "employeeRelations",
                  "grievance",
                  e.target.value,
                )
              }
              style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "5px",
                marginLeft: "5px",
              }}
            />
          </li>
          <li>
            <strong>2024 Staff Retreat:</strong>
            <input
              type="text"
              value={reportData.employeeRelations.retreat}
              onChange={(e) =>
                handleTextChange("employeeRelations", "retreat", e.target.value)
              }
              style={{
                width: "500px",
                border: "1px solid #ddd",
                padding: "5px",
                marginLeft: "5px",
              }}
            />
          </li>
        </ul>
      </section>

      {/* Knowledge Management */}
      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Knowledge Management
        </h2>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Career Management
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>Institutionalising Knowledge</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.eLearning}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "eLearning",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>Speaking Engagements</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.speakingEngagements}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "speakingEngagements",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "60px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>Employee Development Program</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.certifications}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "certifications",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>Mentorship Program</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.mentorship}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "mentorship",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>The S.T.A.R Academy</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.starAcademy}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "starAcademy",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong>Knowledge Exchange Programme</strong>
          </p>
          <textarea
            value={reportData.knowledgeManagement.knowledgeExchange}
            onChange={(e) =>
              handleTextChange(
                "knowledgeManagement",
                "knowledgeExchange",
                e.target.value,
              )
            }
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ddd",
              padding: "8px",
            }}
          />
        </div>
      </section>

      {/* People Analytics */}
      <section
        style={{
          marginBottom: "30px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          People Analytics
        </h2>

        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Departmental Workforce Split
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {reportData.departments.map((dept, index) => (
            <div
              key={index}
              style={{
                padding: "5px 10px",
                backgroundColor: "#e9ecef",
                borderRadius: "4px",
              }}
            >
              <input
                type="text"
                value={dept}
                onChange={(e) => {
                  const newDepts = [...reportData.departments];
                  newDepts[index] = e.target.value;
                  setReportData({
                    ...reportData,
                    departments: newDepts,
                  });
                }}
                style={{ border: "1px solid #ddd", padding: "3px" }}
              />
            </div>
          ))}
          <button
            onClick={() =>
              setReportData({
                ...reportData,
                departments: [...reportData.departments, ""],
              })
            }
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Department
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div>
            <h4>Overall Gender Distribution</h4>
            <PieChart width={300} height={300}>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {genderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div>
                <label>Male: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.overall.male}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        overall: {
                          ...reportData.genderDistribution.overall,
                          male: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
              <div>
                <label>Female: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.overall.female}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        overall: {
                          ...reportData.genderDistribution.overall,
                          female: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
            </div>
          </div>

          <div>
            <h4>FTE Gender Distribution</h4>
            <PieChart width={300} height={300}>
              <Pie
                data={fteGenderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {fteGenderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div>
                <label>Male: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.ftes.male}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        ftes: {
                          ...reportData.genderDistribution.ftes,
                          male: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
              <div>
                <label>Female: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.ftes.female}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        ftes: {
                          ...reportData.genderDistribution.ftes,
                          female: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4>Junior Employees Gender Distribution</h4>
            <PieChart width={300} height={300}>
              <Pie
                data={juniorGenderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {juniorGenderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div>
                <label>Male: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.junior.male}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        junior: {
                          ...reportData.genderDistribution.junior,
                          male: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
              <div>
                <label>Female: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.junior.female}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        junior: {
                          ...reportData.genderDistribution.junior,
                          female: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
            </div>
          </div>

          <div>
            <h4>Senior Employees Gender Distribution</h4>
            <PieChart width={300} height={300}>
              <Pie
                data={seniorGenderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {seniorGenderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div>
                <label>Male: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.senior.male}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        senior: {
                          ...reportData.genderDistribution.senior,
                          male: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
              <div>
                <label>Female: </label>
                <input
                  type="number"
                  value={reportData.genderDistribution.senior.female}
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      genderDistribution: {
                        ...reportData.genderDistribution,
                        senior: {
                          ...reportData.genderDistribution.senior,
                          female: parseInt(e.target.value) || 0,
                        },
                      },
                    });
                  }}
                  style={{
                    width: "40px",
                    border: "1px solid #ddd",
                    padding: "3px",
                  }}
                />
                %
              </div>
            </div>
          </div>
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
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Thank You</h2>
        <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>InfraCredit</h3>
        <p style={{ marginBottom: "5px" }}>RC_1368689</p>
        <p style={{ marginBottom: "5px" }}>
          Infrastructure Credit Guarantee Company Limited
        </p>
        <p style={{ marginBottom: "5px" }}>
          <a
            href="http://www.infracredit.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.infracredit.ng
          </a>
        </p>
        <p style={{ marginBottom: "5px" }}>1 Adeyemo Alakija Street</p>
        <p style={{ marginBottom: "5px" }}>Victoria Island, Lagos, Nigeria</p>
        <p style={{ marginBottom: "5px" }}>
          <a href="mailto:info@infracredit.ng">info@infracredit.ng</a>
        </p>
        <p style={{ marginBottom: "5px" }}>+234 1 631 2300 - 29</p>
      </footer>
       <style jsx>{`
        .compliance-report {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
        }
        .page {
          margin-bottom: 40px;
          padding: 40px;
          background: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
          min-height: 1122px;
        }
        .cover-page,
        .footer-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 1122px;
        }
        .header-text,
        .title-text,
        .footer-text {
          white-space: pre-wrap;
          text-align: center;
          width: 100%;
        }
        .header-text {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .title-text {
          font-size: 18px;
        }
        .footer-text {
          font-size: 14px;
        }
        h1,
        h2,
        h3,
        h4 {
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        h1 {
          font-size: 20px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .heading {
          font-weight: bold;
          margin: 1em 0 0.5em 0;
          display: block;
          width: 100%;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        .editable-field {
          width: 100%;
          padding: 8px;
          margin: 5px 0;
          border: 1px solid #ddd;
          font-family: inherit;
          font-size: inherit;
        }
        .editable-field.textarea {
          min-height: 100px;
        }
        .editable-field.heading {
          font-weight: bold;
          font-size: 1.17em; /* h3 size */
          border: none;
          padding: 0;
          margin: 1em 0 0.5em 0;
        }
        .readonly-field {
          white-space: pre-wrap;
          padding: 5px 0;
        }
        .edit-toggle {
          background: #4caf50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 20px;
          font-size: 16px;
        }
        .save-button {
          background: #2196f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        .form-actions {
          text-align: center;
          margin-top: 20px;
        }
        .planned-activities,
        .record-keeping {
          list-style-type: none;
          padding-left: 0;
        }
        .planned-activities li,
        .record-keeping li {
          margin-bottom: 10px;
          position: relative;
        }
        .add-activity {
          background: #4caf50;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        .remove-activity {
          background: #f44336;
          color: white;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-left: 10px;
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
        }
        .page-number {
          position: absolute;
          bottom: 20px;
          right: 40px;
          font-size: 12px;
          color: #666;
        }
        p {
          margin: 0.5em 0;
        }
        strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PeopleReport;
