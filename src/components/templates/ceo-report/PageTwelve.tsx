import { HStack, VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import Title from "./Title";

const PageTwelve = ({ data }: any) => {
  return (
    <>
      <CeoLayOut isTitle={false} page={13}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <Title title={data[0]?.title} />
          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          <VStack align="flex-start" w="100%" spacing={1}>
            <EditableInput
              isEdit={false}
              value={data[0]?.title2}
              fontSize="18px"
              color="greens.200"
              fontWeight="800"
              textAlign="left"
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
          </VStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageTwelve;
