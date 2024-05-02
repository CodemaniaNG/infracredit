import { Text, VStack, IconButton } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";

const CreateFolder = ({ setIsOpen }: any) => {
  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Create New Folder
      </Text>
      <Formik
        initialValues={{
          folderName: "",
          department: ["HR"],
          users: ["colaborator1@gmail.com"],
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Folder Name"
                name="folderName"
                type="text"
                placeholder="Folder Name"
              />

              <FieldArray
                name="department"
                render={(arrayHelpers) => (
                  <VStack align="stretch" w={"100%"} mt={4}>
                    {props.values.department.map((dept, index) => (
                      <VStack key={index} position="relative">
                        <Input
                          label="Add Department"
                          name={`department.${index}`}
                          type="text"
                          placeholder="Department"
                        />
                        {index > 0 && (
                          <IconButton
                            aria-label="delete department"
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
                      text="Add another department"
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

              <FieldArray
                name="users"
                render={(arrayHelpers) => (
                  <VStack align="stretch" w={"100%"} mt={4}>
                    {props.values.users.map((user, index) => (
                      <VStack key={index} position="relative">
                        <Input
                          label="Add a user"
                          name={`users.${index}`}
                          type="text"
                          placeholder="Users"
                        />
                        {index > 0 && (
                          <IconButton
                            aria-label="delete user"
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
                      text="Add another user"
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

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button text="Create Folder" px={4} py={4} type="submit" />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default CreateFolder;
