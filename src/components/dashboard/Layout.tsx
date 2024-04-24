import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  HStack,
  Image,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { useState } from "react";
import SideBarLinks2 from "./SideBarLinks2";
import { logOut } from "@/redux/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import ProtectedRoute from "@/ProtectedRoute";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const Layout = ({ children, title, showSidebar = true }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.roleId;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    setIsOpen(false);
    router.push("/auth/login");
  };

  const [links, setLinks] = useState([
    {
      path: "/",
      title: "Dashboard",
      icon: "/images/dashboard.svg",
      activIcon: "/images/dashboard-active.svg",
      // user-reports user-contracts admin manager supervisor viewer
      isVisble:
        role === "user-reports" ||
        role === "user-contracts" ||
        role === "538d1ca3-0148-443c-b663-9c555e0d48f5" ||
        role === "manager" ||
        role === "supervisor" ||
        role === "viewer"
          ? true
          : false,
    },
    {
      path: "/dashboard/documents",
      title: "Documents",
      icon: "/images/documents.svg",
      activIcon: "/images/documents-active.svg",
      // user-reports user-contracts admin manager supervisor viewer
      isVisble:
        role === "user-reports" ||
        role === "user-contracts" ||
        role === "adm538d1ca3-0148-443c-b663-9c555e0d48f5in" ||
        role === "manager" ||
        role === "supervisor" ||
        role === "viewer"
          ? true
          : false,
    },
    {
      path: "/dashboard/deleted",
      title: "Deleted",
      icon: "/images/deleted.svg",
      activIcon: "/images/deleted-active.svg",
      // user-reports user-contracts admin manager supervisor
      isVisble:
        role === "user-reports" ||
        role === "user-contracts" ||
        role === "538d1ca3-0148-443c-b663-9c555e0d48f5" ||
        role === "manager" ||
        role === "supervisor"
          ? true
          : false,
    },
    {
      path: "/dashboard/tasks",
      title: "Tasks",
      icon: "/images/tasks.svg",
      activIcon: "/images/tasks-active.svg",
      // user-reports, admin, manager, supervisor
      isVisble:
        role === "user-reports" ||
        role === "538d1ca3-0148-443c-b663-9c555e0d48f5" ||
        role === "manager" ||
        role === "supervisor"
          ? true
          : false,
    },
    {
      path: "/dashboard/contracts",
      title: "Contracts",
      icon: "/images/contracts.svg",
      activIcon: "/images/contracts-active.svg",
      // user-contracts, admin
      isVisble:
        role === "user-contracts" ||
        role === "538d1ca3-0148-443c-b663-9c555e0d48f5" ||
        role === "manager"
          ? true
          : false,
    },
    {
      path: "/dashboard/admin",
      title: "Staffs",
      icon: "/images/admin.svg",
      activIcon: "/images/admin-active.svg",
      isVisble: role === "538d1ca3-0148-443c-b663-9c555e0d48f5" ? true : false,
    },
  ]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <Flex height="100vh" flexDirection="column">
        <HStack color="black" borderWidth={1} borderColor="border.100">
          <HStack
            borderRightWidth={1}
            borderRightColor="border.100"
            py="5"
            pl="4"
            pr={20}
            justifyContent="center"
            alignItems="center"
            w="16%"
          >
            <Image src="/images/logo.svg" alt="logo" w="fit-content" />
          </HStack>
          <HStack justifyContent="space-between" w="84%" px="4">
            <HStack>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Image
                    src="/images/search.svg"
                    alt="search"
                    w="24px"
                    h="24px"
                  />
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
                  // src="https://bit.ly/sage-adebayo"
                  borderRadius="full"
                  bg="primary"
                  color="white"
                  fontSize="16px"
                  fontWeight="bold"
                  onClick={handleModal2}
                  cursor="pointer"
                />
              </HStack>
            </HStack>
          </HStack>
        </HStack>
        <Flex flex="1" overflow="hidden">
          {showSidebar && (
            <Box
              w="205px"
              bg="white"
              p="4"
              borderWidth={1}
              borderTopWidth={0}
              borderColor="border.100"
              display={
                isSidebarOpen
                  ? { base: "block", md: "block" }
                  : { base: "none", md: "block" }
              }
              transition="width 0.3s ease"
              overflowY="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  width: "0px",
                  background: "transparent",
                },
              }}
            >
              <Text
                fontSize="14px"
                fontWeight="500"
                fontFamily="body"
                color="subText.200"
                mb="5"
              >
                Menu
              </Text>

              <VStack align="stretch">
                {links &&
                  links.map((link, index) => (
                    <SideBarLinks2
                      key={index}
                      path={link.path}
                      title={link.title}
                      icon={link.icon}
                      activIcon={link.activIcon}
                      isVisble={link.isVisble}
                    />
                  ))}

                {/* log out  */}

                <Box onClick={handleModal} mt="10">
                  <VStack align="stretch" py="1">
                    <Flex
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      pt={"0"}
                      px="4"
                      py="2"
                      _hover={{
                        bg: "bg.200",
                        cursor: "pointer",
                        borderLeftWidth: "4px",
                        borderLeftColor: "secondary",
                        transition: "all 0.3s ease",
                      }}
                      bg={"transparent"}
                      cursor={"pointer"}
                      borderLeftWidth={"0px"}
                      borderLeftColor={"secondary"}
                    >
                      <Flex
                        cursor="pointer"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="4"
                      >
                        <Image src="/images/logout.svg" alt="logo" />

                        <Text
                          fontSize="16px"
                          fontWeight="500"
                          color={"subText.200"}
                        >
                          Logout
                        </Text>
                      </Flex>
                    </Flex>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          )}
          <Box flex="1" p="4" overflowY="auto" bg="bg.100">
            {children}
          </Box>
        </Flex>
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={
          <VStack align="center" spacing={4}>
            <Image
              src="/images/fail.svg"
              alt="success"
              boxSize="100px"
              mt={10}
            />

            <VStack align="center">
              <Text
                fontSize="24px"
                fontWeight={700}
                color="primary2"
                fontFamily={"body"}
                textAlign="center"
              >
                Are you sure, you want <br /> to Logout
              </Text>
            </VStack>
          </VStack>
        }
        footer={
          <HStack mx="auto">
            <Button
              text="Cancel"
              px={10}
              bg="subText.100"
              color="bg.100"
              onClick={handleModal}
            />
            <Button text="Logout" px={10} onClick={handleLogout} />
          </HStack>
        }
      />

      <Modal
        isOpen={isOpen2}
        onClose={handleModal2}
        body={
          <VStack align="center" spacing={4} p={3} mt={5}>
            <VStack align="center">
              <Avatar
                size="xl"
                name={userInfo?.name}
                // src="https://bit.ly/sage-adebayo"
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
                {role === "538d1ca3-0148-443c-b663-9c555e0d48f5"
                  ? "Admin"
                  : role}
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
                  {userInfo?.level ? userInfo?.level : "N/A"}
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
                  {userInfo?.department ? userInfo?.department : "N/A"}
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

              {/* <VStack align="flex-start">
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  Date Started
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={600}
                  color="maintText.300"
                  fontFamily={"body"}
                  mt={-2}
                >
                  09 - 02 -2019
                </Text>
              </VStack> */}
            </VStack>
          </VStack>
        }
      />
    </>
  );
};

export default ProtectedRoute(Layout);
