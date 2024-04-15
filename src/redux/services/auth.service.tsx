import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    // prepareHeaders: (headers, { getState }: any) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   // set cors headers
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    //   headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    //   return headers;
    // },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUserByEmail: builder.query({
      query: ({ token, email }) => ({
        url: `api/users/${email}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }),
    }),
  }),
});

export const { useGetUserByEmailQuery } = authApi;
