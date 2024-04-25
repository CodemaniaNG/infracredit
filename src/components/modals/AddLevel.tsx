import { Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";
import { createDeptLevelSchema } from "@/schemas/admin.schema";
import { useAppSelector } from "@/redux/store";
import { useCreateDepartmentLevelMutation } from "@/redux/services/department.service";

const AddLevel = ({ setIsOpen, deptId, name }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createDepartmentLevel, { isLoading }] =
    useCreateDepartmentLevelMutation();

  const handleSubmit = async (values: any) => {
    await createDepartmentLevel({ token, body: values, deptId })
      .unwrap()
      .then(() => {
        toast({
          title: "Level created successfully",
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
        Add New Level
      </Text>

      <VStack w={"100%"} align="flex-start">
        <Text
          color={"subText.200"}
          fontSize={"14px"}
          fontWeight={"500"}
          fontFamily={"body"}
        >
          Department Name
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
            {name}
          </Text>
        </VStack>
      </VStack>

      <Formik
        initialValues={{
          Name: "",
          //   levels: ["level 1"],
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={createDeptLevelSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Level Name"
                name="Name"
                type="text"
                placeholder="Level Name"
              />
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
                  text="Add Level"
                  px={4}
                  py={4}
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default AddLevel;
