import { IBookingData } from "@/types"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const bookingApi:any = baseApi.injectEndpoints({
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
    singleBooking: build.query({
      query: (id:string) => {
        return {
          url: `/booking/${id}`,
          method: "GET"
        };
      },
      providesTags: [tagTypes.booking],
    }),
    deleteBooking: build.mutation({
      query: (bookingId: number) => ({
        url: `/booking/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    updateBooking: build.mutation({
      query: ({ id, data }: { id: string, data: any}) => ({
        url: `/booking/${id}`,
        method: "PUT", 
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
})

export const { useAddBookingMutation , useBookingQuery, useDeleteBookingMutation, useSingleBookingQuery,useUpdateBookingMutation} = bookingApi