import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (token) => ({
        url: `users/profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetProfileQuery } = usersApi;
