import {
  Card,
  CardBody,
  Image,
  HStack,
  VStack,
  Text,
  Divider,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type DepartmentCardProps = {
  title: string;
  desc?: string;
  id?: string;
};

const DepartmentCard = ({ title, desc, id }: DepartmentCardProps) => {
  const router = useRouter();
  return (
    <>
      <Card
        variant="filled"
        maxW="sm"
        bg="#fff"
        borderRadius={16}
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 8px rgba(38, 105, 93, 0.1)"
        onClick={() => router.push(`/dashboard/admin/department/${id}`)}
        cursor={"pointer"}
      >
        <CardBody>
          <VStack spacing={4}>
            <VStack>
              <Text
                fontSize={"16px"}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
            </VStack>

            <AvatarGroup size="sm" max={3}>
              <Avatar name="Ryan Florence" bg="primary" color="white" />
              <Avatar name="Segun Adebayo" bg="primary" color="white" />
              <Avatar name="Kent Dodds" bg="primary" color="white" />
              <Avatar name="Prosper Otemuyiwa" bg="primary" color="white" />
              <Avatar name="Christian Nwamba" bg="primary" color="white" />
            </AvatarGroup>

            <Text
              fontSize={"14px"}
              fontWeight="500"
              color="subText.300"
              fontFamily={"body"}
              textAlign="center"
            >
              {"No description"}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DepartmentCard;
