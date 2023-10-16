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
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/user",
          method: "GET",
          params: arg,
        };
      },
      // transformResponse: (response: IAdmin[], meta: IMeta) => {
      //   return {
      //     admins: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.user],
    }),
  }),
})

export const { useCreateUserMutation,useUsersQuery } = userApi