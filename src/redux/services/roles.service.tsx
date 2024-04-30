import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const rolesApi = createApi({
  reducerPath: "rolesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Roles"],
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: (token) => ({
        url: `api/roles`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Roles"],
    }),

    getRoleById: builder.query({
      query: ({ token, id }) => ({
        url: `api/roles/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createRole: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/roles`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Roles"],
    }),

    updateRole: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/roles/${body.id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Roles"],
    }),
  }),
});

export const {
  useGetRolesQuery,
  useGetRoleByIdQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
} = rolesApi;
