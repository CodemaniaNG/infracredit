import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  ceoReport: any;
  managementReport: any;
};

const initialState: AuthState = {
  ceoReport: null,
  managementReport: null,
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setCeoReport: (state, action) => {
      state.ceoReport = action.payload;
    },
    setManagementReport: (state, action) => {
      state.managementReport = action.payload;
    },
    updateCeoReport: (state, action) => {
      state.ceoReport = { ...state.ceoReport, ...action.payload };
    },
    updateManagementReport: (state, action) => {
      state.managementReport = { ...state.managementReport, ...action.payload };
    },
    // updateUser: (state, { payload }: PayloadAction<any>) => {
    //   state.userInfo = { ...state.userInfo, ...payload };
    // },
  },
});

export const {
  setCeoReport,
  setManagementReport,
  updateCeoReport,
  updateManagementReport,
} = templateSlice.actions;

export default templateSlice.reducer;
