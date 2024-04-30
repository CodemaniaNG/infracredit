import {
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
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDate2 } from "@/utils/functions";
import { useRouter } from "next/router";
import Button from "../ui/Button";

const MemberTable = ({ data }: any) => {
  const router = useRouter();
  const headers = ["S/N", "Name", "Email", "Role", "Joined On", "Action"];

  const EmptyState = ({ title, desc, buttonTitle, onClick }: any) => (
    <Stack dir="column" align="center" justify="center" py={10}>
      <Image src="/images/empty.svg" alt="empty" />
      <Stack dir="column" spacing={0}>
        <Text
          color="maintText.400"
          fontSize={{ base: "24px", sm: "28px" }}
          fontWeight={600}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          color="subText.400"
          fontSize={{ base: "16px", sm: "16px" }}
          lineHeight="24px"
          textAlign="center"
        >
          {desc}
        </Text>
      </Stack>
      {buttonTitle && (
        <Stack>
          <Button
            text={buttonTitle}
            icon="/images/add3.svg"
            iconPosition="left"
            onClick={onClick}
          />
        </Stack>
      )}
    </Stack>
  );

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
                textTransform="capitalize"
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
                  <MenuList>
                    <MenuItem
                      // icon={<Image src="/images/edit.svg" alt="more" />}
                      fontSize={14}
                      fontWeight={400}
                      color="mainTex.200"
                      fontFamily="body"
                      onClick={() =>
                        router.push(`/dashboard/admin/member/${item?.id}`)
                      }
                    >
                      View Logs
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {!data?.length && (
        <EmptyState
          title="No Member Found"
          desc="No member has been added to this department yet"
        />
      )}
    </TableContainer>
  );
};

export default MemberTable;
