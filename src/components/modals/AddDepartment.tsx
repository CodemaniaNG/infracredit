import { Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";
import { createDeptSchema } from "@/schemas/admin.schema";
import { useAppSelector } from "@/redux/store";
import { useCreateDepartmentMutation } from "@/redux/services/department.service";

const AddDepartment = ({ setIsOpen }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createDepartment, { isLoading: createDepartmentLoading }] =
    useCreateDepartmentMutation();

  const handleSubmit = async (values: any) => {
    await createDepartment({ token, body: values })
      .unwrap()
      .then(() => {
        toast({
          title: "Department created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        toast({
          title: "Something went wrong",
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
        Add New Department
      </Text>
      <Formik
        initialValues={{
          Name: "",
          Description: "",
          //   departmentDescription: "",
          //   levels: ["level 1"],
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={createDeptSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Department Name"
                name="Name"
                type="text"
                placeholder="Department Name"
              />

              <Input
                label="Department Description"
                name="Description"
                type="text"
                placeholder="Department Description"
              />

              {/* <Input
                label="Department Description"
                name="departmentDescription"
                type="text"
                placeholder="Department Description"
              /> */}

              {/* <FieldArray
                name="levels"
                render={(arrayHelpers) => (
                  <VStack align="stretch" w={"100%"}>
                    {props.values.levels.map((level, index) => (
                      <VStack key={index} position="relative">
                        <Input
                          label="Level"
                          name={`levels.${index}`}
                          type="text"
                          placeholder="Level"
                        />
                        {index > 0 && (
                          <IconButton
                            aria-label="delete level"
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
                      text="Add another level"
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

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button
                  text="Add New Department"
                  px={4}
                  py={4}
                  type="submit"
                  isLoading={createDepartmentLoading}
                  isDisabled={createDepartmentLoading}
                />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default AddDepartment;
