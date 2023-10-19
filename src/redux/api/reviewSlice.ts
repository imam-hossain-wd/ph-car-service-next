import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation({
      query: (data) => ({
        url:"/review/create",
        method:"POST",
        data,
      }),
      invalidatesTags:[tagTypes.review]
    }),
    reviews: build.query({
        query: () => {
          return {
            url: "/review",
            method: "GET",
          };
        },
        providesTags: [tagTypes.review],
      }),
  }),
})

export const { useAddReviewMutation, useReviewsQuery} = reviewApi