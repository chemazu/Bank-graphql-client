import React from "react";
import Button from "../../components/Button";
import creditcard from "../../assests/img/creditcard.svg";
import security from "../../assests/img/security.svg";
import transfer from "../../assests/img/transfer.svg";

type Props = {
  step: number;
};

export default function SubItems({ step }: Props) {
  return (
    // <div className="sub-item-1">
    // <div className="text">
    //   <h3>We are excited to have you here</h3>
    //   <h3> Deposit checks fast with your mobile phone!</h3>
    //   <p>
    //     Save a trip to the ATM or branch Fast and easy to use Free to download
    //     and free to use
    //   </p>
    //   <Button title="Deposit" className="trans"/>
    // </div>
    // <div className="img">
    //    <img src={security} alt="icon" />
    // </div>

    // </div>
    // <div className="sub-item-2">
    //   <h3>Lets make some choices</h3>
    //   <p>you can select the most convienient way to deposit funds</p>
    //   <div className="choice-wrapper">
    //     <div className="choice-item">
    //       <img src={creditcard} alt="icon" />
    //       <p>Credit Card</p>
    //     </div>
    //     <div className="choice-item">
    //       <img src={transfer} alt="icon" />
    //       <p>Bank Transfer</p>
    //     </div>
    //   </div>
    //   <Button title="Back" />
    // </div>

    <div className="sub-item-3">
      <h3>Enter card</h3>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="Enter card number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            placeholder="Enter expiry date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            placeholder="Enter cvv"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name on card"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Amount</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Amoutn"
          />
        </div> 
        <Button title="Next" />
      </form>
    </div>
  );
}
