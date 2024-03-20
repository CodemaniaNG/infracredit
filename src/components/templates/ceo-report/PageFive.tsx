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

const PageFive = ({ data, isEdit }: any) => {
  return (
    <>
      <CeoLayOut page={6} isEdit={isEdit}>
        <VStack align="flex-start" w="100%" spacing={4}>
          <EditableInput
            isEdit={isEdit}
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
                          isEdit={isEdit}
                          textAlign="center"
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
                        isEdit={isEdit}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={0}>
                      <EditableInput
                        value={item?.text2}
                        isEdit={isEdit}
                        textAlign="left"
                        fontSize="10px"
                        color="black"
                        fontWeight="600"
                      />
                    </Td>
                    <Td borderColor="#676767" py={0}>
                      {item?.text3.map((item: any, index: number) => (
                        <EditableInput
                          key={index}
                          value={item}
                          isEdit={isEdit}
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

          <EditableInput
            isEdit={isEdit}
            value={data[0]?.title2}
            fontSize="18px"
            color="primary3"
            fontWeight="800"
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
      </CeoLayOut>
    </>
  );
};

export default PageFive;
