import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Badge,
  HStack,
  Text,
} from "@chakra-ui/react";
import { formatDate2 } from "@/utils/functions";
import { useRouter } from "next/router";

const ReportTable = ({ data }: any) => {
  const router = useRouter();
  const headers = [
    "S/N",
    "Report",
    "Action",
    "Timestamp",
    "Date",
  ];

  return (
    <TableContainer w="100%">
      <Table
        variant="striped"
        minW="100%"
        borderTopRightRadius={16}
        borderTopLeftRadius={16}
        bg="secondary"
      >
        <Thead>
          <Tr>
            {headers.map((header: string, index: number) => (
              <Th
                p={5}
                textAlign="left"
                fontSize={16}
                fontWeight={500}
                color="bg.100"
                fontFamily={"body"}
                textTransform="capitalize"
                key={index}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody bg="white">
          {data?.map((item: any, index: number) => (
            <Tr key={index} _hover={{ bg: "#F6F6F6", cursor: "pointer" }}>
              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.sn}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.report}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.Action}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.time}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.date}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReportTable;
