import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const ComplianceReport = () => {
  const [isEditable, setIsEditable] = useState(false);

  const initialValues = {
    header: "InfraCredit\nSecuring Infrastructure Finance",
    title: "Compliance and Internal Control Report\nQ3 2024",
    team: [
      { name: "Adebayo Oshinaga", position: "Compliance Manager" },
      { name: "Aisha Baba-Ahmed", position: "Compliance Support" },
      { name: "Asmau Abdullahi", position: "Compliance Support" },
      { name: "Damiida Olukeye", position: "OALP (Compliance Support)" },
    ],
    introText:
      "This report provides updates to the board on the various on-going workstreams within the Compliance and Internal Control space. The following constitute key updates from Q3 2024:",
    transactionActivities: {
      cpChecklists:
        "Developed CP Checklists for LADOL, Viathan III, Falcon and Extended Networks (3 were approved by MROC). The CPs were built from the standard template (e.g. account openings, validation of capex costs and existing debt balances), conditions outlined in credit papers, MROC and Credit Committee minutes, and due diligence flags (e.g. legal, operational, E&S, technical KYC/Integrity, etc.). The CP Checklist is embedded in the Recourse Deed and Compliance validates clearance of all CPs before recommending to MROC for final sign-off.",
      securityTracker:
        "Security over client assets, accounts, contracts and cashflows is backed by initial stamping and CAC registration (e.g. often 10% of exposure) and pre-funding of a Perfection Reserve Account (PRA) held by a Security Trustee, with clients required to periodically top-up the PRA. Compliance and Legal track initial stamping and registration (effected post-closing by an agreed external counsel), while Compliance also tracks scheduled PRA additions.",
      kycReports: "Ten (10) Preliminary KYC DDs and four (4) KYC/Integrity Due Diligence Reports were conducted in the period, with flags noted in NBC and credit papers.",
      conditionsTracking: "Worked closely with our Portfolio Management team to track clearance of agreed Condition Subsequent (CS) for all portfolio clients.",
    },
    transactionSummary: {
      newKYCs: 10,
      nbcFlags: 5,
      completedKYCReports: 4,
      creditFlags: 5,
      approvedChecklists: 3,
      waivedItems: 0,
      clearedItems: 18,
      subsequentConditions: 15,
    },
    complianceMonitoring: {
      codeOfConduct: "Based on the compliance monitoring this quarter, we recorded no breach in the Code of Conduct & Business Ethics. This is continually monitored by the team.",
      gifts:
        "The automated Gift Registry App records all gifts was process was followed in declaring, administering and reporting gifts. In Q3, no gifts exceeding the threshold have been given to members of staff.",
      whistleblowing:
        "The Whistleblowing lines are maintained by Deloitte. No whistleblowing incident was reported in Q3. Staff are aware of their responsibilities to blow the whistle where there is a breach of InfraCredit policies, procedures or values.",
      conflicts:
        "There were no conflict of interest or insider dealings issues, based on the compliance monitoring in Q3. Every Transactor is required to complete the Conflict and Insider Dealings Form before taking on a new transaction.",
      aml: "Based on the relevant checks made by the team within Q3, there was no money laundering or bribery related incident.",
    },
    auditActivities: {
      internalAudit:
        "The third quarter's focus was on Admin, Legal, HR and Finance. Compliance's role is managing information sharing, resolving issues raised by E&Y in prior periods and ensuring the report is out in good time. E&Y will present this report at the October 2024 FAC meeting. For Q3, minimal new issues were flagged, and some legacy issues have been resolved.",
      rcsa: "Following up with all functions on the submission of their Q3 2024 RCSAs, inclusive of improvements highlighted by Internal Control in the previous period. The accompanying Risk Register will also be updated.",
      capitalRaise:
        "Working with Legal and Strategy teams to close compliance-related conditions with one potential capital provider (FCMB Asset Management Limited) while also carrying out KYC checks and reviewing compliance covenants stipulated within capital raise and risk-sharing agreements.",
    },
    issuesChallenges:
      "Need for targeted follow-ups to ensure that new and updated standard operating procedures (SOPs) are understood and adhered to by staff across all functions. The Knowledge Management team and one (!) compliance support staff are assisting in this regard.",
    plannedActivities: [
      "Conduct trainings for staff during the quarter to improve overall compliance and internal control",
      "Firm-wide compliance training covering: Anti-Money Laundering, Conflict of Interest, KYC and Integrity Due Diligence",
      "Kick start the Q4 2024 Internal Audit",
      "Ensure insurance asset review is conducted on all mandated clients",
      "Track stamping and registration of security documents",
      "Implement improvements to Risk-Control Self-Assessments",
      "Support Origination & Structuring Team in KYC/Integrity Due Diligence",
      "Monitor changes in relevant legislation",
      "Implement Personal Development Plans for staff",
    ],
    recordKeeping: [
      "Following the Q3 2024 Internal Audit, kick start the Q4 2024 Internal Audit including provision of documents for units under review and clearance of legacy issues.",
      "Ensure the insurance asset review is conducted on all mandated clients of InfraCredit, including clearance of material gaps pre-closing and issuance of Insurance Satisfaction Letter on coverage of all new assets post-closing.",
      "Track stamping and registration of security documents for guarantees issued in Q3 2024 (i.e. NGN3.5 billion increase for Mecure), along with new guarantees to be issued in Q4 2024. Also track other portfolio matters – e.g. clearance of Conditions Subsequent, client renewal of insurance policies, scheduled additions to Perfection Reserve Account, etc.",
      "Ensure recommended improvements to function-specific Risk-Control Self-Assessments are implemented, with updated templates standardised and shared with the Management Risk Oversight Committee (MROC) for sign-off.",
      "Support the Origination & Structuring Team in KYC/Integrity Due Diligence, while also coordinating CP Checklist tracking with the O&S and Risk & Portfolio Management teams.",
      "Monitor changes in relevant legislation and the regulatory environment and work with Legal to advise Management on potential impact and recommendations.",
      "In addition to implementation of Personal Development Plans for staff, Knowledge Exchange opportunities will be considered where opportunities arise – e.g. information sharing on compliance and internal control with capital providers and/or other development partners.",
    ],
    footer: "InfraCredit\nSecuring Infrastructure Finance\nwww.infracredit.ng\n📝 InfraCredit\n@InfraCredit",
  };


  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
    setIsEditable(false);
  };

  const renderEditableText = (fieldName: string, value: any, isTextArea = false, className = "", style?: any) => {
    if (isEditable) {
      return <Field as={isTextArea ? "textarea" : "input"} name={fieldName} className={`editable-field ${isTextArea ? "textarea" : ""} ${className}`} />;
    }
    return (
      <p className={`readonly-field ${className}`} style={style}>
        {value}
      </p>
    );
  };

  const renderEditableHeading = (level: number, fieldName: string, value: string, className?: string, style?: any) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    if (isEditable) {
      return <Field as={"input"} name={fieldName} className={`editable-field  ${className}`} />;
    }
    return (
      <HeadingTag className={className} style={style}>
        {value}
      </HeadingTag>
    );
  };

  return (
    <div className="compliance-report">
      <button onClick={() => setIsEditable(!isEditable)} className="edit-toggle">
        {isEditable ? "Cancel Editing" : "Edit Report"}
      </button>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        {({ values }) => (
          <Form>
            {/* Cover Page */}
            <div className="page cover-page">
              <div className="header">{renderEditableText("header", values.header, true, "header-text")}</div>
              <div className="title">{renderEditableText("title", values.title, true, "title-text")}</div>
            </div>

            {/* Page 2 */}
            <div className="page">
              {renderEditableHeading(1, "page2Title", "Compliance and Internal Control Quarterly Report", "page2Title", {
                color: "rgb(15	106	154	)",
                fontSize: "18px",
                fontWeight: "bold",
                borderBottom: "1px solid green",
                paddingBottom: "8px",
              })}

              {renderEditableHeading(2, "teamHeading", "Team Composition", "", { color: "green", fontSize: "16px", fontWeight: "400", margin: "16px 0px" })}
              <table className="team-table">
                <thead>
                  <tr>
                    <th>{renderEditableText("teamNameHeader", "Name")}</th>
                    <th>{renderEditableText("teamPositionHeader", "Position")}</th>
                  </tr>
                </thead>
                <tbody>
                  <FieldArray name="team">
                    {() =>
                      values.team.map((member, index) => (
                        <tr key={index}>
                          <td>{renderEditableText(`team.${index}.name`, member.name)}</td>
                          <td>{renderEditableText(`team.${index}.position`, member.position)}</td>
                        </tr>
                      ))
                    }
                  </FieldArray>
                </tbody>
              </table>

              {renderEditableHeading(2, "keyActivitiesHeading", "Key activities and achievements for the quarter", "", {
                color: "rgb(29	74	106	)",
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: 400,
              })}
              {renderEditableText("introText", values.introText, true, "introText", { color: "rgb(109	109	109)", marginBottom: "20px", fontSize: "16px", fontWeight: 400 })}

              <ul>
                <li style={{ listStyleType: "square" }}>
                  {renderEditableHeading(3, "transactionHeading", "Transaction and Pipeline-Related Activity", "", {
                    color: "rgb(29	74	106	)",
                    marginBottom: "20px",
                    fontSize: "18px",
                    fontWeight: 400,
                  })}
                  <ul>
                    <li style={{ listStyleType: "square" }}>
                      <strong>
                        {renderEditableText("cpChecklistsLabel", "Condition Precedent (CP) Checklists:", true, "", { color: "rgb(65	65	65)", textDecoration: "underline" })}
                      </strong>
                      {renderEditableText("transactionActivities.cpChecklists", values.transactionActivities.cpChecklists, true)}
                    </li>
                    <li style={{ listStyleType: "square" }}>
                      <strong>{renderEditableText("securityTrackerLabel", "Security Perfection Tracker:", true, "", { color: "rgb(65	65	65)", textDecoration: "underline" })}</strong>
                      {renderEditableText("transactionActivities.securityTracker", values.transactionActivities.securityTracker, true)}
                    </li>
                    <li style={{ listStyleType: "square" }}>
                      <strong>{renderEditableText("kycReportsLabel", "KYC/Integrity Due Diligence:", true, "", { color: "rgb(65	65	65)", textDecoration: "underline" })}</strong>
                      {renderEditableText("transactionActivities.kycReports", values.transactionActivities.kycReports, true)}
                    </li>
                    <li style={{ listStyleType: "square" }}>
                      <strong>
                        {renderEditableText("conditionsTrackingLabel", "Conditions Subsequent Tracking:", true, "", { color: "rgb(65	65	65)", textDecoration: "underline" })}
                      </strong>
                      {renderEditableText("transactionActivities.conditionsTracking", values.transactionActivities.conditionsTracking, true)}
                    </li>
                  </ul>
                </li>
              </ul>
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>{renderEditableText("newKYCsLabel", "New Preliminary KYCs Completed")}</th>
                    <th>{renderEditableText("newKYCsLabel", "Q3 2024")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{renderEditableText("newKYCsLabel", "New Preliminary KYCs Completed")}</td>
                    <td>{renderEditableText("transactionSummary.newKYCs", values.transactionSummary.newKYCs)}</td>
                  </tr>
                  <tr>
                    <td>{renderEditableText("nbcFlagsLabel", "Flags Identified (noted in NBC papers)")}</td>
                    <td>{renderEditableText("transactionSummary.nbcFlags", values.transactionSummary.nbcFlags)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>{renderEditableText("completedKYCReportsLabel", "New KYC/IDD Reports Completed")}</strong>
                    </td>
                    <td>{renderEditableText("transactionSummary.completedKYCReports", values.transactionSummary.completedKYCReports)}</td>
                  </tr>
                  {/* Add all other table rows similarly */}
                </tbody>
              </table>
              <div className="page-number">{renderEditableText("page2Number", "InfraCredit Compliance Report – Q3 2024 1")}</div>
            </div>

            {/* Page 3 */}
            <div className="page">
              {renderEditableHeading(1, "page3Title", "Compliance and Internal Control Quarterly Report", "page2Title", {
                color: "rgb(15	106	154	)",
                fontSize: "18px",
                fontWeight: "bold",
                borderBottom: "1px solid green",
                paddingBottom: "8px",
              })}

              {renderEditableHeading(2, "keyActivitiesContHeading", "Key activities and achievements for the quarter (cont'd)", "", {
                color: "rgb(30	76	108	)",
                fontSize: "18px",
                fontWeight: 400,
                margin: "16px 0px",
              })}
              <ul>
                <li style={{ listStyleType: "square" }}>
                  {renderEditableHeading(3, "complianceMonitoringHeading", "Compliance Monitoring Programme", "", {
                    color: "rgb(29	74	106	)",
                    // marginBottom: "20px",
                    fontSize: "18px",
                    fontWeight: 400,
                  })}
                   <ul style={{marginLeft: "25px", marginTop: "20px", marginBottom: "20px",}}>
                    <li style={{ listStyleType: "square" }}>
                      <strong>{renderEditableText("codeOfConductLabel", "Code of Conduct:")}</strong>
                      {renderEditableText("complianceMonitoring.codeOfConduct", values.complianceMonitoring.codeOfConduct, true)}
                    </li>
                  </ul>
                </li>
                <li style={{ listStyleType: "square" }}>
                  {renderEditableHeading(3, "auditActivitiesHeading", "Audit and Other Activity", "", {
                    color: "rgb(29	74	106	)",
                    // marginBottom: "20px",
                    fontSize: "18px",
                    fontWeight: 400,
                  })}
                  <ul style={{marginLeft: "25px", marginTop: "20px", marginBottom: "20px",}}>
                    <li style={{ listStyleType: "square" }}>
                      <strong>{renderEditableText("internalAuditLabel", "Coordinating Q3 2024 Internal Audit:")}</strong>
                      {renderEditableText("auditActivities.internalAudit", values.auditActivities.internalAudit, true)}
                    </li>
                  </ul>
                </li>
                <li style={{ listStyleType: "square" }}>
                  {renderEditableHeading(3, "issuesHeading", "Issues and Challenges", "", {
                    color: "rgb(29	74	106	)",
                    marginBottom: "16px",
                    fontSize: "18px",
                    fontWeight: 400,
                  })}
                   <ul style={{marginLeft: "25px", marginTop: "20px", marginBottom: "20px",}}>
                    <li style={{ listStyleType: "square" }}>{renderEditableText("issuesChallenges", values.issuesChallenges, true)}</li>
                  </ul>
                </li>
              </ul>
              {/* Add all other compliance monitoring items similarly */}

              {/* Add all other audit activities similarly */}

              <div className="page-number">{renderEditableText("page3Number", "InfraCredit Compliance Report – Q3 2")}</div>
            </div>

            {/* Page 4 */}
            <div className="page">
              {renderEditableHeading(1, "page4Title", "Compliance and Internal Control Quarterly Report", "page2Title", {
                color: "rgb(15	106	154	)",
                fontSize: "18px",
                fontWeight: "bold",
                borderBottom: "1px solid green",
                paddingBottom: "8px",
              })}

              {renderEditableHeading(2, "plannedActivitiesHeading", "Key activities planned for Q4 2024", "", {
                color: "rgb(30	76	108	)",
                fontSize: "18px",
                fontWeight: 400,
                margin: "16px 0px",
              })}
              <FieldArray name="plannedActivities">
                {({ push, remove, form }) => (
                  <ul className="planned-activities">
                    {values.plannedActivities.map((activity, index) => (
                      <li key={index}>
                        {renderEditableText(`plannedActivities.${index}`, activity, true, "", { fontSize: "16px", fontWeight: 400, lineHeight: "32px", color: "rgb(43,43,43)" })}
                        {isEditable && (
                          <button type="button" onClick={() => remove(index)} className="remove-activity">
                            ×
                          </button>
                        )}
                      </li>
                    ))}
                    {isEditable && (
                      <li>
                        <button type="button" onClick={() => push("New activity")} className="add-activity">
                          + Add Activity
                        </button>
                      </li>
                    )}
                  </ul>
                )}
              </FieldArray>

              {renderEditableHeading(2, "recordKeepingHeading", "Record-keeping and retention", "", {
                fontSize: "18px",
                fontWeight: "bold",
              })}
              <FieldArray name="recordKeeping">
                {({ push, remove, form }) => (
                  <ul className="record-keeping">
                    {values.recordKeeping.map((item, index) => (
                      <li style={{ listStyleType: "square", marginLeft: "16px", }} key={index}>
                        {renderEditableText(`recordKeeping.${index}`, item, true)}
                        {isEditable && (
                          <button type="button" onClick={() => remove(index)} className="remove-activity">
                            ×
                          </button>
                        )}
                      </li>
                    ))}
                    {isEditable && (
                      <li>
                        <button type="button" onClick={() => push("New record keeping item")} className="add-activity">
                          + Add Item
                        </button>
                      </li>
                    )}
                  </ul>
                )}
              </FieldArray>

              <div className="page-number">{renderEditableText("page4Number", "InfraCredit Compliance Report – Q3 2024")}</div>
            </div>

            {/* Footer Page */}
            <div className="page footer-page">
              <div className="footer-content">{renderEditableText("footer", values.footer, true, "footer-text")}</div>
            </div>

            {isEditable && (
              <div className="form-actions">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>

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
        .page .page2Title {
          color: red !important;
        }
        .introText {
          margin-bottom: 20px;
          font-size: 45px;
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
        .team-table thead tr th {
          color: white;
          font-size: 16px;
          text-align: center;
          border: none;
        }
        .team-table thead tr th:first-child {
          background-color: rgb(45 104 149);
        }
        .team-table thead tr th:last-child {
          background-color: rgb(44 111 186);
        }
        .team-table tbody tr {
          background-color: rgb(242 242 242);
        }

        .summary-table {
          border: 1px solid rgb(112 159 211);
        }

        .summary-table td,
        .summary-table th {
          border: none;
        }

        .summary-table thead tr th {
          background-color: rgb(105 154 208) !important;
          color: white;
        }

        .summary-table tbody tr {
          border-bottom: 1px solid rgb(112 159 211);
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
        .row {
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }

        .row div {
          width: 5px;
          height: 5px;
          background-color: rgb(45 104 149);
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

export default ComplianceReport;
