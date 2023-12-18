import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./new-module.scss";
import Card from "./Card";


const New = () => {
  const [clothes, setClothes] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );

    setClothes(response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="new container">
      <h1 className="new-title">New</h1>
      <div className="new-items">
        {clothes &&
          clothes
            .filter((item) => item.price < 50)
            .map((product) => (
              <Card
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                item = {product}
              ></Card>
            ))}
      </div>
    </div>
  );
};

export default New;
