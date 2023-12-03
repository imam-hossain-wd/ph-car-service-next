import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSuperAdmin: build.query({
      query: (id) => ({
        url: `/super_admin/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) =>
        id ? [{ type: tagTypes.superAdmin, id: id }] : [],
    }), 
  }),
})

export const { useGetSuperAdminQuery} = userApi