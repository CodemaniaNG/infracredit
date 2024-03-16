import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageOne = ({ data, isEdit }: any) => {
  return (
    <>
      <CeoLayOut title={data[0]?.title} page={2} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
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
          <EditableTextArea
            value={data[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <Title title={data[1]?.title} isEdit={isEdit} />
          <EditableTextArea
            value={data[1]?.itemOne}
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

export default PageOne;
