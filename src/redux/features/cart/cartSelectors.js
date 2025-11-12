export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectCartItemById = (state, id) =>
  state.cart.items.find(item => item.id === id);
