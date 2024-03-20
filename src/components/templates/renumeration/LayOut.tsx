import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";

const LayOut = ({ children, page, isEdit }: any) => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        bg="white"
        mb={6}
        w="100%"
        minH="1200px"
        py={4}
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
            <Image src="/images/logo.svg" alt="logo" w="133px" h="40px" />
          </HStack>
        </HStack>

        {/* Content */}
        <Box w="100%" px="6" flex="1">
          {children}
        </Box>

        {/* Footer */}
        <VStack w="100%" align="flex-start" flexShrink={0}>
          <HStack justify="space-between" w="100%" align="flex-start">
            <Box
              w="45%"
              p="1"
              bgGradient="linear(to-r, rgba(34, 124, 191, 1), rgba(71, 182, 92, 1))"
            >
              <EditableInput
                isEdit={isEdit}
                value="InfraCredit CEO Report March 2022"
              />
            </Box>
            <Text
              fontSize="20px"
              color="greens.200"
              textAlign="center"
              fontWeight="600"
              fontFamily="body"
            >
              {page}
            </Text>
            <Box w="45%" bg="border.300" h={"8px"} />
          </HStack>
        </VStack>
        <VStack px="6"  align={"flex-start"}>
          <EditableInput
            isEdit={isEdit}
            value="Source: CBN, Vetiva Research, Rencap FSDH Research"
            color="black"
            fontSize="12px"
          />
        </VStack>
      </VStack>
    </>
  );
};

export default LayOut;
