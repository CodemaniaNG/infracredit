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

const CeoReport = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      {reportToEdit && (
        <>
          <CoverPage />
          <TableOfContent
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />

          <PageOne
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />

          <PageTwo
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <Page3
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageFour
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageFive
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageSix
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageSeven
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageEight
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageNine
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageTen
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageEleven
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageTwelve
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageThirteen
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageFourteen
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageFifteen
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <PageSixteen
            reportToEdit={reportToEdit}
            setReportToEdit={setReportToEdit}
            isEdit={isEdit}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default CeoReport;
