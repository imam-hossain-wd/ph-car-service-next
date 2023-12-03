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
      query: () => {
        return {
          url: "/admin",
          method: "GET",
        };
      },
      providesTags: [tagTypes.admin],
    }),

    getAdminById: build.query({
      query: (adminId) => ({
        url: `/admin/${adminId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }), 
  }),
})

export const { useCreateAdminMutation, useAdminsQuery, useGetAdminByIdQuery } = adminApi