import { IBookingData } from "@/types"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (bookingData:IBookingData) => ({
        url:"/booking/create",
        method:"POST",
        data:bookingData
      }),
      invalidatesTags:[tagTypes.booking]
    }),
    booking: build.query({
      query: () => {
        return {
          url: "/booking",
          method: "GET"
        };
      },
      providesTags: [tagTypes.booking],
    }),
  }),
})

export const { useAddBookingMutation , useBookingQuery} = bookingApi