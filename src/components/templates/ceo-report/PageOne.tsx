import { VStack } from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableTextArea from "@/components/ui/EditableTextArea";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setCeoReport } from "@/redux/slices/templateSlice";

const PageOne = ({ data, isEdit }: any) => {
  const dispatch = useAppDispatch();
  const { ceoReport } = useAppSelector((state) => state.app.template);
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
            // onChange={(e: any) => {
            //   dispatch(
            //     setCeoReport({
            //       ...ceoReport,
            //       subTitle: [
            //         {
            //           ...data[0],
            //           itemOne: e.target.value,
            //         },
            //       ],
            //     }),
            //   );
            // }}
          />
          <EditableTextArea
            value={data[0]?.itmesTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            // onChange={(e: any) => {
            //   dispatch(
            //     setCeoReport({
            //       ...ceoReport,
            //       subTitle: [
            //         {
            //           ...data[0],
            //           itmesTwo: e.target.value,
            //         },
            //       ],
            //     }),
            //   );
            // }}
          />
          <EditableTextArea
            value={data[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            // onChange={(e: any) => {
            //   dispatch(
            //     setCeoReport({
            //       ...ceoReport,
            //       subTitle: [
            //         {
            //           ...data[0],
            //           itemsThree: e.target.value,
            //         },
            //       ],
            //     }),
            //   );
            // }}
          />

          <Title title={data[1]?.title} isEdit={isEdit} />
          <EditableTextArea
            value={data[1]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
            // onChange={(e: any) => {
            //   dispatch(
            //     setCeoReport({
            //       ...ceoReport,
            //       subTitle: [
            //         {
            //           ...data[1],
            //           itemOne: e.target.value,
            //         },
            //       ],
            //     }),
            //   );
            // }}
          />
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageOne;
