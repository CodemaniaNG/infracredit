import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

const PageTwo = ({ data, isEdit }: any) => {
  const dataBar: any = {
    labels: ["2021 A", "2022 B"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19],
        backgroundColor: ["#92D050", "#4472C4"],
        borderColor: ["#92D050", "#4472C4"],
        borderWidth: 1,
      },
    ],
  };

  const optionsBar: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: isEdit,
      },
    },
  };
  return (
    <>
      <ManagementLayOut page={3} isEdit={isEdit}>
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

          <VStack w="100%" align="flex-start" spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title2}
              fontSize="16px"
              color="subText.900"
              fontWeight="700"
              textAlign="left"
            />

            <Bar data={dataBar} options={optionsBar} />

            <EditableTextArea
              value={data[0]?.itmesTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack w="100%" align="flex-start" spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title2}
              fontSize="16px"
              color="subText.900"
              fontWeight="700"
              textAlign="left"
            />

            <Bar data={dataBar} options={optionsBar} />
          </VStack>
        </VStack>
      </ManagementLayOut>
    </>
  );
};

export default PageTwo;
