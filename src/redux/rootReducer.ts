import { baseApi } from "./api/baseApi";
import authReducer from './slice/authSlice'
import cartReducer from './slice/cartSlice';
import serviceReducer from './slice/serviceSlice';

export const reducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   cart: cartReducer,
   service: serviceReducer,
   auth: authReducer,
}



