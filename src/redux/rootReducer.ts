import { baseApi } from "./api/baseApi";
import cartReducer from './slice/cartSlice'

export const reducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   cart: cartReducer,
   
}