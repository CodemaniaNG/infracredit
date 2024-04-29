import { Text, HStack, VStack, Avatar, AvatarBadge } from "@chakra-ui/react";
import Button from "../ui/Button";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";

const ReturnReport = ({ setIsOpen }: any) => {
  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Return Report
      </Text>

      <VStack w={"100%"} align="flex-start">
        <Text
          color={"subText.200"}
          fontSize={"14px"}
          fontWeight={"500"}
          fontFamily={"body"}
        >
          Title
        </Text>
        <VStack
          w={"100%"}
          align="flex-start"
          bg="bg.100"
          p={3}
          borderRadius={8}
          mt={-1}
        >
          <Text
            color={"secondary"}
            fontSize={"12px"}
            fontWeight={"500"}
            fontFamily={"body"}
          >
            Contractual Agreement | January 3, 2023
          </Text>
        </VStack>
      </VStack>

      <VStack align="flex-start">
        <Text
          fontSize={"14px"}
          fontFamily={"body"}
          fontWeight={"500"}
          color={"subText.600"}
          mb={-1}
        >
          Creator
        </Text>
        <HStack spacing={2}>
          <Avatar
            size="sm"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <VStack align="flex-start" spacing={0}>
            <Text
              fontSize={"13px"}
              fontFamily={"body"}
              fontWeight={"500"}
              color={"maintText.200"}
            >
              Segun Adebayo
            </Text>
            <Text
              fontSize={"11px"}
              fontFamily={"body"}
              fontWeight={"500"}
              color={"subText.600"}
            >
              USER
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack align="flex-start">
        <Text
          fontSize={"14px"}
          fontFamily={"body"}
          fontWeight={"500"}
          color={"subText.600"}
          mb={-1}
        >
          Assign to
        </Text>
        <HStack spacing={2}>
          <Avatar
            size="sm"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <VStack align="flex-start" spacing={0}>
            <Text
              fontSize={"13px"}
              fontFamily={"body"}
              fontWeight={"500"}
              color={"maintText.200"}
            >
              Segun Adebayo
            </Text>
            <Text
              fontSize={"11px"}
              fontFamily={"body"}
              fontWeight={"500"}
              color={"subText.600"}
            >
              USER
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <Formik
        initialValues={{
          comment: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Comment"
                name="comment"
                type="text"
                placeholder="Comment"
              />

              {/* <VStack align="stretch" w={"100%"} mt={4}>
                      <Button text="Share" px={4} py={4} type="submit" />
                    </VStack> */}
            </VStack>
          </Form>
        )}
      </Formik>

      <HStack w={"100%"} justify="space-between">
        <Button
          text="Cancel"
          px={4}
          py={4}
          type="submit"
          variant="outline"
          bg="transparent"
          color="#FF3B30"
          border="#FF9D98"
          onClick={() => setIsOpen(false)}
        />

        <Button text="Return" px={4} py={4} type="submit" bg="#FF3B30" />
      </HStack>
    </VStack>
  );
};

export default ReturnReport;
