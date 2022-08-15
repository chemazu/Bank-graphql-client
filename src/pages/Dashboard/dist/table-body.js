"use strict";
exports.__esModule = true;
var react_1 = require("react");
var handleComma_1 = require("../../utils/dist/handleComma");
var handleDate_1 = require("../../utils/handleDate");
function TableBody(_a) {
    var transaction = _a.transaction;
    var balanceAfter = transaction.balanceAfter, createdAt = transaction.createdAt, narration = transaction.narration, transactionType = transaction.transactionType, amount = transaction.amount;
    return (react_1["default"].createElement("div", { className: "table-body" },
        react_1["default"].createElement("p", null, handleDate_1["default"](createdAt)),
        react_1["default"].createElement("p", null, narration),
        react_1["default"].createElement("p", null,
            "\u20A6 ",
            handleComma_1["default"](amount)),
        react_1["default"].createElement("p", { className: "" + (transactionType.charAt(0).toUpperCase() + transactionType.slice(1)) }, transactionType.charAt(0).toUpperCase() + transactionType.slice(1)),
        react_1["default"].createElement("p", null,
            "\u20A6 ",
            handleComma_1["default"](balanceAfter))));
}
exports["default"] = TableBody;
