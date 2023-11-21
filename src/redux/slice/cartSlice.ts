import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  availability: boolean;
  description: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const CART_STORAGE_KEY = 'cartData';

const saveCartDataToLocalStorage = (data: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
};

const loadCartDataFromLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') {
    // Check if running on the server side (during SSR)
    return [];
  }

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
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartDataToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartDataToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItemById = (state:any, itemId: number) => {
  return state.cart.items.find((item: { id: number; }) => item.id === itemId);
};

export default cartSlice.reducer;

