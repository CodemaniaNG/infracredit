import {
  Text,
  VStack,
  IconButton,
  HStack,
  Image,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { useState } from "react";

const Comments = () => {
  const [showComments, setShowComments] = useState(false);
  return (
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
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <VStack
                key={i}
                align="flex-start"
                w="100%"
                borderBottomWidth={1}
                borderColor="border.200"
                pb={3}
              >
                <HStack justifyContent="space-between" w="100%" align="center">
                  <HStack>
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
                      fontWeight={"600"}
                      color={"maintText.100"}
                    >
                      Kelvin Boluwatife
                    </Text>
                  </HStack>

                  <Text
                    fontSize={"10px"}
                    fontFamily={"body"}
                    fontWeight={"600"}
                    color={"greens.100"}
                  >
                    Today
                  </Text>
                </HStack>

                <Text
                  fontSize={"10px"}
                  fontFamily={"body"}
                  fontWeight={"500"}
                  color={"subText.300"}
                >
                  This is a commment, This is a commment, This is a commment
                </Text>
              </VStack>
            ))}
        </>
      )}
    </VStack>
  );
};

export default Comments;
