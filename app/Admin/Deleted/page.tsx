import React from "react";
import styles from "./styles.module.css";
import Title from "@/component/Layout/Title";
// import { deleted } from "@/utils/data";
// import SingleReportCard from "@/component/SmallComponents/singleReportCard";
import DashboardLayout from "@/component/layouts/dashboard-layout";

const Deleted = () => {
  return (
    <DashboardLayout>
      <div className={styles.draftContainer}>
        <Title text="Deleted Reports" />
        {/* <div className={styles.draftWrapper}>
          {deleted?.map((item, index) => {
            return <SingleReportCard title={item.title} text={item.action} number={item.number} key={index} type={false} />;
          })}
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Deleted;
