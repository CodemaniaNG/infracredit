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
import CeoLayOut from "./CeoLayOut";
import EditableInput from "@/components/ui/EditableInput";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageNine = ({ data, isEdit }: any) => {
  return (
    <>
      <CeoLayOut page={10} title={data[0]?.title} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
            value={data[0]?.title2}
            fontSize="18px"
            color="greens.200"
            fontWeight="700"
            textAlign="left"
          />
          <EditableTextArea
            value={data[0]?.itemOne}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itemsTwo}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itemsThree}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itemsFour}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itemsFive}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <EditableTextArea
            value={data[0]?.itemsSix}
            fontSize="14px"
            color="black"
            fontWeight="500"
            isEdit={isEdit}
          />
          <VStack align="flex-start" w="100%">
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title3}
              fontSize="16px"
              color="greens.200"
              fontWeight="700"
              textAlign="left"
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
                          bg={index % 2 === 0 ? "#1C4969" : "secondary2"}
                          textTransform="capitalize"
                        >
                          <EditableInput
                            value={item}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="11px"
                            color="white"
                            fontWeight="600"
                          />
                        </Th>
                      ),
                    )}
                  </Tr>
                </Thead>

                <Tbody>
                  {data[0].table1[1].data.map((item: any, index: number) => (
                    <Tr
                      key={index}
                      bg={index % 2 === 0 ? "#D9D9D9" : "#F2F2F2"}
                    >
                      <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                        <EditableInput
                          value={item?.text1}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#F2F2F2"}>
                        <EditableInput
                          value={item?.text2}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                        <EditableInput
                          value={item?.text3}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#F2F2F2"}>
                        <EditableInput
                          value={item?.text4}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                        <EditableInput
                          value={item?.text5}
                          isEdit={isEdit}
                          textAlign="left"
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
                    {data[0].table2[0].tableHeader.map(
                      (item: any, index: number) => (
                        <Th
                          key={index}
                          py={0}
                          bg={index % 2 === 0 ? "#1C4969" : "secondary2"}
                          textTransform="capitalize"
                        >
                          <EditableInput
                            value={item}
                            isEdit={isEdit}
                            textAlign="left"
                            fontSize="11px"
                            color="white"
                            fontWeight="600"
                          />
                        </Th>
                      ),
                    )}
                  </Tr>
                </Thead>

                <Tbody>
                  {data[0].table2[1].data.map((item: any, index: number) => (
                    <Tr key={index}>
                      <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                        <EditableInput
                          value={item?.text1}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#F2F2F2"}>
                        <EditableInput
                          value={item?.text2}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#D9D9D9"}>
                        <EditableInput
                          value={item?.text3}
                          isEdit={isEdit}
                          textAlign="left"
                          fontSize="10px"
                          color="black"
                          fontWeight="600"
                        />
                      </Td>
                      <Td borderColor="#676767" py={2} bg={"#F2F2F2"}>
                        <EditableInput
                          value={item?.text4}
                          isEdit={isEdit}
                          textAlign="left"
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

          <VStack align="flex-start" w="100%">
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title4}
              fontSize="16px"
              color="greens.200"
              fontWeight="700"
              textAlign="left"
            />

            <EditableTextArea
              value={data[0]?.itemsSeven}
              fontSize="14px"
              color="black"
              fontWeight="600"
              isEdit={isEdit}
            />

            <EditableTextArea
              value={data[0]?.itemsEight}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />

            <EditableTextArea
              value={data[0]?.itemsNine}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align="flex-start" w="100%">
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title5}
              fontSize="16px"
              color="greens.200"
              fontWeight="700"
              textAlign="left"
            />

            <EditableTextArea
              value={data[0]?.itemsTen}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
          </VStack>

          <VStack align="flex-start" w="100%">
            <EditableInput
              isEdit={isEdit}
              value={data[0]?.title6}
              fontSize="16px"
              color="greens.200"
              fontWeight="700"
              textAlign="left"
            />

            <EditableTextArea
              value={data[0]?.itemsEleven}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />

            <EditableTextArea
              value={data[0]?.itemsTwelve}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />

            <EditableTextArea
              value={data[0]?.itemsThirteen}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />

            <EditableTextArea
              value={data[0]?.itemsFourteen}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsFifteen}
              fontSize="14px"
              color="black"
              fontWeight="500"
              isEdit={isEdit}
            />
            <EditableTextArea
              value={data[0]?.itemsSixteen}
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

export default PageNine;
