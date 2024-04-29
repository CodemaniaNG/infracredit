import Page3 from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import TableOfContent from "./TableOfContent";
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

const CeoReport = ({ isEdit, ceoReport }: any) => {
  return (
    <>
      {ceoReport && (
        <>
          <CoverPage />
          <TableOfContent data={ceoReport?.tableOfContent} isEdit={isEdit} />
          <PageOne data={ceoReport?.subTitle} isEdit={isEdit} />
          <PageTwo data={ceoReport?.subTitleTwo} isEdit={isEdit} />
          <Page3 data={ceoReport?.subTitleThree} isEdit={isEdit} />
          <PageFour data={ceoReport?.subTitleFour} isEdit={isEdit} />
          <PageFive data={ceoReport?.subTitleFive} isEdit={isEdit} />
          <PageSix data={ceoReport?.subTitleSix} isEdit={isEdit} />
          <PageSeven data={ceoReport?.subTitleSeven} isEdit={isEdit} />
          <PageEight data={ceoReport?.subTitleEight} isEdit={isEdit} />
          <PageNine data={ceoReport?.subTitleNine} isEdit={isEdit} />
          <PageTen data={ceoReport?.subTitleTen} isEdit={isEdit} />
          <PageEleven data={ceoReport?.subTitleEleven} isEdit={isEdit} />
          <PageTwelve data={ceoReport?.subTitleTwelve} isEdit={isEdit} />
          <PageThirteen data={ceoReport?.subTitleThirteen} isEdit={isEdit} />
          <PageFourteen data={ceoReport?.subTitleFourteen} isEdit={isEdit} />
          <PageFifteen data={ceoReport?.subTitleFIifteen} isEdit={isEdit} />
          <PageSixteen data={ceoReport?.subTitleSixteen} isEdit={isEdit} />
          <Footer />
        </>
      )}
    </>
  );
};

export default CeoReport;
