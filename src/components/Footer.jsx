import React from "react";
import instagram from "../img/icon-instagram.png";
import "./footer-module.scss";

const Footer = () => {
  return (
    <ul className="footer container">
      <li>
        <ul className="footer-item">
          {" "}
          COMPANY
          <li className="footer-item-option">
            <a className="footer-item-option" href="#">
              About us
            </a>
          </li>
          <li className="footer-item-option">
            <a className="footer-item-option" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </li>
      <li>
        <ul className="footer-item">
          {" "}
          HELPFUL
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Payment & delivery
            </a>
          </li>
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Return conditions
            </a>
          </li>
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Bonus system
            </a>
          </li>
        </ul>
      </li>
      <li>
        <ul className="footer-item">
          {" "}
          TO THE BUYER
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Favorite
            </a>
          </li>
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Public offer
            </a>
          </li>
          <li className="footer-item-option">
            {" "}
            <a className="footer-item-option" href="#">
              Privacy policy
            </a>
          </li>
        </ul>
      </li>
      <li>
        <ul className="footer-item">
          CONTACTS
          <li>
            <a href="https://www.instagram.com/s.o.f.i.i.a.a/">
              <img src={instagram} />
            </a>
          </li>
          <li className="footer-item-option">+38(073) 096 36 44</li>
          <li className="footer-item-option">info@yanki.com</li>
        </ul>
      </li>
    </ul>
  );
};

export default Footer;
