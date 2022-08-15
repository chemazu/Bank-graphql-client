"use strict";
exports.__esModule = true;
var react_1 = require("react");
var account_schema_1 = require("../../graphql/schema/account.schema");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("../../components/Button");
var client_1 = require("@apollo/client");
var Context_1 = require("../../context/Context");
require("./style.scss");
function Register() {
    var register = react_1["default"].useContext(Context_1.Context).register;
    var fName = register.fName, setFName = register.setFName, lName = register.lName, setLName = register.setLName, email = register.email, setEmail = register.setEmail, password = register.password, setPassword = register.setPassword, showPassword = register.showPassword, setShowPassword = register.setShowPassword, phone = register.phone, setPhone = register.setPhone, type = register.type, setType = register.setType, setCurrency = register.setCurrency, setLoggedInUser = register.setLoggedInUser;
    var navigate = react_router_dom_1.useNavigate();
    var regexFinal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*., ?])(?=.*[\d]).+$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexUpper = /^(?=.*[A-Z]).+$/;
    var regexNum = /\d/;
    var regexSym = /^(?=.*[-+_!@#$%^&*., ?]).+$/;
    var _a = client_1.useMutation(account_schema_1.CREATEUSER), createUser = _a[0], _b = _a[1], data = _b.data, loading = _b.loading, error = _b.error;
    var handleSubmit = function (e) {
        e.preventDefault();
        createUser({
            variables: {
                name: fName + " " + lName,
                phone: phone,
                password: password,
                type: type,
                email: email
            },
            onCompleted: function (_a) {
                var createUser = _a.createUser;
                console.log(createUser);
                setLoggedInUser(createUser.user);
                localStorage.setItem("user", JSON.stringify(createUser.user));
                if (localStorage.getItem("user")) {
                    navigate("/dashboard");
                }
            }
        })
            .then(function (res) {
            // console.log(res, "res", res.data.createUser.token);
            // console.log(res, "res", res.data.createUser.user);
            localStorage.setItem("token", res.data.createUser.token);
            localStorage.setItem("user", JSON.stringify(res.data.createUser.user));
            setLoggedInUser(res.data.createUser.user);
            if (localStorage.getItem("token")) {
                navigate("/dashboard");
            }
        })["catch"](function (err) {
            console.log(err);
        })["finally"](function () {
            setFName("");
            setLName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setType("");
        });
    };
    react_1["default"].useEffect(function () {
        if (data && !error) {
            navigate("/dashboard");
        }
    }, [data, error, navigate]);
    return (
    // <button onClick={handleSubmit}>Register</button>
    react_1["default"].createElement("div", { className: "register" },
        react_1["default"].createElement("div", { className: "register-card" },
            react_1["default"].createElement("div", { className: "heading" },
                react_1["default"].createElement("h2", null, "Create an Account"),
                react_1["default"].createElement("p", null,
                    "Already have an account? ",
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/login" }, "Log in"))),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("div", { className: "form-row" },
                    react_1["default"].createElement("div", { className: "form-item" },
                        react_1["default"].createElement("p", null, "First Name"),
                        react_1["default"].createElement("input", { type: "text", placeholder: "Type here", value: fName, onChange: function (e) {
                                setFName(e.target.value);
                            } })),
                    react_1["default"].createElement("div", { className: "form-item" },
                        react_1["default"].createElement("p", null, "Last Name"),
                        react_1["default"].createElement("input", { type: "text", placeholder: "Type here", value: lName, onChange: function (e) {
                                setLName(e.target.value);
                            } }))),
                react_1["default"].createElement("div", { className: "form-row" },
                    react_1["default"].createElement("div", { className: "form-item" },
                        react_1["default"].createElement("p", null, "Account Type"),
                        react_1["default"].createElement("select", { onChange: function (e) {
                                setType(e.target.value);
                            } },
                            react_1["default"].createElement("option", { value: "" }, "Select"),
                            react_1["default"].createElement("option", { value: "savings" }, "Savings"),
                            react_1["default"].createElement("option", { value: "current" }, "Corporate"))),
                    react_1["default"].createElement("div", { className: "form-item" },
                        react_1["default"].createElement("p", null, "Currency"),
                        react_1["default"].createElement("select", { onChange: function (e) {
                                setCurrency(e.target.value);
                            } },
                            react_1["default"].createElement("option", { value: "" }, "Select"),
                            react_1["default"].createElement("option", { value: "" }, "NGN"),
                            react_1["default"].createElement("option", { value: "" }, "USD")))),
                react_1["default"].createElement("div", { className: "form-item" },
                    react_1["default"].createElement("p", null, "Phone Number"),
                    react_1["default"].createElement("input", { type: "text", placeholder: "Type here", value: phone, onChange: function (e) {
                            setPhone(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "form-item" },
                    react_1["default"].createElement("p", null, "Email Address"),
                    react_1["default"].createElement("input", { type: "email", placeholder: "Type here", value: email, onChange: function (e) {
                            setEmail(e.target.value);
                        } }),
                    react_1["default"].createElement("p", { className: "prompt " + (!regexEmail.test(email) && email.length > 0
                            ? "visible"
                            : "hidden"), style: { padding: "2px 0", fontSize: "80%", color: "red" } }, "Wrong email format!")),
                react_1["default"].createElement("div", { className: "form-item" },
                    react_1["default"].createElement("p", null, "Password"),
                    react_1["default"].createElement("div", { className: "input-wrapper" },
                        react_1["default"].createElement("input", { type: showPassword ? "text" : "password", placeholder: "Type your password here", value: password, onChange: function (e) {
                                setPassword(e.target.value);
                            } }),
                        react_1["default"].createElement("p", { className: "hover", onClick: function () {
                                setShowPassword(!showPassword);
                            } }, " ")),
                    password.length > 0 && (react_1["default"].createElement("div", { className: "password-validation" },
                        react_1["default"].createElement("ul", null,
                            react_1["default"].createElement("li", { className: "" + (regexUpper.test(password) ? "check" : "") }, "Contains at least one uppercase letter"),
                            react_1["default"].createElement("li", { className: "" + (password.length > 7 ? "check" : "") }, "Contains eight characters"),
                            react_1["default"].createElement("li", { className: "" + (regexNum.test(password) ? "check" : "") }, "Contains at least one number"),
                            react_1["default"].createElement("li", { className: "" + (regexSym.test(password) ? "check" : "") }, "Contains at least one symbol")))),
                    react_1["default"].createElement("p", null, "\u00A0")),
                react_1["default"].createElement("div", { className: "form-item" },
                    loading && react_1["default"].createElement("p", null, "Loading....."),
                    error && react_1["default"].createElement("p", { style: { color: "red" } }, error.message),
                    (!regexEmail.test(email) ||
                        !regexFinal.test(password) ||
                        password.length < 8 ||
                        fName.length < 1 ||
                        lName.length < 1) && (react_1["default"].createElement(Button_1["default"], { title: "Register", className: "disabled", onClick: function (e) {
                            e.preventDefault();
                            handleSubmit(e);
                        } })),
                    regexEmail.test(email) &&
                        regexFinal.test(password) &&
                        password.length > 7 &&
                        fName.length > 1 &&
                        lName.length > 1 && (react_1["default"].createElement(Button_1["default"], { title: "Register", className: "sec", onClick: function (e) {
                            handleSubmit(e);
                        } })))))));
}
exports["default"] = Register;
