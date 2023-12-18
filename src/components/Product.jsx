import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./product-module.scss";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { addItem } = useCart();

  const getApiData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then((response) => response.json());

    setData(response);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="product container">
      <img className="product-img" src={data.image} />
      <div className="product-description-container">
        <p className="product-category">{data.category}</p>
        <h2 className="product-title">{data.title}</h2>
        <p className="product-description">{data.description}</p>
        <h3 className="product-price">$ {data.price}</h3>
        <div className="product-btn">
          <button className="product-btn-cart" onClick={() => addItem(data)}>
            Add to cart
          </button>
          <button className="product-btn-favorite">Add to favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
