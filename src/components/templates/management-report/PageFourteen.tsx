import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

const PageFourteen = ({ data, isEdit }: any) => {
  const [chartData, setChartData] = useState<any>({
    data: {
      datasets: [
        {
          data: [4.4, 6.9, 93.5],
          backgroundColor: ["#93C953", "#FEBE10", "#D2232A"],
          weight: 1,
        },
      ],
      labels: ["Green (>=80%)", "Amber(51-79%)", "Red (<=50%)"],
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
          text: "Guarantee transactions categorization (N’billion)",
          color: "#5E5E5E",
          font: { size: 16, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });
  return (
    <>
      <ManagementLayOut page={15} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={data[0]?.title}
            fontSize="24px"
            color="black"
            fontWeight="600"
            textAlign="left"
          />

          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <VStack w="100%">
            <VStack w="50%">
              <Doughnut data={chartData.data} options={chartData.options} />
            </VStack>
          </VStack>

          <EditableInput
            isEdit={isEdit}
            value={data[0]?.title2}
            fontSize="24px"
            color="greens.200"
            fontWeight="600"
            textAlign="left"
          />

          <EditableTextArea
            value={data[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <VStack align={"flex-start"} bg={"#F5F5F5"} p={2}>
            {data[0]?.transactions.map((item: any, index: number) => (
              <EditableTextArea
                key={index}
                value={item}
                fontSize="14px"
                color="black"
                fontWeight="500"
                isEdit={isEdit}
              />
            ))}
          </VStack>

          <EditableTextArea
            value={data[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
        </VStack>
      </ManagementLayOut>
    </>
  );
};

export default PageFourteen;
