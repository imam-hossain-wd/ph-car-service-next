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

export const { useAddBookingMutation , useBookingQuery} = bookingApi