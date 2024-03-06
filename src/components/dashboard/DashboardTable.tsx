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

const DashboardTable = ({ data }: any) => {
  const router = useRouter();
  const headers = [
    "S/N",
    "Title",
    "Edited By",
    "Edited On",
    "Current User",
    "Action",
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
                {item?.title}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.editedBy}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.editedOn}
              </Td>

              <Td
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                color="subText.200"
                textTransform="capitalize"
                fontFamily={"body"}
              >
                {item?.currentUser}
              </Td>

              <Td
                textAlign="left"
                fontSize={14}
                fontWeight={500}
                color="subText2"
                textTransform="capitalize"
              >
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<Image src="/images/action.svg" alt="more" />}
                    variant="ghost"
                  />
                  {/* <MenuList>
                    <MenuItem
                      // icon={<Image src="/images/edit.svg" alt="more" />}
                      fontSize={14}
                      fontWeight={400}
                      color="mainTex.200"
                      fontFamily="body"
                      onClick={() =>
                        router.push(
                          `/dashboard/admin/member/${item?.name}`
                        )
                      }
                    >
                      View Logs
                    </MenuItem>
                  </MenuList> */}
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
