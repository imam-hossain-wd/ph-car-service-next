import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogIn: build.mutation({
      query: (logIndata) => ({
        url:"/auth/login",
        method:"POST",
        data:logIndata
      }),
      invalidatesTags:[tagTypes.user]
    }),
  }),
})

export const { useUserLogInMutation } = authApi