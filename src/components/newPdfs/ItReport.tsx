import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useCreateTemplateMutation } from "@/redux/services/templates.service";

const ITReport = () => {
  const [isEditable, setIsEditable] = useState(false);

  const initialValues = {
    header: "InfraCredit\nSecuring Infrastructure Finance",
    title:
      "Management Report\nINFORMATION TECHNOLOGY (IT)\nFor the Period Ended 30 September 2024",
    keyActivities: [
      {
        category: "Cyber Security Management",
        items: [
          "Completed upgrade of two (2) systems to improve cyber threat detection and cybersecurity incident management process: Technology demand management system and Microsoft Sentinel for Security Operation Centre (SIEM, SOAR & XDR capabilities). More cybersecurity controls are planned through December 2024.",
          "Implementing the Privileged Identity Management (PIM/PAM) system to protect privileged accounts from cyber compromise.",
        ],
      },
      {
        category: "IT Staffing",
        items: [
          "The Associate Director, IT continues to lead the team, supported by two (2) consultants from Tribase under a long-running full-time secondment agreement. Recruitment of a Deputy IT Manager is ongoing, with the role to be filled in Q4 2024.",
        ],
      },
      {
        category: "Business Application Support",
        items: [
          "Clean Energy Systems: Implemented dashboard to track priority Clean Energy deals for strategic partners. The Clean Energy Transaction Update system was enhanced while the Climate Facility Website is undergoing improvements. These tools aid data-driven business opportunity discussions with prospects, clients and stakeholders.",
          "Portfolio Management System: The prototype of the Portfolio Management System (PMS) has been done and the full system would be operational and integrated with the existing TRMS and CRM modules in Q4 2024, enabling improved portfolio oversight.",
          "Financial Business Intelligence & Reporting – We are implementing this system by leveraging an analytic tool to create quicker access to financial business intelligence which will aid business insight and key decision-making. Planned completion in Q4.",
          "Transaction Frequently Asked Issues (FAQs) System: Implemented to assist transactors with identified common legal-related issues to fast-track the closure of new guarantees by learning from past transactions to improve the delivery of future ones. This will be reviewed with the legal team and launched this month.",
          "InfraCORE/Origination Platform: Expected to transform the Origination process for existing and prospective clients throughout the transaction lifecycle. The first of two modules will be completed this month and the other before the end of Q4.",
          "Business Report & Contract Management System: The prototype design was created and reviewed with CodeMania, with the Legal unit also testing the initial application. This solution is planned to be completed by Q4 2024.",
        ],
      },
    ],
    continuedActivities: [
      {
        category: "Business Application Support (cont'd)",
        items: [
          "Confirmation module of SeamlessHR: Activated module to automate the staff confirmation process and replace the in-house developed Confirmation application.",
          "Credit Risk Analysis Tool (CRAT): Enhancing system to address evolving business requirements as part of our continuous improvement process to support deal execution. This enhancement has been planned to be completed in Q4.",
          "People Development Plan (PDP) Application: The system is undergoing upgrades, inclusive the ability to flag compliance gaps, with completion set for Q4 2024.",
          "Procurement Application: The RFQ module remains operational (cutting procurement time), while the RFP module's implementation is scheduled for completion by Q4 2024.",
          "Co-Due Diligence System: Some transactions' details have been stored on the platform in readiness for the formal system launch, which will facilitate information sharing and knowledge exchange with institutional investors.",
          "Event Planning App for Co-Due Diligence: CodeWare provided a prototype design, following some of the logic of the Procurement RFQ module (e.g. automating communication with multiple external parties), with completion and roll-out planned for Q4 2024.",
          "The ERP (for Finance), SeamlessHR, ESG Information Management System (Seneca), Learning Management System (Udemy), Visitor/Event Management System, Clean Energy Transaction Update System, Credit Paper Scoring App, CRAT and Office InfraNet, each of which was either newly deployed or materially upgraded in the last 18 months, are all operating as expected.",
        ],
      },
      {
        category: "Other IT Activities",
        items: [
          "AI Adoption Strategy: Microsoft Copilot ensures all recorded Teams meetings are transcribed, while Zoom AI is being tested to improve the Company Secretariat's efficiency in producing minutes of Board and Committee meetings.",
          "Half-Year Statutory Audit: We are just concluding the IT component of the half-year external financial audit (conducted by KPMG).",
        ],
      },
    ],
    plannedActivities: [
      "Achieve target completion dates for key systems under development – e.g. Upgraded People Development Plan App, Business Report & Contract Management System, Portfolio Management module, Procurement RFP module, etc. This requires supervision of all business applications, e.g. functional requirements, architectural designs, cybersecurity requirements, app development, implementation, and testing activities, ensuring delivery to meet business needs and expected outcomes.",
      "Continue to drive adoption of business applications (CRM-TRMS, Procurement RFQ, SeamlessHR, SharePoint, Visitor/Event Management System, etc.), especially for new hires.",
      "In-House Systems: Develop cost-effective solutions for ancillary applications (e.g. pool car management, inventory management – chairs, printer ink, etc.), some of which may be merged together or be extensions of existing business applications.",
      "Cybersecurity Strategy Implementation and Training:\n  - The deployment of a Service Management System (ongoing) will enable configuration management capabilities required to support business system oversight for effective cyber risk management.\n  - Conduct IT Security Training and Awareness program for all staff for new staff.",
    ],
    footer: "InfraCredit Q3 2024 IT Report",
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    setIsEditable(false);
  };
  const [createTemplate, { data: createTemplateData }]: any =
    useCreateTemplateMutation();
  const renderEditableText = (
    fieldName,
    value,
    isTextArea = false,
    className = "",
  ) => {
    if (isEditable) {
      return (
        <Field
          as={isTextArea ? "textarea" : "input"}
          name={fieldName}
          className={`editable-field ${
            isTextArea ? "textarea" : ""
          } ${className}`}
          style={{
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "inherit",
            fontSize: "inherit",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      );
    }
    return (
      <div
        className={`readonly-field ${className}`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {value}
      </div>
    );
  };

  const renderEditableHeading = (level, fieldName, value) => {
    const HeadingTag = `h${level}`;
    const headingStyles = {
      1: {
        fontSize: "20px",
        borderBottom: "1px solid #ddd",
        paddingBottom: "10px",
        marginTop: "0",
      },
      2: { fontSize: "18px", marginTop: "30px" },
      3: { fontSize: "16px", marginTop: "20px" },
    };

    return (
      <HeadingTag
        style={{ ...headingStyles[level], width: "100%", marginBottom: "10px" }}
      >
        {renderEditableText(fieldName, value, false, "heading")}
      </HeadingTag>
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <button
        onClick={() => setIsEditable(!isEditable)}
        style={{
          background: "#4CAF50",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        {isEditable ? "Cancel Editing" : "Edit Report"}
      </button>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            {/* Cover Page */}
            <div
              style={{
                marginBottom: "40px",
                padding: "40px",
                background: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                position: "relative",
                minHeight: "1122px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {renderEditableText("header", values.header, true)}
              </div>
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "18px",
                }}
              >
                {renderEditableText("title", values.title, true)}
              </div>
            </div>

            {/* Page 2 */}
            <div
              style={{
                marginBottom: "40px",
                padding: "40px",
                background: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                position: "relative",
                minHeight: "1122px",
              }}
            >
              {renderEditableHeading(
                1,
                "reportTitle",
                "Information Technology Report",
              )}

              {renderEditableHeading(
                2,
                "activitiesHeading",
                "Key Activities and Achievements for 1 July 2024 through 30 September 2024",
              )}

              <FieldArray name="keyActivities">
                {() =>
                  values.keyActivities.map((activity, activityIndex) => (
                    <div key={activityIndex} style={{ marginBottom: "20px" }}>
                      {renderEditableHeading(
                        3,
                        `keyActivities.${activityIndex}.category`,
                        activity.category,
                      )}
                      <FieldArray name={`keyActivities.${activityIndex}.items`}>
                        {() => (
                          <ul
                            style={{ paddingLeft: "20px", marginTop: "10px" }}
                          >
                            {activity.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                style={{
                                  marginBottom: "10px",
                                  position: "relative",
                                  listStyleType: "disc",
                                }}
                              >
                                {renderEditableText(
                                  `keyActivities.${activityIndex}.items.${itemIndex}`,
                                  item,
                                  true,
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
                  position: "absolute",
                  bottom: "20px",
                  right: "40px",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                {renderEditableText("page2Number", `${values.footer} | 2`)}
              </div>
            </div>

            {/* Page 3 */}
            <div
              style={{
                marginBottom: "40px",
                padding: "40px",
                background: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                position: "relative",
                minHeight: "1122px",
              }}
            >
              {renderEditableHeading(
                1,
                "reportTitlePage3",
                "Information Technology Report",
              )}

              {renderEditableHeading(
                2,
                "continuedActivitiesHeading",
                "Key Activities and Achievements for 1 July 2024 through 30 September 2024 (cont'd)",
              )}

              <FieldArray name="continuedActivities">
                {() =>
                  values.continuedActivities.map((activity, activityIndex) => (
                    <div key={activityIndex} style={{ marginBottom: "20px" }}>
                      {renderEditableHeading(
                        3,
                        `continuedActivities.${activityIndex}.category`,
                        activity.category,
                      )}
                      <FieldArray
                        name={`continuedActivities.${activityIndex}.items`}
                      >
                        {() => (
                          <ul
                            style={{ paddingLeft: "20px", marginTop: "10px" }}
                          >
                            {activity.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                style={{
                                  marginBottom: "10px",
                                  position: "relative",
                                  listStyleType: "disc",
                                }}
                              >
                                {renderEditableText(
                                  `continuedActivities.${activityIndex}.items.${itemIndex}`,
                                  item,
                                  true,
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
                  position: "absolute",
                  bottom: "20px",
                  right: "40px",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                {renderEditableText("page3Number", `${values.footer} | 3`)}
              </div>
            </div>

            {/* Page 4 */}
            <div
              style={{
                marginBottom: "40px",
                padding: "40px",
                background: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                position: "relative",
                minHeight: "1122px",
              }}
            >
              {renderEditableHeading(
                1,
                "reportTitlePage4",
                "Information Technology Report",
              )}

              {renderEditableHeading(
                2,
                "plannedActivitiesHeading",
                "Key Activities Planned for October 2024 – December 2024",
              )}

              <FieldArray name="plannedActivities">
                {({ push, remove }) => (
                  <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    {values.plannedActivities.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          marginBottom: "10px",
                          position: "relative",
                          listStyleType: "disc",
                        }}
                      >
                        {renderEditableText(
                          `plannedActivities.${index}`,
                          item,
                          true,
                        )}
                        {isEditable && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            style={{
                              background: "#f44336",
                              color: "white",
                              border: "none",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                              marginLeft: "10px",
                              position: "absolute",
                              right: "-30px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            ×
                          </button>
                        )}
                      </li>
                    ))}
                    {isEditable && (
                      <li>
                        <button
                          type="button"
                          onClick={() => push("New planned activity")}
                          style={{
                            background: "#4CAF50",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginTop: "10px",
                          }}
                        >
                          + Add Activity
                        </button>
                      </li>
                    )}
                  </ul>
                )}
              </FieldArray>

              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "40px",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                {renderEditableText("page4Number", `${values.footer} | 4`)}
              </div>
            </div>

            {isEditable && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  type="submit"
                  style={{
                    background: "#2196F3",
                    color: "white",
                    padding: "10px 20px",
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

export default ITReport;
