import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageOne = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  return (
    <>
      <CeoLayOut
        title={reportToEdit?.subTitle[0]?.title}
        page={2}
        isEdit={isEdit}
        onChange={(e: any) => {
          setReportToEdit({
            ...reportToEdit,
            subTitle: [
              {
                ...reportToEdit?.subTitle[0],
                title: e.target.value,
              },
              ...reportToEdit?.subTitle.slice(1),
            ],
          });
        }}
      >
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableTextArea
            value={reportToEdit?.subTitle[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setReportToEdit({
                ...reportToEdit,
                subTitle: [
                  {
                    ...reportToEdit?.subTitle[0],
                    itemOne: e.target.value,
                  },
                  ...reportToEdit?.subTitle.slice(1),
                ],
              });
            }}
          />
          <EditableTextArea
            value={reportToEdit?.subTitle[0]?.itmesTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setReportToEdit({
                ...reportToEdit,
                subTitle: [
                  {
                    ...reportToEdit?.subTitle[0],
                    itmesTwo: e.target.value,
                  },
                  ...reportToEdit?.subTitle.slice(1),
                ],
              });
            }}
          />
          <EditableTextArea
            value={reportToEdit?.subTitle[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setReportToEdit({
                ...reportToEdit,
                subTitle: [
                  {
                    ...reportToEdit?.subTitle[0],
                    itemsThree: e.target.value,
                  },
                  ...reportToEdit?.subTitle.slice(1),
                ],
              });
            }}
          />

          <Title
            title={reportToEdit?.subTitle[1]?.title}
            isEdit={isEdit}
            onChange={(e: any) => {
              setReportToEdit({
                ...reportToEdit,
                subTitle: [
                  ...reportToEdit?.subTitle.slice(0, 1),
                  {
                    ...reportToEdit?.subTitle[1],
                    title: e.target.value,
                  },
                ],
              });
            }}
          />
          <EditableTextArea
            value={reportToEdit?.subTitle[1]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setReportToEdit({
                ...reportToEdit,
                subTitle: [
                  ...reportToEdit?.subTitle.slice(0, 1),
                  {
                    ...reportToEdit?.subTitle[1],
                    itemOne: e.target.value,
                  },
                ],
              });
            }}
          />
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageOne;
