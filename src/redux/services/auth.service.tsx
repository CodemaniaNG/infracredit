import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUserByEmail: builder.query({
      query: ({ token, email }) => ({
        url: `api/users/remote/${email}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getUserById: builder.query({
      query: ({ token, id }) => ({
        url: `api/users/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getUserRoles: builder.query({
      query: ({ token }) => ({
        url: `api/users/roles`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useGetUserByIdQuery,
  useGetUserRolesQuery,
} = authApi;
