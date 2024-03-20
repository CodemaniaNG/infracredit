import Page3 from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import TableOfContent from "./TableOfContent";
import { ceoReport } from "@/utils/data";
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

const CeoReport = ({ isEdit }: any) => {
  return (
    <>
      <CoverPage />
      <TableOfContent data={ceoReport?.tableOfContent} isEdit={isEdit} />
      <PageOne data={ceoReport?.Body?.subTitle} isEdit={isEdit} />
      <PageTwo data={ceoReport?.Body?.subTitleTwo} isEdit={isEdit} />
      <Page3 data={ceoReport?.Body?.subTitleThree} isEdit={isEdit} />
      <PageFour data={ceoReport?.Body?.subTitleFour} isEdit={isEdit} />
      <PageFive data={ceoReport?.Body?.subTitleFive} isEdit={isEdit} />
      <PageSix data={ceoReport?.Body?.subTitleSix} isEdit={isEdit} />
      <PageSeven data={ceoReport?.Body?.subTitleSeven} isEdit={isEdit} />
      <PageEight data={ceoReport?.Body?.subTitleEight} isEdit={isEdit} />
      <PageNine data={ceoReport?.Body?.subTitleNine} isEdit={isEdit} />
      <PageTen data={ceoReport?.Body?.subTitleTen} isEdit={isEdit} />
      <PageEleven data={ceoReport?.Body?.subTitleEleven} isEdit={isEdit} />
      <PageTwelve data={ceoReport?.Body?.subTitleTwelve} isEdit={isEdit} />
      <PageThirteen data={ceoReport?.Body?.subTitleThirteen} isEdit={isEdit} />
      <PageFourteen data={ceoReport?.Body?.subTitleFourteen} isEdit={isEdit} />
      <PageFifteen data={ceoReport?.Body?.subTitleFIifteen} isEdit={isEdit} />
      <PageSixteen data={ceoReport?.Body?.subTitleSixteen} isEdit={isEdit} />
      <Footer />
    </>
  );
};

export default CeoReport;
