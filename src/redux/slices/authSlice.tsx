import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  userInfo: any;
  token: string;
  roles: any;
};

const initialState: AuthState = {
  userInfo: null,
  token: "",
  roles: [],
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
    logOut: (state) => {
      state.userInfo = null;
      state.token = "";
      state.roles = [];
      sessionStorage.clear();
    },
  },
});

export const { setCredentials, logOut, setToken, setRoles } = authSlice.actions;

export default authSlice.reducer;
