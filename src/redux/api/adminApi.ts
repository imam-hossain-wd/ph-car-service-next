import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (logIndata) => ({
        url:"/admin/create",
        method:"POST",
        data:logIndata
      }),
      invalidatesTags:[tagTypes.admin]
    }),
    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/admin",
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
      providesTags: [tagTypes.admin],
    }),
  }),
})

export const { useCreateAdminMutation, useAdminsQuery } = adminApi