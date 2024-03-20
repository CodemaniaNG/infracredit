import { Text, VStack, IconButton, HStack, Image } from "@chakra-ui/react";

const Tools = () => {
  return (
    <HStack
      bg="white"
      borderRadius="8px"
      borderWidth={1}
      borderColor="border.100"
      w="100%"
      mb={5}
      justify="space-between"
      px={2}
    >
      <IconButton
        icon={<Image src="/images/undo.svg" alt="export" />}
        variant={"ghost"}
        bg="transparent"
        aria-label="export"
        p={0}
        m={0}
      />
      <IconButton
        icon={<Image src="/images/redo.svg" alt="export" />}
        variant={"ghost"}
        bg="transparent"
        aria-label="export"
        p={0}
        m={0}
      />
      <IconButton
        icon={<Image src="/images/arrow2.svg" alt="export" />}
        variant={"ghost"}
        bg="transparent"
        aria-label="export"
        p={0}
        m={0}
      />
      <IconButton
        icon={<Image src="/images/comment2.svg" alt="export" />}
        variant={"ghost"}
        bg="transparent"
        aria-label="export"
        p={0}
        m={0}
      />
    </HStack>
  );
};

export default Tools;
