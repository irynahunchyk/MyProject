import React, { useState, useEffect } from "react";
import "./searchProducts-module.scss";
import Card from "./Card";

const SearchProducts = () => {
  const [clothes, setClothes] = useState([]);
  const [filter, setFilter] = useState("");

  const getApiData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    setClothes(await response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <form class="d-flex col-5 container search-input" role="search">
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button class="catalog-categories-btn" type="submit">
          Search
        </button>
      </form>
      <div className="catalog-items container">
        {clothes
          .filter((item) =>
            item.title.toLowerCase().includes(filter.toLowerCase())
          )
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
    </>
  );
};

export default SearchProducts;
