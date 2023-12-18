import React, { useState, useEffect } from "react";
import "./catalog-module.scss";
import Skeleton from "react-loading-skeleton";
import Card from "./Card";

const Catalog = () => {
  const [clothes, setClothes] = useState([]);
  const [filter, setFilter] = useState(clothes);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // Function to collect data
  const getApiData = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    if (componentMounted) {
      setClothes(await response);
      setFilter(await response);
      setLoading(false);
      console.log(filter);
    }
    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getApiData();
  }, []);

  const filterProduct = (filterItem) => {
    const updatedList = clothes.filter((x) => x.category === filterItem);
    setFilter(updatedList);
  };

  const ShowItems = () => {
    return (
      <>
        <ul className="catalog-categories">
          <li>
            <button
              onClick={() => setFilter(clothes)}
              className="catalog-categories-btn"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => filterProduct("electronics")}
              className="catalog-categories-btn"
            >
              Electronics
            </button>
          </li>
          <li>
            <button
              onClick={() => filterProduct("jewelery")}
              className="catalog-categories-btn"
            >
              Jewelery
            </button>
          </li>
          <li>
            <button
              onClick={() => filterProduct("men's clothing")}
              className="catalog-categories-btn"
            >
              Men's clothing
            </button>
          </li>
          <li>
            <button
              onClick={() => filterProduct("women's clothing")}
              className="catalog-categories-btn"
            >
              Women's clothing
            </button>
          </li>
        </ul>
        <div className="catalog-items">
          {filter.map((product) => {
            return (
              <Card
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                item = {product}
              ></Card>
            );
          })}
        </div>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="catalog-title">Catalog</h1>
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowItems />}</div>
      </div>
    </div>
  );
};

export default Catalog;
