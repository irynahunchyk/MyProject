import React from "react";
import { useCart } from "react-use-cart";
import "./cart-module.scss";
import bin from "../img/icon-bin.png"

const Cart = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();
  if (isEmpty) return <h1 className="cart-title cart-empty container text-center ">Your cart is empty</h1>;
  return (
    <div className="cart container">
        <h5 className="cart-title">
          Your order:
        </h5>
        <table className="table table-light table-hover m-0">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className="cart-item">
                  <td className="cart-item-img">
                    <img className="col-4" src={item.image} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button className="btn" onClick={() => removeItem(item.id)}>
                      <img src={bin} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      <div className="cart-text-container">
        <h2 className="cart-price">Total price: ${cartTotal}</h2>
        <button className="cart-btn-clear" onClick={() => emptyCart()}>
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
