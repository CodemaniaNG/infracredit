import React, {
  Dispatch,
  SetStateAction,
  useState,
} from "react"
import styles from "./styles.module.css"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import {Doughnut} from "react-chartjs-2"
import "chart.js/auto"
import type {ChartData, ChartOptions} from "chart.js"
import PopupStyle from "@/component/SmallComponents/popupStyle"
import {pieValue} from "@/utils/pieValue"
import SecondInput from "@/component/SmallComponents/second-input"
import ChartPopup from "@/component/chart-popup"

ChartJS.register(ArcElement, Tooltip, Legend)
const CeoPageTwo = ({
  edit,
  popupAction,
  popup,
  popupClose,
  ceoreportdata,
  setCeoreportdata,
}: {
  edit: boolean
  ceoreportdata: CEOTYPE
  setCeoreportdata: Dispatch<SetStateAction<CEOTYPE>>
  popupAction: any
  popup: boolean
  popupClose: any
}) => {
  interface LineProps {
    options: ChartOptions<"doughnut">
    data: ChartData<"doughnut">
  }

  const [chartDatas, setChartDatas] = useState<any>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [23, 11, 15, 13, 12, 14, 12],
          backgroundColor: [
            "#5B9BD5",
            "#70AD47",
            "#A9D18E",
            "#70AD47",
            "#E2F0D9",
            "#A5A5A5",
            "#FFC000",
          ],
          weight: 1,
        },
      ],
      labels: [
        "GPC 23%",
        "PAT 11%",
        "GELUL 15%",
        "VIATHAN 13%",
        "NSP 12%",
        "TTSP 14%",
        "LFZC 12%",
      ],
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
          display: true,
        },
        title: {
          display: false,
          text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
          color: "#70ad47",
          font: {size: 20, weight: "bold", family: "Inter"},
          fullSize: true,
        },
      },
    },
  })

  const [data, setData] = useState()

  type SampleBody = {
    title: string
    text1: string
    text2: string
    text3: string
  }

  interface Sample {
    header: {
      header1: string
      header2: string
      header3: string
      header4: string
    }
    body: SampleBody[]
  }

  return (
    <div className={styles.pageTwo}>
      <div className={styles.strategicPlan}>
        {edit ? (
          <input
            type="text"
            value={ceoreportdata?.pageTwo.sectionOne.title1}
            onChange={e => {
              const updatedData = {...ceoreportdata}
              // Update the title1 property
              ceoreportdata.pageTwo.sectionOne.title1 = e.target.value
              // Set the updated state
              setCeoreportdata(updatedData)
            }}
          />
        ) : (
          <h2>{ceoreportdata.pageTwo.sectionOne.title1}</h2>
        )}
        {edit ? (
          <textarea
            value={ceoreportdata.pageTwo.sectionOne.text1}
            onChange={e => {
              const updatedData = {...ceoreportdata}
              // Update the title1 property
              ceoreportdata.pageTwo.sectionOne.text1 = e.target.value
              // Set the updated state
              setCeoreportdata(updatedData)
            }}
          />
        ) : (
          <p>{ceoreportdata.pageTwo.sectionOne.text1}</p>
        )}
      </div>
      <div className={styles.currentPort}>
        {edit ? (
          <input
            type="text"
            value={ceoreportdata.pageTwo.sectionOne.title2}
            onChange={e => {
              const updatedData = {...ceoreportdata}
              // Update the title1 property
              ceoreportdata.pageTwo.sectionOne.title2 = e.target.value
              // Set the updated state
              setCeoreportdata(updatedData)
            }}
          />
        ) : (
          <h2>{ceoreportdata.pageTwo.sectionOne.title2}</h2>
        )}
        <div>
          {edit ? (
            <textarea
              value={ceoreportdata.pageTwo.sectionOne.text2}
              onChange={e => {
                const updatedData = {...ceoreportdata}
                // Update the title1 property
                ceoreportdata.pageTwo.sectionOne.text2 = e.target.value
                // Set the updated state
                setCeoreportdata(updatedData)
              }}
            />
          ) : (
            <p>{ceoreportdata.pageTwo.sectionOne.text2}</p>
          )}
          <div className={styles.currentChart}>
            <h2>
              Analysis of Guaranteed Transactions Since Inception of NGN87.6
              Billion as at 28 February 2022
            </h2>
            <Doughnut
              data={chartDatas.data}
              options={chartDatas.options}
              onClick={edit ? popupAction : null}
            />
          </div>
          {popup ? (
            <ChartPopup
              chartDatas={chartDatas}
              popupClose={popupClose}
              setChartDatas={setChartDatas}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.keyStatistics}>
        <div>
          {edit ? (
            <input
              type="text"
              value={ceoreportdata.pageTwo.sectionOne.title3}
              onChange={e => {
                const updatedData = {...ceoreportdata}
                // Update the title1 property
                ceoreportdata.pageTwo.sectionOne.title3 = e.target.value
                // Set the updated state
                setCeoreportdata(updatedData)
              }}
            />
          ) : (
            <h2>{ceoreportdata.pageTwo.sectionOne.title3}</h2>
          )}

          <div className={styles.smallLine}></div>
        </div>
        <div className={styles.keyTable}>
          {ceoreportdata.pageTwo.sectionTwo.pageContent?.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.keyTableHeader}>
                  {edit ? (
                    <>
                      <input
                        type="text"
                        value={item.header.header1}
                        onChange={e => {
                          const updatedData = {...ceoreportdata}
                          // Update the title1 property
                          ceoreportdata.pageTwo.sectionTwo.pageContent[
                            index
                          ].header.header1 = e.target.value
                          // Set the updated state
                          setCeoreportdata(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header2}
                        onChange={e => {
                          const updatedData = {...ceoreportdata}
                          // Update the title1 property
                          ceoreportdata.pageTwo.sectionTwo.pageContent[
                            index
                          ].header.header2 = e.target.value
                          // Set the updated state
                          setCeoreportdata(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header3}
                        onChange={e => {
                          const updatedData = {...ceoreportdata}
                          // Update the title1 property
                          ceoreportdata.pageTwo.sectionTwo.pageContent[
                            index
                          ].header.header3 = e.target.value
                          // Set the updated state
                          setCeoreportdata(updatedData)
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header4}
                        onChange={e => {
                          const updatedData = {...ceoreportdata}
                          // Update the title1 property
                          ceoreportdata.pageTwo.sectionTwo.pageContent[
                            index
                          ].header.header4 = e.target.value
                          // Set the updated state
                          setCeoreportdata(updatedData)
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <p>{item.header.header1}</p>
                      <p>{item.header.header2}</p>
                      <p>{item.header.header3}</p>
                      <p>{item.header.header4}</p>
                    </>
                  )}
                </div>
                {item.body?.map((items, index2) => {
                  return (
                    <div className={styles.keyTableSingle} key={index2}>
                      {edit ? (
                        <>
                          <input
                            type="text"
                            value={items.title}
                            onChange={e => {
                              const updatedData = {...ceoreportdata}
                              // Update the title1 property
                              ceoreportdata.pageTwo.sectionTwo.pageContent[
                                index
                              ].body[index2].title = e.target.value
                              // Set the updated state
                              setCeoreportdata(updatedData)
                            }}
                          />
                          <input
                            type="text"
                            value={items.text1}
                            onChange={e => {
                              const updatedData = {...ceoreportdata}
                              // Update the title1 property
                              ceoreportdata.pageTwo.sectionTwo.pageContent[
                                index
                              ].body[index2].text1 = e.target.value
                              // Set the updated state
                              setCeoreportdata(updatedData)
                            }}
                          />
                          <input
                            type="text"
                            value={items.text2}
                            onChange={e => {
                              const updatedData = {...ceoreportdata}
                              // Update the title1 property
                              ceoreportdata.pageTwo.sectionTwo.pageContent[
                                index
                              ].body[index2].text2 = e.target.value
                              // Set the updated state
                              setCeoreportdata(updatedData)
                            }}
                          />
                          <input
                            type="text"
                            value={items.text3}
                            onChange={e => {
                              const updatedData = {...ceoreportdata}
                              // Update the title1 property
                              ceoreportdata.pageTwo.sectionTwo.pageContent[
                                index
                              ].body[index2].text3 = e.target.value
                              // Set the updated state
                              setCeoreportdata(updatedData)
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <p>{items.title}</p>
                          <p>{items.text1}</p>
                          <p>{items.text2}</p>
                          <p>{items.text3}</p>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CeoPageTwo
