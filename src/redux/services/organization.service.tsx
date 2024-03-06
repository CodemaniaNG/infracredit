import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const organizationApi = createApi({
  reducerPath: "organizationApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Organization"],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: ({ token, data }) => ({
        url: `organization/employees`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      providesTags: ["Organization"],
    }),

    deleteEmployee: builder.mutation({
      query: ({ token, data }) => ({
        url: `organization/employees-delete`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Organization"],
    }),

    updateEmployee: builder.mutation({
      query: ({ token, data }) => ({
        url: `organization/employees-update`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Organization"],
    }),

    uploadEmployee: builder.mutation({
      query: ({ token, data }) => ({
        url: `organization/employee-upload`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["Organization"],
    }),

    lookUpCac: builder.mutation({
      query: ({ data }) => ({
        url: `misc/lookup-cac`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Organization"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useUploadEmployeeMutation,
  useLookUpCacMutation,
} = organizationApi;
