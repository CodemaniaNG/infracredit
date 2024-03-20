import { HStack, VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import { useState } from "react";
import Title from "./Title";

const PageEleven = ({ data, isEdit }: any) => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [93.5, 6.9, 4.4],
          backgroundColor: ["#29ADE4", "#93C953", "#1C4E7A"],
          weight: 1,
        },
      ],
      labels: ["Eurobonds", "FGN bonds", "Commercial paper"],
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
        title: {
          display: true,
          text: "Investment Portfolio",
          color: "#5E5E5E",
          font: { size: 16, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });

  return (
    <>
      <CeoLayOut page={12} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <VStack align="flex-start" w="100%" spacing={1}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title}
              fontSize="18px"
              color="greens.200"
              fontWeight="800"
              textAlign="left"
            />

            <EditableTextArea
              value={data[0]?.itemOne}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsThree}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsFour}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align="flex-start" w="100%" spacing={1}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title2}
              fontSize="18px"
              color="greens.200"
              fontWeight="800"
              textAlign="left"
            />

            <EditableTextArea
              value={data[0]?.itemsFive}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsSix}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsSeven}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <Title title={data[0]?.title3} isEdit={isEdit} />

          <HStack
            w="100%"
            spacing={4}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <VStack w="50%">
              <EditableTextArea
                value={data[0]?.itemsEight}
                fontSize="14px"
                color="black"
                fontWeight="500"
                isEdit={isEdit}
              />
              <EditableTextArea
                value={data[0]?.itemsNine}
                fontSize="14px"
                color="black"
                fontWeight="500"
                isEdit={isEdit}
              />
              <EditableTextArea
                value={data[0]?.itemsTen}
                fontSize="14px"
                color="black"
                fontWeight="500"
                isEdit={isEdit}
              />
            </VStack>

            <VStack w="50%">
              <Doughnut data={chartData.data} options={chartData.options} />
            </VStack>
          </HStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageEleven;
