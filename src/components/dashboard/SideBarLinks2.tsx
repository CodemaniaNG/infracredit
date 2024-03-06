import { Box, VStack, Text, Flex, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "@/redux/store";

const SideBarLinks2 = (props: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { path, title, icon, onClick, activIcon, isVisble } = props || {};

  const currentPath = router.pathname;
  return (
    <VStack align="stretch" py="1" display={isVisble ? "flex" : "none"}>
      <Link href={path} onClick={onClick} legacyBehavior>
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
          bg={currentPath === path ? "bg.200" : "transparent"}
          cursor={"pointer"}
          borderLeftWidth={currentPath === path ? "4px" : "0px"}
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
            {currentPath === path && activIcon && (
              <Image src={activIcon} alt="logo" />
            )}

            {currentPath !== path && icon && <Image src={icon} alt="logo" />}

            <Text
              fontSize="16px"
              // fontWeight="400"
              fontWeight={currentPath === path ? "600" : "500"}
              color={currentPath === path ? "primary" : "subText.200"}
            >
              {title}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </VStack>
  );
};

export default SideBarLinks2;
