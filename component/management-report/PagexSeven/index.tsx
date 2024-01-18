import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
const PageSeven = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  const array: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]
  return (
    <div>
      <div>
        <div>
          <div className={styles.pageThirteen}>
            <div className={styles.header}>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={management.pageSeven.title}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSeven.title = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <>
                    <input
                      type="text"
                      value={management.pageSeven.titleTwo}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the title1 property
                        updatedData.pageSeven.titleTwo = e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                  </>
                </>
              ) : (
                <>
                  <h1>{management.pageSeven.title}</h1>
                  <p
                    style={{
                      textAlign: "left",
                      width: "100%",
                      fontSize: 18,
                      fontWeight: 500,
                      color: "#227CBF",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: management.pageSeven.titleTwo,
                    }}
                  ></p>
                </>
              )}
            </div>
            <div className={styles.profitTable}>
              <div className={styles.profitHead}>
                {edit ? (
                  <>
                    <input
                      type="text"
                      value={management.pageSeven.text1}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the title1 property
                        updatedData.pageSeven.text1 = e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={management.pageSeven.text2}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the title1 property
                        updatedData.pageSeven.text2 = e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={management.pageSeven.text3}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the title1 property
                        updatedData.pageSeven.text3 = e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                    <input
                      type="text"
                      value={management.pageSeven.text4}
                      onChange={e => {
                        const updatedData = {...management}
                        // Update the title1 property
                        updatedData.pageSeven.text4 = e.target.value
                        // Set the updated state
                        setManagement(updatedData)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p>{management.pageSeven.text1}</p>
                    <p>{management.pageSeven.text2}</p>
                    <p>{management.pageSeven.text3}</p>
                    <p>{management.pageSeven.text4}</p>
                  </>
                )}
              </div>
              {management.pageSeven.body?.map((item, index) => {
                return (
                  <div className={styles.profitSingle} key={index}>
                    {edit ? (
                      <>
                        <input
                          type="text"
                          value={item.ratio}
                          onChange={e => {
                            const updatedData = {...management}
                            updatedData.pageSeven.body[index].ratio =
                              e.target.value
                            setManagement(updatedData)
                          }}
                        />
                        <input
                          type="text"
                          value={item.actual}
                          onChange={e => {
                            const updatedData = {...management}
                            updatedData.pageSeven.body[index].actual =
                              e.target.value
                            setManagement(updatedData)
                          }}
                        />
                        <input
                          type="text"
                          value={item.budget}
                          onChange={e => {
                            const updatedData = {...management}
                            updatedData.pageSeven.body[index].budget =
                              e.target.value
                            setManagement(updatedData)
                          }}
                        />
                        <input
                          type="text"
                          value={item.actual2}
                          onChange={e => {
                            const updatedData = {...management}
                            updatedData.pageSeven.body[index].actual2 =
                              e.target.value
                            setManagement(updatedData)
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <p>{item.ratio}</p>
                        <p
                          style={{
                            background: array.includes(index)
                              ? "#E5E5E5"
                              : "white",
                          }}
                        >
                          {item.actual}
                        </p>
                        <p
                          style={{
                            background: array.includes(index)
                              ? "#E5E5E5"
                              : "white",
                          }}
                        >
                          {item.budget}
                        </p>
                        <p
                          style={{
                            background: array.includes(index)
                              ? "#E5E5E5"
                              : "white",
                          }}
                        >
                          {item.actual2}
                        </p>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSeven
