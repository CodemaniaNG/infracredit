import React, {Dispatch, SetStateAction, useState} from "react"
import styles from "./styles.module.css"

const CeoPageOne = ({
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
    subTitle: string[]
  }

  return (
    <div className={styles.pageOne}>
      {ceoreportdata.pageOne?.map((item, index) => {
        return (
          <div key={index}>
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
              <h2 key={index}>{item.title}</h2>
            )}
            {item.subTitle?.map((subTitle, index2) => {
              return (
                <>
                  {edit ? (
                    <textarea
                      key={index2}
                      value={subTitle}
                      onChange={e => {
                        const updatedData = {...ceoreportdata}
                        // Update the title1 property
                        updatedData.pageOne[index].subTitle[index2] =
                          e.target.value
                        // Set the updated state
                        setCeoreportdata(updatedData)
                      }}
                    />
                  ) : (
                    <p key={index2}>{subTitle}</p>
                  )}
                </>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default CeoPageOne
