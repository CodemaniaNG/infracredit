import { VStack } from "@chakra-ui/react";
import ManagementLayOut from "./ManagementLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageEight = ({ data, isEdit }: any) => {
  return (
    <>
      <ManagementLayOut page={8} title={data[0]?.title} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <VStack align={"flex-start"} spacing={0}>
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
          </VStack>

          <VStack align={"flex-start"} spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title2}
              fontSize="22px"
              color="primary3"
              fontWeight="500"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.itemsTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align={"flex-start"} spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title3}
              fontSize="22px"
              color="primary3"
              fontWeight="500"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.itemsThree}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align={"flex-start"} spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title4}
              fontSize="22px"
              color="primary3"
              fontWeight="500"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.itemsFour}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align={"flex-start"} spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title5}
              fontSize="22px"
              color="primary3"
              fontWeight="500"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.itemsFive}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align={"flex-start"} spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title6}
              fontSize="22px"
              color="primary3"
              fontWeight="500"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.itemsSix}
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

export default PageEight;
