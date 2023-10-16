import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  availability: Boolean;
  description: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};


const CART_STORAGE_KEY = 'cartData';

const saveCartDataToLocalStorage = (data:any) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
};


const loadCartDataFromLocalStorage = () => {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
};


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: loadCartDataFromLocalStorage(),
    },
    reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
        saveCartDataToLocalStorage(state.items); 
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item:any) => item.id !== action.payload);
        saveCartDataToLocalStorage(state.items); 
      },
      clearCart: (state) => {
        state.items = [];
        saveCartDataToLocalStorage(state.items); 
      },
    },
  });

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
