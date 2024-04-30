import {
  Text,
  VStack,
  HStack,
  IconButton,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";
import { FiTrash2 } from "react-icons/fi";

import { createReportSchema } from "@/schemas/admin.schema";
import { useAppSelector } from "@/redux/store";
import { useCreateReportMutation } from "@/redux/services/reports.service";
import { useGetUsersQuery } from "@/redux/services/onboard.service";
import { useGetTemplatesQuery } from "@/redux/services/templates.service";

const CreateReport = ({ setIsOpen }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);
  const [createReport, { isLoading }] = useCreateReportMutation();
  const { data: users, isLoading: usersLoading } = useGetUsersQuery({
    token: token,
  });
  const { data: templates, isLoading: templatesLoading } =
    useGetTemplatesQuery(token);

  const allUsers = users?.data?.map((user: any) => ({
    value: user.id,
    label: user.name,
  }));

  const allTemplates = templates?.data?.map((template: any) => ({
    value: template.id,
    label: template.title,
    body: template.body,
  }));

  const handleSubmit = async (values: any) => {
    await createReport({
      token: token,
      body: values,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Report created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
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
    <>
      <VStack align="flex-start" spacing={4} mt={10} mb={5}>
        <Text
          color={"greens.100"}
          fontSize={"24px"}
          fontWeight={"600"}
          fontFamily={"body"}
        >
          Create New Report
        </Text>
        <Formik
          initialValues={{
            TemplateId: "",
            ManagerId: "",
            SupervisorId: "",
            Title: "",
            Description: "",
            Month: "",
            Year: "",
            UserIds: [""],
            Body: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={createReportSchema}
        >
          {(props) => (
            <Form style={{ width: "100%" }}>
              <VStack>
                <Input
                  label="Title"
                  name="Title"
                  type="text"
                  placeholder="Report Title"
                />

                <Select
                  label="Select Template"
                  name="TemplateId"
                  options={allTemplates}
                  placeholder="Select template"
                  onChange={(e: any) => {
                    const selectedTemplate = allTemplates?.find(
                      (template: any) => template.value === e.target.value,
                    );
                    props.setFieldValue("Body", selectedTemplate?.body);
                  }}
                />

                <Input
                  label="Description"
                  name="Description"
                  type="text"
                  placeholder="Report Description"
                />

                <HStack w={"100%"} justify="space-between" align="flex-start">
                  <Input
                    label="Month"
                    name="Month"
                    type="number"
                    placeholder="Month"
                  />

                  <Input
                    label="Year"
                    name="Year"
                    type="number"
                    placeholder="Year"
                  />
                </HStack>

                <Select
                  label="Select Manager"
                  name="ManagerId"
                  options={allUsers}
                  placeholder="Select Manager"
                />

                <Select
                  label="Select Supervisor"
                  name="SupervisorId"
                  options={allUsers}
                  placeholder="Select Supervisor"
                />

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

                {/* <FieldArray
                  name="collaborator"
                  render={(arrayHelpers) => (
                    <VStack align="stretch" w={"100%"} mt={4}>
                      {props.values.collaborator.map((email, index) => (
                        <VStack key={index} position="relative">
                          <Input
                            label="Collaborator"
                            name={`collaborator.${index}`}
                            type="email"
                            placeholder="Collaborator Email"
                          />
                          {index > 0 && (
                            <IconButton
                              aria-label="delete collaborator"
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
                        text="Add another collaborator"
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
                  name="supervisor"
                  render={(arrayHelpers) => (
                    <VStack align="stretch" w={"100%"} mt={4}>
                      {props.values.supervisor.map((email, index) => (
                        <VStack key={index} position="relative">
                          <Input
                            label="Supervisor"
                            name={`supervisor.${index}`}
                            type="email"
                            placeholder="Supervisor Email"
                          />
                          {index > 0 && (
                            <IconButton
                              aria-label="delete supervisor"
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
                        text="Add another supervisor"
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
                  name="manager"
                  render={(arrayHelpers) => (
                    <VStack align="stretch" w={"100%"} mt={4}>
                      {props.values.manager.map((email, index) => (
                        <VStack key={index} position="relative">
                          <Input
                            label="Manager"
                            name={`manager.${index}`}
                            type="email"
                            placeholder="Manager Email"
                          />
                          {index > 0 && (
                            <IconButton
                              aria-label="delete manager"
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
                        text="Add another manager"
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
                    text="Create Report"
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
    </>
  );
};

export default CreateReport;
