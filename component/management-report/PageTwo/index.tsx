import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
const PageTwo = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  return (
    <div>
      {edit ? (
        <input
          style={{width: "100%", height: 30, fontWeight: "bold"}}
          value={management.pageTwo.title}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageTwo: {
                ...prevData.pageTwo,
                title: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <div
          className={styles.headingOne}
          dangerouslySetInnerHTML={{__html: management.pageTwo.title}}
        ></div>
      )}
      {edit ? (
        <textarea
          style={{width: "100%", height: 30, fontWeight: "bold"}}
          value={management.pageTwo.content}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageTwo: {
                ...prevData.pageTwo,
                content: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <div className={styles.textContent}>{management.pageTwo.content}</div>
      )}
      {edit ? (
        <input
          style={{width: "100%", height: 30, fontWeight: "bold"}}
          value={management.pageTwo.figure}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageTwo: {
                ...prevData.pageTwo,
                figure: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <p className={styles.figureHeading}>{management.pageTwo.figure}</p>
      )}
      <div className={styles.flexContainer}>
        <div className={styles.first_item}>
          {edit ? (
            <div className={styles.boxContainer}>
              {management.pageTwo.prices?.map((value, index) => {
                return (
                  <textarea
                    key={value.id}
                    style={{width: "100%", height: "30px", fontWeight: "bold"}}
                    value={value.amount}
                    onChange={e => {
                      const newPrices = [...management.pageTwo.prices]
                      newPrices[index].amount = e.target.value

                      setManagement(prevData => ({
                        ...prevData,
                        pageTwo: {
                          ...prevData.pageTwo,
                          prices: newPrices,
                        },
                      }))
                    }}
                  />
                )
              })}
            </div>
          ) : (
            <div className={styles.boxContainer}>
              {management.pageTwo.prices.map(value => {
                return <div key={value.id}>{value.amount}</div>
              })}
            </div>
          )}
        </div>
        {edit ? (
          <>
            <div className={styles.second_item}>
              <div style={{width: "154px"}}>
                {management.pageTwo.graphOne.dataValue.map((value, index) => {
                  const h = ["74", "154"]
                  return (
                    <div
                      key={value.title}
                      style={{
                        backgroundColor: value.background,
                        width: "100%",
                        height: `${h[index]}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className={styles.textInner}
                    >
                      {value.title}
                    </div>
                  )
                })}
                <p className={styles.tagYear}>
                  <input
                    value={management.pageTwo.graphOne.yearTag}
                    onChange={e => {
                      setManagement(prevData => ({
                        ...prevData,
                        pageTwo: {
                          ...prevData.pageTwo,
                          graphOne: {
                            ...prevData.pageTwo.graphOne,
                            yearTag: e.target.value,
                          },
                        },
                      }))
                    }}
                  />
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 8,
                }}
                className={styles.profitloss}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    background: management.pageTwo.graphOne.gross.background,
                    display: "inline-block",
                  }}
                ></span>{" "}
                {management.pageTwo.graphOne.gross.title}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.second_item}>
            <div style={{width: "154px"}}>
              {management.pageTwo.graphOne.dataValue.map((value, index) => {
                const h = ["74", "154"]
                return (
                  <div
                    key={value.title}
                    style={{
                      backgroundColor: value.background,
                      width: "100%",
                      height: `${h[index]}px`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className={styles.textInner}
                  >
                    {value.title}
                  </div>
                )
              })}
              <p className={styles.tagYear}>
                {management.pageTwo.graphOne.yearTag}{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: 8,
              }}
              className={styles.profitloss}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background: management.pageTwo.graphOne.gross.background,
                  display: "inline-block",
                }}
              ></span>{" "}
              {management.pageTwo.graphOne.gross.title}
            </div>
          </div>
        )}
        {edit ? (
          <>
            <div className={styles.second_item}>
              <div style={{width: "154px"}}>
                {management.pageTwo.graphTwo.dataValue.map((value, index) => {
                  const h = ["74", "237"]
                  return (
                    <div
                      key={value.title}
                      style={{
                        backgroundColor: value.background,
                        width: "100%",
                        height: `${h[index]}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className={styles.textInner}
                    >
                      {value.title}
                    </div>
                  )
                })}
                <p className={styles.tagYear}>
                  <input
                    value={management.pageTwo.graphTwo.yearTag}
                    onChange={e => {
                      setManagement(prevData => ({
                        ...prevData,
                        pageTwo: {
                          ...prevData.pageTwo,
                          graphTwo: {
                            ...prevData.pageTwo.graphTwo,
                            yearTag: e.target.value,
                          },
                        },
                      }))
                    }}
                  />
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 8,
                }}
                className={styles.profitloss}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    background:
                      management.pageTwo.graphTwo.profitLoss.background,
                    display: "inline-block",
                  }}
                ></span>{" "}
                {management.pageTwo.graphTwo.profitLoss.title}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.second_item}>
            <div style={{width: "154px"}}>
              {management.pageTwo.graphTwo.dataValue.map((value, index) => {
                const h = ["74", "237"]
                return (
                  <div
                    key={value.title}
                    style={{
                      backgroundColor: value.background,
                      width: "100%",
                      height: `${h[index]}px`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className={styles.textInner}
                  >
                    {value.title}
                  </div>
                )
              })}
              <p className={styles.tagYear}>
                {management.pageTwo.graphTwo.yearTag}{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: 8,
              }}
              className={styles.profitloss}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background: management.pageTwo.graphTwo.profitLoss.background,
                  display: "inline-block",
                }}
              ></span>{" "}
              {management.pageTwo.graphTwo.profitLoss.title}
            </div>
          </div>
        )}
      </div>
      {edit ? (
        <div className={styles.explanation}>
          <textarea
            value={management.pageTwo.explanation}
            style={{width: "100%", height: "30px"}}
            onChange={e => {
              setManagement(prevData => ({
                ...prevData,
                pageTwo: {
                  ...prevData.pageTwo,
                  explanation: e.target.value,
                },
              }))
            }}
          />
        </div>
      ) : (
        <div className={styles.explanation}>
          {management.pageTwo.explanation}
        </div>
      )}

      <p className={styles.figure}>
        {management.pageTwo.graphSectionTwo.figure}
      </p>
      <div className={styles.flexContainerTwo}>
        <div className={styles.first_item}>
          {edit ? (
            <div className={styles.boxContainer}>
              {management.pageTwo.graphSectionTwo.prices?.map(
                (value, index) => {
                  return (
                    <textarea
                      key={value.id}
                      style={{
                        width: "100%",
                        height: "30px",
                        fontWeight: "bold",
                      }}
                      value={value.amount}
                      onChange={e => {
                        const newPrices = [
                          ...management.pageTwo.graphSectionTwo.prices,
                        ]
                        newPrices[index].amount = e.target.value

                        setManagement(prevData => ({
                          ...prevData,
                          pageTwo: {
                            ...prevData.pageTwo,
                            graphSectionTwo: {
                              ...prevData.pageTwo.graphSectionTwo,
                              prices: newPrices,
                            },
                          },
                        }))
                      }}
                    />
                  )
                }
              )}
            </div>
          ) : (
            <div className={styles.boxContainer}>
              {management.pageTwo.graphSectionTwo.prices.map(value => {
                return <div key={value.id}>{value.amount}</div>
              })}
            </div>
          )}
        </div>
        {edit ? (
          <>
            <div className={styles.second_item}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {management.pageTwo.graphSectionTwo.graphOne.dataValue.map(
                  (value, index) => {
                    const h = ["79", "124"]
                    return (
                      <div key={value.title}>
                        <div>
                          <p style={{textAlign: "center"}}> {value.title}</p>
                          <div
                            style={{
                              backgroundColor: value.background,
                              width: "152px",
                              height: `${h[index]}px`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className={styles.textInner}
                          ></div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
              <p className={styles.tagYear}>
                <input
                  value={management.pageTwo.graphSectionTwo.graphOne.yearTag}
                  onChange={e => {
                    setManagement(prevData => ({
                      ...prevData,
                      pageTwo: {
                        ...prevData.pageTwo,
                        graphSectionTwo: {
                          ...prevData.pageTwo.graphSectionTwo,
                          graphOne: {
                            ...prevData.pageTwo.graphSectionTwo.graphOne,
                            yearTag: e.target.value,
                          },
                        },
                      },
                    }))
                  }}
                />
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 8,
                }}
                className={styles.profitloss}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    background:
                      management.pageTwo.graphSectionTwo.graphOne.profitLoss
                        .background,
                    display: "inline-block",
                  }}
                ></span>{" "}
                {management.pageTwo.graphSectionTwo.graphOne.profitLoss.title}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.second_item}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {management.pageTwo.graphSectionTwo.graphOne.dataValue.map(
                (value, index) => {
                  const h = ["74", "154"]
                  return (
                    <div key={value.title}>
                      <div>
                        <p style={{textAlign: "center"}}> {value.title}</p>
                        <div
                          style={{
                            backgroundColor: value.background,
                            width: "152px",
                            height: `${h[index]}px`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className={styles.textInner}
                        ></div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
            <p className={styles.tagYear}>
              {management.pageTwo.graphSectionTwo.graphOne.yearTag}{" "}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: 8,
              }}
              className={styles.profitloss}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    management.pageTwo.graphSectionTwo.graphOne.profitLoss
                      .background,
                  display: "inline-block",
                }}
              ></span>{" "}
              {management.pageTwo.graphSectionTwo.graphOne.profitLoss.title}
            </div>
          </div>
        )}
        {edit ? (
          <>
            <div className={styles.second_item}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {management.pageTwo.graphSectionTwo.graphTwo.dataValue.map(
                  (value, index) => {
                    const h = ["74", "154"]
                    return (
                      <div key={value.title}>
                        <div>
                          <p style={{textAlign: "center"}}> {value.title}</p>
                          <div
                            style={{
                              backgroundColor: value.background,
                              width: "152px",
                              height: `${h[index]}px`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className={styles.textInner}
                          ></div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
              <p className={styles.tagYear}>
                <input
                  value={management.pageTwo.graphSectionTwo.graphTwo.yearTag}
                  onChange={e => {
                    setManagement(prevData => ({
                      ...prevData,
                      pageTwo: {
                        ...prevData.pageTwo,
                        graphSectionTwo: {
                          ...prevData.pageTwo.graphSectionTwo,
                          graphTwo: {
                            ...prevData.pageTwo.graphSectionTwo.graphTwo,
                            yearTag: e.target.value,
                          },
                        },
                      },
                    }))
                  }}
                />
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 8,
                }}
                className={styles.profitloss}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    background:
                      management.pageTwo.graphSectionTwo.graphTwo.profitLoss
                        .background,
                    display: "inline-block",
                  }}
                ></span>{" "}
                {management.pageTwo.graphSectionTwo.graphTwo.profitLoss.title}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.second_item}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {management.pageTwo.graphSectionTwo.graphTwo.dataValue.map(
                (value, index) => {
                  const h = ["74", "154"]
                  return (
                    <div key={value.title}>
                      <div>
                        <p style={{textAlign: "center"}}> {value.title}</p>
                        <div
                          style={{
                            backgroundColor: value.background,
                            width: "152px",
                            height: `${h[index]}px`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className={styles.textInner}
                        ></div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
            <p className={styles.tagYear}>
              {management.pageTwo.graphSectionTwo.graphTwo.yearTag}{" "}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: 8,
              }}
              className={styles.profitloss}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    management.pageTwo.graphSectionTwo.graphTwo.profitLoss
                      .background,
                  display: "inline-block",
                }}
              ></span>{" "}
              {management.pageTwo.graphSectionTwo.graphTwo.profitLoss.title}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageTwo
