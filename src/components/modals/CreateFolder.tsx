import {
  Text,
  VStack,
  IconButton,
  useToast,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";
import { useCreateFolderMutation } from "@/redux/services/document.service";
import { useGetUsersQuery } from "@/redux/services/onboard.service";
import { useAppSelector } from "@/redux/store";
import TextArea from "../ui/TextArea";
import { useState, useMemo } from "react";
import Select from "../ui/Select2";
import { createFolderSchema } from "@/schemas/admin.schema";

const CreateFolder = ({ setIsOpen }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [roleName, setRoleName] = useState("");
  const [department, setDepartment] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data: users, isLoading: usersLoading } = useGetUsersQuery({
    token: token,
    data: {
      RoleName: roleName || "",
      Department: department || "",
      PageNumber: pageNumber,
      PageSize: pageSize,
    },
  });

  const allUsers = useMemo(() => {
    return users?.data.map((user: any) => ({
      value: user.id,
      label: user.name,
    }));
  }, [users]);

  const [createFolder, { isLoading: createFolderLoading }] =
    useCreateFolderMutation();

  const handleCreateFolder = async (values: any) => {
    await createFolder({
      token,
      body: values,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Folder created successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

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
          Name: "",
          Description: "",
          UserIds: [""],
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleCreateFolder(values);
        }}
        validationSchema={createFolderSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Folder Name"
                name="Name"
                type="text"
                placeholder="Folder Name"
              />

              <TextArea
                label="Description"
                name="Description"
                placeholder="Description"
              />

              {/* <FieldArray
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
              /> */}

              <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                <FieldArray
                  name="UserIds"
                  render={(arrayHelpers) => (
                    <VStack align="stretch" w={"100%"} mt={4}>
                      {props.values.UserIds.map((id, index) => (
                        <VStack key={index} position="relative">
                          <Select
                            label="Select User(s)"
                            name={`UserIds.${index}`}
                            options={allUsers}
                            placeholder="Select User"
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
                {usersLoading && <Spinner size="sm" color="green.500" mt={5} />}
              </Stack>

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button
                  text="Create Folder"
                  px={4}
                  py={4}
                  type="submit"
                  isLoading={createFolderLoading}
                  isDisabled={createFolderLoading}
                />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default CreateFolder;
