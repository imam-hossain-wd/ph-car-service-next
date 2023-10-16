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
  }),
})

export const { useCreateAdminMutation } = adminApi