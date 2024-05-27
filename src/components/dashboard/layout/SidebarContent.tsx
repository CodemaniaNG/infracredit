import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  CloseButton,
  Flex,
  Text,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

import NavItem from "./NavItem";
import { useAppSelector, useAppDispatch } from "@/redux/store";

import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { logOut } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";

interface LinkItemProps {
  name: string;
  icon: string;
  path: string;
  iconActive: string;
  isVisble?: boolean;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  showSidebar?: boolean;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logOut());
    setIsOpen(false);
    router.push("/auth/login");
  };

  const LinkItems: Array<LinkItemProps> = [
    {
      name: "Dashboard",
      path: "/",
      icon: "/images/dashboard.svg",
      iconActive: "/images/dashboard-active.svg",
      isVisble:
        role === "User" ||
        role === "user-contracts" ||
        role === "Admin" ||
        role === "Manager" ||
        role === "Supervisor" ||
        role === "Viewer"
          ? true
          : false,
    },
    {
      name: "Documents",
      path: "/dashboard/documents",
      icon: "/images/documents.svg",
      iconActive: "/images/documents-active.svg",
      isVisble:
        role === "User" ||
        role === "user-contracts" ||
        role === "Admin" ||
        role === "Manager" ||
        role === "Supervisor" ||
        role === "Viewer"
          ? true
          : false,
    },
    {
      name: "Deleted",
      path: "/dashboard/deleted",
      icon: "/images/deleted.svg",
      iconActive: "/images/deleted-active.svg",
      isVisble:
        role === "User" ||
        role === "user-contracts" ||
        role === "Admin" ||
        role === "Manager" ||
        role === "Supervisor"
          ? true
          : false,
    },
    {
      name: "Tasks",
      path: "/dashboard/tasks",
      icon: "/images/tasks.svg",
      iconActive: "/images/tasks-active.svg",
      isVisble:
        role === "User" ||
        role === "Admin" ||
        role === "Manager" ||
        role === "Supervisor"
          ? true
          : false,
    },
    {
      name: "Contracts",
      path: "/dashboard/contracts",
      icon: "/images/contracts.svg",
      iconActive: "/images/contracts-active.svg",
      isVisble:
        role === "User" || role === "Admin" || role === "Manager"
          ? true
          : false,
    },
    {
      name: "Staffs",
      path: "/dashboard/admin",
      icon: "/images/admin.svg",
      iconActive: "/images/admin-active.svg",
      isVisble: role === "Admin" ? true : false,
    },
  ];

  return (
    <>
      <Box
        transition="3s ease"
        bg="white"
        borderWidth={1}
        borderColor="#CCCFDC"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        }}
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Image src="/images/logo.svg" alt="logo" />
          <CloseButton
            display={{ base: "flex", lg: "none" }}
            onClick={onClose}
          />
        </Flex>

        <Text
          fontSize="14px"
          fontWeight="500"
          fontFamily="body"
          color="subText.200"
          my="4"
          mx="4"
        >
          Menu
        </Text>

        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            iconActive={link.iconActive}
            isVisble={link.isVisble}
          >
            {link.name}
          </NavItem>
        ))}

        <Text
          fontSize="14px"
          fontWeight="500"
          fontFamily="body"
          color="subText.200"
          my="4"
          mx="4"
        >
          Other
        </Text>

        <NavItem
          icon="/images/logout.svg"
          iconActive="/images/logout.svg"
          isVisble={true}
          onClick={handleModal}
        >
          Logout
        </NavItem>
      </Box>

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
    </>
  );
};

export default SidebarContent;
