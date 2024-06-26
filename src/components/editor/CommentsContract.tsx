import {
  Text,
  VStack,
  IconButton,
  HStack,
  Image,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { memo, useState } from "react";
import { formatDate2 } from "@/utils/functions";
import Modal from "../ui/Modal";
import AddCommentContract from "../modals/AddCommentContract";

const CommentsContract = ({ id, comments }: any) => {
  const [showComments, setShowComments] = useState(true);
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
      >
        <HStack justify="space-between" align="center" w="100%">
          <Text
            fontSize={"14px"}
            fontWeight="500"
            color="greens.100"
            fontFamily={"body"}
          >
            Comments
          </Text>

          <IconButton
            icon={<Image src="/images/arrow-down.svg" alt="export" />}
            variant={"ghost"}
            bg="transparent"
            aria-label="export"
            p={0}
            m={0}
            onClick={() => setShowComments(!showComments)}
          />
        </HStack>
        {showComments && (
          <>
            {comments?.length > 0 && (
              <>
                {comments?.map((comment: any) => (
                  <VStack
                    key={comment?.id}
                    align="flex-start"
                    w="100%"
                    borderBottomWidth={1}
                    borderColor="border.200"
                    pb={3}
                  >
                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      align="center"
                    >
                      <HStack>
                        <Avatar
                          size="sm"
                          name={comment?.name}
                          bg="primary"
                          color="white"
                        >
                          <AvatarBadge boxSize="1.25em" bg="green.500" />
                        </Avatar>
                        <Text
                          fontSize={"12px"}
                          fontFamily={"body"}
                          fontWeight={"600"}
                          color={"maintText.100"}
                        >
                          {comment?.name}
                        </Text>
                      </HStack>

                      <Text
                        fontSize={"10px"}
                        fontFamily={"body"}
                        fontWeight={"600"}
                        color={"greens.100"}
                      >
                        {formatDate2(comment?.createdAt)}
                      </Text>
                    </HStack>

                    <Text
                      fontSize={"10px"}
                      fontFamily={"body"}
                      fontWeight={"500"}
                      color={"subText.300"}
                    >
                      {comment?.content}
                    </Text>
                  </VStack>
                ))}
              </>
            )}

            <HStack justify="space-between" align="center" w="100%">
              <Text
                fontSize={"14px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
              >
                Add New Comment
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

            {comments?.length === 0 && (
              <Text
                fontSize={"12px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.300"}
                textAlign="center"
              >
                No comments yet
              </Text>
            )}
          </>
        )}
      </VStack>

      <Modal
        isOpen={isOpen}
        size="5xl"
        onClose={handleModal}
        body={<AddCommentContract setIsOpen={setIsOpen} id={id} />}
      />
    </>
  );
};

export default memo(CommentsContract);
