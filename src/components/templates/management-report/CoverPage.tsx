import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";

const CoverPage = () => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        bg="white"
        bgImage="url('/images/bg2.svg')"
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
            <Image src="/images/logo.svg" alt="logo" w="321px" h="96px" />
          </HStack>
        </HStack>

        {/* Content */}
        <Box w="100%" px="10" flex="1" mt={20}>
          <VStack
            alignItems="flex-start"
            spacing={0}
            borderBottomWidth={2}
            borderBottomColor={"white"}
            w="60%"
          >
            <Text
              fontSize="56px"
              fontWeight="500"
              color="white"
              fontFamily="body"
            >
              MANAGEMENT
            </Text>
            <Text
              fontSize="56px"
              fontWeight="700"
              color="white"
              fontFamily="body"
              mt={-5}
            >
              REPORT
            </Text>
          </VStack>
        </Box>

        {/* Footer */}
        <VStack w="100%" align="flex-end" flexShrink={0} p={10}>
          <Text
            fontSize="24px"
            fontWeight="500"
            color="white"
            fontFamily="body"
          >
            DECEMBER 2021
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default CoverPage;
