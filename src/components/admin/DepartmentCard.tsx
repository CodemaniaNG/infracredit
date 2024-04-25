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
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>

            <Text
              fontSize={"14px"}
              fontWeight="500"
              color="subText.300"
              fontFamily={"body"}
              textAlign="center"
            >
              {desc || "No description"}
            </Text>

            {/* <HStack>
              <Image src="/images/comment.svg" alt="Like" />
              <Text
                fontSize={"12px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
              >
                13 Comments
              </Text>
            </HStack> */}
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DepartmentCard;
