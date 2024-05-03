import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const logsApi = createApi({
  reducerPath: "logsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Logs"],
  endpoints: (builder) => ({
    getLogs: builder.query({
      query: (token) => ({
        url: `api/logs/site`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Logs"],
    }),
  }),
});

export const { useGetLogsQuery } = logsApi;
