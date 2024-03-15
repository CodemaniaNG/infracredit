import {
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import Title from "./Title";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageFour = ({ data }: any) => {
  return (
    <>
      <CeoLayOut isTitle={false} page={5}>
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

          <TableContainer w="100%">
            <Table
              size="sm"
              borderWidth={1}
              borderColor="#676767"
              cellSpacing={0}
              cellPadding={0}
            >
              <Thead>
                <Tr>
                  {data[0].table1[0].tableHeader.map(
                    (item: any, index: number) => (
                      <Th
                        key={index}
                        py={0}
                        bg={index % 2 === 0 ? "primary3" : "secondary2"}
                        textTransform="capitalize"
                      >
                        <EditableInput
                          value={item}
                          isEdit={false}
                          textAlign="left"
                          fontSize="11px"
                          color="white"
                          fontWeight="600"
                        />
                      </Th>
                    )
                  )}
                </Tr>
              </Thead>

              <Tbody bg="#E9E9E9">
                {data[0].table1[1].data.map((item: any, index: number) => (
                  <Tr key={index}>
                    <Td borderColor="#676767" py={0}>
                      <EditableInput
                        value={item?.text1}
                        isEdit={false}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={0}>
                      <EditableInput
                        value={item?.text2}
                        isEdit={false}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={0}>
                      <EditableInput
                        value={item?.text3}
                        isEdit={false}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={0}>
                      {item?.text4.map((item: any, index: number) => (
                        <EditableInput
                          key={index}
                          value={item}
                          isEdit={false}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      ))}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <EditableTextArea
            value={data[0]?.itemsFour}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={false}
          />

          {data[0]?.notes.map((item: any, index: number) => (
            <EditableTextArea
              key={index}
              value={item}
              fontSize="14px"
              color="subText.900"
              fontWeight="500"
              isEdit={false}
            />
          ))}
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageFour;
