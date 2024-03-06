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
};

const DocumentCard = ({ title, desc }: TaskCardProps) => {
  return (
    <>
      <Card variant="outline" maxW="sm" bg="#fff" borderRadius={16}>
        <CardBody p={2}>
          <Image src="/images/doc.svg" alt="Document" />
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} py={2}>
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
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DocumentCard;
