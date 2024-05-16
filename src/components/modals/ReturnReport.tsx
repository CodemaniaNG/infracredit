import {
  Text,
  HStack,
  VStack,
  Avatar,
  AvatarBadge,
  useToast,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import { useAppSelector } from "@/redux/store";
import { useRejectReportMutation } from "@/redux/services/reports.service";
import { formatDate2 } from "@/utils/functions";
import { useRouter } from "next/router";
import { rejectReportSchema } from "@/schemas/admin.schema";

const ReturnReport = ({ setIsOpen, templateData }: any) => {
  const router = useRouter();
  const toast = useToast();
  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const [rejectReport, { isLoading: rejectReportLoading }] =
    useRejectReportMutation();

  const handleUpdateReport = async (values: any) => {
    await rejectReport({
      token,
      body: {
        Comment: values.Comment,
        Status: 1,
      },
      id: templateData?.id,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Report returned successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsOpen(false);
        router.back();
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
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
            {templateData?.title} | {formatDate2(templateData?.createdAt)}
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
            name={templateData?.creator?.name}
            bg="primary"
            color="white"
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
              {templateData?.creator?.name}
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

      {/* <VStack align="flex-start">
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
      </VStack> */}

      <Formik
        initialValues={{
          Comment: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
        validationSchema={rejectReportSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Comment"
                name="Comment"
                type="text"
                placeholder="Enter comment here"
              />

              <VStack align="stretch" w={"100%"} mt={4}>
                <HStack w={"100%"} justify="space-between">
                  <Button
                    text="Cancel"
                    px={4}
                    py={4}
                    type="button"
                    variant="outline"
                    bg="transparent"
                    color="#FF3B30"
                    border="#FF9D98"
                    onClick={() => setIsOpen(false)}
                    isDisabled={rejectReportLoading}
                  />

                  <Button
                    text="Return"
                    px={4}
                    py={4}
                    type="submit"
                    bg="#FF3B30"
                    onClick={handleUpdateReport}
                    isLoading={rejectReportLoading}
                    isDisabled={rejectReportLoading}
                  />
                </HStack>
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default ReturnReport;
