import { cartActionTypes } from "../constants/action-types";
const initialState = {
  cart: [],
};
export const cartsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.ADD_PRODUCTS:
      console.log(payload);
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case cartActionTypes.REMOVE_PRODUCT:
      let filter = state.cart.filter((item) => item.id !== payload);
      return {
        ...state,
        cart: [filter],
      };
    default:
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
