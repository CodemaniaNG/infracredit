import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const PageEight = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [11, 11, 11, 11, 11],
          backgroundColor: [
            "#93C953",
            "#0C4421",
            "#29ADE4",
            "#4E82BD",
            "#1D4F79",
          ],
          weight: 1,
        },
      ],
      labels: ["BBB_(11%)", "BBB(11%)", "BBB+(11%)", "A+(11%)%", "AA(11%)"],
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
          position: "left",
          display: true,
          labels: {
            boxWidth: 10,
          },
        },
        // title: {
        //   display: true,
        //   text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
        //   color: "#70ad47",
        //   font: { size: 20, weight: "bold", family: "Inter" },
        //   fullSize: true,
        // },
      },
    },
  });

  return (
    <>
      <CeoLayOut
        page={8}
        title={reportToEdit?.subTitleEight[0]?.title}
        isEdit={isEdit}
      >
        <VStack align="flex-start" w="100%" spacing={4}>
          <TableContainer w="100%">
            <Table size="sm" cellSpacing={0} cellPadding={0}>
              <Thead>
                <Tr>
                  {reportToEdit?.subTitleEight[0].table1[0].tableHeader.map(
                    (item: any, index: number) => (
                      <Th key={index} py={1} textTransform="capitalize">
                        <EditableInput
                          value={item}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="11px"
                          color="black"
                          fontWeight="600"
                        />
                      </Th>
                    ),
                  )}
                </Tr>
              </Thead>

              <Tbody>
                {reportToEdit?.subTitleEight[0].table1[1].data.map(
                  (item: any, index: number) => (
                    <Tr key={index}>
                      <Td py={1}>
                        <EditableInput
                          value={item?.text1}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td py={1}>
                        <EditableInput
                          value={item?.text2}
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

          <HStack w="100%" spacing={4} align="center" justify="space-between">
            <VStack w="50%" align="flex-start">
              <EditableInput
                isEdit={isEdit}
                value={reportToEdit?.subTitleEight[0]?.title2}
                fontSize="18px"
                color="primary3"
                fontWeight="800"
                textAlign="left"
              />
            </VStack>
            <VStack w="50%" align="flex-start">
              <Doughnut data={chartData.data} options={chartData.options} />
            </VStack>
          </HStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageEight;
