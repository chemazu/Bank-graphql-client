"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.scss");
var Dashboard_1 = require("./pages/Dashboard");
var Login_1 = require("./pages/Login");
var Context_1 = require("./context/Context");
var Register_1 = require("./pages/Register");
var Transaction_1 = require("./pages/Transaction");
var ProtectedRoutes_1 = require("./components/ProtectedRoutes");
function App() {
    return (react_1["default"].createElement(Context_1["default"], null,
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard", element: ProtectedRoutes_1["default"]({ children: react_1["default"].createElement(Dashboard_1["default"], null) }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Register_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Register_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/transaction/:id", element: react_1["default"].createElement(Transaction_1["default"], null) })))));
}
exports["default"] = App;
