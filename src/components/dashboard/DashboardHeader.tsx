import { formatDate2 } from "@/utils/functions";
import { Text, VStack, HStack } from "@chakra-ui/react";

const DashboardHeader = ({ children, title, description }: any) => {
  return (
    <HStack justify="space-between" mb={"3"}>
      <VStack align="flex-start">
        <Text
          fontSize={{
            base: "20px",
            md: "24px",
            lg: "32px",
          }}
          fontWeight="600"
          color="maintText.200"
          fontFamily={"body"}
        >
          {title}
        </Text>
        {description && (
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="subText.400"
            mt={-2}
            fontFamily={"body"}
          >
            {description}
          </Text>
        )}
        {!description && (
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="subText.400"
            mt={-2}
            fontFamily={"body"}
          >
            {formatDate2(new Date().toISOString())}
          </Text>
        )}
      </VStack>

      <HStack justify="flex-end">{children}</HStack>
    </HStack>
  );
};

export default DashboardHeader;
