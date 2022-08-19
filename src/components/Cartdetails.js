import React from "react";
import shippingvehicle from "../Images/shipping.svg";

export default function Cartdetails() {
  return (
    <div className="cart-details">
      <p>Your cart</p>
      <div className="cart-item">
        <div className="product-info">
          <img src="https://cdn.shopify.com/s/files/1/0752/6435/products/CLUEOFFWHITE_17_a1e58910-8fd1-4e4a-b542-c962f33aa0b4.jpg" />
          <div className="info">
            <p>T-shirt</p>
            <p>Summer vibes</p>
            <p>#261311</p>
          </div>
        </div>
        <price>$89.99</price>
      </div>
      <div className="cart-item">
        <div className="product-info">
          <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1816490/2018/4/7/11523090829974-HIGHLANDER-Men-Black-Slim-Fit-Solid-Round-Neck-T-shirt-2051523090829712-1.jpg" />
          <div className="info">
            <p>Basic Slim</p>
            <p>Fit T-Shirt</p>
            <p>#212315</p>
          </div>
        </div>
        <price>$69.99</price>
      </div>
      <div className="total">
        <p>Total Cost</p>
        <p>$159.98</p>
      </div>
      <div className="suggestion">
        <img src={shippingvehicle} width="30px" height="30px" />
        <p>You are $30.02 away from free shipping</p>
      </div>
    </div>
  );
}
