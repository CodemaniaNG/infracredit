import React from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useToast } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { setCredentials } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthLeft from "@/components/auth/AuthLeft";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/authConfig";
import { useGetUserByEmailQuery } from "@/redux/services/auth.service";

const roles = [
  { value: "user-reports", label: "User Report" },
  { value: "user-contracts", label: "User Contracts" },
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "supervisor", label: "Supervisor" },
  { value: "viewer", label: "Viewer" },
];

const LoginPage = () => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state: any) => state.app.auth);
  const [email, setEmail] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const { data, error, isLoading, refetch } = useGetUserByEmailQuery({
    token: accessToken,
    email: email,
  });

  useEffect(() => {
    if (accessToken && email) {
      refetch();
    }
  }, [accessToken, email, refetch]);

  const { instance } = useMsal();

  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  // }, [router, userInfo]);

  const handleLogin = () => {
    instance
      .loginPopup(loginRequest)
      .then((res) => {
        console.log(res.account.name, "name");
        console.log(res.account.username, "email");
        console.log(res.accessToken, "res login");
        setAccessToken(res.accessToken);
        setEmail(res.account.username);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Flex alignItems="stretch" h="100%">
      {/* Left Section */}

      <AuthLeft />

      {/* Right Section */}
      <Box
        flex="1"
        bg="white"
        p={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Box maxW="400px" mx="auto" w="100%">
          <VStack spacing={8} w="100%">
            <Image src="/images/logo.svg" alt="Login" />
            <VStack w="100%">
              <Text
                fontSize={{
                  base: "24px",
                  md: "28px",
                  lg: "32px",
                }}
                fontWeight="600"
                textAlign="center"
                color="maintText.200"
              >
                Sign In to InfraCredit
              </Text>
              <Button
                text="Sign In with Microsoft Azure"
                py={7}
                type="button"
                bg="secondary3"
                onClick={handleLogin}
                icon={"/images/azure.svg"}
                iconPosition="left"
                iconHeight="32px"
                iconWidth="32px"
                borderRadius={0}
              />
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
