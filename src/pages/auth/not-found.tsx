import { Box, Flex, Image, VStack, Text, Stack } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import AuthLeft from "@/components/auth/AuthLeft";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <Flex alignItems="stretch" h="100%">
      <AuthLeft />
      <Box
        flex="1"
        bg="white"
        p={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Box maxW="400px" mx="auto" w="100%">
          <VStack spacing={8} w="100%">
            <Image src="/images/logo.svg" alt="Login" />
            <VStack w="100%">
              <Stack spacing={0}>
                <Image src="/images/empty.svg" alt="Login" />
                <Text
                  fontSize={{
                    base: "24px",
                    md: "28px",
                    lg: "32px",
                  }}
                  fontWeight="600"
                  textAlign="center"
                  color="maintText.200"
                >
                  Sorry, you’re not registered to InfraCredit
                </Text>
                <Text
                  fontSize={{
                    base: "16px",
                    md: "16px",
                    lg: "18px",
                  }}
                  fontWeight="400"
                  textAlign="center"
                  color="#6D7175"
                >
                  kindly, inform your head of department to have access.
                </Text>
              </Stack>
              <Button
                text="Return To Sign Up"
                py={7}
                type="button"
                onClick={() => router.push("/auth/login")}
              />
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default NotFound;
