import Page3 from "./PageThree";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
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
import { HStack, IconButton, Text, Box } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useState, useRef } from "react";

const PAGE_SIZE = 1;

const pages = [
  CoverPage,
  PageOne,
  PageTwo,
  Page3,
  PageFour,
  PageFive,
  PageSix,
  PageSeven,
  PageEight,
  PageNine,
  PageTen,
  PageEleven,
  PageTwelve,
  PageThirteen,
  PageFourteen,
  PageFifteen,
  PageSixteen,
  Footer,
];

const ManagementReport = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  // ref to control the scroll position
  const ref = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if ((currentPage + 1) * PAGE_SIZE < pages.length) {
      setCurrentPage(currentPage + 1);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentPages = pages.slice(startIndex, endIndex);
  return (
    <Box ref={ref}>
      {reportToEdit && isEdit && (
        <>
          {currentPages.map((PageComponent, index) => (
            <PageComponent
              key={startIndex + index}
              reportToEdit={reportToEdit}
              setReportToEdit={setReportToEdit}
              isEdit={isEdit}
            />
          ))}

          <HStack
            direction="row"
            spacing={2}
            align="center"
            justify="space-between"
          >
            <IconButton
              aria-label="previous"
              icon={<ArrowBackIcon />}
              variant="outline"
              borderRadius="full"
              borderColor="mainText.200"
              onClick={() => handlePrev()}
              isDisabled={currentPage === 0}
            />
            <Text fontSize={14} fontWeight={500} color="subText.200">
              Page {currentPage + 1}
            </Text>
            <IconButton
              aria-label="next"
              icon={<ArrowForwardIcon />}
              variant="outline"
              borderRadius="full"
              borderColor="mainText.200"
              onClick={() => handleNext()}
              isDisabled={endIndex >= pages.length}
            />
          </HStack>
        </>
      )}

      {reportToEdit && !isEdit && (
        <>
          {pages.map((PageComponent, index) => (
            <PageComponent
              key={index}
              isEdit={isEdit}
              reportToEdit={reportToEdit}
              setReportToEdit={setReportToEdit}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default ManagementReport;
