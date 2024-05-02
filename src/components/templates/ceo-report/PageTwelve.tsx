import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import Title from "./Title";

const PageTwelve = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <CeoLayOut page={13} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <Title
            title={reportToEdit?.subTitleTwelve[0]?.title}
            isEdit={isEdit}
          />
          <EditableTextArea
            value={reportToEdit?.subTitleTwelve[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />

          <VStack align="flex-start" w="100%" spacing={1}>
            <EditableInput
              isEdit={isEdit}
              value={reportToEdit?.subTitleTwelve[0]?.title2}
              fontSize="18px"
              color="greens.200"
              fontWeight="800"
              textAlign="left"
            />

            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsTwo}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsThree}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsFour}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsFive}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsSix}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={reportToEdit?.subTitleTwelve[0]?.itemsSeven}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageTwelve;
