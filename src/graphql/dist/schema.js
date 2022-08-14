"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.UPDATEITEM = exports.DELETEITEM = exports.CREATEITEM = exports.VERIFYME = exports.GETITEMS = exports.GETME = exports.LOGINs = exports.LOGIN = exports.CREATEUSER = void 0;
var client_1 = require("@apollo/client");
var CREATEUSER = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation Mutation(\n    $name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $type: String!\n  ) {\n    createUser(\n      name: $name\n      phone: $phone\n      email: $email\n      password: $password\n      type: $type\n    ) {\n      user {\n\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n        createdAt\n      }\n      token\n    }\n  }\n"], ["\n  mutation Mutation(\n    $name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $type: String!\n  ) {\n    createUser(\n      name: $name\n      phone: $phone\n      email: $email\n      password: $password\n      type: $type\n    ) {\n      user {\n\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n        createdAt\n      }\n      token\n    }\n  }\n"])));
exports.CREATEUSER = CREATEUSER;
var LOGIN = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation Mutation($phone: String!, $password: String!) {\n    login(phone: $phone, password: $password) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n      }\n      token\n    }\n  }\n"], ["\n  mutation Mutation($phone: String!, $password: String!) {\n    login(phone: $phone, password: $password) {\n      user {\n        name\n        phone\n        email\n        password\n        type\n        balance\n        currency\n      }\n      token\n    }\n  }\n"])));
exports.LOGIN = LOGIN;
// export const createUser= gql`
//   mutation createUser(
//     $name: String!
//     $phone: String!
//     $password: String!
//     $type: String!
//     $email: String!
//   ) {
//     signup(
//       name: $name
//       phone: $phone
//       email: $email
//       password: $password
//       type: $type
//     ) {
//       # token
//       user {
//         id
//         name
//         phone
//         password
//         type
//         balance
//         currency
//         createdAt
//       }
//     }
//   }
// `;
// export const createUser = gql`
//   mutation createUser(
//     $name: String!
//     $phone: String!
//     $password: String!
//     $type: String!
//     $email: String!
//   ) {
//     createUser(name: $name, phone: $phone, password: $password, type: $type) {
//       name
//       phone
//       password
//       type
//       balance
//       currency
//       createdAt
//     }
//   }
// `;
// OLD CODE:
exports.LOGINs = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation LOGIN($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      user {\n        _id\n        uuid\n        name\n        email\n        email_verified_at\n        email_verification_token\n        created_at\n        updated_at\n      }\n      token\n    }\n  }\n"], ["\n  mutation LOGIN($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      user {\n        _id\n        uuid\n        name\n        email\n        email_verified_at\n        email_verification_token\n        created_at\n        updated_at\n      }\n      token\n    }\n  }\n"])));
exports.GETME = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query GETME {\n    getMe {\n      uuid\n      _id\n      name\n      email_verification_token\n      email_verified_at\n    }\n  }\n"], ["\n  query GETME {\n    getMe {\n      uuid\n      _id\n      name\n      email_verification_token\n      email_verified_at\n    }\n  }\n"])));
exports.GETITEMS = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query GETITEMS {\n    getItems {\n      items {\n        name\n        description\n        _id\n        uuid\n      }\n      pagination {\n        currentPage\n        maxPages\n      }\n    }\n  }\n"], ["\n  query GETITEMS {\n    getItems {\n      items {\n        name\n        description\n        _id\n        uuid\n      }\n      pagination {\n        currentPage\n        maxPages\n      }\n    }\n  }\n"])));
exports.VERIFYME = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation verifyme($token: String!) {\n    verifyMe(token: $token) {\n      email_verified_at\n      email_verification_token\n    }\n  }\n"], ["\n  mutation verifyme($token: String!) {\n    verifyMe(token: $token) {\n      email_verified_at\n      email_verification_token\n    }\n  }\n"])));
exports.CREATEITEM = client_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  mutation createItem($name: String!, $description: String) {\n    createItem(name: $name, description: $description) {\n      _id\n      created_at\n    }\n  }\n"], ["\n  mutation createItem($name: String!, $description: String) {\n    createItem(name: $name, description: $description) {\n      _id\n      created_at\n    }\n  }\n"])));
exports.DELETEITEM = client_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  mutation deleteItem($uuid: ID!) {\n    deleteItem(uuid: $uuid) {\n      _id\n      name\n    }\n  }\n"], ["\n  mutation deleteItem($uuid: ID!) {\n    deleteItem(uuid: $uuid) {\n      _id\n      name\n    }\n  }\n"])));
exports.UPDATEITEM = client_1.gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  mutation updateItem($uuid: ID!, $name: String, $description: String) {\n    updateItem(uuid: $uuid, name: $name, description: $description) {\n      _id\n      name\n    }\n  }\n"], ["\n  mutation updateItem($uuid: ID!, $name: String, $description: String) {\n    updateItem(uuid: $uuid, name: $name, description: $description) {\n      _id\n      name\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
