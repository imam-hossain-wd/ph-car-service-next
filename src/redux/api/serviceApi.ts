import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
      query: ({ searchTerm }: Record<string, any>) => {
        return {
          url: `/service/?searchTerm=${searchTerm}`,
          method: "GET",
          params: searchTerm
        };
      },
      providesTags: [tagTypes.service],
    }),
  }),
})

export const {useGetServicesQuery } = userApi