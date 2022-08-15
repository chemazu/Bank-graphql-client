"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.getUser = exports.LOGIN = exports.CREATEUSER = void 0;
var client_1 = require("@apollo/client");
var CREATEUSER = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation Mutation(\n    $name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $type: String!\n  ) {\n    createUser(\n      name: $name\n      phone: $phone\n      email: $email\n      password: $password\n      type: $type\n    ) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n        createdAt\n      }\n      token\n    }\n  }\n"], ["\n  mutation Mutation(\n    $name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $type: String!\n  ) {\n    createUser(\n      name: $name\n      phone: $phone\n      email: $email\n      password: $password\n      type: $type\n    ) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n        createdAt\n      }\n      token\n    }\n  }\n"])));
exports.CREATEUSER = CREATEUSER;
var LOGIN = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation Mutation($phone: String!, $password: String!) {\n    login(phone: $phone, password: $password) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n      }\n      token\n    }\n  }\n"], ["\n  mutation Mutation($phone: String!, $password: String!) {\n    login(phone: $phone, password: $password) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n      }\n      token\n    }\n  }\n"])));
exports.LOGIN = LOGIN;
var getUser = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query Query($phone: String!) {\n    getUser(phone: $phone) {\n      id\n      name\n      phone\n      email\n      password\n      type\n      balance\n      currency\n      createdAt\n    }\n  }\n"], ["\n  query Query($phone: String!) {\n    getUser(phone: $phone) {\n      id\n      name\n      phone\n      email\n      password\n      type\n      balance\n      currency\n      createdAt\n    }\n  }\n"])));
exports.getUser = getUser;
var templateObject_1, templateObject_2, templateObject_3;
