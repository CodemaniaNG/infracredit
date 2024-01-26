import React, { useState } from "react";
import styles from "./styles.module.css";
import HeaderLine from "@/component/header-line";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import ChartPopup from "@/component/chart-popup";
import CeoPage3 from "@/utils/data";
 
  const CeoPageThree = ({
    edit,
    popupAction1,
    ceoreportdata,
    setCeoreportdata,
    popupAction2,
    popupAction3,
    popup,
    popup1,
    popupClose1,
    popup2,
    popupClose2,
    popup3,
    popupClose3,
  }: CeoPage3) => {
    interface LineProps {
      options: ChartOptions<"doughnut">
      data: ChartData<"doughnut">
    }

    const [chartData, setChartData] = useState<LineProps>({
      data: {
        datasets: [
          {
            // label: "red",
            data: [87.4, 3.8, 8.8],
            backgroundColor: ["#C00000", "#ED7D31", "#70AD47"],
            weight: 1,
          },
        ],
        labels: [
          "Red (<50%), 87.4%, NGN263.4 billion",
          "Amber (51%-79%), 3.8%, NGN11.6 billion",
          "Green (>80%), 8.8%, NGN26.5 billion",
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
    const [chartData2, setChartData2] = useState<LineProps>({
      data: {
        datasets: [
          {
            // label: "red",
            data: [8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0],
            backgroundColor: [
              "#5B8F38",
              "#5C8445",
              "#5D9935",
              "#61A137",
              "#82B566",
              "#89BB6E",
              "#9EC58B",
              "#ADC6A2",
              "#BBD5B1",
              "#C1D4B9",
            ],
            weight: 1,
          },
        ],
        labels: [
          "Gas -to-Power",
          "Agric infra",
          "Off-grid Power",
          "On-grid Power",
          "ICT/Telecoms",
          "Water/Waste",
          "Education Infra",
          "Inputs to Infra",
          "Transportation",
          "Gas-to-clean Cooking",
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
    const [chartData3, setChartData3] = useState<LineProps>({
      data: {
        datasets: [
          {
            // label: "red",
            data: [63.4, 5.4, 3.2, 6.6, 18.7, 2.7],
            backgroundColor: [
              "#9EC58B",
              "#BBD5B1",
              "#ADC6A2",
              "#C1D4B9",
              "#5C8445",
              "#5B8F38",
            ],
            weight: 1,
          },
        ],
        labels: [
          "",
          "Private  Bond (other)",
          "Blended Finance",
          "Annuity PPP",
          "Contingent Refi",
          "Private  Bond (Clean energy)",
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
      <div className={styles.pageThree}>
        <div className={styles.fy}>
          {edit ? (
            <input
              type="text"
              value={ceoreportdata.pageThree.sectionOne.title1}
              onChange={e => {
                const updatedData = {...ceoreportdata}
                // Update the title1 property
                ceoreportdata.pageThree.sectionOne.title1 = e.target.value
                // Set the updated state
                setCeoreportdata(updatedData)
              }}
            />
          ) : (
            <h2>{ceoreportdata.pageThree.sectionOne.title1}*</h2>
          )}
          <HeaderLine />
        </div>
        {edit ? (
          <textarea
            value={ceoreportdata.pageThree.sectionOne.text1}
            onChange={e => {
              const updatedData = {...ceoreportdata}
              // Update the title1 property
              ceoreportdata.pageThree.sectionOne.text1 = e.target.value
              // Set the updated state
              setCeoreportdata(updatedData)
            }}
          />
        ) : (
          <p>{ceoreportdata.pageThree.sectionOne.text1}</p>
        )}
        <div className={styles.categorization}>
          <div className={styles.pie}>
            {edit ? (
              <input
                type="text"
                value={ceoreportdata.pageThree.sectionOne.title2}
                onChange={e => {
                  const updatedData = {...ceoreportdata}
                  // Update the title1 property
                  ceoreportdata.pageThree.sectionOne.title2 = e.target.value
                  // Set the updated state
                  setCeoreportdata(updatedData)
                }}
              />
            ) : (
              <h2>{ceoreportdata.pageThree.sectionOne.title2} *</h2>
            )}
            <Doughnut
              data={chartData.data}
              options={chartData.options}
              onClick={edit ? popupAction1 : null}
            />
            {popup && popup1 ? (
              <ChartPopup
                chartDatas={chartData}
                setChartDatas={setChartData}
                popupClose={popupClose1}
              />
            ) : null}
          </div>
          <div className={styles.table}>
            <h2>H1 2022 Target</h2>
            <div className={styles.tableBody}>
              <div className={styles.tableHeader}>
                <p>S/ N</p>
                <p>Infrastructure Entity</p>
                <p>
                  Infrastructure <br /> Activity/Industry
                </p>
                <p>Size (N’b)</p>
              </div>
              <div className={styles.tableSingle}>
                <p>1</p>
                <p>Infrastructure Entity</p>
                <p>Infrastructure Entity</p>
                <p>N1.5</p>
              </div>
              <div className={styles.tableSingle}>
                <p>2</p>
                <p>Infrastructure Entity</p>
                <p>Infrastructure Entity</p>
                <p>N1.5</p>
              </div>
              <div className={styles.tableSingle}>
                <p>3</p>
                <p>Infrastructure Entity</p>
                <p>Infrastructure Entity</p>
                <p>N1.5</p>
              </div>
              <div className={styles.tableSingle}>
                <p>4</p>
                <p>Infrastructure Entity</p>
                <p>Infrastructure Entity</p>
                <p>N1.5</p>
              </div>
              <div className={styles.tableSingle}>
                <p>5</p>
                <p>Infrastructure Entity</p>
                <p>Infrastructure Entity</p>
                <p>N1.5</p>
              </div>
              <div className={styles.tableSingle}>
                <p></p>
                <p></p>
                <p>Total</p>
                <p>N1.5</p>
              </div>
            </div>
          </div>
        </div>
        {edit ? (
          <textarea
            value={ceoreportdata.pageThree.sectionOne.text2}
            onChange={e => {
              const updatedData = {...ceoreportdata}
              // Update the title1 property
              ceoreportdata.pageThree.sectionOne.text2 = e.target.value
              // Set the updated state
              setCeoreportdata(updatedData)
            }}
          />
        ) : (
          <p>{ceoreportdata.pageThree.sectionOne.text2}</p>
        )}
        {popup && popup2 ? null : null}
        <div className={styles.targetChart}>
          <div>
            <h2>H1 2022 Target</h2>
            <Doughnut
              data={chartData2.data}
              options={chartData2.options}
              onClick={edit ? popupAction2 : null}
            />
          </div>
          <div>
            <h2>H1 2022 Target</h2>
            <Doughnut
              data={chartData3.data}
              options={chartData3.options}
              onClick={edit ? popupAction3 : null}
            />
          </div>
        </div>
        {popup && popup3 ? (
          <ChartPopup
            chartDatas={chartData3}
            setChartDatas={setChartData3}
            popupClose={popupClose3}
          />
        ) : null}
        <p>
          * NB: All pipeline figures and charts exclude our existing guarantee
          portfolio of Viathan, North South Power, GEL Utility, TSL, LFZC, GPC
          and PAT. We have also excluded five mandated transactions which no
          longer qualify for the pipeline due to prolonged inactivity.
        </p>
        <p>
          {" "}
          * Detailed breakdown of categorisation and transactions are in the
          Management Report
        </p>
      </div>
    )
  }

export default CeoPageThree;
