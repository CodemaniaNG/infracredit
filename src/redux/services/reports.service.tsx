import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Reports", "Comments"],
  endpoints: (builder) => ({
    getReports: builder.query({
      query: (token) => ({
        url: `api/reports`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Reports"],
    }),

    getReportById: builder.query({
      query: ({ token, id }) => ({
        url: `api/reports/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createReport: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Reports"],
    }),

    updateReport: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Reports"],
    }),

    deleteReport: builder.mutation({
      query: ({ token, id }) => ({
        url: `api/reports/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Reports"],
    }),

    addReviewer: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.reportId}/reviewers`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Reports"],
    }),

    removeReviewer: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.reportId}/reviewers`,
        method: "DELETE",
        body: { UserId: body.UserId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Reports"],
    }),

    //comments
    createComment: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.reportId}/comments`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Comments"],
    }),

    updateComment: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.reportId}/comments/${body.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Comments"],
    }),

    deleteComment: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/reports/${body.reportId}/comments/${body.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Comments"],
    }),

    getComments: builder.query({
      query: ({ token, reportId }) => ({
        url: `api/reports/${reportId}/comments`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetReportsQuery,
  useGetReportByIdQuery,
  useCreateReportMutation,
  useUpdateReportMutation,
  useDeleteReportMutation,
  useAddReviewerMutation,
  useRemoveReviewerMutation,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = reportsApi;
