"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var client_2 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var react_router_dom_1 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById("root"));
var httpLink = client_2.createHttpLink({
    uri: process.env.REACT_APP_API_URL
});
var authLink = context_1.setContext(function (_, _a) {
    var headers = _a.headers;
    // get the authentication token from local storage if it exists
    var token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: __assign(__assign({}, headers), { authorization: token ? "Bearer " + token : "" })
    };
});
var client = new client_2.ApolloClient({
    // uri: "https://test-api.sytbuilder.com/graphql",
    link: authLink.concat(httpLink),
    cache: new client_2.InMemoryCache()
});
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(client_2.ApolloProvider, { client: client },
            react_1["default"].createElement(App_1["default"], null)))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
