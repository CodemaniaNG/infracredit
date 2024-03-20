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
} from "@chakra-ui/react";
import EditableTextArea from "@/components/ui/EditableTextArea";

const PageOne = ({ isEdit }: any) => {
  const cellStyle = {
    border: "1px solid black",
  };

  return (
    <LayOut>
      <TableContainer w="100%">
        <Table size="sm" cellPadding={0} cellSpacing={0}>
          <Thead>
            <Tr>
              <Th style={cellStyle} py={2} w="5%">
                S/N
              </Th>
              <Th style={cellStyle} py={2} w="35%">
                MEETING
              </Th>
              <Th style={cellStyle} py={2} w="60%">
                DELIBERATION AND OUTCOME
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td style={cellStyle} py={2}>
                <Text fontSize={12} color={"black"} fontFamily={"body"}>
                  1
                </Text>
              </Td>
              <Td style={cellStyle} py={2}>
                <EditableTextArea
                  value={
                    "The meeting of the Remuneration and Nomination Committee (the Committee) held on the 17th of March 2022 via teleconference at 02:00 pm prompt to consider / review / deliberate on the general update on human resources; and the report on the end of the year appraisal."
                  }
                  fontSize="12px"
                  color="black"
                  fontWeight="500"
                  isEdit={true}
                />
              </Td>
              <Td style={cellStyle} py={2}>
                <EditableTextArea
                  value={
                    "The meeting of the Remuneration and Nomination Committee (the Committee) held on the 17th of March 2022 via teleconference at 02:00 pm prompt to consider / review / deliberate on the general update on human resources; and the report on the end of the year appraisal."
                  }
                  fontSize="12px"
                  color="black"
                  fontWeight="500"
                  isEdit={true}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayOut>
  );
};

export default PageOne;
