"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./transaction-modal.scss");
var client_1 = require("@apollo/client");
var transaction_schema_1 = require("../../graphql/schema/transaction.schema");
function TransactionModal(_a) {
    var setShowTransactionModal = _a.setShowTransactionModal, transactionType = _a.transactionType, phone = _a.phone, accountType = _a.accountType;
    var _b = react_1["default"].useState(""), amount = _b[0], setAmount = _b[1];
    var _c = react_1["default"].useState(""), narration = _c[0], setNarration = _c[1];
    // const [description, setDescription] = React.useState("");
    var createTransaction = client_1.useMutation(transaction_schema_1.CREATE_TRANSACTION)[0];
    var handleSubmit = function (e) {
        e.preventDefault();
        createTransaction({
            variables: {
                amount: 10000,
                transactionType: transactionType,
                narration: narration,
                phone: phone
            },
            onCompleted: function (_a) {
                var createTransaction = _a.createTransaction;
                setAmount("");
                // setDescription("");
                setShowTransactionModal(false);
            }
        });
    };
    return (react_1["default"].createElement("div", { className: "modal" },
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("h2", null, transactionType),
            react_1["default"].createElement("div", { className: "inputs" },
                react_1["default"].createElement("input", { type: "text", placeholder: "Amount", value: amount, onChange: function (e) {
                        setAmount(e.target.value);
                    } }),
                react_1["default"].createElement("input", { type: "text", placeholder: "Narration", value: narration, onChange: function (e) {
                        setNarration(e.target.value);
                    } })),
            react_1["default"].createElement("div", { className: "buttons" },
                react_1["default"].createElement("button", { className: "confirm", onClick: handleSubmit }, "Confirm"),
                react_1["default"].createElement("button", { className: "cancel", onClick: function () {
                        setShowTransactionModal(false);
                    } }, "Cancel")))));
}
exports["default"] = TransactionModal;
