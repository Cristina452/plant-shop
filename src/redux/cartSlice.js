import { createSlice } from '@reduxjs/toolkit';

// Stato iniziale del carrello
const initialState = {
  cartItems: [],
};

// Crea lo slice del carrello
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Controlla se l'item è già presente nel carrello
      const itemExists = state.cartItems.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;  // Aumenta la quantità se già presente
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Aggiungi il nuovo item con quantità 1
      }
    },
    removeFromCart: (state, action) => {
      // Rimuove l'item dal carrello
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increment: (state, action) => {
      // Incrementa la quantità di un item nel carrello
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      // Decrementa la quantità di un item nel carrello
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
