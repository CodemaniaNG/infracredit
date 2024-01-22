import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction} from "react"
import styles from "./styles.module.css"
import {Title} from "../PageFourteen"
import styled from "styled-components"
const PageSixteen = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  const array: number[] = [5, 6, 7, 8, 9]
  const colorTwo: number[] = [11, 12, 13, 14]
  const colorThree: number[] = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  const boldedItem = [4, 10, 15, 26]
  return (
    <div>
      <section>
        {!edit ? (
          <Title>{management.pageSixteen.title}</Title>
        ) : (
          <>
            <input
              type="text"
              value={management.pageSixteen.title}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the pageFourteen property
                updatedData.pageSixteen.title = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </section>
      <div className={styles.investorsTable} style={{marginBottom: "55px"}}>
        <div className={styles.investorsHeader}>
          <p>SN</p>
          <p>Transaction</p>
          <p>Infrastructure Activity/Industry</p>
          <p style={{textAlign: "center"}}>Amount (NB)</p>
        </div>
        {management.pageSixteen?.body?.map((item, index) => {
          const isLastItem = index === management.pageSixteen?.body.length - 1
          const bold = boldedItem.includes(index)
          return (
            <div className={styles.investorsSingle} key={index}>
              <p
                style={{
                  background: array.includes(index)
                    ? "#93C953"
                    : colorTwo.includes(index)
                    ? "#FEBE10"
                    : colorThree.includes(index)
                    ? "#D2232A"
                    : "",
                }}
              >
                {item.serialNo === 0 ? "" : item.serialNo}
              </p>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={item.transaction}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageSixteen.body[0].transaction =
                        e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <input
                    type="text"
                    value={item.amount}
                    onChange={e => {
                      const updatedData = {...management}
                      updatedData.pageSixteen.body[0].amount = e.target.value
                      setManagement(updatedData)
                    }}
                  />
                  <div>
                    <input
                      type="text"
                      value={item.infrastructure}
                      onChange={e => {
                        const updatedData = {...management}
                        updatedData.pageSixteen.body[0].infrastructure =
                          e.target.value
                        setManagement(updatedData)
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p
                    style={{
                      background: array.includes(index)
                        ? "#93C953"
                        : colorTwo.includes(index)
                        ? "#FEBE10"
                        : colorThree.includes(index)
                        ? "#D2232A"
                        : "",
                      fontWeight: isLastItem
                        ? "bold"
                        : bold
                        ? "bold"
                        : "normal",
                    }}
                  >
                    {item.transaction}
                  </p>
                  <p
                    style={{
                      background: array.includes(index)
                        ? "#93C953"
                        : colorTwo.includes(index)
                        ? "#FEBE10"
                        : colorThree.includes(index)
                        ? "#D2232A"
                        : "",
                    }}
                  >
                    {item.infrastructure}
                  </p>
                  <div
                    style={{
                      background: array.includes(index)
                        ? "#93C953"
                        : colorTwo.includes(index)
                        ? "#FEBE10"
                        : colorThree.includes(index)
                        ? "#D2232A"
                        : "",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: isLastItem ? "bold" : "normal",
                      }}
                    >
                      {item.amount}
                    </p>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
      <section>
        {!edit ? (
          <Text>{management.pageSixteen.text1}</Text>
        ) : (
          <>
            <input
              type="text"
              value={management.pageSixteen.text1}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the pageFourteen property
                updatedData.pageSixteen.text1 = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </section>
      <section style={{marginTop: 12}}>
        {!edit ? (
          <Text>{management.pageSixteen.text2}</Text>
        ) : (
          <>
            <input
              type="text"
              value={management.pageSixteen.text2}
              style={{width: "100%"}}
              onChange={e => {
                const updatedData = {...management}
                // Update the pageFourteen property
                updatedData.pageSixteen.text2 = e.target.value
                // Set the updated state
                setManagement(updatedData)
              }}
            />
          </>
        )}
      </section>
    </div>
  )
}

export default PageSixteen
const Text = styled.section`
  color: #227cbf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
