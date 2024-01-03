import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./styles.module.css"
const PageThree = ({
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
          style={{width: "100%", height: "30px"}}
          onChange={event => {
            setManagement(prev => {
              return {
                ...prev,
                pageThree: {
                  ...prev.pageThree,
                  intro: event.target.value,
                },
              }
            })
          }}
          value={management.pageThree.intro}
        ></input>
      ) : (
        <p className={styles.intro}>{management.pageThree.intro}</p>
      )}
      {edit ? (
        <input
          style={{width: "100%", height: "30px"}}
          onChange={event => {
            setManagement(prev => {
              return {
                ...prev,
                pageThree: {
                  ...prev.pageThree,
                  graphSection: {
                    ...prev.pageThree.graphSection,
                    figure: event.target.value,
                  },
                },
              }
            })
          }}
          value={management.pageThree.graphSection.figure}
        ></input>
      ) : (
        <p className={styles.figure}>
          {management.pageThree.graphSection.figure}
        </p>
      )}
    </div>
  )
}

export default PageThree
