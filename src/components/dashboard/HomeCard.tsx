import { Card, CardBody, Image, HStack, VStack, Text } from "@chakra-ui/react";
import Button from "../ui/Button";
import { useRouter } from "next/router";

type DashboardCardProps = {
  text: string;
  description: string;
  image?: string;
};

const HomeCard = ({ text, description, image }: DashboardCardProps) => {
  const router = useRouter();
  return (
    <>
      <Card
        variant="filled"
        maxW="sm"
        bg="#fff"
        borderRadius={8}
        borderWidth={1}
        borderColor="border.100"
      >
        <CardBody>
          <VStack align="flex-start">
            <Image src={image} alt="logo" boxSize={14} />
            <VStack align="flex-start">
              <Text fontSize="20px" fontWeight="700" color="maintText.100">
                {text}
              </Text>
            </VStack>
            <Text fontSize="16px" fontWeight="600" color="subText.300">
              {description}
            </Text>

            <Button text="Open" onClick={() => router.push("/")} />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default HomeCard;
