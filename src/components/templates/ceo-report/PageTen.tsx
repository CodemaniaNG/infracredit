import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Title from "./Title";

ChartJS.register(ArcElement, Tooltip, Legend);

const PageTen = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
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
      <CeoLayOut page={11} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <Title title={reportToEdit?.subTitleTen[0]?.title} isEdit={isEdit} />
          <VStack align="flex-start" w="100%" spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleTen[0]?.title2}
              fontSize="16px"
              color="black"
              fontWeight="700"
              textAlign="left"
            />
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleTen[0]?.title3}
              fontSize="16px"
              color="black"
              fontWeight="700"
              textAlign="left"
            />
          </VStack>

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemsFour}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemsFive}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <VStack w="100%" align="flex-start" spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleTen[0]?.title4}
              fontSize="16px"
              color="subText.900"
              fontWeight="700"
              textAlign="left"
            />

            <Bar data={dataBar} options={optionsBar} />
          </VStack>

          <EditableTextArea
            value={reportToEdit?.subTitleTen[0]?.itemsSix}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageTen;
