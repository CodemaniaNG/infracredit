import React, {useState} from "react"
import styles from "./styles.module.css"
import {credit} from "@/utils/data"

const SecondPage = ({edit, titles}: {edit: boolean; titles: string}) => {
  const [title, setTitle] = useState(titles)
  const [creditPage, setCreditPage] = useState(credit)
  return (
    <div className={styles.renuBody}>
      <div className={styles.renuContent}>
        {creditPage.subTitleThree?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{null}</p>
              <p>{null}</p>
              <div
                className={styles.renuContentType}
                style={{fontSize: "12px", lineHeight: "line-height: 150%"}}
              >
                {edit ? (
                  <>
                    <textarea
                      style={{marginBottom: "12px"}}
                      value={items.itemsTwo}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        // Update the itemOne property in the specified subTitle
                        updatedCreditPage.subTitleThree[index].itemsTwo =
                          e.target.value
                        // Set the updated state
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itemsThree}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        // Update the itemOne property in the specified subTitle
                        updatedCreditPage.subTitle[index].itemsThree =
                          e.target.value
                        // Set the updated state
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p style={{marginBottom: "8px"}}>{items.itemsTwo}</p>
                    <p dangerouslySetInnerHTML={{__html: items.itemsThree}}></p>
                  </>
                )}
              </div>
            </div>
          )
        })}
        {creditPage.subTitleFour?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{4}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const updatedCreditPage = {...creditPage}
                    // Update the itemOne property in the specified subTitle
                    updatedCreditPage.subTitleFour[index].title = e.target.value
                    // Set the updated state
                    setCreditPage(updatedCreditPage)
                  }}
                />
              ) : (
                <p>{items.title}</p>
              )}

              <div
                className={styles.renuContentType}
                style={{fontSize: "12px", lineHeight: "150%"}}
              >
                {edit ? (
                  <>
                    <textarea
                      style={{marginBottom: "12px"}}
                      value={items.itemOne}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleFour[index].itemOne =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itmesTwo}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleFour[index].itemsTwo =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itemsThree}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}

                        updatedCreditPage.subTitleFour[index].itemsThree =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p style={{marginBottom: "8px"}}>{items.itemOne}</p>
                    <p style={{marginBottom: "8px"}}>{items.itemsTwo}</p>
                    <p dangerouslySetInnerHTML={{__html: items.itemsThree}}></p>
                  </>
                )}
              </div>
            </div>
          )
        })}
        {creditPage.subTitleFive?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{5}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const updatedCreditPage = {...creditPage}
                    // Update the itemOne property in the specified subTitle
                    updatedCreditPage.subTitleFive[index].title = e.target.value
                    // Set the updated state
                    setCreditPage(updatedCreditPage)
                  }}
                />
              ) : (
                <p>{items.title}</p>
              )}

              <div
                className={styles.renuContentType}
                style={{fontSize: "12px", lineHeight: "150%"}}
              >
                {edit ? (
                  <>
                    <textarea
                      style={{marginBottom: "12px"}}
                      value={items.itemOne}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleFive[index].itemOne =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      style={{marginBottom: "12px"}}
                      value={items.itemsTwo}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleFive[index].itemsTwo =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      style={{marginBottom: "12px"}}
                      value={items.itemsThree}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleFive[index].itemsThree =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p style={{marginBottom: "8px"}}>{items.itemOne}</p>
                    <p style={{marginBottom: "8px"}}>{items.itemsTwo}</p>
                    <p dangerouslySetInnerHTML={{__html: items.itemsThree}}></p>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SecondPage
