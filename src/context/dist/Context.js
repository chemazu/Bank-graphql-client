"use strict";
exports.__esModule = true;
exports.Context = void 0;
var react_1 = require("react");
exports.Context = react_1["default"].createContext(null);
function Provider(_a) {
    var children = _a.children;
    var _b = react_1["default"].useState(""), fName = _b[0], setFName = _b[1];
    var _c = react_1["default"].useState(""), lName = _c[0], setLName = _c[1];
    var _d = react_1["default"].useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1["default"].useState(""), password = _e[0], setPassword = _e[1];
    var _f = react_1["default"].useState(false), showPassword = _f[0], setShowPassword = _f[1];
    var _g = react_1["default"].useState(false), loginBtn = _g[0], setLoginBtn = _g[1];
    var _h = react_1["default"].useState({ noteName: "", noteDescription: "" }), note = _h[0], setNote = _h[1];
    var _j = react_1["default"].useState(false), showCreate = _j[0], setShowCreate = _j[1];
    var _k = react_1["default"].useState({ status: false, uuid: "" }), showEdit = _k[0], setShowEdit = _k[1];
    var _l = react_1["default"].useState(false), confirmVerified = _l[0], setConfirmVerified = _l[1];
    var _m = react_1["default"].useState(""), type = _m[0], setType = _m[1];
    var _o = react_1["default"].useState("USD"), currency = _o[0], setCurrency = _o[1];
    var _p = react_1["default"].useState(""), phone = _p[0], setPhone = _p[1];
    var _q = react_1["default"].useState({}), loggedInUser = _q[0], setLoggedInUser = _q[1];
    var register = {
        fName: fName,
        setFName: setFName,
        lName: lName,
        setLName: setLName,
        email: email,
        setEmail: setEmail,
        phone: phone,
        setPhone: setPhone,
        password: password,
        setPassword: setPassword,
        showPassword: showPassword,
        setShowPassword: setShowPassword,
        type: type,
        setType: setType,
        currency: currency,
        setCurrency: setCurrency,
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser
    };
    var login = {
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
        showPassword: showPassword,
        setShowPassword: setShowPassword,
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser
    };
    var dashboard = {
        loginBtn: loginBtn,
        setLoginBtn: setLoginBtn,
        note: note,
        setNote: setNote,
        showCreate: showCreate,
        setShowCreate: setShowCreate,
        showEdit: showEdit,
        setShowEdit: setShowEdit,
        confirmVerified: confirmVerified,
        setConfirmVerified: setConfirmVerified,
        loggedInUser: loggedInUser
    };
    // React.useEffect(() => {
    //   if (!localStorage.getItem("token")) {
    //     setLoggedInUser({});
    //   }
    // },[]);
    var value = { register: register, login: login, dashboard: dashboard };
    return react_1["default"].createElement(exports.Context.Provider, { value: value }, children);
}
exports["default"] = Provider;
