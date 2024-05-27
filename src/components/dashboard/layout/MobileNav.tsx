import type { FlexProps } from "@chakra-ui/react";
import {
  IconButton,
  Avatar,
  AvatarBadge,
  Flex,
  HStack,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useAppSelector } from "@/redux/store";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  showSidebar?: boolean;
}

const MobileNav = ({ onOpen, showSidebar, ...rest }: MobileProps) => {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex
        ml={{ base: 0, lg: showSidebar ? 60 : 0 }}
        px={{ base: 4, lg: 4 }}
        borderBottomWidth={1}
        borderColor="#CCCFDC"
        height="16"
        alignItems="center"
        bg="white"
        justifyContent={{ base: "space-between", md: "space-between" }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
        mb={16}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <HStack display={{ base: "none", lg: "flex" }} w="40%" align="center">
          {!showSidebar && (
            <Flex h="20" mx="8" justifyContent="space-between">
              <Image src="/images/logo.svg" alt="logo" />
            </Flex>
          )}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image src="/images/search.svg" alt="search" w="24px" h="24px" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search"
              borderRadius="100px"
              borderColor="border.100"
              _focus={{
                borderColor: "primary",
              }}
            />
          </InputGroup>
        </HStack>

        <HStack spacing={{ base: "0", md: "6" }}>
          <HStack justifyContent="flex-end" spacing={3}>
            <IconButton
              aria-label="Search database"
              icon={
                <Image src="/images/notification.svg" alt="notifications" />
              }
              variant="solid"
              bg="bg.100"
            />

            <HStack>
              <VStack alignItems="flex-start">
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  color="maintText.100"
                  fontFamily={"body"}
                  textTransform="capitalize"
                >
                  {userInfo?.name}
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="subText.300"
                  fontFamily={"body"}
                  mt="-2"
                  textTransform="capitalize"
                >
                  {role === "538d1ca3-0148-443c-b663-9c555e0d48f5"
                    ? "Admin"
                    : role}
                </Text>
              </VStack>
              <Avatar
                size="md"
                name={userInfo?.name}
                borderRadius="full"
                bg="primary"
                color="white"
                fontSize="16px"
                fontWeight="bold"
                onClick={handleModal}
                cursor="pointer"
              />
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={
          <VStack align="center" spacing={4} p={3} mt={5}>
            <VStack align="center">
              <Avatar
                size="xl"
                name={userInfo?.name}
                borderRadius="full"
                bg="primary"
                color="white"
                fontSize="16px"
                fontWeight="bold"
              >
                <AvatarBadge boxSize="35px" bg="#D1FFFF" cursor={"pointer"}>
                  <Image src="/images/add-circle.svg" alt="online" />
                </AvatarBadge>
              </Avatar>

              <Text
                fontSize="24px"
                fontWeight={700}
                color="maintText.100"
                fontFamily={"body"}
                textAlign="center"
                textTransform="capitalize"
              >
                {userInfo?.name}
              </Text>

              <Text
                fontSize="18px"
                fontWeight={600}
                color="greens.100"
                fontFamily={"body"}
                textAlign="center"
                textTransform="capitalize"
                mt={-2}
              >
                {role?.name}
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              p={4}
              w="100%"
              bg="bg.400"
              borderRadius="8px"
              spacing={4}
            >
              <VStack align="flex-start">
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  Level
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={600}
                  color="maintText.300"
                  fontFamily={"body"}
                  mt={-2}
                >
                  {userInfo?.level ? userInfo?.level?.name : "N/A"}
                </Text>
              </VStack>

              <VStack align="flex-start">
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  Department
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={600}
                  color="maintText.300"
                  fontFamily={"body"}
                  mt={-2}
                >
                  {userInfo?.department ? userInfo?.department?.name : "N/A"}
                </Text>
              </VStack>

              <VStack align="flex-start">
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  Email
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={600}
                  color="maintText.300"
                  fontFamily={"body"}
                  mt={-2}
                >
                  {userInfo?.email ? userInfo?.email : "N/A"}
                </Text>
              </VStack>

              <VStack align="flex-start">
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  Phone Number
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={600}
                  color="maintText.300"
                  fontFamily={"body"}
                  mt={-2}
                >
                  {userInfo?.phone ? userInfo?.phone : "N/A"}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        }
      />
    </>
  );
};

export default MobileNav;
