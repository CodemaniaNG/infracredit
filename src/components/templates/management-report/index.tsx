import Page3 from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
// import { managementReport } from "@/utils/data";
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

const ManagementReport = ({ isEdit, managementReport }: any) => {
  // const body = managementReport?.body;
  // const parsedBody = body && JSON.parse(body);
  return (
    <>
      {managementReport && (
        <>
          <CoverPage />
          <PageOne data={managementReport?.subTitle} isEdit={isEdit} />
          <PageTwo data={managementReport?.subTitleTwo} isEdit={isEdit} />
          <Page3 data={managementReport?.subTitleThree} isEdit={isEdit} />
          <PageFour data={managementReport?.subTitleFour} isEdit={isEdit} />
          <PageFive data={managementReport?.subTitleFive} isEdit={isEdit} />
          <PageSix data={managementReport?.subTitleSix} isEdit={isEdit} />
          <PageSeven data={managementReport?.subTitleSeven} isEdit={isEdit} />
          <PageEight data={managementReport?.subTitleEight} isEdit={isEdit} />
          <PageNine data={managementReport?.subTitleNine} isEdit={isEdit} />
          <PageTen data={managementReport?.subTitleTen} isEdit={isEdit} />
          <PageEleven data={managementReport?.subTitleEleven} isEdit={isEdit} />
          <PageTwelve data={managementReport?.subTitleTwelve} isEdit={isEdit} />
          <PageThirteen
            data={managementReport?.subTitleThirteen}
            isEdit={isEdit}
          />
          <PageFourteen
            data={managementReport?.subTitleFourteen}
            isEdit={isEdit}
          />
          <PageFifteen
            data={managementReport?.subTitleFifteen}
            isEdit={isEdit}
          />
          <PageSixteen
            data={managementReport?.subTitleSixteen}
            isEdit={isEdit}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default ManagementReport;
