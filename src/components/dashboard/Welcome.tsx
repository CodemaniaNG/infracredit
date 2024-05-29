import { useAppSelector } from "@/redux/store";
import { Text, VStack } from "@chakra-ui/react";
import { formatDate2 } from "@/utils/functions";

const Welcome = ({ isHome = false }: any) => {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  return (
    <VStack align="flex-start" mb={"3"}>
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
        Welcome back,
        <Text
          as="span"
          fontSize={{
            base: "20px",
            md: "24px",
            lg: "32px",
          }}
          fontWeight="600"
          color="secondary"
          fontFamily={"body"}
          textTransform={"capitalize"}
        >
          {" "}
          {isHome ? "to InfraCredit Management System" : userInfo?.name}
        </Text>
      </Text>
      <Text
        fontSize={"16px"}
        fontWeight="500"
        color="subText.400"
        mt={-2}
        fontFamily={"body"}
      >
        {formatDate2(new Date().toISOString())}
      </Text>
    </VStack>
  );
};

export default Welcome;
