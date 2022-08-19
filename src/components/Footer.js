import Backarrow from "../Images/backarrow.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={Backarrow} width="30px" height="30px" />
        <p>Back</p>
      </div>
      <div className="footer-right">
        <button className="shopping">CONTINUE SHOPPING</button>
        <button className="payment">PROCEED TO PAYEMENT</button>
      </div>
    </div>
  );
}
