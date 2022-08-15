import React from "react";
import handleComma from "../../utils/dist/handleComma";
import handleDate from "../../utils/handleDate";

export default function TableBody({ transaction }: { transaction: any }) {
  const { balanceAfter, createdAt, narration, transactionType, amount } =
    transaction;

  return (
    <div className="table-body">
      <p>{handleDate(createdAt)}</p>
      <p>{narration}</p>
      <p>₦ {handleComma(amount)}</p>
      <p
        className={`${
          transactionType.charAt(0).toUpperCase() + transactionType.slice(1)
        }`}
      >
        {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
      </p>
      <p>₦ {handleComma(balanceAfter)}</p>
    </div>
  );
}
