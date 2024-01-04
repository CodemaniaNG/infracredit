import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
import {ManagementData} from "@/app/types/management"
const PageFive = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  return (
    <div className={styles.pageFourteen}>
      {edit ? (
        <input
          type="text"
          value={management.pageFive.heading.title}
          onChange={e => {
            const updatedData = {...management}
            // Update the title1 property
            updatedData.pageFive.heading.title = e.target.value
            // Set the updated state
            setManagement(updatedData)
          }}
        />
      ) : (
        <h2>{management.pageFive.heading.title}</h2>
      )}
      <div className={styles.statementTable}>
        <div className={styles.statementHead}>
          {edit ? (
            <>
              <input
                type="text"
                value={management.pageFive.heading.text1}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFive.heading.text1 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageFive.heading.text2}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFive.heading.text2 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
              <input
                type="text"
                value={management.pageFive.heading.text3}
                onChange={e => {
                  const updatedData = {...management}
                  // Update the title1 property
                  updatedData.pageFive.heading.text3 = e.target.value
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
                  updatedData.pageFive.heading.text4 = e.target.value
                  // Set the updated state
                  setManagement(updatedData)
                }}
              />
            </>
          ) : (
            <>
              <p>{management.pageFive.heading.text1}</p>
              <p>{management.pageFive.heading.text2}</p>
              <p>{management.pageFive.heading.text3}</p>
              <p>{management.pageFive.heading.text4}</p>
            </>
          )}
        </div>
        <div className={styles.statementHeader}>
          <p></p>
          <p>N’million</p>
          <p>N’million</p>
          <p>%</p>
        </div>
        {management.pageFive.body?.map((item, index) => {
          return (
            <div className={styles.statementSingle} key={index}>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={item.title}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageFive.body[index].title = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.first}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageFive.body[index].first = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.second}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageFive.body[index].second = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.growth}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageFive.body[index].growth = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{item.title}</p>
                  <p>{item.first}</p>
                  <p>{item.second}</p>
                  <p>{item.growth}</p>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PageFive
