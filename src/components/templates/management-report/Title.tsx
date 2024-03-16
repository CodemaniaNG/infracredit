import { VStack, Box } from "@chakra-ui/react";
import EditableInput from "@/components/ui/EditableInput";

const Title = ({ title, color = "greens.200", isEdit }: any) => {
  return (
    <>
      <VStack align="flex-start" w="100%" spacing={0}>
        <EditableInput
          isEdit={isEdit}
          value={title}
          fontSize="22px"
          color={color}
          fontWeight="800"
          textAlign="left"
        />
      </VStack>
      <Box
        mt={-5}
        w="100%"
        h="2px"
        bgGradient="linear(to-r, rgba(34, 124, 191, 1), rgba(71, 182, 92, 1))"
      />
    </>
  );
};

export default Title;
