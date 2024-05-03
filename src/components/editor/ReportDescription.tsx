import { formatDate2 } from "@/utils/functions";
import {
  Text,
  VStack,
  IconButton,
  HStack,
  Image,
  Avatar,
  AvatarBadge,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Modal from "../ui/Modal";
import AddReviewer from "../modals/AddReviewer";

import { useAppSelector } from "@/redux/store";
import { useGetReviewersQuery } from "@/redux/services/reports.service";

const ReportDescription = ({
  templateData,
  reportTitle,
  setReportTitle,
  handleUpdateReport,
  updateReportLoading,
}: any) => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: reviewers, isLoading: reviewersLoading } = useGetReviewersQuery(
    {
      token: token,
      reportId: templateData?.id,
    },
  );

  const allReviewers = reviewers?.data;

  const [showCollaborators, setShowCollaborators] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <VStack
        align="flex-start"
        bg="white"
        p={3}
        borderRadius="16px"
        borderWidth={1}
        borderColor="border.100"
        spacing={3}
        w="100%"
        mb={5}
      >
        <Text
          fontSize={"14px"}
          fontWeight="500"
          color="greens.100"
          fontFamily={"body"}
        >
          Report Description
        </Text>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="This is a description"
            borderWidth={1}
            borderColor="border.200"
            borderRadius={8}
            bg="white"
            fontFamily={"body"}
            fontWeight="500"
            fontSize={"13px"}
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
          />
          <InputRightElement>
            <Button
              h="100%"
              size="sm"
              variant={"outline"}
              bg="transparent"
              color="greens.100"
              fontFamily={"body"}
              fontWeight="500"
              borderWidth={0}
              borderLeftWidth={1}
              borderLeftColor="border.200"
              fontSize={"12px"}
              borderRadius={0}
              _hover={{
                bg: "transparent",
              }}
              isLoading={updateReportLoading}
              isDisabled={updateReportLoading}
              onClick={handleUpdateReport}
            >
              Save
            </Button>
          </InputRightElement>
        </InputGroup>

        <Text
          fontSize={"12px"}
          fontWeight="500"
          color="subText.600"
          fontFamily={"body"}
        >
          Created {formatDate2(templateData?.createdAt)}
        </Text>

        {/* <VStack align="flex-start" w="100%">
        <Text
          fontSize={"14px"}
          fontWeight="500"
          color="greens.100"
          fontFamily={"body"}
        >
          Reviewer
        </Text>

        <VStack align="flex-start">
          <Avatar
            size="sm"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>

          <Text
            fontSize={"12px"}
            fontFamily={"body"}
            fontWeight={"500"}
            color={"subText.600"}
          >
            Segun
          </Text>
        </VStack>
      </VStack> */}

        <VStack align="flex-start" w="100%">
          <HStack justify="space-between" align="center" w="100%">
            <Text
              fontSize={"14px"}
              fontWeight="500"
              color="greens.100"
              fontFamily={"body"}
            >
              Collaborators ({allReviewers?.length})
            </Text>

            <IconButton
              icon={<Image src="/images/arrow-down.svg" alt="export" />}
              variant={"ghost"}
              bg="transparent"
              aria-label="export"
              p={0}
              m={0}
              onClick={() => setShowCollaborators(!showCollaborators)}
            />
          </HStack>

          {showCollaborators && (
            <HStack flexWrap="wrap">
              {allReviewers?.map((reviewer: any, i: any) => (
                <VStack align="flex-start" key={i}>
                  <Avatar
                    size="sm"
                    name={reviewer?.user?.name}
                    bg="primary"
                    color="white"
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>

                  <Text
                    fontSize={"12px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    {reviewer?.user?.name}
                  </Text>
                </VStack>
              ))}
            </HStack>
          )}
        </VStack>

        <HStack justify="space-between" align="center" w="100%">
          <Text
            fontSize={"14px"}
            fontWeight="500"
            color="subText.300"
            fontFamily={"body"}
          >
            Add New Reviewer
          </Text>

          <IconButton
            icon={<Image src="/images/add.svg" alt="export" />}
            bg="#F0FFFF"
            aria-label="export"
            size={"sm"}
            borderRadius={"full"}
            onClick={handleModal}
          />
        </HStack>

        {/* <VStack align="flex-start" w="100%">
          <Text
            fontSize={"14px"}
            fontWeight="500"
            color="greens.100"
            fontFamily={"body"}
          >
            Assigned By
          </Text>

          <VStack align="flex-start">
            <Avatar
              size="sm"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            >
              <AvatarBadge boxSize="1.25em" bg="subText.700" />
            </Avatar>

            <Text
              fontSize={"12px"}
              fontFamily={"body"}
              fontWeight={"500"}
              color={"subText.600"}
            >
              Segun
            </Text>
          </VStack>
        </VStack> */}
      </VStack>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<AddReviewer setIsOpen={setIsOpen} id={templateData?.id} />}
      />
    </>
  );
};

export default ReportDescription;
