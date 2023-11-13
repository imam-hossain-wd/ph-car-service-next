import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (data) => ({
        url:"/admin/create",
        method:"POST",
        data
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
      providesTags: [tagTypes.admin],
    }),

    getAdminById: build.query({
      query: (userId) => ({
        url: `/admin/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }), 
  }),
})

export const { useCreateAdminMutation, useAdminsQuery, useGetAdminByIdQuery } = adminApi