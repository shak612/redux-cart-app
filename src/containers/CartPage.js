import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProducts } from "../redux/actions/cartActions";

export default function CartPage() {
  const [state, setState] = useState([]);
  const [qty, setQty] = useState(1);
  let cartItems = useSelector((state) => state.carts.cart);
  let dispatch = useDispatch();

  function removeCart(id) {
    dispatch(removeProducts(id));
  }
  function qtyFunc(id, op) {
    const find = state.find((item) => item.id === id);
    if (op === "inc" && find.id === id) {
      setQty((prev) => prev + 1);
    } else {
      setQty((prev) => prev - 1);
    }
  }
  useEffect(() => {
    setState(cartItems);
  }, [cartItems.length]);
  console.log(cartItems);
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="p-2 mt-5">
            <h4>Shopping cart</h4>
          </div>
          {state && state.length > 0 ? (
            state.map(({ image, price, category, id }) => {
              return (
                <div
                  key={id}
                  className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded"
                >
                  <div className="mr-1">
                    <img className="rounded" src={image} width="70" />
                  </div>
                  <div className="d-flex flex-column align-items-center product-details">
                    <span className="font-weight-bold">{category}</span>
                    <div className="d-flex flex-row product-desc">
                      <div className="size mr-1">
                        <span className="text-grey">Size:</span>
                        <span className="font-weight-bold">&nbsp;M</span>
                      </div>
                      <div className="color">
                        <span className="text-grey">Color:</span>
                        <span className="font-weight-bold">&nbsp;Grey</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center qty">
                    <button
                      className="btn btn-primary"
                      onClick={() => qtyFunc(id, "dec")}
                    >
                      -
                    </button>
                    <h5 className="text-grey mt-1 mr-1 ml-1">{qty}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => qtyFunc(id, "inc")}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <h5 className="text-grey">{price}</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => removeCart(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Cart Not Found</h1>
          )}
          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <input
              type="text"
              className="form-control border-0 gift-card"
              placeholder="discount code/gift card"
            />
            <button
              className="btn btn-outline-warning btn-sm ml-2"
              type="button"
            >
              Apply
            </button>
          </div>
          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <button
              className="btn btn-warning btn-block btn-lg ml-2 pay-button"
              type="button"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
