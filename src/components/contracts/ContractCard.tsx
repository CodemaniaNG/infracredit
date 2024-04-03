import {
  Card,
  CardBody,
  Image,
  HStack,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { useRouter } from "next/router";

type ContractCardProps = {
  title: string;
  desc: string;
  type?: string;
  role?: string;
};

const ContractCard = ({
  title,
  desc,
  type = "contract",
  role,
}: ContractCardProps) => {
  const router = useRouter();
  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={16}
        onClick={() => {
          router.push(`/editor/${type}?role=${role}`);
        }}
        cursor="pointer"
      >
        <CardBody p={2}>
          <Image src="/images/contract.svg" alt="Document" />
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

            <Button
              text="Open"
              type="submit"
              size="md"
              onClick={() => {
                router.push(`/editor/${type}?role=${role}`);
              }}
            />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default ContractCard;
