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

const CeoReport = ({ data }: any) => {
  return (
    <>
      <CoverPage />
      <TableOfContent data={ceoReport?.tableOfContent} />
      <PageOne data={ceoReport?.Body?.subTitle} />
      <PageTwo data={ceoReport?.Body?.subTitleTwo} />
      <Page3 data={ceoReport?.Body?.subTitleThree} />
      <PageFour data={ceoReport?.Body?.subTitleFour} />
      <PageFive data={ceoReport?.Body?.subTitleFive} />
      <PageSix data={ceoReport?.Body?.subTitleSix} />
      <PageSeven data={ceoReport?.Body?.subTitleSeven} />
      <PageEight data={ceoReport?.Body?.subTitleEight} />
      <PageNine data={ceoReport?.Body?.subTitleNine} />
      <PageTen data={ceoReport?.Body?.subTitleTen} />
      <PageEleven data={ceoReport?.Body?.subTitleEleven} />
      <PageTwelve data={ceoReport?.Body?.subTitleTwelve} />
      <PageThirteen data={ceoReport?.Body?.subTitleThirteen} />
      <PageFourteen data={ceoReport?.Body?.subTitleFourteen} />
      <PageFifteen data={ceoReport?.Body?.subTitleFIifteen} />
      <PageSixteen data={ceoReport?.Body?.subTitleSixteen} />
    </>
  );
};

export default CeoReport;
