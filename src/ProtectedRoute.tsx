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
    const { token } = useAppSelector((state) => state.app.auth);

    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      if (!token) {
        Router.push(`/auth/login`);
      }
      if (!token) {
        Router.push(`/auth/login`);
      } else if (token) {
        // check if the token is expired
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          toast({
            title: "Session expired ",
            position: "top-right",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          dispatch(logOut());
        }
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default ProtectedRoute;
