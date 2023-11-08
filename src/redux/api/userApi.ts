import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url:"/user/create",
        method:"POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    getUser: build.query({
      query: () => ({
        url: "/user", // Replace with the actual URL for fetching users
        method: "GET",
      }),
      providesTags: [tagTypes.user], // Optional: Use tags if necessary
    }),  
  }),
})

export const { useCreateUserMutation,useGetUserQuery } = userApi