import {
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
import type { ChartData, ChartOptions } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { useState } from "react";
import EditableTextArea from "@/components/ui/EditableTextArea";
import EditableInput from "@/components/ui/EditableInput";

const PageThree = ({ data }: any) => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [87.4, 3.8, 8.8],
          backgroundColor: ["#C00000", "#ED7D31", "#70AD47"],
          weight: 1,
        },
      ],
      labels: [
        "Red (<50%), 87.4%, NGN263.4 billion",
        "Amber (51%-79%), 3.8%, NGN11.6 billion",
        "Green (>80%), 8.8%, NGN26.5 billion",
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
          position: "bottom",
          display: true,
          labels: { boxWidth: 10 },
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

  const [chartData2, setChartData2] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0],
          backgroundColor: [
            "#5B8F38",
            "#5C8445",
            "#5D9935",
            "#61A137",
            "#82B566",
            "#89BB6E",
            "#9EC58B",
            "#ADC6A2",
            "#BBD5B1",
            "#C1D4B9",
          ],
          weight: 1,
        },
      ],
      labels: [
        "Gas -to-Power",
        "Agric infra",
        "Off-grid Power",
        "On-grid Power",
        "ICT/Telecoms",
        "Water/Waste",
        "Education Infra",
        "Inputs to Infra",
        "Transportation",
        "Gas-to-clean Cooking",
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
          position: "bottom",
          display: true,
          labels: { boxWidth: 10 },
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

  const [chartData3, setChartData3] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [63.4, 5.4, 3.2, 6.6, 18.7, 2.7],
          backgroundColor: [
            "#9EC58B",
            "#BBD5B1",
            "#ADC6A2",
            "#C1D4B9",
            "#5C8445",
            "#5B8F38",
          ],
          weight: 1,
        },
      ],
      labels: [
        "",
        "Private  Bond (other)",
        "Blended Finance",
        "Annuity PPP",
        "Contingent Refi",
        "Private  Bond (Clean energy)",
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
          position: "bottom",
          display: true,
          labels: { boxWidth: 10 },
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
      <CeoLayOut isTitle={false} page={4}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <Title title={data[0]?.title} color="primary3" />

          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
          />

          <HStack align="flex-start" w="100%" spacing={4}>
            <VStack w="40%" align="flex-start">
              <EditableTextArea
                value={data[0]?.chart1Title}
                fontSize="12px"
                color="green.200"
                fontWeight="700"
              />

              <Doughnut data={chartData.data} options={chartData.options} />
            </VStack>

            <VStack w="60%">
              <EditableTextArea
                value={data[0]?.table1Title}
                fontSize="12px"
                color="green.200"
                fontWeight="700"
                textAlign="center"
              />
              <TableContainer w="100%">
                <Table
                  size="sm"
                  borderWidth={1}
                  borderColor="primary3"
                  cellSpacing={0}
                  cellPadding={0}
                >
                  <Thead bg="secondary">
                    <Tr>
                      {data[0].table1[0].tableHeader.map(
                        (item: any, index: number) => (
                          <Th key={index} py={0}>
                            <EditableInput
                              value={item}
                              isEdit={false}
                              textAlign="left"
                              fontSize="11px"
                              color="white"
                              fontWeight="600"
                            />
                          </Th>
                        )
                      )}
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data[0].table1[1].data.map((item: any, index: number) => (
                      <Tr borderColor="primary3" key={index}>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text1}
                            isEdit={false}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text2}
                            isEdit={false}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text3}
                            isEdit={false}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                        <Td borderColor="primary3" py={0}>
                          <EditableInput
                            value={item?.text4}
                            isEdit={false}
                            textAlign="left"
                            fontSize="10px"
                            color="black"
                            fontWeight="600"
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </VStack>
          </HStack>

          <EditableTextArea
            value={data[0]?.itemTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
          />

          <HStack align="flex-start" w="100%" spacing={4}>
            <VStack w="50%" align="flex-start">
              <EditableTextArea
                value="H1 2022 Target"
                fontSize="12px"
                color="green.200"
                fontWeight="700"
              />

              <Doughnut data={chartData2.data} options={chartData2.options} />
            </VStack>

            <VStack w="50%" align="flex-start">
              <EditableTextArea
                value="H1 2022 Target"
                fontSize="12px"
                color="green.200"
                fontWeight="700"
              />

              <Doughnut data={chartData3.data} options={chartData3.options} />
            </VStack>
          </HStack>

          <VStack align="flex-start" w="100%" spacing={1}>
            {data[0]?.notes.map((item: any, index: number) => (
              <EditableTextArea
                key={index}
                value={item}
                fontSize="14px"
                color="subText.900"
                fontWeight="500"
              />
            ))}
          </VStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageThree;
