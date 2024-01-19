import {ManagementData} from "@/app/types/management"
import {Dispatch, SetStateAction} from "react"
import styles from "./style.module.css"
const PageSix = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  const array: number[] = [1, 6, 13, 14]

  return (
    <div>
      <div>
        <div className={styles.pageThirteen}>
          <div className={styles.header}>
            {edit ? (
              <>
                <input
                  type="text"
                  value={management.pageSix.heading.title1}
                  onChange={e => {
                    const updatedData = {...management}
                    // Update the title1 property
                    updatedData.pageSix.heading.title1 = e.target.value
                    // Set the updated state
                    setManagement(updatedData)
                  }}
                />
              </>
            ) : (
              <>
                <h1>{management.pageSix.heading.title1}</h1>
              </>
            )}
          </div>
          <div className={styles.profitTable}>
            <div className={styles.profitHead}>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={management.pageSix.heading.title2}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.title2 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                </>
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {management.pageSix.heading.title2}
                </p>
              )}
            </div>
            <div className={styles.profitHead}>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={management.pageSix.heading.text1}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text1 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={management.pageSix.heading.text2}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text2 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={management.pageSix.heading.text3}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text3 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={management.pageSix.heading.text4}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text4 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={management.pageSix.heading.text5}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text5 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={management.pageSix.heading.text6}
                    onChange={e => {
                      const updatedData = {...management}
                      // Update the title1 property
                      updatedData.pageSix.heading.text6 = e.target.value
                      // Set the updated state
                      setManagement(updatedData)
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{management.pageSix.heading.text1}</p>
                  <p>{management.pageSix.heading.text2}</p>
                  <p>{management.pageSix.heading.text3}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: management.pageSix.heading.text4,
                    }}
                  ></p>
                  <p>{management.pageSix.heading.text5}</p>
                  <p>{management.pageSix.heading.text6}</p>
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
            {management.pageSix.body?.map((item, index) => {
              return (
                <div className={styles.profitSingle} key={index}>
                  {edit ? (
                    <>
                      <input
                        type="text"
                        value={item.title}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].title = e.target.value
                          setManagement(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.actual}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].actual =
                            e.target.value
                          setManagement(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.budget}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].budget =
                            e.target.value
                          setManagement(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.budgetAchieved}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].budgetAchieved =
                            e.target.value
                          setManagement(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.secondActual}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].secondActual =
                            e.target.value
                          setManagement(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.growth}
                        onChange={e => {
                          const updatedData = {...management}
                          updatedData.pageSix.body[index].growth =
                            e.target.value
                          setManagement(updatedData)
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <p
                        style={{
                          background: array.includes(index)
                            ? "#E5E5E5"
                            : "white",
                        }}
                      >
                        {item.title}
                      </p>
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
                        {item.budgetAchieved}
                      </p>
                      <p
                        style={{
                          background: array.includes(index)
                            ? "#E5E5E5"
                            : "white",
                        }}
                      >
                        {item.secondActual}
                      </p>
                      <p
                        style={{
                          background: array.includes(index)
                            ? "#E5E5E5"
                            : "white",
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
      </div>
    </div>
  )
}

export default PageSix
