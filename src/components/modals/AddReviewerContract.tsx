import { Text, VStack, useToast, Spinner, Stack } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form } from "formik";
import { createReviwerSchema } from "@/schemas/admin.schema";
import { useAppSelector } from "@/redux/store";
import { useAddReviewerMutation } from "@/redux/services/contract.service";
import { useGetUsersQuery } from "@/redux/services/onboard.service";
import Select2 from "../ui/Select2";
import { useState } from "react";

const AddReviewerContract = ({ setIsOpen, id }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [roleName, setRoleName] = useState("");
  const [department, setDepartment] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [addReviewer, { isLoading }] = useAddReviewerMutation();
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

  const handleSubmit = async (values: any) => {
    await addReviewer({
      token: token,
      id: id,
      body: {
        UserIds: [values.UserId],
      },
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Collaborator added successfully",
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
        Add New Collaborator
      </Text>
      <Formik
        initialValues={{
          UserId: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={createReviwerSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Stack spacing={1} direction="row" w={"100%"}>
                <Select2
                  label="Select Collaborator"
                  name="UserId"
                  options={allUsers}
                  placeholder="Select Collaborator"
                />
                {usersLoading && <Spinner color="primary" size="sm" mt={8} />}
              </Stack>

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button
                  text="Add New Collaborator"
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

export default AddReviewerContract;
