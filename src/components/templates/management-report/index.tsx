import Page3 from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { managementReport } from "@/utils/data";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import PageTen from "./PageTen";
import PageEleven from "./PageEleven";
import PageTwelve from "./PageTwelve";
import PageThirteen from "./PageThirteen";
import PageFourteen from "./PageFourteen";
import PageFifteen from "./PageFifteen";
import PageSixteen from "./PageSixteen";
import CoverPage from "./CoverPage";
import Footer from "./Footer";

const ManagementReport = ({ isEdit }: any) => {
  return (
    <>
      <CoverPage />
      <PageOne data={managementReport?.Body?.subTitle} isEdit={isEdit} />
      <PageTwo data={managementReport?.Body?.subTitleTwo} isEdit={isEdit} />
      <Page3 data={managementReport?.Body?.subTitleThree} isEdit={isEdit} />
      <PageFour data={managementReport?.Body?.subTitleFour} isEdit={isEdit} />
      <PageFive data={managementReport?.Body?.subTitleFive} isEdit={isEdit} />
      <PageSix data={managementReport?.Body?.subTitleSix} isEdit={isEdit} />
      <PageSeven data={managementReport?.Body?.subTitleSeven} isEdit={isEdit} />
      <PageEight data={managementReport?.Body?.subTitleEight} isEdit={isEdit} />
      <PageNine data={managementReport?.Body?.subTitleNine} isEdit={isEdit} />
      <PageTen data={managementReport?.Body?.subTitleTen} isEdit={isEdit} />
      <PageEleven data={managementReport?.Body?.subTitleEleven} isEdit={isEdit} />
      <PageTwelve data={managementReport?.Body?.subTitleTwelve} isEdit={isEdit} />
      <PageThirteen data={managementReport?.Body?.subTitleThirteen} isEdit={isEdit} />
      <PageFourteen data={managementReport?.Body?.subTitleFourteen} isEdit={isEdit} />
      <PageFifteen data={managementReport?.Body?.subTitleFifteen} isEdit={isEdit} />
      <PageSixteen data={managementReport?.Body?.subTitleSixteen} isEdit={isEdit} />
      <Footer />
    </>
  );
};

export default ManagementReport;
