import {
  HStack,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";
import Title from "./Title";

const PageFifteen = ({ data }: any) => {
  return (
    <>
      <CeoLayOut isTitle={false} page={16}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <VStack align={"flex-start"} w="100%" spacing={0}>
            <EditableInput
              isEdit={false}
              value={data[0]?.title}
              fontSize="18px"
              color="black"
              fontWeight="800"
              textAlign="left"
            />
            <EditableTextArea
              value={data[0]?.title2}
              fontSize="18px"
              color="primary3"
              fontWeight="500"
              isEdit={false}
            />
          </VStack>

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
                        py={3}
                        bg={"#002D4E"}
                        textTransform="capitalize"
                      >
                        <EditableInput
                          value={item}
                          isEdit={false}
                          textAlign="right"
                          fontSize="11px"
                          color="white"
                          fontWeight="600"
                        />
                      </Th>
                    )
                  )}
                </Tr>
                <Tr>
                  {data[0].table1[0].tableHeader2.map(
                    (item: any, index: number) => (
                      <Th
                        key={index}
                        py={3}
                        bg={"greens.200"}
                        textTransform="capitalize"
                      >
                        <EditableInput
                          value={item}
                          isEdit={false}
                          textAlign="right"
                          fontSize="11px"
                          color="white"
                          fontWeight="600"
                        />
                      </Th>
                    )
                  )}
                </Tr>
              </Thead>

              <Tbody>
                {data[0].table1[1].data.map((item: any, index: number) => (
                  <Tr key={index} bg={index % 2 === 0 ? "#D9D9D9" : "white"}>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text1}
                        isEdit={false}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text2}
                        isEdit={false}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text3}
                        isEdit={false}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text4}
                        isEdit={false}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text5}
                        isEdit={false}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text6}
                        isEdit={false}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </CeoLayOut>
    </>
  );
};

export default PageFifteen;
