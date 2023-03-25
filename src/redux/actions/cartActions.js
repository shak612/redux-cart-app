import { cartActionTypes } from "../constants/action-types";

export const addProducts = (products) => {
  return {
    type: cartActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const removeProducts = (id) => {
  return {
    type: cartActionTypes.REMOVE_PRODUCT,
    payload: id,
  };
};
