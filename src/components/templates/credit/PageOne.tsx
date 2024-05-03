import LayOut from "./LayOut";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Stack,
} from "@chakra-ui/react";
import EditableTextArea from "@/components/ui/EditableTextArea";
import EditableInput from "@/components/ui/EditableInput";

const PageOne = ({ isEdit, reportToEdit, setReportToEdit }: any) => {
  const cellStyle = {
    border: "1px solid black",
  };

  return (
    <LayOut>
      <EditableInput
        value={reportToEdit?.title}
        fontSize="12px"
        color="black"
        fontWeight="700"
        textAlign="left"
        isEdit={isEdit}
        onChange={(e: any) => {
          setReportToEdit({
            ...reportToEdit,
            title: e.target.value,
          });
        }}
      />
      <TableContainer w="100%">
        <Table
          size="sm"
          cellPadding={0}
          cellSpacing={0}
          sx={{
            tableLayout: "fixed",
            width: "100%",
          }}
        >
          <Thead>
            <Tr>
              {reportToEdit?.table[0].tableHeader.map(
                (item: any, index: number) => (
                  <Th
                    style={cellStyle}
                    py={2}
                    key={index}
                    w={
                      index === 0
                        ? "8%"
                        : index === 1
                        ? "32%"
                        : index === 2
                        ? "60%"
                        : ""
                    }
                  >
                    {item}
                  </Th>
                ),
              )}
            </Tr>
          </Thead>

          <Tbody>
            {reportToEdit?.table[1].data.map((item: any, index: number) => (
              <Tr key={index}>
                <Td
                  style={cellStyle}
                  py={2}
                  sx={{
                    verticalAlign: "top",
                  }}
                >
                  <EditableInput
                    value={item?.item1}
                    fontSize="12px"
                    color="black"
                    fontWeight="700"
                    isEdit={isEdit}
                    onChange={(e: any) => {
                      setReportToEdit({
                        ...reportToEdit,
                        table: [
                          {
                            tableHeader: reportToEdit.table[0].tableHeader,
                          },
                          {
                            data: reportToEdit.table[1].data.map(
                              (subItem: any, subIndex: number) => {
                                if (index === subIndex) {
                                  return {
                                    ...subItem,
                                    item1: e.target.value,
                                  };
                                }
                                return subItem;
                              },
                            ),
                          },
                        ],
                      });
                    }}
                  />
                </Td>

                <Td
                  style={cellStyle}
                  py={2}
                  sx={{
                    verticalAlign: "top",
                  }}
                >
                  <EditableTextArea
                    value={item?.item2}
                    fontSize="12px"
                    color="black"
                    fontWeight="700"
                    isEdit={isEdit}
                    onChange={(e: any) => {
                      setReportToEdit({
                        ...reportToEdit,
                        table: [
                          {
                            tableHeader: reportToEdit.table[0].tableHeader,
                          },
                          {
                            data: reportToEdit.table[1].data.map(
                              (subItem: any, subIndex: number) => {
                                if (index === subIndex) {
                                  return {
                                    ...subItem,
                                    item2: e.target.value,
                                  };
                                }
                                return subItem;
                              },
                            ),
                          },
                        ],
                      });
                    }}
                  />
                </Td>

                <Td
                  style={cellStyle}
                  py={2}
                  sx={{
                    verticalAlign: "top",
                  }}
                >
                  {item?.item3.map((subItem: any, index: number) => (
                    <Stack
                      key={index}
                      direction="column"
                      spacing={2}
                      align="flex-start"
                      w="100%"
                    >
                      <EditableTextArea
                        value={subItem.text1}
                        fontSize="12px"
                        color="black"
                        fontWeight="700"
                        isEdit={isEdit}
                        onChange={(e: any) => {
                          setReportToEdit({
                            ...reportToEdit,
                            table: [
                              {
                                tableHeader: reportToEdit.table[0].tableHeader,
                              },
                              {
                                data: reportToEdit.table[1].data.map(
                                  (subItem: any, subIndex: number) => {
                                    if (index === subIndex) {
                                      return {
                                        ...subItem,
                                        item3: [
                                          {
                                            text1: e.target.value,
                                          },
                                        ],
                                      };
                                    }
                                    return subItem;
                                  },
                                ),
                              },
                            ],
                          });
                        }}
                      />
                    </Stack>
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </LayOut>
  );
};

export default PageOne;
