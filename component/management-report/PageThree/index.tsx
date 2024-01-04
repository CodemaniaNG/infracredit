import {ManagementData} from "@/app/types/management"
import React, {Dispatch, SetStateAction, useState} from "react"
import styles from "./styles.module.css"
import {Doughnut} from "react-chartjs-2"
import {ChartData, ChartOptions} from "chart.js"

interface LineProps {
  options: ChartOptions<"doughnut">
  data: ChartData<"doughnut">
}
const PageThree = ({
  edit,
  management,
  setManagement,
}: {
  edit: boolean
  management: ManagementData
  setManagement: Dispatch<SetStateAction<ManagementData>>
}) => {
  const [chartData2, setChartData2] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [49.0, 11.0, 10.0, 4.0, 8.0, 7.0, 49.0],
          backgroundColor: [
            "#1D4F79",
            "#4E82BE",
            "#FEBE10",
            "#93C953",
            "#82B566",
            "#00B14E",
            "#6F3A96",
          ],
          weight: 1,
        },
      ],
      labels: [
        "Staff Costs",
        "Professional Fees",
        "Depreciation and amorization",
        "IT cost",
        "Audit Fees",
        "Director’s Fees",
        "Other Expenses",
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
          position: "bottom",
          display: true,
          labels: {boxWidth: 10},
        },
        // title: {
        //   display: true,
        //   text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
        //   color: "#70ad47",
        //   font: { size: 20, weight: "bold", family: "Inter" },
        //   fullSize: true,
        // },
      },
    },
  })
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
      <div className={styles.targetChart}>
        <Doughnut
          data={chartData2.data}
          options={chartData2.options}
          // onClick={edit ? popupAction2 : null}
        />
      </div>
      {edit ? (
        <textarea
          style={{width: "100%", height: "30px"}}
          onChange={event => {
            setManagement(prev => {
              return {
                ...prev,
                pageThree: {
                  ...prev.pageThree,
                  graphSection: {
                    ...prev.pageThree.graphSection,
                    content: event.target.value,
                  },
                },
              }
            })
          }}
          value={management.pageThree.graphSection.content}
        ></textarea>
      ) : (
        <p
          className={styles.figureText}
          dangerouslySetInnerHTML={{
            __html: management.pageThree.graphSection.content,
          }}
        ></p>
      )}
    </div>
  )
}

export default PageThree
