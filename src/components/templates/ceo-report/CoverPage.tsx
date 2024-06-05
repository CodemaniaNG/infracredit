import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import { memo } from "react";

const CoverPage = () => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        bg="white"
        bgImage="url('/images/bg.svg')"
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
        >
          <Box />
          <HStack justify="flex-end">
            <Image src="/images/logo-white.svg" alt="logo" w="321px" h="96px" />
          </HStack>
        </HStack>

        {/* Content */}
        <Box w="100%" px="6" flex="1" display="flex" alignItems="center">
          <VStack alignItems="flex-start" spacing={1}>
            <Text
              fontSize="56px"
              fontWeight="700"
              color="white"
              fontFamily="body"
            >
              CEO Report
            </Text>
            <Text
              fontSize="32px"
              fontWeight="500"
              color="white"
              fontFamily="body"
            >
              To the Board of Directors <br />
              March 2022
            </Text>
          </VStack>
        </Box>

        {/* Footer */}
        <VStack w="100%" align="flex-start" flexShrink={0}></VStack>
      </VStack>
    </>
  );
};

export default memo(CoverPage);
