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

export default function Dashboard() {
  const [showTransactionModal, setShowTransactionModal] = React.useState(false);
  // const [showSearchModal, setShowSearchModal] = React.useState(false);
  let [transactionType, setTransactionType] = React.useState("");
  const randomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <div className="dashboard">
      {showTransactionModal && (
        <TransactionModal
          setShowTransactionModal={setShowTransactionModal}
          transactionType={transactionType}
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
              <p>CC</p>
            </div>
            <div className="user-info">
              <p>Chandler Chisom</p>
              <p>080123456030</p>
              <p>50,000</p>
            </div>
          </div>
          <div className="transaction">
            {/* <Button title="Deposit" className=" transaction deposit" />
            <Button title="Withdraw" className=" transaction withraw" /> */}
            <button
              className="deposit"
              onClick={() => {
                setShowTransactionModal(true);
                setTransactionType("Deposit");
              }}
            >
              Deposit
            </button>

            <button
              className="withdraw"
              onClick={() => {
                setShowTransactionModal(true);
                setTransactionType("Withdraw");
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
              <p>Channel</p>
              <p>Balance</p>
            </div>
            <TableBody />
          </div>
        </div>
      </div>
    </div>
  );
}
