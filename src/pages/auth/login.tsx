import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { setCredentials, setToken, setRoles } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import AuthLeft from "@/components/auth/AuthLeft";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/authConfig";
import {
  useGetUserByEmailQuery,
  useGetUserByIdQuery,
  useGetUserRolesQuery,
} from "@/redux/services/auth.service";

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
  const dispatch = useAppDispatch();
  const { userInfo, token, roles } = useAppSelector(
    (state: any) => state.app.auth
  );
  const [email, setEmail] = useState("dummyemail.d@codemania.com.ng");
  const [userId, setUserId] = useState("12345");

  useEffect(() => {
    if (userInfo && roles?.length > 0) {
      router.push("/");
    }
  }, [router, userInfo, roles]);

  const { data, isLoading, refetch } = useGetUserByEmailQuery({
    token: token,
    email: email,
  });

  const userDataFromEmail = data;

  const {
    data: userData,
    isLoading: userIsLoading,
    refetch: userRefetch,
    error,
  } = useGetUserByIdQuery({
    token: token,
    id: userId,
  });

  const user = userData;

  const { data: rolesData } = useGetUserRolesQuery({ token: token });
  const allRoles = rolesData?.data;

  useEffect(() => {
    if (allRoles) {
      dispatch(setRoles(allRoles));
    }
  }, [allRoles, dispatch]);

  useEffect(() => {
    if (user?.status === "success" && user?.data) {
      dispatch(setCredentials(user?.data));
    }
  }, [user, dispatch, router]);

  useEffect(() => {
    if (
      userDataFromEmail?.status === "success" &&
      userDataFromEmail?.data?.id
    ) {
      setUserId(userDataFromEmail?.data?.id);
      userRefetch();
    }
  }, [userDataFromEmail, userId, userRefetch]);

  useEffect(() => {
    if (email) {
      refetch();
    }
  }, [email, refetch]);

  // useEffect(() => {
  //   if (token && error) {
  //     alert("An error occurred. Please try again later.");
  //   }
  // }, [error, token]);

  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup(loginRequest)
      .then((res) => {
        dispatch(setToken(res.accessToken));
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
                // isLoading={isLoading || userIsLoading}
                // isDisabled={isLoading || userIsLoading}
              />
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
