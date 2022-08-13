import React from "react";
import { useParams } from "react-router-dom";
import SubItems from "./sub-items";

export default function Transaction() {
  let { id } = useParams();


  return (
    <div className="transaction">
      <p>{id?.toUpperCase() === "WITHDRAW" ? "Withdraw" : "Deposit"}</p>
      <div className="action-bar">
        <div className="step-bar">
          <div className="step-bar-item">
            <p>1</p>
          </div>
        </div>
        <div className="action-bar-display">
          <SubItems step={1}/>
        </div>
      </div>
    </div>
  );
}
