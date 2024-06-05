import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { formatDate2 } from "@/utils/functions";
import Empty from "../admin/Empty";
import { useAppSelector } from "@/redux/store";
import Pagination from "../ui/Pagination";

const DashboardTable = ({
  data,
  pageSize,
  setPageSize,
  pageNumber,
  setPageNumber,
}: any) => {
  const headers = ["S/N", "Name", "Email", "Role", "Joined On"];

  const { userInfo } = useAppSelector((state) => state.app.auth);

  return (
    <TableContainer w="100%" bg="white">
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
                {index + 1}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.name}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="lowercase"
                fontFamily={"body"}
              >
                {item?.email}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.role?.name}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {formatDate2(item?.createdAt)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {!data?.length && <Empty title="No members found." desc="" />}

      <Pagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        data={data}
      />
    </TableContainer>
  );
};

export default DashboardTable;
