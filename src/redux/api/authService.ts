import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export interface IGenericResponse<T> {
  error: boolean;
  data: T;
}

export interface ITokenResponse {
  token: string;
  expiresIn: number;
}

export interface IAuthPayload {
  email: string;
  password: string;
}

export interface IProfileResponse {
  id: number;
  username: string;
  email: string;
  state: boolean;
  createdAt: string;
  updatedAt: string;
}

export const authServerApi = createApi({
  reducerPath: "authServerApi",
  baseQuery,
  endpoints: (builder) => ({
    postTokenToApi: builder.mutation<
      IGenericResponse<ITokenResponse>,
      IAuthPayload
    >({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    getProfileApi: builder.query<IGenericResponse<IProfileResponse>, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { usePostTokenToApiMutation, useGetProfileApiQuery } =
  authServerApi;
