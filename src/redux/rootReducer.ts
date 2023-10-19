import { baseApi } from "./api/baseApi";
import cartReducer from './slice/cartSlice'
import serviceReducer from './slice/serviceSlice'

export const reducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   cart: cartReducer,
   service: serviceReducer,
   
}