import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { memo } from "react";

const PageSix = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <CeoLayOut page={7} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitleSix[0]?.title}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />
          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitleSix[0]?.title2}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />

          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsFour}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsFive}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableInput
            isEdit={isEdit}
            value={reportToEdit?.subTitleSix[0]?.title3}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />

          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsSix}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsSeven}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <EditableTextArea
            value={reportToEdit?.subTitleSix[0]?.itemsEight}
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

export default memo(PageSix);
