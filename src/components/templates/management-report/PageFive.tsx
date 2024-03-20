import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";
import ManagementLayOut from "./ManagementLayOut";

const PageFive = ({ data, isEdit }: any) => {
  return (
    <>
      <ManagementLayOut page={6} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <VStack align={"flex-start"} w="100%" spacing={0}>
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title}
              fontSize="18px"
              color="black"
              fontWeight="800"
              textAlign="left"
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
                          isEdit={isEdit}
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
                          isEdit={isEdit}
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
                  <Tr key={index}>
                    <Td borderColor="#676767" py={2}>
                      <EditableInput
                        value={item?.text1}
                        isEdit={isEdit}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                      <EditableInput
                        value={item?.text2}
                        isEdit={isEdit}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                      <EditableInput
                        value={item?.text3}
                        isEdit={isEdit}
                        textAlign="right"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                      <EditableInput
                        value={item?.text4}
                        isEdit={isEdit}
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
      </ManagementLayOut>
    </>
  );
};

export default PageFive;
