import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import { memo } from "react";

const Footer = () => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        bgGradient="linear(to-b, rgba(71, 182, 92, 1), rgba(34, 124, 191, 1))"
        bgRepeat="no-repeat"
        mb={6}
        w="100%"
        minH="1200px"
      >
        {/* Header */}
        <HStack
          w="100%"
          p="6"
          justify="space-between"
          align="center"
          flexShrink={0}
        ></HStack>

        {/* Content */}
        <Box w="100%" px="6" flex="1" display="flex" alignItems="center"></Box>

        {/* Footer */}
        <VStack w="100%" align="flex-start" flexShrink={0}>
          <HStack
            w="100%"
            p="6"
            justify="space-between"
            align="center"
            flexShrink={0}
          >
            <Box w="50%">
              <Image
                src="/images/logo-white.svg"
                alt="logo"
                w="233px"
                h="70px"
              />
            </Box>
            <VStack align="flex-start" spacing={4} w="50%">
              <HStack
                borderBottomWidth={2}
                borderBottomColor={"white"}
                width={"100%"}
                pb={1}
              >
                <Text
                  fontSize="18px"
                  fontWeight="500"
                  color="white"
                  fontFamily="body"
                >
                  www.infracredit.ng
                </Text>
              </HStack>

              <HStack
                borderBottomWidth={2}
                borderBottomColor={"white"}
                width={"100%"}
                pb={1}
              >
                <Image src="/images/insta.svg" alt="img" />
                <Text
                  fontSize="18px"
                  fontWeight="500"
                  color="white"
                  fontFamily="body"
                >
                  InfraCredit
                </Text>
              </HStack>

              <HStack
                borderBottomWidth={2}
                borderBottomColor={"white"}
                width={"100%"}
                pb={1}
              >
                <Image src="/images/twitter.svg" alt="img" />
                <Text
                  fontSize="18px"
                  fontWeight="500"
                  color="white"
                  fontFamily="body"
                >
                  @InfraCredit
                </Text>
              </HStack>

              <HStack
                borderBottomWidth={2}
                borderBottomColor={"white"}
                width={"100%"}
                pb={1}
              >
                <Image src="/images/vimeo.svg" alt="img" />
                <Text
                  fontSize="18px"
                  fontWeight="500"
                  color="white"
                  fontFamily="body"
                >
                  vimeo.com/infracredit
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default memo(Footer);
