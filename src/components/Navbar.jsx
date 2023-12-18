import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import cart from "../img/icon-cart.png";
import search from "../img/search-icon.png";
import "./navbar-module.scss";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-item">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="/catalog" className="navbar-item">
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-item">
            About us
          </Link>
        </li>
      </ul>
      <Link to="/">
        <img src={logo} />{" "}
      </Link>
      <ul className="navbar-items">
        <Link to="/search" className="navbar-item">
          <img src={search} />
        </Link>
        <Link to="/cart" className="navbar-item">
          <img src={cart} />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
