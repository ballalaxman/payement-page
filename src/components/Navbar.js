import React from "react";
import search from "../Images/search.png";
import cart from "../Images/shopping-cart.png";
import profile from "../Images/profile.png";
import logo1 from "../Images/logo1.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src={logo1} width="40px" height="40px" />
        <a href="#">
          <span id="e">E-</span>shop
        </a>
      </div>
      <div className="middle-section">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
      </div>
      <div className="right-section">
        <img src={search} width="40px" height="40px" />
        <img src={cart} width="40px" height="40px" />
        <img src={profile} width="40px" height="40px" />
      </div>
    </div>
  );
}
