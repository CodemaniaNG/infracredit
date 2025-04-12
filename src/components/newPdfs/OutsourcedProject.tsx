import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const OutsourcedProjectUpdate = () => {
  const [isEditable, setIsEditable] = useState(false);

  const initialValues = {
    // Cover Page
    cover: {
      header: "IntroCredit",
      title: "Outsourced Project Update\nQ3 2024\n30 September 2024",
    },

    // Project Summary Table (Page 2)
    projects: [
      {
        sn: 1,
        name: "INTERNAL AUDIT SERVICE",
        consultant: "ERNST & YOUNG",
        owners: "COMPLIANCE, COO, CEO",
        size: "14.0",
        paid: "14.0",
        funding: "INFRACREDIT",
        closing: "DECEMBER 2024",
      },
      {
        sn: 2,
        name: "IT SUPPORT SERVICES",
        consultant: "TRIBASE SOLUTIONS",
        owners: "IT, COO",
        size: "17.2",
        paid: "11.8",
        funding: "INFRACREDIT",
        closing: "DECEMBER 2024",
      },
      // ... all other projects
    ],

    // Internal Audit (Page 3)
    internalAudit: {
      justification: [
        "The review performed by the firm is a key operational risk management component...",
        "Effectiveness of the internal controls is critical to the safeguard...",
      ],
      strategy: [
        "It is an important aspect of our operational risk and governance culture...",
        "It ensures independent reporting to the Board...",
        "It is important at this stage in the company's growth cycle...",
      ],
      attractiveness: [
        "EY is globally recognized and has the expertise...",
        "Being one of the 'Big 4' audit firms...",
        "The pricing is competitive compared to the other Big 4...",
      ],
      impact: [
        "Remediation of issues from prior period audit",
        "Completion of Risk Control and Self Assessment...",
        "Improvement in processes with the drafting of relevant manuals...",
      ],
      costBenefit: ["This is considered adequate given the cost of hiring...", "The fee is always strongly negotiated."],
      risks: ["The absence of such reviews could lead to lax adherence...", "The benefits of the reviews have translated into action firmwide..."],
    },

    // IT Support Services (Page 4)
    itSupport: {
      justification: ["This allows the company to focus on its primary business activity..."],
      strategy: [
        "The experience the service provider brings helps us deploy systems...",
        "This also helps us maintain a lean but efficient focus driven team",
        "To help in the quick deployment and ongoing maintenance...",
      ],
      attractiveness: [
        "Reduced staff overhead costs",
        "Service provided is prone to less downtime...",
        "Leverage on expanded and varying experience...",
        "Aligns with our strategy to maintain a lean team",
      ],
      impact: ["Successful implementation of technology solutions and systems...", "More efficient management of internal systems..."],
      costBenefit: ["Cost Savings - this service had historically saved on cost..."],
      risks: ["Inexperienced resources: The service provider has so far been able..."],
    },

    // ... all other sections for each project
  };



  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
    setIsEditable(false);
  };

  const renderEditableField = (fieldName: string, value: any, isTextArea = false) => {
    const style: React.CSSProperties = {
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
      return <Field as={isTextArea ? "textarea" : "input"} name={fieldName} style={{ ...style, resize: isTextArea ? "vertical" : "none" }} />;
    }
    return <div style={{ ...style, whiteSpace: "pre-wrap" }}>{value}</div>;
  };

  const renderSection = (title: string, fieldPrefix: string, content: any) => {
    return (
      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            fontSize: "18px",
            borderBottom: "1px solid #eee",
            paddingBottom: "8px",
          }}>
          {renderEditableField(`${fieldPrefix}.title`, title)}
        </h2>

        {Object.entries(content).map(([section, items]) =>{
          const itemsArr = items as any[];
          return (
          <div key={section} style={{ marginTop: "15px" }}>
            <h3 style={{ fontSize: "16px", color: "#555" }}>{renderEditableField(`${fieldPrefix}.${section}.title`, section.toUpperCase())}</h3>

            <FieldArray name={`${fieldPrefix}.${section}.items`}>
              {() => (
                <ul style={{ paddingLeft: "20px" }}>
                  {itemsArr.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>
                      {renderEditableField(`${fieldPrefix}.${section}.items.${idx}`, item, true)}
                    </li>
                  ))}
                </ul>
              )}
            </FieldArray>
          </div>
        )})}
      </div>
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
      }}>
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
        }}>
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
              }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}>
                {renderEditableField("cover.header", values.cover.header)}
              </h1>
              <div style={{ fontSize: "18px", whiteSpace: "pre-wrap" }}>{renderEditableField("cover.title", values.cover.title, true)}</div>
            </div>

            {/* Project Summary Table */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
                overflowX: "auto",
              }}>
              <h1 style={{ fontSize: "20px", marginBottom: "20px", width: "85%", backgroundColor: "rgb(146	186	68)", color: "white", fontWeight: 700 }}>
                {renderEditableField("projectsTitle", "PROJECT SUMMARY")}
              </h1>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {[
                      "S/N",
                      "PROJECT",
                      "CONSULTANT",
                      "PROCESS OWNER(S)",
                      "PROJECT SIZE (NGN M)",
                      "PAID BY INFRACREDIT TO DATE (NGN M)",
                      "FUNDING SOURCE",
                      "EXPECTED CLOSING DATE",
                    ].map((header) => (
                      <th
                        key={header}
                        style={{
                          border: "1px solid #fff",
                          padding: "10px",
                          textAlign: "left",
                          backgroundColor: "rgb(146	186	68)",
                          color: "white",
                        }}>
                        {renderEditableField(`header_${header}`, header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <FieldArray name="projects">
                    {() =>
                      values.projects.map((project, idx) => (
                        <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "rgb(238	244	233	)" : "rgb(220	230	207	)", color: "rgb(110	111	108	)" }}>
                          {Object.entries(project).map(([key, value]) => (
                            <td
                              key={key}
                              style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                              }}>
                              {renderEditableField(`projects.${idx}.${key}`, value)}
                            </td>
                          ))}
                        </tr>
                      ))
                    }
                  </FieldArray>
                </tbody>
              </table>
            </div>

            {/* Internal Audit Section */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
              }}>
              <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>{renderEditableField("internalAuditTitle", "INTERNAL AUDIT")}</h1>

              <form action="">
                <fieldset>
                  <legend>
                    {renderSection("JUSTIFICATION", "internalAudit.justification", {
                      items: values.internalAudit.justification,
                    })}
                  </legend>

                  {/* <hr
                    style={{
                      margin: "20px 0",
                      border: "0",
                      borderTop: "1px solid #eee",
                    }}
                  /> */}
                  <span>
                    {renderSection("WHY DOES IT FIT OUR STRATEGY?", "internalAudit.strategy", {
                      items: values.internalAudit.strategy,
                    })}
                  </span>
                </fieldset>
              </form>

              {/* Render all other sections similarly */}
            </div>

            {/* IT Support Section */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginBottom: "30px",
              }}>
              <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>{renderEditableField("itSupportTitle", "IT SUPPORT SERVICES")}</h1>

              {renderSection("JUSTIFICATION", "itSupport.justification", {
                items: values.itSupport.justification,
              })}

              {/* Render all other sections similarly */}
            </div>

            {/* Add all other project sections following the same pattern */}

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
                  }}>
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

export default OutsourcedProjectUpdate;
