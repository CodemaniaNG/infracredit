import React, { useState } from "react";
import styles from "./styles.module.css";
import HeaderLine from "@/component/header-line";

const  CeoPageTen = ({ edit }: { edit: boolean }) => {
  const [data, setData] = useState({
    title1: "Financial Performance as at 31 December 2021",
    title2: "Statement of Profit or Loss",
    title3: "Key highlights of the financial performance include:",
    text1:
      "• Gross revenue: N5.79 billion, compared to N4.23 billion in 2020 December (37% YOY growth) and 2021 budget of N6.66 billion for the period ended 31st December 2021. This is driven by net investment income which accounts for 72% of net revenue.",
    text2:
      " • Net total income: N3.71 billion (excluding exchange gains) compared to N2.40 billion in 2020 December (55% YOY growth ) and budget of N4.19 billion for the period ended 31st December 2021.",
    text3: "• Operating expenses: N1.95 billion compared to N1.76 billion in 2020 December (11% YOY growth) and budget of N2.16 billion for the period ended 3st December 2021.",
    text4:
      "• Profit before tax (excluding exchange gains): N1.75 billion compared to N654 million in 2020 December (168% YOY growth) and budget of N2.03 billion for the period ended 31st December 2021.",
    text5: "• Cost to income ratio (excluding exchange gains): 53% compared to budgeted ratio of 52% for the year and 73% achieved in 2020 FY.",
    title4: "Figure 1: Gross revenue Vs. profit or loss",
    text6:
      "as at 31st December 2021, InfraCredit generated gross revenue of N5.79 billion which represents 87% of the budgeted gross revenue N6.66 billion for the year Discounting  exchange gains of N1.71 billion, net profit before tax (PBT) stood at N1.75 billion compared to the budgeted profit before tax of N2.03 million representing 86% of budgeted  profit for the period ended 31st December 2021 and 168% growth on PBT achieved in the comparative year. Profit before tax (inclusive of exchange gains) amounted to N3.47  billion representing 171% of budgeted profit for the period and 41% growth on the PBT achieved in the comparative year.",
  });
  return (
    <div className={styles.pageTen}>
      <div className={styles.pageTenHeader}>
        {edit ? (
          <input
            type="text"
            value={data.title1}
            onChange={(e) => {
              setData({ ...data, title1: e.target.value });
            }}
          />
        ) : (
          <h2>{data.title1}</h2>
        )}
        <HeaderLine />
      </div>
      {edit ? (
        <>
          <input
            type="text"
            value={data.title2}
            onChange={(e) => {
              setData({ ...data, title2: e.target.value });
            }}
          />
          <input
            type="text"
            value={data.title3}
            onChange={(e) => {
              setData({ ...data, title3: e.target.value });
            }}
          />
          <textarea
            value={data.text1}
            onChange={(e) => {
              setData({ ...data, text1: e.target.value });
            }}
          />
          <textarea
            value={data.text2}
            onChange={(e) => {
              setData({ ...data, text2: e.target.value });
            }}
          />
          <textarea
            value={data.text3}
            onChange={(e) => {
              setData({ ...data, text3: e.target.value });
            }}
          />
          <textarea
            value={data.text4}
            onChange={(e) => {
              setData({ ...data, text4: e.target.value });
            }}
          />
          <textarea
            value={data.text5}
            onChange={(e) => {
              setData({ ...data, text5: e.target.value });
            }}
          />
          <input
            type="text"
            value={data.title4}
            onChange={(e) => {
              setData({ ...data, title4: e.target.value });
            }}
          />
        </>
      ) : (
        <>
          <h2>{data.title2}</h2>
          <h2>{data.title3}</h2>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <p>{data.text3}</p>
          <p>{data.text4}</p>
          <p>{data.text5}</p>
          <h2>{data.title4}</h2>
        </>
      )}
      <div>
        <div className={styles.price}>
          <p>N10,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N1,000 m</p>
          <p>N0 m</p>
        </div>
      </div>
      {edit ? (
        <textarea
          value={data.text6}
          onChange={(e) => {
            setData({ ...data, text6: e.target.value });
          }}
        />
      ) : (
        <p>{data.text6}</p>
      )}
    </div>
  );
};

export default CeoPageTen;
