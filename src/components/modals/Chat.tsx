import {
  Box,
  Text,
  Avatar,
  VStack,
  Input,
  Flex,
  AvatarGroup,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Image,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store";
import {
  useGetChatsQuery,
  useCreateChatMutation,
} from "@/redux/services/contract.service";
import moment from "moment";
import { useState, useEffect, useRef } from "react";
import Empty2 from "../admin/Empty2";

const Chat = ({ setIsOpen, contractData }: any) => {
  const toast = useToast();
  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const currentUserId = userInfo?.id;

  const [message, setMessage] = useState("");

  const [createChat] = useCreateChatMutation();

  const { data, isLoading } = useGetChatsQuery(
    {
      token: token,
      id: contractData?.id,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const chatData = data?.data;

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  const handleSendMessage = async () => {
    setMessage("");
    await createChat({
      token: token,
      id: contractData?.id,
      body: {
        Message: message,
      },
    })
      .unwrap()
      .then(() => {
        console.log("Chat sent");
      })
      .catch((err) => {
        toast({
          title: "An error occurred",
          description: err.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Box w="100%" p={4} bg="white">
      <VStack spacing={0} align="stretch" h="full">
        <Box
          p={4}
          borderRadius="md"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="#287750"
            fontSize={{
              base: "20px",
              md: "28px",
            }}
            fontWeight="600"
            mb={4}
          >
            Legal team Chat
          </Text>

          {/* <AvatarGroup size="md" max={4}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup> */}
        </Box>

        <Box
          bg="#F4F7FF"
          p={4}
          borderTopEndRadius={8}
          borderTopStartRadius={8}
          flexDirection="column"
          justifyContent="flex-end"
          h="450px"
          maxH="450px"
          overflowY="auto"
        >
          {isLoading ? (
            <Flex justify="center" align="center" h="200">
              <Spinner color="primary" size="lg" />
            </Flex>
          ) : (
            <>
              {chatData.map((msg: any, index: any) => (
                <Flex
                  key={index}
                  justify={
                    msg?.user?.id === currentUserId ? "flex-end" : "flex-start"
                  }
                >
                  {msg?.user?.id !== currentUserId && (
                    <Avatar
                      size="sm"
                      name={msg?.user?.name}
                      bg="secondary"
                      color="white"
                      mr={2}
                    />
                  )}

                  <Box
                    bg={msg?.user?.id === currentUserId ? "#1D6FA0" : "#EAEFFF"}
                    color={
                      msg?.user?.id === currentUserId ? "white" : "#545764"
                    }
                    px={4}
                    py={2}
                    borderRadius="md"
                    my={2}
                    maxWidth="70%"
                  >
                    <Text fontSize="16" fontWeight="500">
                      {msg.message}
                    </Text>

                    <VStack alignItems="flex-start" spacing="0">
                      {msg?.user?.id !== currentUserId && (
                        <Text
                          fontSize="12"
                          color="#545764"
                          fontWeight="600"
                          textTransform="capitalize"
                        >
                          {msg?.user?.name}
                        </Text>
                      )}

                      <Text
                        fontSize="12"
                        color={
                          msg?.user?.id === currentUserId ? "white" : "#545764"
                        }
                      >
                        {moment(msg?.createdAt).format("LT, MMM D, YYYY")}
                      </Text>
                    </VStack>
                  </Box>
                </Flex>
              ))}
              <div ref={messagesEndRef} />

              {chatData.length === 0 && (
                <Flex justify="center" align="center">
                  <Empty2
                    title="No messages yet"
                    desc="Be the first to send a message"
                  />
                </Flex>
              )}
            </>
          )}
        </Box>

        <Box
          bg="#F4F7FF"
          p={4}
          borderBottomEndRadius={8}
          borderBottomStartRadius={8}
          w="full"
        >
          <InputGroup size="lg" bg="white">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            >
              <Avatar
                size="sm"
                name={userInfo?.name}
                bg="secondary"
                color="white"
              />
            </InputLeftElement>
            <Input
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Send message"
                icon={<Image src="/images/send.svg" alt="send" />}
                variant="ghost"
                size="sm"
                onClick={handleSendMessage}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default Chat;
