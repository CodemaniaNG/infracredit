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

const ReportDescription = () => {
  const [showCollaborators, setShowCollaborators] = useState(false);
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
        Created January 12, 2023
      </Text>

      <VStack align="flex-start" w="100%">
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
      </VStack>

      <VStack align="flex-start" w="100%">
        <HStack justify="space-between" align="center" w="100%">
          <Text
            fontSize={"14px"}
            fontWeight="500"
            color="greens.100"
            fontFamily={"body"}
          >
            Collaborators (5)
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
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <VStack align="flex-start" key={i}>
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
        />
      </HStack>

      <VStack align="flex-start" w="100%">
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
      </VStack>
    </VStack>
  );
};

export default ReportDescription;
