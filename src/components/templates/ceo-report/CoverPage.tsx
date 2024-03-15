import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";

const CoverPage = () => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        // bg="white"
        bgGradient="linear(to-b, rgba(71, 182, 92, 1), rgba(34, 124, 191, 1))"
        mb={6}
        w="100%"
        minH="1200px"
        pt={4}
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
          body
        </Box>

        {/* Footer */}
        <VStack w="100%" align="flex-start" flexShrink={0}
         bg="white"
         h="150px"
        >
        </VStack>
      </VStack>
    </>
  );
};

export default CoverPage;
