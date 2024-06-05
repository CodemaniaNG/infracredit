import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";
import { memo } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

const PageFifteen = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <ManagementLayOut page={16} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitleFifteen[0]?.title}
            fontSize="24px"
            color="black"
            fontWeight="600"
            textAlign="left"
          />

          <VStack align="flex-start" w="100%" spacing={2}>
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleFifteen[0]?.title2}
              fontSize="24px"
              color="#FEBE10"
              fontWeight="600"
              textAlign="left"
            />
            <EditableTextArea
              value={reportToEdit?.subTitleFifteen[0]?.itemOne}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <VStack align={"flex-start"} w="100%" bg={"#F5F5F5"} p={2}>
              {reportToEdit?.subTitleFifteen[0]?.notes.map(
                (item: any, index: number) => (
                  <EditableTextArea
                    key={index}
                    value={item}
                    fontSize="14px"
                    color="black"
                    fontWeight="500"
                    isEdit={isEdit}
                  />
                ),
              )}
            </VStack>
            <EditableTextArea
              value={reportToEdit?.subTitleFifteen[0]?.itemsTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align="flex-start" w="100%" spacing={2}>
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleFifteen[0]?.title3}
              fontSize="24px"
              color="#D2232A"
              fontWeight="600"
              textAlign="left"
            />
            <EditableTextArea
              value={reportToEdit?.subTitleFifteen[0]?.itemsFour}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <VStack align={"flex-start"} w="100%" bg={"#F5F5F5"} p={2}>
              {reportToEdit?.subTitleFifteen[0]?.notes2.map(
                (item: any, index: number) => (
                  <EditableTextArea
                    key={index}
                    value={item}
                    fontSize="14px"
                    color="black"
                    fontWeight="500"
                    isEdit={isEdit}
                  />
                ),
              )}
            </VStack>
            <EditableTextArea
              value={reportToEdit?.subTitleFifteen[0]?.itemsFive}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>
        </VStack>
      </ManagementLayOut>
    </>
  );
};

export default memo(PageFifteen);
