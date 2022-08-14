"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("../../components/Button");
var client_1 = require("@apollo/client");
var Context_1 = require("../../context/Context");
require("./style.scss");
var schema_1 = require("../../graphql/schema");
function Login() {
    var navigate = react_router_dom_1.useNavigate();
    // const [login] = useMutation(LOGIN);
    var _a = client_1.useMutation(schema_1.LOGIN), login = _a[0], data = _a[1].data;
    var loginData = react_1["default"].useContext(Context_1.Context).login;
    var email = loginData.email, setEmail = loginData.setEmail, password = loginData.password, setPassword = loginData.setPassword, showPassword = loginData.showPassword, setShowPassword = loginData.setShowPassword, setLoggedInUser = loginData.setLoggedInUser;
    var regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleSubmit = function (e) {
        e.preventDefault();
        login({
            variables: {
                phone: email,
                password: password
            }
        })
            .then(function (res) {
            localStorage.setItem("token", res.data.login.token);
            setLoggedInUser(res.data.login.user);
            localStorage.setItem("user", JSON.stringify(res.data.login.user));
            if (localStorage.getItem("token")) {
                navigate("/dashboard");
            }
        })
            .then(function () {
            setEmail("");
            setPassword("");
        });
    };
    return (
    // <button onClick={handleSubmit}>Login</button>
    react_1["default"].createElement("div", { className: "login" },
        react_1["default"].createElement("div", { className: "login-card" },
            react_1["default"].createElement("div", { className: "heading" },
                react_1["default"].createElement("h2", null, "Login"),
                react_1["default"].createElement("p", null,
                    "If you have no account ",
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/register" }, "Sign up"))),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("div", { className: "form-item" },
                    react_1["default"].createElement("p", null, "Email Address"),
                    react_1["default"].createElement("input", { placeholder: "Type here", value: email, onChange: function (e) {
                            setEmail(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "form-item" },
                    react_1["default"].createElement("p", null, "Password"),
                    react_1["default"].createElement("div", { className: "input-wrapper" },
                        react_1["default"].createElement("input", { type: showPassword ? "text" : "password", placeholder: "Type your password here", value: password, onChange: function (e) {
                                setPassword(e.target.value);
                            } }),
                        react_1["default"].createElement("p", { className: "hover", onClick: function () {
                                setShowPassword(!showPassword);
                            } }, " ")),
                    react_1["default"].createElement("p", null, "\u00A0")),
                react_1["default"].createElement("div", { className: "form-item" },
                    email.length > 1 && (react_1["default"].createElement(Button_1["default"], { title: "Log in", className: "sec", onClick: function (e) {
                            handleSubmit(e);
                        } })),
                    email.length < 1 && (react_1["default"].createElement(Button_1["default"], { title: "Log in", className: "disabled", onClick: function (e) {
                            e.preventDefault();
                        } })),
                    react_1["default"].createElement("p", null, "\u00A0"))))));
}
exports["default"] = Login;
