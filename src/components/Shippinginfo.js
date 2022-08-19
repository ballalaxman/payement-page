import { Link } from "react-router-dom";

export default function Shippinginfo() {
  return (
    <div className="shipping-details">
      {!localStorage.getItem("isLogged") && (
        <div className="btns">
          <Link to="/login">
            <button className="login-btn">LOG IN</button>
          </Link>
          <button className="signup-btn">SIGN UP</button>
        </div>
      )}
      <p>Shipping information</p>
      <div className="input-details">
        <div className="left-input-details">
          <input type="mail" placeholder="E-mail" />
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <div className="left-input-details">
          <input type="mail" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code/Zip" />
          <input type="text" placeholder="Poland" />
        </div>
      </div>
    </div>
  );
}
