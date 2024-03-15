import { Text, VStack, IconButton, HStack, Image } from "@chakra-ui/react";

const PageContent = () => {
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
        Page Content
      </Text>

      <HStack justify="space-between" align="center" w="100%">
        <HStack>
          <Image src="/images/text.svg" alt="text" w="20px" h="20px" />
          <Text
            fontSize={"14px"}
            fontWeight="600"
            color="maintText.100"
            fontFamily={"body"}
          >
            Text Title
          </Text>
        </HStack>

        <IconButton
          icon={<Image src="/images/arrow-down.svg" alt="export" />}
          variant={"ghost"}
          bg="transparent"
          aria-label="export"
          p={0}
          m={0}
        />
      </HStack>

      <HStack justify="space-between" align="center" w="100%">
        <HStack>
          <Image src="/images/table.svg" alt="text" w="20px" h="20px" />
          <Text
            fontSize={"14px"}
            fontWeight="600"
            color="maintText.100"
            fontFamily={"body"}
          >
            Table
          </Text>
        </HStack>

        <IconButton
          icon={<Image src="/images/arrow-down.svg" alt="export" />}
          variant={"ghost"}
          bg="transparent"
          aria-label="export"
          p={0}
          m={0}
        />
      </HStack>

      <HStack justify="space-between" align="center" w="100%">
        <HStack>
          <Image src="/images/chart.svg" alt="text" w="20px" h="20px" />
          <Text
            fontSize={"14px"}
            fontWeight="600"
            color="maintText.100"
            fontFamily={"body"}
          >
            Pie chart
          </Text>
        </HStack>

        <IconButton
          icon={<Image src="/images/arrow-down.svg" alt="export" />}
          variant={"ghost"}
          bg="transparent"
          aria-label="export"
          p={0}
          m={0}
        />
      </HStack>
    </VStack>
  );
};

export default PageContent;
