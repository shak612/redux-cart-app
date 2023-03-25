import { combineReducers } from "redux";
import { cartsReducer } from "./cartReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  carts: cartsReducer,
});

export default reducers;
