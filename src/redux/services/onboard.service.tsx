import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const onboardApi = createApi({
  reducerPath: "onboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Onboard"],
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

    getUsers: builder.query({
      query: ({ token, data }) => ({
        url: `api/users?RoleName=${data.RoleName}&Department=${data.Department}&PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Onboard"],
    }),

    createUser: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/users/create`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Onboard"],
    }),

    onboardUser: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/users/onboard`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Onboard"],
    }),

    removeUser: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/users/remove`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    activateUser: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/users/activate`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getUserRoles: builder.query({
      query: ({ token }) => ({
        url: `api/roles`,
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
  useGetUsersQuery,
  useCreateUserMutation,
  useOnboardUserMutation,
  useRemoveUserMutation,
  useActivateUserMutation,
  useGetUserRolesQuery,
} = onboardApi;
