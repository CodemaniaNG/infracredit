import { Text, VStack, useToast, Stack, Spinner } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";
import { useGetUsersQuery } from "@/redux/services/onboard.service";
import { useAppSelector } from "@/redux/store";
import TextArea from "../ui/TextArea";
import { useCreateContractMutation } from "@/redux/services/contract.service";

const industries = [
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "agriculture", label: "Agriculture" },
  { value: "finance", label: "Finance" },
];

const documentsType = [
  { value: "NDA", label: "NDA" },
  { value: "MOU", label: "MOU" },
  { value: "Contract", label: "Contract" },
  { value: "Agreement", label: "Agreement" },
];

const CreateContract = ({ setIsOpen, body }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createContract, { isLoading }] = useCreateContractMutation();

  const [step, setStep] = useState(1);
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

  const allUsers = users?.data?.map((user: any) => ({
    value: user.id,
    label: user.name,
  }));

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData() as any;
    formData.append("Title", values.Title);
    formData.append("Type", values.Type);
    formData.append("ContractDate", values.ContractDate);
    formData.append(
      "ClientName",
      values.ClientFirstName + " " + values.ClientLastName,
    );
    formData.append("Industry", values.Industry);
    formData.append("ExtUserId", values.ExtUserId);
    formData.append("Description", values.Description);
    formData.append("Meta.Body", body);
    formData.append("Meta.CompanyAddress", values.Meta.CompanyAddress);
    formData.append("Meta.CompanyName", values.Meta.CompanyName);
    formData.append(
      "Meta.CompanyRegistration",
      values.Meta.CompanyRegistration,
    );
    formData.append("Meta.ContractMetaDate", values.Meta.ContractMetaDate);

    await createContract({
      token: token,
      body: formData,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Contract created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        if (error.data && error.data.errors) {
          const errorMessages = Object.values(error.data.errors)
            .flat()
            .join("\n");

          toast({
            title: errorMessages,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
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
        {step === 1 ? "Create New Contract" : "Submit Company’s Information."}
      </Text>
      <Formik
        initialValues={{
          Title: "",
          Type: "",
          ContractDate: "",
          ClientFirstName: "",
          ClientLastName: "",
          Industry: "",
          ExtUserId: "",
          Description: "",
          file: "",
          Meta: {
            ContractMetaDate: "",
            CompanyName: "",
            CompanyRegistration: "",
            CompanyAddress: "",
          },
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            {step === 1 && (
              <VStack spacing={4}>
                <Input
                  label="Contract Name"
                  name="Title"
                  type="text"
                  placeholder="Enter contract name"
                />

                <Select
                  label="Document Type"
                  name="Type"
                  options={documentsType}
                  placeholder="Select document type"
                />

                <Input
                  label="Date"
                  name="ContractDate"
                  type="date"
                  placeholder=""
                />

                <Input
                  label="Client First Name"
                  name="ClientFirstName"
                  type="text"
                  placeholder="Enter client first name"
                />

                <Input
                  label="Client Last Name"
                  name="ClientLastName"
                  type="text"
                  placeholder="Enter client last name"
                />

                <Select
                  label="Industry"
                  name="Industry"
                  options={industries}
                  placeholder="Select industry"
                />

                <Stack
                  spacing={1}
                  direction="row"
                  w={"100%"}
                  alignItems="center"
                >
                  <Select
                    label="Select External User"
                    name="ExtUserId"
                    options={allUsers}
                    placeholder="Select External User"
                  />
                  {usersLoading && <Spinner color="primary" size="sm" mt={8} />}
                </Stack>

                <TextArea
                  label="Description"
                  name="Description"
                  placeholder="Enter description"
                />

                <VStack align="stretch" w={"100%"} mt={4}>
                  <Button
                    text="Continue"
                    px={4}
                    py={4}
                    type="button"
                    isDisabled={
                      !props.values.Title ||
                      !props.values.Type ||
                      !props.values.ContractDate ||
                      !props.values.ClientFirstName ||
                      !props.values.ClientLastName ||
                      !props.values.Industry ||
                      !props.values.ExtUserId ||
                      !props.values.Description
                    }
                    onClick={handleNext}
                  />
                </VStack>
              </VStack>
            )}

            {step === 2 && (
              <VStack spacing={4}>
                <Input
                  label="Date"
                  name="Meta.ContractMetaDate"
                  type="date"
                  placeholder=""
                />

                <Input
                  label="Company’s Full Name"
                  name="Meta.CompanyName"
                  type="text"
                  placeholder="Company name"
                />

                <Input
                  label="Company’s Registration Number"
                  name="Meta.CompanyRegistration"
                  type="text"
                  placeholder="Company registration number"
                />

                <Input
                  label="Company’s Full Address"
                  name="Meta.CompanyAddress"
                  type="text"
                  placeholder="Company address"
                />

                <VStack align="stretch" w={"100%"} mt={4}>
                  {step === 2 && (
                    <>
                      <Button
                        text="Create Contract"
                        px={4}
                        py={4}
                        type="submit"
                        isDisabled={
                          !props.values.Meta.ContractMetaDate ||
                          !props.values.Meta.CompanyName ||
                          !props.values.Meta.CompanyRegistration ||
                          !props.values.Meta.CompanyAddress
                        }
                        isLoading={isLoading}
                      />

                      <Button
                        text="Go Back"
                        px={4}
                        py={4}
                        type="button"
                        onClick={handleBack}
                        bg="#F4F7FF"
                        color="maintText.200"
                        icon="/images/arrow-left.svg"
                        iconPosition="left"
                        isDisabled={isLoading}
                      />
                    </>
                  )}
                </VStack>
              </VStack>
            )}
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default CreateContract;
