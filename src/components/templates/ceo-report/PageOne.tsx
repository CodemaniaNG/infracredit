import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageOne = ({ data }: any) => {
  return (
    <>
      <CeoLayOut title={data[0]?.title} page={2}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />
          <EditableTextArea
            value={data[0]?.itmesTwo}
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

          <Title title={data[1]?.title} />
          <EditableTextArea
            value={data[1]?.itemOne}
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

export default PageOne;
