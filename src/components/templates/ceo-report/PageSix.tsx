import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageSix = ({ data }: any) => {
  return (
    <>
      <CeoLayOut isTitle={false} page={7}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={false}
            value={data[0]?.title}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />
          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />
          <EditableTextArea
            value={data[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />
          <EditableTextArea
            value={data[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <EditableInput
            isEdit={false}
            value={data[0]?.title2}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />

          <EditableTextArea
            value={data[0]?.itemsFour}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <EditableTextArea
            value={data[0]?.itemsFive}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <EditableInput
            isEdit={false}
            value={data[0]?.title3}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
            textAlign="left"
          />

          <EditableTextArea
            value={data[0]?.itemsSix}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <EditableTextArea
            value={data[0]?.itemsSeven}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <EditableTextArea
            value={data[0]?.itemsEight}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageSix;
