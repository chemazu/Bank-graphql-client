import React from "react";
import "./transaction-modal.scss";
import { useMutation } from "@apollo/client";
import { CREATE_TRANSACTION } from "../../graphql/schema/transaction.schema";

export default function TransactionModal({
  setShowTransactionModal,
  transactionType,
  phone,
  accountType,
}: {
  setShowTransactionModal: any;
  transactionType: any;
  phone: any;
  accountType: any;
}) {
  const [amount, setAmount] = React.useState("");
  const [narration, setNarration] = React.useState("");

  // const [description, setDescription] = React.useState("");
  const [createTransaction] =
    useMutation(CREATE_TRANSACTION);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTransaction({
      variables: {
        amount:10000,
        transactionType,
        narration,
        phone,
      },
      onCompleted: ({ createTransaction }) => {
        setAmount("");
        // setDescription("");
        setShowTransactionModal(false);
      },
    });
  };

  return (
    <div className="modal">
      <div className="content">
        <h2>{transactionType}</h2>
        <div className="inputs">
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Narration"
            value={narration}
            onChange={(e) => {
              setNarration(e.target.value);
            }}
          />
        </div>
        <div className="buttons">
          <button className="confirm" onClick={handleSubmit}>
            Confirm
          </button>
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
