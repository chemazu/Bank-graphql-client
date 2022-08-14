"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function ProtectedRoutes(_a) {
    var children = _a.children;
    var getLoggedIn = function () {
        var token = localStorage.getItem("token") || null;
        if (token == null) {
            return false;
        }
        return true;
    };
    return getLoggedIn() ? children : react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login", replace: true });
}
exports["default"] = ProtectedRoutes;
