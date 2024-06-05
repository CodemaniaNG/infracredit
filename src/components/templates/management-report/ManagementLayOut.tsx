import { Text, VStack, Box, HStack, Image } from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";
import { memo } from "react";

const ManagementLayOut = ({ children, page, isEdit }: any) => {
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
        {/* Content */}
        <Box w="100%" px="6" py="6" flex="1">
          {children}
        </Box>

        {/* Footer */}
        <VStack w="100%" align="flex-start" flexShrink={0} px={6}>
          <HStack justify="space-between" w="100%" align="flex-start">
            <Image src="/images/logo.svg" alt="logo" w="133px" h="40px" />
            <VStack align="flex-start" spacing={0}>
              <Text
                fontSize="12px"
                fontWeight="500"
                color="greens.200"
                fontFamily="body"
              >
                MANAGEMENT REPORT
              </Text>
              <Text
                fontSize="12px"
                fontWeight="500"
                color="primary3"
                fontFamily="body"
              >
                DECEMBER 2021
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default memo(ManagementLayOut);
