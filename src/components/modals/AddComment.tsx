import { Text, VStack, useToast } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form } from "formik";
import { creatCommentSchema } from "@/schemas/admin.schema";
import { useAppSelector } from "@/redux/store";
import { useCreateCommentMutation } from "@/redux/services/reports.service";
import TextArea from "../ui/TextArea";

const AddComment = ({ setIsOpen, id }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createComment, { isLoading }] = useCreateCommentMutation();

  const handleSubmit = async (values: any) => {
    await createComment({
      token: token,
      body: { Content: values.Content, reportId: id },
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Comment added successfully",
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
        Add New Comment
      </Text>
      <Formik
        initialValues={{
          Content: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={creatCommentSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <TextArea
                label="Comment"
                name="Content"
                placeholder="Enter comment here..."
              />

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button
                  text="Add New Comment"
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

export default AddComment;
