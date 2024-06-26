import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  userInfo: any;
  token: string;
  roles: any;
  module: string;
};

const initialState: AuthState = {
  userInfo: null,
  token: "",
  roles: [],
  module: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    logOut: (state) => {
      state.userInfo = null;
      state.token = "";
      state.roles = [];
      sessionStorage.clear();
    },
  },
});

export const { setCredentials, logOut, setToken, setRoles, setModule } =
  authSlice.actions;

export default authSlice.reducer;
