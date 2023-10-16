import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (bookingData) => ({
        url:"/booking/create",
        method:"POST",
        data:bookingData
      }),
      invalidatesTags:[tagTypes.booking]
    }),
  }),
})

export const { useAddBookingMutation } = bookingApi