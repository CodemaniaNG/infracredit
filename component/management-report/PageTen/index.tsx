import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
import {ManagementData} from "@/app/types/management"
const PageTen = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24,
    25, 27,
  ]
  const totalArray = ["Total assets", "Total liabilities", "Total equity"]
  return (
    <div className={styles.pageFourteen}>
      {edit ? (
        <input
          type="text"
          value={management.pageTen.heading.title}
          onChange={e => {
            const updatedData = {...management}
            // Update the title1 property
            updatedData.pageTen.heading.title = e.target.value
            // Set the updated state
            setManagement(updatedData)
          }}
        />
      ) : (
        <h2>{management.pageTen.heading.title}</h2>
      )}
      <div className={styles.statementTable}>
        <div className={styles.statementHead}>
          {edit ? (
            <>
              <input
                type="text"
                value={management.pageTen.heading.text1}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageTen.heading.text1 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageTen.heading.text2}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageTen.heading.text2 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageTen.heading.text3}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageTen.heading.text3 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageFive.heading.text4}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageTen.heading.text4 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          ) : (
            <>
              <p>{management.pageTen.heading.text1}</p>
              <p>{management.pageTen.heading.text2}</p>
              <p>{management.pageTen.heading.text3}</p>
              <p>{management.pageTen.heading.text4}</p>
            </>
          )}
        </div>
        <div className={styles.statementHeader}>
          <p></p>
          <p>N’million</p>
          <p>N’million</p>
          <p>%</p>
        </div>
        {management.pageTen.body?.map((item, index) => {
          return (
            <div
              className={styles.statementSingle}
              key={index}
              style={{
                borderTop: totalArray.includes(item.title)
                  ? "1px solid #47B65C"
                  : "1px solid #B5B5B5",
                borderLeft: totalArray.includes(item.title)
                  ? "1px solid #47B65C"
                  : "1px solid #B5B5B5",
                borderBottom: totalArray.includes(item.title)
                  ? "1px solid #47B65C"
                  : "1px solid #B5B5B5",
              }}
            >
              {edit ? (
                <>
                  <input
                    type="text"
                    value={item.title}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageTen.body[index].title = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.first}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageTen.body[index].first = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.second}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageTen.body[index].second = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.growth}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageTen.body[index].growth = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{item.title}</p>
                  <p
                    style={{
                      background: array.includes(index) ? "#E5E5E5" : "white",
                    }}
                  >
                    {item.first}
                  </p>
                  <p
                    style={{
                      background: array.includes(index) ? "#E5E5E5" : "white",
                    }}
                  >
                    {item.second}
                  </p>
                  <p
                    style={{
                      background: array.includes(index) ? "#E5E5E5" : "white",
                    }}
                  >
                    {item.growth}
                  </p>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PageTen
