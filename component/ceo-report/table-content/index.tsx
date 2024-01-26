import React, {Dispatch, SetStateAction, useState} from "react"
import styles from "./styles.module.css"

const TableContent = ({
  edit,
  ceoreportdata,
  setCeoreportdata,
}: {
  edit: boolean
  ceoreportdata: CEOTYPE
  setCeoreportdata: Dispatch<SetStateAction<CEOTYPE>>
}) => {
  interface Sample {
    title: string
    number: number
  }
  const [tableContent, setTableContent] = useState<Sample[]>([
    {
      title: "Key Macro Highlghts of Q1 2022",
      number: 2,
    },
    {
      title: "Strategic Business Plan Update",
      number: 3,
    },
    {
      title: "Risk Management",
      number: 8,
    },
    {
      title: "HSES",
      number: 9,
    },
    {
      title: "Human Resources",
      number: 10,
    },
    {
      title: "Financial Performance",
      number: 11,
    },
    {
      title: "Other Matters",
      number: 12,
    },
    {
      title: "Appendices",
      number: 15,
    },
  ])
  return (
    <div className={styles.tableContent}>
      <div className={styles.tableContentHeader}>
        <h2>TABLE OF CONTENTS</h2>
        <div></div>
      </div>
      <div className={styles.tableContentBody}>
        {ceoreportdata.tableOfContent?.map((item, index) => {
          return (
            <div className={styles.tableContentSingle} key={index}>
              <div className={styles.tableContentText}>
                <div className={styles.tableContentSquare}></div>
                {edit ? (
                  <input
                    type="text"
                    value={item.title}
                    onChange={e => {
                      const updatedData = {...ceoreportdata}
                      // Update the title1 property
                      updatedData.tableOfContent[index].title = e.target.value
                      // Set the updated state
                      setCeoreportdata(updatedData)
                    }}
                  />
                ) : (
                  <h2>{item.title}</h2>
                )}
              </div>
              <p>{item.number}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableContent
