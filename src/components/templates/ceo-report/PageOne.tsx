import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { useState, useEffect } from "react";

const PageOne = ({ data, isEdit }: any) => {
  const [ceoReport, setCeoReport] = useState<any>(data);

  useEffect(() => {
    setCeoReport(data);
  }, [data]);

  return (
    <>
      <CeoLayOut title={data[0]?.title} page={2} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableTextArea
            value={ceoReport[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setCeoReport([
                {
                  ...ceoReport[0],
                  itemOne: e.target.value,
                },
                ceoReport[1],
              ]);
            }}
          />
          <EditableTextArea
            value={ceoReport[0]?.itmesTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setCeoReport([
                {
                  ...ceoReport[0],
                  itmesTwo: e.target.value,
                },
                ceoReport[1],
              ]);
            }}
          />
          <EditableTextArea
            value={ceoReport[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setCeoReport([
                {
                  ...ceoReport[0],
                  itemsThree: e.target.value,
                },
                ceoReport[1],
              ]);
            }}
          />

          <Title title={data[1]?.title} isEdit={isEdit} />
          <EditableTextArea
            value={ceoReport[1]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            onChange={(e: any) => {
              setCeoReport([
                ceoReport[0],
                {
                  ...ceoReport[1],
                  itemOne: e.target.value,
                },
              ]);
            }}
          />
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageOne;
