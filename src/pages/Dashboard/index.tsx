import React from "react";
import "./style.scss";
import LeftMenuItem from "./left-menu-item";
import homesvg from "../../assests/img/home-icon.svg";
import profile from "../../assests/img/profile.svg";
import settings from "../../assests/img/settings.svg";
import logout from "../../assests/img/logout.svg";
import transaction from "../../assests/img/transaction.svg";
import searchicon from "../../assests/img/search-icon.svg";
import TableBody from "./table-body";
import TransactionModal from "./transaction-modal";
import { Context } from "../../context/Context";
import { ContextType } from "../../@types/context.d";
import { getUser } from "../../graphql/schema/account.schema";
import { GET_TRANSACTIONS } from "../../graphql/schema/transaction.schema";
import handleComma from "../../utils/dist/handleComma";

import { useQuery } from "@apollo/client";

export default function Dashboard() {
  const [showTransactionModal, setShowTransactionModal] = React.useState(false);

  let [transactionType, setTransactionType] = React.useState("");
  const randomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  let { phone, name, currency, accountType } = user;
  const { loading, error, data } = useQuery(getUser, {
    variables: {
      phone,
    },
  });
  // let { name, balance, currency, accountType } = data;
  console.log(data);
  const {
    loading: transactionsLoading,
    error: transactionError,
    data: transactions,
  } = useQuery(GET_TRANSACTIONS, {
    variables: {
      phone,
    },
  });
  let nameArr = name.split(" ");
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="dashboard">
          {showTransactionModal && (
            <TransactionModal
              setShowTransactionModal={setShowTransactionModal}
              transactionType={transactionType}
              phone={phone}
              accountType={accountType}
            />
          )}
          <div className="left">
            <div className="left-menu">
              <LeftMenuItem title="Home" img={homesvg} />
              <LeftMenuItem title="Profile" img={profile} />
              <LeftMenuItem title="Settings" img={settings} />
              <LeftMenuItem title="Transactions" img={transaction} />
            </div>
            <div className="log-out">
              <LeftMenuItem title="Logout" img={logout} />
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="user-details">
                <div
                  className="user-initials"
                  style={{
                    backgroundColor: randomColor(),
                  }}
                >
                  <p>
                    {nameArr[0].charAt(0)}
                    {nameArr[1].charAt(0)}
                  </p>
                </div>
                <div className="user-info">
                  <p>{name}</p>
                  <p>{phone}</p>
                  <p>
                    {currency} {handleComma(data.getUser.balance)}
                  </p>
                </div>
              </div>
              <div className="transaction">
                {/* <Button title="Deposit" className=" transaction deposit" />
        <Button title="Withdraw" className=" transaction withraw" /> */}
                <button
                  className="deposit"
                  onClick={() => {
                    setShowTransactionModal(true);
                    setTransactionType("Credit");
                  }}
                >
                  Deposit
                </button>

                <button
                  className="withdraw"
                  onClick={() => {
                    setShowTransactionModal(true);
                    setTransactionType("Debit");
                  }}
                >
                  Widthdraw
                </button>
              </div>
            </div>
            <div className="bottom">
              <h2 className="heading-text">Transaction History</h2>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                  <img src={searchicon} alt="search" />
                </div>
              </div>
              <div className="transaction-history">
                <div className="table-heading">
                  <p>Date</p>
                  <p>Description</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>Balance After</p>
                </div>
                {transactionsLoading ? (
                  <>Loading....</>
                ) : (
                  <>
                    {transactions.getTransactions.slice(0).reverse().map(
                      (transaction: any, index: number) => {
                        return (
                          <TableBody key={index} transaction={transaction} />
                        );
                      }
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
