import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerOrganisation: builder.mutation({
      query: (body) => ({
        url: `organization/register`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `auth/forgot-password`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: `auth/reset-password`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterOrganisationMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
