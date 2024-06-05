import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableTextArea from "@/components/ui/EditableTextArea";
import EditableInput from "@/components/ui/EditableInput";
import { memo } from "react";

const PageOne = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <ManagementLayOut page={2} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitle[0]?.title}
            fontSize="24px"
            color="black"
            fontWeight="600"
            textAlign="left"
          />
          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitle[0]?.title2}
            fontSize="18px"
            color="primary3"
            fontWeight="500"
            textAlign="left"
          />

          <VStack align={"flex-start"} bg={"#F5F5F5"} p={2}>
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemOne}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itmesTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsThree}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsFour}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsFive}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsSix}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitle[0]?.title3}
            fontSize="18px"
            color="primary3"
            fontWeight="500"
            textAlign="left"
          />

          <VStack align={"flex-start"} bg={"#F5F5F5"} p={2}>
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsSeven}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsEight}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsNine}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitle[0]?.itemsTen}
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

export default memo(PageOne);
