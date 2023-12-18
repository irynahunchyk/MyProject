import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Card = (props) => {
  const { addItem } = useCart();
  return (
    <div className="card-item">
      <Link  to={`/catalog/${props.id}`} className="card-text">
        <img src={props.image} class="card-img" />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">${props.price}</p>
      </Link>
      <button
          type="button"
          className="card-btn"
          onClick={() => addItem(props.item)}
        >
          Add to cart
        </button>
    </div>
  );
};

export default Card;
