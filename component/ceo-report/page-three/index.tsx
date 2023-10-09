import React, { useState } from "react";
import styles from "./styles.module.css";
import HeaderLine from "@/component/header-line";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

const CeoPageThree = () => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
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
      labels: ["Red (<50%), 87.4%, NGN263.4 billion", "Amber (51%-79%), 3.8%, NGN11.6 billion", "Green (>80%), 8.8%, NGN26.5 billion"],
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
          labels: { boxWidth: 10 },
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
  });
  const [chartData2, setChartData2] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0],
          backgroundColor: ["#5B8F38", "#5C8445", "#5D9935", "#61A137", "#82B566", "#89BB6E", "#9EC58B", "#ADC6A2", "#BBD5B1", "#C1D4B9"],
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
          labels: { boxWidth: 10 },
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
  });
  const [chartData3, setChartData3] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [63.4, 5.4, 3.2, 6.6, 18.7, 2.7],
          backgroundColor: ["#9EC58B", "#BBD5B1", "#ADC6A2", "#C1D4B9", "#5C8445", "#5B8F38"],
          weight: 1,
        },
      ],
      labels: ["", "Private  Bond (other)", "Blended Finance", "Annuity PPP", "Contingent Refi", "Private  Bond (Clean energy)"],
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
          labels: { boxWidth: 10 },
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
  });
  return (
    <div className={styles.pageThree}>
      <div className={styles.fy}>
        <h2>III. 2021-2022 FY Guarantee Pipeline*</h2>
        <HeaderLine />
      </div>
      <p>
        The Origination & Structuring team is actively engaged in assessing new credit enhancement opportunities and diversifying the guarantee portfolio, which are at various
        stages of evaluation. As at 28 February 2022, InfraCredit’s pipeline of potential guarantee transactions totaled N301.5 Billion from 34 transactions, composed of N245.0
        Billion of standard guarantees and N56.5 Billion of contingent refinancing guarantees. Of the 34 transactions, 33 are first-time clients with executed Mandate Letters and
        one (1) transaction involves follow-on debt instruments for LFZC.
      </p>
      <div className={styles.categorization}>
        <div className={styles.pie}>
          <h2>Categorisation of NGN301.5 Billion of Mandated Transactions as at 28 February 2022*</h2>
          <Doughnut data={chartData.data} options={chartData.options} />
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

      <p>
        The N301.5 Billion pipeline, consisting of 34 potential transactions for the next 12 – 18 months, can be split into eleven (11) industry sectors, with no individual sector
        comprising more than 37.5%, as shown in the pie chart below. Of these transactions, ten (10) totaling N93.4 Billion are projected to reach financial close in FY2022, in
        addition to the N10 Bln already closed in Q1 2022. The remaining pipeline transactions (including contingent refinancings) are expected to roll over into 2023 In addition,
        the pipeline can be broken down by products and geographical distribution. We have categorised the pipeline into six (6) credit enhancement products, with the guaranteed
        public bond accounting for the largest share (63.4%) of potential guarantee transactions, as shown in the chart below.
      </p>
      <div className={styles.targetChart}>
        <div>
          <h2>H1 2022 Target</h2>
          <Doughnut data={chartData2.data} options={chartData2.options} />
        </div>
        <div>
          <h2>H1 2022 Target</h2>
          <Doughnut data={chartData3.data} options={chartData3.options} />
        </div>
      </div>
      <p>
        * NB: All pipeline figures and charts exclude our existing guarantee portfolio of Viathan, North South Power, GEL Utility, TSL, LFZC, GPC and PAT. We have also excluded
        five mandated transactions which no longer qualify for the pipeline due to prolonged inactivity.
      </p>
      <p> * Detailed breakdown of categorisation and transactions are in the Management Report</p>
    </div>
  );
};

export default CeoPageThree;
