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
import Button from "../ui/Button";

type TaskCardProps = {
  title: string;
  desc: string;
  isStack?: boolean;
};

const TaskCard = ({ title, desc, isStack = false }: TaskCardProps) => {
  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={8}
        mb={isStack ? "3" : "0"}
      >
        <CardBody>
          <VStack align="flex-start" spacing={4}>
            <VStack align="flex-start">
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "18px",
                }}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
              <Text
                fontSize={"10px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
                mt={-2}
              >
                {desc}
              </Text>
            </VStack>

            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>

            <Divider borderColor="border.200" />

            <HStack>
              <Image src="/images/comment.svg" alt="Like" />
              <Text
                fontSize={"12px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
              >
                13 Comments
              </Text>
            </HStack>

            <Button text="Edit Report" type="submit" size="md" />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskCard;
