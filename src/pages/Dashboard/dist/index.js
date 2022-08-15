"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.scss");
var left_menu_item_1 = require("./left-menu-item");
var home_icon_svg_1 = require("../../assests/img/home-icon.svg");
var profile_svg_1 = require("../../assests/img/profile.svg");
var settings_svg_1 = require("../../assests/img/settings.svg");
var logout_svg_1 = require("../../assests/img/logout.svg");
var transaction_svg_1 = require("../../assests/img/transaction.svg");
var search_icon_svg_1 = require("../../assests/img/search-icon.svg");
var table_body_1 = require("./table-body");
var transaction_modal_1 = require("./transaction-modal");
var account_schema_1 = require("../../graphql/schema/account.schema");
var transaction_schema_1 = require("../../graphql/schema/transaction.schema");
var handleComma_1 = require("../../utils/dist/handleComma");
var client_1 = require("@apollo/client");
function Dashboard() {
    var _a = react_1["default"].useState(false), showTransactionModal = _a[0], setShowTransactionModal = _a[1];
    var _b = react_1["default"].useState(""), transactionType = _b[0], setTransactionType = _b[1];
    var randomColor = function () {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    };
    var user = JSON.parse(localStorage.getItem("user") || "{}");
    var phone = user.phone, name = user.name, currency = user.currency, accountType = user.accountType;
    var _c = client_1.useQuery(account_schema_1.getUser, {
        variables: {
            phone: phone
        }
    }), loading = _c.loading, error = _c.error, data = _c.data;
    // let { name, balance, currency, accountType } = data;
    console.log(data);
    var _d = client_1.useQuery(transaction_schema_1.GET_TRANSACTIONS, {
        variables: {
            phone: phone
        }
    }), transactionsLoading = _d.loading, transactionError = _d.error, transactions = _d.data;
    var nameArr = name.split(" ");
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement("div", null, "Loading")) : (react_1["default"].createElement("div", { className: "dashboard" },
        showTransactionModal && (react_1["default"].createElement(transaction_modal_1["default"], { setShowTransactionModal: setShowTransactionModal, transactionType: transactionType, phone: phone, accountType: accountType })),
        react_1["default"].createElement("div", { className: "left" },
            react_1["default"].createElement("div", { className: "left-menu" },
                react_1["default"].createElement(left_menu_item_1["default"], { title: "Home", img: home_icon_svg_1["default"] }),
                react_1["default"].createElement(left_menu_item_1["default"], { title: "Profile", img: profile_svg_1["default"] }),
                react_1["default"].createElement(left_menu_item_1["default"], { title: "Settings", img: settings_svg_1["default"] }),
                react_1["default"].createElement(left_menu_item_1["default"], { title: "Transactions", img: transaction_svg_1["default"] })),
            react_1["default"].createElement("div", { className: "log-out" },
                react_1["default"].createElement(left_menu_item_1["default"], { title: "Logout", img: logout_svg_1["default"] }))),
        react_1["default"].createElement("div", { className: "right" },
            react_1["default"].createElement("div", { className: "top" },
                react_1["default"].createElement("div", { className: "user-details" },
                    react_1["default"].createElement("div", { className: "user-initials", style: {
                            backgroundColor: randomColor()
                        } },
                        react_1["default"].createElement("p", null,
                            nameArr[0].charAt(0),
                            nameArr[1].charAt(0))),
                    react_1["default"].createElement("div", { className: "user-info" },
                        react_1["default"].createElement("p", null, name),
                        react_1["default"].createElement("p", null, phone),
                        react_1["default"].createElement("p", null,
                            currency,
                            " ",
                            handleComma_1["default"](data.getUser.balance)))),
                react_1["default"].createElement("div", { className: "transaction" },
                    react_1["default"].createElement("button", { className: "deposit", onClick: function () {
                            setShowTransactionModal(true);
                            setTransactionType("Credit");
                        } }, "Deposit"),
                    react_1["default"].createElement("button", { className: "withdraw", onClick: function () {
                            setShowTransactionModal(true);
                            setTransactionType("Debit");
                        } }, "Widthdraw"))),
            react_1["default"].createElement("div", { className: "bottom" },
                react_1["default"].createElement("h2", { className: "heading-text" }, "Transaction History"),
                react_1["default"].createElement("div", { className: "search-bar" },
                    react_1["default"].createElement("input", { type: "text", placeholder: "Search" }),
                    react_1["default"].createElement("div", { className: "search-icon" },
                        react_1["default"].createElement("img", { src: search_icon_svg_1["default"], alt: "search" }))),
                react_1["default"].createElement("div", { className: "transaction-history" },
                    react_1["default"].createElement("div", { className: "table-heading" },
                        react_1["default"].createElement("p", null, "Date"),
                        react_1["default"].createElement("p", null, "Description"),
                        react_1["default"].createElement("p", null, "Amount"),
                        react_1["default"].createElement("p", null, "Type"),
                        react_1["default"].createElement("p", null, "Balance After")),
                    transactionsLoading ? (react_1["default"].createElement(react_1["default"].Fragment, null, "Loading....")) : (react_1["default"].createElement(react_1["default"].Fragment, null, transactions.getTransactions.slice(0).reverse().map(function (transaction, index) {
                        return (react_1["default"].createElement(table_body_1["default"], { key: index, transaction: transaction }));
                    }))))))))));
}
exports["default"] = Dashboard;
