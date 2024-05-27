import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const documentsApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Documents"],
  endpoints: (builder) => ({
    getResources: builder.query({
      query: (token) => ({
        url: `api/documents`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Documents"],
    }),

    getResourcesById: builder.query({
      query: ({ token, id }) => ({
        url: `api/documents/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createResource: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/documents`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Documents"],
    }),

    getFolders: builder.query({
      query: (token) => ({
        url: `api/folders`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Documents"],
    }),

    getFolderById: builder.query({
      query: ({ token, id }) => ({
        url: `api/folders/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createFolder: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/folders`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Documents"],
    }),
  }),
});

export const {
  useGetResourcesQuery,
  useGetResourcesByIdQuery,
  useCreateResourceMutation,
  useGetFoldersQuery,
  useGetFolderByIdQuery,
  useCreateFolderMutation,
} = documentsApi;
