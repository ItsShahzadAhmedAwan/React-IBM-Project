import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          subtotal: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice = state.items.reduce((sum, item) => sum + item.subtotal, 0);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.subtotal, 0);
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;
        item.subtotal = item.price * item.quantity;
        state.totalQuantity++;
        state.totalPrice = state.items.reduce((sum, item) => sum + item.subtotal, 0);
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
        item.subtotal = item.price * item.quantity;
        state.totalQuantity--;
        state.totalPrice = state.items.reduce((sum, item) => sum + item.subtotal, 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    loadCart: (state, action) => {
      const cartData = action.payload;
      if (cartData) {
        state.items = cartData.items || [];
        state.totalQuantity = cartData.totalQuantity || 0;
        state.totalPrice = cartData.totalPrice || 0;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
  loadCart,
} = cartSlice.actions;

export default cartSlice.reducer;
