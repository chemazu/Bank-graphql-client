"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GET_TRANSACTIONS = exports.CREATE_TRANSACTION = void 0;
var client_1 = require("@apollo/client");
var CREATE_TRANSACTION = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation Mutation(\n    $phone: String!\n    $amount: Int!\n    $narration: String!\n    $transactionType: String!\n  ) {\n    createTransaction(\n      phone: $phone\n      amount: $amount\n      narration: $narration\n      transactionType: $transactionType\n    ) {\n      phone\n      id\n      amount\n      narration\n      transactionType\n      userId\n      balanceAfter\n      createdAt\n    }\n  }\n"], ["\n  mutation Mutation(\n    $phone: String!\n    $amount: Int!\n    $narration: String!\n    $transactionType: String!\n  ) {\n    createTransaction(\n      phone: $phone\n      amount: $amount\n      narration: $narration\n      transactionType: $transactionType\n    ) {\n      phone\n      id\n      amount\n      narration\n      transactionType\n      userId\n      balanceAfter\n      createdAt\n    }\n  }\n"])));
exports.CREATE_TRANSACTION = CREATE_TRANSACTION;
var GET_TRANSACTIONS = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query Query($phone: String!) {\n    getTransactions(phone: $phone) {\n      id\n      phone\n      amount\n      narration\n      transactionType\n      userId\n      balanceAfter\n      createdAt\n    }\n  }\n"], ["\n  query Query($phone: String!) {\n    getTransactions(phone: $phone) {\n      id\n      phone\n      amount\n      narration\n      transactionType\n      userId\n      balanceAfter\n      createdAt\n    }\n  }\n"])));
exports.GET_TRANSACTIONS = GET_TRANSACTIONS;
var templateObject_1, templateObject_2;
