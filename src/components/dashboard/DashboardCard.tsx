import { Card, CardBody, Image, HStack, VStack, Text } from "@chakra-ui/react";
import NairaNumberFormat from "../ui/NairaNumberFormat";

type DashboardCardProps = {
  label: string;
  value: number;
  image?: string;
  isPrefix?: boolean;
};

const DashboardCard = ({
  label,
  value,
  image,
  isPrefix,
}: DashboardCardProps) => {
  return (
    <>
      <Card variant="filled" maxW="sm" bg="#fff" borderRadius={16}>
        <CardBody pb={0}>
          <VStack align="flex-start">
            <HStack spacing={4}>
              <Image src={image} alt="logo" w="fit-content" />
              <VStack align="flex-start">
                <Text
                  fontSize="16px"
                  fontWeight="600"
                  color="secondary"
                  fontFamily={"body"}
                >
                  {label}
                </Text>
              </VStack>
            </HStack>
            <NairaNumberFormat
              value={value}
              isBold={true}
              isPrefix={isPrefix}
              fontSize={"32px"}
              color="maintText.200"
            />
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DashboardCard;
