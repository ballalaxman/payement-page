import cart from "../Images/shopping-cart.png";
import shippingvehicle from "../Images/shipping.svg";
import "./mainsection.css";
import Shippinginfo from "./Shippinginfo";
import Payments from "./Payments";
import Cartdetails from "./Cartdetails";

export default function Mainsection() {
  return (
    <div className="main-section">
      <div className="section-1">
        <p>Shipping and Payment</p>
        <div className="ship-img">
          <img src={cart} width="30px" height="30px" />
          <hr
            style={{
              color: "gray",
              width: "110px",
            }}
          />
          <img src={shippingvehicle} width="30px" height="30px" />
        </div>
      </div>
      <div className="section-2">
        <Shippinginfo />
        <Payments />
        <Cartdetails />
      </div>
    </div>
  );
}
