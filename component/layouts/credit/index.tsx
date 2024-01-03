import React, {useState} from "react"
import styles from "./styles.module.css"
import {credit} from "@/utils/data"

const CreditTableComponent = ({
  edit,
  titles,
}: {
  edit: boolean
  titles: string
}) => {
  const [title, setTitle] = useState(titles)
  const [creditPage, setCreditPage] = useState(credit)
  return (
    <div className={styles.renuBody}>
      {edit ? (
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
      ) : (
        <h2>{title}</h2>
      )}
      <div className={styles.renuContent}>
        <div className={styles.renuContentHeader}>
          <p>S/N</p>
          <p className="meeting">MEETING</p>
          <p>DELIBERATION AND OUTCOME</p>
        </div>
        <p
          style={{
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 10,
            borderBottom: "1px solid black",
            fontWeight: 700,
            fontSize: "12px",
          }}
        >
          Credit Transactions
        </p>
        {creditPage.subTitle?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{1}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const updatedCreditPage = {...creditPage}
                    // Update the itemOne property in the specified subTitle
                    updatedCreditPage.subTitle[index].title = e.target.value
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
                        // Update the itemOne property in the specified subTitle
                        updatedCreditPage.subTitle[index].itemOne =
                          e.target.value
                        // Set the updated state
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itmesTwo}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        // Update the itemOne property in the specified subTitle
                        updatedCreditPage.subTitle[index].itmesTwo =
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
                    <p style={{marginBottom: "8px"}}>{items.itemOne}</p>
                    <p style={{marginBottom: "8px"}}>{items.itmesTwo}</p>
                    <p dangerouslySetInnerHTML={{__html: items.itemsThree}}></p>
                  </>
                )}
              </div>
            </div>
          )
        })}
        {creditPage.subTitleTwo?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{2}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const updatedCreditPage = {...creditPage}
                    // Update the itemOne property in the specified subTitle
                    updatedCreditPage.subTitleTwo[index].title = e.target.value
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
                        updatedCreditPage.subTitleTwo[index].itemOne =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itmesTwo}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}
                        updatedCreditPage.subTitleTwo[index].itmesTwo =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                    <textarea
                      value={items.itemsThree}
                      style={{marginBottom: "12px"}}
                      onChange={e => {
                        const updatedCreditPage = {...creditPage}

                        updatedCreditPage.subTitleTwo[index].itemsThree =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p style={{marginBottom: "8px"}}>{items.itemOne}</p>
                    <p style={{marginBottom: "8px"}}>{items.itmesTwo}</p>
                    <p dangerouslySetInnerHTML={{__html: items.itemsThree}}></p>
                  </>
                )}
              </div>
            </div>
          )
        })}
        {creditPage.subTitleThree?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{3}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const updatedCreditPage = {...creditPage}
                    // Update the itemOne property in the specified subTitle
                    updatedCreditPage.subTitleThree[index].title =
                      e.target.value
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
                        updatedCreditPage.subTitleThree[index].itemOne =
                          e.target.value
                        setCreditPage(updatedCreditPage)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p style={{marginBottom: "8px"}}>{items.itemOne}</p>
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

export default CreditTableComponent
