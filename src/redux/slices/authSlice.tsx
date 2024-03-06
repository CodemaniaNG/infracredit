import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  userInfo: any;
  signUpData: any;
};

const initialState: AuthState = {
  userInfo: null,
  signUpData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    setSignUpData: (state, action) => {
      state.signUpData = action.payload;
    },
    logOut: (state) => {
      state.userInfo = null;
      state.signUpData = null;
    },
  },
});

export const { setCredentials, setSignUpData, logOut } = authSlice.actions;

export default authSlice.reducer;
