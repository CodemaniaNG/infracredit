import {
  Text,
  HStack,
  VStack,
  Avatar,
  AvatarBadge,
  useToast,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { useAppSelector } from "@/redux/store";
import { useUpdateReportMutation } from "@/redux/services/reports.service";
import { formatDate2 } from "@/utils/functions";

const SubmitReport = ({ setIsOpen, templateData }: any) => {
  const toast = useToast();
  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const [updateReport, { isLoading: updateReportLoading }] =
    useUpdateReportMutation();

  const handleUpdateReport = async () => {
    const data = [
      {
        op: "replace",
        path: "Status",
        value: role === "User" ? 2 : role === "Supervisor" ? 3 : null,
      },
    ];
    await updateReport({
      token,
      body: data,
      id: templateData?.id,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Report submited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
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
        Submit Report
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
              textTransform="uppercase"
            >
              {userInfo?.role.name}
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <HStack w={"100%"} justify="space-between">
        <Button
          text="Cancel"
          px={4}
          py={4}
          type="submit"
          variant="outline"
          bg="transparent"
          color="#FF3B30"
          border="#FF9D98"
          onClick={() => setIsOpen(false)}
        />

        <Button
          text="Submit"
          px={4}
          py={4}
          type="submit"
          isLoading={updateReportLoading}
          isDisabled={updateReportLoading}
          onClick={handleUpdateReport}
        />
      </HStack>
    </VStack>
  );
};

export default SubmitReport;
