import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Department"],
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: (token) => ({
        url: `api/departments`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Department"],
    }),

    getDepartmentById: builder.query({
      query: ({ token, id }) => ({
        url: `api/departments/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createDepartment: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/departments`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Department"],
    }),

    updateDepartment: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/departments/${body.id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Department"],
    }),

    getDepartmentLevels: builder.query({
      query: ({ token, id }) => ({
        url: `api/departments/${id}/levels`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getDepartmentLevelById: builder.query({
      query: ({ token, id }) => ({
        url: `api/departments/levels/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createDepartmentLevel: builder.mutation({
      query: ({ token, body, deptId }) => ({
        url: `api/departments/${deptId}/levels`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Department"],
    }),

    updateDepartmentLevel: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/departments/levels/${body.id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useGetDepartmentLevelsQuery,
  useGetDepartmentLevelByIdQuery,
  useCreateDepartmentLevelMutation,
  useUpdateDepartmentLevelMutation,
} = departmentApi;
