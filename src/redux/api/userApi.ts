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
        url: "/user", 
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }), 
    getUserById: build.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
      providesTags: (result, error, userId) =>
        userId ? [{ type: tagTypes.user, id: userId }] : [],
    }), 
  }),
})

export const { useCreateUserMutation,useGetUserQuery,useGetUserByIdQuery} = userApi