import React from "react";
import "./transaction-modal.scss";

export default function TransactionModal({
  setShowTransactionModal,
  transactionType,
}: {
  setShowTransactionModal: any;
  transactionType: any;
}) {
  const [amount, setAmount] = React.useState("");
  // const [description, setDescription] = React.useState("");
  const [active, setActive] = React.useState(false);

  return (
    <div className="modal">
      <div className="content">
        <h2>{transactionType}</h2>
        <div className="options">
          <p
            className={active ? "" : "active"}
            onClick={() => {
              setActive(false);
            }}
          >
            Card
          </p>
          <p
            className={!active ? "" : "active"}
            onClick={() => {
              setActive(true);
            }}
          >
            Transfer
          </p>
        </div>
        <div className="inputs">
          {active ? (
            <>
              <p>Transfer funds to  
              <span> 023853534</span></p>
            </>
          ) : (
            <input type="text" placeholder="Card Number" />
          )}
          <input type="text" placeholder="Amount" />
        </div>
        <div className="buttons">
          <button className="confirm">Confirm</button>
          <button
            className="cancel"
            onClick={() => {
              setShowTransactionModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
