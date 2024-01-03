import React, { useState } from "react";
import styles from "./styles.module.css";

const CreditTemplate = ({
  edit,
  titles,
  datas,
}: {
  edit: boolean
  titles: string
  datas: any
}) => {
  const [title, setTitle] = useState(titles)
  const [data, setData] = useState(datas)
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
          <p>MEETING</p>
          <p>DELIBERATION AND OUTCOME</p>
        </div>
        {data?.map((items: any, index: number) => {
          return (
            <div className={styles.renuContentHeader} key={index}>
              <p>{index + 1}</p>
              {edit ? (
                <textarea
                  value={items.title}
                  onChange={e => {
                    const newState = [...data]

                    newState[index].title = e.target.value
                    setData(newState)
                  }}
                />
              ) : (
                <p>{items.title}</p>
              )}
              <div>
                {items.subTitle.map((item: any, index2: any) => {
                  return (
                    <div className={styles.renuContentType} key={index2}>
                      {edit ? (
                        <input
                          type="text"
                          value={item.title}
                          onChange={e => {
                            const newState = [...data]
                            newState[index].subTitle[index2].title =
                              e.target.value
                            setData(newState)
                          }}
                        />
                      ) : (
                        <h2>
                          {index2 + 1}. {item.title}
                        </h2>
                      )}
                      {edit ? (
                        <textarea
                          value={item.subTitle}
                          onChange={e => {
                            const newState = [...data]
                            newState[index].subTitle[index2].subTitle =
                              e.target.value
                            setData(newState)
                          }}
                        />
                      ) : (
                        <p>{item.subTitle}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreditTemplate
