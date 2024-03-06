import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { logOut } from "@/redux/slices/authSlice";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { useToast } from "@chakra-ui/react";

const ProtectedRoute = (WrappedComponent: any) => {
  return function Auth(props: any) {
    const Router = useRouter();
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { userInfo } = useAppSelector((state) => state.app.auth);
    const accessToken = userInfo?.data?.token;

    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      if (!userInfo) {
        Router.push(`/auth/login`);
      }
      // if (!accessToken) {
      //   // Router.push(`/auth/login`);
      // } else if (accessToken) {
      //   // check if the token is expired
      //   const decodedToken: any = jwtDecode(accessToken);
      //   const currentTime = Date.now() / 1000;
      //   if (decodedToken.exp < currentTime) {
      //     toast({
      //       title: "Session expired ",
      //       position: "top-right",
      //       status: "error",
      //       duration: 5000,
      //       isClosable: true,
      //     });
      //     dispatch(logOut());
      //   }
      // }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default ProtectedRoute;
