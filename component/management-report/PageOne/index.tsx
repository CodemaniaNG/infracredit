import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
const PageOne = ({
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
          value={management.pageOne.title}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageOne: {
                ...prevData.pageOne,
                title: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <h2 className={styles.headingOne}>{management.pageOne.title}</h2>
      )}
      {edit ? (
        <input
          style={{width: "100%", height: 30, fontWeight: "bold"}}
          value={management.pageOne.subtitle}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageOne: {
                ...prevData.pageOne,
                subtitle: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <h2 className={styles.subHeading}>{management.pageOne.subtitle}</h2>
      )}
      {edit ? (
        <div className={styles.boxContainer}>
          {management.pageOne.dataPackOne.map((value, index) => {
            return (
              <textarea
                key={value.id}
                style={{width: "100%", height: 40, fontWeight: "bold"}}
                value={value.content}
                onChange={e => {
                  const newDataPackOne = [...management.pageOne.dataPackOne]
                  newDataPackOne[index].content = e.target.value

                  setManagement(prevData => ({
                    ...prevData,
                    pageOne: {
                      ...prevData.pageOne,
                      dataPackOne: newDataPackOne,
                    },
                  }))
                }}
              />
            )
          })}
        </div>
      ) : (
        <div className={styles.boxContainer}>
          {management.pageOne.dataPackOne.map(value => {
            return <div key={value.id}>{value.content}</div>
          })}
        </div>
      )}
      {edit ? (
        <input
          style={{width: "100%", height: 30, fontWeight: "bold"}}
          value={management.pageOne.subTitleTwo}
          onChange={e => {
            setManagement(prevData => ({
              ...prevData,
              pageOne: {
                ...prevData.pageOne,
                subTitleTwo: e.target.value,
              },
            }))
          }}
        />
      ) : (
        <h2 className={styles.subHeading}>{management.pageOne.subTitleTwo}</h2>
      )}
      <div>
        {edit ? (
          <div className={styles.boxContainer}>
            {management.pageOne.dataPackTwo.map((value, index) => {
              return (
                <textarea
                  key={value.id}
                  style={{width: "100%", height: 40, fontWeight: "bold"}}
                  value={value.content}
                  onChange={e => {
                    const newDataPackOne = [...management.pageOne.dataPackTwo]
                    newDataPackOne[index].content = e.target.value

                    setManagement(prevData => ({
                      ...prevData,
                      pageOne: {
                        ...prevData.pageOne,
                        dataPackTwo: newDataPackOne,
                      },
                    }))
                  }}
                />
              )
            })}
          </div>
        ) : (
          <div className={styles.boxContainer}>
            {management.pageOne.dataPackTwo.map(value => {
              return <div key={value.id}>{value.content}</div>
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageOne
// •
