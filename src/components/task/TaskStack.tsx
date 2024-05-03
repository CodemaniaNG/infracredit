import { Card, CardBody, HStack, Text, Box } from "@chakra-ui/react";
type TaskStackProps = {
  children: any;
  title: string;
  count: number;
  borderColor: string;
};

const TaskStack = ({ children, title, count, borderColor }: any) => {
  return (
    <>
      <HStack
        spacing={4}
        borderBottomWidth={2}
        borderColor={borderColor}
        alignItems="center"
        pb={2}
        mb={3}
      >
        <Text
          fontSize="16px"
          fontWeight="600"
          color="subText.200"
          fontFamily={"body"}
        >
          {title}
        </Text>
        <Box
          w="25px"
          h="25px"
          borderRadius={"full"}
          textAlign="center"
          fontSize="14px"
          fontWeight="600"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="subText.300"
          color="subText.300"
        >
          {count}
        </Box>
      </HStack>
      <Card variant="outline" maxW="sm" bg="#fff" borderRadius={16} h="100%">
        <CardBody p={2}>{children}</CardBody>
      </Card>
    </>
  );
};

export default TaskStack;
