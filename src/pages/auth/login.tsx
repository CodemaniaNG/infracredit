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
import { useLoginMutation } from "@/redux/services/auth.service";
import { useToast } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { setCredentials } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import { loginSchema } from "@/schemas/auth.schema";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import Select from "@/components/ui/Select";
import AuthLeft from "@/components/auth/AuthLeft";
import { useMsal } from "@azure/msal-react";

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

  const { instance } = useMsal();

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (values: any) => {
    dispatch(setCredentials(values));
    router.push("/");
    // await login(values)
    //   .unwrap()
    //   .then((res) => {
    //     dispatch(setCredentials(res));
    //     toast({
    //       title: "Login successful",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //       position: "top",
    //     });
    //     router.push("/");
    //   })
    //   .catch((err) => {
    //     toast({
    //       title: `${err?.data?.message || "Something went wrong"}`,
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //       position: "top",
    //     });
    //   });
  };

  const loginMsal = () => {
    instance.loginPopup().then((res) => {
      console.log(res.accessToken, "res login");
    });
  };

  return (
    <Flex alignItems="stretch" h="100%">
      {/* Left Section */}

      <AuthLeft />

      {/* Right Section */}
      <Box flex="1" bg="white" p={8}>
        <Box maxW="400px" mx="auto" position={"relative"}>
          <VStack spacing={8}>
            <Image src="/images/logo.svg" alt="Login" />
            <Formik
              initialValues={{
                role: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                handleLogin(values);
              }}
              validationSchema={loginSchema}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Select
                      label="Role"
                      name="role"
                      options={roles}
                      placeholder="Select your role"
                    />
                    <Input
                      label="E-Mail"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                    />

                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Your password"
                    />

                    <VStack align="stretch" w={"100%"} mt={8} spacing={5}>
                      <Button
                        text="Login"
                        px={4}
                        py={6}
                        type="submit"
                        // isLoading={isLoading}
                        // isDisabled={isLoading}
                        // onClick={loginMsal}
                      />
                    </VStack>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
