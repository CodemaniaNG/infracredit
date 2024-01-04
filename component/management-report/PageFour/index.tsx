import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
const PageFour = ({
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
      <div className={styles.pageThirteen}>
        <div className={styles.header}>
          {edit ? (
            <>
              <input
                type="text"
                value={management.pageFour.heading.title1}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFour.heading.title1 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageFour.heading.title2}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFour.heading.title2 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          ) : (
            <>
              <h1>{management.pageFour.heading.title1}</h1>
              <h2>{management.pageFour.heading.title2}</h2>
            </>
          )}
        </div>
        <div className={styles.profitTable}>
          <div className={styles.profitHead}>
            {edit ? (
              <>
                <input
                  type="text"
                  value={management.pageFour.heading.text1}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text1 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
                <input
                  type="text"
                  value={management.pageFour.heading.text2}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text2 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
                <input
                  type="text"
                  value={management.pageFour.heading.text3}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text3 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
                <input
                  type="text"
                  value={management.pageFour.heading.text4}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text4 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
                <input
                  type="text"
                  value={management.pageFour.heading.text5}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text5 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
                <input
                  type="text"
                  value={management.pageFour.heading.text6}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageFour.heading.text6 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
              </>
            ) : (
              <>
                <p>{management.pageFour.heading.text1}</p>
                <p>{management.pageFour.heading.text2}</p>
                <p>{management.pageFour.heading.text3}</p>
                <p>{management.pageFour.heading.text4}</p>
                <p>{management.pageFour.heading.text5}</p>
                <p>{management.pageFour.heading.text6}</p>
              </>
            )}
          </div>
          <div className={styles.profitHeader}>
            <p></p>
            <p>N’million</p>
            <p>N’million</p>
            <p>%</p>
            <p>N’million</p>
            <p>%</p>
          </div>
          {management.pageFour.body?.map((item, index) => {
            return (
              <div className={styles.profitSingle} key={index}>
                {edit ? (
                  <>
                    <input
                      type="text"
                      value={item.title}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].title = e.target.value
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={item.actual}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].actual = e.target.value
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={item.budget}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].budget = e.target.value
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={item.budgetAchieved}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].budgetAchieved =
                          e.target.value
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={item.secondActual}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].secondActual =
                          e.target.value
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={item.growth}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageFour.body[index].growth = e.target.value
                        setManagement(updatedData)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p>{item.title}</p>
                    <p>{item.actual}</p>
                    <p>{item.budget}</p>
                    <p>{item.budgetAchieved}</p>
                    <p>{item.secondActual}</p>
                    <p>{item.growth}</p>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PageFour
