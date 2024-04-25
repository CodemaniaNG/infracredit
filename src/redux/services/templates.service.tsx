import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const templatesApi = createApi({
  reducerPath: "templatesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Templates"],
  endpoints: (builder) => ({
    getTemplates: builder.query({
      query: (token) => ({
        url: `api/templates`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Templates"],
    }),

    getTemplateById: builder.query({
      query: ({ token, id }) => ({
        url: `api/templates/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createTemplate: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/templates`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    updateTemplate: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/templates/${body.id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetTemplatesQuery,
  useGetTemplateByIdQuery,
  useCreateTemplateMutation,
  useUpdateTemplateMutation,
} = templatesApi;
