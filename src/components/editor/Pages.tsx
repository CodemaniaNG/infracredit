import { Text, VStack, Box } from "@chakra-ui/react";

const Pages = () => {
  return (
    <VStack
      align="flex-start"
      bg="white"
      p={3}
      borderRadius="16px"
      borderWidth={1}
      borderColor="border.100"
      spacing={3}
      w="100%"
      mb={5}
    >
      <Text
        fontSize={"14px"}
        fontWeight="500"
        color="greens.100"
        fontFamily={"body"}
      >
        Pages
      </Text>

      <VStack align="flex-start" w="100%">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Box
              key={i}
              w="100%"
              h="123px"
              borderWidth={2}
              borderColor="maintText.100"
              bg="bg.100"
              borderRadius="8px"
              p={3}
              color={"subText.200"}
              fontSize={"16px"}
              fontWeight="600"
            >
              1
            </Box>
          ))}
      </VStack>
    </VStack>
  );
};

export default Pages;
