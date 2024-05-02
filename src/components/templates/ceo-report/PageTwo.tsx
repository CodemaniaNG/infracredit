import {
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);
import { useState } from "react";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageTwo = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  const [chartDatas, setChartDatas] = useState<any>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [23, 11, 15, 13, 12, 14, 12],
          backgroundColor: [
            "#5B9BD5",
            "#70AD47",
            "#A9D18E",
            "#70AD47",
            "#E2F0D9",
            "#A5A5A5",
            "#FFC000",
          ],
          weight: 1,
        },
      ],
      labels: [
        "GPC 23%",
        "PAT 11%",
        "GELUL 15%",
        "VIATHAN 13%",
        "NSP 12%",
        "TTSP 14%",
        "LFZC 12%",
      ],
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
          display: true,
        },
        title: {
          display: isEdit,
          text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
          color: "#70ad47",
          font: { size: 20, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });

  return (
    <>
      <CeoLayOut
        title={reportToEdit?.subTitleTwo[0]?.title}
        page={3}
        isEdit={isEdit}
      >
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableTextArea
            value={reportToEdit?.subTitleTwo[0]?.itemOne}
            isEdit={isEdit}
          />

          <Title
            title={reportToEdit?.subTitleTwo[0]?.title2}
            color="primary3"
            isEdit={isEdit}
          />

          <HStack align="flex-start" w="100%" spacing={4}>
            <HStack w="50%">
              <EditableTextArea
                value={reportToEdit?.subTitleTwo[0]?.itmesTwo}
                isEdit={isEdit}
              />
            </HStack>

            <VStack w="50%" align="flex-start">
              <Text
                fontSize="12px"
                color="green.200"
                fontWeight="700"
                fontFamily="body"
                w="100%"
                textAlign="center"
              >
                Analysis of Guaranteed Transactions Since Inception of NGN87.6
                Billion as at 28 February 2022
              </Text>
              <Doughnut data={chartDatas.data} options={chartDatas.options} />
            </VStack>
          </HStack>

          <Title
            title={reportToEdit?.subTitleTwo[0]?.title3}
            color="primary3"
            isEdit={isEdit}
          />

          <VStack align="flex-start" w="100%">
            <TableContainer w="100%">
              <Table
                size="sm"
                borderWidth={1}
                borderColor="primary3"
                cellPadding={0}
                cellSpacing={0}
              >
                <Thead bg="secondary">
                  <Tr>
                    {reportToEdit?.subTitleTwo[0].table1[0].tableHeader.map(
                      (item: any, index: number) => (
                        <Th key={index} py={0}>
                          <EditableInput
                            value={item}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="12px"
                            color="white"
                            fontWeight="600"
                          />
                        </Th>
                      ),
                    )}
                  </Tr>
                </Thead>

                <Tbody>
                  {reportToEdit?.subTitleTwo[0].table1[1].data.map(
                    (item: any, index: number) => (
                      <Tr borderColor="primary3" key={index}>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text1}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text2}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text3}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text4}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                      </Tr>
                    ),
                  )}
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer w="100%" mt={-3} mb={4}>
              <Table size="sm" borderWidth={1} borderColor="primary3">
                <Thead bg="secondary">
                  <Tr>
                    {reportToEdit?.subTitleTwo[0].table2[0].tableHeader.map(
                      (item: any, index: number) => (
                        <Th key={index} py={0}>
                          <EditableInput
                            value={item}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="12px"
                            color="white"
                            fontWeight="600"
                          />
                        </Th>
                      ),
                    )}
                  </Tr>
                </Thead>

                <Tbody>
                  {reportToEdit?.subTitleTwo[0].table2[1].data.map(
                    (item: any, index: number) => (
                      <Tr borderColor="primary3" key={index}>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text1}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text2}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text3}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text4}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                      </Tr>
                    ),
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageTwo;
