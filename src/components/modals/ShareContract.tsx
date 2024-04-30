import { Text, IconButton, VStack } from "@chakra-ui/react";
import Button from "../ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";

const ShareContract = ({ setIsOpen }: any) => {
  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Share Contract
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
      <Formik
        initialValues={{
          description: "",
          recipients: ["colaborator1@gmail.com"],
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
                label="Document Description"
                name="description"
                type="text"
                placeholder="Document Description"
              />

              <FieldArray
                name="recipients"
                render={(arrayHelpers) => (
                  <VStack align="stretch" w={"100%"} mt={4}>
                    {props.values.recipients.map((email, index) => (
                      <VStack key={index} position="relative">
                        <Input
                          label="Recipient’s Email"
                          name={`recipients.${index}`}
                          type="email"
                          placeholder="Recipient’s Email"
                        />
                        {index > 0 && (
                          <IconButton
                            aria-label="delete recipient"
                            position="absolute"
                            right="-2"
                            top="-2"
                            icon={<FiTrash2 size={20} color="#FF3B30" />}
                            onClick={() => arrayHelpers.remove(index)}
                            variant="ghost"
                            _hover={{ bg: "transparent" }}
                          />
                        )}
                      </VStack>
                    ))}
                    <Button
                      text="Add another recipient"
                      size="sm"
                      fontSize={10}
                      onClick={() => arrayHelpers.push("")}
                      variant="outline"
                      bg="transparent"
                      color="subText.400"
                      border="border.100"
                      borderStyle="dashed"
                    />
                  </VStack>
                )}
              />

              <Input
                label="Comment for Recipient"
                name="comment"
                type="text"
                placeholder="Comment for Recipient"
              />

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button text="Share" px={4} py={4} type="submit" />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default ShareContract;
