import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  templateContent: any;
  type: string;
};

const initialState: AuthState = {
  templateContent: null,
  type: "",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateContent: (state, action) => {
      state.templateContent = action.payload;
    },
    updateTemplateContent: (state, action) => {
      state.templateContent = { ...state.templateContent, ...action.payload };
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setTemplateContent, updateTemplateContent, setType } =
  templateSlice.actions;

export default templateSlice.reducer;
