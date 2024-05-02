import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { setCredentials, setToken } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthLeft from "@/components/auth/AuthLeft";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/authConfig";
import {
  useGetUserByEmailQuery,
  useGetUserByIdQuery,
} from "@/redux/services/onboard.service";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userInfo, token } = useAppSelector((state: any) => state.app.auth);
  const [email, setEmail] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const { data, isLoading, refetch } = useGetUserByEmailQuery({
    token: token || null,
    email: email || null,
  });

  const userDataFromEmail = data;

  const {
    data: userData,
    isLoading: userIsLoading,
    refetch: userRefetch,
    error,
  } = useGetUserByIdQuery({
    token: token || null,
    id: userId || null,
  });

  const user = userData;
  const userError = error as any;

  useEffect(() => {
    if (user?.status === "success" && user?.data) {
      dispatch(setCredentials(user?.data));
    } else if (userError?.status === 403) {
      dispatch(setCredentials(null));
      dispatch(setToken(null));
      router.push("/auth/not-found");
    }
  }, [user, dispatch, router, userError]);

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
                isLoading={userIsLoading && token}
                isDisabled={userIsLoading && token}
              />
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
