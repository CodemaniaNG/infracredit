import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

const PageThree = ({ data, isEdit }: any) => {
  const [chartData2, setChartData2] = useState<any>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [49.0, 11.0, 10.0, 4.0, 8.0, 7.0, 49.0],
          backgroundColor: [
            "#1D4F79",
            "#4E82BE",
            "#FEBE10",
            "#93C953",
            "#82B566",
            "#00B14E",
            "#6F3A96",
          ],
          weight: 1,
        },
      ],
      labels: [
        "Staff Costs",
        "Professional Fees",
        "Depreciation and amorization",
        "IT cost",
        "Audit Fees",
        "Director’s Fees",
        "Other Expenses",
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
      <ManagementLayOut page={4} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableTextArea
            value={data[0]?.title}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <VStack w="100%">
            <VStack w="50%" spacing={0}>
              <EditableInput
                isEdit={isEdit}
                value={data[0]?.title2}
                fontSize="16px"
                color="subText.900"
                fontWeight="700"
                textAlign="left"
              />
              <Doughnut data={chartData2.data} options={chartData2.options} />
            </VStack>
          </VStack>

          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itmesTwo}
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

export default PageThree;
