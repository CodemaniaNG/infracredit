import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const contractApi = createApi({
  reducerPath: "contractApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Contract"],
  endpoints: (builder) => ({
    getContracts: builder.query({
      query: (token) => ({
        url: `api/contracts`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contract"],
    }),

    getContractById: builder.query({
      query: ({ id, token }) => ({
        url: `api/contracts/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contract"],
    }),

    createContract: builder.mutation({
      query: ({ token, body }) => ({
        url: `api/contracts`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    uploadContractFile: builder.mutation({
      query: ({ token, id, body }) => {
        return {
          url: `api/contracts/${id}/upload`,
          method: "PUT",
          body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Contract"],
    }),

    updateContract: builder.mutation({
      query: ({ token, id, body }) => ({
        url: `api/contracts/${id}`,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    deleteContract: builder.mutation({
      query: ({ token, id }) => ({
        url: `api/contracts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    createComment: builder.mutation({
      query: ({ token, id, body }) => ({
        url: `api/contracts/${id}/comments`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    updateComment: builder.mutation({
      query: ({ token, id, commentId, body }) => ({
        url: `api/contracts/${id}/comments/${commentId}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    getComments: builder.query({
      query: ({ token, id }) => ({
        url: `api/contracts/${id}/comments`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contract"],
    }),

    deleteComment: builder.mutation({
      query: ({ token, id, commentId }) => ({
        url: `api/contracts/${id}/comments/${commentId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    addReviewer: builder.mutation({
      query: ({ token, id, body }) => ({
        url: `api/contracts/${id}/reviewers`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    removeReviewer: builder.mutation({
      query: ({ token, id, reviewerId }) => ({
        url: `api/contracts/${id}/reviewers/${reviewerId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),

    getReviewers: builder.query({
      query: ({ token, id }) => ({
        url: `api/contracts/${id}/reviewers`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contract"],
    }),

    getChats: builder.query({
      query: ({ token, id }) => ({
        url: `api/contracts/${id}/chats`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contract"],
    }),

    createChat: builder.mutation({
      query: ({ token, id, body }) => ({
        url: `api/contracts/${id}/chats`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contract"],
    }),
  }),
});

export const {
  useGetContractsQuery,
  useGetContractByIdQuery,
  useCreateContractMutation,
  useUploadContractFileMutation,
  useUpdateContractMutation,
  useDeleteContractMutation,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
  useAddReviewerMutation,
  useRemoveReviewerMutation,
  useGetReviewersQuery,
  useGetChatsQuery,
  useCreateChatMutation,
} = contractApi;
