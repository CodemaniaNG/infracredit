import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Doughnut } from "react-chartjs-2";
import { memo, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

const PageThirteen = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  const [chartData, setChartData] = useState<any>({
    data: {
      datasets: [
        {
          data: [4.4, 6.9, 93.5],
          backgroundColor: ["#93C953", "#FEBE10", "#29ADE4"],
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
          text: "",
          color: "#5E5E5E",
          font: { size: 16, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });
  return (
    <>
      <ManagementLayOut page={14} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitleThirteen[0]?.title}
            fontSize="24px"
            color="black"
            fontWeight="600"
            textAlign="left"
          />

          <EditableTextArea
            value={reportToEdit?.subTitleThirteen[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleThirteen[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleThirteen[0]?.itemsThree}
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
        </VStack>
      </ManagementLayOut>
    </>
  );
};

export default memo(PageThirteen);
