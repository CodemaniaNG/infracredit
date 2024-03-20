import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageSeven = ({ data, isEdit }: any) => {
  return (
    <>
      <CeoLayOut page={8} title={data[0]?.title} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
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
            fontWeight="600"
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
      </CeoLayOut>
    </>
  );
};

export default PageSeven;
