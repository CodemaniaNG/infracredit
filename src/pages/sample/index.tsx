import ComplianceReport from "@/components/newPdfs/ComplianceReport";
import ITReport from "@/components/newPdfs/ItReport";
import ManagementAccounts from "@/components/newPdfs/ManageAccounts";
import OutsourcedProjectUpdate from "@/components/newPdfs/OutsourcedProject";
import PortfolioReport from "@/components/newPdfs/PortfolioReports";
import React from "react";

const SamplePage = () => {
  return (
    <div>
      <ComplianceReport />
      <ITReport />
      <OutsourcedProjectUpdate />
      <ManagementAccounts />
    </div>
  );
};

export default SamplePage;
